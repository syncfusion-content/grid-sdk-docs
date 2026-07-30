---
layout: post
title: Custom tool bar in JavaScript Grid control | Syncfusion
description: Learn here all about Custom tool bar in Syncfusion JavaScript Grid control of Syncfusion Essential JS 2 and more.
platform: grid-sdk
control: Custom tool bar 
publishingplatform: grid-sdk
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Custom tool bar in JavaScript Grid control

Custom toolbar in JavaScript Grid allows you to create a distinctive toolbar layout, style, and functionality that aligns with the specific needs of your application, providing a personalized experience within the Grid control.

This can be achieved by utilizing the [toolbarTemplate](../../api/grid/#toolbartemplate) property, which offers extensive customization options for the toolbar. You can define a custom template for the toolbar and handle the actions for this toolbar template items are defined in the **clicked** event.

The following example demonstrates, how to render the custom toolbar using `toolbarTemplate`.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/javascript/grid/toolbar-template-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/grid/toolbar-template-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/grid/toolbar-template-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/javascript/grid/toolbar-template-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/grid/toolbar-template-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/grid/toolbar-template-cs2" %}
{% endif %}

## Render image with text in custom toolbar

Render an image with text in custom toolbar in JavaScript Grid allows easily render an image along with text in the toolbar of the Grid. This feature enhances the visual presentation of the Grid, providing additional context and improving the overall experience.

To render an image with text in custom toolbar, This can be achieved by utilizing the [toolbarTemplate](../../api/grid/#toolbartemplate) property.

The following example demonstrates how to render an image in the toolbar of the grid using `toolbarTemplate`.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/javascript/grid/toolbar-renderimage-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/grid/toolbar-renderimage-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/grid/toolbar-renderimage-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/javascript/grid/toolbar-renderimage-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/grid/toolbar-renderimage-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/grid/toolbar-renderimage-cs1" %}
{% endif %}

> You can further customize the styles and layout of the image and text in the custom toolbar to suit your specific design requirements.

## Render DropDownList in custom toolbar

{% if page.publishingplatform == "typescript" %}
 
Render DropDownList in custom toolbar in JavaScript Grid enables you to extend the functionality of the custom toolbar by incorporating a [DropDownList](../../drop-down-list/getting-started) control, allowing you to perform various actions within the Grid based on their selections.

 {% elsif page.publishingplatform == "javascript" %}
 
Render DropDownList in custom toolbar in JavaScript Grid enables you to extend the functionality of the custom toolbar by incorporating a [DropDownList](../../drop-down-list/es5-getting-started) control, allowing you to perform various actions within the Grid based on their selections.

{% endif %}

This can be achieved by utilizing the [toolbarTemplate](../../api/grid/#toolbartemplate). The example below demonstrates how to render the **DropDownList** control in the custom toolbar, where the toolbar template includes the its [change](../../api/drop-down-list#change) event is bound to the **onChange** method.

In the **onChange** method, the text of the selected item is checked to determine the appropriate action. For example, if **Update** is chosen, the [endEdit](../../api/grid#endedit) method is called to exit the edit mode. If **Edit** is selected, the selected record is passed to the [startEdit](../../api/grid#startedit) method to initiate the edit mode dynamically. Similarly, if **Delete** is picked, the selected record is passed to the [deleteRecord](../../api/grid#deleterecord) method to remove it from the grid.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/javascript/grid/toolbar-dropdown-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/grid/toolbar-dropdown-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/grid/toolbar-dropdown-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/javascript/grid/toolbar-dropdown-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/grid/toolbar-dropdown-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/grid/toolbar-dropdown-cs3" %}
{% endif %}

## Render a control or element using the toolbar template

Rendering a control or element using the toolbar template in the JavaScript Grid allows you to extend the capabilities of the grid toolbar by incorporating custom components or elements. This provides flexibility to enhance the toolbar with custom buttons, dropdowns, input fields, icons, or any other desired UI elements. You can bind event handlers or handle interactions within the template to enable specific actions or behaviors associated with the added components or elements.

{% if page.publishingplatform == "typescript" %}
 
To render custom components or elements within the toolbar, use the [toolbarTemplate](../../api/grid/#toolbartemplate) property. This allows you to include other components, such as a [Button](../../button/getting-started), and perform specific grid actions based on the button click. For example, when the **ExcelExport** button is clicked, the [excelExport](../../api/grid/#excelexport) method is called to export the grid to Excel. Similarly, when the **PdfExport** button is clicked, the [pdfExport](../../api/grid/#pdfexport) method is called to export the grid to PDF format.Likewise, when the **Print** button is clicked, the [print](../../api/grid/#print) method will triggered to print the grid.

 {% elsif page.publishingplatform == "javascript" %}
 
To render custom components or elements within the toolbar, use the [toolbarTemplate](../../api/grid/#toolbartemplate) property. This allows you to include other components, such as a [Button](../../button/es5-getting-started), and perform specific grid actions based on the button click. For example, when the **ExcelExport** button is clicked, the [excelExport](../../api/grid/#excelexport) method is called to export the grid to Excel. Similarly, when the **PdfExport** button is clicked, the [pdfExport](../../api/grid/#pdfexport) method is called to export the grid to PDF format.Likewise, when the **Print** button is clicked, the [print](../../api/grid/#print) method will triggered to print the grid.

{% endif %}

The following example demonstrates how to render a **Button** control in the toolbar using `toolbarTemplate` and perform grid action based on the respected button click.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/javascript/grid/toolbar-template-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/grid/toolbar-template-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/grid/toolbar-template-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/javascript/grid/toolbar-template-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/grid/toolbar-template-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/grid/toolbar-template-cs3" %}
{% endif %}