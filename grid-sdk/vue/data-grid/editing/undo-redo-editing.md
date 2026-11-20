---
layout: post
title: Undo Redo Editing in Vue Grid | Syncfusion
description: Learn how to undo and redo edit actions in the Syncfusion Vue Grid using toolbar items and keyboard shortcuts, and how to use batch undo redo and the undo redo limit.
platform: grid-sdk
control: Undo Redo Editing
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Undo Redo Editing in Vue Grid

The Vue Grid can revert and reapply edit actions such as cell edits, row additions and row deletions. Undo and redo are available in all editing modes, such as Normal (inline), Dialog and Batch, and in cell editing.

## Undo redo with toolbar

Set the [editSettings.enableUndoRedo](https://ej2.syncfusion.com/vue/documentation/api/grid/editSettings#enableundoredo) property to `true` to enable undo and redo. Then add the `Undo` and `Redo` items to the toolbar. The `Undo` item reverts the last edit action and the `Redo` item reapplies the action that was undone. Both items are disabled while there is nothing to undo or redo.

In the following example, undo and redo are enabled in Normal editing mode with the toolbar items.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid-sdk/vue/grid/edit/undo-redo-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid-sdk/vue/grid/edit/undo-redo-cs1/app.vue %}
{% endhighlight %}
{% highlight js tabtitle="datasource.js" %}
{% include code-snippet/grid-sdk/vue/grid/edit/undo-redo-cs1/datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/vue/grid/edit/undo-redo-cs1" %}

### Limit the number of undo and redo actions

Use the [editSettings.undoRedoLimit](https://ej2.syncfusion.com/vue/documentation/api/grid/editSettings#undoredolimit) property to control the maximum number of edit actions stored in the undo and redo stack. When the limit is reached, the oldest action is removed from the stack. The default value is `20`.

In the previous example, the limit is set to `10`, so only the last 10 edit actions can be undone.

## Undo redo with keyboard shortcuts

When [editSettings.enableUndoRedo](https://ej2.syncfusion.com/vue/documentation/api/grid/editSettings#enableundoredo) is `true`, undo and redo can also be performed with keyboard shortcuts. The shortcuts work without the `Undo` and `Redo` toolbar items.

| Shortcut | Action |
|-----|-----|
| <kbd>Ctrl</kbd> + <kbd>Z</kbd> | Undo the last edit action. |
| <kbd>Ctrl</kbd> + <kbd>Y</kbd> or <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Z</kbd> | Redo the last undone action. |

> On macOS, use the <kbd>Cmd</kbd> key instead of <kbd>Ctrl</kbd>.

In the following example, the toolbar does not contain the `Undo` and `Redo` items. Edit a record, press <kbd>Ctrl</kbd> + <kbd>Z</kbd> to undo it, and press <kbd>Ctrl</kbd> + <kbd>Y</kbd> to redo it.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid-sdk/vue/grid/edit/undo-redo-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid-sdk/vue/grid/edit/undo-redo-cs2/app.vue %}
{% endhighlight %}
{% highlight js tabtitle="datasource.js" %}
{% include code-snippet/grid-sdk/vue/grid/edit/undo-redo-cs2/datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/vue/grid/edit/undo-redo-cs2" %}

## Undo redo with batch editing

To enable undo and redo in batch editing, set [editSettings.enableUndoRedo](https://ej2.syncfusion.com/vue/documentation/api/grid/editSettings#enableundoredo) to `true` and set the edit mode to `Batch`. Additionally, set the [editSettings.enableBatchUndoRedo](https://ej2.syncfusion.com/vue/documentation/api/grid/editSettings#enablebatchundoredo) property to `true` to support undo and redo actions during batch operations.

By default, batch editing keeps the changes virtually in the grid until they are saved with the `Update` toolbar item. The `enableBatchUndoRedo` property provides undo and redo options during this bulk editing process, so the pending cell edits, added rows and deleted rows can be reverted or reapplied before they are saved.

| Property | Behavior |
|-----|-----|
| enableUndoRedo | Enables undo and redo for the editing actions. |
| enableBatchUndoRedo | Enables undo and redo for the pending changes during batch editing. |

In the following example, enableUndoRedo and enableBatchUndoRedo are set to `true`. Edit, add or delete rows, and then use `Undo` and `Redo` before clicking `Update`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid-sdk/vue/grid/edit/undo-redo-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid-sdk/vue/grid/edit/undo-redo-cs3/app.vue %}
{% endhighlight %}
{% highlight js tabtitle="datasource.js" %}
{% include code-snippet/grid-sdk/vue/grid/edit/undo-redo-cs3/datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/vue/grid/edit/undo-redo-cs3" %}

> * The number of stored actions is limited by the [editSettings.undoRedoLimit](https://ej2.syncfusion.com/vue/documentation/api/grid/editSettings#undoredolimit) property.
> * The grid also provides the `undoEdit`, `redoEdit`, `isUndoStackAvailable` and `isRedoStackAvailable` methods to perform undo and redo and check the stack from code.
