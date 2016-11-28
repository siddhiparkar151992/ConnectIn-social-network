import {Component, OnInit, Input,OnChanges} from 'angular2/core';
import {Config}  from '../../app-conf'
declare var d3: any;

@Component({
	inputs:['chartData','piechartData'],
	selector: 'donout-chart',
	template: `<div class='chart-container'></div>

	`,
	
})

export class DonoutChartComponent implements OnInit,OnChanges {
	@Input() chartData;
	@Input() piechartData
	private config;
	constructor(private conf:Config){
		this.config = conf
	}
	renderDonutChart(data){
		if(data.length ==0){
			return
		}
		var donutData = this.chartData
		var innerpieData = this.piechartData

		var pieData = []
		innerpieData.forEach(function(d,i){
			pieData.push(d.value)
		})
		donutData.forEach(function(d){
					d = parseInt(d)
				})

		d3.selectAll('.donout-chart svg').remove()
		var dataset = {
			chartData: donutData,
			colors: this.config.donutColors
		};
		// var innerPie = [53245, 28479]
		var innerHeight = 150,
			innerwidth = 200

		var width = 300,
			height = 200,
			radius = ((Math.min(width, height)+80) / 2);

		var color = d3.scale.category20();

		var pie = d3.layout.pie()
			.sort(null);

		var piedata2 = pie(pieData);

		var arc = d3.svg.arc()
			.innerRadius(radius - 90)
			.outerRadius(radius - 50);


		var arc2 = d3.svg.arc()
		    .innerRadius(0)
		    .outerRadius(radius-90);



		var svg = d3.select(".chart-container").append("svg")
			.attr("width", width)
			.attr("height", height)
		var g1 = svg.append("g")
			.attr("transform", "translate(" + 90 + "," +100+ ")");
		var g2 = svg.append("g")
			.attr("transform", "translate(" + 90 + "," +100+ ")");

		var div = d3.select("body")
        .append("div") 
        .attr("class", "toolTip");



		

		var path = g1.selectAll("path")
			.data(pie(dataset.chartData))
			.enter().append("path")
			.attr("fill", function(d, i) { return dataset.colors[i]; })
			.attr("d", arc)
			.on('mouseover', function(d){
				var mouseVal = d3.mouse(this);
		        div.style("display","none");
		        div
		        .html("amount:"+d.data.toLocaleString())
		        .style("left", (d3.event.pageX+12) + "px")
		        .style("top", (d3.event.pageY-10) + "px")
		        .style("opacity", 1)
		        .style("display","block");
			})
			.on('mouseout',function(d){
				div.html(" ").style("display","none");
			})

		var path2 = g2.selectAll("path")
	    .data(piedata2)
	  .enter().append("path")
	    .attr("fill", function(d, i) { return color(i); })
	    .attr("d", arc2)
	    .on('mouseover', function(d){
				var mouseVal = d3.mouse(this);
		        div.style("display","none");
		        div
		        .html("amount:"+d.data.toLocaleString())
		        .style("left", (d3.event.pageX+12) + "px")
		        .style("top", (d3.event.pageY-10) + "px")
		        .style("opacity", 1)
		        .style("display","block");
			})
			.on('mouseout',function(d){
				div.html(" ").style("display","none");
			})

	}
	ngOnInit() {
		

	
	}

	ngOnChanges(changes){

		if(this.chartData.length >0 || this.piechartData.length>0){
			this.renderDonutChart(this.chartData)
		}
	}
}