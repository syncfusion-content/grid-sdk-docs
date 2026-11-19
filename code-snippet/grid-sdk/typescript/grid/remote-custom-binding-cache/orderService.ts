import { DataManager, Query,Predicate } from "@syncfusion/ej2-data";

export class OrderService {
}
export {};
const baseUrl = "http://localhost:xxxx/orders"; // Here xxxx denotes the port number.
let gridData:DataManager; 

interface sortInfo {
  name: string
  field:string
  direction: string
}

interface FilterColumn {
  field: string;
  operator: string;
  value: any;
}

interface Filter {
  columns?: FilterColumn[]; 
  length: number;
  [index: number]: {
    fn: string;
    e: string | Predicate;
  };
}

interface Search {
  length: number;
  fields: string[];
  key: string;
  operator?: string;
  ignoreCase?: boolean;
}

// Apply filtering
const applyFiltering = (query:Query, filter:Filter)=> {
  // Check if filter columns are specified
    if (filter.columns && filter.columns.length) {
      // Apply filtering for each specified column
      for (let i = 0; i < filter.columns.length; i++) {
        const field = filter.columns[i].field;
        const operator = filter.columns[i].operator;
        const value = filter.columns[i].value;
        query.where(field, operator, value);
      }
    }
    else {
      // Apply filtering based on direct filter conditions
      for (let i = 0; i < filter.length; i++) {
        const { fn, e } = filter[i];
        if (fn === 'onWhere') {
          query.where(e as string);
        }
      }
    }
  }
// Apply searching 
const applySearching = (query:Query, search:Search[])=> {
  // Check if a search operation is requested
  if (search && search.length > 0) {
    // Extract the search key and fields from the search array
    const { fields, key } = search[0];
    // perform search operation using the field and key on the query
    query.search(key, fields);
  }
}
// Apply sorting
const applySorting = (query:Query, sorted:sortInfo[]) =>{
  // Check if sorting data is available
  if (sorted && sorted.length > 0) {
    // Iterate through each sorting info
    sorted.forEach((sort) => {
      // Get the sort field name either by name or field
      const sortField = sort.name || sort.field;
      // Perform sort operation using the query based on the field name and direction
      query.sortBy(sortField, sort.direction);
    });
  }
}
// Apply grouping
const applyGrouping = (query:Query, group:string[]) =>{
  // Check if sorting data is available
  if (group.length > 0) {
    // Iterate through each group info
    group.forEach((column: string) => {
      // perform group operation using the column on the query
      query.group(column);
    });
  }
}
// Apply lazy load grouping
const applyLazyLoad = (query:Query, payload:any) => {
  // Configure lazy loading for the main data
  if (payload.isLazyLoad) {
    query.lazyLoad.push({ key: 'isLazyLoad', value: true });
    // If on-demand group loading is enabled, configure lazy loading for grouped data
    if (payload.onDemandGroupInfo) {
      query.lazyLoad.push({
          key: 'onDemandGroupInfo',
          value: payload.action.lazyLoadQuery,
      });
    }
  }
}
// Apply paging
const applyPaging = (query:Query, state: { take: number; skip: number; })=> {
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
export function getOrders(state:any, action:any) {
  const query = new Query();
  // filter
  if (state.where) {
    applyFiltering(query, action.queries);
  }
  // search
  if (state.search) {
    applySearching(query, state.search);
  };
  // sort
  if (state.sorted) {
    state.sorted.length ? applySorting(query, state.sorted) :
      // initial sorting
      state.sorted.columns.length ? applySorting(query, state.sorted.columns) : null
  }
  // grouping
  if (state.group) {
    state.group.length ? applyGrouping(query, state.group) :
      // initial grouping
      state.group.columns.length ? applyGrouping(query, state.group.columns) : null
  }
  // lazy load grouping
  if (state.group) {
    if (state.isLazyLoad) {
      applyLazyLoad(query, state)
    }
    if (state.group.enableLazyLoading) {
      query.lazyLoad.push({ key: 'isLazyLoad', value: true })
    }
  }
  // page
  applyPaging(query, state)
  query.isCountRequired = true

  return fetch(baseUrl)
    .then(res => res.json())
    .then(data => {      
      // Create a DataManager instance with your fetched data
      gridData = new DataManager(data.result);

      // Execute local data operations using the provided query
      const result = gridData.executeLocal(query);

      // Return the result along with the count of total records
      return {
        result: result, // Result of the data
        count: (result as any).count // Total record count based on fetched data length
      };
    });
}
// add
export function addRecord(order: Object | Object[] | undefined) {
  return fetch(baseUrl , {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      value: order
    })
  })
    .then((data) => {
      return data;
    });
}
// update
export function updateRecord(order:any) {
  return fetch(`${baseUrl}/${order.OrderID}`, {
    method: "put",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      value: order
    })
  })
    .then(data => {
      return data;
    });
}
// delete
export function deleteRecord(primaryKey:any) {
  return fetch(`${baseUrl}/${primaryKey}`, {
    method: "delete",
    body: JSON.stringify({
      value: primaryKey
    })
  })
  .then(data => {
    return data;
  });
}