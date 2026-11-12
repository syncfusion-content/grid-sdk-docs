<template>
  <div id="app">
    <div style="display: flex; gap: 20px; margin: 5px; align-items: center">
      <ejs-button cssClass="e-outline" @click.native="normalUpdate">Normal update</ejs-button>
      <span style="font-weight: bold; color: #555">{{ syncTime }}</span>
      <ejs-button cssClass="e-outline" @click.native="asyncUpdate">Async update</ejs-button>
      <span style="font-weight: bold; color: #555">{{ asyncTime }}</span>
    </div>
    <ejs-grid ref="grid" :dataSource="data" height="480" :enableVirtualization="true">
      <e-columns>
        <e-column field="StationID" headerText="Station ID" :isPrimaryKey="true" width="120"></e-column>
        <e-column field="City" headerText="Station Location" width="160"></e-column>
        <e-column field="ChargingSpeed" headerText="Charging Speed" width="160"></e-column>
        <e-column field="ActiveSessions" headerText="Active Slots" textAlign="Right" width="130"></e-column>
        <e-column field="AvailableSlots" headerText="Available Slots" textAlign="Right" width="150"></e-column>
        <e-column field="Revenue" headerText="Revenue" textAlign="Center" :template="'revenueTemplate'" format="C2" width="180"></e-column>
        <e-column field="LastMaintenanceDate" headerText="Maintenance Date" textAlign="Right" type="date" format="dd/MM/yyyy" width="140"></e-column>
      </e-columns>
      <template v-slot:revenueTemplate="{ data }">
        <div :class="'revenue-cell ' + (isUp(data) ? 'above-0' : 'below-0')">
          <span class="rowcell-left">
            <svg width="12" height="12" viewBox="0 0 24 24" :fill="isUp(data) ? 'green' : 'red'">
              <path :d="isUp(data) ? 'M12 4l-8 8h6v8h4v-8h6z' : 'M12 20l8-8h-6V4h-4v8H4z'" />
            </svg>${{ money(data.Revenue) }}
          </span>
          <span class="rowcell-right">Prev: ${{ money(getPrevious(data)) }}</span>
        </div>
      </template>
    </ejs-grid>
  </div>
</template>
<script>
import { GridComponent, ColumnsDirective, ColumnDirective, VirtualScroll } from "@syncfusion/ej2-vue-grids";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
import { chargingStationData } from "./datasource.js";
const previousRevenue = new Map();
const getPrevious = (d) => {
  const prev = previousRevenue.get(d.StationID);
  return prev == null ? (d.Revenue == null ? 0 : d.Revenue) : prev;
};
const isUp = (d) => (d.Revenue == null ? 0 : d.Revenue) - getPrevious(d) >= 0;
const money = (v) => (v == null ? 0 : v).toFixed(2);

export default {
name: "App",
components: {
  "ejs-grid": GridComponent,
  "e-columns": ColumnsDirective,
  "e-column": ColumnDirective,
  "ejs-button": ButtonComponent
},
  data() {
    return {
      data: chargingStationData,
      syncTime: '',
      asyncTime: ''
    };
  },
  methods: {
    increaseRevenue: function (stations, amount) {
      const updates = new Map();
      stations.forEach((station) => {
        const previous = station.Revenue;
        const revenue = Number((previous + amount).toFixed(2));
        previousRevenue.set(station.StationID, previous);
        station.Revenue = revenue;
        updates.set(station.StationID, revenue);
      });
      return updates;
    },
    normalUpdate: function () {
      const gridInstance = this.$refs.grid.ej2Instances;
      const start = performance.now();
      const visibleStations = gridInstance.getCurrentViewRecords();
      const updates = this.increaseRevenue(chargingStationData, 10);
      setTimeout(() => {
        visibleStations.forEach((station) => {
          gridInstance.setCellValue(station.StationID, 'Revenue', updates.get(station.StationID));
        });
        this.syncTime = `Sync Update took ${(performance.now() - start).toFixed(2)} ms`;
      });
    },
    asyncUpdate: async function () {
      const gridInstance = this.$refs.grid.ej2Instances;
      const start = performance.now();
      const visibleStations = gridInstance.getCurrentViewRecords();
      const updates = this.increaseRevenue(chargingStationData, 10);
      await Promise.all(visibleStations.map((station) =>
        gridInstance.setCellValueAsync(station.StationID, 'Revenue', updates.get(station.StationID), 0)
      ));
      this.asyncTime = `Async Update took ${(performance.now() - start).toFixed(2)} ms`;
    },
    getPrevious,
    isUp,
    money
  },
  provide: {
    grid: [VirtualScroll]
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/grid/index.css";
.revenue-cell {  align-items: center; display: inline-flex; gap: 4px; }
.above-0 { color: #00a653; }
.below-0 { color: #ff3740; }
.rowcell-left { align-items: center; font-weight: 700; }
.rowcell-right { color: #ff3740; font-size: .8em; }
</style>
