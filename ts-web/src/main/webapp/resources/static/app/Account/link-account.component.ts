import { Component, OnInit, Input,EventEmitter,Output, Injector} from 'angular2/core';
import {FORM_DIRECTIVES, FormBuilder, Control, ControlGroup, Validators} from 'angular2/common';
import { Router } from 'angular2/router';
import { LinkService } from './link-account.service';
import {ValidatorService} from '../shared/validator.service'

declare var $: any;

class NewAcctDetails {
	name: string='';
	numbr: number;
	transId : number;
	otp: number;
	finalFlag: string='';
	finalMessage: string='';
}

@Component({
    selector: 'link-account',
    templateUrl: 'static/app/Account/templates/link-account.component.html',
   
})


export class LinkAccountComponent{
	@Output() linkAcc = new EventEmitter();
	private newAccount;
	private acctDetails;
	private linkFormValidator: ControlGroup;
	private acctName: Control;
	private acctNum: Control;
	private acctOTP: Control;
	private submitStep1 = false;
	private submitStep2 = false;
	private  success = false;
	private linkAction = {
		selected : 1,
		linkItems : [1,2],
		showResult : false,
	}
	initialiseFormControl(builder){
		this.acctName = new Control('', Validators.required)
		this.acctNum = new Control('', Validators.required)
		this.acctOTP = new Control('', Validators.required)
		this.linkFormValidator= builder.group({
			acctName:this.acctName,
			acctNum:this.acctNum,
			acctOTP:this.acctOTP,
		})

	}
	tabNext(ind){
		if(ind==1){

		}
		if(ind==2){

		}

	}
	constructor(private linkService: LinkService, private builder : FormBuilder, private validatorService: ValidatorService){
		this.newAccount = new NewAcctDetails();
		this.initialiseFormControl(builder)
	}
	
	setStp1Vals(data){
		data = data[0]
		if(data.responseFlag === 'Success'){
			this.linkAction.selected = 2;
			this.newAccount.transId = data.transactionID
		}
	}
	setStp2Vals(data){
		data = data[0]
		if(data.responseFlag === 'Success'){
			this.linkAction.selected = 3;
			this.success = !this.success;
			this.linkAction.showResult = true;
			this.newAccount.finalFlag = data.responseFlag
			this.newAccount.finalMessage = data.responseMessage
		}
	}
	step1Action(){
		let newName = this.newAccount.name;
		let newAccNum = this.newAccount.numbr;
		// this.linkService.linkAccount(newName, newAccNum).then(res => {
		// 	this.setStp1Vals(res.json())

		// })
		this.setStp1Vals([{
				transactionID: 6678678,
				responseFlag:'Success',
				responseMessage:'Account has been successfully linked with Primary Acount'

			}])
	}


	step2Action(){
		let transId = this.newAccount.transId;
		// this.linkService.authOTPlinkAcct(transId).then(res => {
		// 	this.setStp2Vals(res.json())
		// 	this.linkAcc.emit('Successful')
		// })
		this.setStp2Vals([{
        	responseFlag : 'Success',
        	responseMessage: 'A/C No.: 55230000001156 was successfully added to your account.'
        }])
			this.linkAcc.emit('Successful')
	}
	nextStep(currentIndex){

		if (currentIndex == 1) {
			this.submitStep1 = true;
			if(this.acctName.touched && this.acctNum.touched && this.acctName.valid  && this.acctNum.valid && this.validatorService.validateAcctName(this.newAccount.name) && this.validatorService.validateAcctNum(this.newAccount.numbr, 6) )
				this.step1Action()
			else{
				// console.log(false)
			}
		}
		else if(currentIndex == 2){

			this.submitStep2 = true;
			if(this.acctOTP.touched && this.acctOTP.valid  && this.validatorService.validateOTP(this.newAccount.otp,4))
				this.step2Action()
			else{
				// console.log(false)
			}
			
		}
	}

	onClose(){
		this.newAccount = new NewAcctDetails();
		this.submitStep1 = false;
		this.submitStep2 = false;
		this.success = false;
		this.linkAction = {
			selected : 1,
			linkItems : [1,2],
			showResult : false,
		}
	}

}