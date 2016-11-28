"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var common_1 = require('angular2/common');
var RequestChequebookComponent = (function () {
    function RequestChequebookComponent(accService, cs, buildr, conf, utilService) {
        this.accService = accService;
        this.cs = cs;
        this.buildr = buildr;
        this.conf = conf;
        this.utilService = utilService;
        this.defaultChequeBookNumbers = 1;
        this.addressTypes = [
            { id: 1, name: 'Customer address' },
            { id: 2, name: 'Branch address' },
            { id: 2, name: 'Present address' },
            { id: 2, name: 'Permanent address' },
            { id: 2, name: 'Office address' }
        ];
        this.deliveryDays = [
            { id: 1, value: 'Any day' },
            { id: 6, value: 'Saturday/Sunday' }
        ];
        this.selectedDeliveryDay = this.deliveryDays[0];
        this.selectedAdType = this.addressTypes[0];
        this.builder = buildr;
        this.chequeService = cs;
        this.config = conf.getConfig();
    }
    RequestChequebookComponent.prototype.init = function () {
        this.prepareRNCForm();
    };
    RequestChequebookComponent.prototype.changeDeliveryDay = function (event) {
        var changedData = JSON.parse(event);
        this.selectedDeliveryDay = changedData;
    };
    RequestChequebookComponent.prototype.changeAccount = function (event) {
        var changedData = JSON.parse(event);
        this.currentAccount = changedData;
        this.getAccountInfo();
    };
    RequestChequebookComponent.prototype.changeAddressTypes = function (event) {
        var changedData = JSON.parse(event);
        this.selectedAdType = changedData;
        this.getChequeAddress();
    };
    RequestChequebookComponent.prototype.getAccountInfo = function () {
        var that = this;
        var params = { 'acctNo': this.currentAccount.acctNumber };
        that.chequeService.getCustDetails(params).then(function (data) {
            that.currentAccount = $.extend({}, that.currentAccount, data.details);
        });
    };
    RequestChequebookComponent.prototype.getChequeAddress = function () {
        var that = this;
        var params = {
            'branchCode': this.currentAccount.branchCode,
            'accountNo32': this.currentAccount.acctNumber,
            'custNo': userData.userId,
            'noOfChqBooks': this.chequeBookNumber,
            'addYN': this.config.chequeAPITypes.ADDRESS,
            'addType': this.selectedAdType.id,
            'deliveryDay': this.selectedDeliveryDay.id
        };
        this.chequeService.clearingCheque(params).then(function (res) {
            var xmlResp = res.response;
            var xmlDocument = new DOMParser().parseFromString(xmlResp, "text/xml");
            var responseObject = that.utilService.parseXMLToJSON(xmlDocument);
            responseObject = responseObject.otherChannelServiceResponse;
            if (res.status == 'success' && responseObject.valid == "true") {
                that.address = responseObject.output;
            }
        });
    };
    RequestChequebookComponent.prototype.requestNewChequeBook = function () {
        var params = {
            'branchCode': this.currentAccount.branchCode,
            'accountNo32': this.currentAccount.acctNumber,
            'custNo': userData.userId,
            'noOfChqBooks': this.chequeBookNumber,
            'addYN': this.config.chequeAPITypes.ADDRESS,
            'addType': this.selectedAdType.id,
            'deliveryDay': this.selectedDeliveryDay.id
        };
        this.chequeService.clearingCheque(params).then(function (res) {
            console.log();
        });
    };
    RequestChequebookComponent.prototype.onFormSubmit = function () {
        this.prepareRNCForm();
    };
    RequestChequebookComponent.prototype.prepareRNCForm = function () {
        this.currentAccount = this.acctList[0];
        this.getAccountInfo();
        this.selectedAdType = this.addressTypes[0];
        this.selectedDeliveryDay = this.deliveryDays[0];
        this.acctNumber = new common_1.Control(this.acctList[0].acctNumber, common_1.Validators.required);
        this.addrType = new common_1.Control(this.addressTypes[0].name, common_1.Validators.required);
        this.deliveryType = new common_1.Control(this.deliveryDays[0].value, common_1.Validators.required);
        this.chequeBookNumber = new common_1.Control(this.defaultChequeBookNumbers, common_1.Validators.required);
        this.formValidator = this.builder.group({
            acctNumber: this.acctNumber,
            addrType: this.addrType,
            deliveryType: this.deliveryType,
            chequeBookNumber: this.chequeBookNumber
        });
    };
    RequestChequebookComponent.prototype.ngOnInit = function () {
        this.acctList = this.accService.cleanAccounts;
        this.init();
    };
    RequestChequebookComponent.prototype.ngOnChanges = function (changes) {
    };
    RequestChequebookComponent = __decorate([
        core_1.Component({
            templateUrl: 'static/app/Cheque/templates/request-chequebook.component.html'
        })
    ], RequestChequebookComponent);
    return RequestChequebookComponent;
}());
exports.RequestChequebookComponent = RequestChequebookComponent;
