import { Component, EventEmitter, OnInit, Input, Output, OnChanges} from 'angular2/core';
import { Router } from 'angular2/router';
import {AccountService} from './account.service';
import {Config} from '../app-conf';
import { Http, Response } from 'angular2/http';
import {FundTransferComponent} from './Transactions/fund-transfer.component';
import {DonoutChartComponent} from './Charts/donutchart.component';
import {LineChartComponent} from './Charts/linechart.component';

declare var $:any;
@Component({
	selector: 'account',
	inputs: ['subAccounts','chartData','pointsChartData'],
	templateUrl: 'static/app/Account/templates/accounts.html',
	directives: [FundTransferComponent, DonoutChartComponent, LineChartComponent]
})


export class AccountComponent implements OnInit,OnChanges{
	@Input() pointsChartData;
	@Output() onViewDetails = new EventEmitter()
	@Output() onShowTransaction = new EventEmitter();
	private accountService;
	private config;
	private data;
	private defaultAccount = 'Savings';
	public rawAccountData;
	public accountData;
	private chartData = {
		data:[],
		chart:{
			type:'points'
		}

	}

	private defaultAccts= ['SAVING','CURRENT']

	
	
	viewTransactionDetails(){

		this.onViewDetails.emit({ showTransaction: true, transactionData: this.accountData })

	}

	onAccountChange(event){
		
		this.accountData = this.rawAccountData.filter(function(item){ 
			return item.acctNumber == event.target.value
		})[0]

		this.refreshTransactionDate()
		// this.init()
	}

	updateCharts(data){
		var arr =[]
		if(data && !$.isArray(data)){
			data = [data]
		}
		var that = this;
			if(data.length ==0){
				return
			}
			data.forEach(function(d){
				 arr.push({ value:parseFloat(d.acctCloseBal), 
				 	date:[d.month.substr(2,4),d.month.substr(0,2)].join('-')
				 })

			})
		
		return arr
		
	}


	ngOnChanges(changes){
		
	}



	showTransactions(event){
		// console.log(event)
		this.onShowTransaction.emit(event)
	}
	constructor(accountService: AccountService, conf: Config) {

		this.config = conf.getConfig();
		this.accountService = accountService;
		this.accountData = {};
	}

	private extractData(res: Response) {
		let body = res.json();
		return body.data || {};
	}

	private refreshTransactionDate(){
		var dateStr = new Date(this.accountData.lastTransDate)
		var dt= ''
		if(dateStr){
			if(isNaN(dateStr.getDate())){
				this.accountData.transDate = undefined
			}
			else{
				dt= [dateStr.getDate(),dateStr.getMonth()+1,dateStr.getFullYear()].join('/')
				this.accountData.transDate = dt
			}
			
		}
	}
	private initializeAccount(data) {
		this.rawAccountData = data.filter(function(d){
			return d.acctType == 'SAVING' || d.acctType == 'CURRENT'
		});
		this.accountData = data.filter(function(i) { 
			return i.acctType == 'SAVING' 
		})[0]
		this.refreshTransactionDate()
	}
	
	init() {
		var that = this;
		
		if(!this.accountService.accountRepository.length){
			that.accountData = this.accountService.accountRepository
			that.refreshTransactionDate()
			return
		}

		this.accountData = this.accountService.accountRepository;
		this.initializeAccount(this.accountData );
		var that = this;
		var request= {
			'userID':userData.userId,
			'acctNos': this.accountData.acctNumber,//'149200100015361',//userData.acctNumber,
			'noOfMonths':"9"
		}
		
		that.accountService.getAccountSummary(request).then(function(res){
			var data = {}
			if(!res.summList.length){
				data = res.summList
			}
			else{
				data = res.summList.filter(function(d){ 
				return that.checkAccValidity(d) && d.acctList
			 })[0]
			}
			
			that.chartData.data  = that.updateCharts(data.acctList)
		})


	}

	checkAccValidity(acctList){
		for(var i=0;i<this.defaultAccts.length;i++){
			if(acctList.acctType == this.defaultAccts[i]){
				return true
			}
		}

		return false
	}
	ngOnInit() {
		this.init()

	}
}