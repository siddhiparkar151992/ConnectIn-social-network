import {Inject, Injectable} from "angular2/core";

declare var moment:any;
@Injectable()
export class DatetimeService {

    constructor() {

    }

    getCurrentDateTime() {
        let currentDate = moment();
        return currentDate.format('YYYY-MM-DD HH:mm:ss');
    }

}
