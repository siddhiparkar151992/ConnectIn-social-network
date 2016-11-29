import { Component,AfterViewChecked, OnInit, Output, EventEmitter, AfterViewInit, ViewChild} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES,ROUTER_PROVIDERS } from 'angular2/router';
import { CORE_DIRECTIVES, FORM_DIRECTIVES,FormBuilder, Control, ControlGroup, Validators } from 'angular2/common';
import {LoginService} from './authenticate.service'
import {Config} from '../app-conf'
import {ValidatorService} from '../shared/validator.service'
import {DataService} from '../shared/data.service'

declare var $: any;

@Component({
	selector: 'change-password',
	templateUrl: 'static/app/Authenticate/templates/change-password.component.html'
})



export class ChangePasswordComponent implements OnInit, AfterViewChecked{
	private userId;
	private password
	private loginService;
	private router;
	private invalidUser = false;
	private builder;
	private oldPwd;
	private validatorService;
	private newPwd;
	private passwordType;
	private challengeQuestion;
	private challengeAns;
	private formAction= {
		'selected':1
	}
	private pwdChangeSuccess;
	private dataService;
	private confirmPwd;
	private checkedPwdType;
	private serverError;
	private passwodrRegEx= ''
	private challengeQuestions;
	private passwordTypes;
	private formValidator;
	private submitStep1 = false;
	private submitStep2 = false;
	private unequalPwd= false;
	private pwdType;
	private config;
	private otp;
	private otpError;

	constructor(
		private route:Router, 
		private config:Config,
		private logService: LoginService,
		private validator:ValidatorService,
		private builder : FormBuilder,
		private data:DataService){
		this.dataService = data
		this.loginService = logService
		this.builder = builder
		this.router = route
		this.config = config.getConfig();
		this.validatorService = validator
		this.passwordTypes = ['Transaction','Online']
		this.challengeQuestions = ['what is your nick name?','whats name of your first school?']
		this.checkedPwdType = this.passwordTypes[0]
		this.initializeFormControl()

	}
	addActivity(){

		let session = '000' || userData.sessionId.slice(4 , userData.sessionId.length)
		let brCode = '000' || userData.acctNumber.slice(0,3);
		let activity = new logActivity();
		activity.addActivity(userData.userId,brCode,session,'Change Login Password')

	}
	initializeFormControl(){
		this.pwdType= new Control('', Validators.required)
		this.oldPwd = new Control('', Validators.required)
		this.newPwd = new Control('',Validators.required)
		this.confirmPwd = new Control('', Validators.required)
		this.formValidator = this.builder.group({
			oldPwd : this.oldPwd,
			newPwd : this.newPwd,
			confirmPwd:this.confirmPwd,
			pwdType:this.pwdType
		})
	}

	equality(){
		return this.confirmPwd.value == this.newPwd.value
	}
	valid(type){
		if(!type){
			return this.password 
			&& this.validatorService.checkLength(this.oldPwd.value, 6,20)
			&& this.confirmPwd.value!=""
		}
		if(type =="op"){
			return this.oldPwd && this.validatorService.checkLength(this.oldPwd.value, 6,20)
		}
		else if(type =="np"){
			return this.newPwd && this.validatorService.checkLength(this.newPwd.value, 6,20)
		}
		else  if(type =="cp"){
			return this.confirmPwd && this.validatorService.checkLength(this.confirmPwd.value, 6,20)
			
		}
		

	}
	changePwdType(){
		var in1 = $('#inlineRadio1').parent()
		var in2 = $('#inlineRadio2').parent()
		if(in1.hasClass('checked')){
			this.passwordType =  'Online'
		}
		if(in2.hasClass('checked')){
			this.passwordType ='Transaction'
		}
	}


	isStep1Valid(){
		return this.custId && this.custId.valid &&
			this.oldPwd && this.oldPwd.valid &&
			this.newPwd && this.newPwd.valid
			this.passwordType && this.passwordType.valid
	}



	submit(){
		var that = this;
		this.submitStep1 = true
		this.changePwdType()
		this.dataService.changePassword(userData.userId,
			this.oldPwd.value,
			this.newPwd.value,this.passwordType).then(function(res){
				if(res.status=='success'){
					that.formAction.selected=2
					that.pwdChangeSuccess = res.message;
					// that.optSuccessMessage()
				}
				else{

					that.serverError = res.error
				}
		})
		
		
	}
	initComponent(){

		$('#chagePasswordModal').modal({
        	show: 'true'
    	}); 

		

	     //iCheck
    $('input').iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue',
        increaseArea: '20%' // optional
    });


	}

	ngAfterViewChecked(){
		this.initComponent()
	}
	
	ngOnInit(){
		
	}

}