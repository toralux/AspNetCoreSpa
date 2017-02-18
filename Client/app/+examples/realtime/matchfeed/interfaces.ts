/* SignalR related interfaces  */
export interface FeedSignalR extends SignalR {
    broadcaster: FeedProxy;
}

export interface FeedProxy {
    client: FeedClient;
    server: FeedServer;
}

export interface FeedClient {
    setConnectionId: (id: string) => void;
    updateMatch: (match: Match) => void;
    addFeed: (feed: Feed) => void;
    addChatMessage: (chatMessage: ChatMessage) => void;
}

export interface FeedServer {
    subscribe(matchId: number): void;
    unsubscribe(matchId: number): void;
}

export enum SignalRConnectionStatus {
    Connected = 1,
    Disconnected = 2,
    Error = 3
}

/* LiveGameFeed related interfaces */
export interface Match {
    id: number;
    host: string;
    guest: string;
    hostScore: number;
    guestScore: number;
    matchDate: Date;
    type: string;
    feeds: Feed[];
}

export interface Feed {
    id: number;
    description: string;
    createdAt: Date;
    matchId: number;
}

export interface ChatMessage {
    MatchId: number;
    Text: string;
    CreatedAt: Date;
}