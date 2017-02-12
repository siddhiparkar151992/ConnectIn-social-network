import { Component, OnInit} from 'angular2/core';

import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS,Route,  Router} from 'angular2/router';
import {DashboardComponent} from './dashboard/dashboard.component';

declare var $: any;
declare var userData:any;
declare var logActivity:any;

@Component({
	selector: 'app',
	template: "<div><router-outlet></router-outlet></div>",
	directives: [ROUTER_DIRECTIVES],
	providers: [],
	
	
})

@RouteConfig([
	{
		path:'/',
		redirectTo:['Dashboard']
		
	},
	{
		path:'/dashboard',
		name:'Dashboard',
		component:DashboardComponent,
		useAsDefault:true
		
	}

])

export class AppComponent implements OnInit{
	

}

