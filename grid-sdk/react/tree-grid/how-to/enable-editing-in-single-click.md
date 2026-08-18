---
layout: post
title: Enable editing in single click in React TreeGrid | Syncfusion
description: Learn here all about Enable editing in single click in Syncfusion React TreeGrid component of Syncfusion Essential JS 2 and more.
control: Enable editing in single click 
platform: grid-sdk
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Enable editing in single click in React TreeGrid

## Row Editing

Enable single-click row editing in the TreeGrid by using the [startEdit](https://ej2.syncfusion.com/react/documentation/api/treegrid/#startedit) and [endEdit](https://ej2.syncfusion.com/react/documentation/api/treegrid/#endedit) methods.

Bind the **mousedown** event for the TreeGrid and, in the event handler, call [startEdit](https://ej2.syncfusion.com/react/documentation/api/treegrid/#startedit) or [endEdit](https://ej2.syncfusion.com/react/documentation/api/treegrid/#endedit) based on the clicked target element.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/grid-sdk/react/treegrid/refresh-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/grid-sdk/react/treegrid/refresh-cs2/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid-sdk/react/treegrid/refresh-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid-sdk/react/treegrid/refresh-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/react/treegrid/refresh-cs2" %}

## Cell Editing

Enable single-click cell editing in the TreeGrid by using the [editCell](https://ej2.syncfusion.com/react/documentation/api/treegrid/#editcell) method.

Bind the **mousedown** event for the TreeGrid and, in the event handler, call the [editCell](https://ej2.syncfusion.com/react/documentation/api/treegrid/#editcell) method based on the clicked target element.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/grid-sdk/react/treegrid/refresh-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/grid-sdk/react/treegrid/refresh-cs3/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid-sdk/react/treegrid/refresh-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid-sdk/react/treegrid/refresh-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/react/treegrid/refresh-cs3" %}

> Refer to the [React TreeGrid](https://www.syncfusion.com/react-ui-components/react-tree-grid) feature tour page for highlights. Explore the [React TreeGrid example](https://ej2.syncfusion.com/react/demos/#/material/treegrid/treegrid-overview) to learn how to present and manipulate data.