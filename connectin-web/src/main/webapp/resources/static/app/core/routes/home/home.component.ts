import {Component, OnInit} from "angular2/core";
import {Route, RouteConfig, Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from "angular2/router";
import {ProfileHeaderComponent} from "../../../layout/header/profile/header.component";
import {UserService} from "../../security/user/user.service";
import {TokenService} from "../../security/token/token.service";
import {TokenResolver} from "../../security/token/token.resolver.service";
import {UrlConfigService} from "../../../config/url-config.service";
import {StorylineComponent} from "../../modules/feed/feed.component";
import {UserProfileComponent} from "../../modules/user-profile/user-profile.component";

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
        path: '/home',
        name: 'Storyline',
        component: StorylineComponent,
        useAsDefault: true,
        resolve: {
            token: TokenResolver
        }
    },
    {
        path: '/profile',
        name: 'Profile',
        component: UserProfileComponent,
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
