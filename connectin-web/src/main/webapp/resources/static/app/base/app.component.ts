import {Component, OnInit} from "angular2/core";

import {Route, RouteConfig, Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from "angular2/router";
import {UrlConfigService} from "../config/url-config.service";
import {UserFeedService} from "../core/modules/feed/user-feeds.service";
import {UrlConfigService} from '../config/url-config.service';
import {DatetimeService} from "../util/datetime.service";
import {StorylineService} from "../core/modules/feed/feed.service";
import {CommentService} from "../core/modules/comment/comment.service";
import {LikeService} from "../core/modules/likes/likes.service";
import {HeaderComponent} from "../layout/header/header.component";
import {FooterComponent} from "../layout/footer/footer.component";
import {UserService} from "../core/security/user/user.service";
import {TokenService} from "../core/security/token/token.service";
import {RequestHeaderService} from "../common/sevices/request-header.service";
import {UserDetailsService} from "../core/modules/user-details/user-details.service";
import {UserProfileComponent} from "../core/modules/user-profile/user-profile.component";
declare var $: any;

@Component({
    selector: 'app',
    template: " <index-header></index-header><div><router-outlet></router-outlet></div><index-footer></index-footer>",
    directives: [ROUTER_DIRECTIVES, HeaderComponent, FooterComponent],
    providers: [UrlConfigService, UserFeedService, TokenService, UserService, DatetimeService,
        StorylineService, RequestHeaderService,CommentService, LikeService, UserDetailsService],

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

