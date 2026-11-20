---
layout: post
title: Undo Redo Editing in JavaScript Grid | Syncfusion
description: Learn how to undo and redo edit actions in the Syncfusion JavaScript Grid using toolbar items and keyboard shortcuts, and how to use batch undo redo and the undo redo limit.
platform: grid-sdk
control: Undo Redo Editing
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Undo Redo Editing in JavaScript Grid

The JavaScript Grid can revert and reapply edit actions such as cell edits, row additions, and row deletions. Undo and redo are available in all editing modes: Normal (inline), Dialog, Batch, and cell editing.

## Undo redo with toolbar

Set the [editSettings.enableUndoRedo](https://ej2.syncfusion.com/javascript/documentation/api/grid/editSettings#enableundoredo) property to `true` to enable undo and redo. Then add the `Undo` and `Redo` items to the toolbar. The `Undo` item reverts the last edit action, and the `Redo` item reapplies the last undone action. Both items are disabled when there is nothing to undo or redo.

In the following example, undo and redo are enabled in Normal editing mode, and the `Undo` and `Redo` items are added to the toolbar.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/javascript/grid/undo-redo-cs1/index.js %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/grid-sdk/javascript/grid/undo-redo-cs1/es5-datasource.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/grid/undo-redo-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/grid/undo-redo-cs1" %}

### Limit the number of undo and redo actions

Use the [editSettings.undoRedoLimit](https://ej2.syncfusion.com/javascript/documentation/api/grid/editSettings#undoredolimit) property to control the maximum number of edit actions stored in the undo and redo stack. When the limit is reached, the oldest action is removed from the stack. The default value is `20`.

In the previous example, the limit is set to `10`, so only the last 10 edit actions can be undone or redone.

## Undo redo with keyboard shortcuts

When [editSettings.enableUndoRedo](https://ej2.syncfusion.com/javascript/documentation/api/grid/editSettings#enableundoredo) is `true`, undo and redo can also be performed using keyboard shortcuts. The shortcuts work even when the `Undo` and `Redo` items are not added to the toolbar.

| Shortcut | Action |
|-----|-----|
| <kbd>Ctrl</kbd> + <kbd>Z</kbd> | Undo the last edit action. |
| <kbd>Ctrl</kbd> + <kbd>Y</kbd> or <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Z</kbd> | Redo the last undone action. |

> On macOS, use the <kbd>Cmd</kbd> key instead of <kbd>Ctrl</kbd>.

In the following example, the toolbar does not contain the `Undo` and `Redo` items. Edit a record, press <kbd>Ctrl</kbd> + <kbd>Z</kbd> to undo the change, and press <kbd>Ctrl</kbd> + <kbd>Y</kbd> to redo it.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/javascript/grid/undo-redo-cs2/index.js %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/grid-sdk/javascript/grid/undo-redo-cs2/es5-datasource.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/grid/undo-redo-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/grid/undo-redo-cs2" %}

## Undo redo with batch editing

To enable undo and redo in batch editing, set [editSettings.enableUndoRedo](https://ej2.syncfusion.com/javascript/documentation/api/grid/editSettings#enableundoredo) to `true` and set the edit mode to `Batch`. Additionally, set the [editSettings.enableBatchUndoRedo](https://ej2.syncfusion.com/javascript/documentation/api/grid/editSettings#enablebatchundoredo) property to `true` to support undo and redo actions during batch operations.

During batch editing, changes are maintained as pending changes until a batch save operation is performed. When `enableBatchUndoRedo` is set to `true`, the `Undo` and `Redo` actions remain available even after the batch changes are saved to the data source.

| Property | Behavior |
|-----|-----|
| [enableUndoRedo](https://ej2.syncfusion.com/javascript/documentation/api/grid/editSettings#enableundoredo) | Enables undo and redo for editing actions. |
| [enableBatchUndoRedo](https://ej2.syncfusion.com/javascript/documentation/api/grid/editSettings#enablebatchundoredo) | Enables undo and redo for batch editing actions, including after the batch changes are saved to the data source. |

In the following example, `enableUndoRedo` and `enableBatchUndoRedo` are set to `true`. Edit, add, or delete rows, save the batch changes, and then use `Undo` and `Redo` to revert or reapply the changes.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/javascript/grid/undo-redo-cs3/index.js %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/grid-sdk/javascript/grid/undo-redo-cs3/es5-datasource.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/grid/undo-redo-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/grid/undo-redo-cs3" %}
