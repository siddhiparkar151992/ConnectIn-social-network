import {Injectable} from "angular2/core";

@Injectable()
export class UrlConfigService {


    public httpUrl = 'http://';
    public baseUrl;
    public port = 9091;
    public appPort = 8080;
    public appBaseUrl;
    public mainAPIBaseUrl = "//connectin-microservice.herokuapp.com";
    public mainHost = "//connectin-multimodule.herokuapp.com";
    public host = "localhost";
    public apiBaseUrl = "/connectin/api/";
    public userFeedUrl = "user/feed";
    public tokenUrl = "token";

    constructor() {
        // this.appBaseUrl = this.httpUrl + this.host + ':' + this.appPort + this.apiBaseUrl
        // this.baseUrl = this.httpUrl + this.host + ':' + this.port + this.apiBaseUrl;
		this.baseUrl = this.mainAPIBaseUrl+this.apiBaseUrl;
        this.appBaseUrl =  this.mainHost+ this.apiBaseUrl

    }

    getUserFeedUrl() {
        return this.baseUrl + this.userFeedUrl;
    }

    getTokenUrl() {
        return this.apiBaseUrl + this.tokenUrl;
    }
}