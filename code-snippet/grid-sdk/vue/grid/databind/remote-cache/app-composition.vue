<script setup>
import { ref, onMounted, provide } from "vue";
import { GridComponent as EjsGrid, ColumnsDirective as EColumns, ColumnDirective as EColumn, InfiniteScroll, Sort, Filter, Toolbar } from '@syncfusion/ej2-vue-grids';
import { getOrders } from './orderService';

const data = ref([]);
const grid = ref(null);
const requestCount = ref(0);
const infiniteScrollSettings = { enableCache: true, initialBlocks: 3, maxBlocks: 3 };
const pageSettings = { pageSize: 12 };
const sortSettings = { columns: [{ field: 'ProductID', direction: 'Descending' }] };
const toolbar = ['Search'];
const state = { skip: 0, take: 36, sorted: sortSettings.columns };

// triggers only when the requested data is not available in the cache
const dataStateChange = function (state) {
  requestCount.value++;
  getOrders(state).then(gridData => {
    data.value = gridData;
  });
}
onMounted(() => {
  dataStateChange(state);
});

provide('grid', [InfiniteScroll, Sort, Filter, Toolbar]);
</script>

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

<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/grid/index.css";
</style>
