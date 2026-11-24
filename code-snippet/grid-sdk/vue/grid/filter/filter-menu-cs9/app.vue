<template>
  <div id="app">
    <div style="padding: 10px 0px">
      <ejs-checkbox label="Enable Presets" :checked="false" :change="onEnablePresetsChange"></ejs-checkbox>
      <span style="margin-left: 10px">
        <ejs-checkbox label="Enable Custom Presets" :checked="false" :change="onCustomPresetsChange"></ejs-checkbox>
      </span>
      <span style="margin-left: 10px">
        <ejs-dropdownlist :dataSource="presetModes" value="Default" width="180px" placeholder="Preset Mode" :change="onPresetModeChange"></ejs-dropdownlist>
      </span>
    </div>
    <ejs-grid ref="grid" :dataSource='data' :allowPaging='true' :allowFiltering='true' :filterSettings='filterOptions'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width='120'></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width='150'></e-column>
        <e-column field='OrderDate' headerText='Order Date' width='150' type='date' format='yMd' :filter='orderDateFilter'></e-column>
        <e-column field='Freight' headerText='Freight' width='120' format='C2' textAlign='Right'></e-column>
        <e-column field='ShipCountry' headerText='Ship Country' width='150'></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>

<script>
import { GridComponent, ColumnsDirective, ColumnDirective, Filter, Page } from "@syncfusion/ej2-vue-grids";
import { CheckBoxComponent } from "@syncfusion/ej2-vue-buttons";
import { DropDownListComponent } from "@syncfusion/ej2-vue-dropdowns";
import { data } from './datasource.js';

export default {
  name: "App",
  components: {
    "ejs-grid": GridComponent,
    "e-columns": ColumnsDirective,
    "e-column": ColumnDirective,
    "ejs-checkbox": CheckBoxComponent,
    "ejs-dropdownlist": DropDownListComponent
  },
  data() {
    return {
      data: data,
      presetModes: ['Default', 'Custom', 'Both'],
      enablePresets: false,
      enableCustomPresets: false,
      presetMode: 'Default',
      customRanges: [
        {
          label: 'Yesterday',
          start: new Date(new Date().setDate(new Date().getDate() - 1)),
          end: new Date(new Date().setDate(new Date().getDate() - 1))
        },
        {
          label: 'Today',
          start: new Date(),
          end: new Date()
        },
        {
          label: 'Last 5 Days',
          start: new Date(new Date().setDate(new Date().getDate() - 4)),
          end: new Date()
        },
        {
          label: 'Next 5 Days',
          start: new Date(),
          end: new Date(new Date().setDate(new Date().getDate() + 4))
        }
      ],
      filterOptions: {
        type: 'Menu'
      }
    };
  },
  computed: {
    orderDateFilter() {
      return {
        dateRanges: {
          enablePresets: this.enablePresets,
          presetMode: this.presetMode,
          customPresetRanges: this.enableCustomPresets ? this.customRanges : []
        }
      };
    }
  },
  methods: {
    updateDateRangeSettings() {
      const column = this.$refs.grid.getColumnByField('OrderDate');
      column.filter = {
        dateRanges: {
          enablePresets: this.enablePresets,
          presetMode: this.presetMode,
          customPresetRanges: this.enableCustomPresets ? this.customRanges : []
        }
      };
      this.$refs.grid.refreshColumns();
    },
    onEnablePresetsChange(args) {
      this.enablePresets = args.checked;
      this.updateDateRangeSettings();
    },
    onCustomPresetsChange(args) {
      this.enableCustomPresets = args.checked;
      this.updateDateRangeSettings();
    },
    onPresetModeChange(args) {
      this.presetMode = args.value;
      this.updateDateRangeSettings();
    }
  },
  provide: {
    grid: [Page, Filter]
  }
}
</script>

<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/grid/index.css";
</style>
