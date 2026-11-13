---
layout: post
title: TypeScript TreeGrid Dialog Editing | Syncfusion
description: Learn how to use dialog editing in TypeScript TreeGrid to edit records through customizable forms and perform CRUD operations.
platform: grid-sdk
control: Dialog editing
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Dialog Editing in TypeScript TreeGrid

In Dialog edit mode, when you start editing the currently selected row, data will be shown on a dialog.
You can change the cell values and save edited data to the data source.
To enable Dialog edit, set the [`editSettings.mode`](https://ej2.syncfusion.com/documentation/api/treegrid/editSettingsModel#mode) as `Dialog`.


 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/typescript/treegrid/edit-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/treegrid/edit-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/treegrid/edit-cs5" %}
