---
layout: post
title: JavaScript TreeGrid Checkbox Selection | Syncfusion
description: Learn how to enable and configure checkbox selection in JavaScript TreeGrid, including selection modes, persist selection, and checkbox behavior.
platform: grid-sdk
control: Check box selection
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Checkbox Selection in JavaScript TreeGrid

Checkbox selection provides an option to select multiple treegrid records with help of checkbox in each row.

To render the checkbox in each treegrid row, you need to use checkbox column with type as `checkbox` using the column [`type`](https://ej2.syncfusion.com/javascript/documentation/api/treegrid/column#type) property.


{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/javascript/treegrid/selection-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/treegrid/selection-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/treegrid/selection-cs2" %}

> * By default, selection is allowed by clicking a treegrid row or checkbox in that row. To allow selection only through checkbox, you can set the
[`selectionSettings.checkboxOnly`](https://ej2.syncfusion.com/javascript/documentation/api/treegrid/selectionSettingsModel#checkboxonly) property to true.
> * Selection can be persisted in all the operations using the [`selectionSettings.persistSelection`](https://ej2.syncfusion.com/javascript/documentation/api/treegrid/selectionSettingsModel#persistselection) property. For persisting selection on the treegrid, any one of the columns should be defined as a primary key using the [`columns.isPrimaryKey`](https://ej2.syncfusion.com/javascript/documentation/api/treegrid/column#isprimarykey) property.

## Checkbox selection mode

In checkbox selection, selection can also be done by clicking on rows. This selection provides two types of checkbox selection mode which can be set by using the following API [`selectionSettings.checkboxMode`](https://ej2.syncfusion.com/javascript/documentation/api/treegrid/selectionSettingsModel#checkboxmode). The modes are:

* `Default`: This is the default value of the `checkboxMode`. In this mode, user can select multiple rows by clicking rows one by one.
* `ResetOnRowClick`: In `ResetOnRowClick` mode, when user clicks on a row it will reset previously selected row. Also you can perform multiple-selection in this mode by press and hold **CTRL** key and click the desired rows. To select range of rows, press and hold the **SHIFT** key and click the rows.


{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/javascript/treegrid/selection-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/treegrid/selection-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/treegrid/selection-cs3" %}

 > Checkbox Selection feature is intended for row selection only; it is not compatible with cell selection mode.

## Conditional row selection

The TreeGrid supports conditional row selection through the [isRowSelectable](https://ej2.syncfusion.com/javascript/documentation/api/treegrid#isRowSelectable) callback. This allows selection to be controlled by custom business logic, ensuring that only rows meeting specific conditions can be selected. The callback receives each row’s data and returns "true" to allow selection or "false" to prevent it.

Local data: The callback runs once when the TreeGrid initializes and evaluates all records because the full dataset is already available on the client.

Remote data: The callback runs only for the rows displayed on the current page when the TreeGrid first loads. It runs again whenever the TreeGrid fetches new data such as during paging, filtering, or sorting to re-evaluate the newly visible rows.

In the following sample, selection is disabled for rows where the "Progress" column has the value "Completed".


{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/javascript/treegrid/selection-cs10/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/treegrid/selection-cs10/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/treegrid/selection-cs10" %}

## Hierarchy checkbox selection

The hierarchy checkbox enables cascading selection of parent and child rows in Tree Grid. When a parent row checkbox is selected, all its child records are automatically selected, and the parent state updates based on children selection. To enable hierarchy checkbox selection, set the `showCheckbox` property to `true` in a column and configure the `hierarchyCheckboxMode` property. By default, hierarchy checkbox mode is set to `self`.

The available modes are displayed in the following table.

| Item | Description |
|-----|-----|
| `self` | Only the targeted row is selected; children and parent are not affected. |
| `hierarchy` | Selection cascades to all descendants and adjusts the parent state accordingly. |
| `filteredHierarchy` | Behaves like hierarchy, but applies the cascade only to records matching the current filter or search criteria. |



{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/javascript/treegrid/columns-cs19/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/treegrid/columns-cs19/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/treegrid/columns-cs19" %}