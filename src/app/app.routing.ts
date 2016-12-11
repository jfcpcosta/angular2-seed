import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";

const appRoutes: Routes = [
    /*{
      path: '',
      redirectTo: 'my-path',
      pathMatch: 'full'
    },
    {
      path: 'my-path',
      component: MyComponent,
      data: {
        title: 'My Component'
      }
    }*/
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });
