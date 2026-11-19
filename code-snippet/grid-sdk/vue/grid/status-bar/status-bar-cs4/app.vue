<template>
  <div id="app">
    <ejs-grid :dataSource="data" :allowFiltering="true" :filterSettings="filterSettings"
      :allowSorting="true" :enableStatusBar="true" :statusBarSettings="statusBarSettings" height="320px">
      <e-columns>
        <e-column field="ProductID" headerText="Product ID" width="120" textAlign="Right" :isPrimaryKey="true"></e-column>
        <e-column field="ProductName" headerText="Product Name" width="160"></e-column>
        <e-column field="Category" headerText="Category" width="140"></e-column>
        <e-column field="PurchasePrice" headerText="Purchase Price" width="140" format="C2" textAlign="Right"></e-column>
        <e-column field="SellingPrice" headerText="Selling Price" width="140" format="C2" textAlign="Right"></e-column>
        <e-column field="AvailableStock" headerText="Available Stock" width="150" textAlign="Right"></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script>
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Filter,
  Sort,
  StatusBar
} from "@syncfusion/ej2-vue-grids";
import { data as products } from "./datasource.js";

export default {
  name: "App",
  components: {
    "ejs-grid": GridComponent,
    "e-columns": ColumnsDirective,
    "e-column": ColumnDirective
  },
  data() {
    return {
      data: products,
      filterSettings: { type: "Excel" },
      statusBarSettings: {
        items: [
          {
            key: "custom",
            type: "Custom",
            position: "Right",
            statusPanelParams: {
              template: (context) => {
                const panel = document.createElement("div");
                panel.textContent = "Total Revenue: " + context.totalCount;
                return panel;
              }
            }
          }
        ]
      }
    };
  },
  provide: {
    grid: [Filter, Sort, StatusBar]
  }
};
</script>
