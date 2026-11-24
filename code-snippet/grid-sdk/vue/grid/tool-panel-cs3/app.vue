<template>
  <div id="app">
    <ejs-grid :dataSource='data' height='320px' :enableToolPanel='true' :toolPanelSettings='toolPanelSettings'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' width='140' textAlign='Right'></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width='140'></e-column>
        <e-column field='ShipCity' headerText='Ship City' width='140'></e-column>
        <e-column field='ShipCountry' headerText='Ship Country' width='140'></e-column>
        <e-column field='Freight' headerText='Freight' width='140' textAlign='Right' format='C2'></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script>
import { GridComponent, ColumnsDirective, ColumnDirective, ColumnChooser, SideBar } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

export default {
  name: "App",
  components: {
    'ejs-grid': GridComponent,
    'e-columns': ColumnsDirective,
    'e-column': ColumnDirective
  },
  data() {
    return {
      data: data,
      toolPanelSettings: {
          position: 'Left',
          isOpen: true,
          defaultToolPanel: 'columns',
          toolPanels: [
              {
                  id: 'columns',
                  type: 'Columns',
                  headerText: 'Columns'
              },
              {
                  id: 'summary',
                  type: 'Custom',
                  headerText: 'Summary',
                  iconCss: 'e-icons e-description',
                  template: '#customPanelTemplate'
              }
          ]
      }
    };
  },
  provide: {
    grid: [ColumnChooser, SideBar]
  }
}
</script>
