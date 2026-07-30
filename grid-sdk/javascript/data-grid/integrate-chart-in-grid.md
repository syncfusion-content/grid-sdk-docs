---
layout: post
title: Integrate Chart in JavaScript Grid | Syncfusion
description: Learn here all about integrate Chart in Syncfusion JavaScript Grid of Syncfusion Essential JS 2 and more.
platform: grid-sdk
control: Integrate Chart 
publishingplatform: grid-sdk
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Integrate Chart in EJ2 JavaScript Grid

The Grid and Chart Integration feature in Syncfusion allows users to visualize tabular data in a graphical format by linking the Grid with the Chart.This feature allows seamless integration with Charts to visualize selected data interactively. You can generate various Chart types such as bar, line, or pie directly from Grid data using the [ContextMenu](../../documentation/grid/context-menu) feature. This feature is particularly useful in scenarios where tabular data can be better understood through graphical representation.

This feature is particularly useful in dashboards, reporting tools, and data-driven applications where both tabular and visual representations of data are required.

## Steps for Chart integration

To integrate Charts into your EJ2 JavaScript Grid, follow these steps:

### Dependencies

Below is the list of minimum dependencies required to integrate Chart functionality into the EJ2 JavaScript Grid:

```javascript
|-- dependencies
  |-- @syncfusion/ej2-grids
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-buttons
    |-- @syncfusion/ej2-dropdowns
    |-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-navigations
    |-- @syncfusion/ej2-popups
  |-- @syncfusion/ej2-charts
  |-- @syncfusion/ej2-grid-chart
```

### Setup for local development

{% if page.publishingplatform == "typescript" %}

