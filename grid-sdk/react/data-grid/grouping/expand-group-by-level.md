---
layout: post
title: Expand group by level in React Data Grid | Syncfusion
description: Learn how to expand grouped rows up to a specific level in the Syncfusion React Data Grid using the group module.
control: Expand group by level
platform: grid-sdk
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Expand group by level in React Data Grid

When data is grouped by multiple columns, the Grid renders a hierarchy of group caption rows. Expanding every group is not always desirable. Expanding only up to a chosen level gives a summarized view while deeper levels stay collapsed.

The Grid has no dedicated property for this, so it is achieved by collapsing all groups with the [groupCollapseAll](https://ej2.syncfusion.com/react/documentation/api/grid#groupcollapseall) method and then expanding the caption rows level by level with the [expandCollapseRows](https://ej2.syncfusion.com/react/documentation/api/grid/group#expandcollapserows) method of the Group module. The level of a caption row is the number of indent cells it contains.

In the following example, the Grid is grouped by `ShipCountry` and `ShipCity`, and only the first level (`ShipCountry`) is expanded after the data is bound, so the `ShipCity` groups remain collapsed. Change the level passed to `expandByLevel` to expand deeper levels.

{% tabs %}
{% highlight tsx tabtitle="App.tsx" %}
import { ColumnDirective, ColumnsDirective, GridComponent, Group, Inject } from '@syncfusion/ej2-react-grids';
import { useRef } from 'react';

function expandByLevel(grid: any, level: number): void {
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

export default function App() {
  const gridRef = useRef<any>(null);
  const applied = useRef(false);

  const dataBound = () => {
    if (!applied.current) {
      applied.current = true;
      expandByLevel(gridRef.current, 1);
    }
  };

  return (
    <GridComponent ref={gridRef} dataSource={data} allowGrouping={true} groupSettings={{ columns: ['ShipCountry', 'ShipCity'] }} dataBound={dataBound}>
      <ColumnsDirective>
        <ColumnDirective field="OrderID" headerText="Order ID" width="120" />
        <ColumnDirective field="CustomerID" headerText="Customer ID" width="140" />
        <ColumnDirective field="ShipCity" headerText="Ship City" width="140" />
        <ColumnDirective field="ShipCountry" headerText="Ship Country" width="140" />
      </ColumnsDirective>
      <Inject services={[Group]} />
    </GridComponent>
  );
}
{% endhighlight %}
{% endtabs %}

> * The level starts from `1`. A level of `0` collapses all the groups.
> * Expanding by level works on the groups rendered in the current view. For large datasets, use [lazy load grouping](./lazy-load-grouping) instead.
