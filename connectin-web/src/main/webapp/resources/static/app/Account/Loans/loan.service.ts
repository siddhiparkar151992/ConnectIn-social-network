import { Injectable, OnInit } from 'angular2/core';
import { Headers, Http } from 'angular2/http';
import { DataService } from '../../shared/data.service';
import {Config} from '../../app-conf';

@Injectable()
export class LoanService {
	config;
	constructor(private dataService : DataService, conf: Config){
		this.config = conf.getConfig();

	}
  	getparams = {}
	getLoanDeets(){
	    this.getparams = { 'userId': this.config.userId, 'tokenId': this.config.tokenId };
	    return this.dataService.getLoanDtls(this.getparams)
			

  	}
	getFutureDetails(params){
		return this.dataService.getFutureDetails(params);
	}
	getLoanStatement(params){
		return this.dataService.getLoanStatement(params);
	}
	getLoanCertificate(params){
		return this.dataService.getLoanCertificate(params);
		
	}
}