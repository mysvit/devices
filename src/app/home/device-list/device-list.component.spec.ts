import {ComponentFixture, TestBed} from '@angular/core/testing';
import {DeviceListComponent} from './device-list.component';
import {HomeRoutingModule} from '../home-routing.module'
import {By} from '@angular/platform-browser'

describe('DeviceListComponent', () => {
    let component: DeviceListComponent;
    let fixture: ComponentFixture<DeviceListComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HomeRoutingModule],
            declarations: [DeviceListComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(DeviceListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Should create', () => {
        expect(component).toBeTruthy();
    });

    it('Should be 3 devices render on the home page', () => {
        const {debugElement} = fixture;
        const counter = debugElement.queryAll(By.css('app-device-box'));
        expect(counter.length).toBe(3);
    });
});
