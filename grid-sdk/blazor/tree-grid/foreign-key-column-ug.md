---
layout: post
title: Blazor TreeGrid - Foreign Key Column User Guide | Syncfusion
title: Blazor TreeGrid Foreign Key Column User Guide
description: Comprehensive user guide for implementing Foreign Key Columns in Blazor TreeGrid. Learn configuration, data binding, editing, filtering, sorting, and advanced scenarios.
control: TreeGrid Foreign Key Column
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Foreign Key Column in Blazor TreeGrid - User Guide

## Overview

The Foreign Key Column feature in Syncfusion Blazor TreeGrid enables you to display meaningful data from a lookup collection instead of raw key values. This user guide provides comprehensive coverage of implementing and managing Foreign Key Columns across various TreeGrid operations including editing, filtering, sorting, and exporting.

**Key Capabilities:**
- Display related data from lookup collections
- Automatic cache management with observable sources
- Seamless editing with dropdown editors
- Smart filtering and sorting by display text
- Multi-level hierarchy support
- Export with display values
- Performance-optimized with virtualization support

---

## Prerequisites

Before implementing Foreign Key Columns, ensure you have:

1. **Blazor TreeGrid Setup**: A working Syncfusion Blazor TreeGrid component
2. **Understanding of Column Types**: Familiarity with TreeGrid column configuration
3. **IEnumerable Data Sources**: Access to lookup collections
4. **Async/Await Patterns**: Understanding of Blazor async operations

### Required Namespaces

```csharp
using Syncfusion.Blazor.TreeGrid;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Threading.Tasks;
```

---

## Basic Configuration

### TreeGridForeignColumn Class

The `TreeGridForeignColumn` is a specialized column type that inherits from `TreeGridColumn` and provides foreign key resolution capabilities.

#### Essential Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `Field` | `string` | Required | The key field on the row data that contains the foreign key identifier |
| `ForeignDataSource` | `IEnumerable?` | null | The lookup collection used to resolve display values. Supports any `IEnumerable`; `ObservableCollection` automatically invalidates cache on changes |
| `ForeignKeyField` | `string?` | Defaults to `Field` | The property name in `ForeignDataSource` that matches the key field. If not specified, uses the `Field` value |
| `ForeignKeyValue` | `string?` | null | The property name in `ForeignDataSource` that contains the display text to render in cells |
| `MissingValueText` | `string?` | Raw key as string | The text displayed when a foreign key has no matching record in the lookup collection |

#### Basic Column Declaration

```razor
<TreeGridForeignColumn Field="CategoryID" 
                       HeaderText="Category" 
                       ForeignDataSource="Categories" 
                       ForeignKeyField="CategoryID" 
                       ForeignKeyValue="CategoryName" 
                       MissingValueText="[Unknown]">
</TreeGridForeignColumn>
```

---

## Data Source Configuration

### Setting Up Foreign Data Sources

#### Using ObservableCollection (Recommended)

`ObservableCollection` provides automatic cache invalidation when items are added, removed, or modified:

```csharp
@code {
    private ObservableCollection<Category> Categories { get; set; }
    private List<Product> TreeGridData { get; set; }

    protected override async Task OnInitializedAsync()
    {
        Categories = new ObservableCollection<Category>
        {
            new Category { CategoryID = 1, CategoryName = "Electronics" },
            new Category { CategoryID = 2, CategoryName = "Furniture" },
            new Category { CategoryID = 3, CategoryName = "Clothing" }
        };

        TreeGridData = new List<Product>
        {
            new Product { ProductID = 1, CategoryID = 1, ProductName = "Laptop" },
            new Product { ProductID = 2, CategoryID = 2, ProductName = "Chair" },
            new Product { ProductID = 3, CategoryID = 3, ProductName = "Shirt" }
        };
    }

    public class Category
    {
        public int CategoryID { get; set; }
        public string CategoryName { get; set; }
    }

    public class Product
    {
        public int ProductID { get; set; }
        public int CategoryID { get; set; }
        public string ProductName { get; set; }
    }
}
```

#### Using List<T>

Standard lists work but do not trigger automatic cache updates when data changes:

```csharp
private List<Category> Categories { get; set; } = new List<Category>
{
    new Category { CategoryID = 1, CategoryName = "Electronics" },
    new Category { CategoryID = 2, CategoryName = "Furniture" }
};
```

