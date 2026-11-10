---
layout: post
title: Row drag and drop between multiple TreeGrids in TypeScript TreeGrid | Syncfusion
description: Learn how to drag and drop rows between three or more TypeScript TreeGrids using the rowDropSettings targetID property, with working samples.
platform: grid-sdk
control: Row drag and drop between multiple TreeGrids
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Row drag and drop between multiple TreeGrids in TypeScript TreeGrid

The Syncfusion<sup style="font-size:70%">&reg;</sup> TypeScript TreeGrid supports moving rows between three or more TreeGrid instances. Each TreeGrid declares the destination it accepts rows into through the [`targetID`](../../api/treegrid/rowDropSettings#targetid) property of the [`rowDropSettings`](../../api/treegrid/rowDropSettings) object, so a row can be dragged from one TreeGrid into another without copying and pasting the data manually.

To use the row drag and drop feature, inject the **RowDD** module in the TreeGrid.

## Configure the target TreeGrid for each instance

The [`targetID`](../../api/treegrid/rowDropSettings#targetid) property accepts the ID of a single destination TreeGrid. Because each TreeGrid owns its own [`rowDropSettings`](../../api/treegrid/rowDropSettings) object, a row can only be dropped into the TreeGrid that the dragged TreeGrid points to.

To connect three or more TreeGrids, assign the ID of the destination TreeGrid to the [`targetID`](../../api/treegrid/rowDropSettings#targetid) property of every TreeGrid that should accept rows. The following table shows the configuration used in the sample that follows.

| TreeGrid ID | targetID value | Rows can be dropped into |
|---|---|---|
| `TreeGrid1` | `TreeGrid2` | `TreeGrid2` |
| `TreeGrid2` | `TreeGrid3` | `TreeGrid3` |
| `TreeGrid3` | `TreeGrid1` | `TreeGrid1` |

This creates a cycle, so a row can be moved from `TreeGrid1` to `TreeGrid2`, from `TreeGrid2` to `TreeGrid3`, and from `TreeGrid3` back to `TreeGrid1`.

To let several TreeGrids feed rows into a single destination, point each of them at the same TreeGrid ID. For example, setting the [`targetID`](../../api/treegrid/rowDropSettings#targetid) property of `TreeGrid1` and `TreeGrid2` to `TreeGrid3` allows both of them to drop rows into `TreeGrid3`.

> * The [`targetID`](../../api/treegrid/rowDropSettings#targetid) property must contain the ID of the destination TreeGrid, and the ID must be unique across the page.
> * The order in which the TreeGrids are rendered does not affect the drag and drop behavior. The destination TreeGrid can be created before or after the source TreeGrid.

## Enable row drag and drop between three TreeGrids

The following example enables the [`allowRowDragAndDrop`](../../api/treegrid#allowrowdraganddrop) property on three TreeGrids and configures a circular drop target for each of them using the [`targetID`](../../api/treegrid/rowDropSettings#targetid) property.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/typescript/treegrid/draganddrop-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/treegrid/draganddrop-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/treegrid/draganddrop-cs2" %}

> * The [`isPrimaryKey`](../../api/treegrid/column#isprimarykey) property is necessary to perform the row drag and drop operation.
> * The selection feature must be enabled to drag and drop rows between TreeGrids. For multiple row selection, set the [`type`](../../api/treegrid/selectionSettings#type) property to `multiple`.

## Drop positions

When a row is dragged over a destination TreeGrid, the drop indicator shows the position where the row will be inserted.

1. **Above** – The row is inserted as a sibling above the target row.
2. **Below** – The row is inserted as a sibling below the target row.
3. **Child** – The row is inserted as a child of the target row.

These positions apply equally when the destination is another TreeGrid. Dropping a row in the **Child** position of a row in the destination TreeGrid makes it a child of that record, and the parent record of the dropped row is updated accordingly.

## Move multiple rows between TreeGrids

Multiple rows can be moved in a single drag operation. Select the rows in the source TreeGrid by holding the **Ctrl** key, and then drag any of the selected rows into the destination TreeGrid. All the selected rows are transferred together, and the dropped records are available in the [`rowDrop`](../../api/treegrid#rowdrop) event through the `args.data` property.

To move more than one row at a time, the [`selectionSettings.type`](../../api/treegrid/selectionSettings#type) property must be set to `multiple` on the source TreeGrid.

## Handle the rowDrop event

The [`rowDrop`](../../api/treegrid#rowdrop) event is triggered when a row is dropped on the destination TreeGrid. The event arguments provide the following information.

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
{% highlight ts tabtitle="index.ts" %}
{% raw %}
import { TreeGrid, RowDD } from '@syncfusion/ej2-treegrid';
import { sampleData } from './datasource.ts';

TreeGrid.Inject(RowDD);

let treegrid: TreeGrid = new TreeGrid({
    dataSource: sampleData,
    treeColumnIndex: 1,
    childMapping: 'subtasks',
    allowRowDragAndDrop: true,
    rowDropSettings: { targetID: 'TreeGrid2' },
    selectionSettings: { type: 'Multiple' },
    columns: [
        { field: 'taskID', headerText: 'Task ID', isPrimaryKey: true, width: 90, textAlign: 'Right' },
        { field: 'taskName', headerText: 'Task Name', width: 180 },
        { field: 'duration', headerText: 'Duration', width: 80, textAlign: 'Right' }
    ],
    rowDrop: function (args: any) {
        var targetGrid = (args.target as HTMLElement).closest('.e-treegrid');
        var destinationID = targetGrid ? targetGrid.id : '';
        console.log(`Row dropped into ${destinationID} at position ${args.dropPosition}.`);
    }
});
treegrid.appendTo('#TreeGrid1');
{% endraw %}
{% endhighlight %}
{% endtabs %}

## Supported combinations

### Works with:

- The [`allowRowDragAndDrop`](../../api/treegrid#allowrowdraganddrop) property, which must be enabled on the source and the destination TreeGrid.
- The [`selectionSettings.type`](../../api/treegrid/selectionSettings#type) property set to `multiple`, which enables moving several rows in one drag operation.
- The [`isPrimaryKey`](../../api/treegrid/column#isprimarykey) property, which is required for the drop to be applied.
- The [`rowDrop`](../../api/treegrid#rowdrop) event, which allows the drop to be cancelled or the drop position to be inspected.

### Known limitations:

- The [`targetID`](../../api/treegrid/rowDropSettings#targetid) property holds a single destination ID, so a row can only be dropped into the TreeGrid that the source TreeGrid points to. A TreeGrid cannot accept rows from several sources and forward them elsewhere in the same operation.
- When the [`targetID`](../../api/treegrid/rowDropSettings#targetid) property is set, the TreeGrid does not render the drag icon column, and the drag is performed using the selected row.
- The row drag and drop feature does not have built-in support for the row template and detail template features of the TreeGrid.

## See also

[Row drag and drop in TypeScript TreeGrid](https://ej2.syncfusion.com/typescript/documentation/treegrid/row-drag-and-drop)

[Sorting data in the Syncfusion<sup style="font-size:70%">&reg;</sup> TreeGrid](https://ej2.syncfusion.com/documentation/treegrid/sorting)

[Filtering data in the Syncfusion<sup style="font-size:70%">&reg;</sup> TreeGrid](https://ej2.syncfusion.com/documentation/treegrid/filtering/filtering)
