/**
 * Created by Dell on 30-07-2017.
 */
import {Inject, Injectable, OnInit} from "angular2/core";
import {Headers, Http, Request, RequestOptions} from "angular2/http";
import {UrlConfigService} from "../../../../config/url-config.service";

declare var $: any;

@Injectable()
export class TokenService {


    private headers;
    private options;
    private urlConfigService;
    public tokenRepository;

    constructor(private http: Http, @Inject(UrlConfigService) private urlConfig: UrlConfigService) {
        this.urlConfigService = urlConfig;
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers = new Headers({'Content-Type': 'application/json'});
        this.options = new RequestOptions({headers: this.headers});
        this.tokenRepository = {'token': null};
    }

    private extractData(res: Response) {
        let body = res.json();
        this.tokenRepository = body.data.token;
    }

    getUserToken() {
        return "Bearer " + this.tokenRepository.token;
    }

    setUserToken(token) {
        this.tokenRepository.token = token;
    }

    getToken(userId, password) {
        const body = {id: userId, password: password};
        return this.http.post(this.urlConfig.getTokenUrl(), JSON.stringify(body), this.options);
    }

    saveUserToken(userId, password) {
        const body = {id: userId, password: password};
        this.http.post(this.urlConfig.getTokenUrl(), JSON.stringify(body), this.options)
        // .catch(this.handleErrorPromise);
    }

}
