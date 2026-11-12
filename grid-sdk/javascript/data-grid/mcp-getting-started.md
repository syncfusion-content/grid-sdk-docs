---
layout: post
title: WebMCP tool integration for JavaScript (ES5) controls | Syncfusion
description: Learn how to integrate WebMCP with Syncfusion JavaScript (ES5) controls to enable AI interaction, configure tools, manage access, and monitor execution.
control: WebMCP
platform: ej2-javascript
documentation: ug
domainurl: ##DomainURL##
---
 
# WebMCP Tools Integration for Syncfusion® JavaScript Data Grid
 
WebMCP allows AI assistants running in the browser to interact directly with Syncfusion® controls through natural language prompts.
 
Instead of relying on DOM inspection or simulating user interactions, AI assistants can interact directly with control APIs through WebMCP tools. This approach provides more reliable and accurate results.
 
Once connected, an AI assistant can perform tasks such as:
 
- Sort or filter Grid data.
- Clear sorted records
- Clear filtered records.
 
> WebMCP is currently an experimental browser capability and requires a Chromium-based browser with WebMCP support enabled. Availability and required browser flags may change as the specification evolves.
 
## Prerequisites
 
- Syncfusion® JavaScript (ES5) controls
- Chromium-based Browser (like Chrome, Edge, or Brave)
- [Node.js 24+](https://nodejs.org/en) (LTS recommended).
- WebMCP browser extension installed
- AI API key configured in the extension
 
## WebMCP setup
 
Before using WebMCP locally, enable the feature flag and install the browser extension:
 
1. Enable `WebMCP for testing` flag via `chrome://flags/`. Click **"Relaunch"** to restart Chrome.
 
2. Search for **"WebMCP - Model Context Tool Inspector"** in [Chrome Web Store](https://chromewebstore.google.com/detail/webmcp-model-context-tool/gbpdfapgefenggkahomfgkhfehlcenpd). Click **"Add to Chrome"**.
 
3. Visit [Google AI Studio](https://aistudio.google.com/app/apikey) to create or copy an API key. Open the WebMCP extension → paste your API key.
 
The WebMCP extension is now configured and ready to interact with WebMCP-enabled Syncfusion® controls.

## Tools

| Tool | What it does | Changes | On by default | Needs confirmation |
|---|---|---|---|---|
| `getSettings` | Returns the Grid feature switches and settings (paging, sorting, filtering, grouping, selection, editing, frozen layout, primary keys). | ReadOnly | Yes | No |
| `getColumns` | Returns the column definitions: field, headerText, type, visible, isPrimaryKey, allowEditing, allowSorting, allowFiltering. | ReadOnly | Yes | No |
| `getSelectedRecords` | Returns the selected records (at most maxItems) with the total selected count. | ReadOnly | Yes | No |
| `getSelectedRowIndexes` | Returns the 0-based indexes of the selected rows. | ReadOnly | Yes | No |
| `getSelectedCells` | Returns the selected cells (row and cell indexes) and the records of the rows that contain them. | ReadOnly | No | No |
| `getCurrentViewRecords` | Returns the records on the current page (raw data read; at most maxItems). | ReadOnly | No | No |
| `getFilteredRecords` | Returns the records that match the active filters (raw data read; at most maxItems). | ReadOnly | No | No |
| `getBatchChanges` | Returns the pending batch-edit changes (added, changed, deleted records). Requires editSettings.mode Batch. | ReadOnly | No | No |
| `getRowIndex` | Returns the 0-based row index of the record with the given primary key in the current view, or -1. | ReadOnly | Yes | No |
| `getFindState` | Returns the find-in-grid state: total matches and the active match. | ReadOnly | No | No |
| `getAdvancedFilter` | Returns the applied advanced-filter rule and whether one is applied. | ReadOnly | No | No |
| `getCellFormula` | Returns the formula, its computed value and whether the cell has a formula. Requires formulaSettings. | ReadOnly | No | No |
| `navigateToPage` | Navigates to a 1-based page and returns the current page. Requires allowPaging. | ViewStateMutation | Yes | No |
| `sortByColumn` | Sorts by a column and returns the sort descriptors. Requires allowSorting. | ViewStateMutation | Yes | No |
| `clearSorting` | Clears all sorting. Requires allowSorting. | ViewStateMutation | Yes | No |
| `filterByColumn` | Filters a column and returns the active filters. Operators and their aliases are normalised. Requires allowFiltering. | ViewStateMutation | Yes | No |
| `clearFiltering` | Clears filters on the given fields, or all filters when none are given. | ViewStateMutation | Yes | No |
| `search` | Searches all searchable columns and returns the search text. | ViewStateMutation | Yes | No |
| `groupColumn` | Groups by a column and returns the grouped columns. Requires allowGrouping. | ViewStateMutation | Yes | No |
| `ungroupColumn` | Removes grouping by a column and returns the grouped columns. | ViewStateMutation | Yes | No |
| `selectRows` | Selects rows by 0-based index and returns the selected indexes. Requires allowSelection. | ViewStateMutation | Yes | No |
| `clearSelection` | Clears all row and cell selections. | ViewStateMutation | Yes | No |
| `clearGrouping` | Removes all grouping. Requires allowGrouping. | ViewStateMutation | Yes | No |
| `setAllGroupsExpanded` | Expands or collapses every group. Requires allowGrouping. | ViewStateMutation | No | No |
| `selectCells` | Selects cells by row index and cell indexes (both 0-based). Requires selectionSettings.mode Cell or Both. | ViewStateMutation | No | No |
| `deselectRows` | Deselects rows by 0-based index and returns the remaining selection. | ViewStateMutation | Yes | No |
| `showColumns` | Shows hidden columns found by field name (or by headerText with showBy) and returns the visible fields. | ViewStateMutation | Yes | No |
| `hideColumns` | Hides columns found by field name (or by headerText with hideBy) and returns the visible fields. | ViewStateMutation | Yes | No |
| `reorderColumns` | Moves columns before a target column by field name. Requires allowReordering. | ViewStateMutation | No | No |
| `reorderColumnByIndex` | Moves a column from one 0-based index to another. Requires allowReordering. | ViewStateMutation | No | No |
| `autoFitColumns` | Auto-fits column widths to their content; all columns when no fields are given. | ViewStateMutation | No | No |
| `refreshView` | Re-renders the Grid, its columns or its header. | ViewStateMutation | No | No |
| `setSpinnerVisibility` | Shows or hides the Grid loading spinner. | ViewStateMutation | No | No |
| `openColumnChooser` | Opens the column chooser dialog. Requires showColumnChooser. | ViewStateMutation | No | No |
| `findText` | Finds a text in the Grid, highlights the matches and returns the match count. Requires the Find module. | ViewStateMutation | No | No |
| `navigateFindMatch` | Moves to the next or previous match, or to a 1-based match number, and returns the active match. | ViewStateMutation | No | No |
| `clearFind` | Clears the find highlights. | ViewStateMutation | No | No |
| `applyAdvancedFilter` | Applies an advanced-filter rule tree {condition, rules:[{field, operator, value}]}. Requires allowAdvancedFiltering. | ViewStateMutation | Yes | No |
| `clearAdvancedFilter` | Clears the advanced filter. | ViewStateMutation | Yes | No |
| `setAllDetailRowsExpanded` | Expands or collapses every detail row. Requires a detailTemplate or childGrid. | ViewStateMutation | No | No |
| `pinRows` | Pins rows of the current view to the top by primary key. Requires a primary key. | ViewStateMutation | No | No |
| `unpinRows` | Unpins pinned rows by primary key. | ViewStateMutation | No | No |
| `enableToolbarItems` | Enables or disables toolbar items by id. Requires a toolbar. | ViewStateMutation | No | No |
| `cancelEdit` | Cancels the current edit and discards the unsaved changes. Requires editing. | ViewStateMutation | No | No |
| `setCellValue` | Updates one cell by primary key and field and returns the key; dryRun previews. Needs the field in webMcpSettings.writableFields. | DataMutation | Yes | Yes |
| `setRowData` | Updates fields of one record by primary key; dryRun previews. Needs every field in webMcpSettings.writableFields. | DataMutation | Yes | Yes |
| `addRecord` | Inserts a record at an optional 0-based index; dryRun previews. Needs every field in webMcpSettings.writableFields and editSettings.allowAdding. | DataMutation | Yes | Yes |
| `deleteRecord` | Deletes one record by primary key or by record data; dryRun previews. Requires editSettings.allowDeleting. Not limited by writableFields. | DataMutation | Yes | Yes |
| `saveBulkChanges` | Sets the same field values on several records in one step (default: the selected rows); dryRun previews. Needs every changed field in webMcpSettings.writableFields. | DataMutation | Yes | Yes |
| `changeDataSource` | Replaces the data with an array of records (never a URL) and optional column fields. | DataMutation | No | Yes |
| `setCellFormula` | Sets or clears a cell formula by primary key and field. Needs the field in webMcpSettings.writableFields; dryRun previews. | DataMutation | No | Yes |
| `startEdit` | Starts editing the selected row, or a given row and field in batch mode. Requires editSettings.allowEditing. | DataMutation | No | No |
| `endEdit` | Saves the open edit and returns whether an edit is still open. | DataMutation | No | No |
| `undoEdit` | Undoes the last edit. Requires editSettings.enableUndoRedo. | DataMutation | No | No |
| `redoEdit` | Redoes the last undone edit. Requires editSettings.enableUndoRedo. | DataMutation | No | No |
| `reorderRows` | Moves rows by 0-based index to a new position. Requires allowRowDragAndDrop. | DataMutation | No | No |
| `exportGrid` | Exports the Grid to Excel, CSV or PDF through the normal download path. Requires the matching export module. | ExternalExport | Yes | Yes |
| `printData` | Prints the Grid through the browser print dialog. | ExternalExport | No | Yes |
| `copySelection` | Copies the selected rows or cells to the clipboard, optionally with headers. Requires the Clipboard module. | ExternalExport | No | Yes |

## Integrating WebMCP tools

Follow these steps to integrate WebMCP support into Syncfusion® JavaScript (ES5) controls. The following example uses the Data Grid control.

### Step 1: Create an application

Create an application and integrate the Syncfusion® JavaScript (ES5) Data Grid control using the [getting started](https://help.syncfusion.com/grid-sdk/javascript/data-grid/getting-started) guide. After completing the setup, follow the steps below to enable WebMCP integration.

### Step 2: Enable WebMCP support

Import the WebMCP module and inject it into the control to make WebMCP functionality available.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Essential JS 2</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
</head>

<body>
    <div>
        <div id="Grid"></div>
    </div>
<script>
ej.grids.Grid.Inject(ej.grids.WebMcpGrid);

var grid = new ej.grids.Grid({
    dataSource: data,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', width: 120, textAlign: 'Right', type: 'number' },
        { field: 'CustomerName', headerText: 'Customer Name', width: 140, type: 'string' },
        { field: 'OrderDate', headerText: 'Order Date', width: 140, format: 'yMd', textAlign: 'Right' },
        { field: 'Freight', headerText: 'Freight', width: 120, textAlign: 'Right', format: 'C' },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 140, type: 'string' },
    ]
});
grid.appendTo('#Grid');
</script>
</body>
</html>
```

### Step 3: Register control tools

Set the [enableWebMcp](https://ej2.syncfusion.com/javascript/documentation/api/grid/index-default#enablewebmcp) property to `true` to register the control's available tools with the WebMCP runtime.

When `enableWebMcp` is enabled, supported control tools are automatically registered with the WebMCP runtime and become discoverable by authorized WebMCP clients.

For example, a Data Grid control may expose tools such as:

- getSelectedRecords
- sortByColumn
- clearFiltering

An AI assistant can discover these tools and invoke them based on user prompts.

```html
<script>
ej.grids.Grid.Inject(ej.grids.WebMcpGrid);

var grid = new ej.grids.Grid({
    dataSource: data,
    enableWebMcp: true,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', width: 120, textAlign: 'Right', type: 'number' },
        { field: 'CustomerName', headerText: 'Customer Name', width: 140, type: 'string' },
        { field: 'OrderDate', headerText: 'Order Date', width: 140, format: 'yMd', textAlign: 'Right' },
        { field: 'Freight', headerText: 'Freight', width: 120, textAlign: 'Right', format: 'C' },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 140, type: 'string' },
    ]
});
grid.appendTo('#Grid');
</script>
```

### Step 4: Customize tool registration

Use the [webMcpSettings](https://ej2.syncfusion.com/javascript/documentation/api/grid/index-default#webmcpsettings) property to customize how WebMCP tools are exposed to AI agents. The available settings are listed below.

| Property | Description |
|-----------|-------------|
| `name` | Prefix applied to registered tool names. If name: `sales` is specified, a tool such as `getSelectedRecords` may be registered as `sales_getSelectedRecords`, allowing multiple control instances to coexist without tool name conflicts. |
| `tools` | List of tool names to expose. Any supported tools not included in this list will not be registered. |
| `exposedTo` | List of trusted domains that are allowed to interact with the control through WebMCP. |

```html
<script>
ej.grids.Grid.Inject(ej.grids.WebMcpGrid);

