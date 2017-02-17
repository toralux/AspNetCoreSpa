import { Component, OnInit, Input } from '@angular/core';

import { ChatMessage, Match } from '../interfaces';
import { FeedService } from '../services/feed.service';

@Component({
    selector: 'chat',
    templateUrl: './chat.component.html'
})
export class ChattingComponent implements OnInit {

    @Input()
    public matches: Match[];
    @Input()
    public connection: string;
    public messages: ChatMessage[];

    constructor(private feedService: FeedService) { }

    public ngOnInit() {
        let self = this;

        self.feedService.addChatMessage.subscribe(
            message => {
                console.log('received..');
                console.log(message);
                if (!self.messages) {
                    self.messages = new Array<ChatMessage>();
                }
                self.messages.unshift(message);
            }
        );
    }
}
