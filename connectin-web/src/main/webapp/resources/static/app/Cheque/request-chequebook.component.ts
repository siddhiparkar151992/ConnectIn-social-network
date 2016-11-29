import { Component, OnInit, Input, OnChanges, Output, EventEmitter} from 'angular2/core';
import {AccountService} from '../Account/account.service'
import {ChequeService} from './cheque.service'
import {FORM_DIRECTIVES, FormBuilder, Control, ControlGroup, Validators} from 'angular2/common';
import {Config} from '../app-conf'
import {Utility} from '../Util/util.service'
import {ValidatorService} from '../shared/validator.service'

declare var userData: any;
declare var $:any;

@Component({

	templateUrl:'static/app/Cheque/templates/request-chequebook.component.html',

})
export class RequestChequebookComponent implements OnInit, OnChanges {

	private acctList;
	private config;
	private success;
	private utilServcice;
	private currentAccount;
	private formValidator;
	private acctNumber:Control;
	private balance;
	private serverError;
	private clearingDate;
	private chequeService;
	private validatorService;

	private builder;
	private address;
	private currency;
	private addrType:Control;
	private accAddressType:Control;
	private deliveryType:Control;
	private chequeBookNumber:Control;
	private defaultChequeBookNumbers =1;
	private addressTypes=[
		{id:1,name:'Customer address'},
		{id:2,name:'Branch address'},
		{id:2,name:'Present address'},
		{id:2,name:'Permanent address'},
		{id:2,name:'Office address'}

	]
	
	private deliveryDays=[
		{id:1,value:'Any day'},
		{id:6,value:'Saturday/Sunday'}
	]
	private selectedDeliveryDay= this.deliveryDays[0]
	private selectedAdType=this.addressTypes[0]




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
		this.config = conf.getConfig();
	
	
	}

	reset(){
		this.chequeBookNumber.updateValue('')
	}
	init(){
		this.prepareRNCForm()

		
	}
	valid(){
		return this.validatorService.validateNumber(this.chequeBookNumber.value)

	}

	changeDeliveryDay(event){
		var changedData = JSON.parse(event);
		this.selectedDeliveryDay = changedData;
	}
	
	changeAccount(event){
		var changedData = JSON.parse(event);
		this.currentAccount = changedData;
		this.getAccountInfo()
	}

	changeAddressTypes(event){
		var changedData = JSON.parse(event);
		this.selectedAdType = changedData;
		this.getChequeAddress()
	}

	getAccountInfo(){
		var that = this;
		let params = {'acctNo': this.currentAccount.acctNumber}
		that.chequeService.getCustDetails(params).then(function(data){
			that.currentAccount = $.extend({},that.currentAccount,data.details)
			that.getChequeAddress()
		})
	}
	getChequeAddress(){
		var that = this;
		
			
			var params = {
				'branchCode':this.currentAccount.branchCode,
				'accountNo32':this.currentAccount.acctNumber,
				'custNo':userData.userId,
				'noOfChqBooks':this.chequeBookNumber.value,
				'addYN':this.config.chequeAPITypes.ADDRESS,
				'addType':this.selectedAdType.id,
				'deliveryDay':this.selectedDeliveryDay.id
			}
			this.chequeService.chequeBookRequest(params).then(function(res){
				var xmlResp = res.response;
				var xmlDocument = new DOMParser().parseFromString(xmlResp, "text/xml")
			  	var responseObject = that.utilService.parseXMLToJSON(xmlDocument)
			  	responseObject= responseObject.otherChannelServiceResponse
			  	if(res.status == 'success'  && responseObject.response == "SUCCESS"){
			  		that.address = responseObject.output
			  	}
		

			})
	}
	requestNewChequeBook(){
		var that = this;
		var params = {
				'branchCode':this.currentAccount.branchCode,
				'accountNo32':this.currentAccount.acctNumber,
				'custNo':userData.userId,
				'noOfChqBooks':this.chequeBookNumber.value,
				'addYN':this.config.chequeAPITypes.CHEQUEBOOK,
				'addType':this.selectedAdType.id,
				'deliveryDay':this.selectedDeliveryDay.id
			}
		this.chequeService.chequeBookRequest(params).then(function(res){
			var xmlResp = res.response;
				var xmlDocument = new DOMParser().parseFromString(xmlResp, "text/xml")
			  	var responseObject = that.utilService.parseXMLToJSON(xmlDocument)
			  	responseObject= responseObject.otherChannelServiceResponse
			  	if(res.status == 'success'  && responseObject.response == "ERROR"){
			  		that.serverError = responseObject.errorMessage
			  		that.success = undefined
			  	}
			  	else{
			  		that.success= "Successfully placed request for new chequebook!"
			  		that.serverError = undefined;
			  	}
		})
	}


	onFormSubmit(){
		this.prepareRNCForm()

	}

	prepareRNCForm(){
		this.currentAccount = this.acctList[0]
		
		this.selectedAdType  = this.addressTypes[0]
		this.selectedDeliveryDay = this.deliveryDays[0]
		this.acctNumber =  new Control(this.acctList[0].acctNumber,Validators.required)
		this.addrType =  new Control(this.addressTypes[0].name,Validators.required)
		this.deliveryType =  new Control(this.deliveryDays[0].value,Validators.required)
		this.chequeBookNumber =  new Control(this.defaultChequeBookNumbers ,Validators.required)
		

		this.formValidator= this.builder.group({
			acctNumber: this.acctNumber,
			addrType: this.addrType,
			deliveryType: this.deliveryType,
			chequeBookNumber: this.chequeBookNumber,
			


		})
		
		this.getAccountInfo()

	}


	ngOnInit(){

		this.acctList = this.accService.cleanAccounts;
		this.init();
	}


	ngOnChanges(changes) {
		

		
	}
}
