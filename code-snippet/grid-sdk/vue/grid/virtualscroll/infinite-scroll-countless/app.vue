<template>
    <div id="app">
        <ejs-grid :dataSource='data' height=300 :enableInfiniteScrolling='true' :pageSettings='pageSettings' :infiniteScrollSettings='infiniteScrollSettings'>
            <e-columns>
                <e-column field='EmployeeID' headerText='Employee ID' textAlign='Right' width=100></e-column>
                <e-column field='Employees' headerText='Employee Name' width=120></e-column>
                <e-column field='Designation' headerText='Designation' width=100></e-column>
                <e-column field='Location' headerText='Location' width=100></e-column>
                <e-column field='CurrentSalary' headerText='Salary' format='C2' textAlign='Right' width=100></e-column>
            </e-columns>
        </ejs-grid>
    </div>
</template>
<script>
import { GridComponent, ColumnsDirective, ColumnDirective, InfiniteScroll } from "@syncfusion/ej2-vue-grids";
import { DataManager, UrlAdaptor } from "@syncfusion/ej2-data";

export default {
  name: "App",
  components: {
    "ejs-grid": GridComponent,
    "e-columns": ColumnsDirective,
    "e-column": ColumnDirective
  },
  data() {
    return {
      data: new DataManager({
        url: 'https://services.syncfusion.com/js/production/api/UrlDataSource',
        adaptor: new UrlAdaptor()
      }),
      pageSettings: { pageSize: 50 },
      infiniteScrollSettings: { enableCountLessMode: true }
    };
  },
  provide: {
    grid: [InfiniteScroll]
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/grid/index.css";
</style>
