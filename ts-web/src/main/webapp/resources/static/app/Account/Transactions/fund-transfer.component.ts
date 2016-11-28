
import { Component, OnInit, Input, OnChanges, Output,EventEmitter} from 'angular2/core';
import { Router } from 'angular2/router';
import {FORM_DIRECTIVES, FormBuilder, Control, ControlGroup, Validators} from 'angular2/common';
import {TransactionService} from './transaction.service';
import {Config} from '../../app-conf';
import {ValidatorService} from '../../shared/validator.service'
import {AccountService} from '../../Account/account.service'
import {Utility} from '../../Util/util.service'
declare var $: any;
declare var userData: any;


class Error{
	toError;

	constructor(){
		this.toError ='Please select a account to transfer'
	}
}
@Component({
	inputs: ['accountDetails'],
	selector: 'fund-transfer',
	templateUrl: 'static/app/Account/Transactions/templates/fund-transfer.component.html'
})
export class FundTransferComponent implements OnInit, OnChanges {
	@Input() accountDetails;
	@Output() onViewDetails = new EventEmitter();
	private errors;
	private showTransactionError = false;
	private transferData;
	private utilService;
	private transaction;
	private showTransactionRes;
	private formValidator: ControlGroup;
	private forms;
	private invalidPwd= false;
	private otpError;
	private transTo: Control;
	private amount: Control;
	private transPwd: Control;
	private otp: Control;
	private subMitStep1= false;
	private subMitStep2 = false;
	private subMitStep3 = false;
	private validatorService;
	private accountService;
	private transOTP;
	private invalidOtp = false;
	private submitted = false;
	private trasnactionService;
	private config;
	private selectedBenef;
	private transType;
	private actionItem = {
		items: [1, 2, 3],
		selected: 1,
		showTransactionRes: false
	}

	private transactionLimitKeys = {
		'RTGS':'rtgsLimit',
		"SCB":'neftLimit',
		"Transfer to same bank":'transLimit',
		"Transfer to other bank":'transLimit',
		"Transfer to same account": 'transLimit'
	}

	private transTypeAlias = {
		'RTGS':'rtgs',
		"SCB":'scb',
		"Transfer to same bank":'sb',
		"Transfer to other bank":'ob',
		"Transfer to same account": 'sa'
	}
	prepareFormControl(builder){
		this.transType = new Control('RTGS',Validators.required)
		this.transTo =new Control('',Validators.required)
		this.amount = new Control('', Validators.required)
		this.transPwd= new Control('', Validators.required)
		this.otp = new Control('', Validators.required)
		this.formValidator= builder.group({
			transTo: this.transTo,
			amount: this.amount,
			transPwd: this.transPwd,
			otp: this.otp,
			transType:this.transType

		})
	}
	constructor(
		private trasnactionService: TransactionService,
		private conf: Config,
		private accountService:AccountService,
		private builder:FormBuilder,
		private validatorService:ValidatorService,
		private utilService:Utility) {
		this.accountService =accountService;
		this.trasnactionService = trasnactionService
		this.transaction = {
			transLimit:100000,
			transferTo:'Transfer To',
			transferList: [],
			authOTP:{},
			transTypes:['RTGS','SCB','Transfer to same bank','Transfer to other bank','Transfer to same account']
		}
		this.utilService = utilService;
		this.validatorService = validatorService
		this.config = conf.getConfig();
		this.errors = new Error();
		this.prepareFormControl(builder)

	}
	
	resendOTP(){
		this.generateOTP()
	}

	viewTransactionDetails(){

		this.onViewDetails.emit({ showTransaction: true, transactionData: this.accountDetails })

	}

	onToTransferChange(e){
		var accNum = e.target.value;
		var benfDetails =  this.transaction.transferList.filter(data => {
			return data.fullName == accNum || data.acctNumber== accNum;
		})[0]
		$.extend(this.transaction,benfDetails)

		this.selectedBenef = benfDetails
		if(!this.selectedBenef.rtgsLimit){
			this.selectedBenef.rtgsLimit = 100000
		}
		this.transaction.transferTo = accNum

	}


	onTransTypeChange(e){
		var accNum = e.target.value;

	}


