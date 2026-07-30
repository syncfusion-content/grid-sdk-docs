---
layout: post
title: Getting started with JavaScript DataGrid control | Syncfusion
description:  Checkout and learn about Getting started with JavaScript DataGrid control of Syncfusion Essential JS 2 and more details.
platform: grid-sdk
control: Getting started 
publishingplatform: grid-sdk
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Getting started in JavaScript DataGrid control

This section explains the steps required to create a simple Essential<sup style="font-size:70%">&reg;</sup> JS 2 DataGrid and demonstrate the basic usage of the DataGrid control in a JavaScript application.

## Prerequisites

Ensure the following tools are installed on your machine:

* [Visual Studio Code](https://code.visualstudio.com) (or any text editor) to create the HTML file
* A modern web browser (Chrome, Edge, Firefox, or Safari) to view the result

## Dependencies

A list of dependencies to use the DataGrid with all features.

```
|-- @syncfusion/ej2-grids
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-buttons
    |-- @syncfusion/ej2-popups
    |-- @syncfusion/ej2-navigations
    |-- @syncfusion/ej2-dropdowns
    |-- @syncfusion/ej2-lists
    |-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-splitbuttons
    |-- @syncfusion/ej2-calendars
    |-- @syncfusion/ej2-excel-export
    |-- @syncfusion/ej2-pdf-export
    |-- @syncfusion/ej2-file-utils
    |-- @syncfusion/ej2-compression
    |-- @syncfusion/ej2-notifications
```

## Setup for local environment

Refer to the following steps to set up your local environment.

**Step 1:** Create a root folder named **my-app** for your application.

**Step 2:** Open Visual Studio Code and create **my-app/index.js** and **my-app/index.html** files to initialize the Essential<sup style="font-size:70%">&reg;</sup> JS 2 DataGrid control.

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> DataGrid CDN resources

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 DataGrid control can be initialized by the following way.

This setup includes additional dependencies required for more advanced functionalities of the DataGrid, such as buttons, dropdowns, navigations and other components. Use this setup when you need to integrate additional features like filtering, paging, column menu and more.

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <title>Essential JS 2 DataGrid</title>

    <!-- Essential JS 2 DataGrid's dependent bootstrap5.3 theme -->
    <link href="https://cdn.syncfusion.com/ej2/34.1.29/ej2-base/styles/bootstrap5.3.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/34.1.29/ej2-popups/styles/bootstrap5.3.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/34.1.29/ej2-buttons/styles/bootstrap5.3.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/34.1.29/ej2-navigations/styles/bootstrap5.3.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/34.1.29/ej2-dropdowns/styles/bootstrap5.3.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/34.1.29/ej2-lists/styles/bootstrap5.3.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/34.1.29/ej2-inputs/styles/bootstrap5.3.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/34.1.29/ej2-calendars/styles/bootstrap5.3.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/34.1.29/ej2-notifications/styles/bootstrap5.3.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/34.1.29/ej2-splitbuttons/styles/bootstrap5.3.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/34.1.29/ej2-grids/styles/bootstrap5.3.css" rel="stylesheet" type="text/css" />

    <!-- Essential JS 2 DataGrid's dependent scripts -->
    <script src="https://cdn.syncfusion.com/ej2/34.1.29/ej2-base/dist/global/ej2-base.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/34.1.29/ej2-data/dist/global/ej2-data.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/34.1.29/ej2-popups/dist/global/ej2-popups.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/34.1.29/ej2-buttons/dist/global/ej2-buttons.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/34.1.29/ej2-navigations/dist/global/ej2-navigations.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/34.1.29/ej2-dropdowns/dist/global/ej2-dropdowns.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/34.1.29/ej2-lists/dist/global/ej2-lists.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/34.1.29/ej2-inputs/dist/global/ej2-inputs.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/34.1.29/ej2-calendars/dist/global/ej2-calendars.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/34.1.29/ej2-notifications/dist/global/ej2-notifications.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/34.1.29/ej2-splitbuttons/dist/global/ej2-splitbuttons.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/34.1.29/ej2-grids/dist/global/ej2-grids.min.js" type="text/javascript"></script>
</head>

<body>
</body>

</html>
```
> To include all required Essential JS 2 styles and scripts, use the following CDN links.
>
> Essential JS 2 combined bootstrap5.3 theme (all components)
> <link href="https://cdn.syncfusion.com/ej2/34.1.29/bootstrap5.3.css" rel="stylesheet" type="text/css" />
>
> Essential JS 2 combined script (all components)
> <script src="https://cdn.syncfusion.com/ej2/34.1.29/dist/ej2.min.js" type="text/javascript"></script>

## Adding DataGrid control

Add the DataGrid control in **index.js** file using the following code.

{% tabs %}
{% highlight ts tabtitle="index.js" %}

// Defines the data to be displayed in the DataGrid.
var data = [
    { OrderID: 10248, CustomerName: 'Ana Trujillo', OrderDate: new Date(2025, 0, 12), ShipCountry: 'France', Freight: 32.38 },
    { OrderID: 10249, CustomerName: 'Martin Sommer', OrderDate: new Date(2025, 0, 15), ShipCountry: 'Germany', Freight: 11.61 },
    { OrderID: 10250, CustomerName: 'Thomas Hardy', OrderDate: new Date(2025, 1, 5), ShipCountry: 'Brazil', Freight: 65.83 },
    { OrderID: 10251, CustomerName: 'Elizabeth Lincoln', OrderDate: new Date(2025, 1, 18), ShipCountry: 'France', Freight: 41.34 },
    { OrderID: 10252, CustomerName: 'Victoria Ashworth', OrderDate: new Date(2025, 2, 10), ShipCountry: 'Belgium', Freight: 51.30 },
    { OrderID: 10253, CustomerName: 'Martine Rance', OrderDate: new Date(2025, 2, 22), ShipCountry: 'Brazil', Freight: 58.17 },
]

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

{% endhighlight %}

{% highlight html tabtitle="index.html" %}

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <title>Essential JS 2 DataGrid</title>
    
    <!-- Essential JS 2 combined bootstrap5.3 theme (all components) -->
    <link href="https://cdn.syncfusion.com/ej2/34.1.29/bootstrap5.3.css" rel="stylesheet" type="text/css" />
    <!-- Essential JS 2 combined script (all components) -->
    <script src="https://cdn.syncfusion.com/ej2/34.1.29/dist/ej2.min.js" type="text/javascript"></script>

</head>

<body>
    <!-- Add the HTML <div> element for grid  -->
    <div id="Grid"></div>
    <script src="index.js" type="text/javascript"></script>
</body>

</html>

{% endhighlight %}

{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/grid/grid-cs132" %}

## Run the application

Now, run the **index.html** in web browser, it will render the Essential<sup style="font-size:70%">&reg;</sup> JS 2 DataGrid control.

## Registering Syncfusion license

The Syncfusion® Data Grid requires a valid license key to be registered in the application. To prevent license validation warnings, refer to the [Syncfusion licensing](https://ej2.syncfusion.com/javascript/documentation/licensing/overview) documentation.

## Troubleshooting

**Grid styles are not applied:** Ensure that the required Syncfusion theme CDN link is correctly included in `index.html` file. Verify that the CDN links are accessible and loaded before the Data Grid is rendered.

**Trial license warning message:** Register your Syncfusion license key before initializing any Syncfusion<sup style="font-size:70%">&reg;</sup> control. Refer to the [Registering a license key](https://ej2.syncfusion.com/javascript/documentation/licensing/license-key-registration#javascript-es5) section.

## See also

* [DataGrid Feature Modules](https://ej2.syncfusion.com/javascript/documentation/grid/module)
* [How to display a table data after clicking Submit button in Javascript?](https://support.syncfusion.com/kb/article/10145/how-to-display-a-table-data-after-clicking-submit-button-in-javascript)
* [How to display table in popup window using Javascript?](https://support.syncfusion.com/kb/article/10339/how-to-display-table-in-popup-window-using-javascript)
* [How to open pdf document on button click inside a DataGrid](https://support.syncfusion.com/kb/article/10246/how-to-open-pdf-document-on-button-click-inside-a-grid)
* [How to disable the default keyboard actions in Grid](https://support.syncfusion.com/kb/article/9578/how-to-disable-the-default-keyboard-actions-in-js-grid)
