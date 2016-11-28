//# sourceMappingURL=transaction.service.js.mapimport {Injectable, Inject} from 'angular2/core';
import {Injectable, Inject} from 'angular2/core';
import 'rxjs/add/operator/toPromise';
import {DataService} from '../shared/data.service';

@Injectable()
export class ChequeService {
	private dataService;
	constructor( @Inject(DataService) data: DataService) {
		this.dataService = data;
	}

	chequeBookRequest(params) {
		return this.dataService.chequeBookRequest(params)
	}

	clearingCheque(params) {
		return this.dataService.clearingCheque(params)
	}
	getCustDetails(params){
		return this.dataService.getCustDetails(params)
	}

	stopChequePayment(params){
		return this.dataService.stopChequePayment(params)
	}

	chequeStatusRequest(params){
		return this.dataService.chequeStatusRequest(params)
	}	
	

	singleChequePositivePay(params){
		return this.dataService.singleChequePositivePay(params)
	}
	browseChequePositivePay(params){
		return this.dataService.browseChequePositivePay(params)
	}
	multipleChequePositivePay(params){
		return this.dataService.multipleChequePositivePay(params)
	}
}

