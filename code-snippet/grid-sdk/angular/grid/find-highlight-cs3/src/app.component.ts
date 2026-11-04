import { data } from './datasource';
import { Component, OnInit, ViewChild } from '@angular/core';
import { GridComponent, GridModule, FindService } from '@syncfusion/ej2-angular-grids';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';

@Component({
    imports: [ GridModule, ButtonModule ],
    providers: [FindService],
    standalone: true,
    selector: 'app-root',
    template: `<div style="padding: 0 0 20px 0">
                <input type="text" id="findText" class="e-input" placeholder="Enter text to find" style="width: 220px; display: inline-block" #findText [value]="query" (input)="query = findText.value" />
                <button ejs-button id="find" (click)="onFind(findText.value)" [disabled]="!query.trim()" style="margin-left: 10px">Find</button>
                <button ejs-button id="findNext" (click)="onFindNext()" [disabled]="!query.trim()" style="margin-left: 10px">Next</button>
                <button ejs-button id="findPrevious" (click)="onFindPrevious()" [disabled]="!query.trim()" style="margin-left: 10px">Previous</button>
                <button ejs-button id="clearFind" (click)="onClearFind()" [disabled]="!query.trim()" style="margin-left: 10px">Clear</button>
                </div>
                <ejs-grid #grid [dataSource]='data' height='272px'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' textAlign='Left' width=110></e-column>
                    <e-column field='ShipCity' headerText='Ship City' textAlign='Left' width=120></e-column>
                    <e-column field='ShipCountry' headerText='Ship Country' textAlign='Left' width=120></e-column>
                    <e-column field='Freight' format='C2' headerText='Freight' textAlign='Right' width=90></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public query = '';
    @ViewChild('grid') public grid?: GridComponent;

    ngOnInit(): void {
        this.data = data;

    }

    onFind(text: string): void {
        this.grid?.find(text);
    }

    onFindNext(): void {
        this.grid?.findNext();
    }

    onFindPrevious(): void {
        this.grid?.findPrevious();
    }

    onClearFind(): void {
        this.grid?.clearFind();
        this.query = '';
    }
}
