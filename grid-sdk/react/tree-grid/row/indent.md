---
layout: post
title: Indent in React TreeGrid component | Syncfusion
description: Learn here all about Indent in Syncfusion React TreeGrid component of Syncfusion Essential JS 2 and more.
control: Indent 
platform: grid-sdk
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Indent in React TreeGrid

The indent and outdent feature changes the hierarchy level of rows in the TreeGrid. The indent action moves the selected row as the last child of its previous row, whereas the outdent action moves the selected row as a sibling of its parent row.

To use the indent and outdent feature, inject the `RowDD` module into the TreeGrid. The TreeGrid toolbar includes built-in items to execute indent and outdent actions. Configure these with the toolbar property.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/grid-sdk/react/treegrid/indent-outdent-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/grid-sdk/react/treegrid/indent-outdent-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/react/treegrid/indent-outdent-cs1" %}

## Indent/Outdent a row programmatically

Change the hierarchy level of a record programmatically using the `indent` and `outdent` methods.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/grid-sdk/react/treegrid/programmatic-indent-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/grid-sdk/react/treegrid/programmatic-indent-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/react/treegrid/programmatic-indent-cs1" %}