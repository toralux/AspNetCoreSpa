import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { RealtimeComponent } from './realtime.component';
import { MatchfeedComponent } from './matchfeed/matchfeed.component';
import { ConfigService } from './matchfeed/services/config.service';
import { ChatService } from './matchfeed/services/chat.service';
import { FeedService } from './matchfeed/services/feed.service';
import { HighlightDirective } from './matchfeed/directives/highlight.directive';
import { MatchComponent } from './matchfeed/components/match.component';
import { MatchfeedMessageComponent } from './matchfeed/components/message.component';
import { routing } from './realtime.routes';

@NgModule({
    imports: [routing, SharedModule],
    declarations: [
        RealtimeComponent,
        MatchfeedComponent,
        MatchfeedMessageComponent,
        HighlightDirective,
        MatchComponent
    ],
    providers: [
        FeedService,
        ConfigService,
        ChatService
    ]
})
export class RealtimeModule { }
