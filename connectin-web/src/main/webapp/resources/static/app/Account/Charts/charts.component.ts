import { Component, OnInit,OnChanges,EventEmitter, Output, Input} from 'angular2/core';
import {LinkAccountComponent} from '../link-account.component';
import {DonoutChartComponent} from './donutchart.component';
import {BarChartComponent} from './barchart.component';
import {Config} from '../../app-conf'
@Component({
	inputs:['chartData','netWorth','piechartData'],
	selector: 'charts',
	templateUrl: 'static/app/Account/Charts/charts.html',
	directives: [LinkAccountComponent, DonoutChartComponent, BarChartComponent]
})


export class ChartComponent implements OnInit,OnChanges{
	@Input() netWorth
	@Output() onlinkAcc = new EventEmitter();
	private showLinkAccount = false;
	@Input()  chartData ={
		accountList:[],
		barchart:[],
		linechart:[],
		splinechart:[],

	};

	@Input() piechartData;
	private config;
	private colors;

	constructor(private conf: Config){
		this.config = conf
		this.colors = this.config.chartColors
	}

	openLinkAccModal(){
		this.showLinkAccount = true;
	}


	ngOnInit(){

	}


	
	ngOnChanges(changes){

		if(this.chartData && this.chartData.accountList.length>0){
			this.chartData.accountList = this.chartData.accountList.filter(function(d){
				return d.acctType=='SAVING' || d.acctType=='TD' 
			})
		}
	}

	linkAcc(event){
		// console.log(event)
		if(event === 'Successful'){
			console.log('yo')
			this.onlinkAcc.emit('AddNewAccount')
		}
	}

}
