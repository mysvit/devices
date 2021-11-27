import {Injectable} from '@angular/core';
import {Device} from './home.model'
import {Observable} from 'rxjs'
import {map} from 'rxjs/operators';
import {HttpClient, HttpParams} from '@angular/common/http'
import {environment} from '../../environments/environment'

@Injectable({
    providedIn: 'root'
})
export class HomeService {

    constructor(private http: HttpClient) {
    }

    getDevices(name: string): Observable<Array<Device>> {
        name = name.trim()
        const options = name ? {params: new HttpParams().set('name', name)} : {}
        return environment.production ? this.http.get<Array<Device>>(environment.apiBase + 'getDevices', options)
            : this.mockGetDevices(options)
    }

    // simulate back-end API return just first 3 records
    private mockGetDevices(options: any): Observable<Array<Device>> {
        const name = options.params ? options.params.get('name') : ''
        return this.http.get<Array<Device>>('assets/db/devices.json')
            .pipe(
                map(data =>
                    data.filter(devices => devices.name.indexOf(name) >= 0).splice(0, 3)),
            )
    }

    getDeviceDetails(id: string): Observable<Device> {
        id = id.trim()
        const options = id ? {params: new HttpParams().set('id', id)} : {}
        return environment.production ? this.http.get<Device>(environment.apiBase + 'getDeviceDetails', options)
            : this.mockGetDeviceDetails(options)
    }

    // simulate back-end API
    private mockGetDeviceDetails(options: any): Observable<Device> {
        const id = options.params ? options.params.get('id') : ''
        return this.http.get<Array<Device>>('assets/db/devices.json')
            .pipe(
                map(data => data.find(f => f.id === id) || <Device>{}),
            )
    }

    getRelatedDevices(id: string): Observable<Array<Device>> {
        id = id.trim()
        const options = id ? {params: new HttpParams().set('id', id)} : {}
        return environment.production ? this.http.get<Array<Device>>(environment.apiBase + 'getRelatedDevices', options)
            : this.mockGetRelatedDevices(options)
    }

    // simulate back-end API return just first 3 records
    private mockGetRelatedDevices(options: any): Observable<Array<Device>> {
        const id = options.params ? options.params.get('id') : ''
        return this.http.get<Array<Device>>('assets/db/devices.json')
            .pipe(
                map(data => data.filter(f => f.relatedTo === id).splice(0, 3))
            )
    }

}
