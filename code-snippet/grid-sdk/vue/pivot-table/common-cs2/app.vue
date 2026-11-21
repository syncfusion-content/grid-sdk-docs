<template>
  <div id="app">
    <ejs-pivotview :dataSourceSettings="dataSourceSettings" :height="height"> </ejs-pivotview>
  </div>
</template>
<script>
import { PivotViewComponent } from "@syncfusion/ej2-vue-pivotview";

export default {
  name: "App",
  components: {
    "ejs-pivotview": PivotViewComponent
  },
  data() {
    return {
      dataSourceSettings: {
        url: "https://bi.syncfusion.com/productservice/api/sales",
        type: "CSV",
        delimiter: ",",
        enableQuotedLineBreaks: true,
        expandAll: false,
        enableSorting: true,
        formatSettings: [
          { name: "Total Revenue", format: "C0" },
          { name: "Total Profit", format: "C0" }
        ],
        rows: [{ name: "Region" }, { name: "Country" }],
        columns: [{ name: "Item Type" }, { name: "Sales Channel" }],
        values: [
          { name: "Total Revenue" },
          { name: "Total Profit" }
        ]
      },
      height: 350
    }
  }
}
</script>
<style>
@import '../node_modules/@syncfusion/ej2-tailwind3-theme/styles/pivotview/index.css';
</style>