"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var Utility = (function () {
    function Utility() {
    }
    Utility.prototype.substractMonths = function (date, count) {
        if (date && count) {
            var m, d = date.getDate();
            date.setMonth(date.getMonth() - count, 1);
            m = date.getMonth();
            date.setDate(d);
            if (date.getMonth() !== m)
                date.setDate(0);
        }
        return date;
    };
    Utility.prototype.parseXMLToJSON = function (xmlData) {
        if (!$.isXMLDoc(xmlData)) {
            return false;
        }
        var rootElement = xmlData.children;
        var jsonData = {};
        for (var i = 0; i < rootElement.length; i++) {
            var child = rootElement[i];
            var key = child.tagName;
            var value;
            if (child.children && child.children.length > 0) {
                value = this.parseXMLToJSON(child);
            }
            else {
                value = child.textContent;
            }
            jsonData[key] = value;
        }
        return jsonData;
    };
    Utility.prototype.parseJSONToXml = function (jsonData) {
        var xmlStr = '';
        for (var i in jsonData) {
            var startTag = '<' + i + '>';
            var endTag = '</' + i + '>';
            var completeTag;
            if (typeof (jsonData[i]) == 'object') {
                completeTag = startTag + this.parseJSONToXml(jsonData[i]) + endTag;
            }
            else {
                completeTag = startTag + jsonData[i] + endTag;
            }
            xmlStr += completeTag;
        }
        // var domParser = new DOMParser();
        // var xml  = parser.parseFromString(xmlStr, "text/xml");
        return xmlStr;
    };
    Utility.prototype.formatDate = function (date, seperator) {
        return (date.getMonth() + 1) + seperator + (date.getDate()) + seperator + (date.getFullYear());
    };
    Utility = __decorate([
        core_1.Injectable()
    ], Utility);
    return Utility;
}());
exports.Utility = Utility;
