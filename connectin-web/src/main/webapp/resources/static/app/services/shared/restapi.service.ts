import { Injectable, Injector,ReflectiveInjector,Inject, forwardRef}    from 'angular2/core';
import { Headers, Http, RequestOptions,Request, RequestOptionsArgs, RequestMethod, HTTP_BINDINGS} from 'angular2/http';
import {Config} from '../app-conf';
import {Utility} from '../Util/util.service'
import {UserService} from '../User/user.service'
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

declare var $: any;  

@Injectable()
export class RestAPI {
	private baseURL = '';
	private urlSource;
	private baseIP;
	private port;
	private start;
	private headers;
	private config;
	private promiseToken;
	private requestoptions;
	private options;
	private userData
	private userService;
	private endPointAPI;
	private util;
	private getparams;
	constructor(private http: Http, conf: Config,@Inject(Utility) private util:Utility) {
		this.config = conf.getConfig();
		this.getparams = { 'userId': this.config.userId, 'tokenId': this.config.tokenId };
		this.baseURL = this.config.baseURL;
		this.baseIP = this.config.baseIP;
		this.port = this.config.port;
		this.util= util;
		this.start = 'http://'
		this.urlSource = this.config.APISource;
		this.promiseToken = Promise;
		this.headers = new Headers();
		this.headers.append('Content-Type', 'application/json');
		this.headers = new Headers({ 'Content-Type': 'text/json', 'Access-Control-Allow-Headers': 'Content-Type', 'Access-Control-Allow-Origin': '*' });
		this.options = new RequestOptions({ headers: this.headers, body: JSON.stringify({ 'userID': '7578133'}) });
		this.endPointAPI = this.start +this.baseIP+':'+this.port+'/' +this.baseURL +'/'

	}

	encryptParams(params){
		var encParams = btoa(params)
		return encParams;
	}
	getLoanCertificate(params){
		var that = this;
		let paramsStr = JSON.stringify(params)
		let encParams = this.encryptParams(paramsStr)
		return $.ajax({
			type:'POST',
			crossDomain: true,
			data:encParams,
			url:that.config.apiEndPoint+that.urlSource.getLoanCertificateAPI,
			dataType:'json',
			contentType:'application/json'
					
		})
	}
	getLoanStatement(params){
		var that = this;
		let paramsStr = JSON.stringify(params)
		let encParams = this.encryptParams(paramsStr)
		return $.ajax({
			type:'POST',
			crossDomain: true,
			data:encParams,
			url:that.config.apiEndPoint+that.urlSource.getLoanStatementAPI,
			dataType:'json',
			contentType:'application/json'
					
		})
	}
	getFutureDetails(params){
		var that = this;
		let paramsStr = JSON.stringify(params)
		let encParams = this.encryptParams(paramsStr)
		return $.ajax({
			type:'POST',
			crossDomain: true,
			data:encParams,
			url:that.config.apiEndPoint+that.urlSource.getFutureDetailsAPI,
			dataType:'json',
			contentType:'application/json'
			
		})
	}



	chequeStatusRequest(){
		var that = this;
		return $.ajax({
			type:'POST',
			crossDomain: true,
			url:that.config.apiEndPoint+that.urlSource.chequeStatusRequestAPI,
			dataType:'json',
			contentType:'application/json'
			
			})
	}

	singleChequePositivePay(){
		var that = this;
		return $.ajax({
			type:'POST',
			crossDomain: true,
			url:that.config.apiEndPoint+that.urlSource.chequePositivePayAPI,
			dataType:'json',
			contentType:'application/json'
			
			})
	}


	browseChequePositivePay(){
		var that = this;
		return $.ajax({
			type:'POST',
			crossDomain: true,
			url:that.config.apiEndPoint+that.urlSource.browseChequePositivePay,
			dataType:'json',
			contentType:'application/json'
			
			})
	}

	multipleChequePositivePay(){
		var that = this;
		return $.ajax({
			type:'POST',
			crossDomain: true,
			url:that.config.apiEndPoint+that.urlSource.multipleChequePositivePayAPI,
			dataType:'json',
			contentType:'application/json'
			
			})
	}





