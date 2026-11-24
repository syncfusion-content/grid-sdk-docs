import { ColumnDirective, ColumnsDirective, GridComponent, Toolbar, Edit, Inject } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  const editOptions = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Batch', enableUndoRedo: true, enableBatchUndoRedo: true };
  const toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Undo', 'Redo'];
  return (<GridComponent dataSource={data} editSettings={editOptions} height={300} toolbar={toolbarOptions}>
    <ColumnsDirective>
      <ColumnDirective field='ProductID' headerText='Product ID' width='120' textAlign='Right' isPrimaryKey={true} validationRules={{ required: true, number: true }} />
      <ColumnDirective field='ProductName' headerText='Product Name' width='170' validationRules={{ required: true }} />
      <ColumnDirective field='Category' headerText='Category' width='140' editType='dropdownedit' />
      <ColumnDirective field='UnitPrice' headerText='Unit Price' width='120' editType='numericedit' format='C2' textAlign='Right' validationRules={{ required: true, min: 1 }} />
    </ColumnsDirective>
    <Inject services={[Edit, Toolbar]} />
  </GridComponent>)
};
export default App;
