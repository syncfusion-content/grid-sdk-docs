<template>
  <div id="app">
    <div style="display: flex; gap: 20px; margin: 5px; align-items: center">
      <ejs-button cssClass="e-outline" @click="normalUpdate">Normal update</ejs-button>
      <span style="font-weight: bold; color: #555">{{ syncTime }}</span>
      <ejs-button cssClass="e-outline" @click="asyncUpdate">Async update</ejs-button>
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
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path :d="isUp(data) ? 'M12 4l-8 8h6v8h4v-8h6z' : 'M12 20l8-8h-6V4h-4v8H4z'" />
            </svg>${{ money(data.Revenue) }}
          </span>
          <span class="rowcell-right">Prev: ${{ money(getPrevious(data)) }}</span>
        </div>
      </template>
    </ejs-grid>
  </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, VirtualScroll } from "@syncfusion/ej2-vue-grids";
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";
import { chargingStationData } from "./datasource.js";
const previousRevenue = new Map();
const increaseRevenue = (stations, amount) => {
  const updates = new Map();

  stations.forEach((station) => {
    const previous = station.Revenue;
    const revenue = Number((previous + amount).toFixed(2));
    previousRevenue.set(station.StationID, previous);
    station.Revenue = revenue;
    updates.set(station.StationID, revenue);
  });

  return updates;
};
const getPrevious = (d) => {
  const prev = previousRevenue.get(d.StationID);
  return prev == null ? (d.Revenue == null ? 0 : d.Revenue) : prev;
};
const isUp = (d) => (d.Revenue == null ? 0 : d.Revenue) - getPrevious(d) >= 0;
const money = (v) => (v == null ? 0 : v).toFixed(2);
const grid = ref(null);
const data = chargingStationData;
const syncTime = ref('');
const asyncTime = ref('');
const normalUpdate = () => {
  const gridInstance = grid.value.ej2Instances;
  const start = performance.now();
  const visibleStations = gridInstance.getCurrentViewRecords();
  const updates = increaseRevenue(chargingStationData, 10);
  setTimeout(() => {
    visibleStations.forEach((station) => {
      gridInstance.setCellValue(station.StationID, 'Revenue', updates.get(station.StationID));
    });
    syncTime.value = `Sync Update took ${(performance.now() - start).toFixed(2)} ms`;
  });
};
const asyncUpdate = async () => {
  const gridInstance = grid.value.ej2Instances;
  const start = performance.now();
  const visibleStations = gridInstance.getCurrentViewRecords();
  const updates = increaseRevenue(chargingStationData, 10);
  await Promise.all(visibleStations.map((station) =>
    gridInstance.setCellValueAsync(station.StationID, 'Revenue', updates.get(station.StationID), 0)
  ));
  asyncTime.value = `Async Update took ${(performance.now() - start).toFixed(2)} ms`;
};
provide('grid', [VirtualScroll]);
</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/grid/index.css";
.revenue-cell {  align-items: center; display: inline-flex; gap: 4px; }
.above-0 { color: #00a653; }
.below-0 { color: #ff3740; }
.rowcell-left { align-items: center; font-weight: 700; }
.rowcell-right { color: #ff3740; font-size: .8em; }
</style>
