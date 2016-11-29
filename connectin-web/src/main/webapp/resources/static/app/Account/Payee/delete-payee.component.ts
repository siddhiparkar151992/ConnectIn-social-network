import { Component, OnInit, Input,EventEmitter,Output, Injector, Injectable, Inject, AfterViewChecked} from 'angular2/core';
import {FORM_DIRECTIVES, FormBuilder, Control, ControlGroup, Validators} from 'angular2/common';
import { Router } from 'angular2/router';
import {ValidatorService} from '../../shared/validator.service'
import {PayeeService} from './payee.service'
declare var $: any;

@Component({
    selector: 'delete-payee',
    templateUrl: 'static/app/Account/Payee/templates/delete-payee.component.html',
    directives:[FORM_DIRECTIVES]
   	
})

export class DelPayeeComponent implements OnInit{

	private list_type;
	private delete_list;
	constructor(private payeeService:PayeeService){}

	onDelete(){
		let params = {};
		this.payeeService.deletePayee(params).then(function(res){})

	}
}