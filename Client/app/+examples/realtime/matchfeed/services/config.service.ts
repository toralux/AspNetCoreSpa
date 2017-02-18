import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {

    private _apiURI: string;

    constructor() {
        this._apiURI = 'api/';
    }

    public getApiURI() {
        return this._apiURI;
    }

    public getApiHost() {
        return this._apiURI.replace('api/', '');
    }
}