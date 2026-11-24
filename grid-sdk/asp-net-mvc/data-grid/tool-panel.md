---
layout: post
title: Tool Panel in ASP.NET MVC Grid | Syncfusion
description: Learn how to use the Tool Panel sidebar in the ASP.NET MVC Data Grid to manage columns, filters, record editing and custom content from one place.
control: Tool Panel
platform: grid-sdk
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Tool Panel in ASP.NET MVC Grid

The Tool Panel is a sidebar that centralizes grid operations in a single place. Dedicated panels, opened from a vertical button strip, help organize column management, filtering and editing without leaving the grid. Panel content updates automatically with the current grid configuration, and only the actions that are available are shown.

The built-in panels are:

| Panel | `type` | Purpose |
|-------|--------|---------|
| Columns | `Columns` | Show or hide columns and reorder them by drag and drop. |
| Filters | `Filters` | Apply and modify filters for all filterable columns from one panel. |
| Editing | `Edit` | Update the selected records, including bulk editing of several rows. |
| Custom | `Custom` | Render application-specific content from a template. |

## Side bar

The side bar hosts the tool panels. Enable it by setting the `enableToolPanel` property to `true`, and configure it with the `toolPanelSettings` property.

> The required modules are injected automatically by the ASP.NET MVC helper. Each panel also needs its feature module: `ColumnChooser` for Columns, `Filter` for Filters, and `Edit` and `Selection` for Editing.

### Configure the side bar

| Property (`toolPanelSettings`) | Description |
|----------|-------------|
| `toolPanels` | Collection of panels shown in the side bar. Each panel needs a unique `id` and a `type`. |
| `defaultToolPanel` | The `id` of the panel that is selected when the side bar is opened. |
| `isOpen` | Specifies whether the side bar is open when the grid is initially rendered. |
| `hiddenByDefault` | Specifies whether the side bar is hidden when the grid is initially rendered. |
| `position` | Position of the side bar: `Left` or `Right`. |
| `type` | Display mode of the side bar. |
| `width` | Width of the side bar. |

Each item of `toolPanels` supports the following properties:

| Property | Description |
|----------|-------------|
| `id` | Unique identifier of the panel. |
| `type` | Panel type: `Columns`, `Filters`, `Edit` or `Custom`. |
| `headerText` | Text displayed as the panel header. |
| `iconCss` | CSS class of the icon displayed on the side bar button. |
| `tooltip` | Tooltip shown for the side bar button. |
| `template` | Content of a `Custom` panel. |
| `visible` | Specifies whether the panel button is shown. |
| `columns` | Columns the panel works with. |

The panel body is created lazily, when the panel is opened for the first time. The side bar raises the `toolPanelCreated`, `toolPanelOpen`, `toolPanelOpened`, `toolPanelClose` and `toolPanelClosed` events; `toolPanelOpen` and `toolPanelClose` can be canceled.

## Columns panel

The Columns panel lists the grid columns with checkboxes and a search box, so columns can be shown or hidden directly from the side bar.

### Reorder columns by drag and drop

Set `columnChooserSettings.allowReordering` to `true`, together with `allowReordering` on the Grid and the `Reorder` module, to show a drag handle beside each column. Dragging an item moves the column in the Grid header, following the same rules as header reordering: columns with `allowReordering` set to `false`, locked columns and columns outside the frozen boundary cannot be moved. The setting is ignored when a column chooser `template` is used.

The following sample enables the Columns and Filters panels with drag-and-drop column reordering.

{% tabs %}
{% highlight cshtml tabtitle="Razor" %}
{% include code-snippet/grid-sdk/asp-net-mvc/grid/tool-panel/tool-panel-cs1/razor %}
{% endhighlight %}
{% highlight cshtml tabtitle="Tag Helper" %}
{% include code-snippet/grid-sdk/asp-net-mvc/grid/tool-panel/tool-panel-cs1/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="tool-panel.cs" %}
{% include code-snippet/grid-sdk/asp-net-mvc/grid/tool-panel/tool-panel-cs1/tool-panel.cs %}
{% endhighlight %}
{% endtabs %}

## Filters panel

The Filters panel shows an accordion with one item for each column that has filtering enabled. Expanding an item displays the same filter UI as the column's filter dialog (`Menu`, `CheckBox` or `Excel`, based on the filter type configured for the column), so filters can be viewed, applied and cleared from a single place without opening individual column filter menus.

To use the panel, set `allowFiltering` to `true`, add a panel of type `Filters` and inject the `Filter` module. The first sample on this page shows the Filters panel.

## Editing panel

The Editing panel is a dedicated workspace for updating the selected records. It is designed for bulk editing: changes made in the panel are applied to every selected row instead of editing rows or cells one by one.

* The panel shows editable fields for the selected rows, using the editors defined by each column, including custom editors.
* When one row is selected, its values are displayed. When several rows are selected, the editors are empty, and the value you enter is applied to all of them.
* There are no Save or Cancel buttons. A field is validated when its editor changes, using the column `validationRules`, and the valid value is applied immediately.
* The panel is rendered again when the selection changes.

To use the panel, set `editSettings.allowEditing` to `true`, define a primary key column, add a panel of type `Edit` and inject the `Edit` and `Selection` modules. Set `selectionSettings.type` to `Multiple` to edit several rows together.

{% tabs %}
{% highlight cshtml tabtitle="Razor" %}
{% include code-snippet/grid-sdk/asp-net-mvc/grid/tool-panel/tool-panel-cs2/razor %}
{% endhighlight %}
{% highlight cshtml tabtitle="Tag Helper" %}
{% include code-snippet/grid-sdk/asp-net-mvc/grid/tool-panel/tool-panel-cs2/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="tool-panel.cs" %}
{% include code-snippet/grid-sdk/asp-net-mvc/grid/tool-panel/tool-panel-cs2/tool-panel.cs %}
{% endhighlight %}
{% endtabs %}

## Custom panel

A custom panel integrates application-specific content into the side bar, for example additional information, custom actions or workflows beyond the built-in Columns, Filters and Editing panels. Add a panel with `type` set to `Custom` and provide its content through the `template` property, along with the `headerText` and `iconCss` used on the side bar button.

{% tabs %}
{% highlight cshtml tabtitle="Razor" %}
{% include code-snippet/grid-sdk/asp-net-mvc/grid/tool-panel/tool-panel-cs3/razor %}
{% endhighlight %}
{% highlight cshtml tabtitle="Tag Helper" %}
{% include code-snippet/grid-sdk/asp-net-mvc/grid/tool-panel/tool-panel-cs3/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="tool-panel.cs" %}
{% include code-snippet/grid-sdk/asp-net-mvc/grid/tool-panel/tool-panel-cs3/tool-panel.cs %}
{% endhighlight %}
{% endtabs %}

## Related API

For the complete list of members, see the [Grid API reference](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Grids.Grid.html).