#### Using Dictionary or Custom IEnumerable

Any collection implementing `IEnumerable` is supported:

```csharp
private Dictionary<int, string> Categories { get; set; } = new()
{
    { 1, "Electronics" },
    { 2, "Furniture" }
};
```

---

## Cell Rendering

### Display Behavior

When a cell with a foreign key is rendered, the TreeGrid displays the resolved display text instead of the raw key:

```razor
<!-- The CategoryID field contains: 1 -->
<!-- TreeGrid displays: Electronics (resolved from ForeignDataSource) -->
<TreeGridForeignColumn Field="CategoryID" 
                       ForeignDataSource="Categories" 
                       ForeignKeyField="CategoryID" 
                       ForeignKeyValue="CategoryName">
</TreeGridForeignColumn>
```

### Handling Missing Values

When a foreign key has no matching record in the lookup collection:

```razor
<!-- CategoryID = 99 (no matching record in Categories) -->
<!-- Displays: [Unknown] (uses MissingValueText) -->
<TreeGridForeignColumn Field="CategoryID" 
                       ForeignDataSource="Categories" 
                       ForeignKeyField="CategoryID" 
                       ForeignKeyValue="CategoryName"
                       MissingValueText="[Unknown Category]">
</TreeGridForeignColumn>

<!-- If MissingValueText is not set, displays the raw key as string: "99" -->
```

### Hierarchy Level Rendering

The display text is shown at every hierarchy level consistently:

```razor
<SfTreeGrid DataSource="TreeGridData" IdMapping="ProductID" ParentIdMapping="ParentID">
    <TreeGridColumns>
        <TreeGridColumn Field="ProductID" HeaderText="ID" Width="80"></TreeGridColumn>
        <!-- Foreign key display at all hierarchy levels -->
        <TreeGridForeignColumn Field="CategoryID" 
                               HeaderText="Category"
                               ForeignDataSource="Categories" 
                               ForeignKeyField="CategoryID" 
                               ForeignKeyValue="CategoryName">
        </TreeGridForeignColumn>
    </TreeGridColumns>
</SfTreeGrid>
```

---

## Editing Foreign Key Columns

### Default Editor Behavior

By default, foreign key columns render a dropdown editor (`SfDropDownList`) populated from the cache:

```razor
<SfTreeGrid DataSource="TreeGridData" AllowEditing="true">
    <TreeGridColumns>
        <TreeGridForeignColumn Field="CategoryID" 
                               HeaderText="Category"
                               ForeignDataSource="Categories" 
                               ForeignKeyField="CategoryID" 
                               ForeignKeyValue="CategoryName">
        </TreeGridForeignColumn>
    </TreeGridColumns>
</SfTreeGrid>
```

**Editor Behavior:**
- Opens a dropdown list with all values from `ForeignDataSource`
- Labels show display text (resolved from `ForeignKeyValue`)
- Values are the raw keys (from `ForeignKeyField`)
- Stores the selected raw key in the cell
- Never stores the display text

### New Row Initialization

When creating a new row, the foreign key field is automatically seeded with the first key from the `ForeignDataSource`:

```csharp
// If ForeignDataSource = [{ CategoryID: 1, CategoryName: "Electronics" }, ...]
// New row will have CategoryID = 1 (first item's key)
// Displays as "Electronics"
```

To customize the default value, use the `DefaultValue` property:

```razor
<TreeGridForeignColumn Field="CategoryID" 
                       HeaderText="Category"
                       ForeignDataSource="Categories" 
                       ForeignKeyField="CategoryID" 
                       ForeignKeyValue="CategoryName"
                       DefaultValue="2">
</TreeGridForeignColumn>

<!-- New rows will default to CategoryID = 2 (Furniture) -->
```

---

## Filtering Foreign Key Columns

### Filter Menu Behavior

When filtering is enabled, the filter UI displays foreign key values (display text) rather than raw keys:

```razor
<SfTreeGrid DataSource="TreeGridData" AllowFiltering="true">
    <TreeGridFilterSettings Type="FilterType.Menu"></TreeGridFilterSettings>
    <TreeGridColumns>
        <TreeGridForeignColumn Field="CategoryID" 
                               HeaderText="Category"
                               ForeignDataSource="Categories" 
                               ForeignKeyField="CategoryID" 
                               ForeignKeyValue="CategoryName">
        </TreeGridForeignColumn>
    </TreeGridColumns>
</SfTreeGrid>
```

