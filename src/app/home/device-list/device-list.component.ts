import {Component, OnInit} from '@angular/core';
import {HomeService} from '../home.service'
import {Device} from '../home.model'
import {Router} from '@angular/router'

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
        this.homeService.getDevices('').subscribe(data => this.devices = data)
    }

    searchEvent(searchText: string) {
        this.homeService.getDevices(searchText).subscribe(data => this.devices = data)
    }

    deviceClick(device: Device) {
        console.log(device)
        this.router.navigate(['device-details', device.id])
    }

}
