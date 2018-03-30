import {Component, Input, Output, ngOnInit,EventEmitter} from "angular2/core";

@Component({
    inputs: ['items','selectedItem'],
    selector: 'dropdown',
    templateUrl: '/resources/static/app/common/components/dropdown/dropdown.component.html',
    styleUrls: ['resources/styles/css/modules/components/dropdown/dropdown.css']
})
export class DropdownComponent {

    @Input
    public items:Array;
    @Output
    public onDropdownChange = new EventEmitter();

    @Input
    public selectedItem;


    constructor() {}

    onSelect(item) {
        this.selectedItem =  item;
        this.onDropdownChange.emit(this.selectedItem);
    }
}