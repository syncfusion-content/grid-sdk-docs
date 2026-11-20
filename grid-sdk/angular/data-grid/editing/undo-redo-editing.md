---
layout: post
title: Undo Redo Editing in Angular Grid | Syncfusion
description: Learn how to undo and redo cell edits, row additions and row deletions in batch editing mode of the Syncfusion Angular Grid.
platform: grid-sdk
control: Undo Redo Editing
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Undo Redo Editing in Angular Grid

The Grid supports undoing and redoing edit actions in batch editing mode. Cell edits, row additions and row deletions made before the changes are saved can be reverted or reapplied one step at a time, without discarding the other pending changes.

To enable this feature, set [editSettings.enableUndoRedo](https://ej2.syncfusion.com/angular/documentation/api/grid/editSettings#enableundoredo) to `true` and set the editing mode to [Batch](https://help.syncfusion.com/grid-sdk/angular/data-grid/editing/batch-editing). Then add the `Undo` and `Redo` items to the toolbar.

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

> * Undo and Redo are supported only in batch editing mode.
> * Each action is stored in a stack. Use the toolbar `Undo` and `Redo` items to move through the stack.

## Limit the number of undo and redo actions

The number of stored actions is controlled by [editSettings.undoRedoLimit](https://ej2.syncfusion.com/angular/documentation/api/grid/editSettings#undoredolimit). When the limit is reached, the oldest action is removed from the stack.
