import {OnChanges, Component, OnInit, Input,EventEmitter,Output, Injector, Injectable, Inject, AfterViewChecked} from 'angular2/core';
import {FORM_DIRECTIVES, FormBuilder, Control, ControlGroup, Validators} from 'angular2/common';
import { Router } from 'angular2/router';
import {ValidatorService} from '../../shared/validator.service'
import {PayeeService} from './payee.service'
import {Config} from '../../app-conf'
declare var $: any;
declare var view:any;

class NewPayeeDetails {
	name: string='';
	numbr: number;
	confrmNumbr: number;
	transPwd : string;
	otp: number;
	finalFlag: string='';
	finalMessage: string='';
	ifsc:string = '';
	nickName:string = '';
	bankName : string= 'BANK NAME';
	bankCity:string='CITY';
	bankLocation:string='BRANCH LOCATION';
	micrNo:string='MICR No.';
	addr1:string='';
	addr2:string='';
	addr3:string='';
	phoneNo:number;
	prnNo : string = '';
	status : string= '3';
	acctType:string='Account Type';
	subAcctType:string='Sub-Account Type';

}

@Component({
    selector: 'add-payee',
    templateUrl: 'static/app/Account/Payee/templates/add-payee.component.html',
    directives:[FORM_DIRECTIVES]
   	
})

export class AddPayeeComponent implements OnInit, AfterViewChecked{
	
	// @Output() addPayee = new EventEmitter();
	private newPayee;
	private acctDetails;
	private addFormValidator: ControlGroup;
	private acctName: Control;
	private acctNum: Control;
	private confrmAcctNum : Control;
	private acctOTP: Control;
	private ifscCode : Control;
	private nickName : Control;
	private acctTypeVal = Control;
    private subAcctTypeVal = Control;
    private acctTransactn=Control;
    private acctAddr1 = Control;
    private acctAddr2 = Control;
    private acctAddr3 = Control;
    private acctPhoneNo = Control;
	private submitStep1 = false;
	private submitStep2 = false;
	private submitStep3 = false;
	private showSubType = false;
	private ifscValidatn = false;
	private throwErr = false;
	private  success = false;
    private throwErr_ifsc = false
    private throwErr_acct = false
    private transErr = false;
	private genOTPErr = false;
	private addErr = false;
    private trans_errDesc = ''
    private transType = 'External'
    private otpError = '';
	private addAction = {
		selected : 1,
		linkItems : [1,2],
		showResult : false,
	}
	private config;

	initialiseFormControl(builder){
		this.acctName = new Control('', Validators.required)
		this.acctNum = new Control('', Validators.required)
		this.acctOTP = new Control('', Validators.required)
		this.ifscCode = new Control('', Validators.required)
		this.confrmAcctNum = new Control('', Validators.required)
		this.nickName = new Control('', Validators.required)
		this.acctTypeVal= new Control('Account Type', Validators.required)
		this.subAcctTypeVal= new Control('Sub-Account Type', Validators.required)
		this.acctTransactn = new Control('', Validators.required)
		this.acctAddr1 = new Control('', Validators.required)
		this.acctAddr2 = new Control('', Validators.required)
		this.acctAddr3 = new Control('', Validators.required)
		this.acctPhoneNo = new Control('', Validators.required)
		this.addFormValidator= builder.group({
			acctName:this.acctName,
			acctNum:this.acctNum,
			acctOTP:this.acctOTP,
			ifscCode:this.ifscCode,
			confrmAcctNum:this.confrmAcctNum,
			nickName:this.nickName,
			acctTypeVal:this.acctTypeVal,
			subAcctTypeVal : this.subAcctTypeVal,
			acctTransaction:this.acctTransactn,
			acctAddr1 : this.acctAddr1,
			acctAddr2 : this.acctAddr2,
			acctAddr3 :this.acctAddr3,
			acctPhoneNo : this.acctPhoneNo
		})

	}

