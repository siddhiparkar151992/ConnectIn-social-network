import { Component, OnInit, Input, OnChanges, Output, EventEmitter} from 'angular2/core';
import {Router,RouteParams,Location,ROUTER_DIRECTIVES} from 'angular2/router';
import {AccountService} from '../Account/account.service'
import {ChequeService} from './cheque.service'
import {FORM_DIRECTIVES, FormBuilder, Control, ControlGroup, Validators} from 'angular2/common';
import {Config} from '../app-conf'
import {Utility} from '../Util/util.service'
import {ValidatorService} from '../shared/validator.service'
declare var userData: any;

@Component({
	selector:'cheque-component',
	templateUrl:'static/app/Cheque/templates/stop-chequepay.component.html',

})
export class StopChequePayComponent implements OnInit, OnChanges {
	
	private acctList;
	private config;
	private utilServcice;
	private currentAccount;
	private formValidator;
	private acctNumber:Control;
	private balance;
	private clearingDate;
	private chequeService;
	private builder;
	private currency;
	private validatorService;

	/*Stop payment */
	private chequeNumber:Control;
	private fromChequeNum:Control;
	private toChequeNum:Control;
	private chequeDate:Control;
	private requestDate:Control;
	private chequeAmount:Control;
	private payeeName:Control;
	private remark:Control;


	private serverError;
	private successMessage;
	private submitStep1;

	constructor(
		private accService:AccountService,
		private cs:ChequeService,
		private buildr:FormBuilder,
		private conf:Config,
		private utilService:Utility,
		private vs:ValidatorService
		){
		this.validatorService = vs;
		this.builder = buildr;
		this.chequeService = cs;
		this.utilService = utilService;
		
		
	}

	changeAccount(event){
		var changedData = JSON.parse(event);
		this.currentAccount = changedData;
	}


	valid(){
		return this.validatorService.validateNumber(this.chequeNumber.value)

	}



	init(){
		this.prepareSPForm()
		
	}

	stopChequePayment(){
		var that = this;
		if(!this.formValidator.valid || !this.validatorService.validateNumber(this.chequeNumber.value)){
			return 
		}
		var params ={
			'accountNo':userData.userId,
			'chequeNo':this.chequeNumber.value
		}
		this.chequeService.stopChequePayment(params).then(function(res){
			var xmlResp = res.response;
	  		var xmlDocument = new DOMParser().parseFromString(xmlResp, "text/xml")
	  		var responseObject = that.utilService.parseXMLToJSON(xmlDocument)
	  		responseObject = responseObject.otherChannelServiceResponse;

	  		if(responseObject.valid=="false"){
	  			that.serverError= "Invalid cheque number"
	  		}
	  		else{
	  			that.successMessage ="Processing complete"
	  		}
		})	
	}

	
	resetForm(){
		this.chequeNumber.updateValue('')
	}

	onFormSubmit(){
		this.submitStep1 = true;
		this.stopChequePayment()
		
	}
	
	prepareSPForm(){
		this.currentAccount = this.acctList[0]
		this.acctNumber =  new Control(this.acctList[0].acctNumber,Validators.required)
		this.chequeNumber =  new Control('',Validators.required)
		
		this.formValidator= this.builder.group({
			acctNumber: this.acctNumber,
			chequeNumber: this.chequeNumber,
		

		})
		

	}

	

	ngOnInit(){

		this.acctList = this.accService.cleanAccounts;
		this.init()
	}


	ngOnChanges(changes) {
		

		
	}
}
