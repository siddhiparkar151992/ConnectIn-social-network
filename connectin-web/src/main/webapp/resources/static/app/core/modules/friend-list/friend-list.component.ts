import {Component, Inject, Input, OnInit} from "angular2/core";
import {DatetimeService} from "../../../util/datetime.service";
import {FriendListService} from "./friend-list.service";
import {ConnectionsService} from "../../../common/sevices/connections.service";

@Component({
    inputs: ['list'],
    selector: 'friend-list',
    templateUrl: '/resources/static/app/core/modules/friend-list/friend-list.component.html',
    styleUrls: ['resources/styles/css/modules/friend-list/friend-list.css'],
    providers: [ConnectionsService, FriendListService, DatetimeService]

})
export class FriendListComponent implements OnInit {
    @Input()
    private list = { };

    constructor(@Inject(FriendListService) private friendListService: FriendListService) {

    }
    followFriend(user) {

    }
    sendFriendRequest(user) {

    }
    ngOnInit() {
    }
}