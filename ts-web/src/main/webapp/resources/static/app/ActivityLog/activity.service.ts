import {Injectable, Inject} from 'angular2/core';
import 'rxjs/add/operator/toPromise';
import {DataService} from '../shared/data.service';

@Injectable()
export class ActivityService {
	dataService;
	constructor(@Inject(DataService) dataService: DataService) {
		this.dataService = dataService;
	}
	getActivityTypes(){
		return this.dataService.getActivityTypes()
	}
	listActivity(params){
		return this.dataService.listActivity(params)
	}
	generatePDF(params){
		return this.dataService.generatePDF(params)
	}
	deletePDF(params){
		this.dataService.deletePDF(params)	
	}
}