import { Component, OnInit, Input, OnChanges, Output, EventEmitter} from 'angular2/core';
import {AccountService} from '../account.service';
import {LineChartComponent} from '../Charts/linechart.component'
import {TransactionComponent} from '../Transactions/transaction.component'
import {TransactionService} from '../Transactions/transaction.service'
import {Observable} from 'rxjs/Rx';
import {DatePipe} from "angular2/common";
declare var userData:any;

@Component({
	
    selector: 'account-info',
    templateUrl: 'static/app/Account/AccountInfo/templates/account-info.component.html',
	pipes: [DatePipe]

   
})


export class AccountInfoComponent implements OnInit, OnChanges {
	
	private accountService;
	private accountInfo;
	private get32DigitAccNumAPIDefer
	constructor(
		private ac:AccountService,
		){
		this.accountService = ac
	}
	
	init(){
		var that = this;
		var accParams= {'acctNo': userData.acctNumber};
		this.get32DigitAccNumAPIDefer= this.accountService.get32DigitAccNum(accParams)
		this.getAccDetailsAPIDefer= this.accountService.getAccountDetails(accParams)

		Observable.forkJoin([this.get32DigitAccNumAPIDefer, this.getAccDetailsAPIDefer])
		.subscribe(function(res){
			
			that.accountInfo = $.extend({},that.accountInfo,res[0].response)
			that.accountInfo = $.extend({},that.accountInfo,res[1].details)
			if(!that.accountInfo.acctBalance){
				that.accountInfo.acctBalance = userData.acctBalance
			}
		})
		
	}
	ngOnInit(){
		this.init()
	}

	ngOnChanges(changes) {
		
		
	}
}