	get32DigitAccNum(params){
		var that = this;
		let paramsStr = JSON.stringify(params)
		let encParams = this.encryptParams(paramsStr)
		return $.ajax({
			type:'POST',
			crossDomain: true,
			data:encParams,
			url:that.config.apiEndPoint+that.urlSource.Digit32ACcNumberAPI,
			dataType:'json',
			contentType:'application/json'
			
		})
	}


	chequeBookRequest(params){
		var that = this;
		let paramsStr = JSON.stringify(params)
		let encParams = this.encryptParams(paramsStr)
		return $.ajax({
			type:'POST',
			crossDomain: true,
			data:encParams,
			url:that.config.apiEndPoint+that.urlSource.chequeBookRequestAPI,
			dataType:'json',
			contentType:'application/json'
			
			})
	}


	stopChequePayment(params){
		var that = this;
		let paramsStr = JSON.stringify(params)
		let encParams = this.encryptParams(paramsStr)
		return $.ajax({
			type:'POST',
			crossDomain: true,
			data:encParams,
			url:that.config.apiEndPoint+that.urlSource.stopChequePaymentAPI,
			dataType:'json',
			contentType:'application/json'
			
			})
	}


	impSsPersonToAcc(params){
		var xmlStr= this.util.parseJSONToXml(params);
		return $.ajax({     
		   type     : "POST",
		   url      : "http://10.19.188.18:9191/swiftcore/faces/services/Transaction/personToAccount_P2A/",
		   contentType: "text/xml",
		   dataType:'xml',
		   data     :xmlStr,
		  
		});

	}


	impSsPersonToPerson(params){
		var xmlStr= this.util.parseJSONToXml(params);
		return $.ajax({     
		   type     : "POST",
		   url      : "http://10.19.188.18:9191/swiftcore/faces/services/Transaction/personToPerson_P2P/",
		   contentType: "text/xml",
		   dataType:'xml',
		   data     :xmlStr,
		  
		});

	}





	updateSession(){
		return $.ajax({
			type:'POST',
			crossDomain: true,
			url:this.urlSource.updateSessionAPI,
			dataType:'json',
			contentType:'application/json'
			
			})
	}

	addActivity(activityName){

		let session = userData.sessionId.slice(4 , userData.sessionId.length)
		let brCode = userData.acctNumber.slice(0,3);
		let activity = new logActivity();
		activity.addActivity(userData.userId,brCode,session,activityName )
	}
	listActivity(params){
		this.addActivity('Activity Log Report')
		
		params.userID = userData.userId;
		let paramsStr = JSON.stringify(params)
		let encParams = this.encryptParams(paramsStr)

		return $.ajax({
			type: 'POST',
			crossDomain: true,
			url: this.urlSource.listActivityAPI,
			dataType: 'json',
			data: encParams,
			contentType:'application/json'
		})
	}

	generatePDF(params){
		params.userID = userData.userId;
		let paramsStr = JSON.stringify(params)
		let encParams = this.encryptParams(paramsStr)
		this.addActivity('Statement of A/C (PDF)')

		return $.ajax({
			type: 'POST',
			crossDomain: true,
			url: this.urlSource.generatePdfAPI,
			dataType: 'json',
			data: encParams,
			contentType:'application/json'
		})
	}
	addPayeeDetails(params){
		params['userID'] = userData.userId;
		let paramsStr = JSON.stringify(params)
		let encParams = this.encryptParams(paramsStr)
		return $.ajax({
			type:'POST',
			url:this.urlSource.addPayeeAPI,
			crossDomain: true,
			dataType:'json',
			data:encParams,
			contentType:'application/json'
		
		})

	}
	generateOTP(params){
		let paramsStr = JSON.stringify(params)
		let encParams = this.encryptParams(paramsStr)
		return $.ajax({
			type:'POST',
			crossDomain: true,
			url:this.urlSource.generateOTPAPI,
			dataType:'json',
			data:encParams,
			contentType:'application/json'
			})
	}

	validateOTP(params){
		let paramsStr = JSON.stringify(params)
		let encParams = this.encryptParams(paramsStr)
		return $.ajax({
			type:'POST',
			crossDomain: true,
			url:this.urlSource.validateOTPAPI,
			dataType:'json',
			data:encParams,
			contentType:'application/json'
			})
	}

	getUserData(){

		return $.ajax({
			type:'GET',
			crossDomain: true,
			url:this.urlSource.userDataAPI,
			dataType:'json',
			contentType:'application/json'
			
			})
	}


