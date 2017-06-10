import {Inject, Component,OnInit} from "angular2/core";
import {StoryComponent} from './components/story/story.component';
import {NewsComponent} from '../news/news.component';
import {DropdownComponent} from '../../modules/components/dropdown/dropdown.component';
import {UserFeedService} from '../../common/core/storyline/feed/user-feed/user-feeds.service'
import {UrlConfigService} from '../../config/url-config.service';
@Component({
	selector:'storyline',
	templateUrl:'/resources/static/app/modules/storyline/storyline.component.html',
	directives:[StoryComponent, NewsComponent, DropdownComponent],
	providers:[UserFeedService, UrlConfigService],
	styleUrls: ['resources/styles/css/storyline/storyline.css']
})
export class StorylineComponent implements OnInit{

	private userFeed;
	private userFeedService;


	constructor(
	 	@Inject(UserFeedService) private userFeedServ: UserFeedService){
		this.userFeedService = userFeedServ;
		
	}

	

	ngOnInit(){
		var that = this;
		this.userFeedService.getUserFeeds(1).subscribe(response => {
			response = response.json();
			that.userFeed = response.data;
		});
		
	}
}