Open the command prompt from the required directory, and run the following command to clone the Syncfusion JavaScript (Essential JS 2) quickstart project from [GitHub](https://github.com/SyncfusionExamples/ej2-quickstart-webpack-).

{% tabs %}
{% highlight bash tabtitle="CMD" %}

git clone https://github.com/SyncfusionExamples/ej2-quickstart-webpack- ej2-quickstart

{% endhighlight %}
{% endtabs %}

After cloning the application in the **ej2-quickstart** folder, run the following command line to navigate to the ej2-quickstart folder.

{% tabs %}
{% highlight bash tabtitle="CMD" %}

cd ej2-quickstart

{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "javascript" %}

Refer to the following steps to set up your local environment.

**Step 1:** Create a root folder named **my-app** for your application.

**Step 2:** Create a **my-app/resources** folder to store local scripts and styles files.

**Step 3:** Open Visual Studio Code and create **my-app/index.js** and **my-app/index.html** files for initializing the Essential JS 2 Syncfusion control.

{% endif %}

{% if page.publishingplatform == "typescript" %}

### Add Syncfusion JavaScript packages

Syncfusion JavaScript (Essential JS 2) packages are available on the [npmjs.com](https://www.npmjs.com/~syncfusionorg) public registry. You can install all Syncfusion JavaScript (Essential JS 2) controls in a single [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) package or individual packages for each control.

The quickstart application is preconfigured with the dependent **@syncfusion/ej2** package in the **~/package.json** file. Use the following command to install the dependent npm packages from the command prompt.

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm install

{% endhighlight %}
{% endtabs %}

To install only the Syncfusion `Grid`,`Chart` and `GridChart` and packages, use the following commands:

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm install @syncfusion/ej2-grids
npm install @syncfusion/ej2-grid-chart
npm install @syncfusion/e2-charts

{% endhighlight %}
{% endtabs %}

### Import the Syncfusion CSS styles

Syncfusion JavaScript controls come with [built-in themes](../appearance/theme), which are available in the installed packages. It’s easy to adapt the Syncfusion JavaScript controls to match the style of your application by referring to one of the built-in themes.

To apply a theme, you can import the required CSS files from the node_modules directory. For example, to use the Bootstrap 5 theme, add the following imports to the **~/src/styles/styles.css** file:

```css
@import '../../node_modules/@syncfusion/ej2-base/styles/bootstrap5.css';
@import '../../node_modules/@syncfusion/ej2-buttons/styles/bootstrap5.css';
@import '../../node_modules/@syncfusion/ej2-calendars/styles/bootstrap5.css';
@import '../../node_modules/@syncfusion/ej2-dropdowns/styles/bootstrap5.css';
@import '../../node_modules/@syncfusion/ej2-inputs/styles/bootstrap5.css';
@import '../../node_modules/@syncfusion/ej2-navigations/styles/bootstrap5.css';
@import '../../node_modules/@syncfusion/ej2-popups/styles/bootstrap5.css';
@import '../../node_modules/@syncfusion/ej2-notifications/styles/bootstrap5.css';
@import '../../node_modules/@syncfusion/ej2-splitbuttons/styles/bootstrap5.css';
@import '../../node_modules/@syncfusion/ej2-grids/styles/bootstrap5.css';
@import '../../node_modules/@syncfusion/ej2-grid-chart/styles/bootstrap5.css';

```

{% elsif page.publishingplatform == "javascript" %}

### Adding Syncfusion resources

The Essential JS 2 Grid and GridChart can be initialized by using either of the following ways.

* [Using local script and style](../../documentation/getting-started/quick-start#using-local-scripts-and-styles).
* [Using CDN link for script and style](../../documentation/getting-started/quick-start#using-cdn-link-for-scripts-and-styles).

{% endif %}

### Chart integration via Context Menu in Grid

This section explains how to dynamically render Charts based on user interactions within the Syncfusion JavaScript Grid using the context menu. Users can **right-click** on selected rows and choose from various Chart types such as bar, pie, line Charts etc to visualize the data instantly. This feature enhances interactivity and provides a seamless analytical experience.

For example, in a sales dashboard, you can select sales records for specific products and instantly view a comparative bar or pie Chart illustrating online sales versus retail sales or revenue trends over several month. This functionality helps improve decision-making by providing immediate visual feedback.

Steps to be followed to integrate Chart into Grid via contextmenu:

{% if page.publishingplatform == "typescript" %}

**Step 1. Inject required modules:**

Import the required modules from the `Grid` and `GridChart` packages, and inject the `ContextMenu` module into the Grid:

```ts
import { Grid, ContextMenu, ContextMenuClickEventArgs } from '@syncfusion/ej2-grids';
import { CategorySeries, ChartChanges, ChartPopupArgs, GridChart } from '@syncfusion/ej2-grid-chart';
import { AccumulationChartModel, ChartModel } from '@syncfusion/ej2-charts';

Grid.Inject(ContextMenu);
```

**Step 2: Define Chart options to Grid Context Menu:**

Add Chart visualization options as context menu items within the Grid configuration using [contextMenuItems](../api/grid/#contextmenuitems) property. These items allow  you to right-click on selected rows and choose a Chart type to visualize the data.

```ts

contextMenuItems: [
  'Bar', 'StackingBar', 'StackingBar100',
  'Pie','Column', 'StackingColumn', 'StackingColumn100',
  'Line', 'StackingLine', 'StackingLine100',
  'Area', 'StackingArea', 'StackingArea100','Scatter'
]

```

**Step 3: Initialize GridChart instance on Grid creation:**

Inside the Grid’s [created](../api/grid/#created) event, instantiate a **GridChart** object. This instance will be used to render Charts dynamically based on the selected Grid data.

```ts
created: () => {
  gridChart = new GridChart({
    enableRtl: grid.enableRtl,
    locale: grid.locale
  });
}

```

This ensures that the Chart instance is ready as soon as the Grid is initialized, allowing seamless interaction through the context menu.

**Step 4: Handle context menu click to render Chart:**

Use the [contextMenuClick](../api/grid/#contextmenuclick) event to detect which Chart type was selected and render the Chart accordingly using the `gridChart.render()` method.

`ContextMenuClick` event passes the below arguments:

  * `args.chartType:` The selected Chart type.

  * `args.gridInstance:` The current Grid instance.

  * `args.records:` The selected data records to be visualized in the Chart.

* Use the `gridChart.render` to render the Chart. It accepts three arguments discussed below:

  * `chartArgs`: Contains Grid instance, [Chart type](../../documentation/chart/chart-types), and selected records.

  * `chartModel:` This specifies various Chart configurations related to the appearance and behavior of the Chart. The model allows you to configure axes, labels, legends, tooltips, and other Chart attributes. Refer to Syncfusion's [Chart Model](../api/chart/chartmodel/) for detailed configurations, options, and customization possibilities.

  * `categorySeries:` This specifies the fields in your data used for [categories](../chart/category-axis) and [series](../chart/chart-series) in the Chart.

    * Category fields: Define the grouping axis.
    * Series fields: Define the actual values plotted on the Chart.

```ts

  contextMenuClick: (args: ContextMenuClickEventArgs) => {
    // Check if the Chart type is defined in the clicked context menu item.
    if (args.chartType) {
      
      // Prepare the Chart arguments including the Grid instance, Chart type, and records to plot.
      const chartArgs: ChartPopupArgs = {
        gridInstance: (args.gridInstance as Grid),
        chartType: args.chartType,
        records: (args.records as SalesRecord[]) 
      };

      // Set up the Chart model configurations.
      const chartModel: ChartModel = {
        primaryXAxis: {
          valueType: 'Category',
          labelRotation: 315
        },
      };

      // Combine both Chart models into a single model for rendering.
      const model: ChartChanges = { chart: chartModel, accumulationChart: { title :'Sales Distribution' } };

      // Determine fields for category and series data in the Chart.
      const categorySeries: CategorySeries = {
        category: ['Product', 'Month'], 
        series: ['Online', 'Retail'] 
      };

      // Render the Chart using the configured arguments and models.
      // The render function uses the defined chartArgs, model, and categorySeries to display the Chart.
      gridChart.render(chartArgs, model, categorySeries);
    }
}

```

{% elsif page.publishingplatform == "javascript" %}

**Step 1: Define Chart options to Grid Context Menu:**

Add Chart visualization options as context menu items within the Grid configuration using [contextMenuItems](../api/grid/#contextmenuitems) property. These items allow  you to right-click on selected rows and choose a Chart type to visualize the data.

```ts

contextMenuItems: [
  'Bar', 'StackingBar', 'StackingBar100',
  'Pie','Column', 'StackingColumn', 'StackingColumn100',
  'Line', 'StackingLine', 'StackingLine100',
  'Area', 'StackingArea', 'StackingArea100','Scatter'
]

```

**Step 2: Initialize GridChart instance on Grid creation:**

Inside the Grid’s [created](../api/grid/#created) event, instantiate a **GridChart** object. This instance will be used to render Charts dynamically based on the selected Grid data.

```ts
created: () => {
  gridChart = new GridChart({
    enableRtl: grid.enableRtl,
    locale: grid.locale
  });
}

```

This ensures that the Chart instance is ready as soon as the Grid is initialized, allowing seamless interaction through the context menu.

**Step 3: Handle context menu click to render Chart:**

Use the [contextMenuClick](../api/grid/#contextmenuclick) event to detect which Chart type was selected and render the Chart accordingly using the `GridChart.render()` method.

`ContextMenuClick` event passes the below arguments:

  * `args.chartType:` The selected Chart type.

  * `args.gridInstance:` The current Grid instance.

  * `args.records:` The selected data records to be visualized in the Chart.

* Use the `gridChart.render` to render the Chart. It accepts three arguments discussed below:

  * `chartArgs`: Contains Grid instance, [Chart type](../../documentation/chart/chart-types), and selected records.

  * `chartModel:` This specifies various Chart configurations related to the appearance and behavior of the Chart. The model allows you to configure axes, labels, legends, tooltips, and other Chart attributes. Refer to Syncfusion's [Chart Model](../api/chart/chartmodel/) for detailed configurations, options, and customization possibilities.

  * `categorySeries:` This specifies the fields in your data used for [categories](../chart/category-axis) and [series](../chart/chart-series) in the Chart.

    * Category fields: Define the grouping axis.
    * Series fields: Define the actual values plotted on the Chart.

```ts

  contextMenuClick: (args) => {
    // Check if the Chart type is defined in the clicked context menu item.
    if (args.chartType) {
      
      // Prepare the Chart arguments including the Grid instance, Chart type, and records to plot.
      const chartArgs = {
        gridInstance: args.gridInstance,
        chartType: args.chartType,
        records: args.records 
      };

      // Set up the Chart model configurations.
      const chartModel = {
        primaryXAxis: {
          valueType: 'Category',
          labelRotation: 315
        },
      };

      // Combine both Chart models into a single model for rendering.
      const model = { chart: chartModel, accumulationChart: {} };

      // Determine fields for category and series data in the Chart.
      const categorySeries = {
        category: ['Product', 'Month'], 
        series: ['Online', 'Retail'] 
      };

      // Render the Chart using the configured arguments and models.
      // The render function uses the defined chartArgs, model, and categorySeries to display the Chart.
      gridChart.render(chartArgs, model, categorySeries);
    }
}

```

{% endif %}

The following complete example demonstrates how to integrate Charts into a Grid context menu using the `contextMenuClick` event with `gridChart.render` method:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/javascript/grid/chart-integration/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/grid/chart-integration/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/grid/chart-integration" %}
        
{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/javascript/grid/chart-integration/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/grid/chart-integration/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/grid/chart-integration" %}
{% endif %}

## Enable export functionality in GridChart

The export functionality in GridChart allows Charts to be saved or shared externally in various formats. This is particularly useful for preserving visualized data or including Charts in reports and presentations.

To enable this feature, set the `allowExport` property to true when creating the **GridChart** instance. Once enabled, an export option appears in the Chart popup toolbar, allowing the Chart to be exported in various formats such as PDF, CSV, Print, JPEG, XLSX, SVG, and PNG.

The following code snippet demonstrates how to enable export functionality in **GridChart**:

```ts

gridChart = new GridChart({
  allowExport: true
});

```

## Enable property panel in GridChart

The property panel in GridChart provides a built-in interface to modify Chart settings dynamically at runtime. By default, the property panel is disabled. To enable it, set the `enablePropertyPanel` option to true during the instantiation of the **GridChart** object. Here’s how to do it:

```ts

gridChart = new GridChart({
  enablePropertyPanel: true
});

```

When enabled, the property panel appears alongside the Chart popup and offers three main configuration sections:

* **Chart Types:** Choose from a variety of Chart types, including Column, Line, Pie, and others.

* **Chart Data:** Configure the category axis and series fields for data visualization.

* **Formatting Options:** Adjust styling properties such as Chart style, title style, legend appearance, series settings, and axes formatting.

  * **Chart Style:** 

    * **Margin :** Adjust the [margins](../api/chart/margin/) around the Chart (top, bottom, left, right) for better layout spacing.
    * **Color**: Set distinct colors for different Chart elements to improve visual clarity.

  * **Title Style** 

    * **Legend** - Toggle the visibility of the legend and customize its font, size, color, and position.
    * **Series** - Enable/disable tooltips and customize [Series](../api/chart/series/) color and data labels based on categories such as online, retail, or revenue.

  * **Axes:** - Select axes as either category or value type, and customize:

    * Reverse Order to change the data sequence.
    * **Title:** Adjust text, font, size, color, and rotation.
    * **Label:** Modify text, font, size, color, and rotation for better label presentation.

**customize the Chart model:**   

You can customize the [Chart](../../documentation/chart/getting-started) by defining a [chartModel](../api/chart/chartModel/) object in the `chart` property of the `model` object within the [contextMenuClick](../api/grid/#contextmenuclick) event .This allows you to configure various Chart properties such as axes, margins, tooltips, titles, and more. Additionally, you can use the [events](../../documentation/api/chart/#events/) of the Chart within the `chartModel` configuration to apply further customizations when the Chart is rendered. 

To customize [Accumulation Charts](../../documentation/accumulation-chart/getting-started) (such as Pie), use the `accumulationChart` property of the `model` object. This property allows you to configure Chart options like titles, legends, data labels, and visual styles tailored for accumulation-type visualizations.  You can also use Accumulation Chart [events](../../documentation/api/accumulation-chart/#events/) to apply additional customizations when the Chart is rendered.

The following code snippets demonstrate how to achieve this:

{% if page.publishingplatform == "typescript" %}

```ts
contextMenuClick: (args: ContextMenuClickEventArgs) => {
  if (args.chartType) {
    const chartModel: ChartModel = {
      primaryXAxis: {
        valueType: 'Category',
        labelRotation: 315,
      },
      margin: {
        top: 20,
        bottom: 20,
        right: 20,
        left: 20
      },
      tooltip: {
        enable: true,
        textStyle: {
          size: '16px',
          fontFamily: 'Arial, Helvetica, sans-serif'
        }
      },
      title: 'Sales Data',
      titleStyle: {
        size: '24px',
        fontFamily: 'Arial, Helvetica, sans-serif',
        fontWeight: 'Bold'
      },
      subTitle: 'Sales data for various products over the months',
      load: (args: ILoadedEventArgs) => {
        if (args.chart.titleStyle) {
          args.chart.titleStyle.color = '#1976d2';
        }
      }
    };
    const accumulationChartModel: AccumulationChartModel = {
      title :'Sales Distribution'
    }
    const model: ChartChanges = {
      chart: chartModel,
      accumulationChart: accumulationChartModel
    };
  }
}

```

{% elsif page.publishingplatform == "javascript" %}

```ts
contextMenuClick: (args) => {
  if (args.chartType) {
    const chartModel = {
      primaryXAxis: {
      valueType: 'Category',
      labelRotation: 315,
    },
    margin: {
      top: 20,
      bottom: 20,
      right: 20,
      left: 20
    },
    tooltip: {
      enable: true,
      textStyle: {
        size: '16px',
        fontFamily: 'Arial, Helvetica, sans-serif'
      }
    },
    title: 'Sales Data',
    titleStyle: {
      size: '24px',
      fontFamily: 'Arial, Helvetica, sans-serif',
      fontWeight: 'Bold'
    },
    subTitle: 'Sales data for various products over the months',
    load: (args) => {
      if (args.chart.titleStyle) {
        args.chart.titleStyle.color = '#1976d2';
      }
    }
  };
  const accumulationChartModel = {
    title :'Sales Distribution'
  };
  const model = {
    chart: chartModel,
      accumulationChart: accumulationChartModel
    };
  }
}
```

{% endif %}

You can also programmatically update the Chart’s appearance using the `updateChartSettings(args: UpdateChartArgs)` event provided by the **GridChart** integration. This event is triggered when you modify Chart properties through the Chart popup’s property panel. This is useful for applying custom themes, adjusting axis settings, or modifying series styles.

The following code snippet demonstrates how to dynamically customize chart margins and restrict their values to a minimum of 20 using the `updateChartSettings` event.

{% if page.publishingplatform == "typescript" %}

```ts
created: () => {
  gridChart = new GridChart({
    enablePropertyPanel: true,
    updateChartSettings: updateChartSettings
  });
});

function updateChartSettings(args: UpdateChartArgs): void {
  const chart = args.changes?.chart;
  if (!chart) return;

  // Restrict margin values to minimum 20.
  const margin = chart.margin;
  if (margin) {
    if (margin.top < 20) margin.top = 20;
    if (margin.bottom < 20) margin.bottom = 20;
    if (margin.left < 20) margin.left = 20;
    if (margin.right < 20) margin.right = 20;
  }
}

```

{% elsif page.publishingplatform == "javascript" %}

```ts
created: () => {
  gridChart = new GridChart({
    enablePropertyPanel: true,
    updateChartSettings: updateChartSettings
  });
});

function updateChartSettings(args) {
  const chart = args.changes?.chart;
  if (!chart) return;

  // Restrict margin values to minimum 20.
  const margin = chart.margin;
  if (margin) {
    if ( margin.top < 20) margin.top = 20;
    if (margin.bottom < 20) margin.bottom = 20;
    if (margin.left < 20) margin.left = 20;
    if (margin.right < 20) margin.right = 20;
  }
}

```

{% endif %}

The following complete example demonstrates how to enable the property panel by setting `enablePropertyPanel` to **true**, customize the chart using the `chartModel` within `contextMenuClick` event, and dynamically control or customize the behavior of the `updateChartSettings` event.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/javascript/grid/chart-integration2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/grid/chart-integration2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/grid/chart-integration2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/javascript/grid/chart-integration2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/grid/chart-integration2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/grid/chart-integration2" %}
{% endif %}