	changePassword(userId, oldPwd,newPwd, pwdType){
		return $.ajax({
			type:'post',
			crossDomain: true,
			url:this.urlSource.changePasswordAPI,
			data:JSON.stringify({'userId':userId, 'oldPwd':oldPwd,'newPwd':newPwd,'pwdType':pwdType}),
			dataType:'json',
			contentType:'application/json'
			
			})
	}



	forgotPassword(userId,challengeResponse) { 
		var that = this;
		return $.ajax({
			type:'POST',
			crossDomain: true,
			url:this.urlSource.forgotPasswordAPI,
			dataType:'json',
			data:JSON.stringify({"userId": userId, 'challengeResponse':challengeResponse}),
			contentType:'application/json'
			
			})
	}

	
	getAccountList(params){
		var that = this;
		params = {"userID": userData.userId}
		let paramsStr = JSON.stringify(params)
		let encParams = this.encryptParams(paramsStr)
		return $.ajax({
			type:'POST',
			crossDomain: true, 
			url:that.config.apiEndPoint+ this.urlSource.acccountListAPI,
			dataType:'json',
			data:encParams,
			contentType:'application/json'
			
			})
	}


	getAcctSummary(params) {
		//return this.http.get(this.start this.baseIP+':'+this.port+'/'+ this.urlSource['accountSummary'], { headers: this.headers }).toPromise()
		var that = this;
	
		let paramsStr = JSON.stringify(params)
		let encParams = this.encryptParams(paramsStr)
		return $.ajax({
			type:'POST',
			crossDomain: true,
			url:that.config.apiEndPoint+ this.urlSource.accountSummaryAPI,
			dataType:'json',
			data:encParams,
			contentType:'application/json'
			
			})
	}
	
	getAcctTransaction(params) {
		var that = this;
		this.addActivity('Statement of A/C')
		let paramsStr = JSON.stringify(params)
		let encParams = this.encryptParams(paramsStr)
		return $.ajax({
			type:'POST',
			crossDomain: true,
			url:that.config.apiEndPoint+ this.urlSource['accountTransactionAPI'],
			dataType:'json',
			data:encParams,
			contentType:'application/json'
			
			})
			//return this.http.get(this.start +this.baseIP+':'+this.port+'/' +this.urlSource['accountTransactionAPI'], { headers: this.headers }).toPromise()

	}

	
	getFundTransferList(data) {
		var that = this;
		// var params= {}
		data.userID = userData.userId
		data.status = '1'
		let paramsStr = JSON.stringify(data)
		let encParams = this.encryptParams(paramsStr)
		return $.ajax({
			type:'POST',
			crossDomain: true,
			url:this.urlSource.listPayeeAPI,
			dataType:'json',
			data:encParams,
			contentType:'application/json'
		})
		
	}

	transact(params){
		var that = this;
		return $.ajax({
			type:'POST',
			crossDomain: true,
			url:that.config.apiEndPoint+ this.urlSource.ibFundTransferAPI,
			dataType:'json',
			data:JSON.stringify(params),
			contentType:'application/json'
		
		})
	}
	authFundTrans(params) {
		// return this.http.get(this.start +this.baseIP+':'+this.port+'/' +this.urlSource.authFundTransAPI, { headers: this.headers }).toPromise()
		params.userID = userData.userId
		let paramsStr = JSON.stringify(params)
		let encParams = this.encryptParams(paramsStr)
		return $.ajax({
			type:'POST',
			crossDomain: true,
			url:this.urlSource.authTransPwdAPI,
			dataType:'json',
			data:encParams,
			contentType:'application/json'
		
		})

	}

	authOTPFundTransfer(params) {
		// return this.http.get(this.start +this.baseIP+':'+this.port+'/'+this.baseURL +'/'+this.urlSource.authOTPFundTransferAPI, { headers: this.headers }).toPromise()
		var that = this;
		let paramsStr = JSON.stringify(params)
		let encParams = this.encryptParams(paramsStr)
		return $.ajax({
			type:'POST',
			crossDomain: true,
			// url:'/authOTPFundTransfr',
			url:that.config.apiEndPoint+ that.urlSource['authOTPFundTransferAPI'],
			dataType:'json',
			data:encParams,
			contentType:'application/json'
		
		})


	}

