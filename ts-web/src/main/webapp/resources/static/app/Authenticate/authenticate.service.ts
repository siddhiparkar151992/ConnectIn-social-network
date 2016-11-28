import {Injectable, Inject} from 'angular2/core';
import 'rxjs/add/operator/toPromise';
import {Config} from '../app-conf'
import {DataService} from '../shared/data.service'
@Injectable()
export class LoginService{



	private isLoggedIn = false
	private userData ={
		acctNumber:'',
		userId:''
	}
	private dataService;
	private config;
	constructor(@Inject(Config) conf:Config,
		@Inject(DataService) dataService:DataService) {
		this.dataService = dataService
		this.config = conf.getConfig()
	}

	login(userId, password){
		return true
	}


	otpSuccessMesage(params){
		return this.dataService.generateOTP(params)
	}
	
    
    generateOTP(params){
		return this.dataService.generateOTP(params)
	}

	validateOTP(params){
		return this.dataService.validateOTP(params)

	}


	getUserDetails(param){
		return this.config.userConfig[param]

	}

	getUserId(){
		return this.userData.userId
	}

	getUserAccnumber(){
		return this.userData.acctNumber
	}

	setUserDetails(userId, accNumber){
		this.userData.acctNumber = userId
		this.userData.userId = accNumber
	}

	getChallengeRes(){
		return this.dataService.getChallengeRes()
	}

}


