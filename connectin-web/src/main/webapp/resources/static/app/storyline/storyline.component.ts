import {Component,OnInit} from "angular2/core";
import {StoryComponent} from './story/story.component';

@Component({
	selector:'storyline',
	templateUrl:'/resources/static/app/storyline/storyline.component.html',
	directives:[StoryComponent]
	
})
export class StorylineComponent{
	
}