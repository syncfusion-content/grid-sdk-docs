---
layout: post
title: Syncfusion Grid SDK Overview
description: Syncfusion Grid SDK offers high-performance data grids for tabular, hierarchical, and analytical data across multiple platform.
platform: grid-sdk
control: Grid
documentation: ug
domainurl: https://helpstaging.syncfusion.com/grid-sdk
---

# Welcome to Syncfusion Grid SDK

The Syncfusion Grid SDK is a comprehensive suite of high-performance data visualization components designed for displaying, managing, and analyzing large volumes of data. The SDK includes feature-rich components for flat data presentation, hierarchical tree views, and pivot-based analytical reporting. Consistent functionality and user experience are provided across web, desktop, and mobile platforms.

The Syncfusion Grid SDK is available for **JavaScript, TypeScript, Angular, React, Vue, ASP.NET MVC, ASP.NET Core, Blazor, WPF, WinUI, Windows Forms, UWP, .NET MAUI**, and **Flutter** frameworks.

---

## Included Components

### 1. DataGrid

The Syncfusion DataGrid is a powerful and flexible table component for displaying and editing tabular data. It supports a wide range of operations like sorting, filtering, grouping, editing, paging, and exporting, making it suitable for both simple and complex data management scenarios.

**Key Features:**

* **Data Binding** - Connect to any data source including local arrays, JSON, REST APIs, OData, GraphQL, and real-time streams. Supports both client-side and server-side data operations.
* **Sorting** - Sort data by single or multiple columns in ascending or descending order with customizable sort behavior.
* **Filtering** - Filter rows using various filter types such as Excel-like filter, menu-based filter, and checkbox filter for precise data discovery.
* **Grouping** - Group rows by one or more columns and collapse or expand groups to focus on relevant data.
* **Paging** - Split large datasets into pages with configurable page sizes for better readability and performance.
* **Editing** - Edit records using inline row editing, batch editing, dialog editing, and command column modes with built-in validation.
* **Column Resizing and Reordering** - Resize columns by dragging the column borders and reorder them by dragging column headers to a preferred position.
* **Frozen Rows and Columns** - Lock specific rows or columns so they remain visible while scrolling through large datasets.
* **Aggregation** - Display summary values such as sum, average, count, minimum, and maximum at the footer or group footer level.
* **Selection** - Select rows, cells, or columns individually or in bulk using mouse clicks, keyboard shortcuts, or programmatic APIs.
* **Export** - Export grid data to Excel, CSV, and PDF formats for reporting and offline access.
* **Virtual Scrolling** - Render only the visible rows for smooth performance when working with millions of records.
* **Column Chooser** - Let users show or hide columns at runtime through a built-in column picker dialog.
* **Templates** - Customize the look and content of header cells, data cells, rows, and the entire grid using flexible templates.
* **Detail Row** - Display additional details for a row in an expandable section below it without leaving the grid.
* **Hierarchical Grid** - Show parent-child data relationships by embedding a child grid inside each parent row.
* **Context Menu** - Right-click any row or cell to access a context menu with commonly used grid actions.
* **Accessibility** - Built-in keyboard navigation and ARIA support to make the grid fully usable by assistive technologies.
* **Localization** - Translate UI labels and messages to any language with support for right-to-left (RTL) layouts.
* **Responsive Design** - Adaptive column hiding and layout adjustments for mobile and tablet screens.

**Available Platforms:**

{% doccards %}

{% doccard text="React" link="/grid-sdk/react/grid/getting-started" icon="/grid-sdk/images/React.svg" %}

{% doccard text="Angular" link="/grid-sdk/angular/grid/getting-started" icon="/grid-sdk/images/Angular.svg" %}

{% doccard text="Blazor" link="/grid-sdk/blazor/datagrid/getting-started-with-web-app" icon="/grid-sdk/images/Blazor.svg" %}

{% doccard text="JavaScript" link="/grid-sdk/javascript/grid/es5-getting-started" icon="/grid-sdk/images/JavaScript.svg" %}

{% doccard text="TypeScript" link="/grid-sdk/typescript/grid/getting-started" icon="/grid-sdk/images/Typescript.svg" %}

{% doccard text="Vue" link="/grid-sdk/vue/grid/getting-started" icon="/grid-sdk/images/Vue.svg" %}

{% doccard text="ASP.NET Core" link="/grid-sdk/asp-net-core/grid/getting-started" icon="/grid-sdk/images/ASP.NET Core.png" %}

