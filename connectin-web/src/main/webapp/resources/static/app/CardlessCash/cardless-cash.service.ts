//# sourceMappingURL=transaction.service.js.mapimport {Injectable, Inject} from 'angular2/core';
import {Injectable, Inject} from 'angular2/core';
import 'rxjs/add/operator/toPromise';
import {DataService} from '../shared/data.service';

@Injectable()
export class CardlessCashService {
	private dataService;
	constructor( @Inject(DataService) data: DataService) {
		this.dataService = data;
	}

	validateTransactionPassword(params){
		return this.dataService.authFundTrans(params)
	}

	cardlessCashRequest(params) {
		return this.dataService.cardlessCashRequest(params)
	}

	cardlessCashCancelRequest(params) {
		return this.dataService.cardlessCashCancelRequest(params)
	}

	cardlessCashStatementRequest(params){
    	return this.dataService.cardlessCashStatementRequest(params)
   }
	getAccountDetails(params){
    	return this.dataService.getCustDetails(params)
   }
	
}

