---
layout: post
title: Tool Panel in Vue Grid | Syncfusion
description: Learn how to use the Tool Panel sidebar in the Vue Data Grid to manage columns, filters, record editing and custom content from one place.
control: Tool Panel
platform: grid-sdk
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Tool Panel in Vue Grid

The Tool Panel is a side bar in the Grid that gives quick access to column management, filtering, editing and custom content from a single place. Each panel opens from a button on the side bar.

## Enable the tool panel

Set the `enableToolPanel` property to `true` and choose the panels to show in the `toolPanelSettings.toolPanels` property. The built-in panels are `Columns`, `Filters` and `Edit`. A `Custom` panel renders your own content through the `template` property.

> The tool panel requires the **SideBar** module in addition to the modules of the panels you use. Provide the required modules to the Grid through `provide`.

| Panel | Required modules |
|-------|------------------|
| `Columns` | `SideBar`, `ColumnChooser` (add `Reorder` for column reordering, `Group` and `Aggregate` for the row group and values drop areas) |
| `Filters` | `SideBar`, `Filter` |
| `Edit` | `SideBar`, `Edit`, `Selection` |
| `Custom` | `SideBar` |

Each item in `toolPanels` is either the panel type name (for example `'Columns'`) or an object. In the object form only `type` is required for the built-in panels; `id` and `headerText` are optional. A `Custom` panel needs the `template` property.

| Property | Description |
|----------|-------------|
| `toolPanels` | Panels shown in the side bar, in order. |
| `position` | Side bar position: `Left` or `Right`. |
| `type` | How the side bar opens: `Push` or `Over`. See [Side bar type](#side-bar-type). |
| `width` | Width of the side bar in pixels. |

### Side bar type

* `Push` - the side bar opens beside the Grid and the Grid content shrinks to make room.
* `Over` - the side bar opens on top of the Grid content without resizing the Grid.

Use `width` to set the side bar width. In the samples on this page the first two use `Push` and the Custom panel sample uses `Over`, all with a `width` of `300`.

## Columns and Filters panel

The **Columns** panel lists the Grid columns with checkboxes. Clear a checkbox to hide a column and select it to show the column again.

The **Filters** panel lists every filterable column. Expand a column, set the filter and apply it.

To use them, add `Columns` and `Filters` to `toolPanels`, set `allowFiltering` to `true` and inject the `ColumnChooser` and `Filter` modules.

The sample at the end of this section shows both panels with the options described below.

### Reorder columns

Set `allowReordering` to `true` on the Grid and in `columnChooserSettings`, and inject the `Reorder` module. A drag handle appears beside each column in the panel; drag a column up or down to change its position in the Grid.

### Group and aggregate by drag and drop

When the `Group` and `Aggregate` modules are injected and `allowGrouping` is `true`, the Columns panel also shows two drop areas below the column list:

* **Row Groups** - drag a column here to group the Grid by that column. Remove the column from the area to ungroup it.
* **Values** - drag a column here to add an aggregate for it, and choose the aggregate type (for example Sum or Average) from the menu on the item.

The sample below shows both panels with reordering, row grouping and aggregates enabled.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid-sdk/vue/grid/tool-panel-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid-sdk/vue/grid/tool-panel-cs1/app.vue %}
{% endhighlight %}
{% highlight js tabtitle="datasource.js" %}
{% include code-snippet/grid-sdk/vue/grid/tool-panel-cs1/datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/vue/grid/tool-panel-cs1" %}

## Edit panel

The Edit panel updates the selected records. Select one or more rows, change a value in the panel and it is applied to all selected rows. To use it, set `editSettings.allowEditing` to `true`, set `isPrimaryKey` on a column, set `selectionSettings.type` to `Multiple`, add `Edit` to `toolPanels` and inject the `Edit` and `Selection` modules.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid-sdk/vue/grid/tool-panel-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid-sdk/vue/grid/tool-panel-cs2/app.vue %}
{% endhighlight %}
{% highlight js tabtitle="datasource.js" %}
{% include code-snippet/grid-sdk/vue/grid/tool-panel-cs2/datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/vue/grid/tool-panel-cs2" %}

## Custom panel

Add an object with `type` set to `Custom` and provide the content in the `template` property. The `id` and `headerText` properties are optional.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid-sdk/vue/grid/tool-panel-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid-sdk/vue/grid/tool-panel-cs3/app.vue %}
{% endhighlight %}
{% highlight js tabtitle="datasource.js" %}
{% include code-snippet/grid-sdk/vue/grid/tool-panel-cs3/datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/vue/grid/tool-panel-cs3" %}

## Related API

For the complete list of members, see the [Grid API reference](https://ej2.syncfusion.com/vue/documentation/api/grid).
