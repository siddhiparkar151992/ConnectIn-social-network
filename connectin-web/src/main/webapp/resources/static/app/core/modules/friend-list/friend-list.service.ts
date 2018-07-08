import {Inject, Injectable} from 'angular2/core';
import {Headers, Http, Request, RequestOptions} from "angular2/http";
import {ConnectionsService} from "../../../common/sevices/connections.service";

@Injectable()
export class FriendListService {

    constructor(@Inject(ConnectionsService) private connectionsService: ConnectionsService) {
    }

    getConnections() {
        return this.connectionsService.getConnections();
    }
}