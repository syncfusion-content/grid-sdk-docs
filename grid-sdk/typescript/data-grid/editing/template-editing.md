---
layout: post
title: Template editing in TypeScript Grid control | Syncfusion
description: Learn here all about Template editing in Syncfusion TypeScript Grid control of Syncfusion Essential JS 2 and more.
platform: grid-sdk
control: Template editing 
publishingplatform: grid-sdk
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Template editing in TypeScript Grid control

## Inline or dialog template editing

The dialog/inline template editing provides an option to customize the default behavior of dialog editing. Using the dialog template, you can render your own editors by defining the [editSettings.mode](../../api/grid/editSettings/#mode) as `Dialog/Inline` and [editSetting.template](../../api/grid/editSettings/#template) as SCRIPT element ID or HTML string which holds the template.

In some cases, you need to add the new field editors in the dialog which are not present in the column model. In that situation, the dialog template will help you to customize the default edit dialog.

In the following sample, grid enabled with dialog template editing.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/typescript/grid/dialogtemplate-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/grid/dialogtemplate-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/grid/dialogtemplate-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/typescript/grid/dialogtemplate-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/grid/dialogtemplate-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/grid/dialogtemplate-cs1" %}
{% endif %}

> The template form editors should have **name** attribute.

## Template context

While using the edit template, you can access the row information inside the Template and you can bind the attributes or values or elements based on this row information.

The following properties will be available at the time of template execution.

| Property Name | Usage |
|---------------|-------|
| <kbd>isAdd</kbd> | A Boolean property; it defines whether the current row should be a new record or not. |

In the following code example, the **OrderID** textbox has been disabled by using the **isAdd** property.

```
// The disabled attributes will be added based on the isAdd property.
<input id="OrderID" name="OrderID" type="text" value=${if(isAdd)} '' ${else} ${OrderID} ${/if}  ${if(isAdd)}'' ${else} disabled ${/if}/>

```

The following code example illustrates rendering the **OrderID** textbox, when a new record is added.

```

${if(isAdd)}
<div class="form-group col-md-6">
    <div class="e-float-input e-control-wrapper">
        <input id="OrderID" name="OrderID" type="text" value=${if(isAdd)} '' ${else} ${OrderID} ${/if} />
        <span class="e-float-line"></span>
        <label class="e-float-text e-label-top" for="OrderID">Order ID</label>
    </div>
</div>
${/if}

```

## Render editors as controls

You can convert the form editors to EJ2 controls in the [actionComplete](../../api/grid/#actioncomplete) event based on the `requestType` as `beginEdit` or `add`.

The following code example illustrates rendering the drop-down list control in the `actionComplete` event.

{% if page.publishingplatform == "typescript" %}
 
```ts

    actionComplete: (args: DialogEditEventArgs) => {
        if ((args.requestType === 'beginEdit' || args.requestType === 'add')) {
            let countryData: {}[] = DataUtil.distinct(data, 'ShipCountry', true);
            new DropDownList({value: args.rowData.ShipCountry, popupHeight: '200px', floatLabelType: 'Always',
                dataSource: countryData, fields: {text: 'ShipCountry', value: 'ShipCountry'}, placeholder: 'Ship Country'}, args.form.elements.namedItem('ShipCountry') as HTMLInputElement);
        }
    }

```

 {% elsif page.publishingplatform == "javascript" %}
 
```js

    actionComplete: (args) => {
        if ((args.requestType === 'beginEdit' || args.requestType === 'add')) {
            let countryData: {}[] = DataUtil.distinct(data, 'ShipCountry', true);
            new DropDownList({value: args.rowData.ShipCountry, popupHeight: '200px', floatLabelType: 'Always',
                dataSource: countryData, fields: {text: 'ShipCountry', value: 'ShipCountry'}, placeholder: 'Ship Country'}, args.form.elements.namedItem('ShipCountry'));
        }
    }

```

{% endif %}



## Get value from editor

You can read, format, and update the current editor value in the [actionBegin](../../api/grid/#actionbegin) event at the time of setting `requestType` to `save`.

In the following code example, the `freight` value has been formatted and updated.

{% if page.publishingplatform == "typescript" %}
 
```ts
    actionBegin: (args: SaveEventArgs) => {
        if (args.requestType === 'save') {
            // cast string to integer value.
            args.data['Freight'] = parseFloat(args.form.querySelector("#Freight").value);
        }
    }

```

 {% elsif page.publishingplatform == "javascript" %}
 
```js
    actionBegin: (args) => {
        if (args.requestType === 'save') {
            // cast string to integer value.
            args.data['Freight'] = parseFloat(args.form.querySelector("#Freight").value);
        }
    }

```

{% endif %}

## Set focus to editor

By default, the first input element in the dialog will be focused while opening the dialog. If the first input element is in disabled or hidden state, focus the valid input element in the [actionComplete](../../api/grid/#actioncomplete) event based on **requestType** as **beginEdit**.

{% if page.publishingplatform == "typescript" %}
 
```ts

    actionComplete: (args: DialogEditEventArgs) => {
        // Set initail Focus
        if (args.requestType === 'beginEdit') {
            (args.form.elements.namedItem('CustomerID')as HTMLInputElement).focus();
        }
    }

```

 {% elsif page.publishingplatform == "javascript" %}
 
```js

    actionComplete: (args) => {
        // Set initail Focus
        if (args.requestType === 'beginEdit') {
            (args.form.elements.namedItem('CustomerID')).focus();
        }
    }

```

{% endif %}

## Disable form validation

If you need to disable the default validation rules in  the [actionComplete](../../api/grid/#actioncomplete) event.

{% if page.publishingplatform == "typescript" %}
 
```typescript

    actionComplete: (args: DialogEditEventArgs) => {
        if ((args.requestType === 'beginEdit' || args.requestType === 'add')) {
            // Disable the Validation Rules
            args.form.ej2_instances[0].rules = {};
        }
    }

```

 {% elsif page.publishingplatform == "javascript" %}
 
```js

    actionComplete: (args) => {
        if ((args.requestType === 'beginEdit' || args.requestType === 'add')) {
            // Disable the Validation Rules
            args.form.ej2_instances[0].rules = {};
        }
    }

```

{% endif %}

## Adding validation rules for custom editors

If you have interested to use our default form validation, the validation rules for the fields which are not present in the column model need to be add in  the [actionComplete](../../api/grid/#actioncomplete) event.

{% if page.publishingplatform == "typescript" %}
 
```ts

    actionComplete: (args: DialogEditEventArgs) => {
        if ((args.requestType === 'beginEdit' || args.requestType === 'add')) {
            // Add Validation Rules
            args.form.ej2_instances[0].addRules('Freight', {max: 500});
        }
    }

```

 {% elsif page.publishingplatform == "javascript" %}
 
```js

    actionComplete: (args) => {
        if ((args.requestType === 'beginEdit' || args.requestType === 'add')) {
            // Add Validation Rules
            args.form.ej2_instances[0].addRules('Freight', {max: 500});
        }
    }

``` 

{% endif %}

## Render tab control inside the dialog template

You can use [Tab](../../tab/index.html) control inside dialog edit UI using dialog template feature. The dialog template feature can be enabled by defining  [editSettings.mode](../../api/grid/editSettings/#mode) as `Dialog` and [editSettingsTemplate](../../api/grid/editSettings/#template) as template variable to define the editors.

To include tab controls in the Dialog, please ensure the following steps:

**Step 1**: To render the Tab control, use the [editSettingsTemplate](../../api/grid/editSettings/#template) of the Grid. Inside the content template of the tab items define the input elements.

```
        <div>
        <div id="edittab"></div>
            <div id="tab1">
                <div class="form-row" >
                    <div class="form-group col-md-6">
                        <div class="e-float-input e-control-wrapper">
                            <input id="OrderID" name="OrderID" type="text" value=${if(isAdd)} '' ${else} ${OrderID} ${/if} ${if(isAdd)} '' ${else} disabled ${/if} />
                            <span class="e-float-line"></span>
                            <label class="e-float-text e-label-top" for="OrderID">Order ID</label>
                        </div>
                    </div>
                </div>
                <div class="form-row" >
                    <div class="form-group col-md-6">
                        <div class="e-float-input e-control-wrapper">
                            <input id="CustomerID" name="CustomerID" type="text" value=${if(isAdd)} '' ${else} ${CustomerID} ${/if} />
                            <span class="e-float-line"></span>
                            <label class="e-float-text e-label-top" for="CustomerID">Customer ID</label>
                        </div>
                    </div>
                </div>
                <button id='next' class='e-info e-btn' style="float: right" type='button'> next</button>
            </div>

            <div id="tab2" style='display: none'>
                <div class="form-row" >
                    <div class="form-group col-md-6">
                        <input type="text" name="ShipCountry" id="ShipCountry" value=${if(isAdd)} '' ${else} ${ShipCountry} ${/if} />
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <input type="checkbox" name="Verified" id="Verified" ${if(isAdd)} '' ${else} checked ${/if} />
                    </div>
                </div>
                <button id='submit' class='e-info e-btn' style="float: right" type='button'> submit</button>
            </div>
        </div>

```

**Step 2**:

To render the tab control, use the [actionComplete](../../api/grid/#actionComplete) event of the grid.

{% if page.publishingplatform == "typescript" %}
 
```ts

    let tabObj: Tab = new Tab({
        showCloseButton: false,
        selecting:  (e) => {if(e.isSwiped) {e.cancel = true;} if(e.selectingIndex === 1) {e.cancel = !validate(1)}},
        items: [
            { header: { 'text': 'Details' }, content: '#tab1' },
            { header: { 'text': 'Verify' }, content: '#tab2' },
        ]
    });
    tabObj.appendTo('#edittab');

```

 {% elsif page.publishingplatform == "javascript" %}
 
```js

     var tabObj = new ej.navigations.Tab({
          showCloseButton: false,
          selecting:  (e) => {if(e.isSwiped) {e.cancel = true;} if(e.selectingIndex === 1) {e.cancel = !validate(1)}},
          items: [
              { header: { 'text': 'Details' }, content: '#tab1' },
              { header: { 'text': 'Verify' }, content: '#tab2' },
          ]
      });
      tabObj.appendTo('#edittab');

```

{% endif %}

The following example, we have rendered tab control inside the edit dialog. The tab control has two tabs and once you fill the first tab and navigate to second one. The validation for first tab was done before navigate to second.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/typescript/grid/tabtemplate-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/grid/tabtemplate-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/grid/tabtemplate-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/typescript/grid/tabtemplate-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/grid/tabtemplate-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/grid/tabtemplate-cs1" %}
{% endif %}