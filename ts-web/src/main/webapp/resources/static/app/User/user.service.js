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
var core_1 = require('angular2/core');
require('rxjs/add/operator/toPromise');
var data_service_1 = require('../shared/data.service');
var UserService = (function () {
    function UserService(conf, dataService) {
        this.conf = conf;
        this.isLoggedIn = false;
        this.userData = {
            acctNumber: '',
            userId: ''
        };
        this.config = conf.getConfig();
        this.dataService = dataService;
    }
    UserService.prototype.getUserDetails = function (param) {
        return this.config.userConfig[param];
    };
    UserService.prototype.getUserData = function () {
        return this.dataService.getUserData();
    };
    UserService.prototype.getUserId = function () {
        return this.userData.userId;
    };
    UserService.prototype.getUserAccnumber = function () {
        return this.userData.acctNumber;
    };
    UserService.prototype.setUserDetails = function (userId, accNumber) {
        this.userData.acctNumber = userId;
        this.userData.userId = accNumber;
    };
    UserService = __decorate([
        core_1.Injectable(),
        __param(1, core_1.Inject(data_service_1.DataService))
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
