import {Injectable, Inject} from 'angular2/core';
import 'rxjs/add/operator/toPromise';
import {Config} from '../app-conf'
import {DataService} from '../shared/data.service'
@Injectable()
export class SessionManager{



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

	updateSession(){
		return this.dataService.updateSession()
	}

}


