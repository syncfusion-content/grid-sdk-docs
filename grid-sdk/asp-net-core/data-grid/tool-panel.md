---
layout: post
title: Tool Panel in ASP.NET Core Grid | Syncfusion
description: Learn how to use the Tool Panel sidebar in the ASP.NET Core Data Grid to manage columns, drag and drop column order, and filters from one place.
control: Tool Panel
platform: grid-sdk
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Tool Panel in ASP.NET Core Grid

The Tool Panel is a sidebar that centralizes grid operations in a single place. Dedicated panels, opened from a vertical button strip, help organize column management and filtering without leaving the grid. Panel content updates automatically with the current grid configuration.

The built-in panels are:

* **Columns** - shows or hides columns with a searchable checkbox list. When column chooser reordering is enabled, columns can be reordered by dragging the drag handle of each item.
* **Filters** - an accordion with one item per column that has filtering enabled; each item hosts the same filter UI as the column's filter dialog.
* **Custom** - a panel rendered from a template.

## Enable the Tool Panel

To enable the Tool Panel:

* Set the `enableToolPanel` property to `true`.
* Configure the panels using the `toolPanelSettings.toolPanels` property. Each panel needs a unique `id` and a `type` (`Columns`, `Filters` or `Custom`).
* The required modules are injected automatically by the ASP.NET helper.

The `toolPanelSettings` property also controls the sidebar `position` (`Left` or `Right`), whether it is initially open (`isOpen`), and which panel is shown first (`defaultToolPanel`).

> The Filters panel requires `allowFiltering` to be `true`, and the Columns panel requires the `ColumnChooser` module.

## Reorder columns by drag and drop in the Columns panel

Set `columnChooserSettings.allowReordering` to `true` together with `allowReordering` on the Grid and the `Reorder` module to show a drag handle beside each column in the Columns panel. Dragging an item moves the column in the Grid header. The reorder follows the same rules as header reordering, so columns with `allowReordering` set to `false` or locked columns cannot be moved. The setting is ignored when a column chooser `template` is used.

In the following sample, the Columns and Filters panels are enabled and column chooser reordering is turned on.

{% tabs %}
{% highlight cshtml tabtitle="Razor" %}
{% include code-snippet/grid-sdk/asp-net-core/grid/tool-panel/tool-panel-cs1/razor %}
{% endhighlight %}
{% highlight cshtml tabtitle="Tag Helper" %}
{% include code-snippet/grid-sdk/asp-net-core/grid/tool-panel/tool-panel-cs1/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="tool-panel.cs" %}
{% include code-snippet/grid-sdk/asp-net-core/grid/tool-panel/tool-panel-cs1/tool-panel.cs %}
{% endhighlight %}
{% endtabs %}

## Related API

For the complete list of members, see the [Grid API reference](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Grids.Grid.html).
