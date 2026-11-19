---
layout: post
title: Expand group by level in ASP.NET MVC Grid component | Syncfusion
description: Learn how to expand grouped rows up to a specific level in the Syncfusion ASP.NET MVC Grid component using the group module.
control: Expand group by level
platform: grid-sdk
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Expand group by level in ASP.NET MVC Grid component

When data is grouped by multiple columns, the Grid renders a hierarchy of group caption rows. Expanding every group is not always desirable. Expanding only up to a chosen level gives a summarized view while deeper levels stay collapsed.

The Grid has no dedicated property for this, so it is achieved by collapsing all groups with the [groupCollapseAll](https://ej2.syncfusion.com/aspnetmvc/documentation/api/grid#groupcollapseall) method and then expanding the caption rows level by level with the [expandCollapseRows](https://ej2.syncfusion.com/aspnetmvc/documentation/api/grid/group#expandcollapserows) method of the Group module. The level of a caption row is the number of indent cells it contains.

In the following example, the Grid is grouped by `ShipCountry` and `ShipCity`, and only the first level (`ShipCountry`) is expanded after the data is bound, so the `ShipCity` groups remain collapsed. Change the level passed to `expandByLevel` to expand deeper levels.

{% tabs %}
{% highlight cshtml tabtitle="Index.cshtml" %}
@Html.EJS().Grid("Grid").DataSource((IEnumerable<object>)ViewBag.DataSource).AllowGrouping().GroupSettings(g => g.Columns(new string[] { "ShipCountry", "ShipCity" })).Columns(col => {
    col.Field("OrderID").HeaderText("Order ID").Width("120").Add();
    col.Field("CustomerID").HeaderText("Customer ID").Width("140").Add();
    col.Field("ShipCity").HeaderText("Ship City").Width("140").Add();
    col.Field("ShipCountry").HeaderText("Ship Country").Width("140").Add();
}).Events(e => e.DataBound("dataBound")).Render()

<script>
    var applied = false;
    function expandByLevel(grid, level) {
        grid.groupCollapseAll();
        // Caption rows are rendered top-down, so a parent is always expanded before its children are queried.
        var depth = 0;
        while (depth < level) {
            var captions = grid.getContentTable().querySelectorAll('tr.e-groupcaption');
            for (var i = 0; i < captions.length; i++) {
                var row = captions[i];
                var icon = row.querySelector('.e-recordpluscollapse');
                if (icon && row.querySelectorAll('.e-indentcell').length === depth) {
                    grid.groupModule.expandCollapseRows(icon);
                }
            }
            depth++;
        }
    }

    function dataBound() {
        if (!applied) {
            applied = true;
            expandByLevel(document.getElementById('Grid').ej2_instances[0], 1);
        }
    }
</script>
{% endhighlight %}

> * The level starts from `1`. A level of `0` collapses all the groups.
> * Expanding by level works on the groups rendered in the current view. For large datasets, use [lazy load grouping](./lazy-load-grouping) instead.