	constructor(private builder : FormBuilder, 
		private payeeService: PayeeService, 
		private validatorService: ValidatorService,
		private conf:Config){
		var that = this;
		view = {'that':this};
		this.newPayee = new NewPayeeDetails();
		this.initialiseFormControl(builder)
		this.config = conf.getConfig();

	}
	updateStatus(newStatus, step){
		let params = {
			'prnNo': this.newPayee.prnNo,
			'oldStatus' : this.newPayee.status,
			'newStatus' : newStatus,
			'listType' : this.transType
		}
		let that = this;
		this.payeeService.updatePayee(params).then(function(res){
			if (res.status === 'Success'){
				that.addAction.selected = step
				that.newPayee.status = newStatus

			}else{
				// console.log(res)
			}
		})
	}
	resendOTP(){
		var that = this;
		var params = {
			'userId':userData.userId,
			'otpType':that.config.otpTypes.TRANS_OTP,
			'prnNo':that.newPayee.prnNo,
			'nickName':that.newPayee.nickName
		}
		this.payeeService.generateOTP(params).then(function(res){
			if(res.status == "success"){
				that.genOTPErr = false;
				that.addAction.selected == 3;
			}
			else{
				if(res.hasOwnProperty('mesage')){
					that.genOTPErr = true;
				}
			}
		})
	}
	authTransPwd(){
		let params={'transPwd': this.newPayee.transPwd}
		var that = this;
		this.payeeService.authTransPwd(params).then(function(res){
			if(res.responseFlag === 'Success'){
				that.transErr = false;
				var params = {
					'userId':'',//userData.userId,
					'otpType':that.config.otpTypes.TRANS_OTP,
					'prnNo':that.newPayee.prnNo,
					'nickName':that.newPayee.nickName
				}
				that.payeeService.generateOTP(params).then(function(res){
					if(res.status == "success"){
						that.genOTPErr = false;
						that.addAction.selected=3
						that.updateStatus('4', 3)
					}
					else{
						if(res.hasOwnProperty('error')){
							that.genOTPErr = true
							that.updateStatus('4', 2)
						}
					}
				})
				
			}else{
				if(res.hasOwnProperty('responseMessage')){
					that.transErr = true;
					that.trans_errDesc = res.responseMessage;
				}
			}
		})
	}

	validateOTP(){
		var that = this;
		var params = {
			"userId" : userData.userId,
			"otp" :that.newPayee.otp
			}
		that.payeeService.validateOTP(params).then(function(res){
			if(res.status == "Success"){
				that.addAction.selected==3
				that.updateStatus('1', 4)
				var params = {
					'userId':userData.userId,
					'otpType':that.config.otpTypes.PAYEE_OTP,
					'prnNo':that.newPayee.prnNo,
					'nickName':that.newPayee.nickName
				}
				that.payeeService.generateOTP(params)//generates the success message and sends it to the user
			}
			else{
				that.otpError = res.error
			}
					
		})
	}
	onSubmitDetails(){

		let params = {
			add_type : this.transType,
			benefacctid : this.newPayee.confrmNumbr,
			benalias : this.newPayee.nickName ,
			benaddrline1 : this.newPayee.addr1,
			benaddrline2 : this.newPayee.addr2,
			benaddrline3 : this.newPayee.addr3,
			benphoneno : this.newPayee.phoneNo,
			benfullname : this.newPayee.name,
			benbrcode : this.newPayee.ifsc,
			acctType : this.newPayee.acctType,
			subAcctType : this.newPayee.subAcctType	
		};
		var that = this;
		this.payeeService.addPayeeDetails(params).then(function(res){
			
			if (res.status === 'Success'){

				that.addAction.selected = 2;
				that.newPayee.prnNo = res.details.prnNo;
				that.newPayee.status = res.details.status;

			}else{
				that.addErr = true
			}
			
		})
	}


	nextStep(currentIndex){

		if (currentIndex == 1) {
			this.submitStep1 = true;
			if(this.validatorService.validateAcctName(this.newPayee.name) 
			&& this.validatorService.validateIFSC(this.newPayee.ifsc,11)  
			&& this.acctTypeVal.value != 'Account Type' 
			&& this.subAcctTypeVal.value != 'Sub-Account Type' 
			&& this.validatorService.validateNumbers(this.newPayee.numbr,'Account', 9,18) 
			&& this.validatorService.validateCnfrmAcct(this.newPayee.confrmNumbr,this.newPayee.numbr)  
			&& this.validatorService.validateAcctName(this.newPayee.nickName)
			&& this.validatorService.validateAddress(this.newPayee.addr1)
			&& this.validatorService.validateAddress(this.newPayee.addr2)
			&& this.validatorService.validateAddress(this.newPayee.addr3)
			&& this.validatorService.validateNumbers(this.newPayee.phoneNo,'Account', 6,10) )
			{ 
				this.onSubmitDetails();
			}
			else{
				// console.log(false)
			}
		}
		else if(currentIndex == 2){
			this.submitStep2 = true;
			if(this.validatorService.validateNumbers(this.newPayee.transPwd,'Password', 6,20) ){
				this.authTransPwd();
			}
			
		}
		else if(currentIndex == 3){
			this.submitStep3 = true;
			if(this.validatorService.validateNumbers(this.newPayee.otp,'Password', 4,10) ){
				this.validateOTP()
			}
		}
	}
	onAcctSelectn(e){
		// console.log(this.acctTypeVal.value)
		this.newPayee.acctType = e.target.value
		this.showSubType = true;
	}
	onSubAcctSelectn(e){
		this.newPayee.subAcctType = this.subAcctTypeVal.value
		
	}
	pad_with_zeroes(number, length) {
		    var my_string = '' + number;
		    while (my_string.length < length) {
		        my_string = '0' + my_string;
		    }
		    return my_string;
		}
	
