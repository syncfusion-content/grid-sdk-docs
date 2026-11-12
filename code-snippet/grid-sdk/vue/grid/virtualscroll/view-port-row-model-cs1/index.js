import Vue from "vue";
import { GridPlugin, DomVirtualization, Sort, Filter, Toolbar, Page } from "@syncfusion/ej2-vue-grids";
import { DataManager, UrlAdaptor, Query } from "@syncfusion/ej2-data";

Vue.use(GridPlugin);

const dataManager = new DataManager({
  url: 'https://services.syncfusion.com/js/production/api/UrlDataSource',
  adaptor: new UrlAdaptor()
});
const query = new Query().addParams('dataCount', '100000');
const statusIcon = (s) => ({ Active: '●', Inactive: '○', 'On Leave': '⊘', Retired: '✕' }[s] || '●');
const statusClass = (s) => (s || 'Active').replace(' ', '');
const softValue = (d) => {
  let v = Math.round(Math.min(100, Math.max(0, Number(d.Software == null ? 0 : d.Software))));
  if (d.Trustworthiness === 'Perfect' && v < 70) v = 70;
  else if (d.Trustworthiness === 'Sufficient') v = Math.min(69, Math.max(40, v));
  else if (d.Trustworthiness === 'Insufficient' && v > 39) v = 39;
  return v;
};
const softColor = (d) => {
  const v = softValue(d);
  return v < 40 ? '#dc2626' : v < 70 ? '#f59e0b' : '#059669';
};
const ratingValue = (d) => {
  let r = Math.min(5, Math.max(0, Number(d.Rating == null ? 0 : d.Rating)));
  if (d.Trustworthiness === 'Perfect') r = Math.min(5, Math.max(4, r));
  else if (d.Trustworthiness === 'Sufficient') r = 3;
  else if (d.Trustworthiness === 'Insufficient') r = Math.min(2, Math.max(1, r));
  return r;
};
const ratingColor = (d) => {
  const r = ratingValue(d);
  return r >= 4 ? '#059669' : r >= 3 ? '#f59e0b' : '#dc2626';
};
const ratingText = (d) => ratingValue(d).toFixed(1);
const formatSalary = (v) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(v || 0);

new Vue({
  el: '#app',
  template: `
  <div id="app">
    <ejs-grid ref="grid" :dataSource="dataManager" :query="query" height="440" clipMode="EllipsisWithTooltip" :enableDomVirtualization="true" :domVirtualizationSettings="domVirtualizationSettings" :pageSettings="pageSettings" :enableVirtualMaskRow="true" :allowPaging="true" :allowSorting="true" :allowFiltering="true" :filterSettings="filterSettings" :toolbar="toolbar">
      <e-columns>
        <e-column field="EmployeeID" headerText="Employee ID" width="110" textAlign="Right" clipMode="EllipsisWithTooltip" :isPrimaryKey="true" type="number" :template="'empIdTemplate'"></e-column>
        <e-column field="Employees" headerText="Employee Name" width="160" textAlign="Left" clipMode="EllipsisWithTooltip" :template="'empNameTemplate'"></e-column>
        <e-column field="Designation" headerText="Designation" width="140" textAlign="Left" clipMode="EllipsisWithTooltip" :template="'desigTemplate'"></e-column>
        <e-column field="Mail" headerText="Email" width="190" textAlign="Left" clipMode="EllipsisWithTooltip"></e-column>
        <e-column field="Address" headerText="Address" width="190" textAlign="Left" clipMode="EllipsisWithTooltip"></e-column>
        <e-column field="Location" headerText="Location" width="130" textAlign="Center" clipMode="EllipsisWithTooltip" :template="'locTemplate'"></e-column>
        <e-column field="Status" headerText="Status" width="120" textAlign="Center" clipMode="EllipsisWithTooltip" :template="'statusTemplate'"></e-column>
        <e-column field="Trustworthiness" headerText="Trustworthiness" width="140" textAlign="Center" clipMode="EllipsisWithTooltip" :template="'trustTemplate'"></e-column>
        <e-column field="Software" headerText="Software Skills" width="130" textAlign="Right" clipMode="EllipsisWithTooltip" type="number" :template="'softTemplate'"></e-column>
        <e-column field="Rating" headerText="Performance Rating" width="140" textAlign="Center" clipMode="EllipsisWithTooltip" type="number" :template="'ratingTemplate'"></e-column>
        <e-column field="CurrentSalary" headerText="Current Salary" width="140" textAlign="Right" clipMode="EllipsisWithTooltip" type="number" :template="'salaryTemplate'"></e-column>
      </e-columns>
      <template v-slot:empIdTemplate="{ data }"><span>{{ data.EmployeeID }}</span></template>
      <template v-slot:empNameTemplate="{ data }"><span class="vp-ellipsis">{{ data.Employees }}</span></template>
      <template v-slot:desigTemplate="{ data }"><span class="vp-ellipsis">{{ data.Designation }}</span></template>
      <template v-slot:locTemplate="{ data }"><span class="vp-ellipsis">{{ data.Location }}</span></template>
      <template v-slot:statusTemplate="{ data }">
        <div :class="'vp-badge vp-status-' + statusClass(data.Status)"><span>{{ statusIcon(data.Status) }}</span><span>{{ data.Status }}</span></div>
      </template>
      <template v-slot:trustTemplate="{ data }">
        <div :class="'vp-badge vp-trust-' + data.Trustworthiness">{{ data.Trustworthiness }}</div>
      </template>
      <template v-slot:softTemplate="{ data }">
        <div class="vp-progress">
          <div class="vp-progress-bar"><div :style="{ width: softValue(data) + '%', backgroundColor: softColor(data) }"></div></div>
          <span>{{ softValue(data) }}%</span>
        </div>
      </template>
      <template v-slot:ratingTemplate="{ data }">
        <span :style="{ color: ratingColor(data), fontWeight: 600 }">★ {{ ratingText(data) }}</span>
      </template>
      <template v-slot:salaryTemplate="{ data }"><span class="vp-salary">{{ formatSalary(data.CurrentSalary) }}</span></template>
    </ejs-grid>
  </div>
`,
  data() {
    return {
      dataManager: dataManager,
      query: query,
      domVirtualizationSettings: { rowBuffer: 5 },
      pageSettings: { pageSize: 50 },
      filterSettings: { type: 'CheckBox' },
      toolbar: ['Search']
    };
  },
  methods: {
    statusIcon,
    statusClass,
    softValue,
    softColor,
    ratingText,
    ratingColor,
    formatSalary
  },
  provide: {
    grid: [DomVirtualization, Sort, Filter, Toolbar, Page]
  }
});
