---
layout: post
title: Undo Redo Editing in ASP.NET MVC Grid | Syncfusion
description: Learn how to undo and redo cell edits, row additions and row deletions in batch editing mode of the Syncfusion ASP.NET MVC Grid.
platform: grid-sdk
control: Undo Redo Editing
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Undo Redo Editing in ASP.NET MVC Grid

The Grid supports undoing and redoing edit actions in batch editing mode. Cell edits, row additions and row deletions made before the changes are saved can be reverted or reapplied one step at a time, without discarding the other pending changes.

To enable this feature, set [EnableUndoRedo](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Grids.GridEditSettings.html#Syncfusion_EJ2_Grids_GridEditSettings_EnableUndoRedo) to `true` and set the editing mode to [Batch](https://help.syncfusion.com/grid-sdk/asp-net-mvc/data-grid/editing/batch-editing). Then add the `Undo` and `Redo` items to the toolbar.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-mvc/grid/edit/undo-redo/razor %}
{% endhighlight %}
{% highlight c# tabtitle="UndoRedo.cs" %}
{% include code-snippet/grid-sdk/asp-net-mvc/grid/edit/undo-redo/undoredo.cs %}
{% endhighlight %}
{% endtabs %}

> * Undo and Redo are supported only in batch editing mode.
> * Each action is stored in a stack. Use the toolbar `Undo` and `Redo` items to move through the stack.

## Limit the number of undo and redo actions

The number of stored actions is controlled by [UndoRedoLimit](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Grids.GridEditSettings.html#Syncfusion_EJ2_Grids_GridEditSettings_UndoRedoLimit). When the limit is reached, the oldest action is removed from the stack.
