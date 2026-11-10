<template>
  <div>
    <p>Server requests made: {{ requestCount }}</p>
    <ejs-grid ref="grid" :dataSource='data' height='315' :enableInfiniteScrolling='true'
      :infiniteScrollSettings='infiniteScrollSettings' :pageSettings='pageSettings' :allowSorting='true'
      :allowFiltering='true' :sortSettings='sortSettings' :toolbar='toolbar' :dataStateChange="dataStateChange">
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' width='90' textAlign='Right' :isPrimaryKey='true'></e-column>
        <e-column field="CustomerName" headerText="Customer Name" width="100"></e-column>
        <e-column field='ProductID' headerText='Product ID' width=100></e-column>
        <e-column field='ProductName' headerText='Product Name' width=100></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script>
import { GridComponent, ColumnDirective, ColumnsDirective, InfiniteScroll, Sort, Filter, Toolbar } from '@syncfusion/ej2-vue-grids';
import { getOrders } from './orderService';

export default {
  components: {
    'ejs-grid': GridComponent,
    'e-column': ColumnDirective,
    'e-columns': ColumnsDirective
  },
  name: 'App',
  data() {
    return {
      data: [],
      requestCount: 0,
      infiniteScrollSettings: { enableCache: true, initialBlocks: 3, maxBlocks: 3 },
      pageSettings: { pageSize: 12 },
      sortSettings: { columns: [{ field: 'ProductID', direction: 'Descending' }] },
      toolbar: ['Search']
    };
  },
  mounted() {
    this.dataStateChange({ skip: 0, take: 36, sorted: this.sortSettings.columns });
  },
  methods: {
    // triggers only when the requested data is not available in the cache
    dataStateChange(state) {
      this.requestCount++;
      getOrders(state).then(gridData => {
        this.data = gridData;
      });
    },
  },
  provide() {
    return {
      grid: [InfiniteScroll, Sort, Filter, Toolbar]
    };
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/grid/index.css";
</style>
