---
layout: post
title: Foreign Key Column in Blazor TreeGrid Component | Syncfusion®
description: Learn how to configure and use foreign key columns in Blazor TreeGrid, including local and remote data binding, caching, editing, filtering, searching, and hierarchical operations.
platform: grid-sdk
control: TreeGrid
documentation: ug
---

# Foreign Key Column in Blazor TreeGrid

The [Blazor TreeGrid](https://www.syncfusion.com/blazor-components/blazor-treegrid) supports displaying related data from a **foreign key data source** in a column. The [TreeGridForeignColumn](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.TreeGrid.TreeGridForeignColumn.html) directive resolves cell values through a lookup collection, displaying meaningful display text instead of raw key identifiers while retaining the raw key in the underlying row data.

A foreign key column can be configured using the following properties of the [TreeGridForeignColumn](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.TreeGrid.TreeGridForeignColumn.html) directive:

* [Field](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.TreeGrid.TreeGridColumn.html#Syncfusion_Blazor_TreeGrid_TreeGridColumn_Field) – The key field on the row data (inherited from TreeGridColumn).
* [ForeignDataSource](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.TreeGrid.TreeGridForeignColumn.html#Syncfusion_Blazor_TreeGrid_TreeGridForeignColumn_ForeignDataSource) – The lookup collection containing related data (any IEnumerable; ObservableCollection automatically invalidates the cache).
* [ForeignKeyField](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.TreeGrid.TreeGridColumn.html#Syncfusion_Blazor_TreeGrid_TreeGridColumn_ForeignKeyField) – The property name of the key in the ForeignDataSource (defaults to Field if not specified).
* [ForeignKeyValue](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.TreeGrid.TreeGridColumn.html#Syncfusion_Blazor_TreeGrid_TreeGridColumn_ForeignKeyValue) – The property name of the display text in the ForeignDataSource.
* [MissingValueText](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.TreeGrid.TreeGridColumn.html#Syncfusion_Blazor_TreeGrid_TreeGridColumn_MissingValueText) – Text displayed when a key has no matching record in the foreign data source (defaults to the raw key as a string).

## Binding local data

The Blazor TreeGrid supports binding local data to a foreign key column. This allows related data from a local data source to be displayed within the TreeGrid across all hierarchy levels.

In the following example:
- **Main Data (employees)**: Contains employee records with "ManagerID" values representing reporting relationships.
- **Foreign Data (managers)**: Contains manager records with "ManagerID" and "ManagerName" fields.
- **Result**: The TreeGrid displays manager names instead of numeric IDs at every hierarchy level.

{% tabs %}
{% highlight razor tabtitle="Index.razor" %}
@using Syncfusion.Blazor.TreeGrid

<SfTreeGrid DataSource="@Employees" IdMapping="EmployeeID" ParentIdMapping="ReportingManager" TreeColumnIndex="1">
    <TreeGridColumns>
        <TreeGridColumn Field=@nameof(EmployeeData.EmployeeID) HeaderText="Employee ID" Width="120" TextAlign="Syncfusion.Blazor.Grids.TextAlign.Right"></TreeGridColumn>
        <TreeGridColumn Field=@nameof(EmployeeData.Name) HeaderText="Name" Width="150"></TreeGridColumn>
        <TreeGridForeignColumn Field=@nameof(EmployeeData.ReportingManager) HeaderText="Manager Name" ForeignKeyValue="ManagerName" ForeignDataSource="@Managers" Width="150"></TreeGridForeignColumn>
        <TreeGridColumn Field=@nameof(EmployeeData.Designation) HeaderText="Designation" Width="150"></TreeGridColumn>
    </TreeGridColumns>
</SfTreeGrid>

@code {
    public List<EmployeeData> Employees { get; set; }
    public List<ManagerData> Managers { get; set; }

    protected override void OnInitialized()
    {
        Employees = EmployeeData.GetAllRecords();
        Managers = ManagerData.GetAllRecords();
    }
}
{% endhighlight %}

{% highlight c# tabtitle="EmployeeData.cs" %}
public class EmployeeData
{
    public int EmployeeID { get; set; }
    public string Name { get; set; }
    public int? ReportingManager { get; set; }
    public string Designation { get; set; }

    public static List<EmployeeData> GetAllRecords()
    {
        return new List<EmployeeData>
        {
            new EmployeeData { EmployeeID = 1, Name = "Andrew", ReportingManager = null, Designation = "Chief Executive Officer" },
            new EmployeeData { EmployeeID = 2, Name = "Nancy", ReportingManager = 1, Designation = "Vice President" },
            new EmployeeData { EmployeeID = 3, Name = "Janet", ReportingManager = 2, Designation = "Manager" },
            new EmployeeData { EmployeeID = 4, Name = "Margaret", ReportingManager = 1, Designation = "Vice President" },
            new EmployeeData { EmployeeID = 5, Name = "Steven", ReportingManager = 4, Designation = "Manager" },
            new EmployeeData { EmployeeID = 6, Name = "Michael", ReportingManager = 2, Designation = "Team Lead" },
            new EmployeeData { EmployeeID = 7, Name = "Robert", ReportingManager = 3, Designation = "Developer" },
            new EmployeeData { EmployeeID = 8, Name = "Laura", ReportingManager = 3, Designation = "Developer" },
            new EmployeeData { EmployeeID = 9, Name = "Anne", ReportingManager = 4, Designation = "Developer" }
        };
    }
}
{% endhighlight %}

{% highlight c# tabtitle="ManagerData.cs" %}
public class ManagerData
{
    public int ManagerID { get; set; }
    public string ManagerName { get; set; }

    public static List<ManagerData> GetAllRecords()
    {
        return new List<ManagerData>
        {
            new ManagerData { ManagerID = 1, ManagerName = "Andrew" },
            new ManagerData { ManagerID = 2, ManagerName = "Nancy" },
            new ManagerData { ManagerID = 3, ManagerName = "Janet" },
            new ManagerData { ManagerID = 4, ManagerName = "Margaret" },
            new ManagerData { ManagerID = 5, ManagerName = "Steven" }
        };
    }
}
{% endhighlight %}
{% endtabs %}

> The `ForeignKeyField` property should match the field name in the foreign data source that represents the foreign key relationship. If `ForeignKeyField` is not defined, the column uses the [Field](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.TreeGrid.TreeGridColumn.html#Syncfusion_Blazor_TreeGrid_TreeGridColumn_Field) property.

## Binding remote data

The Blazor TreeGrid supports binding remote data to a foreign key column using [SfDataManager](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Data.SfDataManager.html). This approach is useful when retrieving lookup data from services such as **OData**, **Web API**, or other remote endpoints.

{% tabs %}
{% highlight razor tabtitle="Index.razor" %}
@using Syncfusion.Blazor.TreeGrid
@using Syncfusion.Blazor.Data

<SfTreeGrid DataSource="@Employees" IdMapping="EmployeeID" ParentIdMapping="ReportingManager" TreeColumnIndex="1">
    <TreeGridColumns>
        <TreeGridColumn Field=@nameof(EmployeeData.EmployeeID) HeaderText="Employee ID" Width="120" TextAlign="Syncfusion.Blazor.Grids.TextAlign.Right"></TreeGridColumn>
        <TreeGridColumn Field=@nameof(EmployeeData.Name) HeaderText="Name" Width="150"></TreeGridColumn>
        <TreeGridForeignColumn Field=@nameof(EmployeeData.ReportingManager) HeaderText="Manager Name" ForeignKeyValue="ManagerName" Width="150">
            <SfDataManager Url="https://services.example.com/api/managers" Adaptor="Adaptors.WebApiAdaptor"></SfDataManager>
        </TreeGridForeignColumn>
        <TreeGridColumn Field=@nameof(EmployeeData.Designation) HeaderText="Designation" Width="150"></TreeGridColumn>
    </TreeGridColumns>
</SfTreeGrid>

@code {
    public List<EmployeeData> Employees { get; set; }

    protected override void OnInitialized()
    {
        Employees = EmployeeData.GetAllRecords();
    }
}
{% endhighlight %}

{% highlight c# tabtitle="EmployeeData.cs" %}
public class EmployeeData
{
    public int EmployeeID { get; set; }
    public string Name { get; set; }
    public int? ReportingManager { get; set; }
    public string Designation { get; set; }

    public static List<EmployeeData> GetAllRecords()
    {
        return new List<EmployeeData>
        {
            new EmployeeData { EmployeeID = 1, Name = "Andrew", ReportingManager = null, Designation = "Chief Executive Officer" },
            new EmployeeData { EmployeeID = 2, Name = "Nancy", ReportingManager = 1, Designation = "Vice President" },
            new EmployeeData { EmployeeID = 3, Name = "Janet", ReportingManager = 2, Designation = "Manager" },
            new EmployeeData { EmployeeID = 4, Name = "Margaret", ReportingManager = 1, Designation = "Vice President" },
            new EmployeeData { EmployeeID = 5, Name = "Steven", ReportingManager = 4, Designation = "Manager" }
        };
    }
}
{% endhighlight %}
{% endtabs %}

> For remote data, replace the URL with your actual service endpoint. The TreeGrid will fetch and cache the foreign data as needed.

## Cache management

The foreign key column maintains an internal cache of the foreign data source for performance optimization. The cache is automatically managed, but you can also control it explicitly using the available cache management methods.

### Refresh foreign key data

Use the [RefreshForeignKeyDataAsync](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.TreeGrid.SfTreeGrid-1.html#Syncfusion_Blazor_TreeGrid_SfTreeGrid_1_RefreshForeignKeyDataAsync_System_String_) method to rebuild the cache from the current ForeignDataSource and refresh the visible cells. This is useful when the foreign data source is updated externally.

```csharp
await TreeGrid.RefreshForeignKeyDataAsync("ManagerID");
```

### Set foreign data source

Use the [SetForeignDataSourceAsync](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.TreeGrid.SfTreeGrid-1.html#Syncfusion_Blazor_TreeGrid_SfTreeGrid_1_SetForeignDataSourceAsync_System_String_System_Collections_IEnumerable_) method to replace the ForeignDataSource, rebuild the cache, and refresh cells. This method is cancellable via the `ForeignDataSourceChanging` event.

```csharp
var newManagers = await FetchManagersFromServer();
await TreeGrid.SetForeignDataSourceAsync("ManagerID", newManagers);
```

### Clear foreign key cache

Use the [ClearForeignKeyCacheAsync](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.TreeGrid.SfTreeGrid-1.html#Syncfusion_Blazor_TreeGrid_SfTreeGrid_1_ClearForeignKeyCacheAsync_System_String_) method to clear the cache. The cache will be rebuilt lazily on the next lookup.

```csharp
await TreeGrid.ClearForeignKeyCacheAsync("ManagerID");
```

### Get display value

Use the [GetDisplayValueAsync](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.TreeGrid.SfTreeGrid-1.html#Syncfusion_Blazor_TreeGrid_SfTreeGrid_1_GetDisplayValueAsync_System_String_System_Object_) method for an asynchronous lookup of display text for a specific key.

```csharp
var displayText = await TreeGrid.GetDisplayValueAsync("ManagerID", 2);
// displayText = "Nancy"
```

### Get cached value

Use the [GetCachedValueAsync](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.TreeGrid.SfTreeGrid-1.html#Syncfusion_Blazor_TreeGrid_SfTreeGrid_1_GetCachedValueAsync__1_System_String_System_Object_) method to asynchronously retrieve the complete foreign record by key.

```csharp
var manager = await TreeGrid.GetCachedValueAsync<ManagerData>("ManagerID", 2);
// manager = ManagerData { ManagerID = 2, ManagerName = "Nancy" }
```

## Events

### ForeignDataSourceChanging

The `ForeignDataSourceChanging` event occurs before the ForeignDataSource is replaced. This event is cancellable via `args.Cancel`, allowing you to prevent the operation or perform validation.

This example demonstrates preventing the foreign data source replacement if validation fails:

```csharp
<SfTreeGrid @ref="TreeGrid" DataSource="@Employees" IdMapping="EmployeeID" ParentIdMapping="ReportingManager" TreeColumnIndex="1">
    <TreeGridEvents TValue="EmployeeData" OnForeignDataSourceChanging="OnForeignDataSourceChanging"></TreeGridEvents>
    <TreeGridColumns>
        <TreeGridColumn Field=@nameof(EmployeeData.EmployeeID) HeaderText="Employee ID" Width="120"></TreeGridColumn>
        <TreeGridForeignColumn Field=@nameof(EmployeeData.ReportingManager) HeaderText="Manager" ForeignKeyValue="ManagerName" ForeignDataSource="@Managers" Width="150"></TreeGridForeignColumn>
    </TreeGridColumns>
</SfTreeGrid>

@code {
    private SfTreeGrid<EmployeeData> TreeGrid { get; set; }

    private async Task OnForeignDataSourceChanging(ForeignDataSourceChangingEventArgs<EmployeeData> args)
    {
        // Validate new data source
        if (args.Data == null || ((IEnumerable)args.Data).Cast<object>().Count() == 0)
        {
            args.Cancel = true; // Prevent empty data source
        }
    }
}
```

### ForeignDataSourceChanged

The `ForeignDataSourceChanged` event occurs after the cache is rebuilt and cells are refreshed. This event is not cancellable and is useful for performing actions after the foreign data source update is complete.

```csharp
<SfTreeGrid DataSource="@Employees" IdMapping="EmployeeID" ParentIdMapping="ReportingManager" TreeColumnIndex="1">
    <TreeGridEvents TValue="EmployeeData" OnForeignDataSourceChanged="OnForeignDataSourceChanged"></TreeGridEvents>
    <TreeGridColumns>
        <TreeGridForeignColumn Field=@nameof(EmployeeData.ReportingManager) HeaderText="Manager" ForeignKeyValue="ManagerName" ForeignDataSource="@Managers" Width="150"></TreeGridForeignColumn>
    </TreeGridColumns>
</SfTreeGrid>

@code {
    private async Task OnForeignDataSourceChanged(ForeignDataSourceChangedEventArgs args)
    {
        // Perform cleanup or notify user
        Console.WriteLine($"Foreign data source updated for field: {args.Field}");
    }
}
```

## Editing with foreign key columns

By default, a dropdown editor is rendered for foreign key columns, allowing users to select values from the foreign data source. The editor stores the raw key in the row data, never the display text.

The cell edit mode uses a dropdown list populated from the foreign data source cache. When a new row is added, it is seeded with the first key from the ForeignDataSource, preventing the raw key zero from rendering as an unknown value.

```csharp
<SfTreeGrid DataSource="@Employees" IdMapping="EmployeeID" ParentIdMapping="ReportingManager" 
    Toolbar="@(new List<string> { "Add", "Edit", "Delete", "Update", "Cancel" })">
    <GridEditSettings AllowAdding="true" AllowEditing="true" AllowDeleting="true" Mode="EditMode.Cell"></GridEditSettings>
    <TreeGridColumns>
        <TreeGridColumn Field=@nameof(EmployeeData.EmployeeID) HeaderText="Employee ID" IsPrimaryKey="true" Width="120"></TreeGridColumn>
        <TreeGridForeignColumn Field=@nameof(EmployeeData.ReportingManager) HeaderText="Manager" ForeignKeyValue="ManagerName" ForeignDataSource="@Managers" Width="150"></TreeGridForeignColumn>
    </TreeGridColumns>
</SfTreeGrid>
```

## Filtering and searching

The foreign key column integrates with TreeGrid filtering and searching operations. Column filtering uses display text for user interaction but translates to key-based filtering before reaching the data source, ensuring compatibility with custom adaptors that compare against raw keys.

**Toolbar Search**: Typed text is matched against display text. The search query is translated to a key-based filter before reaching the data source.

**Column Filtering**: 
- **Filter Bar**: Shows display text for type-ahead suggestions.
- **Checkbox Filter**: Displays foreign display text as labels.

The filtering behavior respects the [TreeGridSearchSettings.HierarchyMode](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.TreeGrid.TreeGridSearchSettings.html#Syncfusion_Blazor_TreeGrid_TreeGridSearchSettings_HierarchyMode) and [TreeGridFilterSettings.HierarchyMode](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.TreeGrid.TreeGridFilterSettings.html#Syncfusion_Blazor_TreeGrid_TreeGridFilterSettings_HierarchyMode) properties, supporting hierarchy modes: **None**, **Parent**, **Child**, and **Both**.

## Sorting

Rows are ordered by the display text of the foreign key column, not by the raw key. When multiple columns are sorted, the sort operation considers each column's display text, with the last directive serving as the primary sort key.

```csharp
<SfTreeGrid DataSource="@Employees" IdMapping="EmployeeID" ParentIdMapping="ReportingManager" AllowSorting="true">
    <TreeGridColumns>
        <TreeGridColumn Field=@nameof(EmployeeData.Name) HeaderText="Name" Width="150"></TreeGridColumn>
        <TreeGridForeignColumn Field=@nameof(EmployeeData.ReportingManager) HeaderText="Manager" ForeignKeyValue="ManagerName" 
            ForeignDataSource="@Managers" Width="150" AllowSorting="true"></TreeGridForeignColumn>
    </TreeGridColumns>
</SfTreeGrid>
```

## Export

The foreign key column exports the display text at every hierarchy level when exporting to Excel, PDF, or CSV formats. The raw key is never exported; only the resolved display text appears in the exported file.

```csharp
<SfTreeGrid DataSource="@Employees" IdMapping="EmployeeID" ParentIdMapping="ReportingManager" 
    Toolbar="@(new List<string> { "ExcelExport", "PdfExport", "CsvExport" })">
    <TreeGridColumns>
        <TreeGridColumn Field=@nameof(EmployeeData.Name) HeaderText="Name" Width="150"></TreeGridColumn>
        <TreeGridForeignColumn Field=@nameof(EmployeeData.ReportingManager) HeaderText="Manager" ForeignKeyValue="ManagerName" 
            ForeignDataSource="@Managers" Width="150"></TreeGridForeignColumn>
    </TreeGridColumns>
</SfTreeGrid>
```

## Selection

When rows with foreign key columns are selected, the selected records retain the raw key in their data. However, the cell display continues to show the display text from the foreign data source, maintaining consistency in the UI.

```csharp
<SfTreeGrid DataSource="@Employees" IdMapping="EmployeeID" ParentIdMapping="ReportingManager" 
    AllowSelection="true" SelectionSettings="@(new TreeGridSelectionSettings { Type = SelectionType.Multiple })">
    <TreeGridColumns>
        <TreeGridColumn Field=@nameof(EmployeeData.Name) HeaderText="Name" Width="150"></TreeGridColumn>
        <TreeGridForeignColumn Field=@nameof(EmployeeData.ReportingManager) HeaderText="Manager" ForeignKeyValue="ManagerName" 
            ForeignDataSource="@Managers" Width="150"></TreeGridForeignColumn>
    </TreeGridColumns>
</SfTreeGrid>
```

## Paging

Foreign key display text persists on the current page. Paging operations are performed over the raw keys, not the display text. The cache ensures that display text is available for all visible rows on the current page.

```csharp
<SfTreeGrid DataSource="@Employees" IdMapping="EmployeeID" ParentIdMapping="ReportingManager" AllowPaging="true">
    <TreeGridPageSettings PageSize="10"></TreeGridPageSettings>
    <TreeGridColumns>
        <TreeGridColumn Field=@nameof(EmployeeData.Name) HeaderText="Name" Width="150"></TreeGridColumn>
        <TreeGridForeignColumn Field=@nameof(EmployeeData.ReportingManager) HeaderText="Manager" ForeignKeyValue="ManagerName" 
            ForeignDataSource="@Managers" Width="150"></TreeGridForeignColumn>
    </TreeGridColumns>
</SfTreeGrid>
```

## Virtualization

The foreign key column is compatible with virtual scrolling. Cell display text resolution is performed on a per-cell basis and does not block the virtual window, ensuring smooth scrolling performance even with large data sets.

```csharp
<SfTreeGrid DataSource="@Employees" IdMapping="EmployeeID" ParentIdMapping="ReportingManager" EnableVirtualization="true">
    <TreeGridColumns>
        <TreeGridColumn Field=@nameof(EmployeeData.Name) HeaderText="Name" Width="150"></TreeGridColumn>
        <TreeGridForeignColumn Field=@nameof(EmployeeData.ReportingManager) HeaderText="Manager" ForeignKeyValue="ManagerName" 
            ForeignDataSource="@Managers" Width="150"></TreeGridForeignColumn>
    </TreeGridColumns>
</SfTreeGrid>
```

## Observable data source

The foreign key column supports [INotifyCollectionChanged](https://docs.microsoft.com/dotnet/api/system.collections.specialized.inotifycollectionchanged) on the ForeignDataSource. When the observable collection changes (items added, removed, or replaced), the cache is automatically invalidated and cells are refreshed to reflect the updated data.

```csharp
@using System.Collections.ObjectModel

<SfTreeGrid DataSource="@Employees" IdMapping="EmployeeID" ParentIdMapping="ReportingManager">
    <TreeGridColumns>
        <TreeGridColumn Field=@nameof(EmployeeData.Name) HeaderText="Name" Width="150"></TreeGridColumn>
        <TreeGridForeignColumn Field=@nameof(EmployeeData.ReportingManager) HeaderText="Manager" ForeignKeyValue="ManagerName" 
            ForeignDataSource="@ObservableManagers" Width="150"></TreeGridForeignColumn>
    </TreeGridColumns>
</SfTreeGrid>

@code {
    private ObservableCollection<ManagerData> ObservableManagers { get; set; }

    protected override void OnInitialized()
    {
        ObservableManagers = new ObservableCollection<ManagerData>(ManagerData.GetAllRecords());
        // When items are added/removed from ObservableManagers, the cache is invalidated
    }
}
```

## Handling missing values

When a foreign key has no matching record in the foreign data source, the cell displays the `MissingValueText` (if specified) or the raw key as a string by default.

```csharp
<SfTreeGrid DataSource="@Employees" IdMapping="EmployeeID" ParentIdMapping="ReportingManager">
    <TreeGridColumns>
        <TreeGridColumn Field=@nameof(EmployeeData.Name) HeaderText="Name" Width="150"></TreeGridColumn>
        <TreeGridForeignColumn Field=@nameof(EmployeeData.ReportingManager) HeaderText="Manager" ForeignKeyValue="ManagerName" 
            ForeignDataSource="@Managers" MissingValueText="[Unknown Manager]" Width="150"></TreeGridForeignColumn>
    </TreeGridColumns>
</SfTreeGrid>
```

## Supported combinations

### Works With:
- ✓ **Hierarchy modes** – Respects TreeGridSearchSettings.HierarchyMode and TreeGridFilterSettings.HierarchyMode (None, Parent, Child, Both)
- ✓ **Sorting** – Rows ordered by display text across all hierarchy levels
- ✓ **Filtering** – Column filtering and toolbar search work with display text
- ✓ **Searching** – Toolbar search matches against display text
- ✓ **Cell editing** – Dropdown editor populated from foreign data cache
- ✓ **New row addition** – New rows seeded with first key from ForeignDataSource
- ✓ **Selection** – Selected records retain raw key; display text shown in UI
- ✓ **Export** – Excel, PDF, CSV export display text at every hierarchy level
- ✓ **Paging** – Foreign display text persists on current page
- ✓ **Virtualization** – Per-cell resolution without blocking virtual window
- ✓ **Observable sources** – INotifyCollectionChanged invalidates cache automatically

### Known Limitations:
- Sorting and grouping operations order by display text, not raw key
- Cell displays foreign text at every hierarchy level (not just leaf nodes)
- Cell editor stores the raw key value, never the display text
- Cache is rebuilt when ForeignDataSource changes or INotifyCollectionChanged fires
