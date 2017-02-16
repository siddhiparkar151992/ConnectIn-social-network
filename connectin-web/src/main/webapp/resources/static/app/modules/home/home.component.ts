import {Component,OnInit} from "angular2/core";
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS,Route,  Router} from 'angular2/router';
import {StorylineComponent} from "../storyline/storyline.component";

declare var $:any;

@Component({
	selector:'home',
	template:'<div><router-outlet></router-outlet></div>',
	directives:[ROUTER_DIRECTIVES],
	providers:[]
	
})

@RouteConfig([
              {
            	  path:'/',
            	  redirectTo:['Storyline']
              },
              {
            	  path:'/storyline',
            	  name:'Storyline',
            	  component:StorylineComponent,
            	  useAsDefault:true
              }
              ])
export class HomeComponent{
	
}
