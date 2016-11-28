import { Component, OnInit, Input, OnChanges, Output, EventEmitter} from 'angular2/core';
import {AccountService} from '../Account/account.service'
import {CardlessCashService} from './cardless-cash.service'
import {FORM_DIRECTIVES, FormBuilder, Control, ControlGroup, Validators} from 'angular2/common';
import {Config} from '../app-conf'
import {Utility} from '../Util/util.service'
import {TransactionService} from '../Account/Transactions/transaction.service'
import {ValidatorService} from '../shared/validator.service'

declare var userData: any;
declare var $:any;

@Component({
	templateUrl:'static/app/CardlessCash/templates/cardless-cash.component.html',
	directives: [FORM_DIRECTIVES]

})
export class CardlessCashComponent implements OnInit, OnChanges {
	

	private acctList;
	private serverError;
	private config;
	private successMsg;
	private errorMsg;
	private cancelErrorMsg
	private context= 'CCR'
	private utilServcice;
	private formValidator1;
	private formValidator2;
	private formValidator3;
	private acctNumber:Control;
	private balance;
	private builder;
	private currency;
	private transService;
	private accountService;
	private currentAccount;
	private submitStep=0;
	private otp:Control;
	private selectedStep =1;
	private transactionPwd:Control;
	private cardlessCashService;
	private mobileNumber:Control;
	private amount:Control;
	private name;
	private otpError;
	private transError;
	private invalidOtp= false;
	private statementList;
	private validatorService;
	constructor(
		private accService:AccountService,
		private cs:CardlessCashService,
		private buildr:FormBuilder,
		private conf:Config,
		private utilService:Utility,
		private ts:TransactionService,
		private vs:ValidatorService
		){
		this.validatorService = vs;
		this.transService = ts
		this.builder = buildr;
		this.cardlessCashService = cs;
		this.config = conf.getConfig();
		this.accountService = accService
		
		
	}

	init(){
		
		this.prepareForm1()
		this.getRequestList()
	}

	onAccountInfoSubmit(){
		this.submitStep = 1;
		if(this.formValidator1.valid ){
			this.selectedStep = 2;
			this.prepareForm2()
		}
	}

	validateTransactionPassword(){
		var that = this;
		this.submitStep =2;
		if(this.transactionPwd.valid){
			this.transService.authFundTrans({'transPwd': this.transactionPwd.value})
			.then(res => {
				if (res && res.responseFlag == 'Success') {
					
					var params= {
						'userId':userData.userId,
						'otpType':that.config.otpTypes.TRANS_OTP,
						'prnNo':'.',
						'nickName':'.'
					}
					this.transService.generateOTP(params).then(function(res){
						if (res.status=='Success'){
							that.selectedStep = 3;
							that.prepareForm3()
							

						}
						else{
							console.log('could not generate OTP')
						}
					})
					
				}
				else{
					that.transError =res.responseMessage
				}
			})
		}
		
	}

	changeAccount(event){
		var changedData = JSON.parse(event);
		this.currentAccount = changedData;
		this.getAccountInfo()
	}

	valid(type,num){
		if(!type){
			if(num==1){
				return this.validatorService.validateContactNum(this.mobileNumber.value)
				&& this.validatorService.validateAmount(this.amount.value)
			}
			else if(num ==2){
				return this.validatorService.validateString(this.transactionPwd.value)

			}
			else if(num ==3){
				return this.validatorService.checkLength(this.otp.value,4,10)

			}

			
		}
		if(type=='cn'){
			return this.validatorService.validateContactNum(this.mobileNumber.value)
		}
		else if(type=='am'){
			return this.validatorService.validateAmount(this.amount.value)
		}
		else if(type=="tp"){
			return this.validatorService.validateString(this.transactionPwd.value)
		}
		else if(type=="ot"){
			return this.validatorService.checkLength(this.otp.value,4,10)
		}

	}

	prepareForm1(){
		this.currentAccount = this.acctList[0]
		this.acctNumber =  new Control(this.acctList[0].acctNumber,Validators.required)
		this.mobileNumber =  new Control("",Validators.required)
		this.amount =  new Control("",Validators.required)

		this.formValidator1= this.builder.group({
			acctNumber: this.acctNumber,
			mobileNumber:this.mobileNumber,
			amount:this.amount
		})
		

	}

	getAccountInfo(){
		var that = this;
		let params = {'acctNo': this.currentAccount.acctNumber}

		that.cardlessCashService.getAccountDetails(params).then(function(data){
			that.currentAccount = $.extend({},that.currentAccount,data.details)
			
		})
	}

	submitCardlessCashRequest(){
		this.submitStep = 3;
		var that = this;
		var params ={
			"custNo" :userData.userId,
			"lbrCode": this.currentAccount.branchCode,
			"accountNo":  this.currentAccount.acctNumber,
			"mobileNo": this.currentAccount.mobileNos,
			"nickName": this.currentAccount.customerName,
			"emName": this.currentAccount.customerName,
			"tranAmount": this.amount.value
			}
		this.cardlessCashService.cardlessCashRequest(params)
		.then(function(res){
			if(res.response =="SUCCESS"){
				that.successMsg= "Successfully submitted request!"
				that.selectedStep = 4
			}
			else{
				that.selectedStep = 4
				that.errorMsg = res.errorMessage
			}
		})

	}
	removeCCR(type){
		this.selectedStep = 1
	}
	validateOTP(){
		this.submitStep = 3
		var that = this;
		var params = {
			"userId" : userData.userId,
			"otp" :this.otp.value 
			}
		this.transService.validateOTP(params)
		.then(res=>{	
			if (res.status=='Success'){
				that.submitCardlessCashRequest()
			}
			else{
				that.invalidOtp = true
				that.otpError = res.message
			}
		})
	}

	prepareForm2(){
		this.transactionPwd =  new Control("",Validators.required);
		this.formValidator2= this.builder.group({
			transactionPwd: this.transactionPwd
		})
		

	}

	prepareForm3(){
		this.otp =  new Control("",Validators.required)
		this.formValidator3= this.builder.group({
			otp: this.otp
		})
		

	}


	getRequestList(){
		var that = this;
		var params = {
			
				"custNo" : "4156803",
				"fromDate": "29/08/2016",
				"toDate": "31/08/2016",


		}
		this.cardlessCashService.cardlessCashStatementRequest(params).then(function(res){
			that.statementList = res.ibCardlessCashStatementResponse
		})
	}
	remove(type){
		if(type=="error"){
			this.cancelErrorMsg = undefined;
		}
	}

	cancelRequest(item){

		var that = this;
		var params ={
			"custNo" : userData.userId,
			"mobileNo": item.mobileNo,
			"txnId": item.txnId,
		}

		this.cardlessCashService.cardlessCashCancelRequest(params)
		.then(function(res){
			if(res.errorMessage ==""){
				that.successMsg= "Successfully canclled request request!"+" transaction id: "+res.transactionId
				
			}
			else{
				that.cancelErrorMsg = res.errorMessage
			}
		})
	}

	ngOnInit(){

		this.acctList = this.accService.cleanAccounts
		this.init()
	}


	ngOnChanges(changes) {
		

		
	}
}
