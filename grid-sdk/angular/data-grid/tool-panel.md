---
layout: post
title: Tool Panel in Angular Grid | Syncfusion
description: Learn how to use the Tool Panel sidebar in the Angular Data Grid to manage columns, drag and drop column order, and filters from one place.
control: Tool Panel
platform: grid-sdk
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Tool Panel in Angular Grid

The Tool Panel is a sidebar that centralizes grid operations in a single place. Dedicated panels, opened from a vertical button strip, help organize column management and filtering without leaving the grid. Panel content updates automatically with the current grid configuration.

The built-in panels are:

* **Columns** - shows or hides columns with a searchable checkbox list. When column chooser reordering is enabled, columns can be reordered by dragging the drag handle of each item.
* **Filters** - an accordion with one item per column that has filtering enabled; each item hosts the same filter UI as the column's filter dialog.
* **Custom** - a panel rendered from a template.

## Enable the Tool Panel

To enable the Tool Panel:

* Set the `enableToolPanel` property to `true`.
* Configure the panels using the `toolPanelSettings.toolPanels` property. Each panel needs a unique `id` and a `type` (`Columns`, `Filters` or `Custom`).
* Provide `FilterService`, `ReorderService`, `ColumnChooserService` and `SideBarService` in the component `providers`.

The `toolPanelSettings` property also controls the sidebar `position` (`Left` or `Right`), whether it is initially open (`isOpen`), and which panel is shown first (`defaultToolPanel`).

> The Filters panel requires `allowFiltering` to be `true`, and the Columns panel requires the `ColumnChooser` module.

## Reorder columns by drag and drop in the Columns panel

Set `columnChooserSettings.allowReordering` to `true` together with `allowReordering` on the Grid and the `Reorder` module to show a drag handle beside each column in the Columns panel. Dragging an item moves the column in the Grid header. The reorder follows the same rules as header reordering, so columns with `allowReordering` set to `false` or locked columns cannot be moved. The setting is ignored when a column chooser `template` is used.

In the following sample, the Columns and Filters panels are enabled and column chooser reordering is turned on.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid-sdk/angular/grid/tool-panel-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/grid-sdk/angular/grid/tool-panel-cs1/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid-sdk/angular/grid/tool-panel-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/samples/grid-sdk/angular/data-grid/tool-panel-cs1" %}

## Related API

For the complete list of members, see the [Grid API reference](https://ej2.syncfusion.com/angular/documentation/api/grid).
