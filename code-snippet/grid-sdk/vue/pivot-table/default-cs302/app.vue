<template>
  <div id="app">
    <ejs-button id="export-btn" :isPrimary="isPrimary" v-on:click="btnClick">HTML Export</ejs-button>
    <ejs-pivotview id="pivotview" :height="height" :dataSourceSettings="dataSourceSettings"
      :allowHtmlExport="allowHtmlExport"> </ejs-pivotview>
  </div>
</template>
<script>
import { PivotViewComponent, HtmlExport } from "@syncfusion/ej2-vue-pivotview";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
import { pivotData } from './pivotData.js';

export default {
  name: "App",
  components: {
    "ejs-button": ButtonComponent,
    "ejs-pivotview": PivotViewComponent
  },
  data() {
    return {
      dataSourceSettings: {
        dataSource: pivotData,
        expandAll: false,
        drilledMembers: [{ name: 'Country', items: ['France'] }],
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        filters: []
      },
      height: 320,
      allowHtmlExport: true,
      isPrimary: true
    }
  },
  provide: {
    pivotview: [HtmlExport]
  },
  methods: {
    btnClick: function () {
      let pivotGridObj = document.getElementById('pivotview').ej2_instances[0];
      let htmlExportProperties = { fileName: 'PivotTable.html', title: 'Sales Analysis Report', includeStyles: true };
      pivotGridObj.exportToHTML(htmlExportProperties);
    }
  }
}
</script>
<style>
@import '../node_modules/@syncfusion/ej2-tailwind3-theme/styles/pivotview/index.css';
</style>