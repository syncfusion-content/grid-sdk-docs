---
layout: post
title: Blazor Grid One-to-Many Relationships | Syncfusion
description: Learn how to display one-to-many relationships in Blazor Data Grid using flattened data and detail templates approaches.
platform: grid-sdk
control: DataGrid
documentation: ug
keywords: blazor datagrid one-to-many, blazor grid parent child, flattened data binding, blazor grid collection binding, one-to-many relationships
---

# One-to-Many Relationships in Blazor DataGrid

In Blazor Data Grid, displaying one-to-many relationships requires special handling. Most real-world applications contain parent records with multiple associated child records. A typical example is an Order containing multiple OrderTransactions. Data Grid provides multiple approaches to handle one-to-many relationships, with flattening being one of the most effective techniques.

## Approaches to Handle One-to-Many Relationships

The following approaches support one-to-many relationships in Data Grid:

- **Flattened Data**: Aggregates child data into scalar properties on the parent record. All Data Grid operations work on flattened properties.
- **Detail Templates**: Displays child records in an expandable detail row for each parent record.

**Flattened Data Approach**

Flattened data enables display and manipulation of aggregated child data in the parent row. Operations such as paging, filtering, sorting, searching, grouping, and editing work directly on flattened properties rather than the original collection.

**Why use flattening?**

An Order model with a Transactions collection demonstrates the challenge:

```csharp
public class Order
{
    public int OrderId { get; set; }

    public string CustomerName { get; set; } = string.Empty;

    public ICollection<OrderTransaction> Transactions { get; set; } = new List<OrderTransaction>();
}

public class OrderTransaction
{
    public int TransactionId { get; set; }

    public DateTime TransactionDate { get; set; }

    public double Amount { get; set; }

    public string Description { get; set; } = string.Empty;
}
```

Each order contains multiple transactions:

| Transaction ID | Description | Amount | Date |
| --- | --- | --- | --- |
| 1 | Laptop Purchase | 1200.50 | 01/10/2026 |
| 2 | Software License | 300.75 | 02/05/2026 |
| 3 | Support Contract | 450.00 | 03/15/2026 |

Data Grid cells can display only a single value per cell. Collection properties cannot be directly bound to Data Grid columns. To solve this limitation, flatten collections into scalar properties at the parent level:

```csharp
public int TransactionCount { get; set; }

public double TotalAmount { get; set; }

public DateTime LatestTransactionDate { get; set; }

public string TransactionSummary { get; set; } = string.Empty;
```

These flattened properties aggregate child data and participate in all Data Grid operations.

## Data operations with flattened properties

After flattening, aggregated fields behave like standard Data Grid columns. [AllowPaging](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Grids.SfGrid-1.html#Syncfusion_Blazor_Grids_SfGrid_1_AllowPaging), [AllowFiltering](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Grids.SfGrid-1.html#Syncfusion_Blazor_Grids_SfGrid_1_AllowFiltering), [AllowSorting](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Grids.SfGrid-1.html#Syncfusion_Blazor_Grids_SfGrid_1_AllowSorting), [AllowGrouping](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Grids.SfGrid-1.html#Syncfusion_Blazor_Grids_SfGrid_1_AllowGrouping), and searching operate on flattened fields instead of the original collection.

{% tabs %}
{% highlight razor tabtitle="Index.razor" %}
@using Syncfusion.Blazor.Grids

<SfGrid DataSource="@OrderDTOs"
        TValue="OrderDto"
        AllowPaging="true"
        AllowFiltering="true"
        AllowSorting="true"
        AllowGrouping="true"
        Toolbar="@(new List<string> { "Search" })">

    <GridPageSettings PageSize="5"></GridPageSettings>

    <GridSearchSettings Fields="@(new[]
    {
        nameof(OrderDto.CustomerName),
        nameof(OrderDto.TransactionSummary)
    })">
    </GridSearchSettings>

    <GridColumns>

        <GridColumn Field="@nameof(OrderDto.OrderId)"
                    HeaderText="Order ID"
                    IsPrimaryKey="true"
                    Width="120">
        </GridColumn>

        <GridColumn Field="@nameof(OrderDto.CustomerName)"
                    HeaderText="Customer Name"
                    Width="180">
        </GridColumn>

        <GridColumn Field="@nameof(OrderDto.TransactionCount)"
                    HeaderText="Transaction Count"
                    Width="150"
                    AllowAdding="false"
                    AllowEditing="false">
        </GridColumn>

        <GridColumn Field="@nameof(OrderDto.TotalAmount)"
                    HeaderText="Total Amount"
                    Format="C2"
                    Width="150"
                    AllowAdding="false"
                    AllowEditing="false">
        </GridColumn>

        <GridColumn Field="@nameof(OrderDto.LatestTransactionDate)"
                    HeaderText="Latest Transaction"
                    Type="ColumnType.Date"
                    Format="d"
                    Width="170"
                    AllowAdding="false"
                    AllowEditing="false">
        </GridColumn>

        <GridColumn Field="@nameof(OrderDto.TransactionSummary)"
                    HeaderText="Transaction Summary"
                    Width="350"
                    AllowAdding="false"
                    AllowEditing="false">
        </GridColumn>

    </GridColumns>

