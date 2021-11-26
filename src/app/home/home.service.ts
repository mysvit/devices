import {Injectable} from '@angular/core';
import {Device} from './home.model'
import {Observable, of} from 'rxjs'

@Injectable({
    providedIn: 'root'
})
export class HomeService {

    devices: Array<Device> = [
        <Device>{
            id: '0',
            relatedTo: '3',
            icon: 'cell-phone.svg',
            name: 'Device 1',
            status: 'Available',
            temperature: '10 Celsius'
        },
        <Device>{
            id: '1',
            relatedTo: '0',
            icon: 'tablet.svg',
            name: 'Device 2',
            status: 'Offline',
            temperature: '10 Celsius'
        },
        <Device>{
            id: '2',
            relatedTo: '0',
            icon: 'pc.svg',
            name: 'Device 3',
            status: 'Available',
            temperature: '10 Celsius'
        },
        <Device>{
            id: '3',
            relatedTo: '0',
            icon: 'cell-phone.svg',
            name: 'Device 4',
            status: 'Available',
            temperature: '10 Celsius'
        },
        <Device>{
            id: '4',
            relatedTo: '1',
            icon: 'tablet.svg',
            name: 'Device 5',
            status: 'Available',
            temperature: '10 Celsius'
        },
        <Device>{
            id: '5',
            relatedTo: '1',
            icon: 'cell-phone.svg',
            name: 'Device 6',
            status: 'Available',
            temperature: '10 Celsius'
        },
        <Device>{
            id: '6',
            relatedTo: '2',
            icon: 'cell-phone.svg',
            name: 'Device 7',
            status: 'Available',
            temperature: '10 Celsius'
        },
        <Device>{
            id: '7',
            relatedTo: '2',
            icon: 'tablet.svg',
            name: 'Device 8',
            status: 'Available',
            temperature: '10 Celsius'
        },
        <Device>{
            id: '8',
            relatedTo: '2',
            icon: 'cell-phone.svg',
            name: 'Device 9',
            status: 'Available',
            temperature: '10 Celsius'
        }

    ];

    constructor() {
    }

    getDevices(name: string): Observable<Array<Device>> {
        return of(this.devices.filter(f => f.name.indexOf(name) >= 0).splice(0, 3));
    }

    getDeviceDetails(id: string): Observable<Device> {
        return of(this.devices.find(f => f.id === id) || <Device>{});
    }

    getRelatedDevices(id: string): Observable<Array<Device>> {
        return of(this.devices.filter(f => f.relatedTo === id).splice(0, 3));
    }

}
