import {Component,OnInit} from "angular2/core";
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS,Route,  Router} from 'angular2/router';
import {StorylineComponent} from "../storyline/storyline.component";
import {ProfileHeaderComponent} from "../headers/profile/header.component";
declare var $:any;

@Component({
	selector:'home',
	template:'<profile-header></profile-header><div><router-outlet></router-outlet></div>',
	directives:[ROUTER_DIRECTIVES, ProfileHeaderComponent],
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
