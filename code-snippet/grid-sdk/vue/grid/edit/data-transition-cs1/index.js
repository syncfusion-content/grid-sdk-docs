import Vue from "vue";
import { GridPlugin, Sort, Filter, Page, Edit } from "@syncfusion/ej2-vue-grids";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
import { productSalesDetails } from "./datasource.js";

Vue.use(GridPlugin);
Vue.use(ButtonPlugin);

const randomId = () => `S-${Math.floor(1000 * Math.random())}`;

new Vue({
  el: '#app',
  template: `
  <div id="app">
    <div style="display: flex; gap: 10px; flex-wrap: wrap; margin: 5px">
      <ejs-button cssClass="e-outline" @click.native="addRecord">Add Record</ejs-button>
      <ejs-button cssClass="e-outline" @click.native="deleteRecord">Delete Selected Record</ejs-button>
      <ejs-button cssClass="e-outline" @click.native="addRecordAsync">Add Record (Async)</ejs-button>
      <ejs-button cssClass="e-outline" @click.native="updateRecordAsync">Update Record (Async)</ejs-button>
      <ejs-button cssClass="e-outline" @click.native="deleteRecordAsync">Delete Selected Record (Async)</ejs-button>
    </div>
    <ejs-grid ref="grid" :dataSource="data" :allowSorting="true" :allowFiltering="true" :filterSettings="filterSettings" :allowPaging="true" :pageSettings="pageSettings" :editSettings="editSettings">
      <e-columns>
        <e-column field="SaleID" headerText="Sale ID" width="100" :isPrimaryKey="true" textAlign="Right"></e-column>
        <e-column field="ProductName" headerText="Product Name" width="120"></e-column>
        <e-column field="Category" headerText="Category" clipMode="EllipsisWithTooltip" width="100"></e-column>
        <e-column field="SalesPerson" headerText="Sales Person" width="110"></e-column>
        <e-column field="UnitsSold" headerText="Units Sold" width="100" textAlign="Right"></e-column>
        <e-column field="UnitPrice" headerText="Unit Price" format="C2" width="110" textAlign="Right"></e-column>
        <e-column field="TotalRevenue" headerText="Revenue" format="C2" width="110" textAlign="Right"></e-column>
      </e-columns>
    </ejs-grid>
  </div>
`,
  data() {
    return {
      data: productSalesDetails,
      filterSettings: { type: 'Excel' },
      pageSettings: { pageSize: 8, pageCount: 4 },
      editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true }
    };
  },
  methods: {
    addRecord: function () {
      this.$refs.grid.ej2Instances.addRecord({
        SaleID: randomId(), ProductName: 'Smart Lamp', UnitsSold: Math.floor(20 * Math.random()) + 1,
        UnitPrice: 120.5, TotalRevenue: 2410, IsDiscounted: false, Category: 'Home Tech', Region: 'Central', SalesPerson: 'Bob'
      });
    },
    deleteRecord: function () {
      this.$refs.grid.ej2Instances.deleteRecord();
    },
    addRecordAsync: async function () {
      const gridInstance = this.$refs.grid.ej2Instances;
      const records = [
        { SaleID: randomId(), ProductName: 'Smart Watch', UnitsSold: 12, UnitPrice: 250, TotalRevenue: 3000, IsDiscounted: false, Category: 'Wearables', Region: 'East', SalesPerson: 'Julia' },
        { SaleID: randomId(), ProductName: 'Gaming Laptop', UnitsSold: 6, UnitPrice: 1200, TotalRevenue: 7200, IsDiscounted: true, Category: 'Electronics', Region: 'West', SalesPerson: 'Charlie' }
      ];
      await Promise.all(records.map((record) => gridInstance.addRecordAsync(record)));
    },
    updateRecordAsync: async function () {
      const gridInstance = this.$refs.grid.ej2Instances;
      const row = gridInstance.getCurrentViewRecords()[1];
      await gridInstance.updateRowAsync(1, {
        SaleID: row.SaleID,
        ProductName: 'Phone Pro',
        UnitsSold: Math.floor(5 * Math.random()) + 1,
        UnitPrice: Math.floor(1000 * Math.random()) + 500
      });
    },
    deleteRecordAsync: async function () {
      await this.$refs.grid.ej2Instances.deleteRecordAsync();
    }
  },
  provide: {
    grid: [Sort, Filter, Page, Edit]
  }
});
