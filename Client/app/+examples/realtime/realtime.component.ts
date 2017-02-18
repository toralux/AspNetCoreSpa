import { Component, OnInit } from '@angular/core';

import { ChatService } from './matchfeed/services/chat.service';
import { DataService } from '../../shared/services/data.service';
import { FeedService } from './matchfeed//services/feed.service';

@Component({
  selector: 'appc-realtime',
  templateUrl: './realtime.component.html'
})
export class RealtimeComponent implements OnInit {

  constructor(private feedService: FeedService, private chatService: ChatService) { }

  public ngOnInit() {
    this.feedService.start(true).subscribe(
      null,
      error => console.log('Error on init: ' + error));
  }

}
