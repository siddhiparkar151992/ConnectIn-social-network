import {bootstrap} from "angular2/platform/browser";
import {HashLocationStrategy, LocationStrategy, RouteConfig, ROUTER_PROVIDERS} from "angular2/router";
import {HTTP_PROVIDERS, XHRBackend} from "angular2/http";
import {enableProdMode, provide} from "angular2/core";
import {HomeComponent} from "./core/routes/home/home.component";


enableProdMode();
bootstrap(HomeComponent, [ROUTER_PROVIDERS, HTTP_PROVIDERS,
    provide(LocationStrategy, {useClass: HashLocationStrategy})
]);

