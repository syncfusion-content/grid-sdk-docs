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

<script setup>
import { provide, ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Filter, Page } from "@syncfusion/ej2-vue-grids";
import { CheckBoxComponent as EjsCheckbox } from "@syncfusion/ej2-vue-buttons";
import { DropDownListComponent as EjsDropdownlist } from "@syncfusion/ej2-vue-dropdowns";
import { data } from './datasource.js';

provide('grid', [Page, Filter]);

const grid = ref(null);
const presetModes = ['Default', 'Custom', 'Both'];
let enablePresets = false;
let enableCustomPresets = false;
let presetMode = 'Default';

const customRanges = [
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
];

const filterOptions = {
  type: 'Menu'
};

const orderDateFilter = {
  dateRanges: {
    enablePresets: enablePresets,
    presetMode: presetMode,
    customPresetRanges: enableCustomPresets ? customRanges : []
  }
};

const updateDateRangeSettings = () => {
  const column = grid.value.getColumnByField('OrderDate');
  column.filter = {
    dateRanges: {
      enablePresets: enablePresets,
      presetMode: presetMode,
      customPresetRanges: enableCustomPresets ? customRanges : []
    }
  };
  grid.value.refreshColumns();
};

const onEnablePresetsChange = (args) => {
  enablePresets = args.checked;
  updateDateRangeSettings();
};

const onCustomPresetsChange = (args) => {
  enableCustomPresets = args.checked;
  updateDateRangeSettings();
};

const onPresetModeChange = (args) => {
  presetMode = args.value;
  updateDateRangeSettings();
};
</script>

<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/grid/index.css";
</style>
