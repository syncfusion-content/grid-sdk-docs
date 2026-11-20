---
layout: post
title: Undo Redo Editing in ASP.NET Core Grid | Syncfusion
description: Learn how to undo and redo edit actions in the Syncfusion ASP.NET Core Grid using toolbar items and keyboard shortcuts, and how to use batch undo redo and the undo redo limit.
platform: grid-sdk
control: Undo Redo Editing
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Undo Redo Editing in ASP.NET Core Grid

The ASP.NET Core Grid can revert and reapply edit actions such as cell edits, row additions and row deletions. Undo and redo are available in all editing modes, such as Normal (inline), Dialog and Batch, and in cell editing.

Undo and redo can be used in three ways, which are described in the following topics:

* [Undo redo with toolbar](#undo-redo-with-toolbar)
* [Undo redo with keyboard shortcuts](#undo-redo-with-keyboard-shortcuts)
* [Undo redo with batch editing](#undo-redo-with-batch-editing)

## Undo redo with toolbar

Set the [EnableUndoRedo](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Grids.GridEditSettings.html#enableundoredo) property to `true` to enable undo and redo. Then add the `Undo` and `Redo` items to the toolbar. The `Undo` item reverts the last edit action and the `Redo` item reapplies the action that was undone. Both items are disabled while there is nothing to undo or redo.

In the following example, undo and redo are enabled in Normal editing mode with the toolbar items.

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

In the previous example, the limit is set to `10`, so only the last 10 edit actions can be undone.

## Undo redo with keyboard shortcuts

When [EnableUndoRedo](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Grids.GridEditSettings.html#enableundoredo) is `true`, undo and redo can also be performed with keyboard shortcuts. The shortcuts work without the `Undo` and `Redo` toolbar items.

| Shortcut | Action |
|-----|-----|
| <kbd>Ctrl</kbd> + <kbd>Z</kbd> | Undo the last edit action. |
| <kbd>Ctrl</kbd> + <kbd>Y</kbd> or <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Z</kbd> | Redo the last undone action. |

> On macOS, use the <kbd>Cmd</kbd> key instead of <kbd>Ctrl</kbd>.

In the following example, the toolbar does not contain the `Undo` and `Redo` items. Edit a record, press <kbd>Ctrl</kbd> + <kbd>Z</kbd> to undo it, and press <kbd>Ctrl</kbd> + <kbd>Y</kbd> to redo it.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-core/grid/edit/undo-redo-keyboard/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/grid-sdk/asp-net-core/grid/edit/undo-redo-keyboard/undoredokeyboard.cs %}
{% endhighlight %}
{% endtabs %}


## Undo redo with batch editing

In Batch mode, changes stay in the grid and are not sent to the data source until the `Update` toolbar item is clicked. Undo and redo work on these pending changes when [EnableUndoRedo](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Grids.GridEditSettings.html#enableundoredo) is `true`.

After the `Update` is clicked, the changes are saved and the undo and redo stack is cleared by default. Set the [EnableBatchUndoRedo](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Grids.GridEditSettings.html#enablebatchundoredo) property to `true` along with [EnableUndoRedo](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Grids.GridEditSettings.html#enableundoredo) to keep the stack after the changes are saved. The saved batch changes can then still be undone and redone.

| Property | Behavior |
|-----|-----|
| EnableUndoRedo | Undo and redo are available for the changes made before they are saved. |
| EnableBatchUndoRedo | Undo and redo remain available for the changes after the `Update` is clicked and the batch changes are saved. |

In the following example, EnableUndoRedo and EnableBatchUndoRedo are set to `true`. Edit the cells, click `Update`, and then use `Undo` and `Redo`.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-core/grid/edit/undo-redo-batch/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/grid-sdk/asp-net-core/grid/edit/undo-redo-batch/undoredobatch.cs %}
{% endhighlight %}
{% endtabs %}


> * The number of stored actions is limited by the [UndoRedoLimit](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Grids.GridEditSettings.html#undoredolimit) property.
> * The grid also provides the `undoEdit`, `redoEdit`, `isUndoStackAvailable` and `isRedoStackAvailable` methods to perform undo and redo and check the stack from code.
