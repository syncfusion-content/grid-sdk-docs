---
layout: post
title: WebMCP tool integration for JavaScript (ES5) controls | Syncfusion
description: Learn how to integrate WebMCP with Syncfusion JavaScript (ES5) controls to enable AI interaction, configure tools, manage access, and monitor execution.
control: WebMCP
platform: ej2-javascript
documentation: ug
domainurl: ##DomainURL##
---
 
# WebMCP Tools Integration for Syncfusion® JavaScript DataGrid
 
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
 
Before you can use WebMCP locally, enable the feature flag and install the browser extension:
 
1. Enable `WebMCP for testing` flag via `chrome://flags/`. Click **"Relaunch"** to restart Chrome.
 
2. Search for **"WebMCP - Model Context Tool Inspector"** in [Chrome Web Store](https://chromewebstore.google.com/detail/webmcp-model-context-tool/gbpdfapgefenggkahomfgkhfehlcenpd). Click **"Add to Chrome"**.
 
3. Visit [Google AI Studio](https://aistudio.google.com/app/apikey) to create or copy an API key. Open the WebMCP extension → paste your API key.
 
The WebMCP extension is now configured and ready to interact with WebMCP-enabled Syncfusion® controls.

## Integrating WebMCP tools

Follow these steps to integrate WebMCP support into Syncfusion® JavaScript (ES5) controls. The following example uses the DataGrid control.

### Step 1: Create an application

Create an application and integrate the Syncfusion® JavaScript (ES5) DataGrid control by following the [Getting Started with JavaScript (ES5) DataGrid](https://help.syncfusion.com/grid-sdk/javascript/data-grid/getting-started) guide. After completing the setup, follow the steps below to enable WebMCP integration.

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

For example, a DataGrid control may expose tools such as:

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

> Use the `exposedTo` property to restrict WebMCP access to trusted domains. This helps prevent unauthorized WebMCP clients from interacting with your control tools.

### Step 5: Monitor and control tool execution

The [beforeWebMcpToolExecute](https://ej2.syncfusion.com/javascript/documentation/api/grid/index-default#beforewebmcptoolexecute) event is triggered before a tool is executed. This event allows you to:

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

- Expose only the tools required by your application.
- Use the `name` property when multiple control instances exist on the same page.
- Configure `exposedTo` to limit access to trusted domains.
- Monitor tool activity through the `beforeWebMcpToolExecute` event.
- Apply application-specific validation before executing tool operations.

## Explore the demo

Explore the Syncfusion® JavaScript (ES5) DataGrid control with WebMCP integration through this [demo](https://demos.syncfusion.com/grid-sdk/data-grid/webmcp/index.html).