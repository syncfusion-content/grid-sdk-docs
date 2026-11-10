import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { ColumnDirective, ColumnsDirective, Filter, GridComponent, DataStateChangeEventArgs, InfiniteScroll, Inject, Sort, Toolbar, SortSettingsModel, InfiniteScrollSettingsModel, PageSettingsModel, ToolbarItems } from '@syncfusion/ej2-react-grids'
import { fetchData } from './reducer/action';

export interface gridState {
  data: {
    result: Object[];
    count: number;
  }
}
const App = () => {
  var gridInstance: GridComponent | null;
  const [requestCount, setRequestCount] = React.useState(1);
  const toolbar: ToolbarItems[] = ['Search'];
  const infiniteScrollSettings: InfiniteScrollSettingsModel = { enableCache: true, initialBlocks: 3, maxBlocks: 3 };
  const pageSettings: PageSettingsModel = { pageSize: 12 };
  const sortSettings: SortSettingsModel = { columns: [{ field: 'ProductID', direction: 'Descending' }] };
  const state = useSelector((state: gridState) => state);
  const dispatch = useDispatch();

  // triggers only when the requested data is not available in the cache
  const dataStateChange = (state: DataStateChangeEventArgs) => {
    setRequestCount((count) => count + 1);
    const query = (gridInstance as GridComponent).getDataModule().generateQuery();
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
