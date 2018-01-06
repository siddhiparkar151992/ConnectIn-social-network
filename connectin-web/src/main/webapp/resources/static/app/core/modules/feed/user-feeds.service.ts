import {Inject, Injectable} from "angular2/core";
import {Headers, Http, Request, RequestOptions} from "angular2/http";
import {UrlConfigService} from "../../../config/url-config.service";
import {TokenService} from "../../security/token/token.service";

@Injectable()
export class UserFeedService {

    private urlConfigService;
    private headers;
    constructor(private http: Http, @Inject(UrlConfigService) private urlConfig: UrlConfigService,
                @Inject(TokenService) private tokenService: TokenService) {
        this.urlConfigService = urlConfig;
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.http = http;
    }


    getUserFeeds() {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.tokenService.getUserToken());
        let options = new RequestOptions({headers: headers});
        return this.http.post(this.urlConfig.getUserFeedUrl(), "", options)

    }

}
