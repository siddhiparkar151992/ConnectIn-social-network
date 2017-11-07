import {Component, Input, ngOnInit} from "angular2/core";

@Component({
    inputs: ['items','selectedItem'],
    selector: 'dropdown',
    templateUrl: '/resources/static/app/modules/components/dropdown/dropdown.component.html',
    styleUrls: ['resources/styles/css/modules/components/dropdown/dropdown.css']
})
export class DropdownComponent {

    @Input
    public items:Array;

    @Input
    private selectedItem;


    constructor() {}

    onSelect(item) {
        this.selectedItem =  item;
    }
}