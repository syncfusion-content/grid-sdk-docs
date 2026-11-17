---
layout: post
title: TypeScript TreeGrid Validation | Syncfusion
description: Learn how to configure validation in TypeScript TreeGrid, including required fields, custom rules, and error handling during editing.
platform: grid-sdk
control: Validation
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Validation in TypeScript TreeGrid

## Column validation

Column validation allows you to validate the edited or added row data and it display errors for invalid fields before saving data.
TreeGrid uses `Form Validator` component for column validation.
You can set validation rules by defining the [`columns.validationRules`](https://ej2.syncfusion.com/documentation/api/treegrid/column#validationrules).


 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/typescript/treegrid/edit-cs15/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/treegrid/edit-cs15/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/treegrid/edit-cs15" %}


## Custom validation

You can define your own custom validation rules for the specific columns by using `Form Validator custom rules`.

In the below demo, custom validation applied for `Priority` column.


 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/typescript/treegrid/edit-cs16/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/treegrid/edit-cs16/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/treegrid/edit-cs16" %}
