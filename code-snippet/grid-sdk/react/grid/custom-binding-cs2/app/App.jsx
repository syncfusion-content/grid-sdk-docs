import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { ColumnDirective, ColumnsDirective, Filter, GridComponent, InfiniteScroll, Inject, Sort, Toolbar } from '@syncfusion/ej2-react-grids'
import { fetchData } from './reducer/action';

const App = () => {
  let gridInstance;
  const [requestCount, setRequestCount] = React.useState(1);
  const toolbar = ['Search'];
  const infiniteScrollSettings = { enableCache: true, initialBlocks: 3, maxBlocks: 3 };
  const pageSettings = { pageSize: 12 };
  const sortSettings = { columns: [{ field: 'ProductID', direction: 'Descending' }] };
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  // triggers only when the requested data is not available in the cache
  const dataStateChange = (state) => {
    setRequestCount((count) => count + 1);
    const query = gridInstance.getDataModule().generateQuery();
    dispatch(fetchData(state, query));
  }

  useEffect(() => {
    if (gridInstance) {
      gridInstance.dataSource = state.data;
    }
  }, [state.data])

  return (
    <div>
      <p>Server requests made: {requestCount}</p>
      <GridComponent ref={grid => gridInstance = grid} height={315} enableInfiniteScrolling={true}
        infiniteScrollSettings={infiniteScrollSettings} pageSettings={pageSettings} allowSorting={true}
        allowFiltering={true} sortSettings={sortSettings} toolbar={toolbar} dataStateChange={dataStateChange}>
        <ColumnsDirective>
          <ColumnDirective field='OrderID' headerText='Order ID' textAlign="Right" width='120' isPrimaryKey={true} />
          <ColumnDirective field='ProductName' headerText='Product Name' width='160' />
          <ColumnDirective field='ProductID' headerText='Product ID' textAlign="Right" width='120' />
          <ColumnDirective field='CustomerName' headerText='Customer Name' width='160' />
        </ColumnsDirective>
        <Inject services={[InfiniteScroll, Sort, Filter, Toolbar]} />
      </GridComponent>
    </div>
  )
}

export default (App);
