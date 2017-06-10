import {Component,OnInit} from "angular2/core";
import {StoryComponent} from './components/story/story.component';
import {NewsComponent} from '../news/news.component';

@Component({
	selector:'storyline',
	templateUrl:'/resources/static/app/modules/storyline/storyline.component.html',
	directives:[StoryComponent, NewsComponent],
	styleUrls: ['resources/styles/css/storyline/storyline.css']
})

export class StorylineComponent{
	
}