{% doccard text="ASP.NET MVC" link="/grid-sdk/asp-net-mvc/grid/getting-started" icon="/grid-sdk/images/ASP.NET MVC.png" %}

{% doccard text=".NET MAUI" link="/grid-sdk/maui/datagrid/getting-started" icon="/grid-sdk/images/dotnet_maui.svg" %}

{% doccard text="WPF" link="/grid-sdk/wpf/datagrid/getting-started" icon="/grid-sdk/images/WPF.svg" %}

{% doccard text="Windows Forms" link="/grid-sdk/winforms/datagrid/getting-started" icon="/grid-sdk/images/Windows Forms.svg" %}

{% doccard text="WinUI" link="/grid-sdk/winui/datagrid/getting-started" icon="/grid-sdk/images/WinUI.svg" %}

{% doccard text="UWP" link="/grid-sdk/uwp/sfdatagrid/getting-started" icon="/grid-sdk/images/UWP.svg" %}

{% doccard text="Flutter" link="/grid-sdk/flutter/datagrid/getting-started" icon="/grid-sdk/images/Flutter.svg" %}

{% enddoccards %}

---

### 2. Tree Grid

The Syncfusion Tree Grid is a data visualization component designed to represent hierarchical or self-referential data in a structured tabular layout. It enables clear organization of parent-child relationships, allowing data to be displayed in multiple levels within a single view.

**Key Features:**

* **Data Binding** - Bind hierarchical data or self-referential flat data with parent-child relationships. Supports local and remote data sources.
* **Expand and Collapse** - Expand or collapse rows at any level to control the visibility of child records. Supports expand/collapse all operations.
* **Sorting** - Sort data by any column in ascending or descending order, even within nested levels.
* **Filtering** - Filter rows with menu-based or Excel-like filters that also reflect accurately across parent and child rows.
* **Editing** - Add, update, or delete records using row editing, cell editing, dialog editing, or batch editing modes.
* **Paging** - Paginate flat or hierarchical data to improve performance and user experience with large datasets.
* **Column Resizing and Reordering** - Resize columns and rearrange them by dragging headers to preferred positions.
* **Frozen Columns** - Freeze specific columns on the left or right side to keep them visible during horizontal scrolling.
* **Aggregation** - Show aggregated values at the row level or across child records for summarized data insights.
* **Selection** - Select rows or cells individually or in bulk with support for multi-row selection and checkbox selection.
* **Export** - Export tree data to Excel, CSV, or PDF while preserving the hierarchical structure.
* **Column Chooser** - Allow users to toggle column visibility at runtime using the built-in column chooser dialog.
* **Templates** - Customize cell content, row layout, and column headers using flexible template options.
* **Context Menu** - Right-click to access grid actions like add, edit, delete, and more through a context menu.
* **Accessibility** - Supports keyboard navigation and screen reader compatibility through ARIA attributes.
* **Localization** - Fully localizable UI with RTL support for right-to-left languages.

**Available Platforms:**

{% doccards %}

{% doccard text="React" link="/grid-sdk/react/treegrid/getting-started" icon="/grid-sdk/images/React.svg" %}

{% doccard text="Angular" link="/grid-sdk/angular/treegrid/getting-started" icon="/grid-sdk/images/Angular.svg" %}

{% doccard text="Blazor" link="/grid-sdk/blazor/treegrid/getting-started-with-web-app" icon="/grid-sdk/images/Blazor.svg" %}

{% doccard text="JavaScript" link="/grid-sdk/javascript/treegrid/es5-getting-started" icon="/grid-sdk/images/JavaScript.svg" %}

{% doccard text="TypeScript" link="/grid-sdk/typescript/treegrid/getting-started" icon="/grid-sdk/images/Typescript.svg" %}

{% doccard text="Vue" link="/grid-sdk/vue/treegrid/getting-started" icon="/grid-sdk/images/Vue.svg" %}

{% doccard text="ASP.NET Core" link="/grid-sdk/asp-net-core/treegrid/getting-started" icon="/grid-sdk/images/ASP.NET Core.png" %}

{% doccard text="ASP.NET MVC" link="/grid-sdk/asp-net-mvc/treegrid/getting-started" icon="/grid-sdk/images/ASP.NET MVC.png" %}

{% doccard text="WPF" link="/grid-sdk/wpf/treegrid/getting-started" icon="/grid-sdk/images/WPF.svg" %}

{% doccard text="WinUI" link="/grid-sdk/winui/treegrid/getting-started" icon="/grid-sdk/images/WinUI.svg" %}

{% doccard text="UWP" link="/grid-sdk/uwp/tree-grid/getting-started" icon="/grid-sdk/images/UWP.svg" %}

