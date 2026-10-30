---
layout: post
title: WebMCP Integration in Blazor Grid | Syncfusion®
description: WebMCP integration in Blazor DataGrid explains setup, tool registration, configuration, and API reference with code examples.
platform: grid-sdk
control: WebMCP
documentation: ug
---

# WebMCP Integration in Blazor Data Grid

## Integration

WebMCP can be integrated into a [Blazor Data Grid](https://www.syncfusion.com/blazor-components/blazor-datagrid) application with minimal configuration, enabling AI-driven interactions through the tools and functionality exposed by the Data Grid.

### Prerequisites

Ensure the following before integrating WebMCP:

- The Syncfusion Data Grid component is installed and configured as described in [Getting Started](https://help.syncfusion.com/grid-sdk/blazor/data-grid/getting-started-with-web-app).
- A Chromium-based browser with either the WebMCP origin trial or the `chrome://flags/#enable-webmcp` flag enabled. Because the API is experimental, verify browser-version support.

## Getting Started

### Step 1: Configure the browser

Before using WebMCP in a local environment, enable the feature flag and install the browser extension:

1. **Enable the WebMCP flag**
   - Enable the WebMCP feature for testing in `chrome://flags/`.
   - Click **Relaunch** to restart Chrome.

2. **Install the WebMCP extension**
   - Search for **WebMCP - Model Context Tool Inspector** in the [Chrome Web Store](https://chromewebstore.google.com/detail/webmcp-model-context-tool/gbpdfapgefenggkahomfgkhfehlcenpd).
   - Click **Add to Chrome**.
   - Pin the extension icon to the toolbar.

3. **Configure a Gemini API key**
   - Visit [Google AI Studio](https://aistudio.google.com/app/apikey) to create or copy an API key.
   - Open the WebMCP extension and paste the API key.
   - The extension is now ready to use.

### Step 2: Import the required namespace

Add the following namespace to the Razor component:

```razor
@using Syncfusion.Blazor.Grids
```

### Step 3: Enable WebMCP

Set the `EnableWebMcp` property to `true` in the `SfGrid` configuration:

```razor
<SfGrid DataSource="@Orders"
    EnableWebMcp="true"
    AllowSorting="true"
    AllowFiltering="true">
</SfGrid>
```

### Step 4: Register tools

Set the `GridWebMcpSettings` property to register the available tools at the control level:

```razor
@using Syncfusion.Blazor.Grids

    <SfGrid DataSource="@Orders" EnableWebMcp="true" AllowSorting="true" AllowFiltering="true" AllowPaging="true">
        <GridWebMcpSettings Name="SalesGrid">
            <GridWebMcpTool Command="GridWebMcpToolCommand.GetVisibleColumns" Description="List visible Data Grid columns." />
        </GridWebMcpSettings>
        <GridPageSettings PageSize="10"></GridPageSettings>
        <GridSelectionSettings Mode="SelectionMode.Both" Type="SelectionType.Multiple"></GridSelectionSettings>

        <GridColumns>
            <GridColumn Field="OrderID" HeaderText="Order ID" IsPrimaryKey="true" Width="120"></GridColumn>
            <GridColumn Field="CustomerID" HeaderText="Customer" Width="150"></GridColumn>
            <GridColumn Field="ShipCountry" HeaderText="Country" Width="150"></GridColumn>
            <GridColumn Field="Freight" HeaderText="Freight" Width="120"></GridColumn>
        </GridColumns>
    </SfGrid>

@code {
  private List<Order> Orders { get; set; } = new()
    {
        new() { OrderID = 10248, CustomerID = "VINET", ShipCountry = "Reims", Freight = 32.38 },
        new() { OrderID = 10249, CustomerID = "TOMSP", ShipCountry = "Münster", Freight = 11.61 },
        new() { OrderID = 10250, CustomerID = "HANAR", ShipCountry = "Reims", Freight = 65.83 },
        new() { OrderID = 10251, CustomerID = "VICTE", ShipCountry = "Lyon", Freight = 41.34 },
        new() { OrderID = 10252, CustomerID = "SUPRD", ShipCountry = "Charleroi", Freight = 51.30 },
        new() { OrderID = 10253, CustomerID = "HANAR", ShipCountry = "Rio de Janeiro", Freight = 58.17 }
    };

    public class Order
    {
        public int OrderID { get; set; }
        public string CustomerID { get; set; } = string.Empty;
        public string ShipCountry { get; set; } = string.Empty;
        public double Freight { get; set; }
    }
}
```

### Step 5: Test the setup

**Test locally:**
- Run the application locally and open it in a Chromium-based browser.
- Launch the WebMCP extension and confirm that it connects to the application successfully.
- Verify that the registered tools are displayed with the chosen prefix.
- Try a sample prompt that matches the data scenario to validate tool execution and response behavior.

**Sample prompts:**
Here are some realistic natural-language prompts you can try with the WebMCP extension:

{% promptcards %}
{% promptcard Filter Records %}
Filter the Data Grid to show all orders from Reims.
{% endpromptcard %}
{% endpromptcards %}

{% promptcards %}
{% promptcard Sorting and Selection %}
Sort the Data Grid by `OrderID` in descending order and select the top three records.
{% endpromptcard %}
{% endpromptcards %}

{% promptcards %}
{% promptcard Sort Data %}
Arrange the displayed orders by freight amount, from highest to lowest.
{% endpromptcard %}
{% endpromptcards %}

## Tool reference

WebMCP tools are organized by category. The tables below provide an overview of all available tools. The **Condition** column lists any required grid settings or prerequisites; **Always** indicates that no additional grid setting is required. To view the complete input and output schemas, call `GetWebMcpToolsAsync()` programmatically.

**Data retrieval tools**

| Tool Name | Type | Condition | Description |
|-----------|------|-----------|-------------|
| `getSelectedRecords` | Read | Always | Retrieve the selected row records from the Data Grid. |
| `getSelectedRowIndexes` | Read | Always | Retrieve the indexes of the selected rows. |
| `getSelectedRowCellIndexes` | Read | Always | Retrieve the indexes of the selected cells by row and column. |
| `getFilteredRecords` | Read | Always | Retrieve the records that match the current filters. |
| `getCurrentViewRecords` | Read | Always | Retrieve the records in the current view after sorting, filtering, and grouping. |
| `getCellValue` | Read | Always | Retrieve the formatted value of a cell in the current view. |
| `getVisibleColumns` | Read | Always | Retrieve the visible columns. |
| `getHiddenColumns` | Read | Always | Retrieve the hidden columns. |

---

**Filtering tools**

| Tool Name | Type | Condition | Description |
|-----------|------|-----------|-------------|
| `filterByColumn` | Write | Always | Filter the Data Grid by column value. Supports multiple filter operators and predicates. |
| `clearFiltering` | Write | Always | Clear column filters. Pass `fieldNames` to clear specific columns, or omit it to clear all filters. |

---

**Navigation tools**

| Tool Name | Type | Condition | Description |
|-----------|------|-----------|-------------|
| `navigateToPage` | Write | Always | Switch the Data Grid's current page using `action='goto'` with `pageNo`, or use `action='next'`, `action='previous'`, `action='first'`, or `action='last'`. |

---

**Selection tools**

| Tool Name | Type | Condition | Description |
|-----------|------|-----------|-------------|
| `selectRows` | Write | Always | Select one or more rows by positional index or field-value lookup. Supports both single and multiple selection modes. |
| `selectRowsByRange` | Write | Always | Select rows within a specified range. |
| `selectCell` | Write | Requires `SelectionMode.Cell` or `SelectionMode.Both` | Select a single cell by its 1-based row and column indexes. |
| `selectCells` | Write | Requires `SelectionMode.Cell` or `SelectionMode.Both` | Select multiple cells by 1-based row and column indexes. Each entry includes `rowIndex` and `cellIndex`. |
| `selectCellsByRange` | Write | Requires `SelectionMode.Cell` or `SelectionMode.Both` | Select a rectangular range of cells using 1-based, inclusive start and end indexes. |
| `clearSelection` | Write | Always | Clear all row and cell selections. |
| `clearCellSelection` | Write | Always | Clear cell selection only. Row selection is left unchanged. |

---

**Editing tools**

| Tool Name | Type | Condition | Description |
|-----------|------|-----------|-------------|
| `setCellValue` | Write | Requires a primary-key column | Set a cell using its primary key and field, or apply multiple cell updates. |
| `setRowData` | Write | Always | Update an entire row using a key and `rowData` object. Set `preventDataUpdate=true` to refresh the UI without updating the data source. |
| `editCell` | Write | Always | Place a cell into edit mode. |
| `saveCell` | Write | Always | Save the current cell edit. |
| `crudLifecycle` | Write | Always | Execute a CRUD lifecycle action: `startEdit`, `endEdit`, `closeEdit`, `addRecord`, or `deleteRecord`. The `addRecord` and `deleteRecord` actions require `AllowAdding=true` and `AllowDeleting=true`, respectively. |
| `deleteRow` | Write | Requires `AllowDeleting=true` | Delete a row from the data view using its 1-based data-row index. |
| `updateGridData` | Write | Always | Update row or cell data without entering edit mode. |

---

**Export tools**

| Tool Name | Type | Condition | Description |
|-----------|------|-----------|-------------|
| `excelExport` | Read | Always | Export Data Grid data as an XLSX or CSV file. Set `asMemoryStream=true` to return base64-encoded bytes instead of downloading a file in the browser. |
| `pdfExport` | Read | Requires `AllowPdfExport=true` | Export the Data Grid to PDF with optional settings for page selection, headers, and column overflow. |
| `printGrid` | Read | Always | Print the Data Grid with optional page and formatting settings. |

---

**Rendering control tools**

| Tool Name | Type | Condition | Description |
|-----------|------|-----------|-------------|
| `preventRender` | Write | Always | Enable or disable Data Grid rendering. Omit the setting or set it to `true` to suppress rendering; set it to `false` to re-enable rendering. |

---

**Sorting tools**

| Tool Name | Type | Condition | Description |
|-----------|------|-----------|-------------|
| `sortByColumn` | Write | Always | Sort the Data Grid by one column. Set `direction` to `Ascending` or `Descending`. Set `multiSort=true` to append the sort to existing sorts. |
| `sortColumns` | Write | Always | Sort the Data Grid by multiple columns without clearing existing sorts. Each entry includes `field` and `direction`. |
| `sortColumnsWithClear` | Write | Always | Sort the Data Grid by multiple columns. Set `clearPreviousSort=true` to replace the existing sort order. |
| `clearSorting` | Write | Always | Clear all currently active sort columns and restore natural order. |
| `clearSortingByFields` | Write | Always | Clear sort only on specified column field names. Other sorted columns retain their sort direction. |

---

**Search and highlight tools**

| Tool Name | Type | Condition | Description |
|-----------|------|-----------|-------------|
| `searchText` | Write | Always | Search for rows that match the supplied search key. Pass an empty string to clear the active search. |
| `findAndHighlight` | Read | Always | Find and highlight every cell containing `findKey`, or navigate to the active match. Set `action` to `highlight`, `reset`, `next`, `previous`, or `goto`. |

---

**Grouping tools**

| Tool Name | Type | Condition | Description |
|-----------|------|-----------|-------------|
| `groupColumn` | Write | Requires `AllowGrouping=true` | Group the Data Grid by the specified column. |
| `ungroupColumn` | Write | Requires `AllowGrouping=true` | Remove grouping from the specified column. |
| `expandAllGroups` | Write | Requires `AllowGrouping=true` | Expand all grouped rows. |
| `collapseAllGroups` | Write | Requires `AllowGrouping=true` | Collapse all grouped rows. |
| `clearGrouping` | Write | Requires `AllowGrouping=true` | Remove all grouping applied to the Data Grid. |

---

**Batch editing tools**

| Tool Name | Type | Condition | Description |
|-----------|------|-----------|-------------|
| `batchEditWorkflow` | Write | Requires `EditMode.Batch` | Perform batch-edit actions: `inspect` (retrieve modified rows), `isDirty` (check for unsaved changes), `updateRow` (update a cell), and `apply` (save changes). |

---

**State management tools**

| Tool Name | Type | Condition | Description |
|-----------|------|-----------|-------------|
| `undoRedoHistory` | Write | Requires `EnableUndoRedo=true` | Manage undo and redo. Set `action` to `undoAll` to undo all changes, `redoAll` to redo all changes, or `clear` to clear the stack. |
| `persistGridState` | Write | Always | Get, set, or reset the Data Grid's persisted state. Set `action` to `get` (read the current state), `set` (apply a saved state), or `reset` (clear the saved state). |

---

**Column reordering tools**

| Tool Name | Type | Condition | Description |
|-----------|------|-----------|-------------|
| `reorderColumn` | Write | Requires `AllowReordering=true` | Reorder a single column relative to another column. |
| `reorderColumns` | Write | Requires `AllowReordering=true` | Reorder multiple columns by field name. Pass `fromFieldName` and `toFieldName` for a single move, or `fromFieldNames` (an array) and `toFieldName` for bulk moves. |
| `reorderColumnByIndex` | Write | Requires `AllowReordering=true` | Reorder a column from one index to another. |
| `reorderColumnByTargetIndex` | Write | Requires `AllowReordering=true` | Reorder a column to the specified target index. |
| `reorderRow` | Write | Always | Reorder a row within the current view. |

---

**Column visibility tools**

| Tool Name | Type | Condition | Description |
|-----------|------|-----------|-------------|
| `hideColumns` | Write | Always | Hide one or more columns by field name. |
| `showColumns` | Write | Always | Show one or more columns by field name. |

---

**Column management tools**

| Tool Name | Type | Condition | Description |
|-----------|------|-----------|-------------|
| `autoFitColumns` | Write | Always | Automatically adjust column widths to fit their content. |
| `getColumnByField` | Read | Always | Retrieve the column definition for the specified field name. |
| `getColumnByUid` | Read | Always | Retrieve the column definition for the specified unique identifier. |
| `getColumnIndexByField` | Read | Always | Retrieve the index of the column with the specified field name. |
| `getUidByColumnField` | Read | Always | Retrieve the unique identifier of the column with the specified field name. |
| `getColumnFieldNames` | Read | Always | Retrieve the field names of all Data Grid columns. |

---

**Column chooser tools**

| Tool Name | Type | Condition | Description |
|-----------|------|-----------|-------------|
| `openColumnChooser` | Write | Always | Open the column chooser dialog. |

---

**Clipboard tools**

| Tool Name | Type | Condition | Description |
|-----------|------|-----------|-------------|
| `copyToClipboard` | Write | Always | Copy selected rows or cells to the clipboard. |
| `pasteFromClipboard` | Write | Always | Paste clipboard content into the Data Grid. |

---

**UI and refresh tools**

| Tool Name | Type | Condition | Description |
|-----------|------|-----------|-------------|
| `showSpinner` | Write | Always | Display the Data Grid loading indicator. |
| `hideSpinner` | Write | Always | Hide the Data Grid loading spinner. |
| `refreshGrid` | Write | Always | Refresh the Data Grid's data and UI. |
| `refreshColumns` | Write | Always | Refresh the Data Grid column definitions. |
| `refreshHeader` | Write | Always | Refresh the Data Grid header. |
| `focusGrid` | Write | Always | Move focus to the Data Grid. |
| `scrollIntoView` | Write | Always | Scroll the Data Grid to bring the specified cell into view. |

---

**Detail row tools**

| Tool Name | Type | Condition | Description |
|-----------|------|-----------|-------------|
| `expandCollapseDetailRow` | Write | Always | Expand or collapse the detail row associated with a record. |
| `expandAllDetailRows` | Write | Always | Expand all detail rows. |
| `collapseAllDetailRows` | Write | Always | Collapse all detail rows. |

---

**Cell merging tools**

| Tool Name | Type | Condition | Description |
|-----------|------|-----------|-------------|
| `mergeCells` | Write | Always | Merge the specified rectangular range of cells. |
| `mergeCellsBulk` | Write | Always | Merge multiple cell ranges. |
| `unmergeCells` | Write | Always | Remove the merged region anchored at the specified cell. |
| `unmergeCellsBulk` | Write | Always | Remove multiple merged regions. |
| `unmergeAll` | Write | Always | Remove all merged regions. |

---

**State and data tools**

| Tool Name | Type | Condition | Description |
|-----------|------|-----------|-------------|
| `getEditState` | Read | Always | Get metadata about the active edit context. |
| `isDirty` | Read | Always | Check whether the Data Grid has pending batch edits. |
| `updatePageSize` | Write | Always | Update the Data Grid page size. |
| `updateExternalMessage` | Write | Always | Update the pager's external message. |

---

### Custom tool configuration

Configure WebMCP tools with custom descriptions and enable or disable specific tools.

```razor
<SfGrid DataSource="@Orders" EnableWebMcp="true">
    <GridWebMcpSettings Name="CustomGrid">
        <GridWebMcpTools>
            <GridWebMcpTool Command="GridWebMcpToolCommand.FilterByColumn" Description="Filter Data Grid records by a column value." />
            <GridWebMcpTool Command="GridWebMcpToolCommand.GetVisibleColumns" Description="List visible Data Grid columns." Enabled="false" />
            <GridWebMcpTool Command="GridWebMcpToolCommand.Custom" Name="getOrderSummary" Description="Returns a custom order summary" InputSchema="@customSchema" />
        </GridWebMcpTools>
    </GridWebMcpSettings>

    <GridEvents TValue="Order" OnWebMcpExecute="HandleWebMcpToolExecution"></GridEvents>

    <GridColumns>
        <GridColumn Field="OrderID" HeaderText="Order ID" IsPrimaryKey="true" Width="120"></GridColumn>
        <GridColumn Field="CustomerID" HeaderText="Customer" Width="150"></GridColumn>
        <GridColumn Field="ShipCountry" HeaderText="Country" Width="150"></GridColumn>
    </GridColumns>
</SfGrid>

@code {
    private readonly object customSchema = new
    {
        type = "object",
        properties = new { period = new { type = "string", description = "Time period (e.g., 'last30days')" } }
    };

    private async Task HandleWebMcpToolExecution(WebMcpToolExecuteEventArgs args)
    {
        if (args.ToolName == "getOrderSummary")
        {
            args.Result = new
            {
                TotalOrders = 100,
                AverageFreight = 25.50,
                TopCustomer = "ALFKI"
            };
        }

        await Task.CompletedTask;
    }
    private List<Order> Orders { get; set; } = new()
    {
        new() { OrderID = 10248, CustomerID = "VINET", ShipCountry = "Reims" },
        new() { OrderID = 10249, CustomerID = "TOMSP", ShipCountry = "Münster"},
        new() { OrderID = 10250, CustomerID = "HANAR", ShipCountry = "Reims"},
        new() { OrderID = 10251, CustomerID = "VICTE", ShipCountry = "Lyon"},
        new() { OrderID = 10252, CustomerID = "SUPRD", ShipCountry = "Charleroi"},
        new() { OrderID = 10253, CustomerID = "HANAR", ShipCountry = "Rio de Janeiro"}
    };

    public class Order
    {
        public int OrderID { get; set; }
        public string CustomerID { get; set; } = string.Empty;
        public string ShipCountry { get; set; } = string.Empty;
    }
}
```

## See also

- [Getting Started](https://help.syncfusion.com/grid-sdk/blazor/data-grid/getting-started-with-web-app)
