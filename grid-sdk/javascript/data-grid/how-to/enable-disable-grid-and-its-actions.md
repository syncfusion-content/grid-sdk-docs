---
layout: post
title: Enable disable grid and its actions in JavaScript Grid control | Syncfusion
description: Learn here all about Enable disable grid and its actions in Syncfusion JavaScript Grid control of Syncfusion Essential JS 2 and more.
platform: grid-sdk
control: Enable disable grid and its actions 
publishingplatform: grid-sdk
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Enable disable grid and its actions in JavaScript Grid control

You can enable or disable the JavaScript Grid and its actions by applying or removing specific CSS styles. This functionality is particularly useful in scenarios where interactions need to be restricted. Follow the steps below to implement this feature.

**Step 1**:

Create CSS class with custom style to override the default style of Grid.

```
    .disablegrid {
        pointer-events: none;
        opacity: 0.4;
    }
    .wrapper {
        cursor: not-allowed;
    }

```

**Step 2**:

Add/Remove the CSS class to the Grid in the [click](../../api/button#click) event handler of Button.

```ts
    document.getElementById('primarybtn').addEventListener('click', () => {
        if (grid.element.classList.contains('disablegrid')) {
            grid.element.classList.remove('disablegrid');
            document.getElementById("GridParent").classList.remove('wrapper');
        }
        else {
            grid.element.classList.add('disablegrid');
            document.getElementById("GridParent").classList.add('wrapper');
        }
    });

```

In the example below, clicking the button will toggle the enable/disable state of the Grid and its actions:

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/javascript/grid/disablegrid-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/grid/disablegrid-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/grid/disablegrid-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/javascript/grid/disablegrid-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/grid/disablegrid-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/grid/disablegrid-cs2" %}
{% endif %}