**Filter Behavior:**
- User types or selects display text (e.g., "Electronics")
- TreeGrid translates to the matching raw key (1)
- Filter is applied on the raw key value
- Results display with resolved display text

### Checkbox Filter

The checkbox filter shows display text labels:

```razor
<TreeGridFilterSettings Type="FilterType.CheckBox"></TreeGridFilterSettings>

<!-- Displays options like: -->
<!-- [x] Electronics -->
<!-- [x] Furniture -->
<!-- [x] Clothing -->

<!-- Internally stores/filters on raw keys: 1, 2, 3 -->
```

### Hierarchy Mode Compliance

Foreign key filtering respects the configured hierarchy mode:

```csharp
// TreeGridFilterSettings.HierarchyMode options:
// - None:   Show only matching records
// - Parent: Show matching records + all parents
// - Child:  Show matching records + all children
// - Both:   Show matching records + parents + children

<TreeGridFilterSettings HierarchyMode="FilterHierarchyMode.Both"></TreeGridFilterSettings>
```

---

## Sorting Foreign Key Columns

### Sort Behavior

Rows are sorted by the **display text**, not by the raw key:

```razor
<!-- Clicking column header sorts by CategoryName ("Clothing", "Electronics", "Furniture") -->
<!-- Not by CategoryID (1, 2, 3) -->
<TreeGridForeignColumn Field="CategoryID" 
                       HeaderText="Category"
                       ForeignDataSource="Categories" 
                       ForeignKeyField="CategoryID" 
                       ForeignKeyValue="CategoryName"
                       AllowSorting="true">
</TreeGridForeignColumn>
```

### Multi-Column Sorting

When sorting by multiple columns, the **last directive becomes the primary sort key**:

```csharp
// User clicks: CategoryID (ascending), then ProductName (descending)
// Primary sort: ProductName (descending) <- most recent
// Secondary sort: CategoryID (ascending)

// Foreign key columns are sorted by display text
// Regular columns are sorted by their field values
```

---

## Searching

### Search Behavior

Toolbar search matches text against the **display text** of foreign key columns:

```razor
<TreeGridToolbar>
    <TreeGridToolbarItem Type="ToolbarItemType.Search"></TreeGridToolbarItem>
</TreeGridToolbar>

<SfTreeGrid DataSource="TreeGridData" AllowSearching="true">
    <TreeGridColumns>
        <TreeGridForeignColumn Field="CategoryID" 
                               HeaderText="Category"
                               ForeignDataSource="Categories" 
                               ForeignKeyField="CategoryID" 
                               ForeignKeyValue="CategoryName">
        </TreeGridForeignColumn>
    </TreeGridColumns>
</SfTreeGrid>

<!-- User search: "Electronics" -->
<!-- TreeGrid matches against CategoryName ("Electronics") -->
<!-- Translates to key-based filter (CategoryID = 1) -->
<!-- Custom adaptors that filter on raw keys work correctly -->
```

### Hierarchy Mode Support

Search respects the configured hierarchy mode:

```csharp
<TreeGridSearchSettings HierarchyMode="FilterHierarchyMode.Parent"></TreeGridSearchSettings>

// Search results include matching records and their parents
```

---

## Selection

### Selected Record Keys

Selected records retain the **raw key value** in the row data:

```csharp
var selectedRows = await TreeGridRef.GetSelectedRowsAsync();
// selectedRows[0].CategoryID = 1 (raw key, not "Electronics")

// But the cell still displays:
// "Electronics" (display text from ForeignKeyValue)
```

### Multi-Selection with Foreign Keys

When selecting multiple rows, each retains its raw key while displaying the associated text:

```razor
<SfTreeGrid @ref="TreeGridRef" 
            DataSource="TreeGridData" 
            SelectionSettings="new TreeGridSelectionSettings { Type = SelectionType.Multiple }">
    <TreeGridColumns>
        <TreeGridForeignColumn Field="CategoryID" 
                               ForeignDataSource="Categories" 
                               ForeignKeyField="CategoryID" 
                               ForeignKeyValue="CategoryName">
        </TreeGridForeignColumn>
    </TreeGridColumns>
</SfTreeGrid>
```

