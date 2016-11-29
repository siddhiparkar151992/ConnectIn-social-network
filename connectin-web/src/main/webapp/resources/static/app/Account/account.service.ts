import {Injectable, Inject} from 'angular2/core';
import 'rxjs/add/operator/toPromise';
import {DataService} from '../shared/data.service';

@Injectable()
export class AccountService{
	private dataService;
	accountRepository;
	cleanAccounts;
	loanAccountList;

	constructor( 
		@Inject(DataService) dataService: DataService) {
		this.dataService = dataService
		this.accountRepository = {};
	}
	

	updateEmailId(params){
		return this.dataService.updateEmailId(params)
	}
	getAccountDetails(params){
		return this.dataService.getCustDetails(params)
	}
	get32DigitAccNum(params){
		return this.dataService.get32DigitAccNum(params)

	}

	getAccountList(userId:string, tokenId:string){
		return this.dataService.getAccountList({ userId: userId, tokenId: tokenId })

	}

	filterSavingsAccount(){
		if(!this.accountRepository || this.accountRepository.length ==0){
			return;
		}
		this.cleanAccounts = this.accountRepository.filter(function(res){
			return res.acctType=="SAVING" || res.accType == "CURRENT";
		})
	}
	getAccountSummary(params){
		return this.dataService.getAcctSummary(params)
	}
}


