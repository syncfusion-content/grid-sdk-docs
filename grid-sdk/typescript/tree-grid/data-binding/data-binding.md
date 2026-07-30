---
layout: post
title: Data binding in TypeScript Treegrid control | Syncfusion
description: Learn here all about Data binding in Syncfusion TypeScript Treegrid control of Syncfusion Essential JS 2 and more.
platform: grid-sdk
control: Data binding 
publishingplatform: grid-sdk
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Data binding in TypeScript Treegrid control

The TreeGrid uses `DataManager`, which supports both RESTful JSON data services binding and local JavaScript object array binding. The [`dataSource`](../../api/treegrid/#dataSource) property can be assigned either with the instance of `DataManager` or JavaScript object array collection.
It supports two kinds of data binding method:

* Local data
* Remote data

## Binding with ajax

You can use TreeGrid [`dataSource`](../../api/treegrid/#datasource) property to bind the data source to TreeGrid from external Fetch request. In the below code we have fetched the data source from the server with the help of Ajax request and provided that to [`dataSource`](../../api/treegrid/#datasource) property by using `onSuccess` event of the Fetch.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/typescript/treegrid/data-binding-cs1/index.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/grid-sdk/typescript/treegrid/data-binding-cs1/datasource.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/treegrid/data-binding-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/treegrid/data-binding-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/typescript/treegrid/data-binding-cs1/index.js %}
{% endhighlight %}
{% highlight js tabtitle="datasource.js" %}
{% include code-snippet/grid-sdk/typescript/treegrid/data-binding-cs1/es5-datasource.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/treegrid/data-binding-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/treegrid/data-binding-cs1" %}
{% endif %}

> * If you bind the dataSource from this way, then it acts like a local dataSource. So you cannot perform any server side crud actions.

## Handling expandStateMapping

To denotes the expand status of parent row, define the [`expandStateMapping`](https://ej2.syncfusion.com/documentation/api/treegrid/#expandstatemapping) property of tree grid.

The `expandStateMapping` property maps the field name in data source, that denotes whether parent record is in expanded or collapsed state and this is useful to renders parent row in expanded or collapsed state based on this mapping property value in data source.

```ts

import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
import { TreeGridComponent } from '@syncfusion/ej2-treegrid';
import './App.css';

let dataManager: DataManager = new DataManager({
    adaptor: new UrlAdaptor,
    url: "Home/DataSource",
});

let treegrid: TreeGrid = new TreeGrid({
dataSource: dataManager,
hasChildMapping : 'isParent',
idMapping: 'TaskID',
expandStateMapping: 'IsExpanded',
parentIdMapping: 'ParentValue',
height: 400,
treeColumnIndex: 1,
    columns: [
    { field: 'TaskID', headerText: 'Task ID', textAlign: 'Right', width: 90 },
    { field: 'TaskName', headerText: 'Task Name', width: 180 },
    { field: 'Duration', headerText: 'Duration', width: 80, textAlign: 'Right' }
]
});
treegrid.appendTo('#TreeGrid');

```

The following code example defines `expandStateMapping` property at server end.

```ts

public ActionResult ExpandStateMapping()
{
  return View();
}

public class TreeData
{
    public static List<TreeData> tree = new List<TreeData>();
    [System.ComponentModel.DataAnnotations.Key]
    public int TaskID { get; set; }
    public string TaskName { get; set; }

    public int Duration { get; set; }
    public int? ParentValue { get; set; }
    public bool? isParent { get; set; }

    public bool IsExpanded { get; set; }
    public TreeData() { }
    public static List<TreeData> GetTree()
    {
        if (tree.Count == 0)
        {
            int root = 0;
            for (var t = 1; t <= 500; t++)
            {
                Random ran = new Random();
                string math = (ran.Next() % 3) == 0 ? "High" : (ran.Next() % 2) == 0 ? "Release Breaker" : "Critical";
                string progr = (ran.Next() % 3) == 0 ? "Started" : (ran.Next() % 2) == 0 ? "Open" : "In Progress";
                root++;
                int rootItem = root;
                tree.Add(new TreeData() { TaskID = rootItem, TaskName = "Parent task " + rootItem.ToString(), isParent = true, IsExpanded = false, ParentValue = null, Duration = ran.Next(1, 50) });
                int parent = root;
                for (var d = 0; d < 1; d++)
                {
                    root++;
                    string value = ((parent + 1) % 3 == 0) ? "Low" : "Critical";
                    int par = parent + 1;
                    progr = (ran.Next() % 3) == 0 ? "In Progress" : (ran.Next() % 2) == 0 ? "Open" : "Validated";
                    int iD = root;
                    tree.Add(new TreeData() { TaskID = iD, TaskName = "Child task " + iD.ToString(), isParent = true, IsExpanded = false, ParentValue = rootItem, Duration = ran.Next(1, 50) });
                    int subparent = root;
                    for (var c = 0; c < 500; c++)
                    {
                        root++;
                        string val = ((subparent + c + 1) % 3 == 0) ? "Low" : "Critical";
                        int subchild = subparent + c + 1;
                        string progress = (ran.Next() % 3) == 0 ? "In Progress" : (ran.Next() % 2) == 0 ? "Open" : "Validated";
                        int childID = root ;
                        tree.Add(new TreeData() { TaskID = childID, TaskName = "sub Child task " + childID.ToString(), isParent = false, IsExpanded = false, ParentValue = subparent, Duration = ran.Next(1, 50) });
                    }
                }
            }
        }
        return tree;
    }
}

```

## Custom binding

It is possible to handle data processing externally and bind the result to the TreeGrid. This helps you to provide your own custom data logic. TreeGrid expects an object as the result of the custom logic and the emitted value should be an object with properties result and count.

>In this context, we are going to use DataManager with WebApi Adaptor for handling remote interaction, you can choose any HTTP client as per your choice.

```ts

import { TreeGrid, Page} from '@syncfusion/ej2-treegrid';
import { DataManager, WebApiAdaptor, Query } from '@syncfusion/ej2-data';
import { isNullOrUndefined } from '@syncfusion/ej2-base';

TreeGrid.Inject(Page);

let data: DataManager = new DataManager({
    url: 'http://localhost:51473/api/Tasks',    ////   url for fetching the data from server
    adaptor: new WebApiAdaptor,
    crossDomain: true
});

                        /////  filter query for fetching the root level records only  and  take             value should be equal to the pageSize value of pageSettings

data.executeQuery(new Query().where('ParentId', 'equal', null).take(3).skip(0).requiresCount()).then((e: any) => {

    let treegrid: TreeGrid = new TreeGrid({
        dataSource: { result: e.result, count: e.count },
        hasChildMapping: 'IsParent',
        idMapping: 'TaskId',
        parentIdMapping: 'ParentId',
        allowPaging: true,
        pageSettings: { pageSize: 3, pageSizeMode: 'Root' },
        dataStateChange: function (state: any) {
            if (state.action.requestType === 'paging') {
                data.executeQuery(new Query().skip(state.skip).take(state.take).requiresCount()).then(function (e: any) {
                    this.dataSource = { result: e.result, count: e.count };
                });
            }
        },
        treeColumnIndex: 1,
        columns: [
            { field: 'TaskId', headerText: 'Task ID', isPrimaryKey: true, textAlign: 'Right', width: 120 },
            { field: 'TaskName', headerText: 'Task Name', width: 150 },
            { field: 'StartDate', headerText: 'Start Date', textAlign: 'Right', width: 120, format: { skeleton: 'yMd', type: 'date' } },
            { field: 'Duration', headerText: 'Duration', width: 110, textAlign: 'Right' },
            { field: 'Progress', headerText: 'Progress', width: 110 },
        ]
    });
    treegrid.appendTo('#TreeGrid');
});

```

> We have a limitation for Custom Binding feature of TreeGrid. This feature works only for Self Referential data binding with `pageSizeMode` as `Root`.

### Handling child data

Using the custom binding feature you can bind the child data for a parent record as per your custom logic. When a parent record is expanded, [`dataStateChange`](../../api/treegrid/#datastatechange) event is triggered in which you can assign your custom data to the `childData` property of the [`dataStateChange`](../../api/treegrid/#datastatechange) event arguments.
After assigning the child data, `childDataBind` method should be called from the
[`dataStateChange`](../../api/treegrid/#datastatechange) event arguments to indicate that the data is bound.

> In this context, initially we have assigned only the parent records to the treegrid dataSource and fetched the required child records in the [`dataStateChange`](../../api/treegrid/#datastatechange) event.

````ts

import { TreeGrid, Page, Toolbar, Sort } from '@syncfusion/ej2-treegrid';
import { DataManager, WebApiAdaptor, Query } from '@syncfusion/ej2-data';
import { isNullOrUndefined } from '@syncfusion/ej2-base';

TreeGrid.Inject(Page);

let data: DataManager = new DataManager({
    url: 'http://localhost:51473/api/Tasks',     //// url for fetching the data from server
    adaptor: new WebApiAdaptor,
    crossDomain: true
});

            /// filter query for fetching only the root level records

data.executeQuery(new Query().where('ParentId', 'equal', null).take(3).skip(0).requiresCount()).then((e: any) => {

    let treegrid: TreeGrid = new TreeGrid({
        dataSource: { result: e.result, count: e.count },
        hasChildMapping: 'IsParent',
        idMapping: 'TaskId',
        parentIdMapping: 'ParentId',
        allowPaging: true,
        pageSettings: { pageSize: 3, pageSizeMode: 'Root' },
        dataStateChange: function (state: any) {
            if (!isNullOrUndefined(state.requestType) && state.requestType === 'expand') {

                //// filter query for fetching the child records of the expanded record

                data.executeQuery(new Query().where('ParentId', 'equal', state.data.TaskId)).then(function (e: any) {
                    state.childData = e.result;
                    state.childDataBind();
                });
            } else {
                data.executeQuery(new Query().skip(state.skip).take(state.take).requiresCount()).then(function (e: any) {
                    this.dataSource = { result: e.result, count: e.count };
                });
            }
        },
        treeColumnIndex: 1,
        columns: [
            { field: 'TaskId', headerText: 'Task ID', isPrimaryKey: true, textAlign: 'Right', width: 120 },
            { field: 'TaskName', headerText: 'Task Name', width: 150 },
            { field: 'StartDate', headerText: 'Start Date', textAlign: 'Right', width: 120, format: { skeleton: 'yMd', type: 'date' } },
            { field: 'Duration', headerText: 'Duration', width: 110, textAlign: 'Right' },
            { field: 'Progress', headerText: 'Progress', width: 110 },
        ]
    });
    treegrid.appendTo('#TreeGrid');
});

````

### Handling Tree Grid actions

For TreeGrid actions such as paging, sorting, etc dataStateChange event will be invoked. You have to query and resolve data using Fetch in this event based on the state arguments.

```ts

import { TreeGrid, Page, Toolbar, Sort } from '@syncfusion/ej2-treegrid';
import { DataManager, WebApiAdaptor, Query } from '@syncfusion/ej2-data';
import { isNullOrUndefined } from '@syncfusion/ej2-base';

TreeGrid.Inject(Page);

let data: DataManager = new DataManager({
    url: 'http://localhost:51473/api/Tasks',     //// url for fetching the data from server
    adaptor: new WebApiAdaptor,
    crossDomain: true
});

            /// filter query for fetching only the root level records

data.executeQuery(new Query().where('ParentId', 'equal', null).take(3).skip(0).requiresCount()).then((e: any) => {

    let treegrid: TreeGrid = new TreeGrid({
        dataSource: { result: e.result, count: e.count },
        hasChildMapping: 'IsParent',
        idMapping: 'TaskId',
        parentIdMapping: 'ParentId',
        allowPaging: true,
        allowSorting: true,
        pageSettings: { pageSize: 3, pageSizeMode: 'Root' },
        dataStateChange: function (state: any) {
            if (!isNullOrUndefined(state.requestType) && state.requestType === 'expand') {

                             //// filter query for fetching the child records of the expanded record

                data.executeQuery(new Query().where('ParentId', 'equal', state.data.TaskId)).then(function (e: any) {
                    state.childData = e.result;
                    state.childDataBind();
                });
            }
            if (state.action.requestType === 'paging') {
                data.executeQuery(new Query().skip(state.skip).take(state.take).requiresCount()).then(function (e: any) {
                    this.dataSource = { result: e.result, count: e.count };
                });
            }
            if (state.action.requestType === 'sorting') {

                    //// sort query for getting the sorted records from server

                data.executeQuery(new Query().sortBy('TaskId', 'descending').addParams('IdMapping','TaskId').skip(state.skip).take(state.take).requiresCount()).then(function (e: any) {
                        this.dataSource = { result: e.result, count: e.count };
                });
            }
        },
        treeColumnIndex: 1,
        columns: [
            { field: 'TaskId', headerText: 'Task ID', isPrimaryKey: true, textAlign: 'Right', width: 120 },
            { field: 'TaskName', headerText: 'Task Name', width: 150 },
            { field: 'StartDate', headerText: 'Start Date', textAlign: 'Right', width: 120, format: { skeleton: 'yMd', type: 'date' } },
            { field: 'Duration', headerText: 'Duration', width: 110, textAlign: 'Right' },
            { field: 'Progress', headerText: 'Progress', width: 110 },
        ]
    });
    treegrid.appendTo('#TreeGrid');
});

```

### Performing CRUD actions

The [`dataSourceChanged`](../../api/treegrid/#datasourcechanged) event will be triggered for updating the treegrid data. You can perform the save operation based on the event arguments and call the endEdit method to indicate the completion of save operation.

````ts

import { TreeGrid, Page, Toolbar, Sort, Filter, Edit } from '@syncfusion/ej2-treegrid';
import { DataManager, WebApiAdaptor, Query } from '@syncfusion/ej2-data';
import { isNullOrUndefined } from '@syncfusion/ej2-base';

TreeGrid.Inject(Page, Toolbar, Sort, Filter, Edit);

let data: DataManager = new DataManager({
    url: 'http://localhost:51473/api/Tasks',
    adaptor: new WebApiAdaptor,
    crossDomain: true
});

data.executeQuery(new Query().where('ParentId', 'equal', null).take(3).skip(0).requiresCount()).then((e: any) => {

    let treegrid: TreeGrid = new TreeGrid({
        dataSource: { result: e.result, count: e.count },
        hasChildMapping: 'IsParent',
        idMapping: 'TaskId',
        parentIdMapping: 'ParentId',
        allowPaging: true,
        toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
        editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Row' },
        pageSettings: { pageSize: 3, pageSizeMode: 'Root' },
        dataSourceChanged: function (state: any) {
            if (state.action == 'add') {
                state.endEdit();
            }
            else if (state.action == 'edit') {
                state.endEdit();
            }
            else if (state.requestType == 'delete') {
                state.endEdit();
            }
        },
        dataStateChange: function (state: any) {
            if (!isNullOrUndefined(state.requestType) && state.requestType === 'expand') {
                data.executeQuery(new Query().where('ParentId', 'equal', state.data.TaskId)).then(function (e: any) {
                    state.childData = e.result;
                    state.childDataBind();
                });
            } else {
                data.executeQuery(new Query().where('ParentId', 'equal', null).take(3).skip(0).requiresCount()).then(function (e: any) {
                    this.dataSource = { result: e.result, count: e.count };
                });
            }
        },
        treeColumnIndex: 1,
        columns: [
            { field: 'TaskId', headerText: 'Task ID', isPrimaryKey: true, textAlign: 'Right', width: 120 },
            { field: 'TaskName', headerText: 'Task Name', width: 150 },
            { field: 'StartDate', headerText: 'Start Date', textAlign: 'Right', width: 120, format: { skeleton: 'yMd', type: 'date' } },
            { field: 'Duration', headerText: 'Duration', width: 110, textAlign: 'Right' },
            { field: 'Progress', headerText: 'Progress', width: 110 },
        ]
    });
    treegrid.appendTo('#TreeGrid');
});

````

### Calculate aggregates

The footer aggregate values  should be calculated and sent along with the **dataSource** property as follows. The aggregate property of the data source should contain the aggregate value assigned to the property named in the **field – type** format. For example, the **Sum** aggregate value for the **Duration** field should be assigned to the property named as **Duration - sum**.

```
{
    result: [{..}, {..}, {..}, ...],
    count: 830,
    aggregates: { 'Freight - sum' : 450,'EmployeeID - min': 1 }
}
```

### Provide excel filter data source

The [`dataStateChange`](../../api/treegrid/#datastatechange) event will be triggered with appropriate arguments when the excel filter requests the filter choice data source. You need to resolve the excel filter data source using the **dataSource** resolver function from the state argument as follows.

```ts

import { TreeGrid, Page, Filter} from '@syncfusion/ej2-treegrid';
import { DataManager, WebApiAdaptor, Query } from '@syncfusion/ej2-data';
import { isNullOrUndefined } from '@syncfusion/ej2-base';

TreeGrid.Inject(Page, Filter);

let data: DataManager = new DataManager({
    url: 'http://localhost:51473/api/Tasks',    ////   url for fetching the data from server
    adaptor: new WebApiAdaptor,
    crossDomain: true
});

            ///// filter query for fetching the root level records only

data.executeQuery(new Query().where('ParentId', 'equal', null).take(3).skip(0).requiresCount()).then((e: any) => {

    let treegrid: TreeGrid = new TreeGrid({
        dataSource: { result: e.result, count: e.count },
        hasChildMapping: 'IsParent',
        idMapping: 'TaskId',
        parentIdMapping: 'ParentId',
        allowPaging: true,
        allowFiltering: true,
        filterSettings: { type: 'Excel' },
        pageSettings: { pageSize: 3, pageSizeMode: 'Root' },
        dataStateChange: function (state: any) {
            if (state.action && (state.action.requestType === 'filterchoicerequest'
                || state.action.requestType ==='filtersearchbegin')) {
                data.executeQuery(new Query().skip(state.skip).take(state.take).requiresCount()).then(function (e: any) {
                    state.dataSource && state.dataSource(e);  /// resolve the excel filter dataSource
                });
            }
            else {
                /// take value must be always be equal to the pageSize value of pageSetings
                data.executeQuery(new Query().skip(state.skip).take(state.take).requiresCount()).then(function (e: any) {
                    this.dataSource = { result: e.result, count: e.count };
                });
            }
        },
        treeColumnIndex: 1,
        columns: [
            { field: 'TaskId', headerText: 'Task ID', isPrimaryKey: true, textAlign: 'Right', width: 120 },
            { field: 'TaskName', headerText: 'Task Name', width: 150 },
            { field: 'StartDate', headerText: 'Start Date', textAlign: 'Right', width: 120, format: { skeleton: 'yMd', type: 'date' } },
            { field: 'Duration', headerText: 'Duration', width: 110, textAlign: 'Right' },
            { field: 'Progress', headerText: 'Progress', width: 110 },
        ]
    });
    treegrid.appendTo('#TreeGrid');
});

```

> You can refer to our [`JavaScript Tree Grid`](https://www.syncfusion.com/javascript-ui-controls/js-tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our JavaScript Tree Grid example [`JavaScript Tree Grid example`](https://ej2.syncfusion.com/demos/#/material/tree-grid/treegrid-overview.html) to knows how to present and manipulate data.