---

## Exporting

### Excel/PDF/CSV Export

When exporting, TreeGrid writes the **display text** (not the raw key) at every hierarchy level:

```csharp
await TreeGridRef.ExcelExportAsync();
// Exported cells show: "Electronics", "Furniture", "Clothing"
// Not: 1, 2, 3

await TreeGridRef.PdfExportAsync();
// Same behavior: display text exported

await TreeGridRef.CsvExportAsync();
// Same behavior: display text exported
```

### Export with Custom Columns

Ensure foreign key columns are included in the export configuration:

```csharp
var excelExportProperties = new ExcelExportProperties
{
    IncludeHiddenColumns = false
};

// Export includes all visible foreign key columns with display text
await TreeGridRef.ExcelExportAsync(excelExportProperties);
```

---

## Paging

### Page Persistence

Foreign key display text persists correctly on the current page:

```razor
<SfTreeGrid DataSource="TreeGridData" AllowPaging="true" PageSettings="new TreeGridPageSettings { PageSize = 10 }">
    <TreeGridColumns>
        <TreeGridForeignColumn Field="CategoryID" 
                               ForeignDataSource="Categories" 
                               ForeignKeyField="CategoryID" 
                               ForeignKeyValue="CategoryName">
        </TreeGridForeignColumn>
    </TreeGridColumns>
</SfTreeGrid>

<!-- Page 1: Shows rows 1-10 with resolved display text -->
<!-- Page 2: Shows rows 11-20 with resolved display text -->
<!-- Paging is over keys, not display text -->
```

---

## Virtualization

### Virtual Scrolling Compatibility

Foreign key columns work seamlessly with virtual scrolling:

```razor
<SfTreeGrid DataSource="VirtualTreeGridData" EnableVirtualization="true">
    <TreeGridColumns>
        <TreeGridForeignColumn Field="CategoryID" 
                               ForeignDataSource="Categories" 
                               ForeignKeyField="CategoryID" 
                               ForeignKeyValue="CategoryName">
        </TreeGridForeignColumn>
    </TreeGridColumns>
</SfTreeGrid>

// Cell display text resolution is per-cell and does not block
// the virtual window from scrolling efficiently
```

---

## Observable Data Sources

### Auto-Invalidation with ObservableCollection

When using `ObservableCollection` for `ForeignDataSource`, changes automatically invalidate the cache:

```csharp
@code {
    private ObservableCollection<Category> Categories { get; set; }

    protected override async Task OnInitializedAsync()
    {
        Categories = new ObservableCollection<Category>
        {
            new Category { CategoryID = 1, CategoryName = "Electronics" },
            new Category { CategoryID = 2, CategoryName = "Furniture" }
        };
    }

    private async Task AddNewCategory()
    {
        // This triggers INotifyCollectionChanged
        Categories.Add(new Category { CategoryID = 3, CategoryName = "Clothing" });
        
        // Cache is automatically invalidated
        // Cells are refreshed to include new category
    }
}
```

### Manual Cache Management

For non-observable sources, manually refresh the cache:

```csharp
// After modifying Categories list
await TreeGridRef.RefreshForeignKeyDataAsync("CategoryID");

// Or clear and rebuild cache lazily
await TreeGridRef.ClearForeignKeyCacheAsync("CategoryID");
```

---

## Cache Management

### Cache Lifetime

The foreign key cache is:
- **Built** on column initialization
- **Rebuilt** on `ForeignDataSource` change
- **Invalidated** on `INotifyCollectionChanged` event
- **Cleared** via explicit `ClearForeignKeyCacheAsync()`
- **Disposed** with the column

### RefreshForeignKeyDataAsync Method

Rebuilds the entire cache from the current `ForeignDataSource` and refreshes visible cells:

```csharp
// Signature
Task RefreshForeignKeyDataAsync(string field)

// Usage
await TreeGridRef.RefreshForeignKeyDataAsync("CategoryID");
```

**When to Use:**
- After directly modifying a non-observable `ForeignDataSource` list
- To ensure display text is updated immediately
- When external data changes need to be reflected

### SetForeignDataSourceAsync Method

