import { Injectable}    from 'angular2/core';

@Injectable()
export class UrlConfigService{
	

	public httpUrl='http://';
	public baseUrl;
	public port = 8080;
	public mainHost= "//connectin-social.herokuapp.com"
	public host="localhost";
	public apiBaseUrl="/connectin/api/";
	public userFeedUrl ="user/feed/";	

	constructor() {

//		this.baseUrl = this.httpUrl +this.host+':'+this.port+this.apiBaseUrl;
		this.baseUrl = this.mainHost+this.apiBaseUrl;

	}

	getUserFeedUrl(){
		return this.baseUrl+this.userFeedUrl;
	}
}