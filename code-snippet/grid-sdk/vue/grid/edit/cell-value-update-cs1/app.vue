<template>
  <div id="app">
    <div style="margin: 10px">
      <ejs-button cssClass="e-outline" style="margin-right: 10px" @click.native="updateOneCell">Update One Cell</ejs-button>
      <ejs-button cssClass="e-outline" @click.native="updateMultipleCells">Update Multiple Cells</ejs-button>
    </div>
    <ejs-grid ref="grid" :dataSource="data" :allowSorting="true" :allowFiltering="true" :filterSettings="filterSettings" :allowPaging="true" :pageSettings="pageSettings">
      <e-columns>
        <e-column field="TaskNumber" headerText="Task ID" textAlign="Right" width="100" :isPrimaryKey="true"></e-column>
        <e-column field="TaskName" headerText="Title" width="130" clipMode="EllipsisWithTooltip"></e-column>
        <e-column field="AssignedTo" headerText="Assignee" width="110" clipMode="EllipsisWithTooltip"></e-column>
        <e-column field="Priority" headerText="Priority" width="100"></e-column>
        <e-column field="Progress" headerText="Progress" textAlign="Right" :template="'progressTemplate'" format="P" width="110"></e-column>
        <e-column field="Status" headerText="State" width="110"></e-column>
        <e-column field="Department" headerText="Department" width="130" clipMode="EllipsisWithTooltip"></e-column>
        <e-column field="AssignedDate" headerText="Assigned Date" width="130" type="date" format="yMd" textAlign="Right"></e-column>
        <e-column field="Deadline" headerText="Deadline" width="120" type="date" format="yMd" textAlign="Right"></e-column>
      </e-columns>
      <template v-slot:progressTemplate="{ data }">
        <div :class="'progress-cell ' + progressClass(data.Progress)">{{ progressText(data.Progress) }}</div>
      </template>
    </ejs-grid>
  </div>
</template>
<script>
import { GridComponent, ColumnsDirective, ColumnDirective, Sort, Filter, Page } from "@syncfusion/ej2-vue-grids";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
import { tasksData } from "./datasource.js";
const progressValue = (p) => (p == null ? 0 : p);
const progressClass = (p) => {
  p = progressValue(p);
  if (p >= 0.9) return 'progress-excellent';
  if (p >= 0.75) return 'progress-high';
  if (p >= 0.5) return 'progress-medium';
  if (p >= 0.25) return 'progress-low';
  return 'progress-very-low';
};
const progressText = (p) => (progressValue(p) * 100).toFixed(0) + '%';

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
      data: tasksData,
      filterSettings: { type: 'Excel' },
      pageSettings: { pageSize: 8, pageCount: 4 }
    };
  },
  methods: {
    updateOneCell: function () {
      this.$refs.grid.ej2Instances.setCellValue(tasksData[2].TaskNumber, 'Progress', Math.random());
    },
    updateMultipleCells: async function () {
      const gridInstance = this.$refs.grid.ej2Instances;
      const updates = [0, 1, 3].map((index) => ({
        key: tasksData[index].TaskNumber,
        field: 'Progress',
        value: Math.random()
      }));
      for (const update of updates) {
        await gridInstance.setCellValueAsync(update.key, update.field, update.value, 0);
      }
    },
    progressClass,
    progressText
  },
  provide: {
    grid: [Sort, Filter, Page]
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/grid/index.css";
.progress-cell { text-align: right; padding-right: 8px; font-weight: 600; }
.progress-very-low { color: #991b1b; }
.progress-low { color: #ef4444; }
.progress-medium { color: #f59e0b; }
.progress-high { color: #22c55e; }
.progress-excellent { color: #0ea5e9; }
</style>