Replaces the `ForeignDataSource` for a column, rebuilds the cache, and refreshes cells:

```csharp
// Signature
Task SetForeignDataSourceAsync(string field, IEnumerable? dataSource)

// Usage
var newCategories = new List<Category>
{
    new Category { CategoryID = 10, CategoryName = "New Category" }
};

await TreeGridRef.SetForeignDataSourceAsync("CategoryID", newCategories);
```

**Features:**
- Replaces the entire lookup collection
- Rebuilds cache from new source
- Refreshes all cells in the column
- Cancellable via `ForeignDataSourceChanging` event

### ClearForeignKeyCacheAsync Method

Clears the cache for a specific field. The cache is rebuilt lazily on the next cell lookup:

```csharp
// Signature
Task ClearForeignKeyCacheAsync(string field)

// Usage
await TreeGridRef.ClearForeignKeyCacheAsync("CategoryID");

// Next cell lookup triggers cache rebuild
```

---

## Methods and APIs

### GetDisplayValueAsync Method

Performs an asynchronous lookup to get the display text for a given foreign key:

```csharp
// Signature
Task<string> GetDisplayValueAsync(string field, object? key)

// Usage
var displayText = await TreeGridRef.GetDisplayValueAsync("CategoryID", 1);
// Returns: "Electronics"

var missingText = await TreeGridRef.GetDisplayValueAsync("CategoryID", 99);
// Returns: "[Unknown Category]" (or raw key "99" if MissingValueText not set)
```

### GetCachedValueAsync Method

Performs an asynchronous lookup of the foreign record (not just display text):

```csharp
// Signature
Task<TItem?> GetCachedValueAsync<TItem>(string field, object? key)

// Usage
var category = await TreeGridRef.GetCachedValueAsync<Category>("CategoryID", 1);
// Returns: Category { CategoryID = 1, CategoryName = "Electronics" }

var missing = await TreeGridRef.GetCachedValueAsync<Category>("CategoryID", 99);
// Returns: null
```

---

## Events

### ForeignDataSourceChanging Event

Fired **before** the `ForeignDataSource` is replaced (via `SetForeignDataSourceAsync`).

```csharp
// Signature
EventCallback<ForeignDataSourceChangingEventArgs> ForeignDataSourceChanging

// Event Args
public class ForeignDataSourceChangingEventArgs
{
    public string FieldName { get; set; }                // Column field
    public IEnumerable NewDataSource { get; set; }       // New data source
    public bool Cancel { get; set; }                     // Set to true to cancel
}
```

**Usage - Cancel the Change:**

```razor
<TreeGridForeignColumn Field="CategoryID" 
                       ForeignDataSourceChanging="OnForeignDataSourceChanging">
</TreeGridForeignColumn>

@code {
    private async Task OnForeignDataSourceChanging(ForeignDataSourceChangingEventArgs args)
    {
        if (args.NewDataSource == null)
        {
            args.Cancel = true;  // Prevent null data source
        }
    }
}
```

### ForeignDataSourceChanged Event

Fired **after** the cache is rebuilt and cells are refreshed following a `ForeignDataSource` change.

```csharp
// Signature
EventCallback<ForeignDataSourceChangedEventArgs> ForeignDataSourceChanged

// Event Args
public class ForeignDataSourceChangedEventArgs
{
    public string FieldName { get; set; }                // Column field
    public IEnumerable DataSource { get; set; }          // New data source
}
```

**Usage - Log Change:**

```razor
<TreeGridForeignColumn Field="CategoryID" 
                       ForeignDataSourceChanged="OnForeignDataSourceChanged">
</TreeGridForeignColumn>

@code {
    private async Task OnForeignDataSourceChanged(ForeignDataSourceChangedEventArgs args)
    {
        Console.WriteLine($"Foreign data source changed for {args.FieldName}");
        // Perform post-change operations
    }
}
```

---

## Advanced Scenarios

### Multiple Foreign Key Columns

TreeGrid supports multiple foreign key columns in a single component:

