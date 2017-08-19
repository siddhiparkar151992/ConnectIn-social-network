/**
 * Created by Siddhi Parkar on 15-08-2017.
 */
import {Inject, Injectable, OnInit} from "angular2/core";
@Injectable()
export class UserService {
    private userName;
    private password;

    constructor() {

    }

    public setUserName(userName: String) {
        this.userName = userName;
    }

    public setPassword(password: String) {
        this.password = password;
    }
}