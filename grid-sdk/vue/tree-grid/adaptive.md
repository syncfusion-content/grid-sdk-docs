---
layout: post
title: Adaptive in Vue Treegrid component | Syncfusion
description: Learn here all about Adaptive in Syncfusion Vue Treegrid component of Syncfusion Essential JS 2 and more.
control: Adaptive 
platform: grid-sdk
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Adaptive in Vue Treegrid component

The TreeGrid user interface (UI) was redesigned to provide an optimal viewing experience and improve usability on small screens. This interface will render the filter, sort, and edit dialogs adaptively.

## Render adaptive dialogs

When you enable the [`enableAdaptiveUI`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#enableadaptiveui) property, the tree grid will render the filter, sort, and edit dialogs in full screen for a better user experience. The following demo demonstrates this behaviour.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid-sdk/vue/treegrid/adaptive-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid-sdk/vue/treegrid/adaptive-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/vue/treegrid/adaptive-cs1" %}