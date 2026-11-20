---
layout: post
title: Undo Redo Editing in React Grid | Syncfusion
description: Learn how to undo and redo cell edits, row additions and row deletions in batch editing mode of the Syncfusion React Grid.
platform: grid-sdk
control: Undo Redo Editing
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Undo Redo Editing in React Grid

The Grid supports undoing and redoing edit actions in batch editing mode. Cell edits, row additions and row deletions made before the changes are saved can be reverted or reapplied one step at a time, without discarding the other pending changes.

To enable this feature, set [editSettings.enableUndoRedo](https://ej2.syncfusion.com/react/documentation/api/grid/editSettings#enableundoredo) to `true` and set the editing mode to [Batch](https://help.syncfusion.com/grid-sdk/react/data-grid/editing/batch-editing). Then add the `Undo` and `Redo` items to the toolbar.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid-sdk/react/grid/undo-redo-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid-sdk/react/grid/undo-redo-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid-sdk/react/grid/undo-redo-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid-sdk/react/grid/undo-redo-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/react/grid/undo-redo-cs1" %}

> * Undo and Redo are supported only in batch editing mode.
> * Each action is stored in a stack. Use the toolbar `Undo` and `Redo` items to move through the stack.
> * For grid editing setup and configuration, refer to the [Edit Feature Setup](./edit#set-up-editing).

## Limit the number of undo and redo actions

The number of stored actions is controlled by [editSettings.undoRedoLimit](https://ej2.syncfusion.com/react/documentation/api/grid/editSettings#undoredolimit). When the limit is reached, the oldest action is removed from the stack.
