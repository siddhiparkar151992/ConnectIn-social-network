/**
 * Created by Dell on 15-08-2017.
 */

import {Injectable, Inject} from "angular2/core";
import {ActivatedRouteSnapshot, Resolve, Router} from "angular2/router";
import {TokenService} from "./token.service";


@Injectable()
export class TokenResolver implements Resolve {
    constructor(@Inject(TokenService) private tokenService: TokenService, private router: Router) {

    }

    resolve(route: ActivatedRouteSnapshot) {
        const userData = JSON.parse(localStorage.getItem('ud'));
        return this.tokenService.getToken(userData.id, userData.password).subscribe(res => {
            console.log(res);
            if (res.data && res.data.token) {
                return res.data.token;
            } else {
                return false;
            }
        });
    }
}
