---
layout: post
title: State persistence in JavaScript Pivot Table component | Syncfusion
description: Learn here all about State persistence in Syncfusion JavaScript Pivot Table component of Syncfusion Essential JS 2 and more.
platform: grid-sdk
control: State persistence 
publishingplatform: grid-sdk
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# State persistence in JavaScript Pivot Table component

State persistence enables users to automatically retain the entire configuration of the Pivot Table component in the browser's local storage (cookies). This includes the current layout, field arrangements, sorting, applied filters, and the expanded or collapsed states of fields. By enabling the [`enablePersistence`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/index-default#enablepersistence) property in the Pivot Table component, all these interactive states and settings are saved automatically. As a result, users can refresh the browser or navigate to different pages and return at any time, knowing that all modified report settings will be retained—ensuring a seamless and uninterrupted data analysis experience.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/javascript/pivot-table/state-persistence-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/pivot-table/state-persistence-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/pivot-table/state-persistence-cs1" %}

## Save and Load Pivot Layout

In addition to automatic state persistence, the Pivot Table component allows you to save and restore the current layout programmatically. By using the [`getPersistData`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/index-default#getpersistdata) method, you can retrieve the complete state of the Pivot Table component as a serialized string. This string can be stored and later re-applied to the component by passing it to the [`loadPersistData`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/index-default#loadpersistdata) method. This approach offers flexibility for saving user-specific layouts, restoring previous configurations, or implementing custom workflows for managing and reloading the component’s state as needed.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/javascript/pivot-table/state-persistence-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/pivot-table/state-persistence-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/pivot-table/state-persistence-cs2" %}