import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ChatComponent } from './chat.component';
import { ConfigService } from './services/config.service';
import { ChatService } from './services/chat.service';
import { FeedService } from './services/feed.service';
import { HighlightDirective } from './directives/highlight.directive';
import { MatchComponent } from './components/match.component';
import { ChattingComponent } from './components/chat.component';
import { routing } from './chat.routes';

@NgModule({
    imports: [routing, SharedModule],
    declarations: [
        ChatComponent,
        ChattingComponent,
        HighlightDirective,
        MatchComponent
    ],
    providers: [
        FeedService,
        ConfigService,
        ChatService
    ]
})
export class ChatModule { }
