import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-locales-list',
    templateUrl: './locale-list.component.html',
    styleUrls: ['locale-list.component.css']
})
export class LocalesListComponent {
    @Input()
    public loading: boolean;
    private placeholder_tip = 'Search locales ';
    private warning_tip = 'You haven\'t created any Locales yet.';

    @Input()
    public set locales(value: any[]) {
        if (!value) {
            return;
        }
        this._locales = value;
        this.searchString = '';
    }

    set searchString(value: string) {
        this._searchString = value;
        this.filterLocales(value);
    }

    get searchString(): string {
        return this._searchString;
    }

    private _searchString: string;
    private _locales: any[] = [];
    public _filteredLocales: any[]

    constructor() { }

    filterLocales(str: string = '') {
        this._filteredLocales = this._locales.filter(locale => {
            const v = `${locale.ident} ${locale.country} ${locale.language}`.toLowerCase();
            return v.includes(str.toLowerCase());
        });
    }
}
