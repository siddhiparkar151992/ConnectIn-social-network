import {Inject, Injectable, OnInit} from "angular2/core";
import {Headers, Http, Request, RequestOptions} from "angular2/http";
import {UrlConfigService} from "../../../../../config/url-config.service";
import {TokenService} from "../../../security/token/token.service";

declare var $: any;

@Injectable()
export class UserFeedService {


    private headers;
    private options;
    private urlConfigService;

    constructor(private http: Http, @Inject(UrlConfigService) private urlConfig: UrlConfigService,@Inject(TokenService)  private tokenService: TokenService) {
        this.urlConfigService = urlConfig;
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');

    }

    private extractData(res: Response) {
        let body = res.json();
        return body.hasOwnProperty('data') ? body.data : {};
    }

    //   private handleErrorPromise (error: Response | any) {
    // console.error(error.message || error);
    // return Promise.reject(error.message || error);
    //   }

    getUserFeeds(userId) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json')
        headers.append('Authorization', this.tokenService.getUserToken());
        let options = new RequestOptions({headers: headers});
        return this.http.post(this.urlConfig.getUserFeedUrl() + '?userId=' + userId, "",options)

    }

}