{% enddoccards %}

---

### 3. Pivot Table

The Syncfusion Pivot Table is an analytical data grid for data analysis, reporting, and business intelligence applications. It enables users to summarize, pivot, and explore large datasets by organizing data across rows and columns to create interactive dashboards and advanced analytical solutions.

**Key Features:**

* **Data Binding** - Bind data from flat JSON arrays, CSV files, OLAP cubes, or remote data services. Supports real-time data updates.
* **Pivot Engine** - A built-in high-performance pivot engine that aggregates and organizes data on the client side without needing server-side computation.
* **Field List** - A drag-and-drop field panel that lets users interactively move fields between rows, columns, values, and filters to reshape the pivot layout.
* **Aggregation Types** - Supports sum, count, average, min, max, product, distinct count, and custom aggregate functions for value fields.
* **Filtering** - Filter data by field values, conditions, or date ranges to focus on specific segments of data.
* **Sorting** - Sort row and column headers alphabetically or by value to identify trends and patterns easily.
* **Grouping** - Group date, time, and number fields into custom intervals like years, quarters, months, or custom ranges.
* **Calculated Fields** - Create new virtual fields using mathematical expressions based on existing value fields.
* **Drill Down** - Enables drill down into summary cells to view detailed records and drill up to return to aggregated views.
* **Conditional Formatting** - Apply color-based visual rules to highlight cells based on their values for quick insights.
* **Number Formatting** - Apply custom number formats such as currency, percentage, or decimal precision to value cells.
* **Export** - Export the pivot table to Excel, CSV, or PDF for sharing and reporting purposes.
* **Chart Integration** - Render the pivot data as an interactive chart alongside the pivot table for visual analysis.
* **Toolbar** - Built-in toolbar with quick access to common actions like export, field list, and formatting options.
* **Accessibility** - Keyboard navigable with ARIA attributes for full screen reader support.
* **Localization** - Fully localizable with right-to-left layout support for global applications.

**Available Platforms:**

{% doccards %}

{% doccard text="React" link="/grid-sdk/react/pivot-table/getting-started" icon="/grid-sdk/images/React.svg" %}

{% doccard text="Angular" link="/grid-sdk/angular/pivot-table/getting-started" icon="/grid-sdk/images/Angular.svg" %}

{% doccard text="Blazor" link="/grid-sdk/blazor/pivot-table/getting-started-with-web-app" icon="/grid-sdk/images/Blazor.svg" %}

{% doccard text="JavaScript" link="/grid-sdk/javascript/pivot-table/es5-getting-started" icon="/grid-sdk/images/JavaScript.svg" %}

{% doccard text="TypeScript" link="/grid-sdk/typescript/pivot-table/getting-started" icon="/grid-sdk/images/Typescript.svg" %}

{% doccard text="Vue" link="/grid-sdk/vue/pivot-table/getting-started" icon="/grid-sdk/images/Vue.svg" %}

{% doccard text="ASP.NET Core" link="/grid-sdk/asp-net-core/pivot-table/getting-started" icon="/grid-sdk/images/ASP.NET Core.png" %}

{% doccard text="ASP.NET MVC" link="/grid-sdk/asp-net-mvc/pivot-table/getting-started" icon="/grid-sdk/images/ASP.NET MVC.png" %}

{% doccard text="WPF" link="/grid-sdk/wpf/pivot-grid/getting-started" icon="/grid-sdk/images/WPF.svg" %}

{% doccard text="Windows Forms" link="/grid-sdk/winforms/pivot-grid/getting-started" icon="/grid-sdk/images/Windows Forms.svg" %}

{% doccard text="UWP" link="grid-sdk/uwp/pivot-table/relational/getting-started" icon="/grid-sdk/images/UWP.svg" %}

{% enddoccards %}

---

### 4. Smart DataGrid

The Syncfusion Smart DataGrid combines the power of the standard DataGrid with AI-assisted capabilities. Users can interact with grid data using natural language commands to filter, sort, group, and summarize records without manually configuring each operation. It reduces the steps required to explore data and makes complex queries accessible to all users.

**Key Features:**

* **Natural Language Filtering** - Type a plain language query to filter grid records without building manual filter conditions.
* **AI-Powered Sorting and Grouping** - Ask the grid to sort or group by specific fields using conversational text input.
* **Smart Summarization** - Instantly generate a readable summary of grid data or selected rows using AI.
* **Contextual Suggestions** - Smart suggestions appear during typing, enabling faster and more intuitive data discovery.
* **Seamless Grid Integration** - All AI capabilities work alongside the full feature set of the standard DataGrid.

