import {Inject, Injectable} from "angular2/core";
import {Http, RequestOptions} from "angular2/http";
import {TokenService} from "../../../security/token/token.service";
import {UrlConfigService} from "../../config/url-config.service";
import {RequestHeaderService} from "../../common/core/security/request-header.service";

@Injectable()
export class CommentService {
    constructor(private http: Http,
                @Inject(RequestHeaderService) private requestHeaderService:RequestHeaderService,
                @Inject(UrlConfigService) private urlConfig: UrlConfigService) {

    }

    addComment(comment) {
        let options = new RequestOptions({headers: this.requestHeaderService.getBasicAuthHeader()});
        return this.http.post(this.urlConfig.apiBaseUrl+this.urlConfig.commentAddUrl, comment, options);
    }
}