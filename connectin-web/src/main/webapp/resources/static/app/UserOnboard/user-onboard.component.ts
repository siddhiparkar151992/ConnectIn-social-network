import { Component, OnInit,OnChangesAfterViewChecked} from 'angular2/core';
import { Router} from 'angular2/router';
import {DataService} from '../shared/data.service'
import {Http} from 'angular2/http';
import {ChallengeResponseComponent} from '../challenge-response/challenge-response.component';
import { CORE_DIRECTIVES, FORM_DIRECTIVES,FormBuilder, Control, ControlGroup, Validators } from 'angular2/common';
declare var $: any;

@Component({
	selector:'onboard-user',
	directives:[ChallengeResponseComponent],
	templateUrl:'static/app/UserOnboard/templates/user-onboard.component.html'
})
export class AppComponent implements OnInit,OnChanges,AfterViewChecked{
	
	private selected=1;
	private userId;
	private debitCardNo;
	private debitPinNo;
	private fromDate;
	private cvv;
	private serverError;
	private pwdFormValidator;
	private pwd1;
	private confirmPwd1;
	private pwd2;
	private passwordTypes= [
	]
	private chErr;
	private formValidator;
	private confirmPwd2;
	private cq1;
	private cq2;
	private cq3;
	private cr1;
	private cr2;
	private cr3;
	private passwordChangeError;
	private passwordType= 'Online'
	private componentData={
		'userId':undefined,
		'challengeQuestions':[],
		'context':'user-onboard'
	}
	private invalidFromDate = false;


	private brCode;
	private custName;
	private add1;
	private add2;

	private add3;
	private pincode;
	private phoneNum;
	private city;



	constructor(
		private builder : FormBuilder){
		this.initializeFormControl()
	}


	changePwdType(index,value){
		var pwdType = value==1 ? 'Online' : 'Transaction'
		this.passwordTypes[index] = pwdType
	}
	
	initSetPasswordForm(){
		this.pwd1 = new Control('', Validators.required)
		this.confirmPwd1 = new Control('',Validators.required)
		this.pwd2 = new Control('', Validators.required)
		this.confirmPwd2 = new Control('',Validators.required)

		this.pwdFormValidator = this.builder.group({
			pwd1 : this.pwd1,
			confirmPwd1 : this.confirmPwd1,
			pwd2 : this.pwd2,
			confirmPwd2 : this.confirmPwd2
			
		})

	}
	initializeFormControl(){
		this.userId = new Control('', Validators.required)
		this.debitCardNo = new Control('',Validators.required)
		this.debitPinNo = new Control('', Validators.required)
		this.cvv = new Control('', Validators.required)

		this.formValidator = this.builder.group({
			userId : this.userId,
			debitCardNo : this.debitCardNo,
			debitPinNo:this.debitPinNo,
			cvv:this.cvv
		})
	}

	populateChQuestions(){
		var that = this;
		return $.ajax({
			type:'POST',
			url:'/getChallengeReponse',
			dataType:'json',
			data:JSON.stringify({'userId':this.userId.value}),
			contentType:'application/json'
			
		}).done(function(res){
			if(res.status=='success'){
				setTimeout(function(){
					that.componentData.userId = that.userId.value
					that.componentData.challengeQuestions = res.data
				},0)
				
			}
			else{
				that.finalError = res.message
			}
			
			
		})
	}

	onboardUser(){
		var that = this;
		return $.ajax({
			type:'POST',
			url:'/onboardUser',
			dataType:'json',
			data:JSON.stringify({
				'userId':this.userId.value,
				'debitCardNo':this.debitCardNo.value,
				'debitPinNo':this.debitPinNo.value,
				'cvv':this.cvv.value
			}),
			contentType:'application/json'
			
		}).done(function(res){
			if(res.status=='Success'){
				that.selected = 2
				// that.initializeFormControl()

				
			}
			else{
				that.finalError = res.message
			}
			
			
		})

	}


	setChResponse(chResp){
		var that =this;
		$.ajax({
			type:'POST',
			url:'/setChallengeReponse',
			dataType:'json',
			data:JSON.stringify({
				"userId": this.componentData.userId, 
				'challengeResponse':chResp
			}),
			contentType:'application/json'
			
		}).done(function(res){
			if(res.status= 'success'){
				window.location.href= '/login'
			}
			else{
				that.chErr= res.message
			}
			console.log(res)
			
		})	
	}


	onSubmit(event){
		var that = this;
		var chResp = event.challengeResponse
		return $.ajax({
			type:'POST',
			url:'/setPassword',
			dataType:'json',
			data:JSON.stringify({
				"count":1,
				"userId": this.userId.value, 
				'transPwd':this.pwd1.value,
				'onlinePwd':this.pwd2.value,
				'pwdType':this.passwordType
			}),
			contentType:'application/json'
			
		}).done(function(res){
			if(res.status=='Success'){
				that.pwdChangeSuccess = res.message
				that.setChResponse(chResp)
			}
			else{
				that.passwordChangeError = res.message
				
			}
			
		})

	}
	nextStep(index){
		var that = this;
		this.submitStep1 = true;
		if(index==2){
			this.selected = 3;
			this.initSetPasswordForm()
			this.populateChQuestions()
		}

		var invalidFromDate = !$('.exp-date').val() ? true: false;
		
		if(index==1 && this.formValidator.valid){
			this.onboardUser()
		}

	}
	ngAfterViewChecked(){
		// this.initSetPasswordForm()
		 $('.exp-date').datepicker();  
		 $('.radioBtn1').iCheck({
	        checkboxClass: 'icheckbox_square-blue',
	        radioClass: 'iradio_square-blue',
	        // increaseArea: '20%' // optional
    		});

		 $('.radioBtn2').iCheck({
	        checkboxClass: 'icheckbox_square-blue',
	        radioClass: 'iradio_square-blue',
	        // increaseArea: '20%' // optional
    		});
	}
	ngOnChanges(){
		
	}
	ngOnInit(){
		
	}

	
}

