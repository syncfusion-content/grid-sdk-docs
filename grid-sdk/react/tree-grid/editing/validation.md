---
layout: post
title: Validation in React TreeGrid component | Syncfusion
description: Learn here all about Validation in Syncfusion React TreeGrid component of Syncfusion Essential JS 2 and more.
control: Validation 
platform: grid-sdk
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Validation in React TreeGrid

## Column validation

Column validation checks edited or newly added data and displays error messages for invalid fields before saving. TreeGrid uses the Form Validator component for column validation. Configure rules using the [columns.validationRules](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#validationrules) property.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/grid-sdk/react/treegrid/editing-cs15/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/grid-sdk/react/treegrid/editing-cs15/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/react/treegrid/editing-cs15" %}

## Custom validation

Custom validation rules can be defined for specific columns using **Form Validator custom rules**.

In the following example, a custom rule is applied to the **Priority** column.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/grid-sdk/react/treegrid/editing-cs16/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/grid-sdk/react/treegrid/editing-cs16/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/react/treegrid/editing-cs16" %}