import {Component, OnInit, Input,OnChanges} from 'angular2/core';
import {Config} from '../../app-conf'
declare var d3: any;
@Component({
	inputs: ['chartData','type','accIndex'],
	selector:'line-chart',
	template: `<div class="chart-container"></div>
		`
	
})


export class LineChartComponent implements OnInit,OnChanges {
	@Input() chartData;
	@Input() splineData;
	@Input() type
	@Input() accIndex;
	private config;

	constructor(private conf:Config){
		this.config = conf
	}
	ngOnChanges(changes){
		if(changes.chartData && changes.chartData.currentValue && changes.chartData.previousValue != changes.chartData.currentValue ){
				if(this.type=='points'){
						this.renderPointsChart()
					}
		}
		if(changes.splineData && changes.splineData.currentValue && changes.splineData.previousValue != changes.splineData.currentValue){
				if(this.type=='spline-inv' || this.type=='spline-join'){
						this.renderSplineChart()
					}
				}
	}

	renderPointsChart(){
		d3.selectAll('.points-chart svg').remove()
		var data = this.chartData
		if(data.length==0){
			return
		}
		function lineData() {
			var d = [],
				r = Math.max(Math.round(Math.random() * 24), 3);
			while (--r) {
				var date = new Date();
				date.setDate(date.getDate() - r);
				date.setHours(0, 0, 0, 0);
				d.push({ 'value': Math.round(Math.random() * 24), 'date': date });
			}
			return d;
		}

		// var data = [{ "value": 15, "date": "2016-05-30" }, { "value": 9, "date": "2016-05-31" },
		// 	{ "value": 19, "date": "2016-06-01" }, { "value": 14, "date": "2016-06-02" }, { "value": 10, "date": "2016-06-03" }, { "value": 1, "date": "2016-06-04" },
		// 	{ "value": 10, "date": "2016-06-05" }, { "value": 24, "date": "2016-06-06" }, { "value": 18, "date": "2016-06-07" }, { "value": 13, "date": "2016-06-08" }]
		// { "value": 19, "date": "2016-06-09" }, { "value": 10, "date": "2016-06-10" }, { "value": 7, "date": "2016-06-11" }, { "value": 21, "date": "2016-06-12" }, 
		// { "value": 9, "date": "2016-06-13" }, { "value": 7, "date": "2016-06-14" }, { "value": 12, "date": "2016-06-15" }, { "value": 10, "date": "2016-06-16" }, 
		// { "value": 12, "date": "2016-06-17" }, { "value": 6, "date": "2016-06-18" }];

		var parseDate = d3.time.format("%Y-%m").parse;
		var h = 50,
			w = 130,
			margin = 10,
			min = 0,
			max = d3.max(data, function(d) { return d.value }),
			cr = 2;
		var xScale = d3.scale.ordinal().rangeRoundBands([0, w], .05),
			yScale = d3.scale.linear().range([h - margin * 2, 0]).domain([min, max]);

		var xAxis = d3.svg.axis()
			.scale(xScale)
			.orient("bottom")
			.ticks(d3.time.months, 6)
            .tickFormat(d3.time.format('%d %b %y'))
            .tickSize(0)
            .tickPadding(8),
			yAxis = d3.svg.axis().scale(yScale).tickSize(4).orient('left');

		var chart = d3.select('.points-chart')
			.append('svg')
			.attr('width', w)
			.attr('height', h)
			.append('g')
			.attr('transform', 'translate(' + margin + ',' + margin + ')');

		data.forEach(function(d) {
			d.date = parseDate(d.date);
		});

		xScale.domain(data.map(function(d) { return d.date; }));





		// var xAxis1 = chart.append('g').classed('x axis', true).attr("transform", "translate(0," + (h - (margin * 2)) + ")").call(xAxis).selectAll("text")
		// .style("text-anchor", "end")
		// .attr("dx", "-.8em");
		// var yAxis1 = chart.append('g').classed('y axis', true).call(yAxis);

		var line = d3.svg.line()
			.x(function(d) {
				return xScale(d.date)
			})
			.y(function(d) {
				return yScale(d.value)
			})


		var points = chart.append('g')
			.selectAll('.data-point')
			.data(data)
			.enter()
			.append('circle')
			.attr('cx', function(d) {
				return xScale(d.date)
			})
			.attr('cy', function(d) {
				return yScale(d.value)
			})
			.attr('r', cr)
			.attr('fill', 'steelblue');
		chart.append('path').attr('d', line(data)).attr('stroke-width', 2)

	}

