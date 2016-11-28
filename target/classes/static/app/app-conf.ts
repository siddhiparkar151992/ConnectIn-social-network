
import { Injectable, Inject }    from 'angular2/core';
@Injectable()

export class Config {
	private chartColors;
	private donutColors;
	private conf ={
		baseIP:'',
		port:'',
		baseURL:'',
		TRANS_TYPE:{},
		APISource:{},
		userId:'',
		tokenId:'',
		validations:{},
		accTypes:{'SAVING':'saving','TD':'TD'},
		userConfig:{
		 	'1369321':{
		 		accNumber:'043200100010051'
		 	},
		 	'1949326':{
		 		accNumber:'012200100026509'
		 	}
		},
		eServiceRouteContext:{
			'/eServices/stopChequePayment':'SP',
			'/eServices/inwardChequeClearance':'ICC',
			'/eServices/requestNewChequeBook':'RNC'
		},
		transTypeKeys:{},
		apiEndPoint:'',
		TRANS_TYPES:{
			'RTGS':'rtgs',
			'SCB':'scb',
			'SB':'sb',
			'OB':'ob',
			'SA':'sa'
		},
		otpTypes:{
			'TRANS_OTP':'D',
			'LOGIN_TRANS_OTP':'LT',
			'LOGIN_OTP':'L',
			'TRANS_CHANGE_OTP':'T',
			'PAYEE_OTP':'P',
			'CHEQUE_OTP':'C'
		}
		,
		chequeAPITypes:{
			'ADDRESS':'Y',
			'CHEQUEBOOK':'N'
		}
	};

	constructor() {
		this.conf.TRANS_TYPE= {
			'CR':'C',
			'DB':'D'
		}
		// this.conf.baseIP = '10.19.188.18'
		// this.conf.baseURL = 'swiftcore/faces/services/IB';
		// this.conf.port ='9191'
		this.conf.apiEndPoint = '/netbanking/api/v1.0/'
		this.conf.APISource = {
			generateOTPAPI:'generateOTP',
			validateOTPAPI:'validateOTP',
			authenticationAPI: 'authenticate',
			acccountListAPI: 'getAccountList',
			accountSummaryAPI: 'getAccountSummary',
			accountTransactionAPI: 'getAccountTransactions',
			loanDetaislAPI: 'getLoanDetails',
			fundTransferAPI: 'getFundTransferList',
			authFundTransAPI: 'authFundTrans',
			authOTPFundTransferAPI: 'authOTPFundTransfer',
			linkAccountAPI: 'linkAcct',
			authLinkAccountAPI: 'authOTPlinkAcct',
			updateSessionAPI:'updateSession',
			generatePdfAPI:'generatePDF',
			deletePDFAPI : 'deletePDF',
			userDataAPI:'userData',
			changePasswordAPI:'changePassword',
			forgotPasswordAPI:'forgotPassword',
			ibFundTransferAPI:'ibFundTransfer',
			authTransPwdAPI:'authTransPwd',
			listPayeeAPI:'getListPayee',
			addPayeeAPI:'addPayee',
			deletePayeeAPI:'deletePayee',
			updatePayeeAPI:'updatePayee',
			bankDetailsAPI:'getBankDetails',
			custDetailsAPI:'getCustDetails',
			getChallengeReponseAPI:'getChallengeReponse',
			chequeBookRequestAPI:'chequeBookRequest',
			stopChequePaymentAPI:'stopChequePaymentRequest',
			chequeStatusRequestAPI:'chequeStatusRequest',
			chequePositivePayAPI:'singleChequePositivePay',
			browseChequePositivePayAPI:'browseChequePositivePay',
			multipleChequePositivePayAPI:'multipleChequePositivePay',
			ibFundLimitsAPI:'ibFundLimits',
			ibUpdateEmailID:'ibUpdateEmailID',
			ibFundTransferInOwnAccountAPI:'ibFundTransferInOwnAccount',
			ibFundTransferInSameBankAPI:'ibFundTransferInSameBank',
			ibFundTransferToOthrBankAPI:'ibFundTransferToOthrBank',
			ibLinkAadharCardNoAPI:'ibLinkAadharCardNo',
			ibInwardClearingChequeAPI:'ibInwardClearingCheque',
			addActivityAPI : 'addActivityLog',
			impsPersonToPersonAPI:'impsPersonToPerson',
			Digit32ACcNumberAPI:'get32DigitAccountNumber',
			cardlessCashRequestAPI:'getCardlessCashCreationRequest',
			cardlessCashStatementlRequestAPI:'getCardlessCashStatement',
			cardlessCashCancelRequestAPI:'getCardlessCashCancelRequest',
			ibUpdateEmailIDAPI:'ibUpdateEmailID',
			activityTypesAPI :'activityTypes',
			listActivityAPI :'listActivityLog',
			getFutureDetailsAPI : 'ibLoanFuturePaymentDetails',
			getLoanStatementAPI : 'getLoanAccountStatement',
			getLoanCertificateAPI : 'ibLoanProvisionalInterestCertificate'


		};

		this.conf.userId = 'userId54684';
		this.conf.tokenId = 'nd734-567-6474';
		this.conf.validations={
			lowAmountLimit:1,
			highAmountLimit:20000,
			otpLength:6,
			transactionPwdLimit:6
		}
		this.conf.transTypeKeys = {
			'sa':1,
			'sb':2,
			'ob':3
		}
		this.conf.transTypes= {
			1:'fundTransToOwnAcc',
			2:'fundTransToSameBank',
			3:'fundTransToOtherBank'
		}
		this.chartColors =['#3399ff','#0ffa99','#facb0f','#339900','#660066','#CC3399']
		this.donutColors = ['#3399ff','#0ffa99','#facb0f','#339900','#660066','#CC3399']
	}

	getConfig() {
		return this.conf
	}
}

