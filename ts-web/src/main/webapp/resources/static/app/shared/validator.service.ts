import {Injectable} from 'angular2/core';
import {Config} from '../app-conf';
import { Control} from 'angular2/common';
declare var $:any;

interface ValidationResult {
 [key:string]:boolean;
}


@Injectable()
export class ValidatorService {
	private validations;
	constructor(private conf: Config) {
		this.validations = conf.getConfig().validations
	}
	validateAmount(amt) {
		if (isNaN(parseInt(amt)) ) {
			return false
		}
		return true
	}

	 validateChequeNum(control: Control) { 
		if(!control.value || !$.isNumeric(control.value)){
			return undefined
		}
	   return {'validateChequeNum':true}
	 }


	checkLength(str,lo,hi){
		return str!="" && str.length >=lo && str.length <hi;
	}

	 validateString(password: string) {
		if (!password || password.trim() =="") {
			return false
		}
		return true
	}
	validateNumber(num){
		return $.isNumeric(num)
	}

	 validateContactNum(contactNum)  { 
 		console.log('validating')
	   if (contactNum !="" && $.isNumeric(contactNum) && contactNum.length <12 && contactNum.length>8){
	     return true
	   }

	 
	   return false;
	 }


	validateEmail(str) {
		if(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$/.test(str)) {
			return true;
		}
		return false;
    }

    

	checkPasswordComplexity(pwd) {
        var regularExpression = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;
        var valid = regularExpression.test(pwd);
        return valid;
    }


	 validateOTP(otp, limit) {
		if (isNaN(parseInt(otp)) || !isFinite(parseInt(otp)) || (otp.toString().length < parseInt(limit) || otp.toString().length > parseInt(limit) )) {
			return false
		}
		return true;
	}
	validateAcctName(value){
		
		var regex = /^[a-zA-Z '-]{3,}$/;
		if (value.trim() === '' || !regex.test(value)) {
			return false;
		}
		return true;
		
	}
	validateAcctNum(value, limit:number){
		if(isNaN(value) || value.toString().length != limit){
			return false;
		}
		return true;
	}

	validateNumbers(value,valueType, lowlimit:number, highlimit:number){
		if(valueType === 'Account'){

			if(value.trim() === '' || isNaN(value) || (value.toString().length <= lowlimit && value.toString().length >= highlimit)){
				return false;
			}
		}
		else if(valueType === 'Password'){
			if(value.trim() === '' || (value.toString().length <= lowlimit && value.toString().length >= highlimit)){
				return false;
			}
		}
		return true;
	}

	validateIFSC(value, limit:number){
		var regex =  /[A-Z|a-z]{4}[0][\d]{6}$/;
		if(value.trim() === '' || value.toString().length != limit || !(regex.test(value))){
			return false;
		}
		return true;
	}

	validateCnfrmAcct(value, acctVal){
		if(isNaN(value) || value.toString() != acctVal.toString()){
			return false;
		}
		return true;
	}
	validateAddress(value){
		if(value.trim() === '' || !(isNaN(value) ))	{
			return false;
		}
		return true;
	}

}
