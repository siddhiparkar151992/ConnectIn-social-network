import { Component, OnInit, Input, OnChanges, Output, EventEmitter} from 'angular2/core';
import {AccountService} from '../account.service';
import {Observable} from 'rxjs/Rx';
import {DatePipe} from "angular2/common";
import {FORM_DIRECTIVES, FormBuilder, Control, ControlGroup, Validators} from 'angular2/common';

declare var userData:any;

@Component({
	
    selector: 'update-adhar',
    templateUrl: 'static/app/Account/AccountInfo/templates/update-email.component.html',
	pipes: [DatePipe],
	directives: [FORM_DIRECTIVES]
	

   
})


export class UpadteEmailComponent implements OnInit {
	
	private accountService;
	private accountInfo;
	private serverError;
	private successMessage;
	private adharNum:Control;
	private builder;
	private formValidator;

	constructor(
		private ac:AccountService,
		private buildr:FormBuilder,
		){
		this.accountService = ac
		this.builder = buildr;
	}

	prepareEmailForm(){
		
		this.adharNum =  new Control("",Validators.required)
		this.formValidator= this.builder.group({
			email: this.adharNum,
		})
		

	}

	onFormSubmit(){
		var that = this;
		var params ={
			"customerId" : userData.userId,
			"emailID" : this.adharNum.value
			}
		this.accountService.updateEmailId(params).then(function(res){
			if(res.statusCode == '0'){
				that.successMessage = "Email updated sucessfully"
			}
			else{

				that.serverError = 'Unable ';
			}

		})
	}
	init(){
		
		this.prepareEmailForm()
		
	}
	ngOnInit(){
		this.init()
	}

	
}
