import { shiftPlanData } from './datasource';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FreezeService, GridComponent, GridModule, QueryCellInfoEventArgs, SortService } from '@syncfusion/ej2-angular-grids';
import { EmitType } from '@syncfusion/ej2-base';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GridModule],
  providers: [FreezeService, SortService],
  template: `
    <ng-template #doctorTemplate let-data>
      <div class="doctor-name">{{ data.Name }}</div>
      <div class="doctor-designation">{{ data.Designation }}</div>
      @if (isFullWidthStatus(data.Status)) {
        <div>{{ data.Status }}</div>
      }
    </ng-template>

    <ejs-grid #grid [dataSource]="shiftPlanData" gridLines="Both" [allowTextWrap]="true" [textWrapSettings]="{ wrapMode: 'Content' }" height="315" width="auto"
      (queryCellInfo)="queryCellInfoEvent($event)">
      <e-columns>
        <e-column field="Name" headerText="Doctor Name" width="170" textAlign="Center" [template]="doctorTemplate"></e-column>
        <e-column field="Time9AM" headerText="9:00 AM" width="120" textAlign="Center" ></e-column>
        <e-column field="Time10AM" headerText="10:00 AM" width="120" textAlign="Center" ></e-column>
        <e-column field="Time11AM" headerText="11:00 AM" width="120" textAlign="Center" ></e-column>
        <e-column field="Time12PM" headerText="12:00 PM" width="120" textAlign="Center" ></e-column>
        <e-column field="Time1PM" headerText="1:00 PM" width="120" textAlign="Center" ></e-column>
        <e-column field="Time2PM" headerText="2:00 PM" width="120" textAlign="Center" ></e-column>
        <e-column field="Time3PM" headerText="3:00 PM" width="120" textAlign="Center" ></e-column>
        <e-column field="Time4PM" headerText="4:00 PM" width="120" textAlign="Center" ></e-column>
        <e-column field="Time5PM" headerText="5:00 PM" width="120" textAlign="Center" ></e-column>
        <e-column field="Time6PM" headerText="6:00 PM" width="120" textAlign="Center" ></e-column>
        <e-column field="Time7PM" headerText="7:00 PM" width="120" textAlign="Center" ></e-column>
      </e-columns>
    </ejs-grid>
  `,
  styles: [`
    .doctor-name {
      margin-bottom: 5px;
    }
    .doctor-designation {
      font-size: 12px;
      color: #7f8c8d;
      font-weight: normal;
    }
  `]
})
export class AppComponent implements OnInit {

  public shiftPlanData?: Object[];
  @ViewChild('grid') 
  public grid?: GridComponent;

  public queryCellInfoEvent: EmitType<QueryCellInfoEventArgs> = (args: QueryCellInfoEventArgs) => {
    const data = args.data as { Status: string }; 
    if (args.column?.field === 'Name' && this.isFullWidthStatus(data.Status)) {
      args.colSpan = 12;debugger
      (args.cell as HTMLElement).classList.add('full-width-row');
    }
  };

  public isFullWidthStatus(status?: string): boolean {
    if (!status) {
      return false;
    }
    const normalizedStatus = status.trim().toLowerCase().replace(/[-_]/g, ' ');
    return normalizedStatus === 'not available' || normalizedStatus === 'leave' ||
      normalizedStatus === 'on leave' || normalizedStatus === 'resigned';
  }

  ngOnInit(): void {
    this.shiftPlanData = shiftPlanData;
  }
}