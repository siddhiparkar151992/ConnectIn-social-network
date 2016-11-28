import { Component,Output,EventEmitter,OnInit,OnChangesAfterViewChecked, Input} from 'angular2/core';
import { Router} from 'angular2/router';
import {DataService} from '../shared/data.service'
import {Http} from 'angular2/http';
import {LoginService} from './Auhtenticate/authentication.service'
import { CORE_DIRECTIVES, FORM_DIRECTIVES,FormBuilder, Control, ControlGroup, Validators } from 'angular2/common';
declare var $: any;

@Component({
	selector:'challenge-response',
	templateUrl:'static/app/challenge-response/challenge-response.component.html'
})
export class ChallengeResponseComponent implements OnInit,OnChanges,AfterViewChecked{
	
	@Input() componentData= {
		'challengeQuestions':[]
	};

	@Output() onFormSubmit= new EventEmitter();
	@Output() onChResp= new EventEmitter();
	private challengeQuestions1;
	private custId;
	private cq1;
	private cq2;
	private cq3;
	private cr1;
	private cr2;
	private cr3;
	private oldPwd;
	private confirmChPwd
	private builder;
	private router;
	private http;
	private finalError;
	private changedPwd;
	private selectedStep= 1;
	private submitStep1 =false;
	private passwordType;

	private choice1;
	private choice2;
	private choice3;
	private chError;

	constructor(private builder:FormBuilder,
		private router:Router,
		private http: Http){
		this.challengeQuestions1= []
		this.builder = builder
		this.router = router
		this.http = http
		
		// this.initializeFormControl()

	}



	initializeFormControl(){
		if(this.componentData.challengeQuestions && this.componentData.challengeQuestions.length>0){
			
			this.cq1 = new Control(this.componentData.challengeQuestions[0][1],Validators.required)
			this.cq2 = new Control(this.componentData.challengeQuestions[1][1],Validators.required)
			this.cq3 = new Control(this.componentData.challengeQuestions[2][1],Validators.required)
			this.cr1 = new Control('',Validators.required)
			this.cr2 = new Control('', Validators.required)
			this.cr3 = new Control('', Validators.required)

			
			
			this.formValidator = this.builder.group({
				cq1: this.cq1,
				cq2: this.cq2,
				cq3: this.cq3,
				cr1: this.cr1,
				cr2: this.cr2,
				cr3: this.cr3
			})
		}


		

	}

	validateChRes(){
		var that =this;
		$.ajax({
			type:'POST',
			url:'/validateChallengeResponse',
			dataType:'json',
			data:JSON.stringify({
				"userId": this.componentData.userId, 
				'challengeResponse':[
				[this.cq1.value.split(',')[0],this.cr1.value],
				[this.cq2.value.split(',')[0],this.cr2.value],
				[this.cq3.value.split(',')[0],this.cr3.value]
				] 
			}),
			contentType:'application/json'
			
		}).done(function(res){
			if(res.status=='success'){
				that.selectedStep=2
				
				that.onChResp.emit()
			}
			else{
				that.chError = res.message
				console.log(res)
			}
			
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

	
	nextStep(step){

		if(step==1 && this.formValidator.valid){
			if(this.componentData.context== 'user-onboard'){
				var eventData ={
				"userId": this.componentData.userId, 
				'challengeResponse':[
				[this.cq1.value.split(',')[0],this.cr1.value],
				[this.cq1.value.split(',')[0],this.cr2.value],
				[this.cq1.value.split(',')[0],this.cr3.value]
				] 
			}
				this.onFormSubmit.emit(eventData)
			}
			else{
				this.validateChRes()
			}
	
		}
		else{
			this.submitStep1 = true
		}
	}

	
	
	initComponent(){
		$('.radioBtn').iCheck({
	        checkboxClass: 'icheckbox_square-blue',
	        radioClass: 'iradio_square-blue',
	        increaseArea: '20%' // optional
	    });
	}
	ngAfterViewChecked(){
		this.initComponent()
		// this.initializeFormControl()
	}
	ngOnChanges(changes){
		this.initializeFormControl()
		
	}
	ngOnInit(){
		
	}

	
}

