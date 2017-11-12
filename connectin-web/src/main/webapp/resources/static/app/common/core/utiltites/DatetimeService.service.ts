import {Inject, Injectable} from "angular2/core";

@Injectable()
export class DatetimeService {

    constructor() {

    }

    getCurrentDateTime() {
        let d = new Date();
        let h = (d.getHours() < 10 ? '0' : '') + d.getHours();
        let m = (d.getMinutes() < 10 ? '0' : '') + d.getMinutes();
        let s = d.getSeconds();
        let year = d.getFullYear();
        let month = d.getMonth();
        let day = d.getDate();
        return year + "-" + month + "-" + day + " " + h + ":" + m + ":" + s;
    }

}
