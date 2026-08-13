---
layout: post
title: Angular Grid Complex Column as Foreign Key Column | Syncfusion
description: Learn how to use a complex column as a foreign key column in Angular Data Grid to display related data from external data sources and nested object fields.
platform: grid-sdk
control: Complex column as foreign key column 
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Complex column as foreign key column in Angular Data Grid

You can configure a complex column, such as a nested property, to act as a foreign key column in the Syncfusion Angular Grid. This allows displaying and binding data from a related foreign data source, using complex field paths for scenarios involving nested data.

The following example demonstrates setting **Employee.EmployeeID** as a complex column and declaring it as a foreign key column. In this setup, the grid displays the **FirstName** field from the associated foreign data.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid-sdk/angular/grid/foreignkey-cs11/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid-sdk/angular/grid/foreignkey-cs11/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/samples/grid-sdk/angular/grid/foreignkey-cs11" %}
