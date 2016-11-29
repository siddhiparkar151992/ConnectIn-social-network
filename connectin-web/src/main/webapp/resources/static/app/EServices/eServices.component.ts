import { Component, OnInit, Output, EventEmitter, AfterViewInit, ViewChild} from 'angular2/core';
import { OnActivate,ComponentInstruction,Route, Router,ROUTER_DIRECTIVES,RouteConfig} from 'angular2/router';
import {Utility} from '../Util/util.service'
import {Config} from '../app-conf'
import {Observable} from 'rxjs/Rx';
import {InwardCComponent} from '../Cheque/inward-cc.component'
import {StopChequePayComponent} from '../Cheque/stop-cheque.component'
import {RequestChequebookComponent} from '../Cheque/request-chequebook.component'
import {ActivityComponent} from '../ActivityLog/activity.component'
import {SessionManager} from '../session-manager/session-manager.service'
import {CardlessCashComponent} from '../CardlessCash/cardless-cash.component'
import {UpadteEmailComponent} from '../Account/AccountInfo/update-email.component'
declare var $: any;

@Component({
	selector: 'e-services',
	templateUrl: 'static/app/EServices/e-services.component.html',
	directives: [UpadteEmailComponent,ActivityComponent,InwardCComponent,StopChequePayComponent,RequestChequebookComponent,ROUTER_DIRECTIVES]
})


@RouteConfig([
  { path: "/stopChequePayment",  component: StopChequePayComponent, useAsDefault: true },
  { path: "/inwardChequeClearance",  component: InwardCComponent },
  { path: "/requestNewChequeBook", component: RequestChequebookComponent },
  { path: "/activityLog", component: ActivityComponent },
  { path: "/cardlessCash", component: CardlessCashComponent },
  { path: "/updateEmail", component: UpadteEmailComponent },
  { path: "/linkAdharNumber", component: UpadteEmailComponent }

])
export class EServiceComponent implements OnInit{
	private router:Router
	private context;
	constructor(){
		
	}


	ngOnInit(){
		
	}
}