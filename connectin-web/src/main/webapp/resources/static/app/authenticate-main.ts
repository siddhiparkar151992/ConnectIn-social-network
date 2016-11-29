import {bootstrap} from 'angular2/platform/browser';
import {LoginComponent} from './Authenticate/authenticate.component';
import {RouteConfig} from 'angular2/router';
import { XHRBackend } from 'angular2/http';
import { HTTP_PROVIDERS } from 'angular2/http';
import { provide } from 'angular2/core';

import {Config} from './app-conf';
import {DataService} from './shared/data.service';
import {RestAPI} from './shared/restapi.service';

import {LoginService} from './Authenticate/authenticate.service'
import {UserService} from '../User/user.service'
import {enableProdMode} from 'angular2/core';
enableProdMode();
bootstrap(LoginComponent, [HTTP_PROVIDERS,LoginService,Config,DataService,RestAPI
	// provide(LocationStrategy, {useClass: HashLocationStrategy}),
	// provide(XHRBackend, { useClass: InMemoryBackendService }), // in-mem server
    // provide(SEED_DATA, { useClass: InMemoryDataService }) ,
    // LoginService    // in-mem server data
]);

