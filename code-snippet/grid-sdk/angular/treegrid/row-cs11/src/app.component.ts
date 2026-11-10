import { Component, OnInit } from '@angular/core';
import { TreeGridModule, RowDDService } from '@syncfusion/ej2-angular-treegrid';
import { sampleData } from './datasource';

@Component({
    imports: [TreeGridModule],
    providers: [RowDDService],
    standalone: true,
    selector: 'app-container',
    template: `<div>
                    <div style="float:left;width:49%">
                        <ejs-treegrid id='TreeGrid1' [dataSource]='data' [allowRowDragAndDrop]='true' height='250' [treeColumnIndex]='1' [rowDropSettings]='firstTreeDrop'
                             [selectionSettings]='selectionSettings' childMapping='subtasks'>
                            <e-columns>
                                <e-column field='taskID' headerText='Task ID' [isPrimaryKey]='true' textAlign='Right' width=90></e-column>
                                <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                                <e-column field='startDate' headerText='Start Date' textAlign='Right' format='yMd' width=90></e-column>
                                <e-column field='duration' headerText='Duration' textAlign='Right' width=80></e-column>
                            </e-columns>
                        </ejs-treegrid>
                    </div>
                    <div style="float:left;width:49%">
                        <ejs-treegrid id='TreeGrid2' height='250' [allowRowDragAndDrop]='true' [treeColumnIndex]='1' [rowDropSettings]='secondTreeDrop'
                            [selectionSettings]='selectionSettings' childMapping='subtasks'>
                            <e-columns>
                                <e-column field='taskID' headerText='Task ID' [isPrimaryKey]='true' textAlign='Right' width=90></e-column>
                                <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                                <e-column field='startDate' headerText='Start Date' textAlign='Right' format='yMd' width=90></e-column>
                                <e-column field='duration' headerText='Duration' textAlign='Right' width=80></e-column>
                            </e-columns>
                        </ejs-treegrid>
                    </div>
                    <div style="float:left;width:49%">
                        <ejs-treegrid id='TreeGrid3' height='250' [allowRowDragAndDrop]='true' [treeColumnIndex]='1' [rowDropSettings]='thirdTreeDrop'
                            [selectionSettings]='selectionSettings' childMapping='subtasks'>
                            <e-columns>
                                <e-column field='taskID' headerText='Task ID' [isPrimaryKey]='true' textAlign='Right' width=90></e-column>
                                <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                                <e-column field='startDate' headerText='Start Date' textAlign='Right' format='yMd' width=90></e-column>
                                <e-column field='duration' headerText='Duration' textAlign='Right' width=80></e-column>
                            </e-columns>
                        </ejs-treegrid>
                    </div>
                </div>`,
})
export class AppComponent implements OnInit {
    public data?: Object[];
    public firstTreeDrop?: Object;
    public secondTreeDrop?: Object;
    public thirdTreeDrop?: Object;
    public selectionSettings?: Object;

    ngOnInit(): void {
        this.data = sampleData;
        this.selectionSettings = { type: 'Multiple' };
        this.firstTreeDrop = { targetID: 'TreeGrid2' };
        this.secondTreeDrop = { targetID: 'TreeGrid3' };
        this.thirdTreeDrop = { targetID: 'TreeGrid1' };
    }
}