```razor
<SfTreeGrid DataSource="TreeGridData">
    <TreeGridColumns>
        <TreeGridColumn Field="ProductID" HeaderText="ID"></TreeGridColumn>
        
        <TreeGridForeignColumn Field="CategoryID" 
                               HeaderText="Category"
                               ForeignDataSource="Categories" 
                               ForeignKeyField="CategoryID" 
                               ForeignKeyValue="CategoryName">
        </TreeGridForeignColumn>
        
        <TreeGridForeignColumn Field="SupplierID" 
                               HeaderText="Supplier"
                               ForeignDataSource="Suppliers" 
                               ForeignKeyField="SupplierID" 
                               ForeignKeyValue="SupplierName">
        </TreeGridForeignColumn>
        
        <TreeGridForeignColumn Field="StatusID" 
                               HeaderText="Status"
                               ForeignDataSource="Statuses" 
                               ForeignKeyField="StatusID" 
                               ForeignKeyValue="StatusName">
        </TreeGridForeignColumn>
    </TreeGridColumns>
</SfTreeGrid>

@code {
    private List<Category> Categories { get; set; }
    private List<Supplier> Suppliers { get; set; }
    private List<Status> Statuses { get; set; }
}
```

### Cascading Foreign Keys

Create dependent foreign key columns where one foreign key's lookup collection depends on another:

```razor
@code {
    private List<Category> Categories { get; set; }
    private List<Subcategory> AllSubcategories { get; set; }
    private List<Subcategory> FilteredSubcategories { get; set; }

    private async Task OnCategoryChanged(int categoryId)
    {
        // Filter subcategories based on selected category
        FilteredSubcategories = AllSubcategories
            .Where(s => s.CategoryID == categoryId)
            .ToList();

        // Refresh the foreign key cache for subcategory column
        await TreeGridRef.SetForeignDataSourceAsync("SubcategoryID", FilteredSubcategories);
    }
}
```

```razor
<SfTreeGrid @ref="TreeGridRef" DataSource="TreeGridData">
    <TreeGridColumns>
        <TreeGridForeignColumn Field="CategoryID" 
                               HeaderText="Category"
                               ForeignDataSource="Categories" 
                               ForeignKeyField="CategoryID" 
                               ForeignKeyValue="CategoryName"
                               IsPrimaryKey="false">
        </TreeGridForeignColumn>
        
        <TreeGridForeignColumn Field="SubcategoryID" 
                               HeaderText="Subcategory"
                               ForeignDataSource="FilteredSubcategories" 
                               ForeignKeyField="SubcategoryID" 
                               ForeignKeyValue="SubcategoryName">
        </TreeGridForeignColumn>
    </TreeGridColumns>
</SfTreeGrid>
```

---

## Performance Optimization

### Best Practices

**1. Use ObservableCollection for Dynamic Data:**
```csharp
// ✓ Good - Auto-invalidates cache on changes
private ObservableCollection<Category> Categories { get; set; }

// ✗ Less efficient - Manual cache refresh required
private List<Category> Categories { get; set; }
```

**2. Set ForeignKeyField Only When Different from Field:**
```csharp
// ✓ Efficient - ForeignKeyField defaults to Field
<TreeGridForeignColumn Field="CategoryID" 
                       ForeignDataSource="Categories">

// ✓ Also fine - Explicit when different
<TreeGridForeignColumn Field="CategoryID" 
                       ForeignKeyField="CatID"
                       ForeignDataSource="Categories">
```

**3. Leverage Async Methods:**
```csharp
// ✓ Good - Non-blocking
var value = await TreeGridRef.GetDisplayValueAsync("CategoryID", 1);

// ✗ Avoid - Blocking operations in UI thread
var syncValue = GetDisplayValueSync("CategoryID", 1);
```

**4. Use Virtualization for Large Datasets:**
```razor
// ✓ Efficient for large TreeGridData
<SfTreeGrid DataSource="LargeDataSet" EnableVirtualization="true">
</SfTreeGrid>
```

**5. Minimize Foreign Data Sources Size:**
```csharp
// ✓ Good - Small lookup tables
private List<Category> Categories { get; set; } = new() { ... };

// ✗ Inefficient - Loading entire database into memory
private List<Category> Categories { get; set; } = LoadAllCategories();
```

---

## Troubleshooting

### Issue: Display Text Shows Raw Key

**Cause:** `ForeignKeyValue` property not set or incorrect property name.

