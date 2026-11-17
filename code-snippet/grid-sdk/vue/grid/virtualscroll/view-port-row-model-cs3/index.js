import Vue from "vue";
import { GridPlugin, DomVirtualization, Sort, Filter, Page, InfiniteScroll } from "@syncfusion/ej2-vue-grids";
import { DataManager, Query, Predicate } from "@syncfusion/ej2-data";
import { chargingStationData } from "./datasource.js";

Vue.use(GridPlugin);

const pageSize = 50;

const buildPredicate = (item) => {
  if (!item.isComplex) {
    return new Predicate(item.field, item.operator, item.value, item.ignoreCase, item.ignoreAccent);
  }
  let result = null;
  for (const sub of item.predicates || []) {
    const p = buildPredicate(sub);
    result = result === null ? p : (item.condition || 'and').toLowerCase() === 'or' ? result.or(p) : result.and(p);
  }
  return result;
};

new Vue({
  el: '#app',
  template: `
  <div id="app">
    <ejs-grid ref="grid" :dataSource="gridData" :dataStateChange="processRequest" height="400" :enableInfiniteScrolling="true" :domVirtualizationSettings="domVirtualizationSettings" :pageSettings="pageSettings" :allowSorting="true" :allowFiltering="true" :filterSettings="filterSettings">
      <e-columns>
        <e-column field="StationID" headerText="Station ID" width="120" :isPrimaryKey="true"></e-column>
        <e-column field="City" headerText="Station Location" width="160"></e-column>
        <e-column field="ChargingSpeed" headerText="Charging Speed" width="160"></e-column>
        <e-column field="ActiveSessions" headerText="Active Slots" textAlign="Right" width="130"></e-column>
        <e-column field="AvailableSlots" headerText="Available Slots" textAlign="Right" width="150"></e-column>
        <e-column field="LastMaintenanceDate" headerText="Maintenance Date" textAlign="Right" type="date" format="dd/MM/yyyy" width="170" :allowFiltering="false"></e-column>
        <e-column field="Revenue" headerText="Revenue" textAlign="Right" format="C2" width="110"></e-column>
      </e-columns>
    </ejs-grid>
  </div>
`,
  data() {
    return {
      domVirtualizationSettings: { rowBuffer: 5 },
      pageSettings: { pageSize },
      filterSettings: { type: 'CheckBox' },
      gridData: { result: chargingStationData.slice(0, pageSize), count: chargingStationData.length }
    };
  },
  methods: {
    processRequest: function (state) {
      // Simulates a server: applies filter, sort, and paging on the local dataset
      // and returns only the rows requested by the viewport.
      const request = state;
      const manager = new DataManager(chargingStationData);
      const requestType = request.action && request.action.requestType;
      if (request.dataSource && ['filterchoicerequest', 'filterSearchBegin', 'stringfilterrequest'].indexOf(requestType) !== -1) {
        if (request.action.query) {
          manager.executeQuery(request.action.query).then((e) => {
            request.dataSource(e.result);
          });
        } else {
          const field = request.action.field;
          const seenValues = {};
          const choices = [];
          chargingStationData.forEach((item) => {
            const value = item[field];
            const key = value instanceof Date ? `date:${value.getTime()}` : `${typeof value}:${value}`;
            if (!seenValues[key]) {
              seenValues[key] = true;
              choices.push({ [field]: value });
            }
          });
          request.dataSource(choices);
        }
        return;
      }
      const query = new Query();
      if (request.where && request.where.length) {
        query.where(buildPredicate(request.where[0]));
      }
      if (request.sorted && request.sorted.length) {
        request.sorted.forEach((s) => query.sortBy(s.name, s.direction));
      }
      const skip = request.skip || 0;
      const take = request.take || pageSize;
      query.page(Math.floor(skip / take) + 1, take).requiresCount();
      manager.executeQuery(query).then((e) => {
        this.gridData = { result: e.result, count: e.count };
      });
    }
  },
  provide: {
    grid: [DomVirtualization, Sort, Filter, Page, InfiniteScroll]
  }
});
