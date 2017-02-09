import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {routing, appRoutingProviders} from './app.routing';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

import {AppComponent} from "./app.component";
import {PageNotFoundComponent} from "./error/components/page-not-found.component";
import {AppLayoutComponent} from "./layout/components/app-layout.component";

import {HelloComponent} from "./hello.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    declarations: [
        AppComponent,
        PageNotFoundComponent,
        AppLayoutComponent,
        HelloComponent
    ],
    providers: [
        appRoutingProviders
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}
