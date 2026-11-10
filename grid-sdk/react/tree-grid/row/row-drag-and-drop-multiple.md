---
layout: post
title: Row drag and drop between multiple TreeGrids in React TreeGrid | Syncfusion
description: Learn how to drag and drop rows between three or more React TreeGrids using the rowDropSettings targetID property, with working samples.
control: Row drag and drop between multiple TreeGrids
platform: grid-sdk
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Row drag and drop between multiple TreeGrids in React TreeGrid

The Syncfusion<sup style="font-size:70%">&reg;</sup> React TreeGrid supports moving rows between three or more TreeGrid instances. Each TreeGrid declares the destination it accepts rows into through the [`targetID`](https://ej2.syncfusion.com/react/documentation/api/treegrid/rowDropSettings#targetid) property of the `rowDropSettings` object, so a row can be dragged from one TreeGrid into another without copying and pasting the data manually.

To use row drag and drop, inject the **RowDD** module into the TreeGrid.

## Configure the target TreeGrid for each instance

The [`targetID`](https://ej2.syncfusion.com/react/documentation/api/treegrid/rowDropSettings#targetid) property accepts the ID of a single destination TreeGrid. Because each TreeGrid owns its own `rowDropSettings` object, a row can only be dropped into the TreeGrid that the dragged TreeGrid points to.

To connect three or more TreeGrids, assign the ID of the destination TreeGrid to the [`targetID`](https://ej2.syncfusion.com/react/documentation/api/treegrid/rowDropSettings#targetid) property of every TreeGrid that should accept rows. The following table shows the configuration used in the sample that follows.

| TreeGrid ID | targetID value | Rows can be dropped into |
|---|---|---|
| `TreeGrid1` | `TreeGrid2` | `TreeGrid2` |
| `TreeGrid2` | `TreeGrid3` | `TreeGrid3` |
| `TreeGrid3` | `TreeGrid1` | `TreeGrid1` |

This creates a cycle, so a row can be moved from `TreeGrid1` to `TreeGrid2`, from `TreeGrid2` to `TreeGrid3`, and from `TreeGrid3` back to `TreeGrid1`.

To let several TreeGrids feed rows into a single destination, point each of them at the same TreeGrid ID. For example, setting the [`targetID`](https://ej2.syncfusion.com/react/documentation/api/treegrid/rowDropSettings#targetid) property of `TreeGrid1` and `TreeGrid2` to `TreeGrid3` allows both of them to drop rows into `TreeGrid3`.

> * The [`targetID`](https://ej2.syncfusion.com/react/documentation/api/treegrid/rowDropSettings#targetid) property must contain the ID of the destination TreeGrid, and the ID must be unique across the page.
> * The order in which the TreeGrids are rendered does not affect the drag and drop behavior. The destination TreeGrid can be created before or after the source TreeGrid.

## Enable row drag and drop between three TreeGrids

The following example enables the [`allowRowDragAndDrop`](https://ej2.syncfusion.com/react/documentation/api/treegrid#allowrowdraganddrop) property on three TreeGrids and configures a circular drop target for each of them using the [`targetID`](https://ej2.syncfusion.com/react/documentation/api/treegrid/rowDropSettings#targetid) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/grid-sdk/react/treegrid/row-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/grid-sdk/react/treegrid/row-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/react/treegrid/row-cs4" %}

> * Selection must be enabled to drag and drop rows between TreeGrids.
> * Multiple rows can be selected by clicking and dragging inside the TreeGrid.
> * For multiple row selection, set the [type](https://ej2.syncfusion.com/react/documentation/api/treegrid/selectionSettings#type) property to `multiple`.
> * The [isPrimaryKey](https://ej2.syncfusion.com/react/documentation/api/treegrid/column#isprimarykey) property is required to perform row drag-and-drop.

## Drop positions

When a row is dragged over a destination TreeGrid, the drop indicator shows the position where the row will be inserted.

1. **Above** – The row is inserted as a sibling above the target row.
2. **Below** – The row is inserted as a sibling below the target row.
3. **Child** – The row is inserted as a child of the target row.

These positions apply equally when the destination is another TreeGrid. Dropping a row in the **Child** position of a row in the destination TreeGrid makes it a child of that record, and the parent record of the dropped row is updated accordingly.

## Move multiple rows between TreeGrids

Multiple rows can be moved in a single drag operation. Select the rows in the source TreeGrid by holding the **Ctrl** key, and then drag any of the selected rows into the destination TreeGrid. All the selected rows are transferred together, and the dropped records are available in the [rowDrop](https://ej2.syncfusion.com/react/documentation/api/treegrid#rowdrop) event through the `args.data` property.

To move more than one row at a time, the [type](https://ej2.syncfusion.com/react/documentation/api/treegrid/selectionSettings#type) property must be set to `multiple` on the source TreeGrid.

## Handle the rowDrop event

The [rowDrop](https://ej2.syncfusion.com/react/documentation/api/treegrid#rowdrop) event is triggered when a row is dropped on the destination TreeGrid. The event arguments provide the following information.

| Argument | Type | Description |
|---|---|---|
| `data` | `Object[]` | The dragged record or the array of dragged records when multiple rows are selected. |
| `fromIndex` | `number` | The index of the dragged row in the source TreeGrid. |
| `dropIndex` | `number` | The index where the row is dropped in the destination TreeGrid. |
| `dropPosition` | `string` | The position of the drop relative to the target row. It is `topSegment` for **Above**, `bottomSegment` for **Below**, and `middleSegment` for **Child**. |
| `target` | `Element` | The target element on which the row is dropped. |
| `cancel` | `boolean` | Setting it to `true` prevents the default drop behavior. |

The event is triggered on the source TreeGrid, so the source and the destination can be identified from the `target` element when several TreeGrids are on the page.

{% tabs %}
{% highlight ts tabtitle="index.tsx" %}
{% raw %}
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { TreeGridComponent, RowDD, ColumnsDirective, ColumnDirective, Inject } from '@syncfusion/ej2-react-treegrid';
import { sampleData } from './datasource';

class Source extends React.Component {
    data = sampleData;
    rowDropSettings = { targetID: 'TreeGrid2' };
    selectionSettings = { type: 'Multiple' };
    rowDrop = (args: any) => {
        const targetGrid = (args.target as HTMLElement).closest('.e-treegrid');
        const destinationID = targetGrid ? targetGrid.id : '';
        console.log(`Row dropped into ${destinationID} at position ${args.dropPosition}.`);
    };
    render() {
        return <TreeGridComponent id='TreeGrid1' dataSource={this.data} treeColumnIndex={1} allowRowDragAndDrop={true} rowDropSettings={this.rowDropSettings} selectionSettings={this.selectionSettings} childMapping='subtasks' height='275' rowDrop={this.rowDrop}>
                <ColumnsDirective>
              <ColumnDirective field='taskID' headerText='Task ID' width='90' textAlign='Right'></ColumnDirective>
              <ColumnDirective field='taskName' headerText='Task Name' width='180'></ColumnDirective>
              <ColumnDirective field='duration' headerText='Duration' width='80' textAlign='Right'/>
            </ColumnsDirective>
            <Inject services={[RowDD]}/>
          </TreeGridComponent>;
    }
}

ReactDOM.render(<Source />, document.getElementById('treegrid'));
{% endraw %}
{% endhighlight %}
{% endtabs %}

## Supported combinations

### Works with:

- The [allowRowDragAndDrop](https://ej2.syncfusion.com/react/documentation/api/treegrid#allowrowdraganddrop) property, which must be enabled on the source and the destination TreeGrid.
- The [selectionSettings.type](https://ej2.syncfusion.com/react/documentation/api/treegrid/selectionSettings#type) property set to `multiple`, which enables moving several rows in one drag operation.
- The [isPrimaryKey](https://ej2.syncfusion.com/react/documentation/api/treegrid/column#isprimarykey) property, which is required for the drop to be applied.
- The [rowDrop](https://ej2.syncfusion.com/react/documentation/api/treegrid#rowdrop) event, which allows the drop to be cancelled or the drop position to be inspected.

### Known limitations:

- The [targetID](https://ej2.syncfusion.com/react/documentation/api/treegrid/rowDropSettings#targetid) property holds a single destination ID, so a row can only be dropped into the TreeGrid that the source TreeGrid points to. A TreeGrid cannot accept rows from several sources and forward them elsewhere in the same operation.
- When the [targetID](https://ej2.syncfusion.com/react/documentation/api/treegrid/rowDropSettings#targetid) property is set, the TreeGrid does not render the drag icon column, and the drag is performed using the selected row.
- The row drag and drop feature does not have built-in support for the row template and detail template features of the TreeGrid.

## See also

[Row drag and drop in React TreeGrid](https://ej2.syncfusion.com/react/documentation/treegrid/row-drag-and-drop)

[Sorting data in the Syncfusion<sup style="font-size:70%">&reg;</sup> TreeGrid](https://ej2.syncfusion.com/documentation/treegrid/sorting)

[Filtering data in the Syncfusion<sup style="font-size:70%">&reg;</sup> TreeGrid](https://ej2.syncfusion.com/documentation/treegrid/filtering/filtering)
