import * as React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Inject } from '@syncfusion/ej2-react-grids';
import { DomVirtualization, Sort, Filter, Toolbar, Page } from '@syncfusion/ej2-react-grids';
import { DataManager, UrlAdaptor, Query } from '@syncfusion/ej2-data';

function App() {
  const dataManager: DataManager = new DataManager({
    url: 'https://services.syncfusion.com/js/production/api/UrlDataSource',
    adaptor: new UrlAdaptor()
  });
  const query: Query = new Query().addParams('dataCount', '100000');
  const empIdTemplate = (props: any) => <span>{props.EmployeeID}</span>;
  const empNameTemplate = (props: any) => <span className='vp-ellipsis'>{props.Employees}</span>;
  const desigTemplate = (props: any) => <span className='vp-ellipsis'>{props.Designation}</span>;
  const locTemplate = (props: any) => <span className='vp-ellipsis'>{props.Location}</span>;
  const statusTemplate = (props: any) => {
    const icons: any = { Active: '●', Inactive: '○', 'On Leave': '⊘', Retired: '✕' };
    const cls = (props.Status || 'Active').replace(' ', '');
    return <div className={`vp-badge vp-status-${cls}`}><span>{icons[props.Status] || icons.Active}</span><span>{props.Status}</span></div>;
  };
  const trustTemplate = (props: any) => <div className={`vp-badge vp-trust-${props.Trustworthiness}`}>{props.Trustworthiness}</div>;
  const softTemplate = (props: any) => {
    let v = Math.round(Math.min(100, Math.max(0, Number(props.Software == null ? 0 : props.Software))));
    if (props.Trustworthiness === 'Perfect' && v < 70) v = 70;
    else if (props.Trustworthiness === 'Sufficient') v = Math.min(69, Math.max(40, v));
    else if (props.Trustworthiness === 'Insufficient' && v > 39) v = 39;
    const color = v < 40 ? '#dc2626' : v < 70 ? '#f59e0b' : '#059669';
    return (
      <div className='vp-progress'>
        <div className='vp-progress-bar'><div style={{ width: v + '%', backgroundColor: color }} /></div>
        <span>{v}%</span>
      </div>
    );
  };
  const ratingTemplate = (props: any) => {
    let r = Math.min(5, Math.max(0, Number(props.Rating == null ? 0 : props.Rating)));
    if (props.Trustworthiness === 'Perfect') r = Math.min(5, Math.max(4, r));
    else if (props.Trustworthiness === 'Sufficient') r = 3;
    else if (props.Trustworthiness === 'Insufficient') r = Math.min(2, Math.max(1, r));
    const color = r >= 4 ? '#059669' : r >= 3 ? '#f59e0b' : '#dc2626';
    return <span style={{ color, fontWeight: 600 }}>★ {r.toFixed(1)}</span>;
  };
  const salaryTemplate = (props: any) => (
    <span className='vp-salary'>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(props.CurrentSalary || 0)}</span>
  );

  return (
    <GridComponent
      dataSource={dataManager}
      query={query}
      height={440}
      clipMode='EllipsisWithTooltip'
      enableDomVirtualization={true}
      domVirtualizationSettings={{ rowBuffer: 5 }}
      pageSettings={{ pageSize: 50 }}
      enableVirtualMaskRow={true}
      allowPaging={true}
      allowSorting={true}
      allowFiltering={true}
      filterSettings={{ type: 'CheckBox' }}
      toolbar={['Search']}
    >
      <ColumnsDirective>
        <ColumnDirective field='EmployeeID' headerText='Employee ID' width='110' textAlign='Right' clipMode='EllipsisWithTooltip' isPrimaryKey={true} type='number' template={empIdTemplate} />
        <ColumnDirective field='Employees' headerText='Employee Name' width='160' textAlign='Left' clipMode='EllipsisWithTooltip' template={empNameTemplate} />
        <ColumnDirective field='Designation' headerText='Designation' width='140' textAlign='Left' clipMode='EllipsisWithTooltip' template={desigTemplate} />
        <ColumnDirective field='Mail' headerText='Email' width='190' textAlign='Left' clipMode='EllipsisWithTooltip' />
        <ColumnDirective field='Address' headerText='Address' width='190' textAlign='Left' clipMode='EllipsisWithTooltip' />
        <ColumnDirective field='Location' headerText='Location' width='130' textAlign='Center' clipMode='EllipsisWithTooltip' template={locTemplate} />
        <ColumnDirective field='Status' headerText='Status' width='120' textAlign='Center' clipMode='EllipsisWithTooltip' template={statusTemplate} />
        <ColumnDirective field='Trustworthiness' headerText='Trustworthiness' width='140' textAlign='Center' clipMode='EllipsisWithTooltip' template={trustTemplate} />
        <ColumnDirective field='Software' headerText='Software Skills' width='130' textAlign='Right' clipMode='EllipsisWithTooltip' type='number' template={softTemplate} />
        <ColumnDirective field='Rating' headerText='Performance Rating' width='140' textAlign='Center' clipMode='EllipsisWithTooltip' type='number' template={ratingTemplate} />
        <ColumnDirective field='CurrentSalary' headerText='Current Salary' width='140' textAlign='Right' clipMode='EllipsisWithTooltip' type='number' template={salaryTemplate} />
      </ColumnsDirective>
      <Inject services={[DomVirtualization, Sort, Filter, Toolbar, Page]} />
    </GridComponent>
  );
}

export default App;
