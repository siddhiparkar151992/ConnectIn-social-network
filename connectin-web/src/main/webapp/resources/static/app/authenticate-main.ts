import {bootstrap} from 'angular2/platform/browser';
import {LoginComponent} from './Authenticate/authenticate.component';
import {RouteConfig} from 'angular2/router';
import { XHRBackend } from 'angular2/http';
import { HTTP_PROVIDERS } from 'angular2/http';
import { provide } from 'angular2/core';

import {Config} from './app-conf';
import {enableProdMode} from 'angular2/core';
enableProdMode();
bootstrap(LoginComponent, [HTTP_PROVIDERS,RestAPI
	
]);

