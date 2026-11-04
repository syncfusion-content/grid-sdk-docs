import Vue from "vue";
import { GridPlugin } from "@syncfusion/ej2-vue-grids";
import { shiftPlanData } from "./datasource.js";

Vue.use(GridPlugin);

function isFullWidthStatus(status) {
  if (!status) {
    return false;
  }
  const normalizedStatus = status.trim().toLowerCase().replace(/[-_]/g, ' ');
  return normalizedStatus === 'not available' || normalizedStatus === 'leave' ||
    normalizedStatus === 'on leave' || normalizedStatus === 'resigned';
}

new Vue({
  el: "#app",
  template: `
    <div id="app">
      <ejs-grid :dataSource="data" gridLines="Both" :allowTextWrap="true" :textWrapSettings="textWrapSettings" :height="315" width="auto" :queryCellInfo="queryCellInfo">
        <e-columns>
          <e-column field="Name" headerText="Doctor Name" width="170" textAlign="Center" :template="'doctorTemplate'"></e-column>
          <e-column field="Time9AM" headerText="9:00 AM" width="120" textAlign="Center"></e-column>
          <e-column field="Time10AM" headerText="10:00 AM" width="120" textAlign="Center"></e-column>
          <e-column field="Time11AM" headerText="11:00 AM" width="120" textAlign="Center"></e-column>
          <e-column field="Time12PM" headerText="12:00 PM" width="120" textAlign="Center"></e-column>
          <e-column field="Time1PM" headerText="1:00 PM" width="120" textAlign="Center"></e-column>
          <e-column field="Time2PM" headerText="2:00 PM" width="120" textAlign="Center"></e-column>
          <e-column field="Time3PM" headerText="3:00 PM" width="120" textAlign="Center"></e-column>
          <e-column field="Time4PM" headerText="4:00 PM" width="120" textAlign="Center"></e-column>
          <e-column field="Time5PM" headerText="5:00 PM" width="120" textAlign="Center"></e-column>
          <e-column field="Time6PM" headerText="6:00 PM" width="120" textAlign="Center"></e-column>
          <e-column field="Time7PM" headerText="7:00 PM" width="120" textAlign="Center"></e-column>
        </e-columns>
        <template v-slot:doctorTemplate="{data}">
          <div>
            <div class="doctor-name">{{ data.Name }}</div>
            <div class="doctor-designation">{{ data.Designation }}</div>
            <div v-if="isFullWidthStatus(data.Status)">{{ data.Status }}</div>
          </div>
        </template>
      </ejs-grid>
    </div>
  `,
  data() {
    return {
      data: shiftPlanData,
      textWrapSettings: { wrapMode: "Content" }
    };
  },
  methods: {
    isFullWidthStatus,
    queryCellInfo(args) {
      if (args.column.field === 'Name' && isFullWidthStatus(args.data.Status)) {
        args.colSpan = 12;
        args.cell.classList.add('full-width-row');
      }
    }
  }
});
