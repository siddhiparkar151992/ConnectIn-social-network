import {bootstrap} from 'angular2/platform/browser';
import { AppComponent } from './app.component';
import {RouteConfig, ROUTER_PROVIDERS,LocationStrategy, HashLocationStrategy} from 'angular2/router';
import { XHRBackend } from 'angular2/http';
import { HTTP_PROVIDERS } from 'angular2/http';
import { provide }    from 'angular2/core';
import {Config} from './app-conf';
import {enableProdMode} from 'angular2/core';


enableProdMode();
bootstrap(AppComponent, [ROUTER_PROVIDERS, HTTP_PROVIDERS,
provide(LocationStrategy, { useClass: HashLocationStrategy })
	//provide(XHRBackend, { useClass: InMemoryBackendService }), // in-mem server
    //provide(SEED_DATA, { useClass: InMemoryDataService })     // in-mem server data
]);

