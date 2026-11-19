---
layout: post
title: Expand group by level in Angular Data Grid | Syncfusion
description: Learn how to expand grouped rows up to a specific level in the Syncfusion Angular Data Grid using the group module.
control: Expand group by level
platform: grid-sdk
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Expand group by level in Angular Data Grid

When data is grouped by multiple columns, the Grid renders a hierarchy of group caption rows. Expanding every group is not always desirable. Expanding only up to a chosen level gives a summarized view while deeper levels stay collapsed.

The Grid has no dedicated property for this, so it is achieved by collapsing all groups with the [groupCollapseAll](https://ej2.syncfusion.com/angular/documentation/api/grid#groupcollapseall) method and then expanding the caption rows level by level with the [expandCollapseRows](https://ej2.syncfusion.com/angular/documentation/api/grid/group#expandcollapserows) method of the Group module. The level of a caption row is the number of indent cells it contains.

In the following example, the Grid is grouped by `ShipCountry` and `ShipCity`, and only the first level (`ShipCountry`) is expanded after the data is bound, so the `ShipCity` groups remain collapsed. Change the level passed to `expandByLevel` to expand deeper levels.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
import { Component, ViewChild } from '@angular/core';
import { GridComponent, GridModule, GroupService } from '@syncfusion/ej2-angular-grids';

@Component({
    imports: [GridModule],
    providers: [GroupService],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' [allowGrouping]='true' [groupSettings]='groupOptions' (dataBound)='dataBound()'>
        <e-columns>
            <e-column field='OrderID' headerText='Order ID' width='120'></e-column>
            <e-column field='CustomerID' headerText='Customer ID' width='140'></e-column>
            <e-column field='ShipCity' headerText='Ship City' width='140'></e-column>
            <e-column field='ShipCountry' headerText='Ship Country' width='140'></e-column>
        </e-columns>
    </ejs-grid>`
})
export class AppComponent {
    @ViewChild('grid') public grid?: GridComponent;
    public data?: object[];
    public groupOptions = { columns: ['ShipCountry', 'ShipCity'] };
    private applied = false;

    dataBound() {
        if (!this.applied) {
            this.applied = true;
            this.expandByLevel(this.grid, 1);
        }
    }

    expandByLevel(grid: any, level: number): void {
        grid.groupCollapseAll();
        // Caption rows are rendered top-down, so a parent is always expanded before its children are queried.
        let depth = 0;
        while (depth < level) {
            let captions = grid.getContentTable().querySelectorAll('tr.e-groupcaption');
            for (let i = 0; i < captions.length; i++) {
                let row = captions[i];
                let icon = row.querySelector('.e-recordpluscollapse');
                if (icon && row.querySelectorAll('.e-indentcell').length === depth) {
                    grid.groupModule.expandCollapseRows(icon);
                }
            }
            depth++;
        }
    }
}
{% endhighlight %}

> * The level starts from `1`. A level of `0` collapses all the groups.
> * Expanding by level works on the groups rendered in the current view. For large datasets, use [lazy load grouping](./lazy-load-grouping) instead.
