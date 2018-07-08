import {Inject, Injectable} from "angular2/core";

declare var moment:any;
@Injectable()
export class DatetimeService {

    constructor() {

    }
    formatDate(date, format) {
        return moment(date, 'MM/DD/YYYY HH:mm:ss').format(format);
    }
    getCurrentDateTime() {
        let currentDate = moment();
        return currentDate.format('YYYY-MM-DD HH:mm:ss');
    }

}