	renderSplineChart(){
		var data = this.splineData
		if(data.length ==0){
			return
		}
		d3.selectAll('.sub-account-'+this.accIndex+' .' + this.type+'svg').remove()

		// var data = [{ "value": 15, "date": "2016-05-30" }, { "value": 9, "date": "2016-05-31" },
		// 	{ "value": 19, "date": "2016-06-01" }, { "value": 14, "date": "2016-06-02" }, { "value": 10, "date": "2016-06-03" }, { "value": 1, "date": "2016-06-04" },
		// 	{ "value": 10, "date": "2016-06-05" }, { "value": 12, "date": "2016-06-06" }, { "value": 18, "date": "2016-06-07" }, { "value": 13, "date": "2016-06-08" },
		// 	{ "value": 19, "date": "2016-06-09" }, { "value": 10, "date": "2016-06-10" }, { "value": 12, "date": "2016-06-11" }, { "value": 21, "date": "2016-06-12" },
		// 	{ "value": 9, "date": "2016-06-13" }, { "value": 34, "date": "2016-06-14" }, { "value": 12, "date": "2016-06-15" }, { "value": 10, "date": "2016-06-16" },
		// 	{ "value": 12, "date": "2016-06-17" }, { "value": 6, "date": "2016-06-18" }];



		var margin = { top: 7, right: 7, bottom: 7, left: 7 },
			width = 100 - margin.left - margin.right,
			height = 30 - margin.top - margin.bottom;

		var formatDate = d3.time.format("%Y-%m");


		var maxY = d3.max(data, function(d) {
            return d.value
        });
		var x = d3.time.scale()
			.range([0, width]);

		var y = d3.scale.linear()
			.domain([0, 100])
			.range([height, 0])
			// .rangeRoundBands([0, height], .05);

		var xAxis = d3.svg.axis()
			.scale(x)
			.ticks(d3.time.days, 15)
			.orient("bottom");

		var yAxis = d3.svg.axis()
			.scale(y)
			.orient("left");

		var line = d3.svg.line()
			.interpolate("basis")
			.x(function(d) {
				return x(d.date);
			})
			.y(function(d) {
				return y(d.value);
			})

		var svg = d3.select('.sub-account-'+this.accIndex+' .' + this.type).append("svg")
			.attr("width", width + margin.left + margin.right)
			.attr("height", height + margin.top + margin.bottom)
			.append("g")
			.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

		data.forEach(function(d) {

			d.date = formatDate.parse(d.date);
			return d;

		})

		x.domain(d3.extent(data, function(d) { return d.date; }));
		y.domain(d3.extent(data, function(d) { return d.value; }));


		var defs = svg.append('defs')

		var filter = defs.append("filter")
			.attr("id", "drop-shadow")
			.attr("height", "130%");
		filter.append("feGaussianBlur")
			.attr("in", "SourceAlpha")
			.attr("stdDeviation", 5)
			.attr("result", "blur");

		filter.append("feOffset")
			.attr("in", "blur")
			.attr("dx", -5)
			.attr("dy", -5)
			.attr("result", "offsetBlur");


		var feMerge = filter.append("feMerge");

		feMerge.append("feMergeNode")
			.attr("in", "offsetBlur")
		feMerge.append("feMergeNode")
			.attr("in", "SourceGraphic");

		// svg.append("g")
		// 	.attr("class", "x axis")
		// 	.attr("transform", "translate(0," + height + ")")
		// 	.call(xAxis);

		// svg.append("g")
		// 	.attr("class", "y axis")
		// 	.call(yAxis)
		// 	.append("text")
		// 	.attr("transform", "rotate(-90)")
		// 	.attr("y", 6)
		// 	.attr("dy", ".71em")
		// 	.style("text-anchor", "end")

		var path = svg.append("path")
			.datum(data)
			.attr("class", "line")
			.attr("d", line)
			.attr('filter', "url(#drop-shadow)")
			.attr('stroke-linejoin', 'round')


		function type(d) {
			d.date = formatDate.parse(d.date);
			d.close = +d.value;
			return d;
		}
	}


	ngOnInit(){
		// if(this.type =='points'){
		// 	this.renderPointsChart()
		// }
		 if (this.type == 'spline-inv' || this.type == 'spline-join'){
			// this.renderSplineChart()
		}
	}
	
}