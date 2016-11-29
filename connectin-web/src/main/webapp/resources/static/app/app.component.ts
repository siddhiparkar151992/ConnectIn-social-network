import { Component, OnInit} from 'angular2/core';
import {ChartComponent} from './Account/Charts/charts.component';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS,Route,  Router} from 'angular2/router';
import {DashboardComponent} from './Dashboard/dashboard.component';
import {EServiceComponent} from './EServices/eServices.component'
import {AccountService} from './Account/account.service'
import {DataService} from './shared/data.service'
import {RestAPI} from './shared/restapi.service'
import {Config} from './app-conf';
import {TransactionService} from './Account/Transactions/transaction.service';
import {ValidatorService} from './shared/validator.service';
import { LoanService } from './Account/Loans/loan.service'
import { LinkService } from './Account/link-account.service'
import {Utility}  from './Util/util.service'
import {LoginComponent} from './Authenticate/authenticate.component'
import {ChangePasswordComponent} from './Authenticate/change-password.component'
import {LoginService} from './Authenticate/authenticate.service'
import {UserService} from './User/user.service'
import {SessionManager} from './session-manager/session-manager.service'
import {PayeeService} from './Account/Payee/payee.service' 
import {OTPService} from './OTP/otp.service'
import {ChequeService} from './Cheque/cheque.service'
import {ChequeComponent} from './Cheque/cheque.component'
import {AccountInfoComponent} from './Account/AccountInfo/account-info.component'
import {CardlessCashService} from './CardlessCash/cardless-cash.service'
import {ActivityService} from './ActivityLog/activity.service';

declare var $: any;
declare var userData:any;
declare var logActivity:any;

@Component({
	selector: 'app',
	template: "<div><router-outlet></router-outlet></div>",
	directives: [ROUTER_DIRECTIVES],
	providers: [ActivityService,CardlessCashService,ChequeService, OTPService,SessionManager,UserService,Config, LoginService, AccountService, DataService, RestAPI, TransactionService, ValidatorService,LoanService, LinkService, Utility, PayeeService],
	
	
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
		
	},
	{
		path:'/eServices/...',
		name:'EServiceComponent',
		component:EServiceComponent,
		
	},

	{
		path:'/changePassword',
		name:'ChangePassword',
		component:ChangePasswordComponent,
		
	},
	{
		path:'/accountNumberInfo',
		name:'AccountInfo',
		component:AccountInfoComponent
	}

])

export class AppComponent implements OnInit{
	

}