	deletePayee(params){
		let paramsStr = JSON.stringify(params)
		let encParams = this.encryptParams(paramsStr)
		return $.ajax({
			type:'POST',
			crossDomain: true,
			url:this.urlSource.deletePayeeAPI,
			dataType:'json',
			data:encParams,
			contentType:'application/json'
		
		})
	}

	updatePayee(params){
		params.userID = userData.userId
		let paramsStr = JSON.stringify(params)
		let encParams = this.encryptParams(paramsStr)
		return $.ajax({
			type:'POST',
			crossDomain: true,
			url:this.urlSource.updatePayeeAPI,
			dataType:'json',
			data:encParams,
			contentType:'application/json'
		
		})
	}
	deletePDF(params){
		params.userID = userData.userId
		let paramsStr = JSON.stringify(params)
		let encParams = this.encryptParams(paramsStr)
		console.log(params)
		$.ajax({
			type:'POST',
			crossDomain: true,
			url:this.urlSource.deletePDFAPI,
			dataType:'json',
			data:encParams,
			contentType:'application/json'
		
		})
	}
	getBankDetails(params){
		let paramsStr = JSON.stringify(params)
		let encParams = this.encryptParams(paramsStr)
		return $.ajax({
			type:'POST',
			crossDomain: true,
			url:this.urlSource.bankDetailsAPI,
			dataType:'json',
			data:encParams,
			contentType:'application/json'
		})
	}

	getCustDetails(params){
		let paramsStr = JSON.stringify(params)
		let encParams = this.encryptParams(paramsStr)
		return $.ajax({
			type:'POST',
			crossDomain: true,
			url:this.urlSource.custDetailsAPI,
			dataType:'json',
			data:encParams,
			contentType:'application/json'
		})
	}
	addPayee(params){
		
		let paramsStr = JSON.stringify(params)
		let encParams = this.encryptParams(paramsStr)
		return $.ajax({
			type:'POST',
			crossDomain: true,
			url:this.urlSource.addPayeeAPI,
			dataType:'json',
			data:encParams,
			contentType:'application/json'
		})
	}
	getChallengeRes(data) {
		var that = this;
		var params= {
			userId:userData.userId
		}
		params.userID = userData.userId
		return $.ajax({
			type:'POST',
			crossDomain: true,
			url:this.urlSource.getChallengeReponseAPI,
			dataType:'json',
			data:JSON.stringify(params),
			contentType:'application/json'
		
		})
		
		//return this.http.get(this.start +this.baseIP+':'+this.port+'/' +this.urlSource.fundTransferAPI, { headers: this.headers }).toPromise()

	}

	getLoanDtls(data) {
		var that = this;
		var params= {
		
		}
		params.userID = userData.userId
		let paramsStr = JSON.stringify(params)
		let encParams = this.encryptParams(paramsStr)
		return $.ajax({
			type:'POST',
			crossDomain: true,
			url:that.config.apiEndPoint+ that.urlSource['loanDetaislAPI'],
			dataType:'json',
			data:encParams,
			contentType:'application/json'
			
			})

	}



	getIbFundLimits(params) {
		var that = this;
		return $.ajax({
			type:'POST',
			crossDomain: true,
			url:that.config.apiEndPoint+ that.urlSource.ibFundLimitsAPI,
			dataType:'json',
			data:JSON.stringify(params),
			contentType:'application/json'
			
			})

	}

	updateEmailId(params) {
		let paramsStr = JSON.stringify(params)
		let encParams = this.encryptParams(paramsStr)
		var that = this;
		return $.ajax({
			type:'POST',
			crossDomain: true,
			url:that.config.apiEndPoint+ that.urlSource.ibUpdateEmailIDAPI,
			dataType:'json',
			data:encParams,
			contentType:'application/json'
			
			})

	}

	fundTransToOwnAcc(params) {
		var that = this;
		var that = this;
		let paramsStr = JSON.stringify(params)
		let encParams = this.encryptParams(paramsStr)
		return $.ajax({
			type:'POST',
			crossDomain: true,
			url:that.config.apiEndPoint+ that.urlSource.ibFundTransferInOwnAccountAPI,
			dataType:'json',
			data:encParams,
			contentType:'application/json'
			
			})

	}


