import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";

import {PageNotFoundComponent} from "./error/components/page-not-found.component";
import {AppLayoutComponent} from "./layout/components/app-layout.component";
import {HelloComponent} from "./hello.component";

const appRoutes: Routes = [
    {
        path: '',
        canActivate: [],
        component: AppLayoutComponent,
        children: [
            { path: '', redirectTo: '/hello', pathMatch: 'full' },
            { path: 'hello', component: HelloComponent }
        ]
    },
    { path: '**', component: PageNotFoundComponent }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });
