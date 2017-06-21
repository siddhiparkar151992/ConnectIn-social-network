"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("angular2/core");
var http_1 = require("angular2/http");
var util_service_1 = require("../Util/util.service");
require("rxjs/add/operator/toPromise");
require("rxjs/add/operator/map");
var RestAPI = (function () {
    function RestAPI(http, conf, util) {
        this.http = http;
        this.util = util;
        this.baseURL = '';
        this.config = conf.getConfig();
        this.getparams = { 'userId': this.config.userId, 'tokenId': this.config.tokenId };
        this.baseURL = this.config.baseURL;
        this.baseIP = this.config.baseIP;
        this.port = this.config.port;
        this.util = util;
        this.start = 'http://';
        this.urlSource = this.config.APISource;
        this.promiseToken = Promise;
        this.headers = new http_1.Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers = new http_1.Headers({ 'Content-Type': 'text/json', 'Access-Control-Allow-Headers': 'Content-Type', 'Access-Control-Allow-Origin': '*' });
        this.options = new http_1.RequestOptions({ headers: this.headers, body: JSON.stringify({ 'userID': '7578133' }) });
        this.endPointAPI = this.start + this.baseIP + ':' + this.port + '/' + this.baseURL + '/';
    }
    RestAPI.prototype.encryptParams = function (params) {
        var encParams = btoa(params);
        return encParams;
    };
    RestAPI.prototype.getLoanCertificate = function (params) {
        var that = this;
        var paramsStr = JSON.stringify(params);
        var encParams = this.encryptParams(paramsStr);
        return $.ajax({
            type: 'POST',
            crossDomain: true,
            data: encParams,
            url: that.config.apiEndPoint + that.urlSource.getLoanCertificateAPI,
            dataType: 'json',
            contentType: 'application/json'
        });
    };
    RestAPI.prototype.getLoanStatement = function (params) {
        var that = this;
        var paramsStr = JSON.stringify(params);
        var encParams = this.encryptParams(paramsStr);
        return $.ajax({
            type: 'POST',
            crossDomain: true,
            data: encParams,
            url: that.config.apiEndPoint + that.urlSource.getLoanStatementAPI,
            dataType: 'json',
            contentType: 'application/json'
        });
    };
    RestAPI.prototype.getFutureDetails = function (params) {
        var that = this;
        var paramsStr = JSON.stringify(params);
        var encParams = this.encryptParams(paramsStr);
        return $.ajax({
            type: 'POST',
            crossDomain: true,
            data: encParams,
            url: that.config.apiEndPoint + that.urlSource.getFutureDetailsAPI,
            dataType: 'json',
            contentType: 'application/json'
        });
    };
    RestAPI.prototype.chequeStatusRequest = function () {
        var that = this;
        return $.ajax({
            type: 'POST',
            crossDomain: true,
            url: that.config.apiEndPoint + that.urlSource.chequeStatusRequestAPI,
            dataType: 'json',
            contentType: 'application/json'
        });
    };
    RestAPI.prototype.singleChequePositivePay = function () {
        var that = this;
        return $.ajax({
            type: 'POST',
            crossDomain: true,
            url: that.config.apiEndPoint + that.urlSource.chequePositivePayAPI,
            dataType: 'json',
            contentType: 'application/json'
        });
    };
    RestAPI.prototype.browseChequePositivePay = function () {
        var that = this;
        return $.ajax({
            type: 'POST',
            crossDomain: true,
            url: that.config.apiEndPoint + that.urlSource.browseChequePositivePay,
            dataType: 'json',
            contentType: 'application/json'
        });
    };
    RestAPI.prototype.multipleChequePositivePay = function () {
        var that = this;
        return $.ajax({
            type: 'POST',
            crossDomain: true,
            url: that.config.apiEndPoint + that.urlSource.multipleChequePositivePayAPI,
            dataType: 'json',
            contentType: 'application/json'
        });
    };
    RestAPI.prototype.get32DigitAccNum = function (params) {
        var that = this;
        var paramsStr = JSON.stringify(params);
        var encParams = this.encryptParams(paramsStr);
        return $.ajax({
            type: 'POST',
            crossDomain: true,
            data: encParams,
            url: that.config.apiEndPoint + that.urlSource.Digit32ACcNumberAPI,
            dataType: 'json',
            contentType: 'application/json'
        });
    };
    RestAPI.prototype.chequeBookRequest = function (params) {
        var that = this;
        var paramsStr = JSON.stringify(params);
        var encParams = this.encryptParams(paramsStr);
        return $.ajax({
            type: 'POST',
            crossDomain: true,
            data: encParams,
            url: that.config.apiEndPoint + that.urlSource.chequeBookRequestAPI,
            dataType: 'json',
            contentType: 'application/json'
        });
    };
    RestAPI.prototype.stopChequePayment = function (params) {
        var that = this;
        var paramsStr = JSON.stringify(params);
        var encParams = this.encryptParams(paramsStr);
        return $.ajax({
            type: 'POST',
            crossDomain: true,
            data: encParams,
            url: that.config.apiEndPoint + that.urlSource.stopChequePaymentAPI,
            dataType: 'json',
            contentType: 'application/json'
        });
    };
    RestAPI.prototype.impSsPersonToAcc = function (params) {
        var xmlStr = this.util.parseJSONToXml(params);
        return $.ajax({
            type: "POST",
            url: "http://10.19.188.18:9191/swiftcore/faces/services/Transaction/personToAccount_P2A/",
            contentType: "text/xml",
            dataType: 'xml',
            data: xmlStr,
        });
    };
    RestAPI.prototype.impSsPersonToPerson = function (params) {
        var xmlStr = this.util.parseJSONToXml(params);
        return $.ajax({
            type: "POST",
            url: "http://10.19.188.18:9191/swiftcore/faces/services/Transaction/personToPerson_P2P/",
            contentType: "text/xml",
            dataType: 'xml',
            data: xmlStr,
        });
    };
    RestAPI.prototype.updateSession = function () {
        return $.ajax({
            type: 'POST',
            crossDomain: true,
            url: this.urlSource.updateSessionAPI,
            dataType: 'json',
            contentType: 'application/json'
        });
    };
    RestAPI.prototype.addActivity = function (activityName) {
        var session = userData.sessionId.slice(4, userData.sessionId.length);
        var brCode = userData.acctNumber.slice(0, 3);
        var activity = new logActivity();
        activity.addActivity(userData.userId, brCode, session, activityName);
    };
    RestAPI.prototype.listActivity = function (params) {
        this.addActivity('Activity Log Report');
        params.userID = userData.userId;
        var paramsStr = JSON.stringify(params);
        var encParams = this.encryptParams(paramsStr);
        return $.ajax({
            type: 'POST',
            crossDomain: true,
            url: this.urlSource.listActivityAPI,
            dataType: 'json',
            data: encParams,
            contentType: 'application/json'
        });
    };
    RestAPI.prototype.generatePDF = function (params) {
        params.userID = userData.userId;
        var paramsStr = JSON.stringify(params);
        var encParams = this.encryptParams(paramsStr);
        this.addActivity('Statement of A/C (PDF)');
        return $.ajax({
            type: 'POST',
            crossDomain: true,
            url: this.urlSource.generatePdfAPI,
            dataType: 'json',
            data: encParams,
            contentType: 'application/json'
        });
    };
    RestAPI.prototype.addPayeeDetails = function (params) {
        params['userID'] = userData.userId;
        var paramsStr = JSON.stringify(params);
        var encParams = this.encryptParams(paramsStr);
        return $.ajax({
            type: 'POST',
            url: this.urlSource.addPayeeAPI,
            crossDomain: true,
            dataType: 'json',
            data: encParams,
            contentType: 'application/json'
        });
    };
    RestAPI.prototype.generateOTP = function (params) {
        var paramsStr = JSON.stringify(params);
        var encParams = this.encryptParams(paramsStr);
        return $.ajax({
            type: 'POST',
            crossDomain: true,
            url: this.urlSource.generateOTPAPI,
            dataType: 'json',
            data: encParams,
            contentType: 'application/json'
        });
    };
    RestAPI.prototype.validateOTP = function (params) {
        var paramsStr = JSON.stringify(params);
        var encParams = this.encryptParams(paramsStr);
        return $.ajax({
            type: 'POST',
            crossDomain: true,
            url: this.urlSource.validateOTPAPI,
            dataType: 'json',
            data: encParams,
            contentType: 'application/json'
        });
    };
    RestAPI.prototype.getUserData = function () {
        return $.ajax({
            type: 'GET',
            crossDomain: true,
            url: this.urlSource.userDataAPI,
            dataType: 'json',
            contentType: 'application/json'
        });
    };
    RestAPI.prototype.changePassword = function (userId, oldPwd, newPwd, pwdType) {
        return $.ajax({
            type: 'post',
            crossDomain: true,
            url: this.urlSource.changePasswordAPI,
            data: JSON.stringify({ 'userId': userId, 'oldPwd': oldPwd, 'newPwd': newPwd, 'pwdType': pwdType }),
            dataType: 'json',
            contentType: 'application/json'
        });
    };
    RestAPI.prototype.forgotPassword = function (userId, challengeResponse) {
        var that = this;
        return $.ajax({
            type: 'POST',
            crossDomain: true,
            url: this.urlSource.forgotPasswordAPI,
            dataType: 'json',
            data: JSON.stringify({ "userId": userId, 'challengeResponse': challengeResponse }),
            contentType: 'application/json'
        });
    };
    RestAPI.prototype.getAccountList = function (params) {
        var that = this;
        params = { "userID": userData.userId };
        var paramsStr = JSON.stringify(params);
        var encParams = this.encryptParams(paramsStr);
        return $.ajax({
            type: 'POST',
            crossDomain: true,
            url: that.config.apiEndPoint + this.urlSource.acccountListAPI,
            dataType: 'json',
            data: encParams,
            contentType: 'application/json'
        });
    };
    RestAPI.prototype.getAcctSummary = function (params) {
        //return this.http.get(this.start this.baseIP+':'+this.port+'/'+ this.urlSource['accountSummary'], { headers: this.headers }).toPromise()
        var that = this;
        var paramsStr = JSON.stringify(params);
        var encParams = this.encryptParams(paramsStr);
        return $.ajax({
            type: 'POST',
            crossDomain: true,
            url: that.config.apiEndPoint + this.urlSource.accountSummaryAPI,
            dataType: 'json',
            data: encParams,
            contentType: 'application/json'
        });
    };
    RestAPI.prototype.getAcctTransaction = function (params) {
        var that = this;
        this.addActivity('Statement of A/C');
        var paramsStr = JSON.stringify(params);
        var encParams = this.encryptParams(paramsStr);
        return $.ajax({
            type: 'POST',
            crossDomain: true,
            url: that.config.apiEndPoint + this.urlSource['accountTransactionAPI'],
            dataType: 'json',
            data: encParams,
            contentType: 'application/json'
        });
        //return this.http.get(this.start +this.baseIP+':'+this.port+'/' +this.urlSource['accountTransactionAPI'], { headers: this.headers }).toPromise()
    };
    RestAPI.prototype.getFundTransferList = function (data) {
        var that = this;
        // var params= {}
        data.userID = userData.userId;
        data.status = '1';
        var paramsStr = JSON.stringify(data);
        var encParams = this.encryptParams(paramsStr);
        return $.ajax({
            type: 'POST',
            crossDomain: true,
            url: this.urlSource.listPayeeAPI,
            dataType: 'json',
            data: encParams,
            contentType: 'application/json'
        });
    };
    RestAPI.prototype.transact = function (params) {
        var that = this;
        return $.ajax({
            type: 'POST',
            crossDomain: true,
            url: that.config.apiEndPoint + this.urlSource.ibFundTransferAPI,
            dataType: 'json',
            data: JSON.stringify(params),
            contentType: 'application/json'
        });
    };
    RestAPI.prototype.authFundTrans = function (params) {
        // return this.http.get(this.start +this.baseIP+':'+this.port+'/' +this.urlSource.authFundTransAPI, { headers: this.headers }).toPromise()
        params.userID = userData.userId;
        var paramsStr = JSON.stringify(params);
        var encParams = this.encryptParams(paramsStr);
        return $.ajax({
            type: 'POST',
            crossDomain: true,
            url: this.urlSource.authTransPwdAPI,
            dataType: 'json',
            data: encParams,
            contentType: 'application/json'
        });
    };
    RestAPI.prototype.authOTPFundTransfer = function (params) {
        // return this.http.get(this.start +this.baseIP+':'+this.port+'/'+this.baseURL +'/'+this.urlSource.authOTPFundTransferAPI, { headers: this.headers }).toPromise()
        var that = this;
        var paramsStr = JSON.stringify(params);
        var encParams = this.encryptParams(paramsStr);
        return $.ajax({
            type: 'POST',
            crossDomain: true,
            // url:'/authOTPFundTransfr',
            url: that.config.apiEndPoint + that.urlSource['authOTPFundTransferAPI'],
            dataType: 'json',
            data: encParams,
            contentType: 'application/json'
        });
    };
    RestAPI.prototype.deletePayee = function (params) {
        var paramsStr = JSON.stringify(params);
        var encParams = this.encryptParams(paramsStr);
        return $.ajax({
            type: 'POST',
            crossDomain: true,
            url: this.urlSource.deletePayeeAPI,
            dataType: 'json',
            data: encParams,
            contentType: 'application/json'
        });
    };
    RestAPI.prototype.updatePayee = function (params) {
        params.userID = userData.userId;
        var paramsStr = JSON.stringify(params);
        var encParams = this.encryptParams(paramsStr);
        return $.ajax({
            type: 'POST',
            crossDomain: true,
            url: this.urlSource.updatePayeeAPI,
            dataType: 'json',
            data: encParams,
            contentType: 'application/json'
        });
    };
    RestAPI.prototype.deletePDF = function (params) {
        params.userID = userData.userId;
        var paramsStr = JSON.stringify(params);
        var encParams = this.encryptParams(paramsStr);
        console.log(params);
        $.ajax({
            type: 'POST',
            crossDomain: true,
            url: this.urlSource.deletePDFAPI,
            dataType: 'json',
            data: encParams,
            contentType: 'application/json'
        });
    };
    RestAPI.prototype.getBankDetails = function (params) {
        var paramsStr = JSON.stringify(params);
        var encParams = this.encryptParams(paramsStr);
        return $.ajax({
            type: 'POST',
            crossDomain: true,
            url: this.urlSource.bankDetailsAPI,
            dataType: 'json',
            data: encParams,
            contentType: 'application/json'
        });
    };
    RestAPI.prototype.getCustDetails = function (params) {
        var paramsStr = JSON.stringify(params);
        var encParams = this.encryptParams(paramsStr);
        return $.ajax({
            type: 'POST',
            crossDomain: true,
            url: this.urlSource.custDetailsAPI,
            dataType: 'json',
            data: encParams,
            contentType: 'application/json'
        });
    };
    RestAPI.prototype.addPayee = function (params) {
        var paramsStr = JSON.stringify(params);
        var encParams = this.encryptParams(paramsStr);
        return $.ajax({
            type: 'POST',
            crossDomain: true,
            url: this.urlSource.addPayeeAPI,
            dataType: 'json',
            data: encParams,
            contentType: 'application/json'
        });
    };
    RestAPI.prototype.getChallengeRes = function (data) {
        var that = this;
        var params = {
            userId: userData.userId
        };
        params.userID = userData.userId;
        return $.ajax({
            type: 'POST',
            crossDomain: true,
            url: this.urlSource.getChallengeReponseAPI,
            dataType: 'json',
            data: JSON.stringify(params),
            contentType: 'application/json'
        });
        //return this.http.get(this.start +this.baseIP+':'+this.port+'/' +this.urlSource.fundTransferAPI, { headers: this.headers }).toPromise()
    };
    RestAPI.prototype.getLoanDtls = function (data) {
        var that = this;
        var params = {};
        params.userID = userData.userId;
        var paramsStr = JSON.stringify(params);
        var encParams = this.encryptParams(paramsStr);
        return $.ajax({
            type: 'POST',
            crossDomain: true,
            url: that.config.apiEndPoint + that.urlSource['loanDetaislAPI'],
            dataType: 'json',
            data: encParams,
            contentType: 'application/json'
        });
    };
    RestAPI.prototype.getIbFundLimits = function (params) {
        var that = this;
        return $.ajax({
            type: 'POST',
            crossDomain: true,
            url: that.config.apiEndPoint + that.urlSource.ibFundLimitsAPI,
            dataType: 'json',
            data: JSON.stringify(params),
            contentType: 'application/json'
        });
    };
    RestAPI.prototype.updateEmailId = function (params) {
        var paramsStr = JSON.stringify(params);
        var encParams = this.encryptParams(paramsStr);
        var that = this;
        return $.ajax({
            type: 'POST',
            crossDomain: true,
            url: that.config.apiEndPoint + that.urlSource.ibUpdateEmailIDAPI,
            dataType: 'json',
            data: encParams,
            contentType: 'application/json'
        });
    };
    RestAPI.prototype.fundTransToOwnAcc = function (params) {
        var that = this;
        var that = this;
        var paramsStr = JSON.stringify(params);
        var encParams = this.encryptParams(paramsStr);
        return $.ajax({
            type: 'POST',
            crossDomain: true,
            url: that.config.apiEndPoint + that.urlSource.ibFundTransferInOwnAccountAPI,
            dataType: 'json',
            data: encParams,
            contentType: 'application/json'
        });
    };
    RestAPI.prototype.fundTransToSameBank = function (params) {
        var that = this;
        var xmlStr = this.util.parseJSONToXml(params);
        var paramsStr = JSON.stringify({ 'xml': xmlStr });
        var encParams = this.encryptParams(paramsStr);
        return $.ajax({
            type: 'POST',
            crossDomain: true,
            url: that.config.apiEndPoint + that.urlSource.ibFundTransferInSameBankAPI,
            dataType: 'json',
            data: encParams,
            contentType: 'application/json'
        });
    };
    RestAPI.prototype.fundTransToOtherBank = function (params) {
        var that = this;
        var xmlStr = this.util.parseJSONToXml(params);
        var paramsStr = JSON.stringify({ 'xml': xmlStr });
        var encParams = this.encryptParams(paramsStr);
        return $.ajax({
            type: "POST",
            url: that.config.apiEndPoint + that.urlSource.ibFundTransferToOthrBankAPI,
            contentType: 'application/json',
            dataType: 'json',
            data: encParams,
        });
    };
    RestAPI.prototype.linkAdharCard = function (params) {
        var that = this;
        var paramsStr = JSON.stringify(params);
        var encParams = this.encryptParams(paramsStr);
        return $.ajax({
            type: 'POST',
            crossDomain: true,
            url: that.config.apiEndPoint + that.urlSource.ibLinkAadharCardNoAPI,
            dataType: 'json',
            data: encParams,
            contentType: 'application/json'
        });
    };
    RestAPI.prototype.clearingCheque = function (params) {
        var that = this;
        var paramsStr = JSON.stringify(params);
        var encParams = this.encryptParams(paramsStr);
        return $.ajax({
            type: 'POST',
            crossDomain: true,
            url: that.config.apiEndPoint + that.urlSource.ibInwardClearingChequeAPI,
            dataType: 'json',
            data: encParams,
            contentType: 'application/json'
        });
    };
    RestAPI.prototype.impsPersonToPerson = function (params) {
        var that = this;
        var xmlStr = this.util.parseJSONToXml(params);
        var paramsStr = JSON.stringify({ "xml": xmlStr });
        var encParams = this.encryptParams(paramsStr);
        return $.ajax({
            type: 'POST',
            crossDomain: true,
            url: that.config.apiEndPoint + that.urlSource.impsPersonToPersonAPI,
            dataType: 'json',
            data: encParams,
            contentType: 'application/json'
        });
    };
    RestAPI.prototype.linkAccount = function (params) {
        return this.http.get(that.config.apiEndPoint + this.urlSource['linkAccountAPI'], this.options)
            .toPromise()
            .catch(this.handleError);
    };
    RestAPI.prototype.authOTPlinkAcct = function (params) {
        // return this.http.post(this.urlSource['authLinkAccountAPI'], JSON.stringify(params), { headers: this.headers })
        return this.http.get(that.config.apiEndPoint + this.urlSource['authLinkAccountAPI'], this.options)
            .toPromise()
            .catch(this.handleError);
    };
    RestAPI.prototype.cardlessCashRequest = function (params) {
        var that = this;
        var paramsStr = JSON.stringify(params);
        var encParams = this.encryptParams(paramsStr);
        return $.ajax({
            type: 'POST',
            crossDomain: true,
            data: encParams,
            url: that.config.apiEndPoint + that.urlSource.cardlessCashRequestAPI,
            dataType: 'json',
            contentType: 'application/json'
        });
    };
    RestAPI.prototype.cardlessCashCancelRequest = function (params) {
        var that = this;
        var paramsStr = JSON.stringify(params);
        var encParams = this.encryptParams(paramsStr);
        return $.ajax({
            type: 'POST',
            crossDomain: true,
            data: encParams,
            url: that.config.apiEndPoint + that.urlSource.cardlessCashCancelRequestAPI,
            dataType: 'json',
            contentType: 'application/json'
        });
    };
    RestAPI.prototype.cardlessCashStatementRequest = function (params) {
        var that = this;
        var paramsStr = JSON.stringify(params);
        var encParams = this.encryptParams(paramsStr);
        return $.ajax({
            type: 'POST',
            crossDomain: true,
            data: encParams,
            url: that.config.apiEndPoint + that.urlSource.cardlessCashStatementlRequestAPI,
            dataType: 'json',
            contentType: 'application/json'
        });
    };
    RestAPI.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    RestAPI.prototype.getActivityTypes = function () {
        return $.ajax({
            type: 'GET',
            crossDomain: true,
            url: this.urlSource.activityTypesAPI,
            dataType: 'json',
            contentType: 'application/json'
        });
    };
    return RestAPI;
}());
RestAPI = __decorate([
    core_1.Injectable(),
    __param(2, core_1.Inject(util_service_1.Utility))
], RestAPI);
exports.RestAPI = RestAPI;
