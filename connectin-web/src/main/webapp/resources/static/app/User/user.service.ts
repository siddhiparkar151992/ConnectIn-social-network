import {Injectable, Inject} from 'angular2/core';
import 'rxjs/add/operator/toPromise';
import {Config} from '../app-conf'
import {DataService} from '../shared/data.service'

@Injectable()
export class UserService{
	
	private isLoggedIn = false
	private userData ={
		acctNumber:'',
		userId:''
	}
	private dataService;
	private config;
	constructor(private conf:Config, @Inject(DataService) dataService:DataService) {
		
		this.config = conf.getConfig()
		this.dataService = dataService
	}
	
	getUserDetails(param){
		return this.config.userConfig[param]

	}

	getUserData(){
		return this.dataService.getUserData()
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
}


