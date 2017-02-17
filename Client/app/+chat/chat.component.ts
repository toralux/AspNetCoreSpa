import { Component, OnInit } from '@angular/core';

import { FeedService } from './services/feed.service';
import { ChatService } from './services/chat.service';
import { Match, Feed } from './interfaces';
import { DataService } from '../shared/services/data.service';
import { SignalRConnectionStatus } from './interfaces';

@Component({
  selector: 'appc-chat',
  templateUrl: './chat.component.html'
})
export class ChatComponent implements OnInit {

  public matches: Match[];
  public connectionId: string;
  public error: any;
  constructor(private feedService: FeedService, private chatService: ChatService) { }

  public ngOnInit() {
    this.feedService.start(true).subscribe(
      null,
      error => console.log('Error on init: ' + error));

    this.listenForConnection();

    this.feedService.connectionState.subscribe(
      connectionState => {
        if (connectionState === SignalRConnectionStatus.Connected) {
          console.log('Connected!');
          this.loadMatches();
        } else {
          console.log(connectionState.toString());
        }
      },
      error => {
        this.error = error;
        console.log(error);
      });

  }

  public loadMatches = (): void => {
    let self = this;
    this.chatService.getMatches()
      .subscribe((res: Match[]) => {
        self.matches = res;
        // Listen for match score updates...
        self.feedService.updateMatch.subscribe(match => {
          for (let i of self.matches) {
            if (i.Id === match.Id) {
              i.HostScore = match.HostScore;
              i.GuestScore = match.GuestScore;

              if (match.HostScore === 0 && match.GuestScore === 0) {
                i.Feeds = new Array<Feed>();
              }
            }
          }
        });

        // Listen for subscribed feed updates..
        this.feedService.addFeed.subscribe(
          feed => {
            console.log(feed);
            for (let i of this.matches) {
              if (i.Id === feed.MatchId) {
                if (!i.Feeds) {
                  i.Feeds = new Array<Feed>();
                }
                i.Feeds.unshift(feed);
              }
            }
          }
        );
      },
      error => {
        console.log(error);
      });
  }

  public listenForConnection() {
    // Listen for connected / disconnected events
    this.feedService.setConnectionId.subscribe(
      id => {
        console.log(id);
        this.connectionId = id;
      }
    );
  }

  public updateSubscription(subscription: any) {
    if (<boolean>subscription.subscribe === true) {
      this.feedService.subscribeToFeed(<number>subscription.matchId);
    } else {
      this.feedService.unsubscribeFromFeed(<number>subscription.matchId);
    }
  }

}
