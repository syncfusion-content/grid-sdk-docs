---
layout: post
title: Row drag and drop between multiple TreeGrids in JavaScript TreeGrid | Syncfusion
description: Learn how to drag and drop rows between three or more JavaScript TreeGrids using the rowDropSettings targetID property, with working samples.
platform: grid-sdk
publishingplatform: grid-sdk
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Row Drag and Drop Between Multiple TreeGrids in JavaScript TreeGrid

The Row Drag and Drop Between Multiple TreeGrids feature allows users to drag rows from one TreeGrid and drop them into another connected TreeGrid. This feature enables moving records between hierarchical datasets while maintaining the TreeGrid structure.

To use the row drag and drop feature, inject the **RowDD** module in the TreeGrid.

## Feature overview

To enable row drag and drop between TreeGrids:

- Enable row drag and drop using the [`allowRowDragAndDrop`](../../api/treegrid#allowrowdraganddrop) property.
- Configure the destination TreeGrid using the [`targetID`](../../api/treegrid/rowDropSettings#targetid) property of the [`rowDropSettings`](../../api/treegrid/rowDropSettings) object.
- Users can drag selected rows from a source TreeGrid and drop them into the configured destination TreeGrid.
- Rows can be dropped above, below, or as a child of an existing row in the destination TreeGrid.

```js
rowDropSettings = {
    targetID: 'TreeGrid2'
};
```

## Supported scenarios

### Single target TreeGrid

A source TreeGrid can be configured to drop rows into a single target TreeGrid.

```js
rowDropSettings = {
    targetID: 'TreeGrid2'
};
```

**Behavior**

- Rows from `TreeGrid1` can be dropped into `TreeGrid2`.
- Rows cannot be dropped into any other TreeGrid unless it is configured as a target.

### Three or more TreeGrids

Multiple TreeGrids can participate in row drag-and-drop operations by configuring the appropriate target relationships. Each TreeGrid declares one destination, and the relationships are combined so that a row can travel through every TreeGrid on the page.

```js
TreeGrid1 -> TreeGrid2
TreeGrid2 -> TreeGrid3
TreeGrid3 -> TreeGrid1
```

**Behavior**

- Rows can be moved between any connected TreeGrid.
- Each TreeGrid can act as both a source and a destination.
- Drag-and-drop operations are allowed only between explicitly configured TreeGrids.

To let several TreeGrids feed rows into a single destination, point each of them at the same TreeGrid ID. For example, setting the [`targetID`](../../api/treegrid/rowDropSettings#targetid) property of `TreeGrid1` and `TreeGrid2` to `TreeGrid3` allows both of them to drop rows into `TreeGrid3`.

In the following example, `TreeGrid1` and `TreeGrid2` both target `TreeGrid3`, so rows can be dragged into `TreeGrid3` from either of them, and `TreeGrid3` sends its rows back to `TreeGrid1`.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/javascript/treegrid/draganddrop-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/treegrid/draganddrop-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/treegrid/draganddrop-cs3" %}

> * The [`targetID`](../../api/treegrid/rowDropSettings#targetid) property accepts a single TreeGrid ID. To enable a TreeGrid as the destination of more than one source, configure the same destination ID on each source TreeGrid.
> * The order in which the TreeGrids are rendered does not affect the drag and drop behavior. The destination TreeGrid can be created before or after the source TreeGrid.
> * The destination TreeGrid does not need its own [`targetID`](../../api/treegrid/rowDropSettings#targetid) configuration to accept rows from another TreeGrid.

## Enable row drag and drop between three TreeGrids

The following example enables the [`allowRowDragAndDrop`](../../api/treegrid#allowrowdraganddrop) property on three TreeGrids and configures a circular drop target for each of them using the [`targetID`](../../api/treegrid/rowDropSettings#targetid) property.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/typescript/treegrid/draganddrop-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/treegrid/draganddrop-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/treegrid/draganddrop-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/javascript/treegrid/draganddrop-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/treegrid/draganddrop-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/treegrid/draganddrop-cs2" %}
{% endif %}

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
{% highlight js tabtitle="index.js" %}
{% raw %}
ej.treegrid.TreeGrid.Inject(ej.treegrid.RowDD);

var treegrid = new ej.treegrid.TreeGrid({
    dataSource: sampleData,
    childMapping: 'subtasks',
    height: 275,
    treeColumnIndex: 1,
    allowRowDragAndDrop: true,
    rowDropSettings: { targetID: 'TreeGrid2' },
    selectionSettings: { type: 'Multiple' },
    columns: [
            { field: 'taskID', headerText: 'Task ID', isPrimaryKey: true, width: 90, textAlign: 'Right' },
            { field: 'taskName', headerText: 'Task Name', width: 180 },
            { field: 'duration', headerText: 'Duration', width: 80, textAlign: 'Right' }
    ],
    rowDrop: function (args) {
        var targetGrid = args.target.closest('.e-treegrid');
        var destinationID = targetGrid ? targetGrid.id : '';
        console.log('Row dropped into ' + destinationID + ' at position ' + args.dropPosition + '.');
    }
});

treegrid.appendTo('#TreeGrid1');
{% endraw %}
{% endhighlight %}
{% endtabs %}

## Supported combinations

### Works with

- Row selection, including the `multiple` selection type for transferring several rows at once.
- The **Above**, **Below**, and **Child** drop positions.
- Parent and child records, which are transferred together with their hierarchy intact.
- Remote data binding, where the record movement is handled on the server through the [`rowDrop`](../../api/treegrid#rowdrop) event.

### Does not work with

- An array of target IDs in the [`targetID`](../../api/treegrid/rowDropSettings#targetid) property. The property accepts a single TreeGrid ID. To share one destination between several sources, configure the same destination ID on each source TreeGrid.
- Row template and detail template features of the TreeGrid.

### Known limitations

- A drop is accepted only by the TreeGrid named in the [`targetID`](../../api/treegrid/rowDropSettings#targetid) property of the source TreeGrid. Dropping into any other TreeGrid on the page has no effect.
- When the [`targetID`](../../api/treegrid/rowDropSettings#targetid) property is set, the drag helper icon is not rendered in the row. The row itself is used to start the drag operation.

### Configuration requirements

- Set [`allowRowDragAndDrop`](../../api/treegrid#allowrowdraganddrop) to **true** on every TreeGrid that takes part in the operation.
- Set [`isPrimaryKey`](../../api/treegrid/column#isprimarykey) on a column of every TreeGrid that takes part in the operation.
- Enable selection on the source TreeGrid, and set the [`type`](../../api/treegrid/selectionSettings#type) property to `multiple` to move more than one row at a time.

## See also

[Row drag and drop in the Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript TreeGrid](https://ej2.syncfusion.com/javascript/documentation/treegrid/row-drag-and-drop)
[Selection in the Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript TreeGrid](https://ej2.syncfusion.com/javascript/documentation/treegrid/selection)
