---
layout: post
title: Foreign key column in Blazor TreeGrid Component | Syncfusion®
description: Learn how to configure and customize foreign key columns in Blazor TreeGrid, including display resolution, filtering, sorting, and editing.
platform: grid-sdk
control: TreeGrid
documentation: ug
---

# Foreign key column in Blazor TreeGrid

The [Blazor TreeGrid](https://www.syncfusion.com/blazor-components/blazor-treegrid) supports displaying related data from a **foreign key data source** in a column. This feature is useful when a column represents a foreign key relationship with another data source, allowing you to display user-friendly values instead of raw key identifiers.

A foreign key column can be configured using the [TreeGridForeignColumn](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.TreeGrid.TreeGridForeignColumn-1.html) directive with the following properties:

* [ForeignDataSource](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.TreeGrid.TreeGridForeignColumn-1.html#Syncfusion_Blazor_TreeGrid_TreeGridForeignColumn_1_ForeignDataSource) – Specifies the collection that contains the related data.
* [ForeignKeyField](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.TreeGrid.TreeGridColumn.html#Syncfusion_Blazor_TreeGrid_TreeGridColumn_ForeignKeyField) – Maps the column field to the key field in the foreign data source (defaults to Field if not specified).
* [ForeignKeyValue](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.TreeGrid.TreeGridColumn.html#Syncfusion_Blazor_TreeGrid_TreeGridColumn_ForeignKeyValue) – Specifies the property from the foreign data source that should be displayed in the column.
* [MissingValueText](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.TreeGrid.TreeGridColumn.html#Syncfusion_Blazor_TreeGrid_TreeGridColumn_MissingValueText) – Text displayed when a key has no match in the foreign data source (defaults to the raw key as a string).

## Binding local data

The Blazor TreeGrid supports binding local data to a foreign key column. This allows related data from a local collection to be displayed at every hierarchy level in the TreeGrid.

{% tabs %}

{% highlight razor tabtitle="Index.razor" %}

@using Syncfusion.Blazor.TreeGrid

<SfTreeGrid DataSource="@TreeData" IdMapping="TaskId" ParentIdMapping="ParentId" TreeColumnIndex="1">
    <TreeGridColumns>
        <TreeGridColumn Field="TaskId" HeaderText="Task ID" Width="80" TextAlign="Syncfusion.Blazor.Grids.TextAlign.Right"></TreeGridColumn>
        <TreeGridColumn Field="TaskName" HeaderText="Task Name" Width="160"></TreeGridColumn>
        <TreeGridForeignColumn Field="EmployeeId" HeaderText="Employee Name" ForeignKeyValue="EmployeeName" ForeignDataSource="@Employees" Width="150"></TreeGridForeignColumn>
        <TreeGridColumn Field="Duration" HeaderText="Duration" Width="100" TextAlign="Syncfusion.Blazor.Grids.TextAlign.Right"></TreeGridColumn>
        <TreeGridColumn Field="Progress" HeaderText="Progress" Width="100" TextAlign="Syncfusion.Blazor.Grids.TextAlign.Right"></TreeGridColumn>
    </TreeGridColumns>
</SfTreeGrid>

@code {
    public List<TaskData> TreeData { get; set; }
    public List<EmployeeData> Employees { get; set; }

    protected override void OnInitialized()
    {
        TreeData = GetTreeData();
        Employees = GetEmployeeData();
    }

    public List<TaskData> GetTreeData()
    {
        List<TaskData> data = new List<TaskData>();
        data.Add(new TaskData() { TaskId = 1, TaskName = "Project Initiation", EmployeeId = 1, Duration = 4, Progress = 40, ParentId = null });
        data.Add(new TaskData() { TaskId = 2, TaskName = "Identify Site location", EmployeeId = 2, Duration = 3, Progress = 30, ParentId = 1 });
        data.Add(new TaskData() { TaskId = 3, TaskName = "Perform Soil test", EmployeeId = 3, Duration = 5, Progress = 40, ParentId = 1 });
        data.Add(new TaskData() { TaskId = 4, TaskName = "Soil test approval", EmployeeId = 1, Duration = 1, Progress = 50, ParentId = 1 });
        data.Add(new TaskData() { TaskId = 5, TaskName = "Project Estimation", EmployeeId = 4, Duration = 5, Progress = 0, ParentId = null });
        data.Add(new TaskData() { TaskId = 6, TaskName = "Develop floor plans", EmployeeId = 5, Duration = 3, Progress = 50, ParentId = 5 });
        data.Add(new TaskData() { TaskId = 7, TaskName = "List materials", EmployeeId = 2, Duration = 3, Progress = 40, ParentId = 5 });
        data.Add(new TaskData() { TaskId = 8, TaskName = "Estimation approval", EmployeeId = 1, Duration = 2, Progress = 45, ParentId = 5 });
        return data;
    }

    public List<EmployeeData> GetEmployeeData()
    {
        List<EmployeeData> employees = new List<EmployeeData>();
        employees.Add(new EmployeeData() { EmployeeId = 1, EmployeeName = "Nancy Davolio" });
        employees.Add(new EmployeeData() { EmployeeId = 2, EmployeeName = "Andrew Fuller" });
        employees.Add(new EmployeeData() { EmployeeId = 3, EmployeeName = "Janet Leverling" });
        employees.Add(new EmployeeData() { EmployeeId = 4, EmployeeName = "Margaret Hamilt" });
        employees.Add(new EmployeeData() { EmployeeId = 5, EmployeeName = "Steven Walker" });
        return employees;
    }

    public class TaskData
    {
        public int TaskId { get; set; }
        public string TaskName { get; set; }
        public int EmployeeId { get; set; }
        public int Duration { get; set; }
        public int Progress { get; set; }
        public int? ParentId { get; set; }
    }

    public class EmployeeData
    {
        public int EmployeeId { get; set; }
        public string EmployeeName { get; set; }
    }
}

{% endhighlight %}

{% endtabs %}

In this configuration, the **EmployeeId** column is set as a foreign key column. The column stores the raw key (EmployeeId) in the row data, but displays the corresponding **EmployeeName** from the foreign data source at every hierarchy level. The cells at both parent and child rows show the employee names.

![Blazor TreeGrid with foreign key column and local data](../images/treegrid-foreign-key-column-local.webp)

## Binding remote data

The Blazor TreeGrid supports binding remote data to a foreign key column using [SfDataManager](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Data.SfDataManager.html). This approach is useful when retrieving related data from remote endpoints such as **OData**, **Web API**, or other services.

{% tabs %}

{% highlight razor tabtitle="Index.razor" %}

@using Syncfusion.Blazor.TreeGrid
@using Syncfusion.Blazor.Data

<SfTreeGrid DataSource="@TreeData" IdMapping="TaskId" ParentIdMapping="ParentId" TreeColumnIndex="1">
    <TreeGridColumns>
        <TreeGridColumn Field="TaskId" HeaderText="Task ID" Width="80" TextAlign="Syncfusion.Blazor.Grids.TextAlign.Right"></TreeGridColumn>
        <TreeGridColumn Field="TaskName" HeaderText="Task Name" Width="160"></TreeGridColumn>
        <TreeGridForeignColumn TValue="EmployeeData" Field="EmployeeId" HeaderText="Employee Name" ForeignKeyValue="FirstName" Width="150">
            <SfDataManager Url="https://services.odata.org/V4/Northwind/Northwind.svc/Employees" CrossDomain="true" Adaptor="Adaptors.ODataV4Adaptor">
            </SfDataManager>
        </TreeGridForeignColumn>
        <TreeGridColumn Field="Duration" HeaderText="Duration" Width="100" TextAlign="Syncfusion.Blazor.Grids.TextAlign.Right"></TreeGridColumn>
        <TreeGridColumn Field="Progress" HeaderText="Progress" Width="100" TextAlign="Syncfusion.Blazor.Grids.TextAlign.Right"></TreeGridColumn>
    </TreeGridColumns>
</SfTreeGrid>

@code {
    public List<TaskData> TreeData { get; set; }

    protected override void OnInitialized()
    {
        TreeData = GetTreeData();
    }

    public List<TaskData> GetTreeData()
    {
        List<TaskData> data = new List<TaskData>();
        data.Add(new TaskData() { TaskId = 1, TaskName = "Project Initiation", EmployeeId = 1, Duration = 4, Progress = 40, ParentId = null });
        data.Add(new TaskData() { TaskId = 2, TaskName = "Identify Site location", EmployeeId = 2, Duration = 3, Progress = 30, ParentId = 1 });
        data.Add(new TaskData() { TaskId = 3, TaskName = "Perform Soil test", EmployeeId = 3, Duration = 5, Progress = 40, ParentId = 1 });
        data.Add(new TaskData() { TaskId = 4, TaskName = "Soil test approval", EmployeeId = 1, Duration = 1, Progress = 50, ParentId = 1 });
        return data;
    }

    public class TaskData
    {
        public int TaskId { get; set; }
        public string TaskName { get; set; }
        public int EmployeeId { get; set; }
        public int Duration { get; set; }
        public int Progress { get; set; }
        public int? ParentId { get; set; }
    }

    public class EmployeeData
    {
        public int EmployeeID { get; set; }
        public string FirstName { get; set; }
    }
}

{% endhighlight %}

{% endtabs %}

![Blazor TreeGrid with foreign key column and remote data](../images/treegrid-foreign-key-column-remote.webp)

> * For remote data, **sorting** and **grouping** operations are performed based on the [ForeignKeyField](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.TreeGrid.TreeGridColumn.html#Syncfusion_Blazor_TreeGrid_TreeGridColumn_ForeignKeyField) property rather than the [ForeignKeyValue](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.TreeGrid.TreeGridColumn.html#Syncfusion_Blazor_TreeGrid_TreeGridColumn_ForeignKeyValue) property.
> * If `ForeignKeyField` is not defined, the column uses the [Field](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.TreeGrid.TreeGridColumn.html#Syncfusion_Blazor_TreeGrid_TreeGridColumn_Field) property of the [TreeGridColumn](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.TreeGrid.TreeGridColumn.html) directive.

## Display behavior

### Display at all hierarchy levels

Foreign key columns display the resolved display text at every hierarchy level in the TreeGrid. Whether a row is at the root level or nested as a child, the foreign key value is consistently resolved and displayed.

```cshtml
@using Syncfusion.Blazor.TreeGrid

<SfTreeGrid DataSource="@TreeData" IdMapping="TaskId" ParentIdMapping="ParentId" TreeColumnIndex="1">
    <TreeGridColumns>
        <TreeGridColumn Field="TaskId" HeaderText="Task ID" Width="80"></TreeGridColumn>
        <TreeGridColumn Field="TaskName" HeaderText="Task Name" Width="160"></TreeGridColumn>
        <TreeGridForeignColumn Field="EmployeeId" HeaderText="Employee Name" ForeignKeyValue="EmployeeName" ForeignDataSource="@Employees" Width="150"></TreeGridForeignColumn>
        <TreeGridColumn Field="Progress" HeaderText="Progress" Width="100"></TreeGridColumn>
    </TreeGridColumns>
</SfTreeGrid>

@code {
    // Employee names display consistently at all hierarchy levels (parent and child rows)
}
```

### Handling missing values

When a foreign key in the row data has no matching record in the foreign data source, the cell displays the value specified by the [MissingValueText](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.TreeGrid.TreeGridColumn.html#Syncfusion_Blazor_TreeGrid_TreeGridColumn_MissingValueText) property. If `MissingValueText` is not set, the raw key value is displayed as a string.

```cshtml
<TreeGridForeignColumn 
    Field="EmployeeId" 
    HeaderText="Employee Name" 
    ForeignKeyValue="EmployeeName" 
    ForeignDataSource="@Employees"
    MissingValueText="Unknown Employee"
    Width="150">
</TreeGridForeignColumn>
```

## Editing foreign key columns

### Default dropdown editor

By default, foreign key columns render a [SfDropDownList](https://blazor.syncfusion.com/documentation/dropdown-list/getting-started-with-web-app) editor during cell edit mode. The dropdown is populated from the foreign data source cache, and the selected value is stored as the raw key in the row data.

To enable editing, configure [AllowEditing](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.TreeGrid.TreeGridEditSettings.html#Syncfusion_Blazor_TreeGrid_TreeGridEditSettings_AllowEditing) on the TreeGrid and ensure the column is editable:

```cshtml
@using Syncfusion.Blazor.TreeGrid

<SfTreeGrid DataSource="@TreeData" IdMapping="TaskId" ParentIdMapping="ParentId" TreeColumnIndex="1" 
    Toolbar="@(new List<string>() { "Add", "Edit", "Delete", "Cancel", "Update" })">
    <TreeGridEditSettings AllowAdding="true" AllowEditing="true" AllowDeleting="true" Mode="EditMode.Cell"></TreeGridEditSettings>
    <TreeGridColumns>
        <TreeGridColumn Field="TaskId" HeaderText="Task ID" IsPrimaryKey="true" Width="80"></TreeGridColumn>
        <TreeGridColumn Field="TaskName" HeaderText="Task Name" Width="160"></TreeGridColumn>
        <TreeGridForeignColumn Field="EmployeeId" HeaderText="Employee Name" ForeignKeyValue="EmployeeName" ForeignDataSource="@Employees" Width="150"></TreeGridForeignColumn>
        <TreeGridColumn Field="Progress" HeaderText="Progress" Width="100"></TreeGridColumn>
    </TreeGridColumns>
</SfTreeGrid>

@code {
    // Implementation code
}
```

The cell editor dropdown displays the employee names from the foreign data source, but the underlying row data always stores the raw key (EmployeeId).

### Customizing editor with EditTemplate

You can customize the editor for a foreign key column using the [EditTemplate](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.TreeGrid.TreeGridColumn.html#Syncfusion_Blazor_TreeGrid_TreeGridColumn_EditTemplate) property. This allows you to use alternative components such as [SfComboBox](https://blazor.syncfusion.com/documentation/combobox/getting-started-with-web-app) or [SfAutoComplete](https://blazor.syncfusion.com/documentation/autocomplete/getting-started-with-web-app).

{% tabs %}

{% highlight razor tabtitle="Index.razor" %}

@using Syncfusion.Blazor.TreeGrid
@using Syncfusion.Blazor.DropDowns

<SfTreeGrid DataSource="@TreeData" IdMapping="TaskId" ParentIdMapping="ParentId" TreeColumnIndex="1"
    Toolbar="@(new List<string>() { "Add", "Edit", "Delete", "Cancel", "Update" })">
    <TreeGridEditSettings AllowAdding="true" AllowEditing="true" AllowDeleting="true" Mode="EditMode.Cell"></TreeGridEditSettings>
    <TreeGridColumns>
        <TreeGridColumn Field="TaskId" HeaderText="Task ID" IsPrimaryKey="true" Width="80"></TreeGridColumn>
        <TreeGridColumn Field="TaskName" HeaderText="Task Name" Width="160"></TreeGridColumn>
        <TreeGridForeignColumn Field="EmployeeId" HeaderText="Employee Name" ForeignKeyValue="EmployeeName" ForeignDataSource="@Employees" Width="150">
            <EditTemplate>
                <SfComboBox TValue="int?" TItem="EmployeeData" @bind-Value="@((context as TaskData).EmployeeId)" DataSource="@Employees">
                    <ComboBoxFieldSettings Value="EmployeeId" Text="EmployeeName"></ComboBoxFieldSettings>
                </SfComboBox>
            </EditTemplate>
        </TreeGridForeignColumn>
        <TreeGridColumn Field="Progress" HeaderText="Progress" Width="100"></TreeGridColumn>
    </TreeGridColumns>
</SfTreeGrid>

@code {
    public List<TaskData> TreeData { get; set; }
    public List<EmployeeData> Employees { get; set; }

    protected override void OnInitialized()
    {
        TreeData = GetTreeData();
        Employees = GetEmployeeData();
    }

    public List<TaskData> GetTreeData()
    {
        List<TaskData> data = new List<TaskData>();
        data.Add(new TaskData() { TaskId = 1, TaskName = "Project Initiation", EmployeeId = 1, Progress = 40, ParentId = null });
        data.Add(new TaskData() { TaskId = 2, TaskName = "Identify Site location", EmployeeId = 2, Progress = 30, ParentId = 1 });
        return data;
    }

    public List<EmployeeData> GetEmployeeData()
    {
        List<EmployeeData> employees = new List<EmployeeData>();
        employees.Add(new EmployeeData() { EmployeeId = 1, EmployeeName = "Nancy Davolio" });
        employees.Add(new EmployeeData() { EmployeeId = 2, EmployeeName = "Andrew Fuller" });
        employees.Add(new EmployeeData() { EmployeeId = 3, EmployeeName = "Janet Leverling" });
        return employees;
    }

    public class TaskData
    {
        public int TaskId { get; set; }
        public string TaskName { get; set; }
        public int? EmployeeId { get; set; }
        public int Progress { get; set; }
        public int? ParentId { get; set; }
    }

    public class EmployeeData
    {
        public int EmployeeId { get; set; }
        public string EmployeeName { get; set; }
    }
}

{% endhighlight %}

{% endtabs %}

### New row seeding

When adding a new row, the foreign key column is seeded with the first key from the foreign data source, avoiding the type-default zero which would render as an unknown raw key. This ensures new rows display a valid employee name immediately.

## Filtering foreign key columns

Foreign key columns support both **menu filter** and **filter bar** modes. Filtering is performed against the display text, and the query is automatically translated to match against the raw keys in the data source.

### Menu filter

The Blazor TreeGrid allows customizing the filter UI for foreign key columns using the [FilterTemplate](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.TreeGrid.TreeGridColumn.html#Syncfusion_Blazor_TreeGrid_TreeGridColumn_FilterTemplate) property:

{% tabs %}

{% highlight razor tabtitle="Index.razor" %}

@using Syncfusion.Blazor.TreeGrid
@using Syncfusion.Blazor.DropDowns

<SfTreeGrid DataSource="@TreeData" IdMapping="TaskId" ParentIdMapping="ParentId" TreeColumnIndex="1" AllowFiltering="true">
    <TreeGridFilterSettings Type="Syncfusion.Blazor.TreeGrid.FilterType.Menu"></TreeGridFilterSettings>
    <TreeGridColumns>
        <TreeGridColumn Field="TaskId" HeaderText="Task ID" Width="80"></TreeGridColumn>
        <TreeGridColumn Field="TaskName" HeaderText="Task Name" Width="160"></TreeGridColumn>
        <TreeGridForeignColumn Field="EmployeeId" HeaderText="Employee Name" ForeignKeyValue="EmployeeName" ForeignDataSource="@Employees" Width="150">
            <FilterTemplate>
                <SfDropDownList Placeholder="Employee Name" ID="EmployeeId" @bind-Value="@((context as Syncfusion.Blazor.Grids.PredicateModel<string>).Value)" TItem="EmployeeData" TValue="string" DataSource="@Employees">
                    <DropDownListFieldSettings Value="EmployeeName" Text="EmployeeName"></DropDownListFieldSettings>
                </SfDropDownList>
            </FilterTemplate>
        </TreeGridForeignColumn>
        <TreeGridColumn Field="Progress" HeaderText="Progress" Width="100"></TreeGridColumn>
    </TreeGridColumns>
</SfTreeGrid>

@code {
    public List<TaskData> TreeData { get; set; }
    public List<EmployeeData> Employees { get; set; }

    protected override void OnInitialized()
    {
        TreeData = GetTreeData();
        Employees = GetEmployeeData();
    }

    public List<TaskData> GetTreeData()
    {
        List<TaskData> data = new List<TaskData>();
        data.Add(new TaskData() { TaskId = 1, TaskName = "Project Initiation", EmployeeId = 1, Progress = 40, ParentId = null });
        data.Add(new TaskData() { TaskId = 2, TaskName = "Identify Site location", EmployeeId = 2, Progress = 30, ParentId = 1 });
        data.Add(new TaskData() { TaskId = 3, TaskName = "Perform Soil test", EmployeeId = 3, Progress = 40, ParentId = 1 });
        return data;
    }

    public List<EmployeeData> GetEmployeeData()
    {
        List<EmployeeData> employees = new List<EmployeeData>();
        employees.Add(new EmployeeData() { EmployeeId = 1, EmployeeName = "Nancy Davolio" });
        employees.Add(new EmployeeData() { EmployeeId = 2, EmployeeName = "Andrew Fuller" });
        employees.Add(new EmployeeData() { EmployeeId = 3, EmployeeName = "Janet Leverling" });
        return employees;
    }

    public class TaskData
    {
        public int TaskId { get; set; }
        public string TaskName { get; set; }
        public int EmployeeId { get; set; }
        public int Progress { get; set; }
        public int? ParentId { get; set; }
    }

    public class EmployeeData
    {
        public int EmployeeId { get; set; }
        public string EmployeeName { get; set; }
    }
}

{% endhighlight %}

{% endtabs %}

### Filter bar template

The Blazor TreeGrid supports customizing the filter bar for foreign key columns using the `FilterTemplate` property:

```cshtml
@using Syncfusion.Blazor.TreeGrid
@using Syncfusion.Blazor.DropDowns

<SfTreeGrid @ref="Grid" DataSource="@TreeData" IdMapping="TaskId" ParentIdMapping="ParentId" TreeColumnIndex="1" AllowFiltering="true">
    <TreeGridColumns>
        <TreeGridColumn Field="TaskId" HeaderText="Task ID" Width="80"></TreeGridColumn>
        <TreeGridForeignColumn Field="EmployeeId" HeaderText="Employee Name" ForeignKeyValue="EmployeeName" ForeignDataSource="@Employees" Width="150">
            <FilterTemplate>
                <SfDropDownList ID="EmployeeId" PlaceHolder="Employee Name" Value="@((string)(context as Syncfusion.Blazor.Grids.PredicateModel).Value)" DataSource="@FilterEmployees" TValue="string" TItem="DropDownOption">
                    <DropDownListEvents ValueChange="@OnFilterChange" TItem="DropDownOption" TValue="string"></DropDownListEvents>
                    <DropDownListFieldSettings Value="EmployeeName" Text="EmployeeName"></DropDownListFieldSettings>
                </SfDropDownList>
            </FilterTemplate>
        </TreeGridForeignColumn>
    </TreeGridColumns>
</SfTreeGrid>

@code {
    private SfTreeGrid<TaskData> Grid;
    public List<TaskData> TreeData { get; set; }
    public List<EmployeeData> Employees { get; set; }
    public List<DropDownOption> FilterEmployees { get; set; }

    protected override void OnInitialized()
    {
        TreeData = GetTreeData();
        Employees = GetEmployeeData();
        FilterEmployees = new List<DropDownOption>
        {
            new DropDownOption() { EmployeeName = "All" },
            new DropDownOption() { EmployeeName = "Nancy Davolio" },
            new DropDownOption() { EmployeeName = "Andrew Fuller" },
            new DropDownOption() { EmployeeName = "Janet Leverling" }
        };
    }

    public async Task OnFilterChange(Syncfusion.Blazor.DropDowns.ChangeEventArgs<string, DropDownOption> args)
    {
        if (args.Value == "All" || args.Value == null)
        {
            await Grid.ClearFilteringAsync();
        }
        else
        {
            await Grid.FilterByColumnAsync("EmployeeId", "contains", args.Value);
        }
    }

    public List<TaskData> GetTreeData()
    {
        List<TaskData> data = new List<TaskData>();
        data.Add(new TaskData() { TaskId = 1, TaskName = "Project Initiation", EmployeeId = 1, Progress = 40, ParentId = null });
        data.Add(new TaskData() { TaskId = 2, TaskName = "Identify Site location", EmployeeId = 2, Progress = 30, ParentId = 1 });
        return data;
    }

    public List<EmployeeData> GetEmployeeData()
    {
        List<EmployeeData> employees = new List<EmployeeData>();
        employees.Add(new EmployeeData() { EmployeeId = 1, EmployeeName = "Nancy Davolio" });
        employees.Add(new EmployeeData() { EmployeeId = 2, EmployeeName = "Andrew Fuller" });
        employees.Add(new EmployeeData() { EmployeeId = 3, EmployeeName = "Janet Leverling" });
        return employees;
    }

    public class TaskData
    {
        public int TaskId { get; set; }
        public string TaskName { get; set; }
        public int EmployeeId { get; set; }
        public int Progress { get; set; }
        public int? ParentId { get; set; }
    }

    public class EmployeeData
    {
        public int EmployeeId { get; set; }
        public string EmployeeName { get; set; }
    }

    public class DropDownOption
    {
        public string EmployeeName { get; set; }
    }
}
```

### Hierarchy mode support

Foreign key column filtering respects the [HierarchyMode](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.TreeGrid.TreeGridFilterSettings.html#Syncfusion_Blazor_TreeGrid_TreeGridFilterSettings_HierarchyMode) setting. The hierarchy modes control how filtering applies to parent and child rows:

* **None** – Filter applies to the filtered row only
* **Parent** – Filter includes parent rows  
* **Child** – Filter includes child rows
* **Both** – Filter includes both parent and child rows

```cshtml
<TreeGridFilterSettings Type="Syncfusion.Blazor.TreeGrid.FilterType.Menu" HierarchyMode="Syncfusion.Blazor.TreeGrid.FilterHierarchyMode.Both"></TreeGridFilterSettings>
```

## Sorting foreign key columns

Foreign key columns are sorted by **display text** (the [ForeignKeyValue](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.TreeGrid.TreeGridColumn.html#Syncfusion_Blazor_TreeGrid_TreeGridColumn_ForeignKeyValue) property), not by the raw key. This ensures that sort order is meaningful and user-friendly.

Multi-column sorting works with the last directive as the primary sort key. Hierarchy mode respects the [HierarchyMode](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.TreeGrid.TreeGridSortSettings.html#Syncfusion_Blazor_TreeGrid_TreeGridSortSettings_HierarchyMode) setting on the sort settings.

```cshtml
@using Syncfusion.Blazor.TreeGrid

<SfTreeGrid DataSource="@TreeData" IdMapping="TaskId" ParentIdMapping="ParentId" TreeColumnIndex="1" AllowSorting="true">
    <TreeGridSortSettings>
        <TreeGridSortColumn Field="EmployeeId" Direction="Syncfusion.Blazor.Grids.SortDirection.Ascending"></TreeGridSortColumn>
    </TreeGridSortSettings>
    <TreeGridColumns>
        <TreeGridColumn Field="TaskId" HeaderText="Task ID" Width="80"></TreeGridColumn>
        <TreeGridColumn Field="TaskName" HeaderText="Task Name" Width="160"></TreeGridColumn>
        <TreeGridForeignColumn Field="EmployeeId" HeaderText="Employee Name" ForeignKeyValue="EmployeeName" ForeignDataSource="@Employees" Width="150" AllowSorting="true"></TreeGridForeignColumn>
    </TreeGridColumns>
</SfTreeGrid>
```

Rows are sorted alphabetically by employee name, providing an intuitive sort order.

## Search in foreign key columns

The toolbar search feature in the TreeGrid supports searching against foreign key columns. When you type text in the search box, the query is matched against the **display text** (the resolved foreign key value) and automatically translated to a key-based filter.

Hierarchy modes are respected during the search operation, allowing filtered results to include parent and child rows based on the [HierarchyMode](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.TreeGrid.TreeGridSearchSettings.html#Syncfusion_Blazor_TreeGrid_TreeGridSearchSettings_HierarchyMode) setting.

```cshtml
@using Syncfusion.Blazor.TreeGrid

<SfTreeGrid DataSource="@TreeData" IdMapping="TaskId" ParentIdMapping="ParentId" TreeColumnIndex="1" Toolbar="@(new List<string>() { "Search" })">
    <TreeGridSearchSettings HierarchyMode="Syncfusion.Blazor.TreeGrid.FilterHierarchyMode.Both"></TreeGridSearchSettings>
    <TreeGridColumns>
        <TreeGridColumn Field="TaskId" HeaderText="Task ID" Width="80"></TreeGridColumn>
        <TreeGridColumn Field="TaskName" HeaderText="Task Name" Width="160"></TreeGridColumn>
        <TreeGridForeignColumn Field="EmployeeId" HeaderText="Employee Name" ForeignKeyValue="EmployeeName" ForeignDataSource="@Employees" Width="150"></TreeGridForeignColumn>
    </TreeGridColumns>
</SfTreeGrid>
```

Typing "Nancy" in the search box will find and display all tasks assigned to Nancy Davolio, with parent rows visible if child rows match.

## Exporting foreign key columns

When exporting the TreeGrid to **Excel**, **PDF**, or **CSV**, foreign key columns export the **display text** (the resolved foreign key value) at every hierarchy level, not the raw key. This ensures exported documents are readable and user-friendly.

```cshtml
@using Syncfusion.Blazor.TreeGrid

<SfTreeGrid DataSource="@TreeData" IdMapping="TaskId" ParentIdMapping="ParentId" TreeColumnIndex="1" Toolbar="@(new List<string>() { "ExcelExport", "PdfExport", "CsvExport" })">
    <TreeGridColumns>
        <TreeGridColumn Field="TaskId" HeaderText="Task ID" Width="80"></TreeGridColumn>
        <TreeGridColumn Field="TaskName" HeaderText="Task Name" Width="160"></TreeGridColumn>
        <TreeGridForeignColumn Field="EmployeeId" HeaderText="Employee Name" ForeignKeyValue="EmployeeName" ForeignDataSource="@Employees" Width="150"></TreeGridForeignColumn>
        <TreeGridColumn Field="Progress" HeaderText="Progress" Width="100"></TreeGridColumn>
    </TreeGridColumns>
</SfTreeGrid>
```

Exported files show employee names, making the data easily understandable without reference to the underlying keys.

## Selection

Selected records retain their raw key in the underlying data model. The cell display continues to show the resolved display text. This separation ensures that selections and programmatic access work correctly while maintaining the user-friendly display.

```cshtml
@using Syncfusion.Blazor.TreeGrid

<SfTreeGrid @ref="Grid" DataSource="@TreeData" IdMapping="TaskId" ParentIdMapping="ParentId" TreeColumnIndex="1" AllowSelection="true">
    <TreeGridSelectionSettings Type="SelectionType.Multiple" Mode="SelectionMode.Row"></TreeGridSelectionSettings>
    <TreeGridColumns>
        <TreeGridColumn Field="TaskId" HeaderText="Task ID" Width="80"></TreeGridColumn>
        <TreeGridColumn Field="TaskName" HeaderText="Task Name" Width="160"></TreeGridColumn>
        <TreeGridForeignColumn Field="EmployeeId" HeaderText="Employee Name" ForeignKeyValue="EmployeeName" ForeignDataSource="@Employees" Width="150"></TreeGridForeignColumn>
    </TreeGridColumns>
</SfTreeGrid>

@code {
    private SfTreeGrid<TaskData> Grid;

    public async Task GetSelectedRows()
    {
        var selectedRecords = await Grid.GetSelectedRecordsAsync();
        // selectedRecords contain raw key values (EmployeeId: 1, 2, 3, etc.)
        // but cells display employee names
    }
}
```

## Paging with foreign key columns

Foreign key columns work seamlessly with [pagination](../paging.md). The resolved display text persists on the current page, and pagination occurs over the raw keys. When navigating between pages, the foreign data source cache is used to resolve display values for visible rows.

```cshtml
@using Syncfusion.Blazor.TreeGrid

<SfTreeGrid DataSource="@TreeData" IdMapping="TaskId" ParentIdMapping="ParentId" TreeColumnIndex="1" AllowPaging="true">
    <TreeGridPageSettings PageSize="10"></TreeGridPageSettings>
    <TreeGridColumns>
        <TreeGridColumn Field="TaskId" HeaderText="Task ID" Width="80"></TreeGridColumn>
        <TreeGridColumn Field="TaskName" HeaderText="Task Name" Width="160"></TreeGridColumn>
        <TreeGridForeignColumn Field="EmployeeId" HeaderText="Employee Name" ForeignKeyValue="EmployeeName" ForeignDataSource="@Employees" Width="150"></TreeGridForeignColumn>
    </TreeGridColumns>
</SfTreeGrid>
```

## Virtualization support

Foreign key columns are fully compatible with [virtual scrolling](../virtualization.md). The cell display text resolution is performed per-cell and does not block the virtual window, ensuring smooth scrolling performance even with large data sets.

```cshtml
@using Syncfusion.Blazor.TreeGrid

<SfTreeGrid DataSource="@TreeData" IdMapping="TaskId" ParentIdMapping="ParentId" TreeColumnIndex="1" EnableVirtualization="true">
    <TreeGridColumns>
        <TreeGridColumn Field="TaskId" HeaderText="Task ID" Width="80"></TreeGridColumn>
        <TreeGridColumn Field="TaskName" HeaderText="Task Name" Width="160"></TreeGridColumn>
        <TreeGridForeignColumn Field="EmployeeId" HeaderText="Employee Name" ForeignKeyValue="EmployeeName" ForeignDataSource="@Employees" Width="150"></TreeGridForeignColumn>
    </TreeGridColumns>
</SfTreeGrid>
```

## Observable data source

When the [ForeignDataSource](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.TreeGrid.TreeGridForeignColumn-1.html#Syncfusion_Blazor_TreeGrid_TreeGridForeignColumn_1_ForeignDataSource) implements [INotifyCollectionChanged](https://learn.microsoft.com/en-us/dotnet/api/system.collections.specialized.inotifycollectionchanged) (such as `ObservableCollection<T>`), changes to the collection automatically invalidate the foreign key cache and refresh the visible cells. This enables dynamic updates to foreign data without manual cache management.

```cshtml
@using System.Collections.ObjectModel
@using Syncfusion.Blazor.TreeGrid

<SfTreeGrid DataSource="@TreeData" IdMapping="TaskId" ParentIdMapping="ParentId" TreeColumnIndex="1">
    <TreeGridColumns>
        <TreeGridColumn Field="TaskId" HeaderText="Task ID" Width="80"></TreeGridColumn>
        <TreeGridColumn Field="TaskName" HeaderText="Task Name" Width="160"></TreeGridColumn>
        <TreeGridForeignColumn Field="EmployeeId" HeaderText="Employee Name" ForeignKeyValue="EmployeeName" ForeignDataSource="@Employees" Width="150"></TreeGridForeignColumn>
    </TreeGridColumns>
</SfTreeGrid>

@code {
    public List<TaskData> TreeData { get; set; }
    public ObservableCollection<EmployeeData> Employees { get; set; }

    protected override void OnInitialized()
    {
        TreeData = GetTreeData();
        Employees = new ObservableCollection<EmployeeData>(GetEmployeeData());
    }

    public void AddEmployee()
    {
        // Adding to ObservableCollection automatically invalidates the cache
        Employees.Add(new EmployeeData() { EmployeeId = 6, EmployeeName = "Michael Suyama" });
    }
}
```

## Programmatic API

### Refresh foreign key data

Use the [RefreshForeignKeyDataAsync](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.TreeGrid.SfTreeGrid-1.html#Syncfusion_Blazor_TreeGrid_SfTreeGrid_1_RefreshForeignKeyDataAsync_System_String_) method to rebuild the cache from the current `ForeignDataSource` and refresh visible cells:

```cshtml
@using Syncfusion.Blazor.TreeGrid

<SfTreeGrid @ref="Grid" DataSource="@TreeData" IdMapping="TaskId" ParentIdMapping="ParentId" TreeColumnIndex="1">
    <TreeGridColumns>
        <TreeGridColumn Field="TaskId" HeaderText="Task ID" Width="80"></TreeGridColumn>
        <TreeGridForeignColumn Field="EmployeeId" HeaderText="Employee Name" ForeignKeyValue="EmployeeName" ForeignDataSource="@Employees" Width="150"></TreeGridForeignColumn>
    </TreeGridColumns>
</SfTreeGrid>

<button @onclick="RefreshForeignKeyData">Refresh Foreign Key Data</button>

@code {
    private SfTreeGrid<TaskData> Grid;

    public async Task RefreshForeignKeyData()
    {
        await Grid.RefreshForeignKeyDataAsync("EmployeeId");
    }
}
```

### Set foreign data source

Use the [SetForeignDataSourceAsync](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.TreeGrid.SfTreeGrid-1.html#Syncfusion_Blazor_TreeGrid_SfTreeGrid_1_SetForeignDataSourceAsync_System_String_System_Collections_IEnumerable_) method to replace the `ForeignDataSource`, rebuild the cache, and refresh cells. This method is cancellable via the `ForeignDataSourceChanging` event:

```cshtml
@using Syncfusion.Blazor.TreeGrid

<SfTreeGrid @ref="Grid" DataSource="@TreeData" IdMapping="TaskId" ParentIdMapping="ParentId" TreeColumnIndex="1">
    <TreeGridEvents OnForeignDataSourceChanging="OnForeignDataSourceChanging"></TreeGridEvents>
    <TreeGridColumns>
        <TreeGridColumn Field="TaskId" HeaderText="Task ID" Width="80"></TreeGridColumn>
        <TreeGridForeignColumn Field="EmployeeId" HeaderText="Employee Name" ForeignKeyValue="EmployeeName" ForeignDataSource="@Employees" Width="150"></TreeGridForeignColumn>
    </TreeGridColumns>
</SfTreeGrid>

<button @onclick="UpdateForeignDataSource">Update Foreign Data Source</button>

@code {
    private SfTreeGrid<TaskData> Grid;
    public List<EmployeeData> Employees { get; set; }

    public async Task UpdateForeignDataSource()
    {
        var newEmployees = new List<EmployeeData>
        {
            new EmployeeData() { EmployeeId = 10, EmployeeName = "New Employee" }
        };
        await Grid.SetForeignDataSourceAsync("EmployeeId", newEmployees);
    }

    public void OnForeignDataSourceChanging(Syncfusion.Blazor.TreeGrid.ForeignDataSourceChangingEventArgs args)
    {
        // args.Cancel = true to cancel the operation
    }
}
```

### Clear foreign key cache

Use the [ClearForeignKeyCacheAsync](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.TreeGrid.SfTreeGrid-1.html#Syncfusion_Blazor_TreeGrid_SfTreeGrid_1_ClearForeignKeyCacheAsync_System_String_) method to clear the cache for a specific field. The cache is rebuilt lazily on the next lookup:

```cshtml
public async Task ClearCache()
{
    await Grid.ClearForeignKeyCacheAsync("EmployeeId");
    // Next lookup will rebuild the cache from ForeignDataSource
}
```

### Get display value

Use the [GetDisplayValueAsync](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.TreeGrid.SfTreeGrid-1.html#Syncfusion_Blazor_TreeGrid_SfTreeGrid_1_GetDisplayValueAsync_System_String_System_Object_) method to perform an async lookup of the display text for a given key:

```cshtml
@using Syncfusion.Blazor.TreeGrid

<SfTreeGrid @ref="Grid" DataSource="@TreeData" IdMapping="TaskId" ParentIdMapping="ParentId" TreeColumnIndex="1">
    <TreeGridColumns>
        <TreeGridColumn Field="TaskId" HeaderText="Task ID" Width="80"></TreeGridColumn>
        <TreeGridForeignColumn Field="EmployeeId" HeaderText="Employee Name" ForeignKeyValue="EmployeeName" ForeignDataSource="@Employees" Width="150"></TreeGridForeignColumn>
    </TreeGridColumns>
</SfTreeGrid>

<button @onclick="ShowEmployeeName">Show Employee Name for ID 1</button>
<p>@DisplayMessage</p>

@code {
    private SfTreeGrid<TaskData> Grid;
    public string DisplayMessage { get; set; }

    public async Task ShowEmployeeName()
    {
        var displayText = await Grid.GetDisplayValueAsync("EmployeeId", 1);
        DisplayMessage = $"Employee Name: {displayText}";
    }
}
```

### Get cached record

Use the [GetCachedValueAsync](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.TreeGrid.SfTreeGrid-1.html#Syncfusion_Blazor_TreeGrid_SfTreeGrid_1_GetCachedValueAsync__1_System_String_System_Object_) method to perform an async lookup of the full foreign record by key:

```cshtml
public async Task GetEmployeeRecord()
{
    var employeeRecord = await Grid.GetCachedValueAsync<EmployeeData>("EmployeeId", 1);
    // employeeRecord contains the full EmployeeData object
}
```

## Events

### ForeignDataSourceChanging

The [ForeignDataSourceChanging](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.TreeGrid.TreeGridEvents-1.html#Syncfusion_Blazor_TreeGrid_TreeGridEvents_1_OnForeignDataSourceChanging) event fires before the `ForeignDataSource` is replaced and can be cancelled:

```cshtml
<TreeGridEvents OnForeignDataSourceChanging="OnForeignDataSourceChanging"></TreeGridEvents>

@code {
    public void OnForeignDataSourceChanging(Syncfusion.Blazor.TreeGrid.ForeignDataSourceChangingEventArgs args)
    {
        if (/* some condition */)
        {
            args.Cancel = true; // Cancel the operation
        }
    }
}
```

### ForeignDataSourceChanged

The [ForeignDataSourceChanged](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.TreeGrid.TreeGridEvents-1.html#Syncfusion_Blazor_TreeGrid_TreeGridEvents_1_OnForeignDataSourceChanged) event fires after the cache is rebuilt and cells are refreshed:

```cshtml
<TreeGridEvents OnForeignDataSourceChanged="OnForeignDataSourceChanged"></TreeGridEvents>

@code {
    public void OnForeignDataSourceChanged(Syncfusion.Blazor.TreeGrid.ForeignDataSourceChangedEventArgs args)
    {
        Console.WriteLine($"Foreign data source changed for field: {args.Field}");
    }
}
```

## Known limitations

* Foreign key columns do not support [grouping](../grouping.md).
* Complex field paths (e.g., `Employee.Name`) are not supported in foreign key columns.

## See also

* [Columns](./column.md)
* [Column Templates](./column-template.md)
* [Filtering](./filter.md)
* [Sorting](./sorting.md)
* [Editing](../editing.md)
* [Exporting](../exporting.md)
