import { Component, OnInit, Input, OnChanges, Output, EventEmitter} from 'angular2/core';
import {AccountService} from '../Account/account.service'
import {ChequeService} from './cheque.service'
import {FORM_DIRECTIVES, FormBuilder, Control, ControlGroup, Validators} from 'angular2/common';
import {Config} from '../app-conf'
import {Utility} from '../Util/util.service'
declare var userData: any;

@Component({
	// selector:'cheque-component',
	templateUrl:'static/app/Cheque/templates/inward-cc.component.html',
	directives: [FORM_DIRECTIVES]

})
export class InwardCComponent implements OnInit, OnChanges {
	

	private acctList;
	private serverError;
	private routeConf;
	private config;
	private utilServcice;
	private formValidator;
	private acctNumber:Control;
	private balance;
	private clearingDate;
	private chequeService;
	private builder;
	private currency;
	private accountService;
	private currentAccount; 

	constructor(
		private accService:AccountService,
		private cs:ChequeService,
		private buildr:FormBuilder,
		private conf:Config,
		private utilService:Utility
		){
		this.builder = buildr;
		this.chequeService = cs;
		this.config = conf.getConfig();
		this.accountService = accService
		
		
	}

	init(){
		
		this.prepareICCForm()
	}

	inwardClearingCheque(){
		var that = this;
		var params ={
			'customerId':userData.userId,
			'accountNo':this.currentAccount.acctNumber
		}
		this.chequeService.clearingCheque(params).then(function(res){
			that.serverError = res.errorCode;

		})
	}


	resetForm(){
		this.prepareICCForm()
	}

	onFormSubmit(){
		this.inwardClearingCheque()
		

	}
	changeAccount(event){
		var changedData = JSON.parse(event);
		this.currentAccount = changedData;
	}
	prepareICCForm(){
		this.currentAccount = this.acctList[0]
		this.acctNumber =  new Control(this.acctList[0].acctNumber,Validators.required)
		this.formValidator= this.builder.group({
			acctNumber: this.acctNumber,
		})
		

	}

	ngOnInit(){

		this.acctList = this.accService.cleanAccounts
		this.init()
	}


	ngOnChanges(changes) {
		

		
	}
}
