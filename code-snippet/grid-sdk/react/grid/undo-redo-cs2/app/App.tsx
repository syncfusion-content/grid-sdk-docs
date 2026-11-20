import { ColumnDirective, ColumnsDirective, GridComponent, Toolbar, Edit, Inject, EditSettingsModel, ToolbarItems } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  const editOptions: EditSettingsModel = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal', enableUndoRedo: true };
  const toolbarOptions: ToolbarItems[] = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
  return (<GridComponent dataSource={data} editSettings={editOptions} height={300} toolbar={toolbarOptions}>
    <ColumnsDirective>
      <ColumnDirective field='EmployeeID' headerText='Employee ID' width='120' textAlign='Right' isPrimaryKey={true} validationRules={{ required: true, number: true }} />
      <ColumnDirective field='Name' headerText='Name' width='160' validationRules={{ required: true }} />
      <ColumnDirective field='Department' headerText='Department' width='140' editType='dropdownedit' />
      <ColumnDirective field='Salary' headerText='Salary' width='120' editType='numericedit' format='C0' textAlign='Right' validationRules={{ required: true, min: 1000 }} />
    </ColumnsDirective>
    <Inject services={[Edit, Toolbar]} />
  </GridComponent>)
};
export default App;
