import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

import { ChatMessage, Match } from '../interfaces';
import { ConfigService } from './config.service';

@Injectable()
export class ChatService {

    private _baseUrl: string = '';

    constructor(private http: Http, private configService: ConfigService) {
        this._baseUrl = configService.getApiURI();
    }

    public getMatches(): Observable<Match[]> {
        return this.http.get(this._baseUrl + 'matches')
            .map(this.extractData)
            .catch(this.handleError);
    }

    public addChatMessage(message: ChatMessage): Observable<void> {

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.post(this._baseUrl + 'messages/', JSON.stringify(message), {
            headers: headers
        })
            .map((res: Response) => {
                return null;
            })
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }

    private handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}