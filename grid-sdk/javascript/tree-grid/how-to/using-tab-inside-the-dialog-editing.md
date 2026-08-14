---
layout: post
title: JavaScript TreeGrid Tabs in Dialog Editing | Syncfusion
description: Learn how to use tabs within dialog editing in JavaScript TreeGrid to organize form fields and create a streamlined editing experience.
platform: grid-sdk
control: Using tab inside the dialog editing
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Using Tabs Inside Dialog Editing in JavaScript TreeGrid

You can use [`tab`](../../../tab) component inside dialog edit UI using dialog template feature. The dialog template feature can be enabled by defining [`editSettings.mode`](../api/treegrid/editSettings#mode) as `Dialog` and [`editSetting.template`](../api/treegrid/editSettings#template) as SCRIPT element ID or HTML string which holds the template.

The following example demonstrate the usage of tab control inside the dialog template.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/javascript/treegrid/tab-inside-dialog-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/treegrid/tab-inside-dialog-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/treegrid/tab-inside-dialog-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/javascript/treegrid/tab-inside-dialog-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/treegrid/tab-inside-dialog-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/treegrid/tab-inside-dialog-cs1" %}
{% endif %}

> You can refer to our [`JavaScript Tree Grid`](https://www.syncfusion.com/javascript-ui-controls/js-tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our JavaScript Tree Grid example [`JavaScript Tree Grid example`](https://ej2.syncfusion.com/demos/#/material/tree-grid/treegrid-overview.html) to knows how to present and manipulate data.