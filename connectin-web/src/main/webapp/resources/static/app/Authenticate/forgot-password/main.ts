import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from './forgot-password';
import {RouteConfig,ROUTER_PROVIDERS} from 'angular2/router';
import { HTTP_PROVIDERS } from 'angular2/http';
import { provide }    from 'angular2/core';
// import {DataService, RestAPI} from '../../shared/data.service'
import {Config} from '../../app-conf'
import {ValidatorService} from '../../shared/validator.service'
import {DataService} from '../../shared/data.service'
import {RestAPI} from '../../shared/restapi.service'
import {LoginService} from '../authenticate.service'
import {enableProdMode} from 'angular2/core';
import {Utility} from '../../Util/util.service'
enableProdMode();
bootstrap(AppComponent, [HTTP_PROVIDERS,ROUTER_PROVIDERS,
	Config,
	LoginService,
	DataService,
	RestAPI,
	ValidatorService,
	Utility
]);

