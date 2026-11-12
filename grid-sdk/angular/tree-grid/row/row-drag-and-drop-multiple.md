---
layout: post
title: Row drag and drop between multiple TreeGrids in Angular TreeGrid | Syncfusion
description: Learn how to drag and drop rows between three or more Angular TreeGrids using the rowDropSettings targetID property, with working samples.
platform: grid-sdk
control: Row drag and drop between multiple TreeGrids
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Row Drag and Drop Between Multiple TreeGrids in Angular TreeGrid

The Row Drag and Drop Between Multiple TreeGrids feature allows users to drag rows from one TreeGrid and drop them into another connected TreeGrid. This feature enables moving records between hierarchical datasets while maintaining the TreeGrid structure.

To use the row drag and drop feature in the TreeGrid component, inject the **RowDDService** in the provider section of the **AppModule**. The **RowDDService** handles the row drag and drop functionality in the TreeGrid component. Once the **RowDDService** is injected, the [`allowRowDragAndDrop`](https://ej2.syncfusion.com/angular/documentation/api/treegrid#allowrowdraganddrop) and [`targetID`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/rowDropSettings#targetid) properties can be used to enable and configure the feature.

## Feature overview

To enable row drag and drop between TreeGrids:

- Enable row drag and drop using the [`allowRowDragAndDrop`](https://ej2.syncfusion.com/angular/documentation/api/treegrid#allowrowdraganddrop) property.
- Configure the destination TreeGrid using the [`targetID`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/rowDropSettings#targetid) property of the [`rowDropSettings`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/rowDropSettings) object.
- Users can drag selected rows from a source TreeGrid and drop them into the configured destination TreeGrid.
- Rows can be dropped above, below, or as a child of an existing row in the destination TreeGrid.

```ts
rowDropSettings = {
    targetID: 'TreeGrid2'
};
```

## Supported scenarios

### Single target TreeGrid

A source TreeGrid can be configured to drop rows into a single target TreeGrid.

```ts
rowDropSettings = {
    targetID: 'TreeGrid2'
};
```

**Behavior**

- Rows from `TreeGrid1` can be dropped into `TreeGrid2`.
- Rows cannot be dropped into any other TreeGrid unless it is configured as a target.

### Three or more TreeGrids

Multiple TreeGrids can participate in row drag-and-drop operations by configuring the appropriate target relationships. Each TreeGrid declares one destination, and the relationships are combined so that a row can travel through every TreeGrid on the page.

```ts
TreeGrid1 -> TreeGrid2
TreeGrid2 -> TreeGrid3
TreeGrid3 -> TreeGrid1
```

**Behavior**

- Rows can be moved between any connected TreeGrid.
- Each TreeGrid can act as both a source and a destination.
- Drag-and-drop operations are allowed only between explicitly configured TreeGrids.

To let several TreeGrids feed rows into a single destination, point each of them at the same TreeGrid ID. For example, setting the [`targetID`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/rowDropSettings#targetid) property of `TreeGrid1` and `TreeGrid2` to `TreeGrid3` allows both of them to drop rows into `TreeGrid3`.

In the following example, `TreeGrid1` and `TreeGrid2` both target `TreeGrid3`, so rows can be dragged into `TreeGrid3` from either of them, and `TreeGrid3` sends its rows back to `TreeGrid1`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid-sdk/angular/treegrid/row-cs12/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid-sdk/angular/treegrid/row-cs12/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/samples/grid-sdk/angular/tree-grid/row-cs12" %}

> * The [`targetID`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/rowDropSettings#targetid) property accepts a single TreeGrid ID. To enable a TreeGrid as the destination of more than one source, configure the same destination ID on each source TreeGrid.
> * The order in which the TreeGrids are rendered does not affect the drag and drop behavior. The destination TreeGrid can be created before or after the source TreeGrid.
> * The destination TreeGrid does not need its own [`targetID`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/rowDropSettings#targetid) configuration to accept rows from another TreeGrid.

## Enable row drag and drop between three TreeGrids

The following example enables the [`allowRowDragAndDrop`](https://ej2.syncfusion.com/angular/documentation/api/treegrid#allowrowdraganddrop) property on three TreeGrids and configures a circular drop target for each of them using the [`targetID`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/rowDropSettings#targetid) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid-sdk/angular/treegrid/row-cs11/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid-sdk/angular/treegrid/row-cs11/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/samples/grid-sdk/angular/tree-grid/row-cs11" %}

> * The [`isPrimaryKey`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column#isprimarykey) property is necessary to perform the row drag and drop operation.
> * The selection feature must be enabled to drag and drop rows between TreeGrids. For multiple row selection, set the [`type`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/selectionSettings#type) property to **Multiple**.

## Drop positions

When a row is dragged over a destination TreeGrid, the drop indicator shows the position where the row will be inserted.

1. **Above** – The row is inserted as a sibling above the target row.
2. **Below** – The row is inserted as a sibling below the target row.
3. **Child** – The row is inserted as a child of the target row.

![Above Position](../images/Above.png)

![Below Position](../images/Below.png)

![Child Position](../images/Child.png)

These positions apply equally when the destination is another TreeGrid. Dropping a row in the **Child** position of a row in the destination TreeGrid makes it a child of that record, and the parent record of the dropped row is updated accordingly.

## Move multiple rows between TreeGrids

Multiple rows can be moved in a single drag operation. Select the rows in the source TreeGrid by holding the **Ctrl** key, and then drag any of the selected rows into the destination TreeGrid. All the selected rows are transferred together, and the dropped records are available in the [`rowDrop`](https://ej2.syncfusion.com/angular/documentation/api/treegrid#rowdrop) event through the `args.data` property.

To move more than one row at a time, the [`selectionSettings.type`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/selectionSettings#type) property must be set to **Multiple** on the source TreeGrid.

## Handle the rowDrop event

The [`rowDrop`](https://ej2.syncfusion.com/angular/documentation/api/treegrid#rowdrop) event is triggered when a row is dropped on the destination TreeGrid. The event arguments provide the following information.

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
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}
import { Component, ViewChild } from '@angular/core';
import { TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';
import { RowDragEventArgs } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-container',
    template: `<ejs-treegrid id='TreeGrid1' [dataSource]='data' childMapping='subtasks' [allowRowDragAndDrop]=true
        [treeColumnIndex]='1' [rowDropSettings]='rowDropSettings' [selectionSettings]='selectionSettings'
        (rowDrop)='rowDrop($event)'>
            <e-columns>
                <e-column field='taskID' headerText='Task ID' [isPrimaryKey]='true' width=90></e-column>
                <e-column field='taskName' headerText='Task Name' width=180></e-column>
                <e-column field='duration' headerText='Duration' width=80></e-column>
            </e-columns>
        </ejs-treegrid>`,
})
export class AppComponent {
    public data: Object[] = [];
    public rowDropSettings: Object = { targetID: 'TreeGrid2' };
    public selectionSettings: Object = { type: 'Multiple' };

    public rowDrop(args: RowDragEventArgs): void {
        const targetGrid = (args.target as HTMLElement).closest('.e-treegrid');
        const destinationID = targetGrid ? targetGrid.id : '';
        console.log(`Row dropped into ${destinationID} at position ${args.dropPosition}.`);
    }
}
{% endraw %}
{% endhighlight %}
{% endtabs %}

## Supported combinations

### Works with

- Row selection, including the **Multiple** selection type for transferring several rows at once.
- The **Above**, **Below**, and **Child** drop positions.
- Parent and child records, which are transferred together with their hierarchy intact.
- Remote data binding, where the record movement is handled on the server through the [`rowDrop`](https://ej2.syncfusion.com/angular/documentation/api/treegrid#rowdrop) event.

### Does not work with

- An array of target IDs in the [`targetID`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/rowDropSettings#targetid) property. The property accepts a single TreeGrid ID. To share one destination between several sources, configure the same destination ID on each source TreeGrid.
- Row template and detail template features of the TreeGrid.

### Known limitations

- A drop is accepted only by the TreeGrid named in the [`targetID`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/rowDropSettings#targetid) property of the source TreeGrid. Dropping into any other TreeGrid on the page has no effect.
- When the [`targetID`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/rowDropSettings#targetid) property is set, the drag helper icon is not rendered in the row. The row itself is used to start the drag operation.

### Configuration requirements

- Set [`allowRowDragAndDrop`](https://ej2.syncfusion.com/angular/documentation/api/treegrid#allowrowdraganddrop) to **true** on every TreeGrid that takes part in the operation.
- Set [`isPrimaryKey`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column#isprimarykey) on a column of every TreeGrid that takes part in the operation.
- Enable selection on the source TreeGrid, and set the [`type`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/selectionSettings#type) property to **Multiple** to move more than one row at a time.

## See also

[Row drag and drop in the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular TreeGrid](https://ej2.syncfusion.com/angular/documentation/treegrid/row-drag-and-drop)
[Selection in the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular TreeGrid](https://ej2.syncfusion.com/angular/documentation/treegrid/selection)
