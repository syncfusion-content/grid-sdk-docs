import { DataManager, Query } from "@syncfusion/ej2-data";

const baseUrl = "http://localhost:xxxx/orders"; // Here xxxx denotes the port number.
// Apply sorting
const applySorting = (query, sorted) => {
  if (sorted && sorted.length > 0) {
    sorted.forEach(sort => {
      const sortField = sort.name || sort.field;
      query.sortBy(sortField, sort.direction);
    });
  }
}
// Apply paging
const applyPaging = (query, state) => {
  if (state.take && state.skip) {
    query.page(state.skip / state.take + 1, state.take);
  }
  else if (state.skip === 0 && state.take) {
    query.page(1, state.take);
  }
}
export function getOrders(state) {
  const query = new Query();
  if (state.sorted) {
    applySorting(query, state.sorted);
  }
  applyPaging(query, state);
  query.isCountRequired = true;
  return fetch(baseUrl)
    .then(res => res.json())
    .then(data => {
      const result = new DataManager(data.result).executeLocal(query);
      return { result: result, count: result.count };
    });
}
