import { Injectable}    from 'angular2/core';

@Injectable()
export class UrlConfigService{
	
	public httpUrl='http://';
	public baseUrl;
	public port = 9091;
	public host ="localhost";
	public apiBaseUrl="/connectin/api/";
	public userFeedUrl ="user/feed/";	

	constructor() {

		this.baseUrl = this.httpUrl +this.host+':'+this.port+this.apiBaseUrl;

	}

	getUserFeedUrl(){
		return this.baseUrl+this.userFeedUrl;
	}
}