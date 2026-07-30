---
layout: post
title: Select treegrid rows based on certain condition in Vue Treegrid component | Syncfusion
description: Learn here all about Select treegrid rows based on certain condition in Syncfusion Vue Treegrid component of Syncfusion Essential JS 2 and more.
control: Select treegrid rows based on certain condition 
platform: grid-sdk
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Select treegrid rows based on certain condition in Vue Treegrid component

You can select the specific row in the Tree Grid based on a certain condition by using the [`selectRows`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#selectrows) method in the [`dataBound`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#databound) event of Tree Grid.

In the below demo, we have selected the Tree Grid rows only when *Duration* column value greater than *4*.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid-sdk/vue/treegrid/how-to/default-cs20/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid-sdk/vue/treegrid/how-to/default-cs20/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/vue/treegrid/how-to/default-cs20" %}