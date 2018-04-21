import {Inject, AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild} from "angular2/core";
import {Route, Router} from "angular2/router";

import {Observable} from "rxjs/Rx";
import {UserProfileService} from "./user-profile.service";
import {StoryComponent} from "../post/story.component";
declare var $: any;

@Component({
    selector: 'user-profile',
    providers: [UserProfileService],
    directives: [StoryComponent],
    templateUrl: '/resources/static/app/core/modules/user-profile/user-profile.component.html',
    styleUrls: ['resources/styles/css/modules/user-profile/user-profile.css'],
})
export class UserProfileComponent {
    private feed:Array = [];
    constructor(@Inject(UserProfileService) private userProfileService: UserProfileService) {
        this.init();
    }

    init() {
        this.userProfileService.getPostsByUser().subscribe(response => {
           response = response.json();
           if (response.statusMessage == "Success") {
               this.feed = response.data;
           }
        });
    }
}