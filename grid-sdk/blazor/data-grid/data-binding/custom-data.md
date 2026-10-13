---
layout: post
title: Blazor Grid OnDataLoad Event | Syncfusion
description: Implement event-driven data binding in Blazor Data Grid with the OnDataLoad event for custom data retrieval.
platform: grid-sdk
control: DataGrid
documentation: ug
keywords: blazor datagrid event-driven databinding, OnDataLoad event, custom data retrieval, server-side operations
---

# Event-Driven Data Binding in Blazor Data Grid

Event-driven data binding enables the Data Grid to retrieve data through the [OnDataLoad]((https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Grids.GridEvents-1.html#Syncfusion_Blazor_Grids_GridEvents_1_OnDataLoad)) event instead of using built-in data adaptors. Each paging, sorting, filtering, searching, or grouping operation triggers the `OnDataLoad` event so the application can fetch and return data from custom services, APIs, databases, or repositories.

Event-driven data binding is ideal for the following scenarios:

- **REST API integration**: Fetch data from remote APIs with custom headers, authentication, or pagination logic.
- **Server-side operations**: Perform all filtering, sorting, and searching on the server to optimize performance with large datasets.
- **Large datasets**: Handle datasets too large to load entirely in memory by retrieving only the current page of data.
- **Repository pattern**: Implement clean architecture by centralizing data retrieval logic in dedicated repositories or services.
- **Custom business logic**: Apply authorization rules, caching strategies, data validation, or computed columns before displaying data.

**Configure OnDataLoad event properties**

The `OnDataLoad` event provides the [args.Request](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Grids.GridLoadEventArgs-1.html#Syncfusion_Blazor_Grids_GridLoadEventArgs_1_Request) object, which contains details about the current data operation. Based on the request information in `args.Request`, the event handler must process the data and populate the required response properties. The request and response properties work together to enable the Data Grid to retrieve and display the correct set of records. Understanding the purpose of these properties is essential for implementing custom data loading logic effectively.

**Request Properties**

The `args.Request` object contains the following properties that describe the current grid operation:

| Request Property | Type | Description |
|------------------|------|-------------|
| [Skip](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Grids.DataRequest.html#Syncfusion_Blazor_Grids_DataRequest_Skip) | int | The number of records to skip from the start. Used for pagination to show different pages. Default is `0`. |
| [Take](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Grids.DataRequest.html#Syncfusion_Blazor_Grids_DataRequest_Take) | int | The number of records to retrieve. Specifies how many rows to display on the current page. Default is `0`. |
| [Sort](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Grids.DataRequest.html#Syncfusion_Blazor_Grids_DataRequest_Sort) | List<SortRequest>? | The fields to sort by and the sort order for each field (ascending or descending). Null when no sorting is applied. |
| [Filter](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Grids.DataRequest.html#Syncfusion_Blazor_Grids_DataRequest_Filter) | List<FilterRequest>? | The filter conditions to apply to the data by field name, operator, and value. Null when no filters are applied. |
| [Search](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Grids.DataRequest.html#Syncfusion_Blazor_Grids_DataRequest_Search) | List<SearchRequest>? | The search keywords and the fields to search across. Null when no search is applied. |
| [Group](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Grids.DataRequest.html#Syncfusion_Blazor_Grids_DataRequest_Group) | List<string>? | The field names to group data by. Null when no grouping is applied. |
| [Aggregates](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Grids.DataRequest.html#Syncfusion_Blazor_Grids_DataRequest_Aggregates) | List<AggregateRequest>? | The aggregate calculations to perform (Sum, Average, Count, Min, Max). Null when no aggregates are requested. |
| [Select](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Grids.DataRequest.html#Syncfusion_Blazor_Grids_DataRequest_Select) | List<string>? | The specific columns to return in the results. Null to return all columns. |
| [Expand](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Grids.DataRequest.html#Syncfusion_Blazor_Grids_DataRequest_Expand) | List<string>? | Related data to include with the main records. Null when no related data is needed. |

**Response Properties**

The event uses the [GridLoadEventArgs](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Grids.GridLoadEventArgs-1.html) class, which includes the following properties that must be set by the event handler:

| Response Property | Type | Description |
|-------------------|------|-------------|
| [Result](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Grids.GridLoadEventArgs-1.html#Syncfusion_Blazor_Grids_GridLoadEventArgs_1_Result) | IEnumerable<TValue> | The records to display in the grid after applying pagination (Skip and Take). |
| [Count](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Grids.GridLoadEventArgs-1.html#Syncfusion_Blazor_Grids_GridLoadEventArgs_1_Count) | int | The total number of records that match the current filters and search, without pagination limits. |
| [AggregatesResult](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Grids.GridLoadEventArgs-1.html#Syncfusion_Blazor_Grids_GridLoadEventArgs_1_AggregatesResult) | IDictionary<string, object>? | The calculated aggregate values (like totals and averages) to display in the footer. |

---

## Handling paging operation

Paging supports large datasets by displaying one page at a time. The event handler uses `args.Request.Skip` and `args.Request.Take` to fetch only the required records for the current page from the data source. The event handler must return the page data via `args.Result` and the total record count via `args.Count` so the Data Grid can display correct page numbers and navigation controls.

{% tabs %}
{% highlight razor tabtitle="Index.razor" %}

@using Syncfusion.Blazor.Grids
@using Syncfusion.Blazor.Data

<SfGrid TValue="OrderData" AllowPaging="true">
    <GridEvents OnDataLoad="HandleDataRequest" TValue="OrderData"></GridEvents>
    <GridPageSettings PageSize="5"></GridPageSettings>
    <GridColumns>
        <GridColumn Field="@nameof(OrderData.OrderID)" HeaderText="Order ID" IsPrimaryKey="true" TextAlign="TextAlign.Right" Width="120"></GridColumn>
        <GridColumn Field="@nameof(OrderData.CustomerID)" HeaderText="Customer ID" Width="150"></GridColumn>
        <GridColumn Field="@nameof(OrderData.ShipCity)" HeaderText="Ship City" Width="150"></GridColumn>
    </GridColumns>
</SfGrid>

@code {
    private List<OrderData> GridData { get; set; } = new();

    protected override void OnInitialized()
    {
        GridData = OrderData.GetAllRecords();
    }

    private Task HandleDataRequest(GridLoadEventArgs<OrderData> args)
    {
        var result = ApplyDataOperations(GridData, args.Request.Skip, args.Request.Take);
        args.Result = result.Result;
        args.Count = result.Count;
        return Task.CompletedTask;
    }

    private static (IEnumerable<T> Result, int Count) ApplyDataOperations<T>(IEnumerable<T> source, int skip, int take)
    {
        var count = source.Count();
        source = source.Skip(skip).Take(take);
        return (source, count);
    }
}

{% endhighlight %}
{% highlight c# tabtitle="OrderData.cs" %}

public class OrderData
{
    private static readonly List<OrderData> Orders = new();

    public OrderData(int? orderId, string customerId, string shipCity)
    {
        OrderID = orderId;
        CustomerID = customerId;
        ShipCity = shipCity;
    }

    public static List<OrderData> GetAllRecords()
    {
        if (Orders.Count == 0)
        {
            Orders.AddRange(
                Enumerable.Range(1, 100)
                    .Select(index => new OrderData(
                        10248 + index,
                        new[] { "VINET", "TOMSP", "HANAR", "VICTE", "SUPRD", "CHOPS", "RICSU", "WELLI" }[index % 8],
                        new[] { "Reims", "Münster", "Rio de Janeiro", "Lyon", "Charleroi", "London", "Berlin", "Madrid" }[index % 8]
                    ))
            );
        }

        return Orders;
    }

    public int? OrderID { get; set; }
    public string CustomerID { get; set; }
    public string ShipCity { get; set; }
}

{% endhighlight %}
{% endtabs %}

{% previewsample "https://blazorplayground.syncfusion.com/embed/VXhdWDtaUPdOPInz?appbar=false&editor=false&result=true&errorlist=false&theme=fluent2" %}

---

## Handling sorting operation

Sorting organizes data by specific columns in ascending or descending order. The event handler receives sort criteria from `args.Request.Sort` and applies the sorting logic to the data source. The event handler must return the sorted records via `args.Result` and the total record count via `args.Count` to display organized data in the Data Grid.

The built-in `DataOperations` helper in the Syncfusion Blazor data layer applies sort requests provided by the Data Grid. For custom repositories or APIs, the same sort metadata must be mapped to custom query logic before returning paged data.

{% tabs %}
{% highlight razor tabtitle="Index.razor" %}

@using Syncfusion.Blazor
@using Syncfusion.Blazor.Grids
@using Syncfusion.Blazor.Data

<SfGrid TValue="OrderData" AllowSorting="true" AllowPaging="true">
    <GridEvents OnDataLoad="HandleDataRequest" TValue="OrderData"></GridEvents>
    <GridColumns>
        <GridColumn Field="@nameof(OrderData.OrderID)" HeaderText="Order ID" IsPrimaryKey="true" TextAlign="TextAlign.Right" Width="140"></GridColumn>
        <GridColumn Field="@nameof(OrderData.CustomerID)" HeaderText="Customer ID" Width="180"></GridColumn>
        <GridColumn Field="@nameof(OrderData.Freight)" HeaderText="Freight" Format="C2" Width="150"></GridColumn>
    </GridColumns>
</SfGrid>

@code {
    private List<OrderData> GridData { get; set; } = new();

    protected override void OnInitialized()
    {
        GridData = OrderData.GetAllRecords();
    }

    private Task HandleDataRequest(GridLoadEventArgs<OrderData> args)
    {
        var result = ApplyDataOperations(GridData, args.Request.Sort, args.Request.Skip, args.Request.Take);
        args.Result = result.Result;
        args.Count = result.Count;
        return Task.CompletedTask;
    }

    private static (IEnumerable<T> Result, int Count) ApplyDataOperations<T>(IEnumerable<T> source, List<SortRequest>? sorted, int skip, int take)
    {
        if (sorted != null && sorted.Count > 0)
        {
            var sortedColumns = ConvertSortRequests(sorted);
            source = DataOperations.PerformSorting(source, sortedColumns!);
        }

        var count = source.Count();
        source = source.Skip(skip).Take(take);
        return (Result: source, Count: count);
    }

    internal static List<SortedColumn>? ConvertSortRequests(List<SortRequest>? sortRequests)
    {
        if (sortRequests == null)
        {
            return null;
        }

        return sortRequests.Select(sort => new SortedColumn
        {
            Field = sort.Name,
            Direction = Enum.Parse<SortOrder>(sort.Direction!, ignoreCase: true)
        }).ToList();
    }
}

{% endhighlight %}
{% highlight c# tabtitle="OrderData.cs" %}

public class OrderData
{
    private static readonly List<OrderData> Orders = new();

    public OrderData(int orderId, string customerId, double freight)
    {
        OrderID = orderId;
        CustomerID = customerId;
        Freight = freight;
    }

    public static List<OrderData> GetAllRecords()
    {
        if (Orders.Count == 0)
        {
            string[] customers = { "VINET", "TOMSP", "HANAR", "VICTE", "SUPRD", "CHOPS", "RICSU", "WELLI" };
            double[] freightValues = { 32.38, 11.61, 65.83, 41.34, 51.30, 58.17, 22.98, 148.33, 13.97 };
            Orders.AddRange(
                Enumerable.Range(1, 100)
                    .Select(i => new OrderData(
                        10247 + i,
                        customers[(i - 1) % customers.Length],
                        freightValues[(i - 1) % freightValues.Length]
                    ))
            );
        }
        return Orders;
    }

    public int OrderID { get; set; }
    public string CustomerID { get; set; }
    public double Freight { get; set; }
}

{% endhighlight %}
{% endtabs %}

{% previewsample "https://blazorplayground.syncfusion.com/embed/VXLHitZuqkQWMmqb?appbar=false&editor=false&result=true&errorlist=false&theme=fluent2" %}

---

## Handling aggregates operation

Aggregates display summary values such as sum, average, count, minimum, or maximum in Data Grid footer rows. The event handler receives aggregate requirements from `args.Request.Aggregates` and calculates these values on the complete dataset before pagination. The event handler must return the records via `args.Result` and calculated aggregates via `args.AggregatesResult` to display summaries below the Data Grid data.

The `DataUtil.PerformAggregation` helper calculates the requested aggregate values for the full filtered dataset. In custom services, calculate aggregates before applying `Skip` and `Take`; otherwise, the footer totals will reflect only the current page instead of the entire result set.

{% tabs %}
{% highlight razor tabtitle="Index.razor" %}

@using Syncfusion.Blazor.Grids
@using Syncfusion.Blazor.Data

<SfGrid TValue="OrderData" AllowPaging="true">
    <GridEvents OnDataLoad="HandleDataRequest" TValue="OrderData"></GridEvents>
    <GridAggregates>
        <GridAggregate>
            <GridAggregateColumns>
                <GridAggregateColumn Field="@nameof(OrderData.Freight)" Type="AggregateType.Sum" Format="C2">
                    <FooterTemplate>
                        @{
                            var aggregate = context as AggregateTemplateContext;
                            <div>
                                <p>Sum: @aggregate?.Sum</p>
                            </div>
                        }
                    </FooterTemplate>
                </GridAggregateColumn>
            </GridAggregateColumns>
        </GridAggregate>
        <GridAggregate>
            <GridAggregateColumns>
                <GridAggregateColumn Field="@nameof(OrderData.Freight)" Type="AggregateType.Average" Format="C2">
                    <FooterTemplate>
                        @{
                            var aggregate = context as AggregateTemplateContext;
                            <div>
                                <p>Average: @aggregate?.Average</p>
                            </div>
                        }
                    </FooterTemplate>
                </GridAggregateColumn>
            </GridAggregateColumns>
        </GridAggregate>
    </GridAggregates>
    <GridColumns>
        <GridColumn Field="@nameof(OrderData.OrderID)" HeaderText="Order ID" IsPrimaryKey="true" TextAlign="TextAlign.Right" Width="140"></GridColumn>
        <GridColumn Field="@nameof(OrderData.CustomerID)" HeaderText="Customer ID" Width="180"></GridColumn>
        <GridColumn Field="@nameof(OrderData.Freight)" HeaderText="Freight" Format="C2" Width="150"></GridColumn>
    </GridColumns>
</SfGrid>

@code {
    private List<OrderData> GridData { get; set; } = new();

    protected override void OnInitialized()
    {
        GridData = OrderData.GetAllRecords();
    }

    private Task HandleDataRequest(GridLoadEventArgs<OrderData> args)
    {
        var result = ApplyDataOperations(GridData, args.Request.Aggregates, args.Request.Skip, args.Request.Take);
        args.Result = result.Result;
        args.Count = result.Count;
        args.AggregatesResult = result.Aggregates;
        return Task.CompletedTask;
    }

    private static (IEnumerable<T> Result, int Count, IDictionary<string, object>? Aggregates) ApplyDataOperations<T>(IEnumerable<T> source, List<AggregateRequest>? aggregates, int skip, int take)
    {
        var count = source.Count();

        if (skip != 0)
        {
            source = source.Skip(skip);
        }

        if (take != 0)
        {
            source = source.Take(take);
        }

        IDictionary<string, object>? aggregateResult = null;

        if (aggregates != null && aggregates.Count > 0)
        {
            var aggregateList = ConvertAggregateRequests(aggregates);
            aggregateResult = DataUtil.PerformAggregation(source, aggregateList);
        }

        return (source, count, aggregateResult);
    }

    internal static List<Aggregate>? ConvertAggregateRequests(List<AggregateRequest>? aggregateRequests)
    {
        if (aggregateRequests == null)
        {
            return null;
        }

        return aggregateRequests.Select(aggregate => new Aggregate
        {
            Field = aggregate.Field,
            Type = aggregate.Type
        }).ToList();
    }
}

{% endhighlight %}
{% highlight c# tabtitle="OrderData.cs" %}

public class OrderData
{
    private static readonly List<OrderData> Orders = new();

    public OrderData(int orderId, string customerId, double freight)
    {
        OrderID = orderId;
        CustomerID = customerId;
        Freight = freight;
    }

    public static List<OrderData> GetAllRecords()
    {
        if (Orders.Count == 0)
        {
            string[] customers = { "VINET", "TOMSP", "HANAR", "VICTE", "SUPRD", "CHOPS", "RICSU", "WELLI" };

            Orders.AddRange(
                Enumerable.Range(1, 100).Select(index => new OrderData(
                    1000 + index,
                    customers[index % customers.Length],
                    Math.Round(10 + (index * 1.25), 2)
                ))
            );
        }

        return Orders;
    }

    public int OrderID { get; set; }
    public string CustomerID { get; set; }
    public double Freight { get; set; }
}

{% endhighlight %}
{% endtabs %}

{% previewsample "https://blazorplayground.syncfusion.com/embed/hDVHCDDafvCtcRzL?appbar=false&editor=false&result=true&errorlist=false&theme=fluent2" %}

---

## Handling filtering operation

Filtering displays only records that match specified criteria. The event handler receives filter definitions from `args.Request.Filter` and applies the filtering logic to the data source. The event handler must return the filtered records via `args.Result` and the total matching record count via `args.Count` to display only relevant data.

**Filter request structure**

When filtering is applied to the Data Grid, the `args.Request.Filter` property contains a list of `FilterRequest` objects. Each `FilterRequest` object specifies the field to filter, the operator (equals, contains, greater than, etc.), the filter value, and additional options like case-sensitivity and accent handling. The following debugger snapshot shows the request payload generated by the Data Grid when filters are applied:

![Filter property displaying FilterRequest objects with Field, Operator, Value, Condition, IgnoreCase, and IgnoreAccent properties](../images/blazor-datagrid-custom-data-filtering.webp)

Map each `FilterRequest` in the custom implementation to a database or API query, then return the filtered records through `args.Result` and the total filtered record count through `args.Count`.

---

## Handling grouping operation

Grouping organizes data into logical categories based on column values. The event handler receives grouping information from `args.Request.Group` and applies grouping logic to the data source. The event handler must return grouped records via `args.Result` with calculated summaries and the total record count via `args.Count` to display organized, categorized data in the Data Grid.

**Group request structure**

When grouping is applied to the Data Grid, the `args.Request.Group` property contains a list of field names that define the grouping hierarchy. For example, grouping by "Category" and then "Status" creates nested groups. The following debugger snapshot shows the group field list generated by the Data Grid:

![Group property displaying the list of field names to group by](../images/blazor-datagrid-custom-data-grouping.webp)

The implementation must create the group hierarchy in the service layer or repository, then return the grouped records through `args.Result` and the total record count through `args.Count`.

---

## Handling searching operation

Searching locates records by matching entered keywords across multiple columns. The event handler receives search criteria from `args.Request.Search` and applies the search logic to the data source. The event handler must return the matching records via `args.Result` and the total matching count via `args.Count` to display search results in the Data Grid.

**Search request structure**

When a search is performed in the Data Grid, the `args.Request.Search` property contains a list of `SearchRequest` objects. Each `SearchRequest` object specifies which fields to search within, the search keyword, the search operator (contains, starts with, ends with, etc.), and options for case-sensitivity and accent handling. The following debugger snapshot shows the request payload generated during a search:

![Search property displaying SearchRequest objects with search text, fields, operator, search options](../images/blazor-datagrid-custom-data-searching.webp)

Map each `SearchRequest` to the corresponding backend query logic, then return the matching records through `args.Result` and the total matching record count through `args.Count`.

---

## Handling CRUD operation

Event-driven data binding requires explicit handling of changes. The Data Grid notifies the application through dedicated events such as `RowUpdating` and `RowDeleting` when records are added, edited, or deleted. These events provide a reliable mechanism to capture and respond to data modifications, allowing the application to validate changes, apply business logic, maintain data integrity, and save modifications to the data source.

**CRUD Events and Properties**

| Event | Event Args | Key Properties | Description |
|-------|-----------|-----------------|-------------|
| `RowUpdating` | `RowUpdatingEventArgs<T>` | `Data` - The updated record; `Action` - Indicates if the operation is `Edited` (update) or `Added` (insert); `Index` - Row index in the Data Grid | The `RowUpdating` event fires when an existing row is edited or a new row is added. The handler should check `args.Action` to distinguish between edit and add operations. The handler must update the corresponding record in the data source or insert a new record. |
| `RowDeleting` | `RowDeletingEventArgs<T>` | Data's - Collection of records to be deleted; `Index` - Row index in the Data Grid | The `RowDeleting` event fires when one or more rows are deleted. The handler must extract the record(s) from `args.Datas` and remove the records from the data source. |
| `OnBatchSave` | `BeforeBatchSaveArgs<T>` | `BatchChanges` - Contains three collections: `AddedRecords` (new rows), `ChangedRecords` (edited rows), and `DeletedRecords` (deleted rows) | The `OnBatchSave` event fires when multiple changes are saved at once in batch edit mode. The handler should process all additions, updates, and deletions together in a single transaction for better performance and data consistency. |

{% tabs %}
{% highlight razor tabtitle="Index.razor" %}

@using Syncfusion.Blazor.Grids
@using Syncfusion.Blazor.Data

<SfGrid TValue="SupportTicket" AllowPaging="true" Toolbar="@(new List<string>() { "Add", "Edit", "Delete", "Update", "Cancel" })">
    <GridEvents TValue="SupportTicket" OnDataLoad="HandleDataRequest" RowUpdating="UpdateHandler" RowDeleting="DeleteHandler"></GridEvents>
    <GridEditSettings AllowEditing="true" AllowDeleting="true" AllowAdding="true" Mode="@EditMode.Normal"></GridEditSettings>
    <GridPageSettings PageSize="12"></GridPageSettings>
    <GridColumns>
        <GridColumn Field="@nameof(SupportTicket.TicketId)" HeaderText="Ticket ID" IsPrimaryKey="true" ValidationRules="@(new ValidationRules { Required = true, Number = true })" TextAlign="TextAlign.Right" Width="120"></GridColumn>
        <GridColumn Field="@nameof(SupportTicket.CustomerName)" HeaderText="Customer" ValidationRules="@(new ValidationRules { Required = true })" Width="180"></GridColumn>
        <GridColumn Field="@nameof(SupportTicket.Product)" HeaderText="Product" ValidationRules="@(new ValidationRules { Required = true })" Width="180"></GridColumn>
        <GridColumn Field="@nameof(SupportTicket.Priority)" HeaderText="Priority" Width="120"></GridColumn>
        <GridColumn Field="@nameof(SupportTicket.Status)" HeaderText="Status" Width="140"></GridColumn>
        <GridColumn Field="@nameof(SupportTicket.CreatedOn)" HeaderText="Created On" Type="ColumnType.Date" Format="d" Width="140"></GridColumn>
    </GridColumns>
</SfGrid>

@code {
    private List<SupportTicket> GridData { get; set; } = new();

    protected override void OnInitialized()
    {
        GridData = SupportTicket.GetAllRecords();
    }

    private Task HandleDataRequest(GridLoadEventArgs<SupportTicket> args)
    {
        var result = ApplyDataOperations(GridData, args.Request.Skip, args.Request.Take);
        args.Result = result.Result;
        args.Count = result.Count;
        return Task.CompletedTask;
    }

    private void UpdateHandler(RowUpdatingEventArgs<SupportTicket> args)
    {
        if (args.Action == SaveActionType.Edited)
        {
            var record = GridData.FirstOrDefault(x => x.TicketId == args.Data.TicketId);
            if (record != null)
            {
                record.CustomerName = args.Data.CustomerName;
                record.Product = args.Data.Product;
                record.Priority = args.Data.Priority;
                record.Status = args.Data.Status;
                record.CreatedOn = args.Data.CreatedOn;
            }
        }
        else
        {
            GridData.Insert(args.Index, args.Data);
        }
    }

    private void DeleteHandler(RowDeletingEventArgs<SupportTicket> args)
    {
        var ticketId = ((SupportTicket)args.Datas[0]).TicketId;
        var record = GridData.FirstOrDefault(x => x.TicketId == ticketId);
        if (record != null)
        {
            GridData.Remove(record);
        }
    }

    private static (IEnumerable<T> Result, int Count) ApplyDataOperations<T>(IEnumerable<T> source, int skip, int take)
    {
        var count = source.Count();
        source = source.Skip(skip).Take(take);
        return (source, count);
    }
}

{% endhighlight %}
{% highlight c# tabtitle="SupportTicket.cs" %}

public class SupportTicket
{
    private static readonly List<SupportTicket> Tickets = new();
    public static List<SupportTicket> GetAllRecords()
    {
        if (Tickets.Count == 0)
        {
            Tickets.AddRange(
                Enumerable.Range(1, 100)
                    .Select(index => new SupportTicket
                    {
                        TicketId = 5000 + index,
                        CustomerName = new[] { "Margaret Peacock", "Steven Buchanan", "Alexander Feuer", "Patricia McKenna", "Renate Messner", "Maria Anders", "Thomas Hardy", "Elizabeth Brown" }[index % 8],
                        Product = new[] { "Analytics Dashboard", "Workflow Engine", "Reporting Service", "Document Manager", "Data Connector" }[index % 5],
                        Priority = new[] { "Low", "Medium", "High", "Critical" }[index % 4],
                        Status = new[] { "Open", "In Progress", "Resolved", "Escalated", "Closed" }[index % 5],
                        CreatedOn = new DateTime(2024, 1, 1).AddDays(index % 90)
                    }));
        }

        return Tickets;
    }

    public int TicketId { get; set; }
    public string CustomerName { get; set; } = string.Empty;
    public string Product { get; set; } = string.Empty;
    public string Priority { get; set; } = string.Empty;
    public string Status { get; set; } = string.Empty;
    public DateTime CreatedOn { get; set; }
}

{% endhighlight %}
{% endtabs %}

{% previewsample "https://blazorplayground.syncfusion.com/embed/LXrHWjDuJZfvHYGl?appbar=false&editor=false&result=true&errorlist=false&theme=fluent2" %}

## Handling batch operations

The `OnBatchSave` operation handles multiple changes at once:

- When multiple rows are added, edited, and deleted before save, the Data Grid bundles all changes into a single request. The application receives three groups: records to add, records to update, and records to delete. Batch operations save all changes together in one database transaction or API call, which is more efficient than handling each change individually.

{% tabs %}
{% highlight razor tabtitle="Index.razor" %}

@using Syncfusion.Blazor.Grids

<SfGrid TValue="OrderData" Toolbar="@(new List<string>() { "Add", "Edit", "Delete", "Update", "Cancel" })" AllowPaging="true">
    <GridEvents OnDataLoad="HandleDataRequest" OnBatchSave="BatchSaveHandler" TValue="OrderData"></GridEvents>
    <GridEditSettings AllowEditing="true" AllowDeleting="true" AllowAdding="true" Mode="@EditMode.Batch"></GridEditSettings>
    <GridColumns>
        <GridColumn Field="@nameof(OrderData.OrderID)" HeaderText="Order ID" IsPrimaryKey="true" ValidationRules="@(new ValidationRules { Required = true, Number = true })" TextAlign="TextAlign.Right" Width="140"></GridColumn>
        <GridColumn Field="@nameof(OrderData.CustomerID)" HeaderText="Customer ID" ValidationRules="@(new ValidationRules { Required = true })" Width="180"></GridColumn>
        <GridColumn Field="@nameof(OrderData.Freight)" HeaderText="Freight" Format="C2" Width="150"></GridColumn>
    </GridColumns>
</SfGrid>

@code {
    private List<OrderData> GridData { get; set; } = new();

    protected override void OnInitialized()
    {
        GridData = OrderData.GetAllRecords();
    }

    private Task HandleDataRequest(GridLoadEventArgs<OrderData> args)
    {
        var result = ApplyDataOperations(GridData, args.Request.Skip, args.Request.Take);
        args.Result = result.Result;
        args.Count = result.Count;
        return Task.CompletedTask;
    }

    private Task BatchSaveHandler(BeforeBatchSaveArgs<OrderData> args)
    {
        var batchChanges = args.BatchChanges;

        if (batchChanges.ChangedRecords != null)
        {
            foreach (var record in batchChanges.ChangedRecords)
            {
                var data = GridData.FirstOrDefault(x => x.OrderID == record.OrderID);

                if (data != null)
                {
                    data.CustomerID = record.CustomerID;
                    data.Freight = record.Freight;
                }
            }
        }

        if (batchChanges.AddedRecords != null)
        {
            foreach (var record in batchChanges.AddedRecords)
            {
                GridData.Insert(0, record);
            }
        }

        if (batchChanges.DeletedRecords != null)
        {
            foreach (var record in batchChanges.DeletedRecords)
            {
                GridData.RemoveAll(x => x.OrderID == record.OrderID);
            }
        }

        return Task.CompletedTask;
    }

    private static (IEnumerable<T> Result, int Count) ApplyDataOperations<T>(IEnumerable<T> source, int skip, int take)
    {
        var count = source.Count();
        source = source.Skip(skip).Take(take);
        return (source, count);
    }
}

{% endhighlight %}
{% highlight c# tabtitle="OrderData.cs" %}

public class OrderData
{
    private static readonly List<OrderData> Orders = new();
    public int OrderID { get; set; }
    public string CustomerID { get; set; } = string.Empty;
    public double Freight { get; set; }

    public static List<OrderData> GetAllRecords()
    {
        if (Orders.Count == 0)
        {
            Orders.AddRange(
                Enumerable.Range(1, 100).Select(index => new OrderData
                {
                    OrderID = 1000 + index,
                    CustomerID = new[] { "ALFKI", "ANANTR", "ANTON", "BLONP", "BOLID" }[index % 5],
                    Freight = 2.1 * index
                }));
        }

        return Orders;
    }
}

{% endhighlight %}
{% endtabs %}

{% previewsample "https://blazorplayground.syncfusion.com/embed/VjhniNjaJZPCJznO?appbar=false&editor=false&result=true&errorlist=false&theme=fluent2" %}

---

## Troubleshooting

| Issue | Likely cause | Resolution |
|---|---|---|
| Data Grid shows no data. | The `OnDataLoad` event handler is not configured. | Attach the handler to `<GridEvents OnDataLoad="HandlerMethod">` in the component. |
| Data Grid shows no data. | `args.Result` is not assigned or is empty. | Populate `args.Result` with the records to display in the Data Grid. |
| Pagination controls are disabled or show incorrect page count. | `args.Count` is set to the current page size instead of the total matching record count. | Assign `args.Count` to the full number of records that match the current filter and search state, not just the page size. |
| Filtered results are incomplete or missing. | Filter logic is not applied before assigning `args.Result`. | Apply the conditions from `args.Request.Filter` to the data source before returning records in `args.Result`. |
| Searched results are incomplete or missing. | Search logic is not applied before assigning `args.Result`. | Apply the conditions from `args.Request.Search` to the data source before returning records in `args.Result`. |
| Aggregate values (sum, average) do not appear in footer rows. | `args.AggregatesResult` is not populated. | Calculate the aggregate values and assign the values to `args.AggregatesResult`. |
| Aggregate values are incorrect after pagination. | Aggregate calculations are performed after `Skip` and `Take`. | Compute the aggregate values before pagination so the totals reflect the full filtered dataset. |
| Grouped data appears ungrouped. | Grouping logic is not applied to the records. | Apply the field names from `args.Request.Group` to create the group hierarchy before returning results. |
| Grouped data shows duplicate groups. | Group records are not organized according to the requested hierarchy. | Ensure each record belongs to one group path and maintain the full grouping hierarchy when returning `args.Result`. |

## See also

* [Grid Events](https://help.syncfusion.com/grid-sdk/blazor/data-grid/events)
* [Custom Adaptor](https://help.syncfusion.com/grid-sdk/blazor/data-grid/connecting-to-adaptors/custom-adaptor)
* [Local Data Binding](https://help.syncfusion.com/grid-sdk/blazor/data-grid/data-binding/local-data)
* [Remote Data Binding](https://help.syncfusion.com/grid-sdk/blazor/data-grid/data-binding/remote-data)
