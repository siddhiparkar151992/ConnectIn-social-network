import {Component, Inject, OnInit} from "angular2/core";
import {ActivatedRoute, Router} from "angular2/router";
import {StoryComponent} from "./components/story/story.component";
import {NewsComponent} from "../news/news.component";
import {DropdownComponent} from "../../modules/components/dropdown/dropdown.component";
import {UserFeedService} from "../../common/core/storyline/feed/user-feed/user-feeds.service";
import {UrlConfigService} from "../../config/url-config.service";
import {TokenService} from "../../common/core/security/token/token.service";
import {TokenResolver} from "../../common/core/resolver/token.resolver.service";
import "rxjs/Rx";
@Component({
    selector: 'storyline',
    templateUrl: '/resources/static/app/modules/storyline/storyline.component.html',
    directives: [StoryComponent, NewsComponent, DropdownComponent],
    providers: [UserFeedService, UrlConfigService, TokenService, TokenResolver],
    styleUrls: ['resources/styles/css/storyline/storyline.css']
})
export class StorylineComponent implements OnInit {
    private token;
    private userFeed;
    private userFeedService;
    private privacyDropdown;

    constructor(private route: Router,
                private tokenService: TokenService,
                @Inject(UserFeedService) private userFeedServ: UserFeedService) {
        this.userFeedService = userFeedServ;
        this.privacyDropdown = {
            selectedItem: {'title': 'Public', 'icon': 'fa fa-globe'},
            items: [
                {'title': 'Public', 'icon': 'fa fa-globe'},
                {'title': 'Friends','icon': 'fa fa-users'},
                {'title': 'Me','icon': 'fa fa-lock'}
            ]
        }
    }

    addPost() {

    }
    ngOnInit() {
        var that = this;
        const userData = JSON.parse(localStorage.getItem('ud'));
        this.tokenService.getToken(userData.id, userData.password).subscribe(res => {
            let data = res.json();
            that.tokenService.setUserToken(data.data.token);
            this.userFeedService.getUserFeeds(1).subscribe(response => {
                response = response.json();
                that.userFeed = response.data;
            });
        });
    }
}