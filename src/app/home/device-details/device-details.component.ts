import {Component, Input, OnInit} from '@angular/core';
import {HomeService} from '../home.service'
import {Device} from '../home.model'
import {ActivatedRoute} from '@angular/router'

@Component({
    selector: 'app-device-details',
    templateUrl: './device-details.component.html',
    styleUrls: ['./device-details.component.scss']
})
export class DeviceDetailsComponent implements OnInit {

    @Input() device!: Device

    deviceDetails: Device = <Device>{};
    relatedDevices: Array<Device> = [];

    constructor(private route: ActivatedRoute, public homeService: HomeService) {
    }

    ngOnInit(): void {
        this.route.params.subscribe(param => {
            this.homeService.getDeviceDetails(param['id'])
                .subscribe(data => this.deviceDetails = data);
            this.homeService.getRelatedDevices(param['id'])
                .subscribe(data => this.relatedDevices = data);
        });
    }

}
