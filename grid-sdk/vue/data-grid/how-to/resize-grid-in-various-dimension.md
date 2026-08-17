---
layout: post
title: Vue Grid Dynamic Resizing | Syncfusion
description: Learn how to resize Vue Data Grid dynamically by adjusting parent container dimensions and managing grid width and height responsively.
platform: grid-sdk
control: Resize the grid in various dimension 
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Grid Resizing in Vue Data Grid

The [Vue Data Grid](https://www.syncfusion.com/vue-components/vue-grid) component offers a friendly way to resize the grid, allowing you to adjust its width and height for improved data visualization.

To resize the grid externally, you can use an external button to modify the width of the parent element that contains the grid. This will effectively resize the grid along with its parent container.

The following example demonstrates how to resize the grid on external button click based on input. 

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid-sdk/vue/grid/how-to/grid-resize/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid-sdk/vue/grid/how-to/grid-resize/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/vue/grid/how-to/grid-resize" %}