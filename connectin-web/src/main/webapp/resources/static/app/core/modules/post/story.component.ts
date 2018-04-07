import {Component, Inject, Input, OnInit} from "angular2/core";
import {RequestHeaderService} from "../../../common/sevices/request-header.service";
import {CommentService} from "../comment/comment.service";
import {DatetimeService} from "../../../util/datetime.service";
import {LikeService} from "../likes/likes.service";

@Component({
    inputs: ['post'],
    selector: 'story-card',
    templateUrl: '/resources/static/app/core/modules/post/story.component.html',
    styleUrls: ['resources/styles/css/modules/post/story.css'],
    providers: [RequestHeaderService, CommentService, LikeService]

})
export class StoryComponent implements OnInit {
    private postedComment;
    @Input()
    private post;

    constructor(@Inject(DatetimeService) private datetimeService: DatetimeService,
                @Inject(LikeService) private likeService: LikeService,
                @Inject(CommentService) private commentService: CommentService) {
        this.postedComment = {
            text: ""
        }
    }

    likePost() {
        const id = this.post.id;
        this.likeService.likePost(id).subscribe(response => {
            response = response.json();
            if (response.statusCode == 0) {
                this.post.likes.push({ });
            }
        });
    }
    likeComment(comment) {
        const id = comment.id;
        this.likeService.likeComment(id).subscribe(response => {
            response = response.json();
            if (response.statusCode == 0) {
                if(!comment.likes) comment.likes = [];
                comment.likes.push({ });
            }
        });
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
        if (this.postedComment != null && this.postedComment != "") {
            this.commentService.addComment(comment).subscribe(response => {
                response = response.json();
                if (response.statusCode == 0) {
                    this.commentService.getCommentByPost(that.post.id).subscribe(response => {
                        response = response.json();

                        that.post.comments = response.data;
                    });
                }
            })
        }
    }

    ngOnInit() {

    }
}