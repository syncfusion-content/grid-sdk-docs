import React, { useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { ColumnDirective, ColumnsDirective, Filter, GridComponent, DataStateChangeEventArgs, Inject, InfiniteScroll, Sort, Edit, Toolbar, InfiniteScrollSettingsModel, SortSettingsModel, FilterSettingsModel, DataSourceChangedEventArgs, ToolbarItems, EditSettingsModel } from '@syncfusion/ej2-react-grids'
import { addRow, deleteRow, fetchData, updateRow } from './reducer/action';

export interface gridState{
  data:{
    result:Object[];
    count:number;
  }
}
const App = () => {    
  var gridInstance: GridComponent|null;
  const toolbar: ToolbarItems[] = ['Add', 'Edit', 'Delete',  'Update', 'Cancel', 'Search'];
  const editSettings: EditSettingsModel = {allowAdding: true, allowDeleting: true, allowEditing: true};
  const infiniteScrollSettings: InfiniteScrollSettingsModel = {enableCache: true};
  const filterSettings:FilterSettingsModel = {columns: [{field: 'CustomerName', matchCase: false, operator: 'startswith', predicate: 'and', value: 'Maria'}]}
  const sortSettings:SortSettingsModel = {columns: [{ field: 'ProductID', direction: 'Descending' }]}
  const state = useSelector((state: gridState) => state);
  const dispatch = useDispatch();

  const dataStateChange = (state: DataStateChangeEventArgs) => {
    const query = (gridInstance as GridComponent).getDataModule().generateQuery();
    dispatch(fetchData(state, query));
  }

  const dataSourceChange = (state: DataSourceChangedEventArgs) =>{
    const query = (gridInstance as GridComponent).getDataModule().generateQuery(true);  
    if (state.requestType === "save") {
      if (state.action === "add") {
        dispatch(addRow(state, query));
      } else if (state.action === "edit") {
        dispatch(updateRow(state, query));
      }
    }
    if (state.requestType === 'delete') {
      dispatch(deleteRow(state, query));
    }
  }

  useEffect(() => {
    if (gridInstance) {
      gridInstance.dataSource = state.data;
    }
  },[state.data])
  
  return (
      <GridComponent ref={grid => gridInstance = grid} allowSorting={true} allowFiltering={true} 
      enableInfiniteScrolling={true}
      infiniteScrollSettings={infiniteScrollSettings}
      filterSettings={filterSettings}
      sortSettings={sortSettings}
      toolbar={toolbar}
      editSettings={editSettings}
      dataStateChange={dataStateChange}
      dataSourceChanged={dataSourceChange}
      >
        <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' textAlign="Right" width='120' isPrimaryKey={true} />
        <ColumnDirective field='ProductName' headerText='Product Name' width='160' />
        <ColumnDirective field='ProductID' headerText='Product ID' textAlign="Right" width='120' />
        <ColumnDirective field='CustomerName' headerText='Customer Name' width='160' />
      </ColumnsDirective>
      <Inject services={[InfiniteScroll, Sort, Filter, Edit, Toolbar]} />
      </GridComponent>
  )
}

export default (App);