import {Component, OnInit, OnChanges,Input} from 'angular2/core';
import {Config} from '../../app-conf'

declare var d3: any;
declare var $: any;
@Component({
	inputs:['chartData'],
	selector: 'bar-chart',
	template: `<div class='chart-container'><div id='negativeChart'></div></div>

	`
})

export class BarChartComponent implements OnInit,OnChanges{

	@Input() chartData;
	private config;

	constructor(private conf:Config){
		this.config = conf
	}
	ngOnChanges(changes){
		if(changes.chartData.previousValue != changes.chartData.currentValue){

			// console.log(this.chartData)
			this.renderBarChart(changes.chartData.currentValue)
		}
	}
	

	make_x_axis(x, height) { 
    return d3.svg.axis()
        .scale(x)
		.orient("bottom")
		.ticks(5)
		.tickSize(-height, 0, 0)
		.tickFormat("")
	}

	make_y_axis(y) {
    return d3.svg.axis()
        .scale(y)
        .orient("left")
        .ticks(5)
	}

	renderBarChart(data){
		if(data.length ==0){
			return
		}

		d3.selectAll(".bar-chart-warpper svg").remove()
		// console.log('barchart data')
		// console.log(data)
		var barList= data[0].total.length
		var body = d3.select(".bar-chart-warpper")
		var maxY = d3.max(data, function(d) {
            return d3.max(d.total, function(i) {
            	if(i){
            		return parseFloat(i.acctTotalCredit);
            	}
               
            });
        });
		var minY = -(d3.max(data, function(d) {
            return d3.max(d.total, function(i) {
            if(i){
                return parseFloat(i.acctTotalDebit);
                }
            });
        }))

		var margin = { top: 10, right: 10, bottom: 0, left: 50 },
			width = 400 - margin.left - margin.right,
			height = 200 - margin.top - margin.bottom;

		// Parse the date / time
		var parseDate = d3.time.format("%m%Y").parse;

		var x = d3.scale.ordinal().rangeRoundBands([0, width], .05);

		var y = d3.scale.linear().range([height - 20, 0]);

		var make_x_axis= function(){
			return d3.svg.axis()
				.scale(x)
				.orient("bottom")
				.ticks(5)
				.tickSize(-height, 0, 0)
				.tickFormat("")
		};
		var make_y_axis= function() {
			return d3.svg.axis()
				.scale(y)
				.orient("left")
				.ticks(5)
		}
		var start = data[0].date
		var endDate = data[data.length-1].date
		var xDomain = [new Date(start.substr(2,4)+'-'+start.substr(0,2)), d3.time.month.offset(new Date(endDate.substr(2,4)+'-'+endDate.substr(0,2)),1)];
		var xScaleDummy = d3.time.scale()
            .domain(xDomain)
            .rangeRound([0, width]);

		var xAxisDummy = d3.svg.axis()
            .scale(xScaleDummy)
            .orient('bottom')

            .ticks(d3.time.months, 1)
            .tickFormat(d3.time.format('%b %y'))
            .tickSize(0)
            .tickPadding(8);

		var xAxis = d3.svg.axis()
			.scale(x)
			.orient("bottom")
			// .innerTickSize(-height)
			// .outerTickSize(0)
			.ticks(d3.time.months, 3)
            .tickFormat(d3.time.format('%d %b %y'))
            .tickSize(0)
            .tickPadding(8);

		var yAxis = d3.svg.axis()
			.scale(y)
			.tickFormat(function(d){
				 var prefix = d3.formatPrefix(d);
        		return prefix.scale(d) + prefix.symbol;
			})
			.orient("left")
			// .innerTickSize(-width)
			// .outerTickSize(0)
			// .tickPadding(8)

		var svg = body.append("svg")
			.attr("width", width + margin.left + margin.right)
			.attr("height", height + margin.top + margin.bottom)
			.append("g")
			.attr("transform",
			"translate(" + margin.left + "," + margin.top + ")");


		var line = {
			start: { x: 2, y: 3, type: 'start' },
			finish: { x: 14, y: 6, type: 'finish' }
		};

		var g = svg.append('g');

		// var lowerBack = body.append('div')
		// .attr('class','transparent-wrapper')
						
		function createsGrid(data) {
			      
			}
		g.append('line')
			.style('stroke', 'blue')
			.attr('class', 'line')
			.attr('x1', x(line.start.x))
			.attr('y1', y(line.start.y))
			.attr('x2', x(line.finish.x))
			.attr('y2', y(line.finish.y));

		data.forEach(function(d) {
			d.date = parseDate(d.date);
		});

		x.domain(data.map(function(d) { return d.date; }));
		y.domain([minY, maxY]);

		var accounts = svg.selectAll('.account').
		data(data).
		enter().
		append('g').
		attr('class', 'account').
		attr('transform', function(d, i) {
			
        });
        var colors = this.config.chartColors;
        var div = d3.select("body")
        .append("div") 
        .attr("class", "toolTip");


        accounts.selectAll('rect').data(function(d) {
            var arr = [];
            for (var i = 0; i < d.total.length; i++) {
            if(d.total[i]){
            	d.total[i].date = d.date;
                arr.push(d.total[i]);
            }
                
            }
            return arr;
        }).enter().append('rect').attr('width', function(d) {
            // return x.rangeBand() / barList
            return (width/18)
        })
            .attr('y', function(d, i) {
				return y(d.acctTotalCredit);
			})
            .attr('x', function(d, i) {
				return x(d.date) + i * (width/18);
			}).attr("height", function(d) {
				var debits = parseFloat(d.acctTotalCredit)

				if(parseFloat(d.acctTotalCredit)==0){
					return Math.abs(y(-d.acctTotalDebit)-y(0))
				}
				if(parseFloat(d.acctTotalDebit)==0){
					return Math.abs(y(d.acctTotalCredit)-y(0))
				}
				return Math.abs(y(parseFloat(d.acctTotalDebit) + parseFloat(d.acctTotalCredit))-y(0));

			}).attr('fill', function(d, i) {
				return colors[i];
			}).on('mouseover', function(d){
				var mouseVal = d3.mouse(this);
		        div.style("display","none");
		        div
		        .html("Debits: "+parseFloat(d.acctTotalDebit).toString().toLocaleString()+"<br>"+'Credits: '+parseFloat(d.acctTotalCredit).toString().toLocaleString())
		        .style("left", (d3.event.pageX+12) + "px")
		        .style("top", (d3.event.pageY-10) + "px")
		        .style("opacity", 1)
		        .style("display","block");
			})
			.on('mouseout',function(d){
				div.html(" ").style("display","none");
			});

		var xAxisTransform = height;
        if (minY < 0 && 0 < maxY) {
            xAxisTransform = ((height - margin.top - 10) * (maxY / (maxY - minY)));
        }

		svg.append("g")
			.attr("class", "x axis")
			.attr("transform", "translate(0," + xAxisTransform + ")")
			.call(xAxisDummy)
			.selectAll("text")
			.style("text-anchor", "end")
			.attr("dx", "-.8em")
		svg.append("g")
			.attr("class", "y axis")
			.call(yAxis)
		var $xAxis = $('.x.axis')
		var top = $xAxis.position().top

		var transHeight = $('.consildatedflow-section').height() - top
		// var lowerBack = body.append('div')
		// .attr('class','transparent-wrapper')
		// .style('top',top+'px')
		// $('.transparent-wrapper').css('height',transHeight)


		 
	}

	ngOnInit() {
		
		


	}
}