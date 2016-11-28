import { Component, OnInit,OnChangesAfterViewChecked} from 'angular2/core';
import { Router} from 'angular2/router';
import {DataService} from '../../shared/data.service'
import {Http} from 'angular2/http';
import {LoginService} from '../authenticate.service'
import {ChallengeResponseComponent} from '../../challenge-response/challenge-response.component'
import { CORE_DIRECTIVES, FORM_DIRECTIVES,FormBuilder, Control, ControlGroup, Validators } from 'angular2/common';
import {ChangePasswordComponent} from '../change-password.component'
import {Config} from '../../app-conf'
import {Dataservice} from '../../shared/data.service'
import {RestAPI} from '../../shared/data.service'
import {ValidatorService} from '../../shared/validator.service'
import {Utility} from '../../Util/util.service'
declare var $: any;

@Component({
	selector:'forgot-password',
	directives:[ChallengeResponseComponent,ChangePasswordComponent],
	templateUrl:'static/app/Authenticate/forgot-password/forgot-password.component.html',

})
export class AppComponent implements OnInit{
	
	private challengeQuestions1;
	private custId;
	private componentData= {
		'context':'forgot-password'
		'userId':undefined,
		'challengeQuestions':[]
	};
	private userData;
	private otp;
	private oldPwd;
	private confirmChPwd
	private builder;
	private router;
	private serverErr;
	private pwdChangeSuccess;
	private http;
	private finalError;
	private changedPwd;
	private selectedStep= 1;
	private submitStep1 =false;
	private submitStep2 = false;
	private passwordType;
	private validatorService;

	private choice1;
	private choice2;
	private choice3;
	private chError;
	private showChallenge = false;
	private config;
	private authService;

	constructor(private builder:FormBuilder,
		private router:Router,
		private http: Http,
		private vs:ValidatorService,
		private conf:Config,
		private authService:LoginService){
		this.challengeQuestions1= []
		this.builder = builder
		this.router = router
		this.http = http
		this.validatorService = vs;
		this.config = conf.getConfig()
		this.initializeUserForm()
		this.authService = authService;
		// this.initializeFormControl()

	}

	optSuccessMessage(){
		var passwordType = this.passwordType == "Transaction" ? this.config.otpTypes.TRANS_CHANGE_OTP : this.config.otpTypes.LOGIN_OTP
		var params = {
					'userId':this.custId.value,
					'otpType':passwordType
				}
		this.authService.otpSuccessMesage(params)

	}


	valid(type){
		if(!type){
			return this.validatorService.checkLength(this.oldPwd.value, 6,20)
			&& this.confirmChPwd.value!=""
		}
		
		
		if(type =="np"){
			return this.changedPwd && this.validatorService.checkLength(this.changedPwd.value, 6,20)
		}
		else  if(type =="cp"){
			return this.confirmChPwd && this.validatorService.checkLength(this.confirmChPwd.value, 6,20)
			
		}
		

	}


	onChangePassword(){
		

		var that = this;
		return $.ajax({
			type:'POST',
			url:'/setPassword',
			dataType:'json',
			data:JSON.stringify({
				"count":1,
				"userId": this.custId.value, 
				'transPwd':this.changedPwd.value,
				'onlinePwd':this.changedPwd.value,
				'pwdType':this.passwordType
			}),
			contentType:'application/json'
			
		}).done(function(res){
			if(res.status=='Success'){
				that.pwdChangeSuccess = res.message
				that.selectedStep = 4;
				that.optSuccessMessage()
				
			}
			else{
				that.serverErr = res.message
				console.log(res)
			}
			
		})


	}

	submitPwdForm(){
		this.submitStep2  = true;
		var in1 = $('#inlineRadio1').parent()
		var in2 = $('#inlineRadio2').parent()
		if(in1.hasClass('checked')){
			this.passwordType =  'Online'
		}
		if(in2.hasClass('checked')){
			this.passwordType ='Transaction'
		}


		var that = this;
		var params = {
					'userId':this.custId.value,
					'otpType':that.config.otpTypes.TRANS_OTP
				}
		this.authService.generateOTP(params).then(function(res){
			if(res.status=='Success'){
				that.selectedStep = 3
			}
		})
	}

	validateOTP(){
		var that = this;
		var params = {
			"userId" : this.custId.value,
			"otp" :that.otp
			}
		that.authService.validateOTP(params).then(function(res){
			if(res.status == "Success"){
				that.onChangePassword()
			}
			else{
				that.otpError = res.message
			}
					
		})
	}
	onChResponse(event){
		var that = this;
		this.selectedStep = 2
		setTimeout(function(){
					$('.radio-inputbox').iCheck({
			        checkboxClass: 'icheckbox_square-blue',
			        radioClass: 'iradio_square-blue',
			        increaseArea: '20%' // optional
			    });
		},0)
		that.changedPwd = new Control('', Validators.required)
		that.confirmChPwd = new Control('', Validators.required)
		that.oldPwd  = new Control('', Validators.required)
		that.formValidator2 = that.builder.group({
			changedPwd : that.changedPwd,
			confirmChPwd: that.confirmChPwd
		})

	}

	initializeUserForm(){
		this.custId = new Control('',Validators.required)
		this.userFomrValidator = this.builder.group({
			custId:this.custId
		})


	}

	
	changePwdType(index){
		
		if(index==1){
			this.passwordType='Online'
		}
		else{
			this.passwordType='Transaction'
		}
	}


	onSubmit(){
		challengeResponse= [
			{'id':1,'cq':this.cq1.value, 'cr':this.cr1.value},
			{'id':2,'cq':this.cq2.value, 'cr':this.cr2.value},
			{'id':3,'cq':this.cq3.value, 'cr':this.cr3.value}
		]
		return $.ajax({
			type:'POST',
			url:'/forgotPassword',
			dataType:'json',
			data:JSON.stringify({
				"userId": this.custId.value, 
				'challengeResponse':challengeResponse ,
				'oldPwd':this.oldPwd.value, 
				'newPwd':this.changedPwd.value,
				'pwdType':this.passwordType
			}),
			contentType:'application/json'
			
		}).done(function(res){
			if(res.status=='Success'){
				// window.location.href='/login'
			}
			else{
				this.serverErr = res.message
				console.log(res)
			}
			
		})
	}
	validateUser(){
		if(!this.custId.valid || this.custId.value.length <=5){
			return 
		}
		var that = this;
		return $.ajax({
			type:'POST',
			url:'/getChallengeReponse',
			dataType:'json',
			data:JSON.stringify({'userId':this.custId.value}),
			contentType:'application/json'
			
		}).done(function(res){
			if(res.status=='success'){
				that.finalError = undefined
				that.showChallenge = true
				that.componentData.userId = that.custId.value
				that.componentData.challengeQuestions = res.data
				that.componentData.context = 'forgot-password'
				
			}
			else{
				that.finalError = res.message
			}
			
			
		})
	}

	initComponent(){
		 $('.radioBtn').iCheck({
	        checkboxClass: 'icheckbox_square-blue',
	        radioClass: 'iradio_square-blue',
	        increaseArea: '20%' // optional
	    });
	}
	
	ngOnInit(){
		
	}

	
}