**Solution:**
```razor
<!-- ✗ Wrong - ForeignKeyValue missing -->
<TreeGridForeignColumn Field="CategoryID" 
                       ForeignDataSource="Categories">
</TreeGridForeignColumn>

<!-- ✓ Correct -->
<TreeGridForeignColumn Field="CategoryID" 
                       ForeignDataSource="Categories"
                       ForeignKeyField="CategoryID"
                       ForeignKeyValue="CategoryName">
</TreeGridForeignColumn>
```

### Issue: Dropdown Editor Shows Wrong Values

**Cause:** Incorrect `ForeignKeyField` or `ForeignKeyValue` configuration.

**Solution:**
```csharp
// Verify data structure
public class Category
{
    public int CategoryID { get; set; }      // Use for ForeignKeyField
    public string CategoryName { get; set; } // Use for ForeignKeyValue
}

// Verify column configuration matches
<TreeGridForeignColumn Field="CategoryID" 
                       ForeignKeyField="CategoryID"
                       ForeignKeyValue="CategoryName"
                       ForeignDataSource="Categories">
</TreeGridForeignColumn>
```

### Issue: Cache Not Updating After Data Change

**Cause:** Using `List<T>` instead of `ObservableCollection<T>`.

**Solution - Option 1: Switch to ObservableCollection**
```csharp
// ✓ Auto-updates cache
private ObservableCollection<Category> Categories { get; set; }

Categories.Add(new Category { CategoryID = 4, CategoryName = "New" });
// Cache automatically refreshed
```

**Solution - Option 2: Manual Cache Refresh**
```csharp
// ✓ Manual refresh
private List<Category> Categories { get; set; }

Categories.Add(new Category { CategoryID = 4, CategoryName = "New" });
await TreeGridRef.RefreshForeignKeyDataAsync("CategoryID");
```

### Issue: Missing Values Not Displaying Correctly

**Cause:** `MissingValueText` not set or incorrect foreign key value.

**Solution:**
```razor
<!-- Define MissingValueText -->
<TreeGridForeignColumn Field="CategoryID" 
                       ForeignDataSource="Categories"
                       ForeignKeyField="CategoryID"
                       ForeignKeyValue="CategoryName"
                       MissingValueText="[Uncategorized]">
</TreeGridForeignColumn>

<!-- If key doesn't exist, displays: [Uncategorized] -->
```

### Issue: Filter Not Working Correctly

**Cause:** Filter attempting to match against raw key instead of display text.

**Solution:**
```csharp
// ✓ Correct - TreeGrid automatically translates display text to key
// User filters for "Electronics" → TreeGrid translates to CategoryID = 1

// ✓ Checkbox filter shows display text
// User sees "Electronics", "Furniture", "Clothing"

// ✗ Do NOT manually convert in custom adaptor
// TreeGrid handles translation automatically
```

---

## Complete Example

Here's a complete example demonstrating foreign key columns with editing, filtering, and sorting:

