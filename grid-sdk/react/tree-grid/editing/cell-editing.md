---
layout: post
title: Cell editing in React TreeGrid component | Syncfusion
description: Learn here all about Cell editing in Syncfusion React TreeGrid component of Syncfusion Essential JS 2 and more.
control: Cell editing 
platform: grid-sdk
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Cell editing in React TreeGrid

In cell edit mode, double-clicking a cell switches it to edit state. Modify the value and save it to the datasource. Enable cell editing by setting [editSettings.mode](https://ej2.syncfusion.com/react/documentation/api/treegrid/editSettingsModel/#mode) to **Cell**.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/grid-sdk/react/treegrid/editing-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/grid-sdk/react/treegrid/editing-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/react/treegrid/editing-cs2" %}

> Cell edit mode is the default editing mode.