	fundTransToSameBank(params) {
		var that = this;
		var xmlStr= this.util.parseJSONToXml(params);
		let paramsStr =JSON.stringify({'xml':xmlStr})
		let encParams = this.encryptParams(paramsStr)
		return $.ajax({
			type:'POST',
			crossDomain: true,
			url:that.config.apiEndPoint+ that.urlSource.ibFundTransferInSameBankAPI,
			dataType:'json',
			data     :encParams,
			contentType:'application/json'
			
			})

	}

	fundTransToOtherBank(params) {
		var that = this;
		var xmlStr= this.util.parseJSONToXml(params);
		let paramsStr =JSON.stringify({'xml':xmlStr})
		let encParams = this.encryptParams(paramsStr)
		
		return $.ajax({     
		   type     : "POST",
		   url      : that.config.apiEndPoint+ that.urlSource.ibFundTransferToOthrBankAPI,
		   contentType:'application/json',
		   dataType:'json',
		   data     :encParams,
		  
		});

	}

	
	linkAdharCard(params) {
		var that = this;
		let paramsStr = JSON.stringify(params)
		let encParams = this.encryptParams(paramsStr)
		return $.ajax({
			type:'POST',
			crossDomain: true,
			url:that.config.apiEndPoint+ that.urlSource.ibLinkAadharCardNoAPI,
			dataType:'json',
			data:encParams,
			contentType:'application/json'
			
			})

	}

	clearingCheque(params) {
		var that = this;
		let paramsStr = JSON.stringify(params)
		let encParams = this.encryptParams(paramsStr)
		return $.ajax({
			type:'POST',
			crossDomain: true,
			url:that.config.apiEndPoint+ that.urlSource.ibInwardClearingChequeAPI,
			dataType:'json',
			data:encParams,
			contentType:'application/json'
			
			})

	}

	impsPersonToPerson(params){
		var that = this;
		var xmlStr= this.util.parseJSONToXml(params);
		let paramsStr = JSON.stringify({"xml":xmlStr})
		let encParams = this.encryptParams(paramsStr)
		return $.ajax({
			type:'POST',
			crossDomain: true,
			url:that.config.apiEndPoint+ that.urlSource.impsPersonToPersonAPI,
			dataType:'json',
			data:encParams,
			contentType:'application/json'
			
			})

	}
	linkAccount(params) {
		return this.http.get(that.config.apiEndPoint +this.urlSource['linkAccountAPI'], this.options)
		.toPromise()
		.catch(this.handleError);
		

	}

	authOTPlinkAcct(params) {
		// return this.http.post(this.urlSource['authLinkAccountAPI'], JSON.stringify(params), { headers: this.headers })
		return this.http.get(that.config.apiEndPoint+this.urlSource['authLinkAccountAPI'], this.options)
		.toPromise()
		.catch(this.handleError);

	}

	cardlessCashRequest(params){
		var that = this;
		let paramsStr = JSON.stringify(params)
		let encParams = this.encryptParams(paramsStr)
		return $.ajax({
			type:'POST',
			crossDomain: true,
			data:encParams,
			url:that.config.apiEndPoint+that.urlSource.cardlessCashRequestAPI,
			dataType:'json',
			contentType:'application/json'
			
			})
	}

	cardlessCashCancelRequest(params){
		var that = this;
		let paramsStr = JSON.stringify(params)
		let encParams = this.encryptParams(paramsStr)
		return $.ajax({
			type:'POST',
			crossDomain: true,
			data:encParams,
			url:that.config.apiEndPoint+that.urlSource.cardlessCashCancelRequestAPI,
			dataType:'json',
			contentType:'application/json'
			
			})
	}


	

	cardlessCashStatementRequest(params){
		var that = this;
		let paramsStr = JSON.stringify(params)
		let encParams = this.encryptParams(paramsStr)
		return $.ajax({
			type:'POST',
			crossDomain: true,
			data:encParams,
			url:that.config.apiEndPoint+that.urlSource.cardlessCashStatementlRequestAPI,
			dataType:'json',
			contentType:'application/json'
			
			})
	}


	private handleError(error: any) {
	   console.error('An error occurred', error);
	   return Promise.reject(error.message || error);
	}
	getActivityTypes(){
		return $.ajax({
			type:'GET',
			crossDomain: true,
			url:this.urlSource.activityTypesAPI,
			dataType:'json',
			contentType:'application/json'
			
		})

}