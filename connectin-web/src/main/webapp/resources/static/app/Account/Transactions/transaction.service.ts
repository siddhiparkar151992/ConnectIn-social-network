//# sourceMappingURL=transaction.service.js.mapimport {Injectable, Inject} from 'angular2/core';
import {Injectable, Inject} from 'angular2/core';
import 'rxjs/add/operator/toPromise';
import {DataService} from '../../shared/data.service';
import {Config} from '../../app-conf'

@Injectable()
export class TransactionService {
	private dataService;
	private config;

	constructor( @Inject(DataService) dataService: DataService,
		 @Inject(Config) config: Config) {
		this.dataService = dataService;
		this.config = config.getConfig();
		
	}


	

	getIbFundLimits(params) {
		return this.dataService.getIbFundLimits(params)
	}

	getFundTransefrList(params) {
		return this.dataService.getFundTransferList(params)
	}

	authFundTrans(params){
		return this.dataService.authFundTrans(params)
	}

	transact(params, transType){
		if(transType == this.config.TRANS_TYPES.RTGS || transType == this.config.TRANS_TYPES.SCB){

			return this.dataService.transact(params)
		}
		else if(transType=="imps"){
			return this.dataService.impsPersonToPerson(params)
		}
		else{
			var transFunctionName = this.config.transTypeKeys[transType]
			return this.transferFunds(params,transFunctionName)
		}
	}

	generateOTP(params){
		return this.dataService.generateOTP(params)
	}

	validateOTP(params){
		return this.dataService.validateOTP(params)

	}
	
	transferFunds(params,transType){
		return this.dataService[this.config.transTypes[transType]](params)
	}

	authOTPFundTransfer(params){
		return this.dataService.authOTPFundTransfer(params)
	}

	getTransactionList(params){
		return this.dataService.getAcctTransaction(params)
	}
	generatePDF(params){
		return this.dataService.generatePDF(params)
	}
	deletePDF(params){
		this.dataService.deletePDF(params)	
	}
}

