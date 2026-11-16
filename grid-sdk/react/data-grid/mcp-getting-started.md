---
layout: post
title: WebMCP tool integration for React components | Syncfusion
description: Learn how to integrate WebMCP with Syncfusion React components to enable AI interaction, configure tools, manage access, and monitor execution.
control: WebMCP
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---
 
# WebMCP Tools Integration for Syncfusion® React Data Grid
 
WebMCP allows AI assistants running in the browser to interact directly with Syncfusion® components through natural language prompts.
 
Instead of relying on DOM inspection or simulating user interactions, AI assistants can interact directly with component APIs through WebMCP tools. This approach provides more reliable and accurate results.
 
Once connected, an AI assistant can perform tasks such as:
 
- Sort or filter Grid data.
- Clear sorted records
- Clear filtered records.
 
> WebMCP is currently an experimental browser capability and requires a Chromium-based browser with WebMCP support enabled. Availability and required browser flags may change as the specification evolves.
 
## Prerequisites
 
- Syncfusion® React components
- Chromium-based Browser (like Chrome, Edge, or Brave)
- [Node.js 24+](https://nodejs.org/en) (LTS recommended).
- WebMCP browser extension installed
- AI API key configured in the extension
 
## WebMCP setup
 
Before using WebMCP locally, enable the feature flag and install the browser extension:
 
1. Enable `WebMCP for testing` flag via `chrome://flags/`. Click **"Relaunch"** to restart Chrome.
 
2. Search for **"WebMCP - Model Context Tool Inspector"** in [Chrome Web Store](https://chromewebstore.google.com/detail/webmcp-model-context-tool/gbpdfapgefenggkahomfgkhfehlcenpd). Click **"Add to Chrome"**.
 
3. Visit [Google AI Studio](https://aistudio.google.com/app/apikey) to create or copy an API key. Open the WebMCP extension → paste your API key.
 
The WebMCP extension is now configured and ready to interact with WebMCP-enabled Syncfusion® components.

## Tools

| Tool | What it does | Changes | On by default | Needs confirmation |
|---|---|---|---|---|
| `getColumns` | Returns the column definitions: field, headerText, type, visible, isPrimaryKey, allowEditing, allowSorting, allowFiltering. | ReadOnly | Yes | No |
| `getColumnByField` | Returns a Grid column by field name. | ReadOnly | Yes | No |
| `getColumnByUid` | Returns a Grid column by uid. | ReadOnly | Yes | No |
| `getPrimaryKeyFieldNames` | Returns the primary key field names. | ReadOnly | Yes | No |
| `getColumnFieldNames` | Returns all column field names. | ReadOnly | Yes | No |
| `getVisibleColumns` | Returns the visible Grid columns. | ReadOnly | Yes | No |
| `getSelectedRecords` | Returns the selected records (at most maxItems) with the total selected count. | ReadOnly | Yes | No |
| `getSelectedRowIndexes` | Returns the 0-based indexes of the selected rows. | ReadOnly | Yes | No |
| `getCurrentViewRecords` | Returns the records on the current page (raw data read; at most maxItems). | ReadOnly | No | No |
| `getFilteredRecords` | Returns the records that match the active filters (raw data read; at most maxItems). | ReadOnly | No | No |
| `getBatchChanges` | Returns the pending batch-edit changes (added, changed, deleted records). Requires editSettings.mode Batch. | ReadOnly | No | No |
| `navigateToPage` | Navigates to a 1-based page and returns the current page. Requires allowPaging. | ViewStateMutation | Yes | No |
| `sortByColumn` | Sorts by a column and returns the sort descriptors. Requires allowSorting. | ViewStateMutation | Yes | No |
| `clearSorting` | Clears all sorting. Requires allowSorting. | ViewStateMutation | Yes | No |
| `filterByColumn` | Filters a column and returns the active filters. Operators and their aliases are normalised. Requires allowFiltering. | ViewStateMutation | Yes | No |
| `clearFiltering` | Clears filters on the given fields, or all filters when none are given. | ViewStateMutation | Yes | No |
| `groupColumn` | Groups by a column and returns the grouped columns. Requires allowGrouping. | ViewStateMutation | Yes | No |
| `ungroupColumn` | Removes grouping by a column and returns the grouped columns. | ViewStateMutation | Yes | No |
| `selectRows` | Selects rows by 0-based index and returns the selected indexes. Requires allowSelection. | ViewStateMutation | Yes | No |
| `selectRowByRange` | Selects row(s) within a range. Requires allowSelection. | ViewStateMutation | Yes | No |
| `clearSelection` | Clears all row and cell selections. | ViewStateMutation | Yes | No |
| `clearGrouping` | Removes all grouping. Requires allowGrouping. | ViewStateMutation | Yes | No |
| `groupExpandAll` | Expands all groups. Requires allowGrouping. | ViewStateMutation | No | No |
| `groupCollapseAll` | Collapses all groups. Requires allowGrouping. | ViewStateMutation | No | No |
| `selectCells` | Selects cells by row index and cell indexes (both 0-based). Requires selectionSettings.mode Cell or Both. | ViewStateMutation | No | No |
| `showColumns` | Shows hidden columns found by field name (or by headerText with showBy) and returns the visible fields. | ViewStateMutation | Yes | No |
| `hideColumns` | Hides columns found by field name (or by headerText with hideBy) and returns the visible fields. | ViewStateMutation | Yes | No |
| `reorderColumns` | Moves columns before a target column by field name. Requires allowReordering. | ViewStateMutation | No | No |
| `reorderColumnByIndex` | Moves a column from one 0-based index to another. Requires allowReordering. | ViewStateMutation | No | No |
| `autoFitColumns` | Auto-fits column widths to their content; all columns when no fields are given. | ViewStateMutation | No | No |
| `showSpinner` | Shows the Grid loading spinner. | ViewStateMutation | No | No |
| `hideSpinner` | Hides the Grid loading spinner. | ViewStateMutation | No | No |
| `openColumnChooser` | Opens the column chooser dialog. Requires showColumnChooser. | ViewStateMutation | No | No |
| `pinRows` | Pins rows of the current view to the top by primary key. Requires a primary key. | ViewStateMutation | No | No |
| `unpinRows` | Unpins pinned rows by primary key. | ViewStateMutation | No | No |
| `enableToolbarItems` | Enables or disables toolbar items by id. Requires a toolbar. | ViewStateMutation | No | No |
| `setCellValue` | Updates one cell by primary key and field and returns the key; dryRun previews. Needs the field in webMcpSettings.writableFields. | DataMutation | Yes | Yes |
| `setRowData` | Updates fields of one record by primary key; dryRun previews. Needs every field in webMcpSettings.writableFields. | DataMutation | Yes | Yes |
| `addRecord` | Inserts a record at an optional 0-based index; dryRun previews. Needs every field in webMcpSettings.writableFields and editSettings.allowAdding. | DataMutation | Yes | Yes |
| `deleteRecord` | Deletes one record by primary key or by record data; dryRun previews. Requires editSettings.allowDeleting. Not limited by writableFields. | DataMutation | Yes | Yes |
| `refresh` | 'Refreshes the Grid. | ViewStateMutation | No | No |
| `refreshColumns` | 'Refreshes the Grid columns. | ViewStateMutation | No | No |
| `refreshHeader` | 'Refreshes the Grid header. | ViewStateMutation | No | No |
| `saveBulkChanges` | Sets the same field values on several records in one step (default: the selected rows); dryRun previews. Needs every changed field in webMcpSettings.writableFields. | DataMutation | Yes | Yes |
| `changeDataSource` | Replaces the data with an array of records (never a URL) and optional column fields. | DataMutation | No | Yes |
| `startEdit` | Starts editing the selected row, or a given row and field in batch mode. Requires editSettings.allowEditing. | DataMutation | No | No |
| `endEdit` | Saves the open edit and returns whether an edit is still open. | DataMutation | No | No |
| `closeEdit` | Cancels the current edit. | DataMutation | No | No |
| `reorderRows` | Moves rows by 0-based index to a new position. Requires allowRowDragAndDrop. | DataMutation | No | No |
| `exports` | Exports Grid data to a file format. Requires the matching export module. | ExternalExport | Yes | Yes |
| `print` | Prints the Grid through the browser print dialog. | ExternalExport | No | Yes |
| `copy` | Copies the selected rows or cells to the clipboard, optionally with headers. Requires the Clipboard module. | ExternalExport | No | Yes |

## Integrating WebMCP tools

Follow these steps to integrate WebMCP support into Syncfusion® React components. The following example uses the Data Grid component.

### Step 1: Set up the Vite project

Create a React Vite application and integrate the Syncfusion® React Data Grid component using the [getting started](https://help.syncfusion.com/grid-sdk/react/data-grid/getting-started) guide. After completing the setup, follow the steps below to enable WebMCP integration.

### Step 2: Enable WebMCP support

Import the WebMCP module and inject it into the component to make WebMCP functionality available.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}

import { ColumnDirective, ColumnsDirective, Grid, GridComponent, Inject, Sort, Filter, WebMcpGrid } from '@syncfusion/ej2-react-grids';

Grid.Inject(WebMcpGrid);

function App() {
    return <GridComponent dataSource={data} height={315}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" />
      <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' />
      <ColumnDirective field='ShipCity' headerText='Ship City' width='100' textAlign="Right" />
      <ColumnDirective field='ShipName' headerText='Ship Name' width='100' />
    </ColumnsDirective>
    <Inject services={[Sort]}/>
  </GridComponent>;
};
export default App;

{% endhighlight %}
{% endtabs %}

### Step 3: Register component tools

Set the [enableWebMcp](https://ej2.syncfusion.com/react/documentation/api/grid/index-default#enablewebmcp) property to `true` to register the component's available tools with the WebMCP runtime.

When `enableWebMcp` is enabled, supported component tools are automatically registered with the WebMCP runtime and become discoverable by authorized WebMCP clients.

For example, a Data Grid component may expose tools such as:

- getSelectedRecords
- sortByColumn
- clearFiltering

An AI assistant can discover these tools and invoke them based on user prompts.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}

import { ColumnDirective, ColumnsDirective, Grid, GridComponent, Inject, Sort, Filter, WebMcpGrid } from '@syncfusion/ej2-react-grids';

Grid.Inject(WebMcpGrid);

function App() {
    return <GridComponent dataSource={data} height={315} enableWebMcp={true} allowSorting={true} allowFiltering={true}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" />
      <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' />
      <ColumnDirective field='ShipCity' headerText='Ship City' width='100' textAlign="Right" />
      <ColumnDirective field='ShipName' headerText='Ship Name' width='100' />
    </ColumnsDirective>
    <Inject services={[Sort, Filter]}/>
  </GridComponent>;
};
export default App;

{% endhighlight %}
{% endtabs %}

### Step 4: Customize tool registration

Use the [webMcpSettings](https://ej2.syncfusion.com/react/documentation/api/grid/index-default#webmcpsettings) property to customize how WebMCP tools are exposed to AI agents. The available settings are listed below.

| Property | Description |
|-----------|-------------|
| `name` | Prefix applied to registered tool names. If name: `sales` is specified, a tool such as `getSelectedRecords` may be registered as `sales_getSelectedRecords`, allowing multiple component instances to coexist without tool name conflicts. |
| `tools` | List of tool names to expose. Any supported tools not included in this list will not be registered. |
| `exposedTo` | List of trusted domains that are allowed to interact with the component through WebMCP. |

{% tabs %}
{% highlight js tabtitle="App.jsx" %}

import { ColumnDirective, ColumnsDirective, Grid, GridComponent, Inject, Sort, Filter, WebMcpGrid } from '@syncfusion/ej2-react-grids';

Grid.Inject(WebMcpGrid);

function App() {
    return <GridComponent dataSource={data} height={315} enableWebMcp={true} allowSorting={true} allowFiltering={true}  webMcpSettings={{
                name: 'sales',
                tools: ['getSelectedRecords', 'sortByColumn', 'clearFiltering'],
                exposedTo: ['https://www.syncfusion.com/']
            }}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" />
      <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' />
      <ColumnDirective field='ShipCity' headerText='Ship City' width='100' textAlign="Right" />
      <ColumnDirective field='ShipName' headerText='Ship Name' width='100' />
    </ColumnsDirective>
    <Inject services={[Sort, Filter]}/>
  </GridComponent>;
};
export default App;

{% endhighlight %}
{% endtabs %}

> Use the `exposedTo` property to restrict WebMCP access to trusted domains. This helps prevent unauthorized WebMCP clients from interacting with component tools.

### Step 5: Monitor and control tool execution

The [beforeWebMcpToolExecute](https://ej2.syncfusion.com/react/documentation/api/grid/index-default#beforewebmcptoolexecute) event is triggered before a tool is executed. This event allows:

- Audit tool usage.
- Validate incoming requests.
- Cancel tool execution when necessary.
- Apply custom business rules and security policies.

> AI-generated requests should always be validated before executing write operations. Restrict access using `exposedTo` and perform additional authorization checks within `beforeWebMcpToolExecute` when modifying application data.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}

import { ColumnDirective, ColumnsDirective, Grid, GridComponent, Inject, Sort, Filter, WebMcpGrid } from '@syncfusion/ej2-react-grids';

Grid.Inject(WebMcpGrid);

function App() {
    const beforeWebMcpToolExecute = (args) => {
        // Example business rule
        if (args.toolName.includes('clearFiltering')) {
            const hour = new Date().getHours();
            if (hour < 9 || hour > 17) {
                args.cancel = true;
                console.log('Clear filter action is allowed only between 9:00 AM and 5:00 PM.');
            }
        }
    };
    return <GridComponent dataSource={data} height={315} enableWebMcp={true} allowSorting={true} allowFiltering={true} 
    beforeWebMcpToolExecute={beforeWebMcpToolExecute} webMcpSettings={{
                name: 'sales',
                tools: ['getSelectedRecords', 'sortByColumn', 'clearFiltering'],
                exposedTo: ['https://www.syncfusion.com/']
            }}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" />
      <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' />
      <ColumnDirective field='ShipCity' headerText='Ship City' width='100' textAlign="Right" />
      <ColumnDirective field='ShipName' headerText='Ship Name' width='100' />
    </ColumnsDirective>
    <Inject services={[Sort, Filter]}/>
  </GridComponent>;
};
export default App;

{% endhighlight %}
{% endtabs %}

## Best practices

- Expose only the tools required by the application.
- Use the `name` property when multiple component instances exist on the same page.
- Configure `exposedTo` to limit access to trusted domains.
- Monitor tool activity through the `beforeWebMcpToolExecute` event.
- Apply application-specific validation before executing tool operations.

## Explore the demo

Explore the Syncfusion® React Data Grid component with WebMCP integration through this [demo](https://demos.syncfusion.com/grid-sdk/data-grid/webmcp/index.html).