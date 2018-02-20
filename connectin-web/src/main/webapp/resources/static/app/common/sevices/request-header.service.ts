/**
 * Created by Siddhi Parkar on 15-08-2017.
 */

import {Inject, Injectable, OnInit} from "angular2/core";
import {Headers, Http, Request, RequestOptions} from "angular2/http";
import {TokenService} from "../../core/security/token/token.service";

@Injectable()
export class RequestHeaderService {
    private headers;
    constructor( @Inject(TokenService) private tokenService: TokenService) {
    }

    getBasicAuthHeader(){
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.tokenService.getUserToken());
        return headers;
    }
}