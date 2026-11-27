import { ColumnDirective, ColumnsDirective, GridComponent, Toolbar, Edit, Inject, EditSettingsModel, ToolbarItems } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  const editOptions: EditSettingsModel = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal', enableUndoRedo: true, undoRedoLimit: 10 };
  const toolbarOptions: ToolbarItems[] = ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Undo', 'Redo'];
  return (<GridComponent dataSource={data} editSettings={editOptions} height={300} toolbar={toolbarOptions}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign='Right' isPrimaryKey={true} validationRules={{ required: true, number: true }} />
      <ColumnDirective field='CustomerID' headerText='Customer ID' width='140' validationRules={{ required: true, minLength: 3 }} />
      <ColumnDirective field='Freight' headerText='Freight' width='120' editType='numericedit' format='C2' textAlign='Right' validationRules={{ required: true, min: 1, max: 1000 }} />
      <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' editType='dropdownedit' />
    </ColumnsDirective>
    <Inject services={[Edit, Toolbar]} />
  </GridComponent>)
};
export default App;
