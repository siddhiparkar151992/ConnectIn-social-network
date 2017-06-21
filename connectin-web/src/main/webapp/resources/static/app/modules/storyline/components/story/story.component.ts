import {Component,OnInit, Input} from "angular2/core";

@Component({
	inputs:['post'],
	selector:'story-card',
	templateUrl:'/resources/static/app/modules/storyline/components/story/story.component.html',
	styleUrls: ['resources/styles/css/storyline/story.css']
	
})
export class StoryComponent implements OnInit{

	@Input()
	private post;

	constructor(){

	}


	ngOnInit(){

	}
}