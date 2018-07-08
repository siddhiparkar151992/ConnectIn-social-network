import {Inject, AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild} from "angular2/core";
import {Route, Router} from "angular2/router";

import {Observable} from "rxjs/Rx";
import {UserProfileService} from "./user-profile.service";
import {StoryComponent} from "../../post/story.component";
import {DropdownComponent} from "../../../../common/components/dropdown/dropdown.component";
import {StorylineService} from "../../feed/feed.service";
import {DatetimeService} from "../../../../util/datetime.service";
import {FriendListComponent} from "../../friend-list/friend-list.component";
import {ConnectionsService} from "../../../../common/sevices/connections.service";
import {FriendListService} from "../../friend-list/friend-list.service";
import {UrlConfigService} from "../../../../config/url-config.service";
import {TokenService} from "../../../security/token/token.service";
import {RequestHeaderService} from "../../../../common/sevices/request-header.service";
declare var $: any;

@Component({
    selector: 'user-profile',
    providers: [UserProfileService, UrlConfigService, TokenService, RequestHeaderService,
        StorylineService, DatetimeService, FriendListService, ConnectionsService],
    directives: [StoryComponent, DropdownComponent, FriendListComponent],
    templateUrl: '/resources/static/app/core/modules/user/user-profile/user-profile.component.html',
    styleUrls: ['resources/styles/css/modules/user-profile/user-profile.css'],
})
export class UserProfileComponent {
    private feed:Array = [];
    private privacyDropdown;
    private post;

    @Output
    private list = { users:[] };

    constructor(@Inject(UserProfileService) private userProfileService: UserProfileService,
                @Inject(FriendListService) private friendListService: FriendListService,
                @Inject(StorylineService) private storylineService: StorylineService ,
                @Inject(DatetimeService) private datetimeService: DatetimeService) {
        this.post = {'text': ''};
        this.privacyDropdown = {
            selectedItem: {'title': 'Public', 'icon': 'fa fa-globe'},
            items: [
                {'title': 'Public', 'icon': 'fa fa-globe'},
                {'title': 'Friends', 'icon': 'fa fa-users'},
                {'title': 'Me', 'icon': 'fa fa-lock'}
            ]
        }
        this.init();
    }

    onDropdownChange(event) {
        this.privacyDropdown.selectedItem = event;
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
                this.init();
            });
        }
    }

    init() {
        this.friendListService.getConnections().subscribe(response => {
            this.list.users = response.json().data;
        });
        this.userProfileService.getPostsByUser().subscribe(response => {
           response = response.json();
           if (response.statusMessage == "Success") {
               this.feed = response.data;
           }
        });
    }
}