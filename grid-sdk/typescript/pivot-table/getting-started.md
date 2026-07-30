---
layout: post
title: Getting started with TypeScript Pivot Table control | Syncfusion
description:  Checkout and learn about Getting started with TypeScript Pivot Table control of Syncfusion Essential JS 2 and more details.
platform: grid-sdk
control: Getting started 
publishingplatform: grid-sdk
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Getting started in TypeScript Pivot Table control

This section explains the steps to create a simple **Pivot Table** and demonstrates the basic usage of the Pivot Table component using the Essential<sup style="font-size:70%">&reg;</sup> JS 2 [quickstart](https://github.com/SyncfusionExamples/ej2-quickstart-webpack-) seed repository. This seed repository is pre-configured with the Essential<sup style="font-size:70%">&reg;</sup> JS 2 package.

## Prerequisites

Ensure the following tools are installed on your machine:

* [Git](https://git-scm.com/install/)
* [Node.js](https://nodejs.org/en/)
* [Visual Studio Code](https://code.visualstudio.com/)

> This application is integrated with the **webpack.config.js** configuration and uses the latest version of the [webpack-cli](https://webpack.js.org/api/cli#commands). It requires node **v14.15.0** or higher. For more information about webpack and its features, refer to the [webpack documentation](https://webpack.js.org/guides/getting-started).

## Setup for local development

Clone the Essential<sup style="font-size:70%">&reg;</sup> JS 2 quickstart application project from [GitHub](https://github.com/SyncfusionExamples/ej2-quickstart-webpack-) using the following command line scripts.

```
git clone https://github.com/SyncfusionExamples/ej2-quickstart-webpack- ej2-quickstart
cd ej2-quickstart
```

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript packages

Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2) packages are available on the [npmjs.com](https://www.npmjs.com/~syncfusionorg) public registry. You can install all Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2) controls in a single [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) package or individual packages for each control.

Use the following command to install the dependent npm packages from the command prompt.

```
npm install
```

## Import the Syncfusion<sup style="font-size:70%">&reg;</sup> CSS styles

Themes for Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript controls can be applied using CSS or SASS files from the [npm theme packages](https://ej2.syncfusion.com/documentation/appearance/theme#theme-packages), CDN, CRG, or [Theme Studio](https://ej2.syncfusion.com/documentation/appearance/theme-studio). For more information, refer to the [themes documentation](https://ej2.syncfusion.com/documentation/appearance/theme).

The following example demonstrates the installation of the `Tailwind 3` theme package from npm. Each component in this theme package includes an `index.css` file that automatically loads all required dependency styles.

To install the [Tailwind 3](https://www.npmjs.com/package/@syncfusion/ej2-tailwind3-theme) theme package, use the following command:

{% tabs %}
{% highlight bash tabtitle="npm" %}

npm install @syncfusion/ej2-tailwind3-theme --save

{% endhighlight %}
{% endtabs %}

Import the required theme styles in the `~/src/styles/styles.css` file:

{% tabs %}
{% highlight css tabtitle="styles.css" %}

@import '../../node_modules/@syncfusion/ej2-tailwind3-theme/styles/pivotview/index.css';

{% endhighlight %}
{% endtabs %}

## Adding Pivot Table component

You can start adding the Essential<sup style="font-size:70%">&reg;</sup> JS 2 Pivot Table component to the application. To get started, add the Pivot Table component in the **app.ts** file located in the `src/` folder using the following code.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import { PivotView, IDataSet } from '@syncfusion/ej2-pivotview';

let pivotData: IDataSet[] = [
    { 'Sold': 31, 'Amount': 52824, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2025', 'Quarter': 'Q1' },
    { 'Sold': 51, 'Amount': 86904, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2025', 'Quarter': 'Q2' },
    { 'Sold': 90, 'Amount': 153360, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2025', 'Quarter': 'Q3' },
    { 'Sold': 25, 'Amount': 42600, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2025', 'Quarter': 'Q4' }
];

let pivotTableObj: PivotView = new PivotView({
    dataSourceSettings: {
        dataSource: pivotData,
        expandAll: true,
        columns: [{ name: 'Year' }, { name: 'Quarter' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        values: [{ name: 'Amount', caption: 'Sold Amount' }, { name: 'Sold', caption: 'Units Sold' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }]
    }
});
pivotTableObj.appendTo('#PivotTable');

{% endhighlight %}
{% endtabs %}

Now, add an HTML `div` element that acts as the Pivot Table host element in `index.html` using the following code. The bundled script is injected by webpack at the end of the page, so the `#PivotTable` element is available in the DOM before `app.ts` runs.

{% tabs %}
{% highlight html tabtitle="index.html" %}

<!DOCTYPE html>
<html lang="en">
<head>
    <title>Pivot Table TypeScript Component</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
    <meta name="description" content="Essential JS 2" />
    <meta name="author" content="Syncfusion" />
    <!-- Optional: Bootstrap CDN for basic page layout styling -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
</head>
<body>
    <!--Element where the Pivot Table will be rendered-->
    <div id="PivotTable"></div>
</body>
</html>

{% endhighlight %}
{% endtabs %}

## Run the application

The quickstart project is configured to compile and run the application in the browser. Use the following command to run the application.

```
npm start
```

For more information and to access the quick start project, visit: [GitHub Repository](https://github.com/SyncfusionExamples/getting-started-with-the-typescript-pivot-table-component)

## See also

* [Data Binding](https://ej2.syncfusion.com/documentation/pivotview/data-binding)
* [Field List](https://ej2.syncfusion.com/documentation/pivotview/field-list)
* [Grouping Bar](https://ej2.syncfusion.com/documentation/pivotview/grouping-bar)
