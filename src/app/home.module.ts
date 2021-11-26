import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HomeComponent} from './home/home.component';
import {SearchBoxComponent} from './home/search-box/search-box.component';
import {FormsModule} from '@angular/forms';
import {DeviceBoxComponent} from './home/device-box/device-box.component';
import {DeviceDetailsComponent} from './home/device-details/device-details.component'
import {DeviceListComponent} from './home/device-list/device-list.component'
import {HomeRoutingModule} from './home/home-routing.module'

@NgModule({
    declarations: [
        HomeComponent,
        DeviceListComponent,
        SearchBoxComponent,
        DeviceBoxComponent,
        DeviceDetailsComponent
    ],
    imports: [
        HomeRoutingModule,
        BrowserModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [HomeComponent]
})
export class HomeModule {
}

