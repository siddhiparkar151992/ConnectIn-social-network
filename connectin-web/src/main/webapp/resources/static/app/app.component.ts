import {Component, OnInit} from "angular2/core";

import {Route, RouteConfig, Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from "angular2/router";
import {DashboardComponent} from "./modules/dashboard/dashboard.component";
import {HeaderComponent} from "./common/header/header.component";
import {FooterComponent} from "./common/footer/footer.component";
import {UrlConfigService} from "./config/url-config.service";
import {UserFeedService} from "./common/core/storyline/feed/user-feed/user-feeds.service";
import {UrlConfigService} from './config/url-config.service';
import  {TokenService} from './common/core/security/token/token.service';
import {UserService} from "./common/core/security/user.service";
declare var $: any;
declare var userData: any;
declare var logActivity: any;

@Component({
    selector: 'app',
    template: " <index-header></index-header><div><router-outlet></router-outlet></div><index-footer></index-footer>",
    directives: [ROUTER_DIRECTIVES, HeaderComponent, FooterComponent],
    providers: [UrlConfigService, UserFeedService, TokenService, UserService],

})

@RouteConfig([
    {
        path: '/',
        redirectTo: ['Dashboard']

    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardComponent,
        useAsDefault: true

    }

])

export class AppComponent implements OnInit {

    constructor(private tokenService:TokenService,
    private userService: UserService){
        const userData = JSON.parse(localStorage.getItem('ud'));
        userService.setPassword(userData.password);
        userService.setUserName(userData.id);
        tokenService.saveUserToken(userData.id, userData.password);
    }
    ngOnInit() {
        $('#home-carousel').carousel({
            interval: 500
        });
    }

}

