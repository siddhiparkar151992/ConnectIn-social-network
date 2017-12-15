import {Component, OnInit} from "angular2/core";
import {Route, RouteConfig, Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from "angular2/router";
import {StorylineComponent} from "../feed/feed.component";
import {ProfileHeaderComponent} from "../headers/profile/header.component";
import {UserService} from "../../common/core/security/user.service";
import {TokenService} from "../../common/core/security/token/token.service";
import {UrlConfigService} from "../../config/url-config.service";
import {TokenResolver} from "../../security/token/token.resolver.service";
declare var $: any;

@Component({
    selector: 'home',
    template: '<profile-header></profile-header><div><router-outlet></router-outlet></div>',
    directives: [ROUTER_DIRECTIVES, ProfileHeaderComponent],
    providers: [UserService, TokenService, TokenResolver, UrlConfigService]

})

@RouteConfig([
    {
        path: '/',
        redirectTo: ['Storyline'],

    },
    {
        path: '/storyline',
        name: 'Storyline',
        component: StorylineComponent,
        useAsDefault: true,
        resolve: {
            token: TokenResolver
        }
    }
])
export class HomeComponent {
    constructor(private userService: UserService, private tokenService: TokenService){
        const userData = JSON.parse(localStorage.getItem('ud'));
        userService.setPassword(userData.password);
        userService.setUserName(userData.id);
        tokenService.saveUserToken(userData.id, userData.password);
    }
}
