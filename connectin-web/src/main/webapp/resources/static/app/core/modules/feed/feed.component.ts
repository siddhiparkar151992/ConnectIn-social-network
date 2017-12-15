import {Component, Inject, OnInit} from "angular2/core";
import {ActivatedRoute, Router} from "angular2/router";
import {StoryComponent} from "../storyline/components/story/story.component";
import {NewsComponent} from "../news/news.component";
import {DropdownComponent} from "../components/dropdown/dropdown.component";
import {UserFeedService} from "../../common/core/storyline/feed/user-feed/user-feeds.service";
import {UrlConfigService} from "../../config/url-config.service";
import {TokenService} from "../../common/core/security/token/token.service";
import {TokenResolver} from "../../security/token/token.resolver.service";
import {StorylineService} from "./feed.service";
import {DatetimeService} from "../../util/datetime.service";
import "rxjs/Rx";
import {RequestHeaderService} from "../../common/core/security/request-header.service";
import {CommentService} from "../comment/comment.service";
@Component({
    selector: 'storyline',
    templateUrl: '/resources/static/app/modules/storyline/feed.component.html',
    directives: [StoryComponent, NewsComponent, DropdownComponent],
    providers: [UserFeedService, UrlConfigService, TokenService, TokenResolver, StorylineService,
        DatetimeService, RequestHeaderService, CommentService, RequestHeaderService],
    styleUrls: ['resources/styles/css/storyline/storyline.css']
})
export class StorylineComponent implements OnInit {
    private token;
    private userFeed;
    private userFeedService;
    private privacyDropdown;
    private post;

    constructor(private route: Router,
                private tokenService: TokenService,
                @Inject(UserFeedService) private userFeedServ: UserFeedService,
                @Inject(StorylineService) private storylineService: StorylineService,
                @Inject(DatetimeService) private datetimeService) {
        this.datetimeService = datetimeService;
        this.userFeedService = userFeedServ;
        this.post = {'text': ''};
        this.privacyDropdown = {
            selectedItem: {'title': 'Public', 'icon': 'fa fa-globe'},
            items: [
                {'title': 'Public', 'icon': 'fa fa-globe'},
                {'title': 'Friends', 'icon': 'fa fa-users'},
                {'title': 'Me', 'icon': 'fa fa-lock'}
            ]
        }
    }
    onDropdownChange(event) {
        this.privacyDropdown.selectedItem = event.target.value;
    }
    onPostClick() {
        if (this.post.text != null && this.post.text != "") {
            this.storylineService.addPost({
                'category': '',
                'visibility': this.privacyDropdown.selectedItem.title,
                'tags': this.post.tags,
                'comments': [],
                'createdTime': this.datetimeService.getCurrentDateTime(),
                'text': this.post.text,
                'user': {'id': 1}
            }, 1).subscribe(response => {
                this.populateFeed();
            });
        }
    }


    populateFeed() {
        var that = this;
        this.userFeedService.getUserFeeds().subscribe(response => {
            response = response.json();
            that.userFeed = response.data;
        });
    }

    ngOnInit() {
        var that = this;
        const userData = JSON.parse(localStorage.getItem('ud'));
        this.tokenService.getToken(userData.id, userData.password).subscribe(res => {
            let data = res.json();
            that.tokenService.setUserToken(data.data.token);
            this.populateFeed();
        });
    }
}