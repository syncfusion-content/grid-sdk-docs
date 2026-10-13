---
layout: post
title: Column template in TypeScript Grid control | Syncfusion
description: Learn here all about Column template in Syncfusion TypeScript Grid control of Syncfusion Essential JS 2 and more.
platform: grid-sdk
control: Column template 
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Column template in TypeScript Grid control

Grid control provides a [template](../../api/grid/column#template) option that allows you to display custom elements in a column instead of the field value. This can be useful when you need to display images, buttons, or other custom content within a column.

> When using template columns, they are primarily meant for rendering custom content and may not provide built-in support for grid actions like sorting, filtering, editing. It is must to define the `field` property of the column to perform any grid actions.

## Render image in a column

To render an image in a grid column, you need to define a [template](../../api/grid/column#template) for the column using the template property. The `template` property expects the HTML element or a function that returns the HTML element.

The following example demonstrates how to define a [template](../../api/grid/column#template) for the **Employee Image** field that displays an image element. The `template` property is set to the HTML element that contains an image tag. You have utilized the `src` and `alt` attributes to an image tag. 



 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/typescript/grid/column-template-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/grid/column-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/grid/column-template-cs1" %}



> The [template](../../api/grid/column#template) option allows to define any HTML content within a column.

## Render hyperlink in a column

The Grid control provides support for rendering hyperlink columns and performing routing on click using the [template](../../api/grid/column#template) property. This feature is useful when displaying data that requires a link to another page or website.

The following example demonstrates, how to render hyperlink column in the Grid using the [template](../../api/grid/column#template) property of the `column`. To define a `template` for the column,  you can use the `template` with the `a` tag to create the hyperlink.



 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/typescript/grid/column-template-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/grid/column-template-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/grid/column-template-cs3" %}



>The window.open() method is a built-in JavaScript function that opens a new browser window or tab with the specified URL.

## Render other controls in a column

The column template has options to render a custom control in a grid column instead of a field value.

### Render LineChart control in a column


The [LineChart](../../sparkline/getting-started) control of Syncfusion<sup style="font-size:70%">&reg;</sup> provides an elegant way to represent and compare data over time. It displays data points connected by straight line segments to visualize trends in data. 
 

In the following example, we have rendered the Sparkline Chart control in the Grid column by defining the [template](../../api/grid/column#template) property.



 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/typescript/grid/column-template-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/grid/column-template-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/grid/column-template-cs4" %}



### Render ColorPicker control in a column


 
The [ColorPicker](../../color-picker/getting-started) control of Syncfusion<sup style="font-size:70%">&reg;</sup> provides a user-friendly way to select colors from a pre-defined color palette or custom colors. It can be used in a variety of scenarios such as picking a theme color or changing the color of an element on a page.  
 

In the following code, we rendered the ColorPicker control in the Grid column by defining the [template](../../api/grid/column#template) property.


 
```ts
function colorPicker(args: QueryCellInfoEventArgs) {
  let inputElement: HTMLSelectElement  = args.cell.querySelector('input')
    let colorPickerObject: ColorPicker = new ColorPicker({
      type: 'color',
      mode: 'Palette',
      change: change,
    });
    colorPickerObject.appendTo(inputElement);
}
```
 



 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/typescript/grid/column-template-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/grid/column-template-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/grid/column-template-cs5" %}



### Render DropDownList control in a column



To render a custom control in a grid column, you need to define a [template](../../api/grid/column#template) for the column using the `template` property. In the following code, we rendered the [DropDownList](../../drop-down-list/getting-started) control in the **Order Status** column by defining the `template` property.




 
```ts
function dropdown(args: QueryCellInfoEventArgs) {
   if (args.column.field === 'OrderStatus') {
      let drop = new DropDownList({
          dataSource: dropData,
          value: args.data['OrderStatus'],
          popupHeight: 150,
          popupWidth: 150,
      });
      drop.appendTo(args.cell.querySelector('#dropElement'));
  }
}

```




 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/typescript/grid/column-sync-comp-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/grid/column-sync-comp-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/grid/column-sync-comp-cs1" %}



### Render Chip control in a column

The Grid control provides support for rendering [Chips](../../chips/getting-started) control in a column using the [template](../../api/grid/column#template) property. This feature is useful when displaying data that requires a chip control to be rendered in a column.

In the following code, we rendered the Chips control in the Grid **First Name** column by defining the [template](../../api/grid/column#template) property.


 
```ts
  function queryCellInfo(args: QueryCellInfoEventArgs ) {
      if (args.column.field === 'FirstName') {
      var chip = new ChipList({
        text: args.data[args.column.field],
      });
      chip.appendTo(args.cell.querySelector('#chipElement'));
    }
  }
```
 



 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/typescript/grid/column-template-cs6/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/grid/column-template-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/grid/column-template-cs6" %}



### Render ProgressBar control in a column


 
The Syncfusion<sup style="font-size:70%">&reg;</sup> Grid control supports rendering the [Progress Bar](../../progressbar/getting-started) control within a column using the [template](../../api/grid/column#template) property. Displaying the `Progress Bar` control in a grid column allows users to visually track the progress of tasks or operations associated with specific records. This feature is particularly useful for applications involving processes such as data loading, task completion, or other progressive activities.



In the following code, the `Progress Bar` control render in the Grid **Freight** column by defining the [template](../../api/grid/column#template) property.



```ts
function queryCellInfo(args: QueryCellInfoEventArgs ) {
  if (args.column.field === 'Freight') {
    let percentageProgress = new ProgressBar({
      type: 'Linear',
      height: '60',
      value: args.data['Freight'],
      trackThickness:24,
      progressThickness:20
    });
    percentageProgress.appendTo(args.cell.querySelector('#progressBarElement'));
  }
}
```
 



 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/typescript/grid/column-template-cs9/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/grid/column-template-cs9/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/grid/column-template-cs9" %}



### Render RadioButton in a column 



The TypeScript Grid supports rendering the [RadioButton](../../radio-button/getting-started) within a column using the [template](../../api/grid/column#template) property. This feature is particularly useful for displaying selection options, such as order statuses, payment methods, or approval choices, within the Grid.

In the following example, a `RadioButton` is rendered in the **Order Status** column of the Grid by defining the `template` property.

```ts
function initializeRadioButtons(args: QueryCellInfoEventArgs){
  if (args.column.field === 'OrderStatus') {
    let orderStatus = args.data['OrderStatus']; // Get current row status.
    let radioButtons = (args.cell as HTMLElement).querySelectorAll('.order-status-radio');
    radioButtons.forEach((radio) => {
      let status = (radio as HTMLInputElement).getAttribute('data-status');
      let radioButton = new RadioButton({
        label: status,
        name: `orderStatus-${args.data['OrderID']}`, // Unique name per row.
        checked: status === orderStatus
      });
      radioButton.appendTo(radio as HTMLElement);
    });
  }
}
```





{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/typescript/grid/template-radiobutton/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/grid/template-radiobutton/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/grid/template-radiobutton" %}



## Using condition template

The conditional column [template](../../api/grid/column#template) allows you to display template elements based on specific conditions.

The following example demonstrates how to use the `template` property with the `template` element and add the condition to render the checkbox based on the value of the **Discontinued** field. The **Discontinued** field will render a checkbox in each row for which the value of the **Discontinued** field is **true**. 

```
  <script id="template" type="text/x-template">
            <div class="template_checkbox">
                ${if(Discontinued)}
                <input type="checkbox" checked> ${else}
                <input type="checkbox"> ${/if}
            </div>
        </script>
```



 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/typescript/grid/condition-inside-template-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/grid/condition-inside-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/grid/condition-inside-template-cs1" %}



>You can use any template element or custom control instead of the checkbox in the conditional template based on your requirement.

## How to get the row object by clicking on the template element

The Grid control allows you to retrieve the row object of the selected record when clicking on a [template](../../api/grid/column#template) element. This feature can be useful when you need to perform custom actions based on the selected record.

In the following code, the button element is rendered in the **Employee Data** column and `click` event binding is used to call the showDetails method when the template element is clicked. The showDetails method is passed the data object as an argument, which allows you to access the selected row object and display it in the dialog popup.



 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/typescript/grid/column-template-cs7/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/grid/column-template-cs7/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/grid/column-template-cs7" %}



## Use custom helper inside the template

The Syncfusion<sup style="font-size:70%">&reg;</sup> Grid allows you to use custom helpers inside the `template` property of a column. This feature allows you to create complex templates that can incorporate additional helper functions that are not available through the default [template](../../api/grid/column#template) syntax.

To use the custom helper function inside a column template, you must first add the function to the template's context.

The following example demonstrates how to use a custom helper function inside the [template](../../api/grid/column#template) property, using the `template` element for the Freight column.



 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/typescript/grid/column-template-cs8/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/grid/column-template-cs8/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/grid/column-template-cs8" %}



> Custom helpers can only be used inside the template property of a column. 

## Dynamically adding template column

The Syncfusion<sup style="font-size:70%">&reg;</sup> Grid control allows you to dynamically add template columns at runtime. This capability is particularly useful when the structure of the grid needs to be modified based on individual interactions or other dynamic conditions.

Dynamically adding template columns involves creating and inserting columns with custom templates after the grid has been initialized. This approach provides flexibility in presenting data in a highly customizable manner.



The following example demonstrates how to add template column using external button click. In this example, the **ShipCountry** column with a [Dropdownlist](../../drop-down-list/getting-started) is added in column [template](../../api/grid/column#template), and an icon is displayed using the [headerTemplate](../../api/grid/column#headertemplate) for the **ShipCountry** column. 
 




 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/typescript/grid/column-template-cs10/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/grid/column-template-cs10/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/grid/column-template-cs10" %}



## Enhancing Grid performance by enabling or disabling Aria Labels

By default, the TypeScript Grid adds custom **aria-label** attributes to template cells by combining the cell value, the "**is template cell**" identifier, and the column header name. These attributes help screen readers provide meaningful context.

If your application doesn’t require screen reader support and includes multiple template columns, Aria labels may impact performance. To improve rendering, you can disable them for all template columns by setting the `enableAriaLabel` property to **false** in the `templateOptions` of those columns. If accessibility is needed, set it to **true** to retain Aria labels.

The example below enables Aria labels for the **Employee Image** column and disables them for the **First Name** column in the TypeScript Grid.



 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/typescript/grid/template-aria-label/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/grid/template-aria-label/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/grid/template-aria-label" %}
