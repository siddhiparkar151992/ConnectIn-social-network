import {Component, Inject, OnInit} from "angular2/core";
import {NotificationComponent} from "../../../core/modules/notifications/notifications.component";
import {UserDetailsService} from "../../../core/modules/user/user-details/user-details.service";


declare var $: any;

@Component({
    selector: 'profile-header',
    templateUrl: '/resources/static/app/layout/header/profile/header.component.html',
    providers: [UserDetailsService],
    directives: [NotificationComponent],
    styleUrls: ['resources/styles/css/headers/profile-header.css']

})

export class ProfileHeaderComponent implements OnInit {
    private userDetails: Object = {};

    constructor(@Inject(UserDetailsService) private userDetailsService: UserDetailsService) {

    }

    populateUserDetails() {
        this.userDetailsService.getUserDetails().subscribe(response => {
            this.userDetails = response.json().data;
        });
    }

    ngOnInit() {
        this.populateUserDetails();
        $('.dropdown').on('show.bs.dropdown', function (e) {
            $(this).find('.dropdown-menu').first().stop(true, true).slideDown(300);
        });

        $('.dropdown').on('hide.bs.dropdown', function (e) {
            $(this).find('.dropdown-menu').first().stop(true, true).slideUp(200);
        });
    }

}
