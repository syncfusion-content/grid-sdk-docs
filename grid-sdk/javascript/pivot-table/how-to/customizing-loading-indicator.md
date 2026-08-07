---
layout: post
title: Customizing loading indicator in Javascript | Syncfusion
description: Learn here all about Customizing loading indicator in Syncfusion ##Platform_Name## Pivot Table component of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Customizing loading indicator 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Customize loading indicator in JavaScript Pivot Table Component

The Pivot Table displays a loading indicator during data processing operations such as filtering, sorting, and aggregation calculations. The default loading spinner can be customized to match application design requirements using the [`spinnerTemplate`](https://ej2.syncfusion.com/documentation/api/pivotview/index-default#spinnertemplate) property.

The [`spinnerTemplate`](https://ej2.syncfusion.com/documentation/api/pivotview/index-default#spinnertemplate) property accepts an HTML string that defines the custom loading indicator appearance. This enables control over the visual presentation, including custom styling and animations.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/pivot-table-cs78/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs78/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs78" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/pivot-table-cs78/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs78/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs78" %}
{% endif %}

## Disabling the loading indicator

The loading indicator can be completely disabled by setting the [`spinnerTemplate`](https://ej2.syncfusion.com/documentation/api/pivotview/index-default#spinnertemplate) property to an empty string.

```js
function App() {
    return (<PivotViewComponent id='PivotView' height={350} spinnerTemplate={''}></PivotViewComponent>);
};
export default App;
```
