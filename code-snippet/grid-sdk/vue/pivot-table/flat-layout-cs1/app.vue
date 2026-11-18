<template>
  <div id="app">
    <ejs-pivotview id="PivotView" :dataSourceSettings="dataSourceSettings" :gridSettings="gridSettings" :flatSettings="flatSettings" :height="height" :width="width"></ejs-pivotview>
  </div>
</template>
<script>
import { PivotViewComponent, FlatLayout } from "@syncfusion/ej2-vue-pivotview";
import { pivotData } from './pivotData.js';

export default {
  name: "App",
  components: { "ejs-pivotview": PivotViewComponent },
  data() {
    return {
      dataSourceSettings: { dataSource: pivotData },
      gridSettings: { layout: 'Flat' },
      flatSettings: {
    columns: [
    { field: 'Country', headerText: 'Country', width: 140 },
    { field: 'Products', headerText: 'Products', width: 160 },
    { field: 'Year', headerText: 'Year', width: 120 },
    { field: 'Sold', headerText: 'Units Sold', width: 120 },
    { field: 'Amount', headerText: 'Sold Amount', width: 140 }
],
    allowSorting: true,
    allowFiltering: true,
    allowPaging: true,
    pageSettings: { pageSize: 10 }
},
      height: '450px',
      width: '100%'
    }
  },
  provide: {
    pivotview: [FlatLayout]
  }
}
</script>
<style>
@import '../node_modules/@syncfusion/ej2-tailwind3-theme/styles/pivotview/index.css';
</style>
