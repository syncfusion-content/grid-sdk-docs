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

WebMCP integrates seamlessly into a [Blazor Data Grid](https://www.syncfusion.com/blazor-components/blazor-datagrid) application with minimal configuration.

### Prerequisites

Ensure the following before integrating WebMCP:

- Syncfusion Data Grid component is installed and configured [Getting Started](https://help.syncfusion.com/grid-sdk/blazor/data-grid/getting-started-with-web-app)
- A Chromium-based browser with the WebMCP origin trial or chrome://flags/#enable-webmcp enabled. As the API is experimental, browser version support should be verified.

## Getting Started

### Step 1: Configure the Browser

Before using WebMCP in a local environment, enable the feature flag and install the browser extension:

1. **Enable WebMCP Flag**
   - Enable WebMCP for testing via `chrome://flags/`
   - Click **"Relaunch"** to restart Chrome

2. **Install WebMCP Extension**
   - Search for **"WebMCP - Model Context Tool Inspector"** in [Chrome Web Store](https://chromewebstore.google.com/detail/webmcp-model-context-tool/gbpdfapgefenggkahomfgkhfehlcenpd)
   - Click **"Add to Chrome"**
   - Pin the extension icon to the toolbar.

3. **Configure Gemini API Key**
   - Visit [Google AI Studio](https://aistudio.google.com/app/apikey) to create or copy an API key
   - Open the WebMCP extension → paste the API key
   - Extension is now ready to use

### Step 2: Import the Required Namespace

Add the following namespace to the Razor component:

```
@using Syncfusion.Blazor.Grids
```

### Step 3: Enable WebMCP

Set the `EnableWebMcp` property to `true` in the SfGrid configuration:

```
<SfGrid
    DataSource="@Orders"
    EnableWebMcp="true"
    AllowSorting="true"
    AllowFiltering="true">
</SfGrid>
```

### Step 4: Register Tools

Set the `GridWebMcpSettings` property to register the available tools in the control level:

```
<SfGrid
    DataSource="@Orders"
    EnableWebMcp="true"
    AllowSorting="true"
    AllowFiltering="true">

    <GridWebMcpSettings Name="SalesGrid" />

    <GridColumns>
        <GridColumn Field="OrderID" HeaderText="Order ID" IsPrimaryKey="true" Width="120"></GridColumn>
        <GridColumn Field="CustomerID" HeaderText="Customer" Width="150"></GridColumn>
        <GridColumn Field="ShipCountry" HeaderText="Country" Width="150"></GridColumn>
    </GridColumns>
</SfGrid>
```

### Step 5: Test the Setup

**Test with a Local Setup**
- Run the application locally and open it in a Chromium-based browser.
- Launch the WebMCP extension and confirm that it connects to the application successfully.
- Verify that the registered tools are displayed with the chosen prefix.
- Try a sample prompt that matches the data scenario to validate tool execution and response behavior.

**Sample Prompts**
Here are realistic natural language prompts can be test with the WebMCP extension:

{% promptcards %}
{% promptcard Filter Records %}
Filter the grid to show all orders from the USA and then display the first 5 records
{% endpromptcard %}
{% endpromptcards %}

{% promptcards %}
{% promptcard Sorting and Selection %}
Sort the grid by OrderID in descending order and select the top 3 records
{% endpromptcard %}
{% endpromptcards %}

{% promptcards %}
{% promptcard Export Data %}
Export the currently filtered grid data to an Excel file named "SalesReport"
{% endpromptcard %}
{% endpromptcards %}

## Tool Reference

WebMCP tools are organized by category. The tables below provide an overview of all available tools. For complete input/output schemas, call `GetWebMcpToolsAsync()` programmatically.

## Data Retrieval Tools

| Tool Name | Type | Condition | Description |
|-----------|------|-----------|-------------|
| getSelectedRecords | Read | Always | Get selected row records from the grid. |
| getSelectedRowIndexes | Read | Always | Get indexes of selected rows. |
| getFilteredRecords | Read | Always | Get records matching current filters. |
| getCurrentViewRecords | Read | Always | Get visible records after sort, filter, and grouping. |
| getColumnByField | Read | Always | Get column definition by field name. |
| getVisibleColumns | Read | Always | Get list of visible columns. |

---

## Filtering Tools

| Tool Name | Type | Condition | Description |
|-----------|------|-----------|-------------|
| filterByColumn | Write | Always | Filter the grid by column value. Supports multiple filter operators and predicates. |
| clearFiltering | Write | Always | Clear column filters. Pass fieldNames to clear specific columns only; omit to clear all. |

---

## Navigation Tools

| Tool Name | Type | Condition | Description |
|-----------|------|-----------|-------------|
| navigateToPage | Write | Always | Switch the grid's current page using action='goto' with pageNo, or action='next'/'previous'/'first'/'last'. |

---

## Selection Tools

| Tool Name | Type | Condition | Description |
|-----------|------|-----------|-------------|
| selectRows | Write | Always | Select one or more rows by positional index or field-value lookup. Supports both single and multiple selection modes. |
| selectCell | Write | Always | Select a single cell by row and column 1-based indexes. Requires SelectionMode.Cell or Both. |
| selectCells | Write | Always | Select multiple cells by (row, column) 1-based indexes. Each entry includes rowIndex and cellIndex. |
| selectCellsByRange | Write | Always | Select a rectangular range of cells from start to end index (1-based, inclusive). |
| clearSelection | Write | Always | Clear all row and cell selections. |
| clearCellSelection | Write | Always | Clear cell selection only. Row selection is left unchanged. |

---

## Data Editing Tools

| Tool Name | Type | Condition | Description |
|-----------|------|-----------|-------------|
| setCellValue | Write | Always | Set one cell by primary key and field, or apply bulk cell updates. The grid must define a primary-key column. |
| setRowData | Write | Always | Update entire row data by key and rowData object. Set preventDataUpdate=true to refresh UI without updating data source. |
| crudLifecycle | Write | Always | Execute CRUD lifecycle actions: startEdit, endEdit, closeEdit, addRecord, deleteRecord. |
| deleteRow | Write | Requires AllowDeleting=true | Delete a row from the data view using its 1-based data-row index. |

---

## Export Tools

| Tool Name | Type | Condition | Description |
|-----------|------|-----------|-------------|
| excelExport | Read | Always | Export grid data as xlsx or csv. Optional asMemoryStream=true returns base64 bytes instead of triggering browser download. |
| pdfExport | Read | Requires AllowPdfExport=true | Export the grid to PDF with optional settings for page selection, headers, and column overflow. |

---

## Rendering Control Tools

| Tool Name | Type | Condition | Description |
|-----------|------|-----------|-------------|
| preventRender | Write | Always | Enable or disable grid rendering. Omit or set true to suppress rendering; set false to re-enable it. |

---

## Sorting Tools

| Tool Name | Type | Condition | Description |
|-----------|------|-----------|-------------|
| sortByColumn | Write | Always | Sort the grid by a single column. direction must be 'Ascending' or 'Descending'. multiSort=true appends to existing sorts. |
| sortColumns | Write | Always | Sort the grid by multiple columns at once (additive — keeps existing sorts). Each entry includes field and direction. |
| sortColumnsWithClear | Write | Always | Sort by multiple columns, optionally clearing prior sorts first. Use clearPreviousSort=true to replace the sort stack. |
| clearSorting | Write | Always | Clear all currently active sort columns and restore natural order. |
| clearSortingByFields | Write | Always | Clear sort only on specified column field names. Other sorted columns retain their sort direction. |

---

## Search & Highlight Tools

| Tool Name | Type | Condition | Description |
|-----------|------|-----------|-------------|
| searchText | Write | Always | Toolbar-style search that filters rows to match the supplied search key. Pass empty string to clear the active search. |
| findAndHighlight | Read | Always | Find and Highlight: highlights every cell containing findKey, or navigates active match. action='highlight'/'reset'/'next'/'previous'/'goto'. |

---

## Grouping Tools

| Tool Name | Type | Condition | Description |
|-----------|------|-----------|-------------|
| groupColumn | Write | Requires AllowGrouping=true | Group grid by a column. |

---

## Batch Editing Tools

| Tool Name | Type | Condition | Description |
|-----------|------|-----------|-------------|
| batchEdit | Write | Requires EditMode.Batch | Execute batch edit actions: inspect (get dirty rows), isDirty (check state), updateRow (set cell), apply (save changes). |

---

## State Management Tools

| Tool Name | Type | Condition | Description |
|-----------|------|-----------|-------------|
| undoRedo | Write | Requires EnableUndoRedo=true | Manage undo/redo: action='undoAll' undoes all changes, 'redoAll' redoes all, 'clear' clears the stack. |
| persistence | Write | Always | Get, set, or reset grid state persistence. action='get' (read current state), 'set' (apply saved state), 'reset' (clear saved state). |

---

## Column Reordering Tools

| Tool Name | Type | Condition | Description |
|-----------|------|-----------|-------------|
| reorderColumns | Write | Requires AllowReordering=true | Reorder columns by field name. Pass fromFieldName and toFieldName for single move, or fromFieldNames (array) and toFieldName for bulk moves. |

---

## Column Visibility Tools

| Tool Name | Type | Condition | Description |
|-----------|------|-----------|-------------|
| hideColumns | Write | Always | Hide one or more columns by field name. |
| showColumns | Write | Always | Show one or more columns by field name. |

---

## Column Resizing Tools

| Tool Name | Type | Condition | Description |
|-----------|------|-----------|-------------|
| setColumnWidth | Write | Always | Set the width of a column by field name. Width is in pixels (e.g., 200). |

---

---

## Code Examples

### Basic Setup

Set up a Data Grid with WebMCP enabled and register tools on creation.

```
@using Syncfusion.Blazor.Grids

<div style="height:100%; width:100%;">
    <SfGrid
        @ref="GridInstance"
        DataSource="@Orders"
        EnableWebMcp="true"
        AllowSorting="true"
        AllowFiltering="true"
        AllowPaging="true">

        <GridWebMcpSettings Name="OrdersGrid" />

        <GridPageSettings PageSize="10"></GridPageSettings>
        <GridSelectionSettings Mode="SelectionMode.Both" Type="SelectionType.Multiple"></GridSelectionSettings>

        <GridColumns>
            <GridColumn Field="OrderID" HeaderText="Order ID" IsPrimaryKey="true" Width="120"></GridColumn>
            <GridColumn Field="CustomerID" HeaderText="Customer" Width="150"></GridColumn>
            <GridColumn Field="ShipCountry" HeaderText="Country" Width="150"></GridColumn>
            <GridColumn Field="Freight" HeaderText="Freight" Width="120"></GridColumn>
        </GridColumns>
    </SfGrid>
</div>

@code {
    private SfGrid<Order>? GridInstance;
    private List<Order>? Orders;

    protected override async Task OnInitializedAsync()
    {
        Orders = await GetOrdersAsync();
    }

    private async Task<List<Order>> GetOrdersAsync()
    {
        // Load data here
        return new List<Order>();
    }
}
```

### Custom Tool Configuration

Configure WebMCP tools with custom descriptions and enable/disable specific tools.

```
<SfGrid DataSource="@Orders" EnableWebMcp="true">
    <GridWebMcpSettings Name="CustomGrid">
        <GridWebMcpTools>
            <GridWebMcpTool Command="GridWebMcpToolCommand.FilterByColumn" Description="Filter grid records by a column value." />
            <GridWebMcpTool Command="GridWebMcpToolCommand.GetVisibleColumns" Description="List visible grid columns." Enabled="false" />
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
}
```

## Troubleshooting

### Q: I get "WebMCP not available" or "modelContext is undefined"

**A:**
1. Verify WebMCP flag is enabled:
   - Open `chrome://flags/#enable-webmcp-testing`
   - Confirm it shows "Enabled"
   - Fully restart Chrome (not just reload the page)

2. Check that the Chrome version is up-to-date (WebMCP requires recent Chromium)

3. Ensure testing is performed in a secure context (HTTPS or localhost)

---

### Q: The extension doesn't show my registered tools

**A:**
1. Verify EnableWebMcp="true" is set on the SfGrid component.
2. Confirm <GridWebMcpSettings Name="YourPrefix" /> is configured.
3. Open DevTools (F12) → Console, check for errors
4. Try refreshing the page and opening the extension again
5. Verify the tool prefix is correct (check console logs)

---

### Q: Tools are registered but don't execute

**A:**
1. Check that the Gemini API key is valid:
   - Visit [Google AI Studio](https://aistudio.google.com/app/apikey)
   - Create a new key if needed
   - Re-enter it in the WebMCP extension

2. Verify the extension has permission to access the site:
   - Right-click WebMCP extension → Manage extension
   - Ensure "Allow on this site" is enabled

---

### Q: "Permission denied" or "Secure context required"

**A:**
- WebMCP requires HTTPS in production or localhost for development
- If using cross-origin tools, both sites must be HTTPS
- Test locally using localhost URL.

---

## See Also

* [Getting Started](https://help.syncfusion.com/grid-sdk/blazor/data-grid/getting-started-with-web-app)