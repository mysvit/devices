import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DeviceListComponent} from './device-list/device-list.component'
import {DeviceDetailsComponent} from './device-details/device-details.component'

const routes: Routes = [
    {
        path: '',
        redirectTo: '/device-list',
        pathMatch: 'full'
    },
    {path: 'device-list', component: DeviceListComponent},
    {path: 'device-details/:id', component: DeviceDetailsComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule {
}
