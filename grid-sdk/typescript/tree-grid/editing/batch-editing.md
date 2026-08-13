---
layout: post
title: TypeScript TreeGrid Batch Editing | Syncfusion
description: Learn how to use batch editing in TypeScript TreeGrid to edit multiple cells, perform bulk updates, and save changes efficiently.
platform: grid-sdk
control: Batch editing 
publishingplatform: grid-sdk
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Batch Editing in TypeScript TreeGrid

In Batch edit mode, when you double-click on the Tree Grid cell, then the target cell changed to edit state. You can bulk save (added, changed and deleted data in the single request) to data source by click on the toolbar's `Update` button or by externally invoking the [`batchSave`](../../api/treegrid/edit/#batchsave) method. To enable Batch edit, set the [`editSettings.mode`](../../api/grid/editSettings/#mode) as `Batch`.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/typescript/treegrid/edit-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/treegrid/edit-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/treegrid/edit-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/typescript/treegrid/edit-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/treegrid/edit-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/treegrid/edit-cs1" %}
{% endif %}