```razor
@page "/treegrid/foreignkey"
@using Syncfusion.Blazor.TreeGrid
@using System.Collections.ObjectModel

<SfTreeGrid @ref="TreeGridRef" 
            DataSource="Products" 
            IdMapping="ProductID" 
            ParentIdMapping="ParentID"
            AllowEditing="true"
            AllowFiltering="true"
            AllowSorting="true"
            AllowExcelExport="true"
            AllowSearching="true">
    
    <TreeGridEditSettings AllowEditing="true" AllowAdding="true" AllowDeleting="true"></TreeGridEditSettings>
    <TreeGridFilterSettings Type="FilterType.Menu"></TreeGridFilterSettings>
    
    <TreeGridColumns>
        <TreeGridColumn Field="ProductID" HeaderText="ID" IsPrimaryKey="true" Width="80"></TreeGridColumn>
        <TreeGridColumn Field="ProductName" HeaderText="Product Name" Width="150"></TreeGridColumn>
        
        <TreeGridForeignColumn Field="CategoryID" 
                               HeaderText="Category"
                               ForeignDataSource="Categories" 
                               ForeignKeyField="CategoryID" 
                               ForeignKeyValue="CategoryName"
                               MissingValueText="[Unknown]"
                               Width="120">
        </TreeGridForeignColumn>
        
        <TreeGridForeignColumn Field="SupplierID" 
                               HeaderText="Supplier"
                               ForeignDataSource="Suppliers" 
                               ForeignKeyField="SupplierID" 
                               ForeignKeyValue="SupplierName"
                               Width="120">
        </TreeGridForeignColumn>
    </TreeGridColumns>
</SfTreeGrid>

@code {
    private SfTreeGrid<Product> TreeGridRef { get; set; }
    
    private List<Product> Products { get; set; }
    private ObservableCollection<Category> Categories { get; set; }
    private ObservableCollection<Supplier> Suppliers { get; set; }

    protected override async Task OnInitializedAsync()
    {
        Categories = new ObservableCollection<Category>
        {
            new Category { CategoryID = 1, CategoryName = "Electronics" },
            new Category { CategoryID = 2, CategoryName = "Furniture" },
            new Category { CategoryID = 3, CategoryName = "Clothing" }
        };

        Suppliers = new ObservableCollection<Supplier>
        {
            new Supplier { SupplierID = 101, SupplierName = "TechCorp" },
            new Supplier { SupplierID = 102, SupplierName = "FurnishCo" },
            new Supplier { SupplierID = 103, SupplierName = "StyleWear" }
        };

        Products = new List<Product>
        {
            new Product { ProductID = 1, ProductName = "Laptop", CategoryID = 1, SupplierID = 101 },
            new Product { ProductID = 2, ProductName = "Chair", CategoryID = 2, SupplierID = 102 },
            new Product { ProductID = 3, ProductName = "Shirt", CategoryID = 3, SupplierID = 103 },
            new Product { ProductID = 4, ProductName = "Monitor", ParentID = 1, CategoryID = 1, SupplierID = 101 }
        };
    }

    public class Product
    {
        public int ProductID { get; set; }
        public int? ParentID { get; set; }
        public string ProductName { get; set; }
        public int CategoryID { get; set; }
        public int SupplierID { get; set; }
    }

    public class Category
    {
        public int CategoryID { get; set; }
        public string CategoryName { get; set; }
    }

    public class Supplier
    {
        public int SupplierID { get; set; }
        public string SupplierName { get; set; }
    }
}
```

---

## API Reference

### TreeGridForeignColumn Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `Field` | `string` | Required | Key field on row data |
| `ForeignDataSource` | `IEnumerable?` | null | Lookup collection |
| `ForeignKeyField` | `string?` | Defaults to `Field` | Key property in lookup |
| `ForeignKeyValue` | `string?` | null | Display property in lookup |
| `MissingValueText` | `string?` | Raw key as string | Text for unmatched keys |

### TreeGrid Foreign Key Methods

| Method | Parameters | Returns | Description |
|--------|-----------|---------|-------------|
| `RefreshForeignKeyDataAsync` | `string field` | `Task` | Rebuild cache and refresh cells |
| `SetForeignDataSourceAsync` | `string field, IEnumerable? dataSource` | `Task` | Replace data source and refresh |
| `ClearForeignKeyCacheAsync` | `string field` | `Task` | Clear cache (rebuild on next lookup) |
| `GetDisplayValueAsync` | `string field, object? key` | `Task<string>` | Get display text for key |
| `GetCachedValueAsync<TItem>` | `string field, object? key` | `Task<TItem?>` | Get foreign record by key |

### TreeGrid Foreign Key Events

| Event | When | Cancellable |
|-------|------|------------|
| `ForeignDataSourceChanging` | Before data source is replaced | Yes (set `args.Cancel = true`) |
| `ForeignDataSourceChanged` | After cache is rebuilt and cells refreshed | No |

---

## Conclusion

Foreign Key Columns in Blazor TreeGrid provide a robust solution for displaying related data across complex hierarchical structures. By following the patterns and best practices outlined in this guide, you can implement efficient and maintainable foreign key relationships.

**Key Takeaways:**
- Use `TreeGridForeignColumn` for foreign key resolution
- Configure `ForeignKeyField` and `ForeignKeyValue` correctly
- Leverage `ObservableCollection` for automatic cache management
- Foreign key operations (filter, sort, search) work on display text
- Export, paging, and virtualization all support foreign keys
- Use async methods for non-blocking operations
- Handle missing values with `MissingValueText`

For additional information, refer to the [Syncfusion Blazor TreeGrid documentation](https://www.syncfusion.com/blazor-components/blazor-tree-grid/).
