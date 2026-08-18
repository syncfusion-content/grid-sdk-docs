---
layout: post
title: TypeScript TreeGrid Wizard-Like Dialog Editing | Syncfusion
description: Learn how to implement wizard-like dialog editing in TypeScript TreeGrid to guide users through multi-step record creation and editing processes.
platform: grid-sdk
control: Use wizard like dialog editing
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Use Wizard-Like Dialog Editing in TypeScript TreeGrid

Wizard helps you create intuitive step-by-step forms to fill. You can achieve the wizard like editing by using the dialog template feature. It support your own editing template by defining [`editSettings.mode`](../api/treegrid/editSettings#mode) as **Dialog** and [`editSetting.template`](../api/treegrid/editSettings#template) as SCRIPT element ID or HTML string which holds the template.

The following example demonstrate the wizard like editing in the Tree Grid with the obtrusive Validation.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/typescript/treegrid/wizard-editing-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/treegrid/wizard-editing-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/treegrid/wizard-editing-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/typescript/treegrid/wizard-editing-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/treegrid/wizard-editing-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/treegrid/wizard-editing-cs1" %}
{% endif %}

> You can refer to our [`JavaScript Tree Grid`](https://www.syncfusion.com/javascript-ui-controls/js-tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our JavaScript Tree Grid example [`JavaScript Tree Grid example`](https://ej2.syncfusion.com/demos/#/material/tree-grid/treegrid-overview.html) to knows how to present and manipulate data.