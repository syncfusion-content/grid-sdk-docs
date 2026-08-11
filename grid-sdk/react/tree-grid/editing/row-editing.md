---
layout: post
title: React TreeGrid Row Editing | Syncfusion
description: Learn how to use row editing in React TreeGrid, including editing rows, programmatic CRUD operations, and confirmation dialogs.
control: Row editing 
platform: grid-sdk
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Row Editing in React TreeGrid

In row edit mode, starting an edit on the selected record switches the entire row to edit state. Cell values across the row can be modified and then saved to the datasource. Enable row editing by setting [editSettings.mode](https://ej2.syncfusion.com/react/documentation/api/treegrid/editSettingsModel#mode) to **Row**.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/grid-sdk/react/treegrid/editing-cs14/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/grid-sdk/react/treegrid/editing-cs14/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/react/treegrid/editing-cs14" %}