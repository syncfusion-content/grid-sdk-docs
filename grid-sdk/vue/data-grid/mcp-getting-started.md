---
layout: post
title: WebMCP tool integration for Vue components | Syncfusion
description: Learn how to integrate WebMCP with Syncfusion Vue components to enable AI interaction, configure tools, manage access, and monitor execution.
control: WebMCP
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---
 
# WebMCP Tools Integration for Syncfusion® Vue DataGrid
 
WebMCP allows AI assistants running in the browser to interact directly with Syncfusion® components through natural language prompts.
 
Instead of relying on DOM inspection or simulating user interactions, AI assistants can interact directly with component APIs through WebMCP tools. This approach provides more reliable and accurate results.
 
Once connected, an AI assistant can perform tasks such as:
 
- Sort or filter Grid data.
- Clear sorted records
- Clear filtered records.
 
> WebMCP is currently an experimental browser capability and requires a Chromium-based browser with WebMCP support enabled. Availability and required browser flags may change as the specification evolves.
 
## Prerequisites
 
- Syncfusion® Vue components
- Chromium-based Browser (like Chrome, Edge, or Brave)
- [Node.js 24+](https://nodejs.org/en) (LTS recommended).
- WebMCP browser extension installed
- AI API key configured in the extension
 
## WebMCP setup
 
Before you can use WebMCP locally, enable the feature flag and install the browser extension:
 
1. Enable `WebMCP for testing` flag via `chrome://flags/`. Click **"Relaunch"** to restart Chrome.
 
2. Search for **"WebMCP - Model Context Tool Inspector"** in [Chrome Web Store](https://chromewebstore.google.com/detail/webmcp-model-context-tool/gbpdfapgefenggkahomfgkhfehlcenpd). Click **"Add to Chrome"**.
 
3. Visit [Google AI Studio](https://aistudio.google.com/app/apikey) to create or copy an API key. Open the WebMCP extension → paste your API key.
 
The WebMCP extension is now configured and ready to interact with WebMCP-enabled Syncfusion® components.

## Integrating WebMCP tools

Follow these steps to integrate WebMCP support into Syncfusion® Vue components. The following example uses the DataGrid component.

### Step 1: Set up the Vite project

Create a Vue Vite application and integrate the Syncfusion® Vue DataGrid component by following the [Getting Started with Vue DataGrid](https://help.syncfusion.com/grid-sdk/vue/data-grid/vue-3-getting-started) guide. After completing the setup, follow the steps below to enable WebMCP integration.

### Step 2: Enable WebMCP support

Import the WebMCP module and inject it into the component to make WebMCP functionality available.

```html
<template>
    <ejs-grid :dataSource='data' :allowSorting='true' :allowFiltering='true' height='315px'>
        <e-columns>
            <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
            <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
            <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
            <e-column field='ShipName' headerText='Ship Name' width=120></e-column>
        </e-columns>
    </ejs-grid>
</template>

<script setup>
import { Grid, GridComponent, ColumnsDirective, ColumnDirective, Sort, Filter, WebMcpGrid } from "@syncfusion/ej2-vue-grids";

Grid.Inject(WebMcpGrid);

components: {
"ejs-grid":GridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective
},
</script>
```

### Step 3: Register component tools

Set the [enableWebMcp](https://ej2.syncfusion.com/vue/documentation/api/grid/index-default#enablewebmcp) property to `true` to register the component's available tools with the WebMCP runtime.

When `enableWebMcp` is enabled, supported component tools are automatically registered with the WebMCP runtime and become discoverable by authorized WebMCP clients.

For example, a DataGrid component may expose tools such as:

- getSelectedRecords
- sortByColumn
- clearFiltering

An AI assistant can discover these tools and invoke them based on user prompts.

```html
<template>
    <ejs-grid :dataSource='data' :enableWebMcp="true" :allowSorting='true' :allowFiltering='true' height='315px'>
        <e-columns>
            <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
            <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
            <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
            <e-column field='ShipName' headerText='Ship Name' width=120></e-column>
        </e-columns>
    </ejs-grid>
</template>

<script setup>
import { Grid, GridComponent, ColumnsDirective, ColumnDirective, Sort, Filter, WebMcpGrid } from "@syncfusion/ej2-vue-grids";

Grid.Inject(WebMcpGrid);

components: {
"ejs-grid":GridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective
},
</script>
```

### Step 4: Customize tool registration

Use the [webMcpSettings](https://ej2.syncfusion.com/vue/documentation/api/grid/index-default#webmcpsettings) property to customize how WebMCP tools are exposed to AI agents. The available settings are listed below.

| Property | Description |
|-----------|-------------|
| `name` | Prefix applied to registered tool names. If name: `sales` is specified, a tool such as `getSelectedRecords` may be registered as `sales_getSelectedRecords`, allowing multiple component instances to coexist without tool name conflicts. |
| `tools` | List of tool names to expose. Any supported tools not included in this list will not be registered. |
| `exposedTo` | List of trusted domains that are allowed to interact with the component through WebMCP. |

```html
<template>
    <ejs-grid :dataSource='data' :enableWebMcp="true" :webMcpSettings="webMcpSettings" :allowSorting='true' :allowFiltering='true' height='315px'>
        <e-columns>
            <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
            <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
            <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
            <e-column field='ShipName' headerText='Ship Name' width=120></e-column>
        </e-columns>
    </ejs-grid>
</template>

<script setup>
import { Grid, GridComponent, ColumnsDirective, ColumnDirective, Sort, Filter, WebMcpGrid } from "@syncfusion/ej2-vue-grids";

Grid.Inject(WebMcpGrid);

components: {
"ejs-grid":GridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective
},

const webMcpSettings = {
  name: 'sales',
  tools: ['getSelectedRecords', 'sortByColumn', 'clearFiltering'],
  exposedTo: ['https://www.syncfusion.com/']
};
</script>
```

> Use the `exposedTo` property to restrict WebMCP access to trusted domains. This helps prevent unauthorized WebMCP clients from interacting with your component tools.

### Step 5: Monitor and control tool execution

The [beforeWebMcpToolExecute](https://ej2.syncfusion.com/vue/documentation/api/grid/index-default#beforewebmcptoolexecute) event is triggered before a tool is executed. This event allows you to:

- Audit tool usage.
- Validate incoming requests.
- Cancel tool execution when necessary.
- Apply custom business rules and security policies.

> AI-generated requests should always be validated before executing write operations. Restrict access using `exposedTo` and perform additional authorization checks within `beforeWebMcpToolExecute` when modifying application data.

```html
<template>
    <ejs-grid :dataSource='data' :enableWebMcp="true" :webMcpSettings="webMcpSettings" :allowSorting='true' :allowFiltering='true' height='315px' :beforeWebMcpToolExecute="beforeWebMcpToolExecute">
        <e-columns>
            <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
            <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
            <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
            <e-column field='ShipName' headerText='Ship Name' width=120></e-column>
        </e-columns>
    </ejs-grid>
</template>

<script setup>
import { Grid, GridComponent, ColumnsDirective, ColumnDirective, Sort, Filter, WebMcpGrid } from "@syncfusion/ej2-vue-grids";

Grid.Inject(WebMcpGrid);

components: {
"ejs-grid":GridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective
},

const webMcpSettings = {
  name: 'sales',
  tools: ['getSelectedRecords', 'sortByColumn', 'clearFiltering'],
  exposedTo: ['https://www.syncfusion.com/']
};

const beforeWebMcpToolExecute = (args) => {
  // Example business rule
  if (args.toolName.includes('clearFiltering')) {
    const hour = new Date().getHours();
    if (hour < 9 || hour > 17) {
      args.cancel = true;
      console.log(
        'Clear filter action is allowed only between 9:00 AM and 5:00 PM.'
      );
    }
  }
};
</script>
```

## Best practices

- Expose only the tools required by your application.
- Use the `name` property when multiple component instances exist on the same page.
- Configure `exposedTo` to limit access to trusted domains.
- Monitor tool activity through the `beforeWebMcpToolExecute` event.
- Apply application-specific validation before executing tool operations.

## Explore the demo

Explore the Syncfusion® Vue DataGrid component with WebMCP integration through this [demo](https://demos.syncfusion.com/grid-sdk/data-grid/webmcp/index.html).