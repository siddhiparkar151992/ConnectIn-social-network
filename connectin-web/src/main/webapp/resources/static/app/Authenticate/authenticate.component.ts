import { Component, OnInit, Output, EventEmitter, AfterViewInit, ViewChild} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES,ROUTER_PROVIDERS } from 'angular2/router';
import { CORE_DIRECTIVES, FORM_DIRECTIVES,FormBuilder, Control, ControlGroup, Validators } from 'angular2/common';
import {LoginService} from './authenticate.service'
import {Config} from '../app-conf'
import {DashboardComponent} from '../Dashboard/dashboard.component';
// import {FormBuilder, Control, ControlGroup, Validators } from "angular2/forms";
// import {UserService} from '../User/user.service'
import {DataService} from '../shared/data.service'

declare var $: any;

@Component({
	selector: 'login',
	templateUrl: 'static/app/Authenticate/templates/login.component.html',
	directives: [ROUTER_DIRECTIVES],
	providers:[ROUTER_PROVIDERS,DataService ]
})

@RouteConfig([
	{
		path:'/',
		name:'Dashboard',
		component:DashboardComponent,
		
	},

])
export class LoginComponent implements OnInit{
	private userId;
	private password
	private loginService;
	private userService;
	private dataService;
	private router;
	private invalidUser = false;

	constructor(private data:DataService,private route:Router, private logService: LoginService,private builder : FormBuilder){
		this.loginService = logService

		this.dataService = data
		this.router = route
		this.initialiseFormControl(builder);
	}
	

	private loginValidator: ControlGroup;
	private userName: Control;
	private userPwd: Control;
	private loginSubmit;

	initialiseFormControl(builder){
		this.userName = new Control('', Validators.required)
		this.userPwd = new Control('', Validators.required)
		this.loginValidator= builder.group({
			userName:this.userName,
			userPwd:this.userPwd,
		})

	}
	
	ngOnInit(){

	}


	onLoginSubmit(){
		var that = this
		that.dataService.authenticate(that.userName.value, that.userPwd.value).then(function(res){
			userData = res.userData
			window.location.href='/'
			if(!userData){
				that.invalidUser=  true
				console.log('not a valid user')
			}
		}).error(function(err){
			that.invalidUser=  true
			console.log('not a valid user')
		})
	}

}