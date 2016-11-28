import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from './user-onboard.component';
import {RouteConfig,ROUTER_PROVIDERS} from 'angular2/router';
import { HTTP_PROVIDERS } from 'angular2/http';
import { provide }    from 'angular2/core';
// import {DataService, RestAPI} from '../../shared/data.service'
import {Config} from '../app-conf'
import {enableProdMode} from 'angular2/core';
enableProdMode();
bootstrap(AppComponent, [HTTP_PROVIDERS,ROUTER_PROVIDERS
]);

