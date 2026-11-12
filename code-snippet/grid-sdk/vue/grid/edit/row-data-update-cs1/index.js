import Vue from "vue";
import { GridPlugin, Sort, Filter, Page } from "@syncfusion/ej2-vue-grids";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
import { restaurantMenu } from "./datasource.js";

Vue.use(GridPlugin);
Vue.use(ButtonPlugin);

const randomPrice = (price) =>
  Number(Math.min(Math.max(price + (12 * Math.random() - 6), 4), 32).toFixed(2));
const findItem = (id) => restaurantMenu.find((item) => item.ItemID === id);
const priceClass = (price) => {
  price = price == null ? 0 : price;
  if (price > 25) return 'price-premium';
  if (price > 20) return 'price-high';
  if (price > 15) return 'price-mid-high';
  if (price > 10) return 'price-mid';
  return 'price-low';
};
const formatPrice = (price) => (price == null ? 0 : price).toFixed(2);

new Vue({
  el: '#app',
  template: `
  <div id="app">
    <div style="margin: 10px">
      <ejs-button cssClass="e-outline" style="margin-right: 10px" @click.native="updateSingleRow">Update Single Data</ejs-button>
      <ejs-button cssClass="e-outline" @click.native="updateMultipleRows">Update Multiple Data</ejs-button>
    </div>
    <ejs-grid ref="grid" :dataSource="data" :allowSorting="true" :allowFiltering="true" :filterSettings="filterSettings" :allowPaging="true" :pageSettings="pageSettings">
      <e-columns>
        <e-column field="ItemID" headerText="Item ID" width="100" :isPrimaryKey="true"></e-column>
        <e-column field="ItemName" headerText="Dish Name" width="130" clipMode="EllipsisWithTooltip"></e-column>
        <e-column field="Category" headerText="Category" width="120"></e-column>
        <e-column field="Price" headerText="Cost" width="100" format="C2" textAlign="Right" :template="'priceTemplate'"></e-column>
        <e-column field="SpiceLevel" headerText="Spiciness" width="110"></e-column>
        <e-column field="Description" headerText="Description" width="260" clipMode="EllipsisWithTooltip"></e-column>
      </e-columns>
      <template v-slot:priceTemplate="{ data }">
        <div :class="'price-cell ' + priceClass(data.Price)">\${{ formatPrice(data.Price) }}</div>
      </template>
    </ejs-grid>
  </div>
`,
  data() {
    return {
      data: restaurantMenu,
      filterSettings: { type: 'Excel' },
      pageSettings: { pageSize: 8, pageCount: 4 }
    };
  },
  methods: {
    updateSingleRow: function () {
      const item = findItem('ITEM-1002');
      this.$refs.grid.ej2Instances.setRowData('ITEM-1002', { ...item, Price: randomPrice(item.Price), Description: item.Description });
    },
    updateMultipleRows: async function () {
      const gridInstance = this.$refs.grid.ej2Instances;
      const updates = [
        { ...findItem('ITEM-1001'), Price: randomPrice(findItem('ITEM-1001').Price), Description: 'Spicy Paneer Tikka Masala' },
        { ...findItem('ITEM-1002'), Price: randomPrice(findItem('ITEM-1002').Price), Description: 'Caesar Salad' },
        { ...findItem('ITEM-1003'), Price: randomPrice(findItem('ITEM-1003').Price), Description: 'Cheesecake with honey' }
      ];
      for (const row of updates) {
        await gridInstance.setRowDataAsync(row.ItemID, row, 0);
      }
    },
    priceClass,
    formatPrice
  },
  provide: {
    grid: [Sort, Filter, Page]
  }
});