var grid = new ej.grids.Grid({
    dataSource: data,
    enableWebMcp: true,
    webMcpSettings: {
        name: 'sales',
        tools: ['getSelectedRecords', 'sortByColumn', 'clearFiltering'],
        exposedTo: ['https://www.syncfusion.com/']
    },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', width: 120, textAlign: 'Right', type: 'number' },
        { field: 'CustomerName', headerText: 'Customer Name', width: 140, type: 'string' },
        { field: 'OrderDate', headerText: 'Order Date', width: 140, format: 'yMd', textAlign: 'Right' },
        { field: 'Freight', headerText: 'Freight', width: 120, textAlign: 'Right', format: 'C' },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 140, type: 'string' },
    ]
});
grid.appendTo('#Grid');
</script>
```

> Use the `exposedTo` property to restrict WebMCP access to trusted domains. This helps prevent unauthorized WebMCP clients from interacting with control tools.

### Step 5: Monitor and control tool execution

The [beforeWebMcpToolExecute](https://ej2.syncfusion.com/javascript/documentation/api/grid/index-default#beforewebmcptoolexecute) event is triggered before a tool is executed. This event allows:

- Audit tool usage.
- Validate incoming requests.
- Cancel tool execution when necessary.
- Apply custom business rules and security policies.

> AI-generated requests should always be validated before executing write operations. Restrict access using `exposedTo` and perform additional authorization checks within `beforeWebMcpToolExecute` when modifying application data.

```html
<script>
ej.grids.Grid.Inject(ej.grids.WebMcpGrid);

