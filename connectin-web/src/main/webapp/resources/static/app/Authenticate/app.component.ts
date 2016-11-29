import { Component } from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router} from 'angular2/router';
import {LoginComponent} from './authenticate.component'


@Component({
	selector: 'app',
	template: '<router-outlet></router-outlet>',
	directives: [ROUTER_DIRECTIVES],
	providers: [ROUTER_PROVIDERS],
	
	
})

@RouteConfig([
	{
		path:'/',
		component:LoginComponent
		
	}
	
])

export class AppComponent {
	getBackground(){
		if(window.location.pathname!='/login'){
			return 'home-bg'
		}
	}

	constructor(private router:Router){
		console.log('')
	}
}

