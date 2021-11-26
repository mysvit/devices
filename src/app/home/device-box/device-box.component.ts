import {Component, EventEmitter, HostListener, Input, Output} from '@angular/core';
import {Device} from '../home.model'

@Component({
    selector: 'app-device-box',
    templateUrl: './device-box.component.html',
    styleUrls: ['./device-box.component.scss']
})
export class DeviceBoxComponent {

    @Input() device!: Device
    @Input() infoButton: boolean = true
    @Output() clickEvent: EventEmitter<any> = new EventEmitter<any>()

    @HostListener('click', ['$event'])
    onClick() {
        console.log('Device click')
        this.clickEvent.emit()
    }

    constructor() {
    }
}
