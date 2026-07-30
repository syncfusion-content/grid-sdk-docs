---
layout: post
title: Customize cells elements in React Pivotview component | Syncfusion
description: Learn here all about Customize cells elements in Syncfusion React Pivotview component of Syncfusion Essential JS 2 and more.
control: Customize cells elements 
platform: grid-sdk
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Customize cells elements in React Pivotview component

You can customize each cell in the Pivot Table by using the [`cellTemplate`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#celltemplate) property. The [`cellTemplate`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#celltemplate) option accepts either an HTML string or the ID of an HTML element. You can use this to append extra HTML and show custom content or styles for every cell.

## Implementation example

The following example demonstrates how to customize pivot table cells by displaying revenue trends with visual indicators. Each cell shows the actual value along with trend icons that represent performance direction.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid-sdk/react/pivot-table/default-cs159/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid-sdk/react/pivot-table/default-cs159/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/react/pivot-table/default-cs159" %}
