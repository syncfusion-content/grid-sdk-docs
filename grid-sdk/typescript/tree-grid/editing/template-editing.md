---
layout: post
title: Template editing in TypeScript Treegrid control | Syncfusion
description: Learn here all about Template editing in Syncfusion TypeScript Treegrid control of Syncfusion Essential JS 2 and more.
platform: grid-sdk
control: Template editing 
publishingplatform: grid-sdk
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Template editing in TypeScript Treegrid control

## Dialog template

The dialog template editing provides an option to customize the default behavior of dialog editing. Using the dialog template, you can render your own editors by defining the [`editSettings.mode`](../../api/treegrid/editSettingsModel/#mode) as `Dialog` and [`template`](../../api/treegrid/editSettingsModel/#template) as SCRIPT element ID or HTML string which holds the template.

In some cases, you need to add the new field editors in the dialog which are not present in the column model. In that situation, the dialog template will help you to customize the default edit dialog.

In the following sample, treegrid enabled with dialog template editing.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/typescript/treegrid/dialog-template-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/treegrid/dialog-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/treegrid/dialog-template-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/typescript/treegrid/dialog-template-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/treegrid/dialog-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/treegrid/dialog-template-cs1" %}
{% endif %}

> The template form editors should have **name** attribute.

### Template context

The Essential<sup style="font-size:70%">&reg;</sup> JS2 packages has a built-in template engine. Using the template engine, you can access the row information inside the HTML element and bind the attributes, values, or elements based on this row information.

The following properties will be available at the time of template execution.

| Property Name | Usage |
|---------------|--------|
| <kbd>isAdd</kbd> | A Boolean property; it defines whether the current row should be a new record or not.

In the following code example, the `OrderID` textbox has been disabled by using the `isAdd` property.

```
// The disabled attributes will be added based on the isAdd property.
<input id="taskID" name="taskID" type="text" value=${if(isAdd)} '' ${else} ${taskID} ${/if}  ${if(isAdd)}'' ${else} disabled ${/if}/>

```

The following code example illustrates rendering the `taskID` textbox, when a new record is added.

```

${if(isAdd)}
<div class="form-group col-md-6">
    <div class="e-float-input e-control-wrapper">
        <input id="taskID" name="taskID" type="text" value=${if(isAdd)} '' ${else} ${taskID} ${/if}  ${if(isAdd)}'' ${else} disabled ${/if}/>
        <span class="e-float-line"></span>
        <label class="e-float-text e-label-top" for="OrderID">Task ID</label>
    </div>
</div>
${/if}

```

> The dialog template syntax supports the ES6 expression string literals, and you can refer to the [`Template Engine`](../../common/template-engine/) for more template syntax.

### Render editors as components

You can convert the form editors to EJ2 controls in the [`actionComplete`](../../api/treegrid/#actioncomplete) event based on the `requestType` as `beginEdit` or `add`.

The following code example illustrates rendering the drop-down list control in the `actionComplete` event.

```ts

    actionComplete: (args: DialogEditEventArgs) => {
        if ((args.requestType === 'beginEdit' || args.requestType === 'add')) {
            let priorityData: {}[] = DataUtil.distinct(treeGridObj.grid.dataSource, 'priority',true);
            new DropDownList({value: args.rowData.priority, popupHeight: '200px', floatLabelType: 'Always',
                dataSource: priorityData, fields: {text: 'priority', value: 'priority'}, placeholder: 'Priority'}, args.form.elements.namedItem('priority') as HTMLInputElement);
        }
    }

```

### Get value from editor

You can read, format, and update the current editor value in the [`actionBegin`](../../api/treegrid/#actionbegin) event at the time of setting `requestType` to `save`.

In the following code example, the `progress` value has been formatted and updated.

```ts
    actionBegin: (args: SaveEventArgs) => {
        if (args.requestType === 'save') {
            // cast string to integer value.
            args.data['progress'] = parseFloat(args.form.querySelector("#progress").value);
        }
    }

```

### Set focus to editor

By default, the first input element in the dialog will be focused while opening the dialog.
If the first input element is in disabled or hidden state, focus the valid input element in the [`actionComplete`](../../api/treegrid/#actioncomplete) event based on `requestType` as `beginEdit`.

```ts

    actionComplete: (args: DialogEditEventArgs) => {
        // Set initail Focus
        if (args.requestType === 'beginEdit') {
            (args.form.elements.namedItem('taskName')as HTMLInputElement).focus();
        }
    }

```

### Adding validation rules for custom editors

If you have used additional fields that are not present in the column model, then add the validation rules to the [`actionComplete`](../../api/treegrid/#actioncomplete) event.

```ts

    actionComplete: (args: DialogEditEventArgs) => {
        if ((args.requestType === 'beginEdit' || args.requestType === 'add')) {
            // Add Validation Rules
            args.form.ej2_instances[0].addRules('progress', {max: 100});
        }
    }

```