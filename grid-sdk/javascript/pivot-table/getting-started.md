---
layout: post
title: Getting started with JavaScript Pivot Table control | Syncfusion
description:  Checkout and learn about Getting started with JavaScript Pivot Table control of Syncfusion Essential JS 2 and more details.
platform: grid-sdk
control: Getting started 
publishingplatform: grid-sdk
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Getting started in JavaScript Pivot Table control

This section explains the steps required to create a simple Essential<sup style="font-size:70%">&reg;</sup> JS 2 Pivot Table and demonstrate the basic usage of the Pivot Table control in a JavaScript application.

## Setup for local environment

Refer to the following steps to set up your local environment.

**Step 1:** Create a root folder named **my-app** for your application.

**Step 2:** Create a **my-app/resources** folder to store local scripts and styles files.

**Step 3:** Open Visual Studio Code and create **my-app/index.js** and **my-app/index.html** files to initialize the Essential<sup style="font-size:70%">&reg;</sup> JS 2 Pivot Table control.

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> resources

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 Pivot Table control can be initialized by using either of the following ways.

* Using local script and style.
* Using CDN link for script and style.

### Using local script and style

To use local scripts and styles for Syncfusion<sup style="font-size:70%">&reg;</sup> Pivot Table, you can follow these steps:

**1. Download Essential<sup style="font-size:70%">&reg;</sup> Studio<sup style="font-size:70%">&reg;</sup> JavaScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2):** Obtain the global scripts and styles from the [Essential Studio<sup style="font-size:70%">&reg;</sup> JavaScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2)](https://www.syncfusion.com/downloads/essential-js2) build installation location.

**2. Copy Files to Resources Folder:** After installing the Essential<sup style="font-size:70%">&reg;</sup> JS 2 product build, copy the pivot table's scripts, dependent component scripts, and style files into the designated folders:

**Scripts:** Copy the scripts to the **resources/scripts** folder.
**Styles:** Copy the styles to the **resources/styles** folder.

**3. Locate Script and Style Files:** Identify the location of the pivot table's script and style files. The syntax for the file paths are as follows:

**Syntax:**
>Script: `**(installed location)**/Syncfusion/Essential Studio/{RELEASE_VERSION}/Essential JS 2/{PACKAGE_NAME}/dist/global/{PACKAGE_NAME}.min.js`
>Styles: `**(installed location)**/Syncfusion/Essential Studio/{RELEASE_VERSION}/Essential JS 2/{PACKAGE_NAME}/styles/tailwind3.css`

**Example:**
>Script: `C:/Program Files (x86)/Syncfusion/Essential Studio/25.1.35/Essential JS 2/ej2-pivotview/dist/global/ej2-pivotview.min.js`
>Styles: `C:/Program Files (x86)/Syncfusion/Essential Studio/25.1.35/Essential JS 2/ej2-pivotview/styles/tailwind3.css`

**4. Referencing in HTML File:** Once the files are copied, reference the pivot table's scripts and styles into the **index.html** file.

Here's an example of referencing the pivot table's scripts and styles in an HTML file:

**a. Essential<sup style="font-size:70%">&reg;</sup> Dependency (Minimal Setup)**

This setup includes only the necessary scripts and styles required to render the Syncfusion<sup style="font-size:70%">&reg;</sup> Pivot Table. Use this setup for a lightweight application that requires basic pivot table functionality.

```html

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <title>Essential JS 2 Pivot Table</title>

    <!-- Essential JS 2 Pivot Table's dependent tailwind3 theme -->
    <link href="resources/base/styles/tailwind3.css" rel="stylesheet" type="text/css" />
    <link href="resources/popups/styles/tailwind3.css" rel="stylesheet" type="text/css" />
    <link href="resources/grids/styles/tailwind3.css" rel="stylesheet" type="text/css" />
    <link href="resources/pivotview/styles/tailwind3.css" rel="stylesheet" type="text/css" />
    <!-- Essential JS 2 Pivot Table's dependent scripts -->
    <script src="resources/scripts/ej2-base.min.js" type="text/javascript"></script>
    <script src="resources/scripts/ej2-data.min.js" type="text/javascript"></script>
    <script src="resources/scripts/ej2-popups.min.js" type="text/javascript"></script>
    <script src="resources/scripts/ej2-grids.min.js" type="text/javascript"></script>
    <!-- Essential JS 2 Pivot Table's global script -->
    <script src="resources/scripts/ej2-pivotview.min.js" type="text/javascript"></script>
</head>

<body>
</body>

</html>

```

**b. Extended Dependency (Additional Components)**

This setup includes additional dependencies required for more advanced functionalities of the pivot table, such as buttons, dropdowns, navigations, and other components. Use this setup when you need to integrate additional features like filtering, paging, column menu, and more.

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <title>Essential JS 2 Pivot Table</title>

    <!-- Essential JS 2 Pivot Table's dependent tailwind3 theme -->
    <link href="resources/base/styles/tailwind3.css" rel="stylesheet" type="text/css" />
    <link href="resources/popups/styles/tailwind3.css" rel="stylesheet" type="text/css" />
    <link href="resources/grids/styles/tailwind3.css" rel="stylesheet" type="text/css" />
    <link href="resources/buttons/styles/tailwind3.css" rel="stylesheet" type="text/css" />
    <link href="resources/navigations/styles/tailwind3.css" rel="stylesheet" type="text/css" />
    <link href="resources/dropdowns/styles/tailwind3.css" rel="stylesheet" type="text/css" />
    <link href="resources/lists/styles/tailwind3.css" rel="stylesheet" type="text/css" />
    <link href="resources/inputs/styles/tailwind3.css" rel="stylesheet" type="text/css" />
    <link href="resources/calendars/styles/tailwind3.css" rel="stylesheet" type="text/css" />
    <link href="resources/notifications/styles/tailwind3.css" rel="stylesheet" type="text/css" />
    <link href="resources/splitbuttons/styles/tailwind3.css" rel="stylesheet" type="text/css" />
    <link href="resources/pivotview/styles/tailwind3.css" rel="stylesheet" type="text/css" />

    <!-- Essential JS 2 Pivot Table's dependent scripts -->
    <script src="resources/scripts/ej2-base.min.js" type="text/javascript"></script>
    <script src="resources/scripts/ej2-data.min.js" type="text/javascript"></script>
    <script src="resources/scripts/ej2-popups.min.js" type="text/javascript"></script>
    <script src="resources/scripts/ej2-grids.min.js" type="text/javascript"></script>

    <!-- Essential JS 2 Pivot Table's global script -->
    <script src="resources/scripts/ej2-pivotview.min.js" type="text/javascript"></script>

    <!-- Include Essential JS 2 other component's script based on features used -->
    <script src="resources/scripts/ej2-buttons.min.js" type="text/javascript"></script>
    <script src="resources/scripts/ej2-navigations.min.js" type="text/javascript"></script>
    <script src="resources/scripts/ej2-dropdowns.min.js" type="text/javascript"></script>
    <script src="resources/scripts/ej2-lists.min.js" type="text/javascript"></script>
    <script src="resources/scripts/ej2-inputs.min.js" type="text/javascript"></script>
    <script src="resources/scripts/ej2-calendars.min.js" type="text/javascript"></script>
    <script src="resources/scripts/ej2-notifications.min.js" type="text/javascript"></script>
    <script src="resources/scripts/ej2-splitbuttons.min.js" type="text/javascript"></script>

</head>

<body>
</body>

</html>
```

**c. Comprehensive Dependency (All Components)**
This setup includes all possible dependencies for Syncfusion<sup style="font-size:70%">&reg;</sup> components in a single comprehensive file, ensuring maximum compatibility and functionality. Use this setup for a complex application that utilizes a wide range of Syncfusion<sup style="font-size:70%">&reg;</sup> components.

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <title>Essential JS 2 Pivot Table</title>

    <!-- Essential JS 2 tailwind3 theme -->
    <link href="resources/styles/tailwind3.css" rel="stylesheet" type="text/css" />
    <!-- Essential JS 2 script -->
    <script src="resources/scripts/ej2.min.js" type="text/javascript"></script>
</head>

<body>
</body>
</html>
```

### Using CDN link for script and style

Using CDN links, you can directly reference the pivot table control's script and style in the `index.html`.

Refer to the pivot table's CDN links below.

**Syntax:**

> Script: `https://cdn.syncfusion.com/ej2/{PACKAGE_VERSION}/{PACKAGE_NAME}/dist/global/{PACKAGE_NAME}.min.js`
> Styles: `https://cdn.syncfusion.com/ej2/{PACKAGE_VERSION}/{PACKAGE_NAME}/styles/tailwind3.css`

**Example:**

> Script: [https://cdn.syncfusion.com/ej2/34.1.29/ej2-pivotview/dist/global/ej2-pivotview.min.js](http://cdn.syncfusion.com/ej2/34.1.29/ej2-pivotview/dist/global/ej2-pivotview.min.js)
>
> Styles: [https://cdn.syncfusion.com/ej2/34.1.29/ej2-pivotview/styles/tailwind3.css](http://cdn.syncfusion.com/ej2/34.1.29/ej2-pivotview/styles/tailwind3.css)

Here's an example of referencing the pivot table's scripts and styles in an HTML file using CDN links:

**a. Essential<sup style="font-size:70%">&reg;</sup> Dependency (Minimal Setup)**

This setup includes only the necessary scripts and styles required to render the Syncfusion<sup style="font-size:70%">&reg;</sup> Pivot Table. Use this setup for a lightweight application that requires basic pivot table functionality.

```html
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
          <title>Essential JS 2 Pivot Table</title>
          
          <!-- Essential JS 2 Pivot Table's dependent tailwind3 theme -->
          <link href="https://cdn.syncfusion.com/ej2/34.1.29/ej2-base/styles/tailwind3.css" rel="stylesheet" type="text/css"/>
          <link href="https://cdn.syncfusion.com/ej2/34.1.29/ej2-popups/styles/tailwind3.css" rel="stylesheet" type="text/css"/>
          <link href="https://cdn.syncfusion.com/ej2/34.1.29/ej2-grids/styles/tailwind3.css" rel="stylesheet" type="text/css"/>
          <link href="https://cdn.syncfusion.com/ej2/34.1.29/ej2-pivotview/styles/tailwind3.css" rel="stylesheet" type="text/css"/>

          <!-- Essential JS 2 Pivot Table's dependent script -->
          <script src="https://cdn.syncfusion.com/ej2/34.1.29/ej2-base/dist/global/ej2-base.min.js" type="text/javascript"></script>
          <script src="https://cdn.syncfusion.com/ej2/34.1.29/ej2-data/dist/global/ej2-data.min.js" type="text/javascript"></script>
          <script src="https://cdn.syncfusion.com/ej2/34.1.29/ej2-popups/dist/global/ej2-popups.min.js" type="text/javascript"></script>
          <script src="https://cdn.syncfusion.com/ej2/34.1.29/ej2-grids/dist/global/ej2-grids.min.js" type="text/javascript"></script>

          <!-- Essential JS 2 Pivot Table's global script -->
          <script src="https://cdn.syncfusion.com/ej2/34.1.29/ej2-pivotview/dist/global/ej2-pivotview.min.js" type="text/javascript"></script>
       </head>
       <body>
       </body>
  </html>
```

**b. Extended Dependency (Additional Components)**

This setup includes additional dependencies required for more advanced functionalities of the pivot table, such as buttons, dropdowns, navigations, and other components. Use this setup when you need to integrate additional features like filtering, paging, column menu, and more.

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <title>Essential JS 2 Pivot Table</title>
    <!-- Essential JS 2 Pivot Table's dependent tailwind3 theme -->
    <link href="https://cdn.syncfusion.com/ej2/34.1.29/ej2-base/styles/tailwind3.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/34.1.29/ej2-popups/styles/tailwind3.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/34.1.29/ej2-grids/styles/tailwind3.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/34.1.29/ej2-buttons/styles/tailwind3.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/34.1.29/ej2-navigations/styles/tailwind3.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/34.1.29/ej2-dropdowns/styles/tailwind3.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/34.1.29/ej2-lists/styles/tailwind3.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/34.1.29/ej2-inputs/styles/tailwind3.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/34.1.29/ej2-calendars/styles/tailwind3.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/34.1.29/ej2-notifications/styles/tailwind3.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/34.1.29/ej2-splitbuttons/styles/tailwind3.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/34.1.29/ej2-pivotview/styles/tailwind3.css" rel="stylesheet" type="text/css" />

    <!-- Essential JS 2 Pivot Table's dependent scripts -->
    <script src="https://cdn.syncfusion.com/ej2/34.1.29/ej2-base/dist/global/ej2-base.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/34.1.29/ej2-data/dist/global/ej2-data.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/34.1.29/ej2-popups/dist/global/ej2-popups.min.js"
        type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/34.1.29/ej2-grids/dist/global/ej2-grids.min.js" type="text/javascript"></script>

    <!-- Essential JS 2 Pivot Table's global script -->
    <script src="https://cdn.syncfusion.com/ej2/34.1.29/ej2-pivotview/dist/global/ej2-pivotview.min.js" type="text/javascript"></script>

    <!-- Include Essential JS 2 other component's script based on features used -->
    <script src="https://cdn.syncfusion.com/ej2/34.1.29/ej2-buttons/dist/global/ej2-buttons.min.js"
        type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/34.1.29/ej2-navigations/dist/global/ej2-navigations.min.js"
        type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/34.1.29/ej2-dropdowns/dist/global/ej2-dropdowns.min.js"
        type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/34.1.29/ej2-lists/dist/global/ej2-lists.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/34.1.29/ej2-inputs/dist/global/ej2-inputs.min.js"
        type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/34.1.29/ej2-calendars/dist/global/ej2-calendars.min.js"
        type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/34.1.29/ej2-notifications/dist/global/ej2-notifications.min.js"
        type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/34.1.29/ej2-splitbuttons/dist/global/ej2-splitbuttons.min.js"
        type="text/javascript"></script>

</head>

<body>
</body>

</html>

```

**c. Comprehensive Dependency (All Components)**

This setup includes all possible dependencies for Syncfusion<sup style="font-size:70%">&reg;</sup> components in a single comprehensive file, ensuring maximum compatibility and functionality. Use this setup for a complex application that utilizes a wide range of Syncfusion<sup style="font-size:70%">&reg;</sup> components.

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <title>Essential JS 2 Pivot Table</title>

    <!-- Essential JS 2 tailwind3 theme -->
    <link href="https://cdn.syncfusion.com/ej2/34.1.29/tailwind3.css" rel="stylesheet" type="text/css" />
    <!-- Essential JS 2 all script -->
    <script src="https://cdn.syncfusion.com/ej2/34.1.29/dist/ej2.min.js" type="text/javascript"></script>

</head>

<body>
</body>

</html>
```

Based on your requirement, additional dependencies can be included as needed. In this documentation, the common **ej2.min.js** and **tailwind3.css** are used, which include all the Essential<sup style="font-size:70%">&reg;</sup> JS 2 components and their dependent scripts and theme files.

## Adding Pivot Table component

You can start adding Essential<sup style="font-size:70%">&reg;</sup> JS 2 pivot table component to the application. To get started, add the pivot table component in **index.js** file using the following code.

{% tabs %}
{% highlight js tabtitle="index.js" %}

var pivotData = [
    { 'Sold': 31, 'Amount': 52824, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2025', 'Quarter': 'Q1' },
    { 'Sold': 51, 'Amount': 86904, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2025', 'Quarter': 'Q2' },
    { 'Sold': 90, 'Amount': 153360, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2025', 'Quarter': 'Q3' },
    { 'Sold': 25, 'Amount': 42600, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2025', 'Quarter': 'Q4' }
];
var pivotTableObj = new ej.pivotview.PivotView({
    dataSourceSettings: {
        dataSource: pivotData,
        expandAll: false,
        columns: [{ name: 'Year' }, { name: 'Quarter' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        values: [{ name: 'Amount', caption: 'Sold Amount' }, { name: 'Sold', caption: 'Units Sold' }]
    }
});
pivotTableObj.appendTo('#PivotTable');

{% endhighlight %}

{% highlight html tabtitle="index.html" %}

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <title>Essential JS 2 Pivot Table</title>

    <!-- Essential JS 2 tailwind3 theme -->
    <link href="https://cdn.syncfusion.com/ej2/34.1.29/tailwind3.css" rel="stylesheet" type="text/css" />
    <!-- Essential JS 2 all script -->
    <script src="https://cdn.syncfusion.com/ej2/34.1.29/dist/ej2.min.js" type="text/javascript"></script>

</head>

<body>
    <!-- Add the HTML <div> element for pivot table  -->
    <div id="PivotTable"></div>
    <script src="index.js" type="text/javascript"></script>
</body>

</html>

{% endhighlight %}

{% endtabs %}

## Run the application

Now, run the **index.html** in web browser, it will render the Essential<sup style="font-size:70%">&reg;</sup> JS 2 Pivot Table control.

## See also

* [Data Binding](https://ej2.syncfusion.com/javascript/documentation/pivotview/data-binding)
* [Field List](https://ej2.syncfusion.com/javascript/documentation/pivotview/field-list)
* [Grouping Bar](https://ej2.syncfusion.com/javascript/documentation/pivotview/grouping-bar)
