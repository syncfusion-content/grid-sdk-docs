---
layout: post
title: JavaScript TreeGrid Conditional Row Selection | Syncfusion
description: Learn how to select TreeGrid rows based on specific conditions using the selectRows method in the JavaScript TreeGrid component.
platform: grid-sdk
control: Select treegrid rows based on certain condition 
publishingplatform: grid-sdk
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Select Rows Based on Conditions in JavaScript TreeGrid

You can select the specific row in the Tree Grid based on a certain condition by using the [`selectRows`](../api/treegrid/#selectrows) method in the [`dataBound`](../api/treegrid/#databound) event of Tree Grid.

In the below demo, we have selected the Tree Grid rows only when *Duration* column value greater than *4*.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/javascript/treegrid/select-rows-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/treegrid/select-rows-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/treegrid/select-rows-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/javascript/treegrid/select-rows-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/treegrid/select-rows-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/treegrid/select-rows-cs1" %}
{% endif %}

> You can refer to our [`JavaScript Tree Grid`](https://www.syncfusion.com/javascript-ui-controls/js-tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our JavaScript Tree Grid example [`JavaScript Tree Grid example`](https://ej2.syncfusion.com/demos/#/material/tree-grid/treegrid-overview.html) to knows how to present and manipulate data.