import {Component, OnInit} from '@angular/core';
import {HomeService} from '../home.service'
import {Device} from '../home.model'
import {Router} from '@angular/router'
import {map} from 'rxjs/operators';

@Component({
    selector: 'app-device-list',
    templateUrl: './device-list.component.html',
    styleUrls: ['./device-list.component.scss']
})
export class DeviceListComponent implements OnInit {

    devices: Array<Device> = [];

    constructor(private router: Router,
                public homeService: HomeService) {
    }

    ngOnInit(): void {
        this.getDevices().subscribe()
    }

    searchEvent(searchText: string) {
        this.getDevices(searchText).subscribe()
    }

    deviceClick(device: Device) {
        console.debug(device)
        this.router.navigate(['device-details', device.id])
    }

    private getDevices(searchText: string = '') {
        return this.homeService.getDevices(searchText).pipe(map(data => this.devices = data))
    }

}
