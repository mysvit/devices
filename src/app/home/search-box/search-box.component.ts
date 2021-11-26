import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {debounceTime, distinctUntilChanged, Subject} from 'rxjs'

@Component({
    selector: 'app-search-box',
    templateUrl: './search-box.component.html',
    styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {

    @Output() search: EventEmitter<string> = new EventEmitter<string>()

    searchText: string = ''

    private searchUpdate: Subject<number> = new Subject<number>()

    constructor() {
        this.searchUpdate.asObservable()
            .pipe(
                debounceTime(500),
                distinctUntilChanged()
            )
            .subscribe(() => {
                console.debug('search emit searchText:', this.searchText)
                this.search.emit(this.searchText)
            });
    }

    ngOnInit(): void {
    }

    ngOnDestroy() {
        this.searchUpdate.unsubscribe();
    }

    keyDown(event: KeyboardEvent) {
        console.debug(`key down emit ${event.key}`)
        if (event && event.key !== Keys.Shift) {
            this.searchUpdate.next(Math.random())
        }
    }

    cancelClick() {
        this.searchText = ''
        this.searchUpdate.next(Math.random())
    }
}

export enum Keys {
    Shift = 'Shift',
}
