import {Component, Input, OnInit} from '@angular/core';
import {HomeService} from '../home.service'
import {Device} from '../home.model'
import {ActivatedRoute} from '@angular/router'
import {map} from 'rxjs/operators'

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
            this.getDeviceDetails(param['id']).subscribe()
            this.getRelatedDevices(param['id']).subscribe()
        });
    }

    private getDeviceDetails(id: string) {
        return this.homeService.getDeviceDetails(id).pipe(map(data => this.deviceDetails = data))
    }

    private getRelatedDevices(id: string) {
        return this.homeService.getRelatedDevices(id).pipe(map(data => this.relatedDevices = data))
    }

}
