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
//# sourceMappingURL=transaction.service.js.mapimport {Injectable, Inject} from 'angular2/core';
var core_1 = require('angular2/core');
require('rxjs/add/operator/toPromise');
var data_service_1 = require('../shared/data.service');
var ChequeService = (function () {
    function ChequeService(data) {
        this.dataService = data;
    }
    ChequeService.prototype.chequeBookRequest = function (params) {
        return this.dataService.chequeBookRequest(params);
    };
    ChequeService.prototype.clearingCheque = function (params) {
        return this.dataService.clearingCheque(params);
    };
    ChequeService.prototype.getCustDetails = function (params) {
        return this.dataService.getCustDetails(params);
    };
    ChequeService.prototype.stopChequePayment = function (params) {
        return this.dataService.stopChequePayment(params);
    };
    ChequeService.prototype.chequeStatusRequest = function (params) {
        return this.dataService.chequeStatusRequest(params);
    };
    ChequeService.prototype.singleChequePositivePay = function (params) {
        return this.dataService.singleChequePositivePay(params);
    };
    ChequeService.prototype.browseChequePositivePay = function (params) {
        return this.dataService.browseChequePositivePay(params);
    };
    ChequeService.prototype.multipleChequePositivePay = function (params) {
        return this.dataService.multipleChequePositivePay(params);
    };
    ChequeService = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject(data_service_1.DataService))
    ], ChequeService);
    return ChequeService;
}());
exports.ChequeService = ChequeService;
