import {Component, Inject, Input, OnInit} from "angular2/core";
import {RequestHeaderService} from "../../../common/sevices/request-header.service";
import {CommentService} from "../comment/comment.service";
import {DatetimeService} from "../../../util/datetime.service";

@Component({
    inputs: ['post'],
    selector: 'story-card',
    templateUrl: '/resources/static/app/core/modules/post/story.component.html',
    styleUrls: ['resources/styles/css/storyline/story.css'],
    providers: [RequestHeaderService, CommentService]

})
export class StoryComponent implements OnInit {
    private postedComment;
    @Input()
    private post;

    constructor( @Inject(DatetimeService) private datetimeService:DatetimeService,
                 @Inject(CommentService) private commentService:CommentService) {
        this.postedComment= {
            text:""
        }
    }

    postComment() {

        let comment = {
            "text": this.postedComment.text,
            "createdTime": this.datetimeService.getCurrentDateTime(),
            "post": {
                "id": this.post.id
            }
        };
        let that = this;
        if(this.postedComment!=null && this.postedComment!=""){
            this.commentService.addComment(comment).subscribe(response => {
                response= response.json();
                if(response.statusCode==0){
                    this.commentService.getCommentByPost(that.post.id).subscribe(response => {
                        response= response.json();

                        that.post.comments = response.data;
                    });
                }
            })
        }
    }
    ngOnInit() {

    }
}