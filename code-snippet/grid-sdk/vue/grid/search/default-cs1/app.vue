<template>
    <div id="app">
        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
            <label for="searchMode">Search Mode</label>
            <ejs-dropdownlist id="searchMode" :dataSource="searchModes" :fields="ddlFields" value="OnEnter" @change="searchModeChange"></ejs-dropdownlist>
        </div>
        <div style='height:350px;'>
            <ejs-grid ref='grid' :dataSource='data' :searchSettings='searchSettings' :toolbar='toolbarOptions' enableStickyHeader=true>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=100></e-column>
                </e-columns>
            </ejs-grid>
        </div>
    </div>
</template>
<script>

import { GridComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-vue-grids";
import { DropDownListComponent } from "@syncfusion/ej2-vue-dropdowns";
import { data } from './datasource.js'
export default {
name: "App",
components: {
"ejs-grid":GridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective,
"ejs-dropdownlist": DropDownListComponent
},
  data() {
    return {
      data: data,
      toolbarOptions: ['Search'],
      searchModes: [
        { text: 'OnEnter', value: 'OnEnter' },
        { text: 'Immediate', value: 'Immediate' }
      ],
      ddlFields: { text: 'text', value: 'value' },
      searchSettings: { mode: 'OnEnter' }
    };
  },
  methods: {
    searchModeChange(args) {
      const mode = args.value;
      this.searchSettings = mode === 'Immediate' ? { mode, immediateModeDelay: 1500 } : { mode };
    }
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/grid/index.css";
</style>