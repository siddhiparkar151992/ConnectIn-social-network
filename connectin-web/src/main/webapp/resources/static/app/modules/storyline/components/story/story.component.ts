import {Component, Input, OnInit} from "angular2/core";
import {CommentService} from "../../../comment/comment.service";
import {Component, Inject, OnInit} from "angular2/core";
import {RequestHeaderService} from "../../../../common/core/security/request-header.service";

@Component({
    inputs: ['post'],
    selector: 'story-card',
    templateUrl: '/resources/static/app/modules/storyline/components/story/story.component.html',
    styleUrls: ['resources/styles/css/storyline/story.css'],
    providers: [RequestHeaderService, CommentService]

})
export class StoryComponent implements OnInit {
    private postedComment;
    @Input()
    private post;

    constructor(@Inject(CommentService) private commentService:CommentService) {

    }

    postComment() {
        if(this.postedComment!=null && this.postedComment!=""){
            this.commentService.addComment(this.postedComment).subscribe(response => {
                console.log(response);
            })
        }
    }
    ngOnInit() {

    }
}