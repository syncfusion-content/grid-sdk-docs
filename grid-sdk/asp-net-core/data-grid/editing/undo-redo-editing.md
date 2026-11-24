---
layout: post
title: Undo Redo Editing in ASP.NET Core Grid | Syncfusion
description: Learn how to undo and redo edit actions in Syncfusion ASP.NET Core Grid using toolbar items, keyboard shortcuts, and batch undo redo.
platform: grid-sdk
control: Undo Redo Editing
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Undo Redo Editing in ASP.NET Core Grid

The ASP.NET Core Grid can revert and reapply edit actions such as cell edits, row additions, and row deletions. Undo and redo are available in all editing modes: Normal (inline), Dialog, Batch, and cell editing.

## Undo redo with toolbar

Set the [EnableUndoRedo](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Grids.GridEditSettings.html#enableundoredo) property to `true` to enable undo and redo. Then add the `Undo` and `Redo` items to the toolbar. The `Undo` item reverts the last edit action, and the `Redo` item reapplies the last undone action. Both items are disabled when there is nothing to undo or redo.

In the following example, undo and redo are enabled in Normal editing mode, and the `Undo` and `Redo` items are added to the toolbar.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-core/grid/edit/undo-redo/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/grid-sdk/asp-net-core/grid/edit/undo-redo/undoredo.cs %}
{% endhighlight %}
{% endtabs %}


### Limit the number of undo and redo actions

Use the [UndoRedoLimit](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Grids.GridEditSettings.html#undoredolimit) property to control the maximum number of edit actions stored in the undo and redo stack. When the limit is reached, the oldest action is removed from the stack. The default value is `20`.

In the previous example, the limit is set to `10`, so only the last 10 edit actions can be undone or redone.

## Undo redo with keyboard shortcuts

When [EnableUndoRedo](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Grids.GridEditSettings.html#enableundoredo) is `true`, undo and redo can also be performed using keyboard shortcuts. The shortcuts work even when the `Undo` and `Redo` items are not added to the toolbar.

| Shortcut | Action |
|-----|-----|
| <kbd>Ctrl</kbd> + <kbd>Z</kbd> | Undo the last edit action. |
| <kbd>Ctrl</kbd> + <kbd>Y</kbd> or <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Z</kbd> | Redo the last undone action. |

> On macOS, use the <kbd>Cmd</kbd> key instead of <kbd>Ctrl</kbd>.

In the following example, the toolbar does not contain the `Undo` and `Redo` items. Edit a record, press <kbd>Ctrl</kbd> + <kbd>Z</kbd> to undo the change, and press <kbd>Ctrl</kbd> + <kbd>Y</kbd> to redo it.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-core/grid/edit/undo-redo-keyboard/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/grid-sdk/asp-net-core/grid/edit/undo-redo-keyboard/undoredokeyboard.cs %}
{% endhighlight %}
{% endtabs %}


## Undo redo with batch editing

To enable undo and redo in batch editing, set [EnableUndoRedo](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Grids.GridEditSettings.html#enableundoredo) to `true` and set the edit mode to `Batch`. Additionally, set the [EnableBatchUndoRedo](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Grids.GridEditSettings.html#enablebatchundoredo) property to `true` to support undo and redo actions during batch operations.

During batch editing, changes are maintained as pending changes until a batch save operation is performed. When `EnableBatchUndoRedo` is set to `true`, the `Undo` and `Redo` actions remain available even after the batch changes are saved to the data source.

| Property | Behavior |
|-----|-----|
| [EnableUndoRedo](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Grids.GridEditSettings.html#enableundoredo) | Enables undo and redo for editing actions. |
| [EnableBatchUndoRedo](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Grids.GridEditSettings.html#enablebatchundoredo) | Enables undo and redo for batch editing actions, including after the batch changes are saved to the data source. |

In the following example, `EnableUndoRedo` and `EnableBatchUndoRedo` are set to `true`. Edit, add, or delete rows, save the batch changes, and then use `Undo` and `Redo` to revert or reapply the changes.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-core/grid/edit/undo-redo-batch/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/grid-sdk/asp-net-core/grid/edit/undo-redo-batch/undoredobatch.cs %}
{% endhighlight %}
{% endtabs %}
