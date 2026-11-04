import { data } from './datasource';
import { Component, OnInit, ViewChild } from '@angular/core';
import { GridComponent, GridModule, GroupService, GroupSettingsModel, FindService } from '@syncfusion/ej2-angular-grids';
import { ChangeEventArgs, ButtonModule, CheckBoxModule, RadioButtonModule, SwitchModule } from '@syncfusion/ej2-angular-buttons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GridModule, ButtonModule, CheckBoxModule, RadioButtonModule, SwitchModule],
  providers: [GroupService, FindService],
  template: `
    <div style="display: flex; align-items: center; gap: 10px; padding: 10px 10px">
      <label>Enable or disable text selection property</label>
      <ejs-switch id="switch" (change)="onSwitchChange($event)" checked="true"></ejs-switch>
    </div>
    <ejs-grid #grid [dataSource]="data" [allowGrouping]="false" [groupSettings]="groupSettings" height="315">
      <e-columns>
        <e-column field="OrderID" headerText="Order ID" textAlign="Right" width="120">
        </e-column>
        <e-column field="CustomerID" headerText="Customer ID" width="120">
        </e-column>
        <e-column field="ShipCountry" headerText="Ship Country" width="130">
        </e-column>
        <e-column field="Freight" headerText="Freight" format="C2" width="100">
        </e-column>
      </e-columns>
    </ejs-grid>
  `,
})
export class AppComponent implements OnInit {

  public data?: Object[];
  @ViewChild('grid') 
  public grid?: GridComponent;
  public groupSettings: GroupSettingsModel;

  ngOnInit(): void {
    this.data = data;
    this.groupSettings = { columns: ['ShipCountry'] };
  }

  onSwitchChange(args: ChangeEventArgs) {
    if (!args.checked) {
      (this.grid as GridComponent).allowTextSelection = false;
    } else {
      (this.grid as GridComponent).allowTextSelection = true;
    }
  }
}