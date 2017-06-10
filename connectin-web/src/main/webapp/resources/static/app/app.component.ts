import { Component, OnInit} from 'angular2/core';

import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS,Route,  Router} from 'angular2/router';
import {DashboardComponent} from './modules/dashboard/dashboard.component';
import {HeaderComponent} from './common/header/header.component';
import {FooterComponent} from './common/footer/footer.component';
import {UrlConfigService} from './config/url-config.service';
import {UserFeedService} from './common/core/storyline/feed/user-feed/user-feeds.service';
declare var $: any;
declare var userData:any;
declare var logActivity:any;

@Component({
	selector: 'app',
	template: " <index-header></index-header><div><router-outlet></router-outlet></div><index-footer></index-footer>",
	directives: [ROUTER_DIRECTIVES, HeaderComponent, FooterComponent],
	providers: [UrlConfigService, UserFeedService],
	
	
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
	ngOnInit(){
		$('#home-carousel').carousel({
           interval: 500
        });
	}
  
}