</SfGrid>

@code {

    public List<OrderDto> OrderDTOs { get; set; } = new();
    public List<Order> Orders { get; set; } = new();

    protected override void OnInitialized()
    {
        Orders = Order.GenerateOrders();
        OrderDTOs = Orders.Select(OrderDto.GenerateOrderDto).ToList();
    }
}
{% endhighlight %}
{% highlight c# tabtitle="OrderDto.cs" %}
public class OrderDto
{
    public int OrderId { get; set; }

    public string CustomerName { get; set; } = string.Empty;

    public int TransactionCount { get; set; }

    public double TotalAmount { get; set; }

    public DateTime LatestTransactionDate { get; set; }

    public string TransactionSummary { get; set; } = string.Empty;

    public static OrderDto GenerateOrderDto(Order order)
    {
        return new OrderDto
        {
            OrderId = order.OrderId,
            CustomerName = order.CustomerName,
            TransactionCount = order.Transactions.Count,
            TotalAmount = order.Transactions.Sum(x => x.Amount),
            LatestTransactionDate = order.Transactions.Any() ? order.Transactions.Max(x => x.TransactionDate) : DateTime.MinValue,
            TransactionSummary = string.Join(" | ", order.Transactions.Select(x => $"{x.TransactionId} - {x.Description}"))
        };
    }
}
{% endhighlight %}
{% highlight c# tabtitle="Order.cs" %}
public class Order
{
    public int OrderId { get; set; }

    public string CustomerName { get; set; } = string.Empty;

    public ICollection<OrderTransaction> Transactions { get; set; } = new List<OrderTransaction>();

    public static List<Order> GenerateOrders()
    {
        var orders = new List<Order>();

        for (int i = 1; i <= 20; i++)
        {
            var order = new Order
            {
                OrderId = i,
                CustomerName = $"Customer {i}",
                Transactions =
                {
                    new OrderTransaction
                    {
                        TransactionId = i * 10 + 1,
                        Amount = 500 + i * 25,
                        TransactionDate = DateTime.Today.AddDays(-i),
                        Description = "Laptop Purchase"
                    },
                    new OrderTransaction
                    {
                        TransactionId = i * 10 + 2,
                        Amount = 250 + i * 10,
                        TransactionDate = DateTime.Today.AddDays(-i + 1),
                        Description = "Software License"
                    }
                }
            };

            orders.Add(order);
        }

        return orders;
    }
}
{% endhighlight %}
{% highlight c# tabtitle="OrderTransaction.cs" %}
public class OrderTransaction
{
    public int TransactionId { get; set; }

    public DateTime TransactionDate { get; set; }

    public double Amount { get; set; }

    public string Description { get; set; } = string.Empty;
}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://blazorplayground.syncfusion.com/embed/rDrditsrAGCmSCXQ?appbar=false&editor=false&result=true&errorlist=false&theme=fluent2" %}

## CRUD operations with flattened data

Flattened properties function as computed values derived from child collections. When records are added, edited, or deleted, the domain model must be updated first, then flattened values must be regenerated. Using a Data Transfer Object (DTO) pattern maintains clean separation between domain and presentation layers.

### Using DTO pattern

The DTO pattern provides several advantages:

- **Separation of Concerns**: Domain models contain business logic; DTOs contain UI representation.
- **Computed Field Protection**: DTO columns can be marked [`AllowAdding="false"`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Grids.GridColumn.html#Syncfusion_Blazor_Grids_GridColumn_AllowAdding) and [`AllowEditing="false"`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Grids.GridColumn.html#Syncfusion_Blazor_Grids_GridColumn_AllowEditing) to prevent direct editing.
- **Transformation Logic**: A centralized `GenerateOrderDto()` method ensures consistent flattening across all operations.
- **Type Safety**: Strongly typed properties prevent accidental modifications to computed fields.

**DTO transformation**

The `GenerateOrderDto()` method transforms a domain Order into a UI-ready OrderDto. The method calculates all flattened properties from the child collection. After any modification to the domain Order, `GenerateOrderDto()` regenerates the DTO with updated flattened values.

```csharp
private static OrderDto GenerateOrderDto(Order order)
{
    return new OrderDto
    {
        OrderId = order.OrderId,
        CustomerName = order.CustomerName,
        TransactionCount = order.Transactions.Count,
        TotalAmount = order.Transactions.Sum(x => x.Amount),
        LatestTransactionDate = order.Transactions.Max(x => x.TransactionDate),
        TransactionSummary = string.Join(" | ", order.Transactions.Select(x => $"{x.TransactionId} - {x.Description}"))
    };
}
```

### Normal editing

Normal editing allows adding, editing, and deleting one record at a time. [RowUpdating](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Grids.GridEvents-1.html#Syncfusion_Blazor_Grids_GridEvents_1_RowUpdating) and [RowDeleted](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Grids.GridEvents-1.html#Syncfusion_Blazor_Grids_GridEvents_1_RowDeleted) events intercept normal editing operations. The event handlers manage the Transactions collection directly and regenerate flattened DTO values after each modification to keep aggregated fields synchronized with the underlying child collection.

{% tabs %}
{% highlight razor tabtitle="Index.razor" %}
@using Syncfusion.Blazor.Grids

@page "/one-to-many-normal-crud"

<SfGrid DataSource="@OrderDTOs"
        AllowPaging="true"
        TValue="OrderDto"
        Toolbar="@(new List<string> { "Add", "Edit", "Delete", "Update", "Cancel" })">

    <GridEditSettings AllowAdding="true"
                      AllowEditing="true"
                      AllowDeleting="true"
                      Mode="EditMode.Normal">
    </GridEditSettings>

    <GridEvents TValue="OrderDto"
                RowUpdating="RowUpdatingHandler"
                RowDeleted="RowDeletedHandler">
    </GridEvents>

    <GridColumns>

        <GridColumn Field="@nameof(OrderDto.OrderId)"
                    HeaderText="Order ID"
                    IsPrimaryKey="true"
                    Width="120">
        </GridColumn>

        <GridColumn Field="@nameof(OrderDto.CustomerName)"
                    HeaderText="Customer Name"
                    Width="180">
        </GridColumn>

        <GridColumn Field="@nameof(OrderDto.TransactionCount)"
                    HeaderText="Transaction Count"
                    Width="150"
                    AllowAdding="false"
                    AllowEditing="false">
        </GridColumn>

        <GridColumn Field="@nameof(OrderDto.TotalAmount)"
                    HeaderText="Total Amount"
                    Format="C2"
                    Width="150"
                    AllowAdding="false"
                    AllowEditing="false">
        </GridColumn>

        <GridColumn Field="@nameof(OrderDto.TransactionSummary)"
                    HeaderText="Transaction Summary"
                    Width="350"
                    AllowAdding="false"
                    AllowEditing="false">
        </GridColumn>

    </GridColumns>

</SfGrid>

@code {
    public List<OrderDto> OrderDTOs { get; set; } = new();
    public List<Order> Orders { get; set; } = new();

    protected override void OnInitialized()
    {
        Orders = Order.GenerateOrders();
        OrderDTOs = Orders.Select(OrderDto.GenerateOrderDto).ToList();
    }

    private void RowUpdatingHandler(RowUpdatingEventArgs<OrderDto> args)
    {
        var orderDto = args.Data;
        var originalOrder = new Order();

        if (args.Action == SaveActionType.Edited)
        {
            originalOrder = Orders.FirstOrDefault(x => x.OrderId == orderDto.OrderId);
        }
        else if (args.Action == SaveActionType.Added)
        {
            originalOrder = new Order
            {
                OrderId = orderDto.OrderId,
                CustomerName = orderDto.CustomerName,
                Transactions = new List<OrderTransaction>()
            };
            Orders.Add(originalOrder);
        }

        if (originalOrder != null)
        {
            originalOrder.OrderId = orderDto.OrderId;
            originalOrder.CustomerName = orderDto.CustomerName;
            originalOrder.Transactions.Add(
                new OrderTransaction
                {
                    TransactionId = originalOrder.Transactions.Any() ? originalOrder.Transactions.Max(x => x.TransactionId) + 1 : 1,
                    Amount = 250,
                    TransactionDate = DateTime.Today,
                    Description = "Annual Support"
                });

            var updatedOrderDto = OrderDto.GenerateOrderDto(originalOrder);
            orderDto.TransactionCount = updatedOrderDto.TransactionCount;
            orderDto.TotalAmount = updatedOrderDto.TotalAmount;
            orderDto.LatestTransactionDate = updatedOrderDto.LatestTransactionDate;
            orderDto.TransactionSummary = updatedOrderDto.TransactionSummary;
        }
    }

    private void RowDeletedHandler(RowDeletedEventArgs<OrderDto> args)
    {
        foreach (var orderDto in args.Datas)
        {
            var originalOrder = Orders.FirstOrDefault(x => x.OrderId == orderDto.OrderId);
            if (originalOrder != null)
            {
                Orders.Remove(originalOrder);
            }
        }
    }
}
{% endhighlight %}
{% highlight c# tabtitle="OrderDto.cs" %}
public class OrderDto
{
    public int OrderId { get; set; }

    public string CustomerName { get; set; } = string.Empty;

    public int TransactionCount { get; set; }

    public double TotalAmount { get; set; }

    public DateTime LatestTransactionDate { get; set; }

    public string TransactionSummary { get; set; } = string.Empty;

    public static OrderDto GenerateOrderDto(Order order)
    {
        return new OrderDto
        {
            OrderId = order.OrderId,
            CustomerName = order.CustomerName,
            TransactionCount = order.Transactions.Count,
            TotalAmount = order.Transactions.Sum(x => x.Amount),
            LatestTransactionDate = order.Transactions.Any() ? order.Transactions.Max(x => x.TransactionDate) : DateTime.MinValue,
            TransactionSummary = string.Join(" | ", order.Transactions.Select(x => $"{x.TransactionId} - {x.Description}"))
        };
    }
}
{% endhighlight %}
{% highlight c# tabtitle="Order.cs" %}
public class Order
{
    public int OrderId { get; set; }

    public string CustomerName { get; set; } = string.Empty;

    public ICollection<OrderTransaction> Transactions { get; set; } = new List<OrderTransaction>();

    public static List<Order> GenerateOrders()
    {
        var orders = new List<Order>();

        for (int i = 1; i <= 20; i++)
        {
            var order = new Order
            {
                OrderId = i,
                CustomerName = $"Customer {i}",
                Transactions =
                {
                    new OrderTransaction
                    {
                        TransactionId = i * 10 + 1,
                        Amount = 500 + i * 25,
                        TransactionDate = DateTime.Today.AddDays(-i),
                        Description = "Laptop Purchase"
                    },
                    new OrderTransaction
                    {
                        TransactionId = i * 10 + 2,
                        Amount = 250 + i * 10,
                        TransactionDate = DateTime.Today.AddDays(-i + 1),
                        Description = "Software License"
                    }
                }
            };

            orders.Add(order);
        }

        return orders;
    }
}
{% endhighlight %}
{% highlight c# tabtitle="OrderTransaction.cs" %}
public class OrderTransaction
{
    public int TransactionId { get; set; }

    public DateTime TransactionDate { get; set; }

    public double Amount { get; set; }

    public string Description { get; set; } = string.Empty;
}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://blazorplayground.syncfusion.com/embed/hDrRiNiBqcIVrEFz?appbar=false&editor=false&result=true&errorlist=false&theme=fluent2" %}

### Batch editing

Batch editing allows multiple changes before saving all at once. [OnBatchSave](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Grids.GridEvents-1.html#Syncfusion_Blazor_Grids_GridEvents_1_OnBatchSave) event processes added, edited, and deleted records in separate collections. The event handler manages Transactions collection modifications for each record type (added, changed, deleted) and regenerates flattened values to maintain data consistency across the batch.

{% tabs %}
{% highlight razor tabtitle="Index.razor" %}
@using Syncfusion.Blazor.Grids

<SfGrid DataSource="@OrderDTOs"
        AllowPaging="true"
        TValue="OrderDto"
        Height="400"
        Toolbar="@(new List<string> { "Add", "Edit", "Delete", "Update", "Cancel" })">

    <GridEditSettings AllowAdding="true"
                      AllowEditing="true"
                      AllowDeleting="true"
                      Mode="EditMode.Batch">
    </GridEditSettings>

    <GridEvents TValue="OrderDto"
                OnBatchSave="BatchSaveHandler">
    </GridEvents>

    <GridColumns>

        <GridColumn Field="@nameof(OrderDto.OrderId)"
                    HeaderText="Order ID"
                    IsPrimaryKey="true"
                    Width="120">
        </GridColumn>

        <GridColumn Field="@nameof(OrderDto.CustomerName)"
                    HeaderText="Customer Name"
                    Width="180">
        </GridColumn>

        <GridColumn Field="@nameof(OrderDto.TransactionCount)"
                    HeaderText="Transaction Count"
                    Width="150"
                    AllowAdding="false"
                    AllowEditing="false">
        </GridColumn>

        <GridColumn Field="@nameof(OrderDto.TotalAmount)"
                    HeaderText="Total Amount"
                    Format="C2"
                    Width="150"
                    AllowAdding="false"
                    AllowEditing="false">
        </GridColumn>

        <GridColumn Field="@nameof(OrderDto.TransactionSummary)"
                    HeaderText="Transaction Summary"
                    Width="350"
                    AllowAdding="false"
                    AllowEditing="false">
        </GridColumn>

    </GridColumns>

</SfGrid>

@code {
    public List<OrderDto> OrderDTOs { get; set; } = new();
    public List<Order> Orders { get; set; } = new();

    protected override void OnInitialized()
    {
        Orders = Order.GenerateOrders();
        OrderDTOs = Orders.Select(OrderDto.GenerateOrderDto).ToList();
    }

    private void BatchSaveHandler(BeforeBatchSaveArgs<OrderDto> args)
    {
        foreach (var orderDto in args.BatchChanges.ChangedRecords)
        {
            var originalOrder = Orders.FirstOrDefault(x => x.OrderId == orderDto.OrderId);
            if (originalOrder != null)
            {
                originalOrder.OrderId = orderDto.OrderId;
                originalOrder.CustomerName = orderDto.CustomerName;
                originalOrder.Transactions.Add(
                    new OrderTransaction
                    {
                        TransactionId = originalOrder.Transactions.Any() ? originalOrder.Transactions.Max(x => x.TransactionId) + 1 : 1,
                        Amount = 100,
                        TransactionDate = DateTime.Today,
                        Description = "Batch Updated Transaction"
                    });

                var updatedOrderDto = OrderDto.GenerateOrderDto(originalOrder);
                orderDto.TransactionCount = updatedOrderDto.TransactionCount;
                orderDto.TotalAmount = updatedOrderDto.TotalAmount;
                orderDto.LatestTransactionDate = updatedOrderDto.LatestTransactionDate;
                orderDto.TransactionSummary = updatedOrderDto.TransactionSummary;
            }
        }

        foreach (var orderDto in args.BatchChanges.AddedRecords)
        {
            var originalOrder = new Order
            {
                OrderId = orderDto.OrderId,
                CustomerName = orderDto.CustomerName,
                Transactions = new List<OrderTransaction>()
            };

            originalOrder.Transactions.Add(
                new OrderTransaction
                {
                    TransactionId = 1,
                    Amount = 500,
                    TransactionDate = DateTime.Today,
                    Description = "Initial Transaction"
                });

            Orders.Add(originalOrder);

            var updatedOrderDto = OrderDto.GenerateOrderDto(originalOrder);
            orderDto.TransactionCount = updatedOrderDto.TransactionCount;
            orderDto.TotalAmount = updatedOrderDto.TotalAmount;
            orderDto.LatestTransactionDate = updatedOrderDto.LatestTransactionDate;
            orderDto.TransactionSummary = updatedOrderDto.TransactionSummary;
        }

        foreach (var orderDto in args.BatchChanges.DeletedRecords)
        {
            var originalOrder = Orders.FirstOrDefault(x => x.OrderId == orderDto.OrderId);
            if (originalOrder != null)
            {
                Orders.Remove(originalOrder);
            }
        }
    }
}
{% endhighlight %}
{% highlight c# tabtitle="OrderDto.cs" %}
public class OrderDto
{
    public int OrderId { get; set; }

    public string CustomerName { get; set; } = string.Empty;

    public int TransactionCount { get; set; }

    public double TotalAmount { get; set; }

    public DateTime LatestTransactionDate { get; set; }

    public string TransactionSummary { get; set; } = string.Empty;

    public static OrderDto GenerateOrderDto(Order order)
    {
        return new OrderDto
        {
            OrderId = order.OrderId,
            CustomerName = order.CustomerName,
            TransactionCount = order.Transactions.Count,
            TotalAmount = order.Transactions.Sum(x => x.Amount),
            LatestTransactionDate = order.Transactions.Any() ? order.Transactions.Max(x => x.TransactionDate) : DateTime.MinValue,
            TransactionSummary = string.Join(" | ", order.Transactions.Select(x => $"{x.TransactionId} - {x.Description}"))
        };
    }
}
{% endhighlight %}
{% highlight c# tabtitle="Order.cs" %}
public class Order
{
    public int OrderId { get; set; }

    public string CustomerName { get; set; } = string.Empty;

    public ICollection<OrderTransaction> Transactions { get; set; } = new List<OrderTransaction>();

    public static List<Order> GenerateOrders()
    {
        var orders = new List<Order>();

        for (int i = 1; i <= 20; i++)
        {
            var order = new Order
            {
                OrderId = i,
                CustomerName = $"Customer {i}",
                Transactions =
                {
                    new OrderTransaction
                    {
                        TransactionId = i * 10 + 1,
                        Amount = 500 + i * 25,
                        TransactionDate = DateTime.Today.AddDays(-i),
                        Description = "Laptop Purchase"
                    },
                    new OrderTransaction
                    {
                        TransactionId = i * 10 + 2,
                        Amount = 250 + i * 10,
                        TransactionDate = DateTime.Today.AddDays(-i + 1),
                        Description = "Software License"
                    }
                }
            };

            orders.Add(order);
        }

        return orders;
    }
}
{% endhighlight %}
{% highlight c# tabtitle="OrderTransaction.cs" %}
public class OrderTransaction
{
    public int TransactionId { get; set; }

    public DateTime TransactionDate { get; set; }

    public double Amount { get; set; }

    public string Description { get; set; } = string.Empty;
}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://blazorplayground.syncfusion.com/embed/rjLnCZMLqmGQFDYu?appbar=false&editor=false&result=true&errorlist=false&theme=fluent2" %}

## Best practices

- Use DTO pattern to maintain separation between domain models and presentation models.
- Implement `GenerateOrderDto()` as a central transformation method to ensure consistency.
- Mark computed columns with [`AllowAdding="false"`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Grids.GridColumn.html#Syncfusion_Blazor_Grids_GridColumn_AllowAdding) and [`AllowEditing="false"`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Grids.GridColumn.html#Syncfusion_Blazor_Grids_GridColumn_AllowEditing) to prevent direct editing.
- Keep domain models clean and free from UI-specific properties.
- Use strongly typed flattened properties (int, double, decimal, DateTime, bool) rather than strings.
- Apply string flattening only when multiple child values must display in a single column.
- Include child identifiers in flattened strings when searching by child records is necessary.
- Treat flattened properties as computed values derived from child collections.
- Add null checks in event handlers to prevent exceptions on empty collections.
- Test edge cases, including adding new records, editing multiple fields, and deleting records in batch mode.

## Troubleshooting

| Issue | Likely cause | Resolution |
|-------|-------|----------|
| Flattened fields do not update after record changes. | `GenerateOrderDto()` method not called after modifying domain model. | Call `GenerateOrderDto()` immediately after adding, editing, or deleting transactions; update DTO properties with results. |
| Data Grid operations (filter, sort, search) fail on flattened fields. | Flattened fields not regenerated before binding DTOs to Data Grid. | Ensure `GenerateOrderDto()` is called for all records during initialization or after bulk operations. |
| Computed columns appear editable in Data Grid. | [`AllowAdding`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Grids.GridColumn.html#Syncfusion_Blazor_Grids_GridColumn_AllowAdding) or [`AllowEditing`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Grids.GridColumn.html#Syncfusion_Blazor_Grids_GridColumn_AllowEditing) properties not set to `false`. | Set `AllowAdding="false"` and `AllowEditing="false"` on all computed columns in column definition. |
| InvalidOperationException when computing flattened fields. | `Max()` or `Min()` called on empty Transactions collection. | Use `.Any()` guard before aggregate operations: `order.Transactions.Any() ? order.Transactions.Max(x => x.TransactionDate) : DateTime.MinValue`. |
| Changes in batch mode not reflected in Data Grid display. | DTO properties not updated in batch event handler. | Update all computed properties in DTO after calling `GenerateOrderDto()` in each branch (ChangedRecords, AddedRecords, DeletedRecords). |
| Primary key not identifying correct record. | [`IsPrimaryKey`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Grids.GridColumn.html#Syncfusion_Blazor_Grids_GridColumn_IsPrimaryKey) property not set on OrderId column. | Set `IsPrimaryKey="true"` on the unique identifier column in column definition. |

## See also

* [Data Grid data binding](./data-binding.md)
* [Data Grid filtering](./filtering.md)
* [Data Grid sorting](./sorting.md)
* [Data Grid grouping](./grouping.md)
* [Data Grid editing](./in-line-editing.md)
* [Normal editing](./normal-editing.md)
* [Batch editing](./batch-editing.md)
