import {Component,OnInit} from "angular2/core";
import {NotificationComponent} from "../../notifications/notifications.component";


declare var $:any;

@Component({
	selector:'profile-header',
	templateUrl: '/resources/static/app/modules/headers/profile/header.component.html',
	providers:[],
	directives:[NotificationComponent],
	styleUrls: ['resources/styles/css/headers/profile-header.css']
	
})

export class ProfileHeaderComponent{
	
}
