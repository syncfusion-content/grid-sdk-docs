import { CheckBoxComponent } from '@syncfusion/ej2-react-buttons';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { ColumnDirective, ColumnsDirective, Filter, GridComponent, Inject, Page } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
    let grid;
    const customRanges = [
        {
            label: 'Yesterday',
            start: new Date(new Date().setDate(new Date().getDate() - 1)),
            end: new Date(new Date().setDate(new Date().getDate() - 1))
        },
        {
            label: 'Today',
            start: new Date(),
            end: new Date()
        },
        {
            label: 'Last 5 Days',
            start: new Date(new Date().setDate(new Date().getDate() - 4)),
            end: new Date()
        },
        {
            label: 'Next 5 Days',
            start: new Date(),
            end: new Date(new Date().setDate(new Date().getDate() + 4))
        }
    ];

    let enablePresets = false;
    let enableCustomPresets = false;
    let presetMode = 'Default';

    const filterOptions = {
        type: 'Menu'
    };

    const orderDateFilter = {
        dateRanges: {
            enablePresets: enablePresets,
            presetMode: presetMode,
            customPresetRanges: enableCustomPresets ? customRanges : []
        }
    };

    const updateDateRangeSettings = () => {
        const column = grid.getColumnByField('OrderDate');
        column.filter = {
            dateRanges: {
                enablePresets: enablePresets,
                presetMode: presetMode,
                customPresetRanges: enableCustomPresets ? customRanges : []
            }
        };
        grid.refreshColumns();
    };

    const onEnablePresetsChange = (args) => {
        enablePresets = args.checked;
        updateDateRangeSettings();
    };

    const onCustomPresetsChange = (args) => {
        enableCustomPresets = args.checked;
        updateDateRangeSettings();
    };

    const onPresetModeChange = (args) => {
        presetMode = args.value;
        updateDateRangeSettings();
    };

    return (
        <div>
            <div style={{ padding: '10px 0px' }}>
                <CheckBoxComponent label="Enable Presets" checked={false} change={onEnablePresetsChange} />
                <span style={{ marginLeft: '10px' }}>
                    <CheckBoxComponent label="Enable Custom Presets" checked={false} change={onCustomPresetsChange} />
                </span>
                <span style={{ marginLeft: '10px' }}>
                    <DropDownListComponent dataSource={['Default', 'Custom', 'Both']} value="Default" width="180px" placeholder="Preset Mode" change={onPresetModeChange} />
                </span>
            </div>
            <GridComponent ref={g => grid = g} dataSource={data} allowPaging={true} allowFiltering={true} filterSettings={filterOptions}>
                <ColumnsDirective>
                    <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign='Right' />
                    <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
                    <ColumnDirective field='OrderDate' headerText='Order Date' width='150' type='date' format='yMd' filter={orderDateFilter} />
                    <ColumnDirective field='Freight' headerText='Freight' width='120' format='C2' textAlign='Right' />
                    <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' />
                </ColumnsDirective>
                <Inject services={[Page, Filter]} />
            </GridComponent>
        </div>
    );
}

export default App;
