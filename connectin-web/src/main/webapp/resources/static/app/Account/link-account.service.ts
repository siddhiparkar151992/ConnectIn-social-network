import {Injectable} from 'angular2/core';
import 'rxjs/add/operator/toPromise';
import { DataService } from '../shared/data.service';
import {Config} from '../app-conf';

@Injectable()
export class LinkService{
	config;
	constructor(private dataService : DataService, conf: Config){
		this.config = conf.getConfig();
	}
  	getparams = {}
	linkAccount(name,num){
	    this.getparams = { 'userId': this.config.userId, 'tokenId': this.config.tokenId, 'acctName' : name, 'acctNum' : num };
		return this.dataService.linkAccount(this.getparams);
	}
	authOTPlinkAcct(transId){
	    this.getparams = { 'userId': this.config.userId, 'tokenId': this.config.tokenId, 'transId' : transId};
		
		return this.dataService.authOTPlinkAcct(this.getparams);

	}
}