	authOTPFndTransfer(index){
		var that = this
		var params = {
			"userId" : userData.userId,
			"otp" :this.otp.value 
			}
		this.trasnactionService.validateOTP(params).then(res=>{	
				
			if (res.status=='Success'){
			that.invalidOtp = undefined
			that.otpError =undefined
			var transType =this.transTypeAlias[this.transType.value]

			var params = {}
			if(parseInt(that.transaction.transAmount) <50000){
				that.impsTransaction();
				return
			}
			if(that.transType.value == 'RTGS' || that.transType.value == 'SCB'){
				params = {
				"userID" :userData.userId,
				"senderAccountNo" : userData.acctNumber,
				"benefAccountNo" : that.selectedBenef.beneficiaryAcctId,
				"benefIFSC" : that.selectedBenef.beneficiaryBankCode,
				"benefName" : that.selectedBenef.fullName,
				"benefDesc1" : that.selectedBenef.beneficiaryAddressLine1 ? that.selectedBenef.beneficiaryAddressLine1 : '' ,
				"benefDesc2" : that.selectedBenef.beneficiaryAddressLine2 ? that.selectedBenef.beneficiaryAddressLine2 : '' ,
				"benefDesc3" : that.selectedBenef.beneficiaryAddressLine3 ? that.selectedBenef.beneficiaryAddressLine3 : '' ,
				"benefDesc4" : '',
				"amount" : that.transaction.transAmount ,
				"type" : that.transType.value ,
				"narration" : "RTGS outward Payment" 
				}
			}
			else if(that.transType.value == "Transfer to other bank" || that.transType.value == "Transfer to same bank"){
				params = {
					"ibFundTransactionRequest":
					{
						'fromBrAccNo':this.accountDetails.acctNumber,
						'toAccNo':this.transaction.beneficiaryAcctId ,
						'custNo':userData.userId, 
						'encryptedOltpPwd':this.transPwd.value, 
						'transAmnt':this.transaction.transAmount, 
						'trType':'payNow',
						'narration':'trf',
						'passOption':'N'
					} 
				}

				if(that.transType.value == "Transfer to other bank"){
					params.ibFundTransactionRequest.rtgsNEFT = 'NEFT';
					params.ibFundTransactionRequest.nextTrnxDate = '';
					params.ibFundTransactionRequest.benIfscCode = that.selectedBenef.beneficiaryBankCode;
					params.ibFundTransactionRequest.benNickName = that.selectedBenef.beneficiaryaliasName;
					params.ibFundTransactionRequest.benAdd1 = that.selectedBenef.beneficiaryAddressLine1;
					params.ibFundTransactionRequest.benAdd2 = that.selectedBenef.beneficiaryAddressLine2;
					params.ibFundTransactionRequest.benMobileNo = that.selectedBenef.beneficiaryPhoneNos;
					params.ibFundTransactionRequest.chrgAmnt = 0;
				}
				
			}
			else{
				params = {
						'fromBrAccNo':this.accountDetails.acctNumber,
						'toAccNo':this.transaction.beneficiaryAcctId || that.transaction.acctNumber,
						'custNo':userData.userId, 
						'encryptedOltpPwd':this.transPwd.value, 
						'transAmnt':this.transaction.transAmount, 
						'trType':'payNow',
						'narration':'trf',
						'passOption':'N'
					} 
			}
		  	
		  	that.trasnactionService.transact(params, transType).success(function(res){
		  		var xmlResp = res.response;
		  		var xmlDocument = new DOMParser().parseFromString(xmlResp, "text/xml")
		  		var responseObject = that.utilService.parseXMLToJSON(xmlDocument)
		  		responseObject= responseObject.otherChannelServiceResponse
		  		if(res.status == 'success'  && responseObject.valid == "true"){
		  			
		  			
					that.showTransactionRes = true;
					$.extend(true, that.transaction, {
			        	responseFlag : responseObject.response,
			        	responseMessage: responseObject.errorMessage
			        })
					that.transaction.transactionID =res.refNo //static needs to be removed
			        that.accountDetails.acctBalance = parseFloat(that.accountDetails.acctBalance) - parseInt(that.transaction.transAmount)
			  		// console.log(res)
		  		}
		  		else{
		  			// that.showTransactionRes = true
		  			that.showTransactionError = true;
		  			that.transaction.error = responseObject.errorMessage;
		  			that.transaction.transactionID= responseObject.transactionId;
		  		}
		  	})
		  	
			}else{
				that.invalidOtp = true
				that.otpError = res.message
			}



		})
	}
	impsTransaction(){
		var that = this;
		var transType ="imps"
		var params = {
			"impsTransactionRequest":{
						'remitterMobile':userData.phone,
						'remitterMMID':"9088001",
						'accountNo':this.accountDetails.acctNumber, 
						'ifscCode':this.transPwd.value, 
						'transAmt':this.transaction.transAmount, 
						'trType':'payNow',
						'narration':'trfp2a',
						'RRNNo':"",
						"passOption":'N'
					}
		}
		that.trasnactionService.transact(params, transType).success(function(res){
			var xmlResp = res.response;
		  		var xmlDocument = new DOMParser().parseFromString(xmlResp, "text/xml")
		  		var responseObject = that.utilService.parseXMLToJSON(xmlDocument)
		  		responseObject= responseObject.impsTransactionResponse
		  		if(res.status == 'success'  && responseObject.valid == "true"){
		  			
		  			
					that.showTransactionRes = true;
					$.extend(true, that.transaction, {
			        	responseFlag : responseObject.response,
			        	responseMessage: responseObject.errorMessage
			        })
					that.transaction.transactionID =res.refNo //static needs to be removed
			        that.accountDetails.acctBalance = parseFloat(that.accountDetails.acctBalance) - parseInt(that.transaction.transAmount)
			  		// console.log(res)
		  		}
		  		else{
		  			// that.showTransactionRes = true
		  			that.showTransactionError = true;
		  			that.transaction.error = responseObject.errorMessage;
		  			that.transaction.transactionID= responseObject.transactionId;
		  		}
		})
	}

