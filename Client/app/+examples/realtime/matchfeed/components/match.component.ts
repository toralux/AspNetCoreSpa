import { Component, Input, Output, EventEmitter } from '@angular/core';

import { ChatMessage, Match } from '../interfaces';
import { FeedService } from '../services/feed.service';
import { ChatService } from '../services/chat.service';

@Component({
    selector: 'appc-match',
    templateUrl: './match.component.html'
})
export class MatchComponent {

    @Input()
    public match: Match;
    @Output()
    public updateSubscription = new EventEmitter();
    private subscribed: boolean;
    private chatMessage: string = '';

    constructor(private chatService: ChatService) { }

    public setSubscription(val: boolean) {
        this.subscribed = val;
        let subscription = {
            subscribe: val,
            matchId: this.match.id
        };

        this.updateSubscription.emit(subscription);
    }

    public addChatMessage() {
        let self = this;
        let messageToSend: ChatMessage = {
            MatchId: self.match.id,
            Text: self.chatMessage,
            CreatedAt: new Date(Date.now())
        };

        this.chatService.addChatMessage(messageToSend)
            .subscribe(() => {
                // Nothing to do here
                // Since is subscribed, caller will also receive the message
                console.log('message sent..');
            },
            error => {
                console.log(error);
            });

        self.chatMessage = '';
    }
}