**Available Platforms:**

{% doccards %}

{% doccard text=".NET MAUI" link="/grid-sdk/maui/smart-datagrid/getting-started" icon="/grid-sdk/images/dotnet_maui.svg" %}

{% doccard text="WPF" link="grid-sdk/wpf/smartdatagrid/getting-started" icon="/grid-sdk/images/WPF.svg" %}

{% enddoccards %}

---

## Key Capabilities

- High-performance rendering for large datasets using virtualization and on-demand data loading.
- Consistent APIs and behavior across web, desktop, and mobile platforms.
- Flexible and deep customization support through templates, styles, and events.
- Built-in data operations including sorting, filtering, grouping, aggregation, and editing.
- Multiple export formats including Excel, CSV, and PDF.
- Full accessibility compliance with keyboard navigation and ARIA support.
- Localization and globalization support with right-to-left layout compatibility.
- AI-assisted data interaction through the Smart DataGrid for faster data exploration.

---

## Sample Browser

Explore live demos of the Grid SDK components:

| Component | Platform | Documentation | Demo |
|-----------|----------|---------------|------|
| DataGrid | JavaScript | [View UG](https://ej2.syncfusion.com/documentation/grid/getting-started) | [View Demos](https://ej2.syncfusion.com/javascript/demos/#/tailwind3/grid/overview.html) |
| DataGrid | React | [View UG](https://ej2.syncfusion.com/react/documentation/grid/getting-started) | [View Demos](https://ej2.syncfusion.com/react/demos/#/tailwind3/grid/overview) |
| DataGrid | Angular | [View UG](https://ej2.syncfusion.com/angular/documentation/grid/getting-started) | [View Demos](https://ej2.syncfusion.com/angular/demos/#/tailwind3/grid/overview) |
| DataGrid | Vue | [View UG](https://ej2.syncfusion.com/vue/documentation/grid/getting-started) | [View Demos](https://ej2.syncfusion.com/vue/demos/#/tailwind3/grid/overview.html) |
| DataGrid | Blazor | [View UG](https://blazor.syncfusion.com/documentation/datagrid/getting-started) | [View Demos](https://blazor.syncfusion.com/demos/datagrid/overview?theme=fluent2) |
| DataGrid | ASP.NET Core | [View UG](https://ej2.syncfusion.com/aspnetcore/documentation/grid/getting-started) | [View Demos](https://ej2.syncfusion.com/aspnetcore/grid/overview#/fluent2) |
| DataGrid | ASP.NET MVC | [View UG](https://ej2.syncfusion.com/aspnetmvc/documentation/grid/getting-started) | [View Demos](https://ej2.syncfusion.com/aspnetmvc/grid/overview#/fluent2) |
| TreeGrid | JavaScript | [View UG](https://ej2.syncfusion.com/documentation/treegrid/getting-started) | [View Demos](https://ej2.syncfusion.com/javascript/demos/#/tailwind3/treegrid/overview.html) |
| TreeGrid | Blazor | [View UG](https://blazor.syncfusion.com/documentation/treegrid/getting-started) | [View Demos](https://blazor.syncfusion.com/demos/treegrid/overview?theme=fluent2) |
| Pivot Table | JavaScript | [View UG](https://ej2.syncfusion.com/documentation/pivotview/getting-started) | [View Demos](https://ej2.syncfusion.com/javascript/demos/#/tailwind3/pivot-table/default.html) |
| Pivot Table | Blazor | [View UG](https://blazor.syncfusion.com/documentation/pivot-table/getting-started) | [View Demos](https://blazor.syncfusion.com/demos/pivot-table/overview?theme=fluent2) |

---

## GitHub Sample Repositories

Access platform-specific sample projects on GitHub:

| Platform | Sample Repository |
|----------|------------------|
| .NET MAUI | [View Samples](https://github.com/syncfusion/maui-demos/tree/master/MAUI/DataGrid) |
| WPF | [View Samples](https://github.com/syncfusion/wpf-demos/tree/master/datagrid) |
| WinForms | [View Samples](https://github.com/syncfusion/winforms-demos/tree/master/datagrid) |
| WinUI | [View Samples](https://github.com/syncfusion/winui-demos/tree/master/datagrid) |
| UWP | [View Samples](https://github.com/syncfusion/uwp-demos/tree/master/DataGrid) |
| Flutter | [View Samples](https://github.com/syncfusion/flutter-examples/tree/master/lib/samples/datagrid) |
