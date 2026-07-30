export class OrderService {
}
export {};
const baseUrl = "http://localhost:xxxx/orders"; // Here xxxx denotes the port number.
let gridData; 
// Apply paging
const applyPaging = (query, state)=> {
  // Check if both 'take' and 'skip' values are available
  if (state.take && state.skip) {
    // Calculate pageSkip and pageTake values to get pageIndex and pageSize
    const pageSkip = state.skip / state.take + 1;
    const pageTake = state.take;
    query.page(pageSkip, pageTake);
  }
  // If if only 'take' is available and 'skip' is 0, apply paging for the first page.
  else if (state.skip === 0 && state.take) {
    query.page(1, state.take);
  }
}
export function getOrders(state, action) {
  const query = new ej.data.Query();
  // page
  applyPaging(query, state)
  query.isCountRequired = true
  query.addParams('Syncfusion_Grid', 'true');

  // Request the data from server using fetch
  return fetch(baseUrl)
    .then(res => res.json())
    .then(data => {      
      // Create a DataManager instance with your fetched data
      gridData = new ej.data.DataManager(data.result);
      // Execute local data operations using the provided query
      const result = gridData.executeLocal(query);
      // Return the result along with the count of total records
      return {
        result: result, // Result of the data
        count: result.count // Total record count based on fetched data length
      };
    });
}
