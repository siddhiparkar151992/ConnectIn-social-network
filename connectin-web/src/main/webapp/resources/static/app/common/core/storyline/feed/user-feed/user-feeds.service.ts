import { Injectable,Inject, OnInit}    from 'angular2/core';
import { Headers, Http, RequestOptions,Request} from 'angular2/http';
import {UrlConfigService} from '../../../../../config/url-config.service';

declare var $:any;

@Injectable()
export class UserFeedService{
	
	
	private headers;
	private options;
	private urlConfigService;

	constructor(private http: Http, @Inject(UrlConfigService) private urlConfig:UrlConfig) {
		this.urlConfigService = urlConfig;
		this.headers = new Headers();
		this.headers.append('Content-Type', 'application/json');
		this.headers = new Headers({ 'Content-Type': 'text/json', 'Access-Control-Allow-Headers': 'Content-Type', 'Access-Control-Allow-Origin': '*' });
		this.options = new RequestOptions({ headers: this.headers});
	}

	private extractData(res: Response) {
	let body = res.json();
        return body.data || {};
    }

  //   private handleErrorPromise (error: Response | any) {
		// console.error(error.message || error);
		// return Promise.reject(error.message || error);
  //   }

	getUserFeeds(userId){
		return this.http.post(this.urlConfig.getUserFeedUrl() + '?userId='+userId, this.options)
            // .then(this.extractData)
            // .catch(this.handleErrorPromise);
	}

}
