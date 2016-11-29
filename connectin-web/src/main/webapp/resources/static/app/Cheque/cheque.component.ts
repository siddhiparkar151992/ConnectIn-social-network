import { Component, OnInit, Input, OnChanges, Output, EventEmitter} from 'angular2/core';
import {Router,RouteParams,Location,ROUTER_DIRECTIVES} from 'angular2/router';

import {ChequeService} from './cheque.service'
import {FORM_DIRECTIVES, FormBuilder, Control, ControlGroup, Validators} from 'angular2/common';
import {Config} from '../app-conf'
import {Utility} from '../Util/util.service'
declare var userData: any;

@Component({
	selector:'cheque-component',
	templateUrl:'static/app/Cheque/templates/cheque.component.html',
	inputs:['context'],
	// directives: [ROUTER_DIRECTIVES]

})
export class ChequeComponent implements OnInit, OnChanges {
	
	@Input() context;
	@Input() acctList;

	private routeConf;
	private config;
	private utilServcice;
	private currentAccount;
	private formValidator;
	private acctNumber:Control;
	private balance;
	private clearingDate;
	private chequeService;
	private builder;
	private currency;

	/*Stop payment */
	private fromChequeNum:Control;
	private toChequeNum:Control;
	private chequeDate:Control;
	private requestDate:Control;
	private chequeAmount:Control;
	private payeeName:Control;
	private remark:Control;

	/*request chequebook*/
	private addrType:Control;
	private accAddressType:Control;
	private address;
	private deliveryType:Control;
	private chequeBookNumber:Control;
	private addressTypes=[
		{id:1,name:'Customer address'},
		{id:2,name:'Branch address'},
		{id:2,name:'Present address'},
		{id:2,name:'Permanent address'},
		{id:2,name:'Office address'}

	]
	private router;
	private deliveryDays=[
		{id:1,value:'Any day'},
		{id:6,value:'Saturday/Sunday'}
	]
	private selctedDeliveryDay= this.deliveryDays[0]
	private selectedAdType=this.addressTypes[0]


	constructor(
		private location:Location,
		private route:Router,
		private routeParams:RouteParams,
		private cs:ChequeService,
		private buildr:FormBuilder,
		private conf:Config,
		private utilService:Utility
		){
		this.builder = buildr;
		this.chequeService = cs;
		this.config = conf.getConfig();
		this.router = route
		this.router.subscribe(function(route){
			console.log('route', route)
		});
		this.init()
	}

	init(){
		if(this.context == "ICC"){
			
			this.prepareICCForm()
		}

		else if(this.context=="SP"){
			this.prepareSPForm()
		}

		else if(this.context == "RNC"){
			this.prepareRNCForm()

		}
	}

	stopChequePayment(){
		var params ={
			'accountNo':userData.userId,
			'chequeNo':this.fromChequeNum.value
		}
		this.chequeService.stopChequePayment(params).then(function(res){
			console.log()
		})	
	}

	inwardClearingCheque(){
		var params ={
			'customerId':userData.userId,
			'accountNo':this.acctNumber.value
		}
		this.chequeService.clearingCheque(params).then(function(res){
			console.log()
		})
	}

	getChequeAddress(){
		var that = this;
		var params = {
			'branchCode':this.currentAccount.branchCode,
			'accountNo32':this.currentAccount.acctNumber,
			'custNo':userData.userId,
			'noOfChqBooks':this.chequeBookNumber,
			'addYN':this.config.chequeAPITypes.ADDRESS,
			'addType':this.selectedAdType.id,
			'deliveryDay':this.selctedDeliveryDay.id
		}
		this.chequeService.clearingCheque(params).then(function(res){
			var xmlResp = res.response;
			var xmlDocument = new DOMParser().parseFromString(xmlResp, "text/xml")
		  	var responseObject = that.utilService.parseXMLToJSON(xmlDocument)
		  	responseObject= responseObject.otherChannelServiceResponse
		  	if(res.status == 'success'  && responseObject.valid == "true"){
		  		that.address = responseObject.output
		  	}
		})


	}
	requestNewChequeBook(){
		var params = {
			'branchCode':this.currentAccount.branchCode,
			'accountNo32':this.currentAccount.acctNumber,
			'custNo':userData.userId,
			'noOfChqBooks':this.chequeBookNumber,
			'addYN':this.config.chequeAPITypes.ADDRESS,
			'addType':this.selectedAdType.id,
			'deliveryDay':this.selctedDeliveryDay.id
		}
		this.chequeService.clearingCheque(params).then(function(res){
			console.log()
		})
	}


	onFormSubmit(){
		if(this.context == "ICC"){
			
			this.inwardClearingCheque()
		}

		else if(this.context=="SP"){
			this.prepareSPForm()
		}

		else if(this.context == "RNC"){
			this.prepareRNCForm()

		}
	}
	prepareICCForm(){
		this.acctNumber =  new Control('',Validators.required)
		this.formValidator= this.builder.group({
			acctNumber: this.acctNumber
		})
		this.init();

	}
	prepareSPForm(){
		this.acctNumber =  new Control('',Validators.required)
		this.fromChequeNum =  new Control('',Validators.required)
		this.toChequeNum =  new Control('',Validators.required)
		this.chequeDate =  new Control('',Validators.required)
		this.requestDate =  new Control('',Validators.required)
		this.chequeAmount =  new Control('',Validators.required)
		this.payeeName =  new Control('',Validators.required)
		this.remark =  new Control('',Validators.required)

		this.formValidator= this.builder.group({
			acctNumber: this.acctNumber,
			fromChequeNum: this.fromChequeNum,
			toChequeNum: this.toChequeNum,
			chequeDate: this.chequeDate,
			requestDate: this.requestDate,
			chequeAmount: this.chequeAmount,
			payeeName: this.payeeName,
			remark: this.remark,


		})
		

	}

	prepareRNCForm(){
		this.acctNumber =  new Control('',Validators.required)
		this.addrType =  new Control('',Validators.required)
		this.accAddressType =  new Control('',Validators.required)
		this.deliveryType =  new Control('',Validators.required)
		this.chequeBookNumber =  new Control('',Validators.required)
		

		this.formValidator= this.builder.group({
			acctNumber: this.acctNumber,
			addrType: this.addrType,
			accAddressType: this.accAddressType,
			deliveryType: this.deliveryType,
			chequeBookNumber: this.chequeBookNumber,
			


		})
		

	}

	loadAccDetails(){
		this.acctList= ["100199110110","234234234234","2323424323443"]
		var params = {
			'acctNo':this.acctList[0]
		}
		var that = this;
		this.chequeService.getCustDetails(params).then(function(res){
			// that.currentAccount = res.details;
		})
	}

	ngOnInit(){

		var currentRoute = this.location.path();
		this.context = this.config.eServiceRouteContext[currentRoute]
		this.loadAccDetails()
	}


	ngOnChanges(changes) {
		

		
	}
}