var grid = new ej.grids.Grid({
    dataSource: data,
    enableWebMcp: true,
    webMcpSettings: {
        name: 'sales',
        tools: ['getSelectedRecords', 'sortByColumn', 'clearFiltering'],
        exposedTo: ['https://www.syncfusion.com/']
    },
    beforeWebMcpToolExecute: function (args) {
        // Example business rule
        if (args.toolName.indexOf('clearFiltering') !== -1) {
            var hour = new Date().getHours();

            if (hour < 9 || hour > 17) {
                args.cancel = true;
                console.log(
                    'Clear filter action is allowed only between 9:00 AM and 5:00 PM.'
                );
            }
        }
    },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', width: 120, textAlign: 'Right', type: 'number' },
        { field: 'CustomerName', headerText: 'Customer Name', width: 140, type: 'string' },
        { field: 'OrderDate', headerText: 'Order Date', width: 140, format: 'yMd', textAlign: 'Right' },
        { field: 'Freight', headerText: 'Freight', width: 120, textAlign: 'Right', format: 'C' },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 140, type: 'string' },
    ]
});
grid.appendTo('#Grid');
</script>
```

## Best practices

- Expose only the tools required by the application.
- Use the `name` property when multiple control instances exist on the same page.
- Configure `exposedTo` to limit access to trusted domains.
- Monitor tool activity through the `beforeWebMcpToolExecute` event.
- Apply application-specific validation before executing tool operations.

## Explore the demo

Explore the Syncfusion® JavaScript (ES5) Data Grid control with WebMCP integration through this [demo](https://demos.syncfusion.com/grid-sdk/data-grid/webmcp/index.html).