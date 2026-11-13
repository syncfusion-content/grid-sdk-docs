---
layout: post
title: TypeScript TreeGrid Column Chooser | Syncfusion
description: Learn how to use the column chooser in TypeScript TreeGrid to show, hide, and manage column visibility dynamically.
platform: grid-sdk
control: Column chooser
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Column Chooser in TypeScript TreeGrid

The column chooser has options to show or hide columns dynamically. It can be enabled by defining the [`showColumnChooser`](https://ej2.syncfusion.com/documentation/api/treegrid#showcolumnchooser) as true.

To use the column chooser, inject the **Column Chooser** module in the treegrid.


 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/typescript/treegrid/columns-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/treegrid/columns-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/treegrid/columns-cs2" %}


> You can hide the column names in column chooser by defining the [`columns.showInColumnChooser`](https://ej2.syncfusion.com/documentation/api/treegrid/column#showincolumnchooser) as false.

## Open column chooser by external button

The Column chooser can be displayed on a page through external button by invoking
the [`openColumnChooser`](https://ej2.syncfusion.com/documentation/api/treegrid#opencolumnchooser) method with **X** and **Y** axis positions.


 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/typescript/treegrid/columnchooser-method-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/treegrid/columnchooser-method-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/treegrid/columnchooser-method-cs1" %}


## Column chooser template in Syncfusion TypeScript TreeGrid

The column chooser template feature allows full customization of the column chooser’s header, content, and footer, making it easier to manage column visibility. To enable the column chooser, set [showColumnChooser](https://ej2.syncfusion.com/documentation/api/treegrid#showcolumnmenu) to **true** and add **ColumnChooser** to the [toolbar](https://ej2.syncfusion.com/documentation/api/treegrid#toolbar) property.

To implement a custom column chooser template in the TreeGrid, use the following properties:

* **columnChooserSettings.headerTemplate** - Defines the header template of the column chooser.

* **columnChooserSettings.template**- Defines the content template.

* **columnChooserSettings.footerTemplate** - Defines the footer template.

* **columnChooserSettings.renderCustomColumnChooser** -  Allows you to override the default column chooser UI with a fully customized layout.

In this example, a Syncfusion TreeView component is rendered inside the column chooser. To use the TreeView component, install the Syncfusion TreeView package as described in the [documentation](https://ej2.syncfusion.com/documentation/treeview/getting-started). The `columnChooserSettings.template` property defines a element with the `id` set to **tree**, providing as a container for the TreeView component. The `columnChooserSettings.renderCustomColumnChooser` method initializes the TreeView with checkboxes and appends it to this template. Checkbox selection is handled using the [nodeClicked](https://ej2.syncfusion.com/documentation/api/treeview#nodeclicked) and [keyPress](https://ej2.syncfusion.com/documentation/api/treeview#keypress) events, which organize columns into **Task Info**, **Schedule**, and **Progress**.

The column chooser footer is customized using `columnChooserSettings.footerTemplate`, replacing the default buttons with customized **Apply** and **Close** buttons. The **Apply** button updates column visibility based on selection, while the **Close** button closes the column chooser via the `onClick` event. Additionally, the header is customized using `columnChooserSettings.headerTemplate` to include a title and an icon.


 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/typescript/treegrid/column-chooser-template/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/treegrid/column-chooser-template/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/treegrid/column-chooser-template" %}
