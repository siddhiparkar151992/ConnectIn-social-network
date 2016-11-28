import { Component, OnInit, Input, OnChanges, Output, EventEmitter} from 'angular2/core';
import {AccountService} from '../account.service';
import {Observable} from 'rxjs/Rx';
import {DatePipe} from "angular2/common";
import {FORM_DIRECTIVES, FormBuilder, Control, ControlGroup, Validators} from 'angular2/common';

declare var userData:any;

@Component({
	
    selector: 'update-email',
    templateUrl: 'static/app/Account/AccountInfo/templates/update-email.component.html',
	pipes: [DatePipe],
	directives: [FORM_DIRECTIVES]
	

   
})


export class UpadteEmailComponent implements OnInit {
	
	private accountService;
	private accountInfo;
	private serverError;
	private successMessage;
	private email:Control;

	constructor(
		private ac:AccountService,
		private buildr:FormBuilder,
		){
		this.accountService = ac
		this.builder = buildr;
	}

	prepareEmailForm(){
		
		this.email =  new Control("",Validators.required)
		this.formValidator= this.builder.group({
			email: this.email,
		})
		

	}

	onFormSubmit(){
		var that = this;
		var params ={
			"customerId" : userData.userId,
			"updateFlag" : "N",
			"emailID" : this.email.value
			}
		this.accountService.updateEmailId(params).then(function(res){
			if(res.statusCode == '0'){
				that.successMessage = "Email updated sucessfully"
				that.serverError = undefined
			}
			else{

				that.serverError = res.error;
				that.successMessage  = undefined
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
