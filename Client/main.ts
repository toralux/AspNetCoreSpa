// http://stackoverflow.com/questions/40030002/how-to-load-signalr-js-in-webpack-inside-angular-2
import 'expose-loader?jQuery!jquery';
import '../node_modules/signalr/jquery.signalR.js';
import './hubs';

import './polyfills';
import './styles/vendor.css';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

import { AppModule } from './app/app.module';

// Enable either Hot Module Reloading or production mode
/* tslint:disable */
if (module['hot']) {
    module['hot'].accept();
    module['hot'].dispose(() => { });
} else {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
