---
layout: post
title: Undo Redo Editing in Angular Grid | Syncfusion
description: Learn how to undo and redo edit actions in the Syncfusion Angular Grid using toolbar items and keyboard shortcuts, and how to use batch undo redo and the undo redo limit.
platform: grid-sdk
control: Undo Redo Editing
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Undo Redo Editing in Angular Grid

The Angular Grid can revert and reapply edit actions such as cell edits, row additions and row deletions. Undo and redo are available in all editing modes, such as Normal (inline), Dialog and Batch, and in cell editing.

## Undo redo with toolbar

Set the [editSettings.enableUndoRedo](https://ej2.syncfusion.com/angular/documentation/api/grid/editSettings#enableundoredo) property to `true` to enable undo and redo. Then add the `Undo` and `Redo` items to the toolbar. The `Undo` item reverts the last edit action and the `Redo` item reapplies the action that was undone. Both items are disabled while there is nothing to undo or redo.

In the following example, undo and redo are enabled in Normal editing mode with the toolbar items.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid-sdk/angular/grid/undo-redo-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/grid-sdk/angular/grid/undo-redo-cs1/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid-sdk/angular/grid/undo-redo-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/samples/grid-sdk/angular/data-grid/undo-redo-cs1" %}

### Limit the number of undo and redo actions

Use the [editSettings.undoRedoLimit](https://ej2.syncfusion.com/angular/documentation/api/grid/editSettings#undoredolimit) property to control the maximum number of edit actions stored in the undo and redo stack. When the limit is reached, the oldest action is removed from the stack. The default value is `20`.

In the previous example, the limit is set to `10`, so only the last 10 edit actions can be undone.

## Undo redo with keyboard shortcuts

When [editSettings.enableUndoRedo](https://ej2.syncfusion.com/angular/documentation/api/grid/editSettings#enableundoredo) is `true`, undo and redo can also be performed with keyboard shortcuts. The shortcuts work without the `Undo` and `Redo` toolbar items.

| Shortcut | Action |
|-----|-----|
| <kbd>Ctrl</kbd> + <kbd>Z</kbd> | Undo the last edit action. |
| <kbd>Ctrl</kbd> + <kbd>Y</kbd> or <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Z</kbd> | Redo the last undone action. |

> On macOS, use the <kbd>Cmd</kbd> key instead of <kbd>Ctrl</kbd>.

In the following example, the toolbar does not contain the `Undo` and `Redo` items. Edit a record, press <kbd>Ctrl</kbd> + <kbd>Z</kbd> to undo it, and press <kbd>Ctrl</kbd> + <kbd>Y</kbd> to redo it.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid-sdk/angular/grid/undo-redo-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/grid-sdk/angular/grid/undo-redo-cs2/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid-sdk/angular/grid/undo-redo-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/samples/grid-sdk/angular/data-grid/undo-redo-cs2" %}

## Undo redo with batch editing

To enable undo and redo in batch editing, set [editSettings.enableUndoRedo](https://ej2.syncfusion.com/angular/documentation/api/grid/editSettings#enableundoredo) to `true` and set the edit mode to `Batch`. Additionally, set the [editSettings.enableBatchUndoRedo](https://ej2.syncfusion.com/angular/documentation/api/grid/editSettings#enablebatchundoredo) property to `true` to support undo and redo actions during batch operations.

In batch editing, clicking the `Update` toolbar item commits the pending changes to the data source. When `enableBatchUndoRedo` is set to `true`, the `Undo` and `Redo` actions can still be performed even after the changes are saved.

| Property | Behavior |
|-----|-----|
| enableUndoRedo | Enables undo and redo for the editing actions. |
| enableBatchUndoRedo | Keeps undo and redo available after the `Update` is clicked and the batch changes are saved to the data source. |

In the following example, enableUndoRedo and enableBatchUndoRedo are set to `true`. Edit, add or delete rows, click `Update` to save the changes, and then use `Undo` and `Redo` to revert or reapply them.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid-sdk/angular/grid/undo-redo-cs3/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/grid-sdk/angular/grid/undo-redo-cs3/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid-sdk/angular/grid/undo-redo-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/samples/grid-sdk/angular/data-grid/undo-redo-cs3" %}