	onSelectType(event){
		// console.log(event)
		this.getFundsTranseferList()
	}


	generateOTP(){
		var that = this;
		var params = {
			'userId':userData.userId,
			'otpType':that.config.otpTypes.TRANS_OTP,
			'prnNo':that.selectedBenef.prnNo,
			'nickName':that.selectedBenef.beneficiaryaliasName
		}
		this.trasnactionService.generateOTP(params)
	}

	authFundTrans(index){
		var that = this;
		if (this.transaction.transAmount && this.transaction.transPassword) {

			this.trasnactionService.authFundTrans({
				
				// 'transAcctNumber': this.transaction.transAcctNumber,
				'transPwd': this.transaction.transPassword
			}).then(res => {
			if (res && res.responseFlag == 'Success') {
				
				this.actionItem.selected = index + 1
				var params = {
					'userId':userData.userId,
					'otpType':that.config.otpTypes.TRANS_OTP,
					'prnNo':that.selectedBenef.prnNo,
					'nickName':that.selectedBenef.beneficiaryaliasName
				}
				this.trasnactionService.generateOTP(params).then(function(res){
					if (res.status=='Success'){

						that.subMitStep3 = true;
						that.actionItem.selected = index + 1
					}
					else{
						that.invalidOtp = true;
						that.otpError = res.error
					}
				})
				// this.transaction.transactionID = res.json().data[0].transactionID
				
			}
			else{
				that.invalidPwd = true
			}
			
		})
		}
	}

	validateAmount(amount){
		var lowLimit = 1;
		var limitKey  =  this.transactionLimitKeys[this.transType.value]
		var highLimit = this.transaction[limitKey];

		return this.validatorService.validateAmount(this.amount.value,lowLimit,highLimit)
	}
	clickNext(index) {
		if (index == 2) {
			this.subMitStep2 = true;
			if (this.amount.valid && this.amount.touched && this.transPwd.valid && this.transPwd.touched ) {
				this.authFundTrans(index)
				
				return 
			}

		}
		if(index ==3){
			
			if (this.otp.valid && this.otp.touched) {
				this.authOTPFndTransfer(index)

			}
		}
		if (index == 1) {
			this.subMitStep1 = true;
			if (this.transaction.transferTo != 'Transfer To' && this.transTo.valid && this.transTo.touched){
				this.actionItem.selected = index + 1
				return 
			}
		}
		
		
		
	}
	goBack(){
		if (this.actionItem.selected == 3) {
			this.actionItem.selected=1
			var transList = this.transaction.transferList
			this.transaction = {
				transferTo:'Transfer To',
				transferList: transList,
				authOTP:{},
				transTypes:['RTGS','SCB','Transfer to same bank','Transfer to other bank','Transfer to same account']
				
			}
			this.actionItem.selected=1
			this.prepareFormControl(this.builder)

		}else{
			this.actionItem.selected-=1
		}
		
	}

	init(acctData) {
		this.accountDetails = acctData.filter(data => { return data.acctType != 'Savings' })
	}


	getFundsTranseferList(){

		var params = {
			'listType' : this.transType.value
		}
		if(this.transType.value == 'Transfer to same bank' || 
			this.transType.value == 'Transfer to other bank' ){
			params.listType ='ALL'
		}

		if(this.transType.value == 'Transfer to same account'){
			this.transaction.transferList = this.accountService.cleanAccounts;
			return;
		}
		this.trasnactionService.getFundTransefrList(params).then(res => {
			if(!res.transferList.length){
				this.transaction.transferList = [res.transferList]
			}
			else{
				this.transaction.transferList = res.transferList
			}
			
		})

	}
	ngOnInit(){
		this.getFundsTranseferList()
	}

	ngOnChanges(changes) {
		if (changes.accountDetails && changes.accountDetails.currentValue) {
			var acctData= changes.accountDetails.currentValue
			
		}


	}

}