	custDetails(e){
		var that = this;
		if(this.transType ==='SCB'){
			if(this.validatorService.validateCnfrmAcct(this.newPayee.confrmNumbr,this.newPayee.numbr)){
				
				let params = {'acctNo': this.newPayee.confrmNumbr}
				this.payeeService.getCustDetails(params).then(function(res){
					if(res.status==='Success'){


						that.newPayee.bankName = 'SARASWAT BANK'
						that.newPayee.bankCity =  res.details.cityCode;
						that.newPayee.bankLocation =  res.details.branchName
						let bankIfsc = res.details.branchCode.toString()
						let fullIFSC = bankIfsc.length <=3 ? 'SRCB0000'+ that.pad_with_zeroes(bankIfsc,3) : bankIfsc
						that.newPayee.ifsc =  fullIFSC
						that.newPayee.addr1 = res.details.addressLine1
						that.newPayee.addr2 = res.details.addressLine2
						that.newPayee.addr3 = res.details.addressLine3
						that.newPayee.name = res.details.customerName
						that.newPayee.phoneNo = res.details.phone
						let acct_type = res.details.acctType == 'SBPUB' ? 'Savings' : 'Current'
						that.newPayee.acctType = acct_type
						that.acctTypeVal.updateValue(acct_type)
						that.showSubType = true
						// if(that.newPayee.acctType === 'CAPUB'){

						// 	that.newPayee.subAcctType = 'DOMESTIC' 
						// }
						console.log(that.newPayee)
					}else{
						that.throwErr = true;
						that.throwErr_acct = true;
					}
				})
			}
		}
	}

	ifscDetails(e){
		var that = this;
		if(this.transType ==='External'){

			if(this.validatorService.validateIFSC(this.newPayee.ifsc,11))
			{	
				this.ifscValidatn = false;
				let params = {'ifscCode': this.newPayee.ifsc, 'listType':'RTGS'}
				this.payeeService.getBankDetails(params).then(function(res){
					if(res.status==='Success'){
						that.newPayee.bankName = res.details.bankName
						that.newPayee.bankCity =  res.details.CITY;
						that.newPayee.bankLocation =  res.details.branchName
						that.newPayee.micrNo =  res.details.STATE
						that.throwErr_ifsc = false;
					}else{
						that.throwErr_ifsc = true;
					}
				})
				//request for the ifsc details
			}else{
				this.ifscValidatn = true;
			}
		}

	}
	ngAfterViewChecked(){
		var that = this;
		$('.radio-inputbox').on('ifCreated ifClicked ifChanged ifChecked ifUnchecked ifDisabled ifEnabled ifDestroyed check ', function(event){                
                if(event.type ==="ifChecked"){
                    // $(this).trigger('click');  
                    $('input').iCheck('update');
                    that.onChangeTrans()
               	}}).iCheck({
	        checkboxClass: 'icheckbox_square-blue',
	        radioClass: 'iradio_square-blue',
	        increaseArea: '40%' // optional
	    });
		$('.addRadio').on('click', function(){
		  	that.onChangeTrans()
		})
			
	}
	onChangeTrans(){
		this.reset()
		var in1 = $('#addRadio1').parent()
		var in2 = $('#addRadio2').parent()
		if(in1.hasClass('checked')){
			this.transType =  'SCB'
			let acctDeets = $('#acctDetails')
			let acctNos = $('#acctNos')
			acctDeets.remove()
			acctDeets.insertAfter(acctNos)
		}
		if(in2.hasClass('checked')){
			this.transType ='External'
			let acctDeets = $('#acctDetails')
			let acctNos = $('#acctNos')
			acctNos.remove()
			acctNos.insertAfter(acctDeets)
		}

	}
	ngOnInit(){
		var that = this;
		setTimeout(function(){

			$('.radio-inputbox').on('ifCreated ifClicked ifChanged ifChecked ifUnchecked ifDisabled ifEnabled ifDestroyed check ', function(event){                
                    if(event.type ==="ifChecked"){
                        // $(this).trigger('click');  
                        $('input').iCheck('update');
                        that.onChangeTrans();

                   	}}).iCheck({
		        checkboxClass: 'icheckbox_square-blue',
		        radioClass: 'iradio_square-blue',
		        increaseArea: '40%' // optional
		    });
			 	$('.addRadio').on('click', function(){
			  	that.onChangeTrans()
			})
		},100)
	}
	reset(){
		this.newPayee = new NewPayeeDetails();
		// console.log(this.newPayee)
		this.submitStep1 = false;
		this.submitStep2 = false;
		this.showSubType = false;
		this.ifscValidatn = false;
		this.throwErr_acct = false
		this.throwErr_ifsc = false
		this.success = false;
		this.transErr = false;
		this.genOTPErr = false;
		this.addErr = false
		this.trans_errDesc = ''
		this.otpError = ''
		this.addAction = {
			selected : 1,
			linkItems : [1,2],
			showResult : false,
		}
	}
	onClose(){
		this.reset();
		this.transType =  'External';
		let acctDeets = $('#acctDetails')
		let acctNos = $('#acctNos')
		acctNos.remove()
		acctNos.insertAfter(acctDeets)
		$('#addRadio2').iCheck('check');
		
		// this.initialiseFormControl(this.builder)
	}

}