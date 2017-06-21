import {Injectable, Inject}    from 'angular2/core';
import {Headers, Http} from 'angular2/http';
import 'rxjs/add/operator/toPromise';
import {RestAPI} from './restapi.service';
import {Config} from '../app-conf';

import {
    LoanDetails,
    FundTransferList,
    AuthFundTrans,
    AuthOTPFundTransfer,
    AuthOTPlinkAcct,
    AccountList,
    TransDetails,
    AccountSummary,
    Transaction,
    LinkedAccount
} from './data-model'

@Injectable()
export class DataService {

    restApi;

    private config;

    constructor(private http: Http,
                @Inject(RestAPI) restApi: RestAPI,
                private conf: Config) {
        this.restApi = restApi;
        this.config = conf;

    }

    getLoanCertificate(params) {
        return this.restApi.getLoanCertificate(params);
    }

    getLoanStatement(params) {
        return this.restApi.getLoanStatement(params);
    }

    getFutureDetails(params) {
        return this.restApi.getFutureDetails(params)
    }

    linkAdharCard(params) {
        return this.restApi.linkAdharCard(params)
    }

    listActivity(params) {
        return this.restApi.listActivity(params)
    }

    getActivityTypes() {
        return this.restApi.getActivityTypes()
    }

    clearingCheque(params) {
        return this.restApi.clearingCheque(params)

    }

    cardlessCashStatementRequest(params) {
        return this.restApi.cardlessCashStatementRequest(params)

    }

    cardlessCashCancelRequest(params) {
        return this.restApi.cardlessCashCancelRequest(params)

    }

    cardlessCashRequest(params) {
        return this.restApi.cardlessCashRequest(params)

    }

    get32DigitAccNum(params) {
        return this.restApi.get32DigitAccNum(params)

    }

    otpSuccessMesage(params) {
        return this.restApi.generateOTP(params)
    }


    chequeBookRequest(params) {
        return this.restApi.chequeBookRequest(params)

    }


    stopChequePayment(params) {
        return this.restApi.stopChequePayment(params)

    }

    chequeStatusRequest(params) {
        return this.restApi.chequeStatusRequest(params)

    }


    chequePositivePay(params) {
        return this.restApi.chequePositivePay(params)

    }


    transact(params) {
        return this.restApi.transact(params)

    }

    generatePDF(params) {
        return this.restApi.generatePDF(params)
    }

    deletePDF(params) {
        this.restApi.deletePDF(params)
    }

    generateOTP(params) {
        return this.restApi.generateOTP(params)

    }

    validateOTP(params) {
        return this.restApi.validateOTP(params)

    }


    getBankDetails(params) {
        return this.restApi.getBankDetails(params)
    }

    getCustDetails(params) {
        return this.restApi.getCustDetails(params)
    }

    updateSession() {
        return this.restApi.updateSession()

    }

    forgotPassword(userID, cr) {
        return this.restApi.forgotPassword(userID, cr)

    }

    changePassword(userId, oldPwd, newPwd, pwdType) {
        return this.restApi.changePassword(userId, oldPwd, newPwd, pwdType)
    }

    getUserData() {
        return this.restApi.getUserData()

    }


    getAccountList(params) {
        return this.restApi.getAccountList(params)
    }


    getAcctSummary(params) {

        return this.restApi.getAcctSummary(params)
    }

    getAcctTransaction(params) {

        return this.restApi.getAcctTransaction(params)

    }

    getFundTransferList(params) {

        return this.restApi.getFundTransferList(params)

    }

    getLoanDtls(params) {
        return this.restApi.getLoanDtls(params)
    }

    authFundTrans(params) {

        return this.restApi.authFundTrans(params)

    }

    authOTPFundTransfer(params) {

        return this.restApi.authOTPFundTransfer(params)


    }

    linkAccount(params) {
        return this.restApi.linkAccount(params)

    }

    authOTPlinkAcct(params) {
        return this.restApi.authOTPlinkAcct(params)


    }

    impsPersonToPerson(params) {
        return this.restApi.impsPersonToPerson(params)


    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    authTransPwd(params) {
        return this.restApi.authFundTrans(params)
    }

    getChallengeRes() {
        return this.restApi.getChallengeRes()
    }

    addPayeeDetails(params) {
        return this.restApi.addPayeeDetails(params)
    }

    updatePayee(params) {
        return this.restApi.updatePayee(params)
    }

    getIbFundLimits(params) {
        return this.restApi.getIbFundLimits(params)
    }

    updateEmailId(params) {
        return this.restApi.updateEmailId(params)
    }

    fundTransToOwnAcc(params) {
        return this.restApi.fundTransToOwnAcc(params)
    }

    fundTransToSameBank(params) {
        return this.restApi.fundTransToSameBank(params)
    }

    fundTransToOtherBank(params) {
        return this.restApi.fundTransToOtherBank(params)
    }


}