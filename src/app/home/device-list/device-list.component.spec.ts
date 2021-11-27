import {ComponentFixture, TestBed} from '@angular/core/testing';
import {DeviceListComponent} from './device-list.component';
import {HomeRoutingModule} from '../home-routing.module'
import {By} from '@angular/platform-browser'
import {HttpClientModule} from '@angular/common/http'
import {SearchBoxComponent} from '../search-box/search-box.component'
import {FormsModule} from '@angular/forms'
import {DeviceBoxComponent} from '../device-box/device-box.component'

describe('DeviceListComponent', () => {
    let component: DeviceListComponent;
    let fixture: ComponentFixture<DeviceListComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HomeRoutingModule, HttpClientModule, FormsModule],
            declarations: [DeviceListComponent, SearchBoxComponent, DeviceBoxComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(DeviceListComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    });

    it('Should create', () => {
        expect(component).toBeTruthy()
    });

    it('Should be 3 <app-device-box> components render on the home page', () => {
        fixture.autoDetectChanges()
        return fixture.whenRenderingDone().then(() => {
            const {debugElement} = fixture
            const counter = debugElement.queryAll(By.css('app-device-box'))
            return expect(counter.length).toBe(3)
        })
    });

})
