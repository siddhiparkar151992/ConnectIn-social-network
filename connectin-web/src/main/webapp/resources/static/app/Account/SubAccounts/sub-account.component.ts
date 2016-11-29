import { Component, OnInit, Input, OnChanges, Output, EventEmitter} from 'angular2/core';
import {AccountService} from '../account.service';
import {LineChartComponent} from '../Charts/linechart.component'
import {TransactionComponent} from '../Transactions/transaction.component'
import {TransactionService} from '../Transactions/transaction.service'
@Component({
	inputs: ['accountData','transactions','chartData','accIndex'],
    selector: 'sub-account',
    templateUrl: 'static/app/Account/SubAccounts/templates/sub-accounts.component.html',
    directives: [LineChartComponent, TransactionComponent]
})


export class SubAccounts implements OnInit, OnChanges {
	
	private accountService;
	public account;
	private chartData={
		data:[]
	};

	@Output() onViewDetails = new EventEmitter()
	private transactionData ={}
	@Input() accountData ={
		acctNumber:'',
		charts:{
			type:''
		}
	};
	@Input() accIndex;
	@Input() splineChartData
	@Input() transactions;
	private transactionService;
	constructor(accountService: AccountService, transService:TransactionService) {
		this.accountService = accountService;
		this.transactionService = transService
	}


	viewTransactionDetails(){

		this.onViewDetails.emit({ showTransaction: true, transactionData: this.accountData })

	}

	updateCharts(data){
		var arr =[]
		var that = this;
		
			data.forEach(function(d){
				 arr.push({ value:parseFloat(d.acctCloseBal), 
				 	date:[d.month.substr(2,4),d.month.substr(0,2)].join('-')
				 })

			})
		
		return arr
		
	}


	loadACcounts(data) {
		this.account = data;
	}
	init(){
		
		var that = this;

		if(this.accountData.acctNumber!=""){
			var request= {
			'userID':userData.userId,
			'acctNos': this.accountData.acctNumber,
			'noOfMonths':"9"
		}
			this.accountService.getAccountSummary(request).then(function(res){
				if(!res.summList){
					return 
				}
				var sumData = res.summList.filter(function(d){
					return d.acctNumber == that.accountData.acctNumber
				})
				if(that.accountData.acctNumber=='' && sumData.length>0){
					that.chartData.data  = that.updateCharts(sumData[0].acctList)
				}
				
			})
		}
		
		
	}
	ngOnInit(){
		this.init()
	}

	ngOnChanges(changes) {
		if (changes.accountData && changes.accountData.currentValue) {
			this.accountData = changes.accountData.currentValue
		}
		var that = this;
		
		
	}
}
