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
                <input type="text" id="findText" class="e-input" placeholder="Enter text to find" style="width: 220px; display: inline-block" #findText />
                <button ejs-button id="highlight" (click)="highlight(findText.value)" style="margin-left: 10px">Highlight</button>
                </div>
                <ejs-grid #grid [dataSource]='data' [findSettings]='findSettings' height='272px'>
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
    public findSettings?: object;

    @ViewChild('grid') public grid?: GridComponent;

    ngOnInit(): void {
        this.data = data;
        this.findSettings = { enabled: true };

    }

    highlight(text: string): void {
        (this.grid as GridComponent).find(text);
    }
}
