---
layout: post
title: Customize the icons for pivot table in Javascript | Syncfusion
description: Learn here all about Customize the icons for pivot table in Syncfusion JavaScript Pivot Table component of Syncfusion Essential JS 2 and more.
platform: grid-sdk
control: Customize the icons for pivot table 
publishingplatform: grid-sdk
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Customize the icons within the JavaScript Pivot Table component

The Typescript Pivot Table component supports the customization of various icons across its interface. This includes icons for the field list, expand/collapse actions, and other interactive elements. You can customize these icons by overriding the default CSS classes with custom Unicode values.

## Customizing Field List Icon

To customize the field list icon, override the corresponding CSS class with a custom `content` property. The example below demonstrates how to change the default field list icon:

```css
#PivotView_PivotFieldList .e-icons.e-toggle-field-list::before {
    content: '\e337';
}
```

The Unicode value `'\e337'` represents a specific icon from the [Syncfusion icons](https://ej2.syncfusion.com/documentation/appearance/icons) library. Different Unicode values will display different icons.

## Implementation Steps

1. Add the CSS rule to your component's stylesheet or global styles.
2. Ensure the selector targets the correct pivot table instance using the appropriate ID.
3. Use valid Unicode values for the desired icons.
4. Test the customization to verify the icon displays correctly.

## Code Example

The following sample demonstrates a pivot table rendered with customized field list icon:

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/javascript/pivot-table/icon-customize-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/pivot-table/icon-customize-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/pivot-table/icon-customize-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/javascript/pivot-table/icon-customize-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/pivot-table/icon-customize-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/pivot-table/icon-customize-cs1" %}
{% endif %}