import {Injectable, Inject} from 'angular2/core';
import 'rxjs/add/operator/toPromise';
import {DataService} from '../../shared/data.service';

@Injectable()
export class PayeeService {
	dataService;
	constructor( @Inject(DataService) dataService: DataService) {
		this.dataService = dataService;
	}

	getBankDetails(params) {
		return this.dataService.getBankDetails(params)
	}
	
	getCustDetails(params) {
		return this.dataService.getCustDetails(params)
	}	

	

	validateOTP(params){
		return this.dataService.validateOTP(params)

	}

	authTransPwd(params){
		return this.dataService.authTransPwd(params)

	}
	addPayeeDetails(params){
		return this.dataService.addPayeeDetails(params)
	}
	updatePayee(params){
		return this.dataService.updatePayee(params)
	}
	generateOTP(params){
		return this.dataService.generateOTP(params)
	}

	authPayeeOTP(params){
		return this.dataService.authOTPFundTransfer(params)
	}

}