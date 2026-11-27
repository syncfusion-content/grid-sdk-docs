---
layout: post
title: Accessibility in Blazor DataGrid | Syncfusion®
description: Learn how to make the Blazor DataGrid accessible with WCAG 2.2 and Section 508 support, ARIA roles, keyboard navigation, and screen reader support.
platform: grid-sdk
control: DataGrid
documentation: ug
---

# Accessibility in Blazor DataGrid

The [Blazor DataGrid](https://www.syncfusion.com/blazor-components/blazor-datagrid) is built to support widely accepted accessibility standards. These standards help ensure that the component is usable by individuals with varying abilities, including those using assistive technologies.
Supported guidelines include:

- [Americans with Disabilities Act (ADA)](https://www.ada.gov/)
- [Section 508](https://www.section508.gov/)
- [Web Content Accessibility Guidelines (WCAG) 2.2](https://www.w3.org/TR/WCAG22/)
- [ARIA roles](https://www.w3.org/TR/wai-aria/#roles) for semantic structure and screen reader compatibility

| Accessibility Criteria | Compatibility | Description |
|-----------------------|---------------|-------------|
| [WCAG 2.2 Support](../common/accessibility#accessibility-standards) | AA | Supports most WCAG 2.2 guidelines, such as color contrast (1.4.3) and keyboard accessibility (2.1.1), with some limitations in complex interactions. |
| [Section 508 Support](../common/accessibility#accessibility-standards) | <img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> | Complies with most Section 508 requirements, with minor gaps in advanced interactive elements. |
| [Screen Reader Support](../common/accessibility#screen-reader-support) | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> | Implements ARIA roles (e.g., `role="grid"`, `aria-label`) for compatibility with screen readers like JAWS and NVDA. |
| [Right-To-Left Support](../common/accessibility#right-to-left-support) | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> | Supports right-to-left (RTL) layouts for languages like Arabic and Hebrew using the `EnableRtl` property. |
| [Color Contrast](../common/accessibility#color-contrast) | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> | Meets WCAG 2.2 minimum contrast ratios for text and visual elements. |
| [Mobile Device Support](../common/accessibility#mobile-device-support) | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> | Ensures touch-based navigation and compatibility with mobile screen readers. |
| [Keyboard Navigation Support](../common/accessibility#keyboard-navigation-support) | <img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> | Supports standard keyboard interactions (e.g., Tab, Arrow keys), with limitations in some advanced features like filtering. |
| [Axe-core Accessibility Validation](../common/accessibility#ensuring-accessibility) | <img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> | Passes most Axe-core checks, with minor issues in specific ARIA configurations. |

<style>
    .post .post-content img {
        display: inline-block;
        margin: 0.5em 0;
    }
</style>
**Support Level Indicators:**

<div><img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> - All features meet the accessibility requirement.</div>

<div><img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> - Some features meet the requirement; others may need improvement.</div>

<div><img src="https://cdn.syncfusion.com/content/images/documentation/not-supported.png" alt="No"> - The feature does not meet the requirement.</div>

## WAI-ARIA attributes

The Blazor DataGrid implements the [WAI-ARIA grid pattern](https://www.w3.org/WAI/ARIA/apg/patterns/grid/) to support accessibility requirements. This ensures compatibility with assistive technologies such as screen readers, including **JAWS** and **NVDA**. WAI-ARIA (Web Accessibility Initiative – Accessible Rich Internet Applications) attributes define roles, states, and properties that make the Blazor DataGrid accessible to individuals with disabilities.

| Attribute | Purpose |
|-----------|---------|
| `role=grid` | Identifies the element as a grid container. |
| `role=row` | Defines a row containing cells within the grid. |
| `role=rowgroup` | Groups multiple rows, such as in grouped or hierarchical grids. |
| `role=columnheader` | Specifies a header cell providing column information. |
| `role=gridcell` | Indicates a data cell within the grid. |
| `role=button` | Represents interactive elements that function as buttons. |
| `role=search` | Identifies search regions, such as in the toolbar. |
| `role=presentation` | Hides elements from assistive technologies when not relevant. |
| `role=navigation` | Defines pager elements for page navigation. |
| `aria-colindex` | Specifies the column index relative to the total number of columns. |
| `aria-rowindex` | Specifies the row index relative to the total number of rows. |
| `aria-rowspan` | Indicates the number of rows spanned by a cell. |
| `aria-colspan` | Indicates the number of columns spanned by a cell. |
| `aria-selected` | Indicates the selection state of rows or cells. |
| `aria-expanded` | Shows whether expand/collapse icons are expanded in hierarchical or grouped grids. |
| `aria-sort` | Indicates sorting order (ascending or descending) for columns. |
| `aria-owns` | Defines relationships between elements for visual or functional context. |
| `aria-hidden` | Hides elements from assistive technologies. |
| `aria-labelledby` | Provides accessible names for elements like checkboxes in filters or dialogs. |
| `aria-describedby` | Describes features enabled in a header cell when it receives focus. |

The Blazor Data Grid uses a two-table structure for header and content. ARIA roles and attributes are applied to parent and child elements to enhance screen reader support. This structure may trigger warnings in automated accessibility tools, but it does not affect how screen readers interpret the content.

Accessibility checker tools may report the following known issues:

* **aria-required-children:** Appears when rendering the Blazor Data Grid without certain features or when toolbar and grouping are enabled. Ensure required child roles are present and suppress false positives if the structure is intentional.
* **color-contrast:** Can occur when the search item is enabled in the toolbar. Adjust theme variables or apply custom CSS to meet WCAG 2.2 AA contrast requirements.
* **Invalid explicit ARIA roles on <tr>, <th>, <td>:** These warnings result from applying roles like row, columnheader, and gridcell to support assistive technologies. Confirm that navigation remains functional and document exceptions for audits.
* **Role inheritance conflicts (role="button" with rowgroup descendants):** May appear when toolbar cells contain buttons. Maintain DOM hierarchy and verify focus order manually.
* **Content not within a landmark element:** Add page-level landmarks (<header>, <main>, <nav>) to scope interactive regions.
* **Multiple elements with role="search" lacking unique labels:** Assign unique aria-label or aria-labelledby attributes to each search region.
* **Text contrast 4.10:** Improve contrast ratio to at least 4.5:1 using CSS for standard text.
* **Blazor Data Grid lacks a programmatic name:** Set aria-label or aria-labelledby on the main Blazor Data Grid container.
* **role="rowgroup" not owned by a grid:** Ensure grouped content remains within the element that has role="grid".

To improve accessibility, apply page landmarks, assign unique labels to search regions, and verify that color contrast meets WCAG 2.2 AA standards. When customizing styles, maintain visible focus indicators and a logical focus order.

## Keyboard interaction

The Blazor Data Grid supports keyboard navigation based on the ARIA grid [keyboard interaction](https://www.w3.org/WAI/ARIA/apg/patterns/grid/#keyboard-interaction) guidelines. This enables efficient navigation for scenarios involving keyboard input or assistive technologies.

The supported keyboard shortcuts are listed below.

<b>Pager</b>

| Windows                                                                 | Mac                                 | Actions                                |
|-------------------------------------------------------------------------|-------------------------------------|----------------------------------------|
| <kbd>Tab</kbd>                                                          | <kbd>Tab</kbd>                      | Move focus to the next pager item.     |
| <kbd>Shift</kbd> + <kbd>Tab</kbd>                                       | <kbd>⇧</kbd> + <kbd>Tab</kbd>       | Move focus to the previous pager item. |
| <kbd>Enter</kbd> / <kbd>Space</kbd>                                     | <kbd>Enter</kbd> / <kbd>Space</kbd> | Select the currently focused page.     |
| <kbd>PageUp</kbd> / <kbd>←</kbd>                                        | <kbd>←</kbd>                        | Navigate to the previous page.         |
| <kbd>PageDown</kbd> / <kbd>→</kbd>                                      | <kbd>→</kbd>                        | Navigate to the next page.             |
| <kbd>Home</kbd> / <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>PageUp</kbd>  | <kbd>Fn</kbd> + <kbd>←</kbd>        | Navigate to the first page.            |
| <kbd>End</kbd> / <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>PageDown</kbd> | <kbd>Fn</kbd> + <kbd>→</kbd>        | Navigate to the last page.             |

**Virtualization**

| Windows                        | Mac                         | Actions                                                    |
|--------------------------------|-----------------------------|------------|
| <kbd>Page Up</kbd>             | <kbd>Page Up</kbd>          | Scrolls up by one viewport while keeping the focused row in the same relative position. |
| <kbd>Page Down</kbd>           | <kbd>Page Down</kbd>        | Scrolls down by one viewport while keeping the focused row in the same relative position. |
| <kbd>Ctrl</kbd> + <kbd>↑</kbd> | <kbd>⌘</kbd> + <kbd>↑</kbd> | Moves focus to the first row of the current column. |
| <kbd>Ctrl</kbd> + <kbd>↓</kbd> | <kbd>⌘</kbd> + <kbd>↓</kbd> | Moves focus to the last row of the current column. |

> **Note:** These keyboard shortcuts apply only when virtualization is enabled via the `EnableVirtualization` property. These shortcuts have no effect when virtualization is disabled.

<b>Focus Elements</b>

| Windows                           | Mac                                         | Actions                                                    |
|-----------------------------------|---------------------------------------------|------------------------------------------------------------|
| <kbd>Home</kbd>                   | <kbd>Fn</kbd> + <kbd>←</kbd>                | Move focus to the first cell of the focused row.           |
| <kbd>End</kbd>                    | <kbd>Fn</kbd> + <kbd>→</kbd>                | Move focus to the last cell of the focused row.            |
| <kbd>Ctrl</kbd> + <kbd>Home</kbd> | <kbd>⌘</kbd> + <kbd>Fn</kbd> + <kbd>←</kbd> | Move focus to the first cell of the first row in the Blazor DataTable. |
| <kbd>Ctrl</kbd> + <kbd>End</kbd>  | <kbd>⌘</kbd> + <kbd>Fn</kbd> + <kbd>→</kbd> | Move focus to the last cell of the last row in the Blazor DataTable.   |
| <kbd>↑</kbd>                      | <kbd>↑</kbd>                                | Move the cell focus up from the focused cell.              |
| <kbd>↓</kbd>                      | <kbd>↓</kbd>                                | Move the cell focus down from the focused cell.            |
| <kbd>→</kbd>                      | <kbd>→</kbd>                                | Move the cell focus right from the focused cell.           |
| <kbd>←</kbd>                      | <kbd>←</kbd>                                | Move the cell focus left from the focused cell.            |
| <kbd>Alt</kbd> + <kbd>J</kbd>     | <kbd>⌥</kbd> + <kbd>J</kbd>                 | Move focus to the Blazor Data Grid.                                    |
| <kbd>Alt</kbd> + <kbd>W</kbd>     | <kbd>⌥</kbd> + <kbd>W</kbd>                 | Move focus to the Blazor Data Grid content element.                    |

<b>Selection</b>

| Windows                             | Mac                             | Actions                                    |
|-------------------------------------|---------------------------------|--------------------------------------------|
| <kbd>↑</kbd>                        | <kbd>↑</kbd>                    | Move the row/cell selection up.            |
| <kbd>↓</kbd>                        | <kbd>↓</kbd>                    | Move the row/cell selection down.          |
| <kbd>→</kbd>                        | <kbd>→</kbd>                    | Move the cell selection right.             |
| <kbd>←</kbd>                        | <kbd>←</kbd>                    | Move the cell selection left.              |
| <kbd>Shift</kbd> + <kbd>↑</kbd>     | <kbd>⇧</kbd> + <kbd>↑</kbd>     | Extend the row/cell selection upward.      |
| <kbd>Shift</kbd> + <kbd>↓</kbd>     | <kbd>⇧</kbd> + <kbd>↓</kbd>     | Extend the row/cell selection downward.    |
| <kbd>Shift</kbd> + <kbd>→</kbd>     | <kbd>⇧</kbd> + <kbd>→</kbd>     | Extend the cell selection to the right.    |
| <kbd>Shift</kbd> + <kbd>←</kbd>     | <kbd>⇧</kbd> + <kbd>←</kbd>     | Extend the cell selection to the left.     |
| <kbd>Enter</kbd>                    | <kbd>Enter</kbd>                | Move the row/cell selection down.          |
| <kbd>Shift</kbd> + <kbd>Enter</kbd> | <kbd>⇧</kbd> + <kbd>Enter</kbd> | Move the row/cell selection up.            |
| <kbd>Esc</kbd>                      | <kbd>Esc</kbd>                  | Deselect all selected rows/cells.          |
| <kbd>Ctrl</kbd> + <kbd>A</kbd>      | <kbd>⌘</kbd> + <kbd>A</kbd>     | Select all rows/cells on the current page. |

<b>Grouping</b>

| Windows                            | Mac                             | Actions                             |
|------------------------------------|---------------------------------|-------------------------------------|
| <kbd>Ctrl</kbd> + <kbd>↑</kbd>     | <kbd>⌘</kbd> + <kbd>↑</kbd>     | Collapse all visible groups.        |
| <kbd>Ctrl</kbd> + <kbd>↓</kbd>     | <kbd>⌘</kbd> + <kbd>↓</kbd>     | Expand all visible groups.          |
| <kbd>Ctrl</kbd> + <kbd>Space</kbd> | <kbd>⌘</kbd> + <kbd>Space</kbd> | Group by the focused header column. |
| <kbd>Alt</kbd> + <kbd>↑</kbd>      | <kbd>⌥</kbd> + <kbd>↑</kbd>     | Collapse the selected group.        |
| <kbd>Alt</kbd> + <kbd>↓</kbd>      | <kbd>⌥</kbd> + <kbd>↓</kbd>     | Expand the selected group.          |

<b>Print</b>

| Windows                        | Mac                         | Actions         |
|--------------------------------|-----------------------------|-----------------|
| <kbd>Ctrl</kbd> + <kbd>P</kbd> | <kbd>⌘</kbd> + <kbd>P</kbd> | Print the Blazor Data Grid. |

<b>Clipboard</b>

| Windows                                           | Mac                                        | Actions                                                    |
|---------------------------------------------------|--------------------------------------------|------------------------------------------------------------|
| <kbd>Ctrl</kbd> + <kbd>C</kbd>                    | <kbd>⌘</kbd> + <kbd>C</kbd>                | Copy selected rows or cells to the clipboard.              |
| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>H</kbd> | <kbd>⌘</kbd> + <kbd>⇧</kbd> + <kbd>H</kbd> | Copy selected rows or cells with headers to the clipboard. |

<b>Editing</b>

| Windows                             | Mac                             | Actions                                                                                                                      |
|-------------------------------------|---------------------------------|------------------------------------------------------------------------------------------------------------------------------|
| <kbd>F2</kbd>                       | <kbd>F2</kbd>                   | Start editing the selected row (Normal/Dialog) or the selected cell (Batch).                                                 |
| <kbd>Enter</kbd>                    | <kbd>Enter</kbd>                | Save the form (Normal/Dialog) or save the current cell and start editing the next row cell (Batch).                          |
| <kbd>Insert</kbd>                   | <kbd>⌥</kbd> + <kbd>Enter</kbd> | Create a new add form based on the NewRowPosition.                                                                           |
| <kbd>Delete</kbd>                   | <kbd>Delete</kbd>               | Delete the selected record.                                                                                                  |
| <kbd>Tab</kbd>                      | <kbd>Tab</kbd>                  | Navigate to the next editable cell (Normal/Dialog) or save the current cell and start editing the next cell (Batch).         |
| <kbd>Shift</kbd> + <kbd>Tab</kbd>   | <kbd>⇧</kbd> + <kbd>Tab</kbd>   | Navigate to the previous editable cell (Normal/Dialog) or save the current cell and start editing the previous cell (Batch). |
| <kbd>Shift</kbd> + <kbd>Enter</kbd> | <kbd>⇧</kbd> + <kbd>Enter</kbd> | Save the current cell and start editing the previous row cell (Batch).                                                       |

<b>Filtering</b>

| Windows                       | Mac                         | Actions                                                                     |
|-------------------------------|-----------------------------|-----------------------------------------------------------------------------|
| <kbd>Alt</kbd> + <kbd>↓</kbd> | <kbd>⌥</kbd> + <kbd>↓</kbd> | Open the filter menu (Excel, menu, or checkbox) when its header is focused. |

<b>Column Menu</b>

| Windows                       | Mac                           | Actions                                          |
|-------------------------------|-------------------------------|--------------------------------------------------|
| <kbd>Alt</kbd> + <kbd>↓</kbd> | <kbd>Alt</kbd> + <kbd>↓</kbd> | Open the column menu when its header is focused. |

<b>Reordering</b>

| Windows | Mac | Actions |
| ----- | ----- | ----- |
| <kbd>Ctrl</kbd> + <kbd>←</kbd> / <kbd>→</kbd> | <kbd>⌘</kbd> + <kbd>←</kbd> / <kbd>→</kbd> | Reorder the focused header column to the left or right. |

<b>Sorting</b>

| Windows                                       | Mac                                        | Actions                                                 |
|-----------------------------------------------|--------------------------------------------|---------------------------------------------------------|
| <kbd>Ctrl</kbd> + <kbd>←</kbd> / <kbd>→</kbd> | <kbd>⌘</kbd> + <kbd>←</kbd> / <kbd>→</kbd> | Reorder the focused header column to the left or right. |
<br>

> On Mac devices, the <kbd>Command</kbd> and <kbd>Control</kbd> keys can be interchanged based on system settings. When this switch is active, use the <kbd>Command</kbd> key in place of <kbd>Control</kbd>, and <kbd>Control</kbd> in place of <kbd>Command</kbd> for keyboard interactions.
For example:

- To group columns when a header is focused, use <kbd>Command + Space</kbd>.
- To expand visible groups, use <kbd>Ctrl + Down Arrow</kbd>.

## Custom Keyboard Navigation

The Blazor DataGrid allows its default keyboard shortcuts to be changed to match application requirements and accessibility guidelines. A default shortcut can be replaced with a different key combination, or a built-in action can be disabled. Actions that are not configured keep their default shortcuts.

Keyboard actions are grouped into six categories based on the grid area where they apply: **DataCell**, **Header**, **EditCell**, **GroupRow**, **DetailRow**, and **Common**. The following tables list the actions in each category and their default shortcuts.

**DataCell**

| Action | Windows | Mac | Description |
|--------|---------|-----|---|
| NavigateUp | Shift+Enter | ⇧+Enter | Move focus to the cell above. |
| NavigateDown | Enter, ArrowDown, Shift+Down | Enter, ↓, ⇧+↓ | Move focus to the cell below. |
| NavigateLeft | Shift+Tab | ⇧+Tab | Move focus to the previous cell. |
| NavigateRight | Tab, ArrowRight, Shift+Right | Tab, →, ⇧+→ | Move focus to the next cell. |
| NavigateRowStart | Home | Fn+← | Move focus to the first cell in the current row. |
| NavigateRowEnd | End | Fn+→ | Move focus to the last cell in the current row. |
| NavigateGridStart | Ctrl+Home | ⌘+Fn+← | Move focus to the first cell in the grid. |
| NavigateGridEnd | Ctrl+End | ⌘+Fn+→ | Move focus to the last cell in the grid. |
| StartEdit | F2 | F2 | Begin editing the focused cell. |
| AddRecord | Insert | ⌥+Enter | Add a new row. |
| DeleteRecord | Delete | Delete | Delete the focused row or selected rows. |
| SelectAll | Ctrl+A | ⌘+A | Select all rows. |
| PageUp | PageUp | PageUp | Move to the previous page. |
| PageDown | PageDown | PageDown | Move to the next page. |
| SelectToggle | Space | Space | Select or clear the focused checkbox row. |
| Undo | Ctrl+Z | ⌘+Z | Undo the last edit operation. |
| Redo | Ctrl+Y | ⌘+⇧+Z | Redo the last undone operation. |

**Header**

| Action | Windows | Mac | Description |
|--------|---------|-----|---|
| SortColumn | Enter, Ctrl+Enter | Enter, ⌘+Enter | Sort the focused column. |
| ToggleHeaderCheckbox | Space | Space | Select or clear all rows using the header checkbox. |
| MoveFocusToFirstRow | Alt+W | ⌥+W | Move focus to the first data row. |
| NavigateLeft | Shift+Tab | ⇧+Tab | Move focus to the previous header cell. |
| NavigateRight | Tab | Tab | Move focus to the next header cell. |
| GroupColumn | Ctrl+Space | ⌘+Space | Group or ungroup the focused column. |
| ReorderColumnLeft | Ctrl+Left | ⌘+← | Move the focused column to the left. |
| ReorderColumnRight | Ctrl+Right | ⌘+→ | Move the focused column to the right. |
| FocusFilterBar | ArrowDown | ↓ | Move focus to the filter bar. |
| OpenColumnMenu | Alt+ArrowDown | ⌥+↓ | Open the column menu. |
| OpenFilterMenu | Alt+ArrowDown | ⌥+↓ | Open the filter menu for the focused column. |

**EditCell**

| Action | Windows | Mac | Description |
|--------|---------|-----|---|
| Escape | Escape | Escape | Cancel the current edit. |
| EditEndAndTabNext | Tab | Tab | Save the edit and move to the next editable cell. |
| EditEndAndShiftTabPrev | Shift+Tab | ⇧+Tab | Save the edit and move to the previous editable cell. |

**GroupRow**

| Action | Windows | Mac | Description |
|--------|---------|-----|---|
| ExpandGroup | ArrowRight | → | Expand the focused group. |
| CollapseGroup | ArrowLeft | ← | Collapse the focused group. |
| ExpandAllGroup | Ctrl+Down | ⌘+↓ | Expand all groups. |
| CollapseAllGroup | Ctrl+Up | ⌘+↑ | Collapse all groups. |

**DetailRow**

| Action | Windows | Mac | Description |
|--------|---------|-----|---|
| ExpandDetailRow | Enter, Alt+ArrowDown | Enter, ⌥+↓ | Expand the focused detail row. |
| CollapseDetailRow | Enter, Alt+ArrowUp | Enter, ⌥+↑ | Collapse the focused detail row. |
| ExpandAllDetailRows | Ctrl+ArrowDown | ⌘+↓ | Expand all detail rows. |
| CollapseAllDetailRows | Ctrl+ArrowUp | ⌘+↑ | Collapse all detail rows. |

**Common**

| Action | Windows | Mac | Description |
|--------|---------|-----|---|
| Print | Ctrl+P | ⌘+P | Open the browser print dialog. |
| Copy | Ctrl+C | ⌘+C | Copy selected cells to the clipboard. |
| CopyWithHeaders | Ctrl+Shift+H | ⌘+⇧+H | Copy selected cells along with their column headers. |
| Paste | Ctrl+V | ⌘+V | Paste clipboard content into the grid. |

{% tabs %}
{% highlight razor tabtitle="Index.razor" %}
@using Syncfusion.Blazor.Grids

<SfGrid DataSource="@GridData"
    AllowPaging="true"
    AllowSorting="true"
    AllowGrouping="true"
    AllowReordering="true"
    AllowSelection="true"
    AllowFiltering="true"
    @ref="Grid"
    Toolbar="@(new List<string>() { "Add", "Edit", "Delete", "Update", "Cancel" })"
    KeyboardShortcuts="@Shortcuts"
    Height="400">
    <GridEditSettings AllowEditing="true" AllowAdding="true" AllowDeleting="true"></GridEditSettings>
    <GridFilterSettings Type="FilterType.Menu"></GridFilterSettings>
    <GridSelectionSettings CheckboxOnly="true"></GridSelectionSettings>
    <GridColumns>
        <GridColumn Type="ColumnType.CheckBox" Width="50"></GridColumn>
        <GridColumn Field="@nameof(OrderData.OrderID)" HeaderText="Order ID" IsPrimaryKey="true" Width="120" />
        <GridColumn Field="@nameof(OrderData.CustomerID)" HeaderText="Customer Name" Width="150" />
        <GridColumn Field="@nameof(OrderData.ShipCity)" HeaderText="Ship City" Width="120" />
        <GridColumn Field="@nameof(OrderData.OrderDate)" HeaderText="Order Date" Format="d" Width="140" />
        <GridColumn Field="@nameof(OrderData.ShipName)" HeaderText="Ship Name" Width="160" />
    </GridColumns>
</SfGrid>

@code {
    private SfGrid<OrderData> Grid { get; set; } = default!;

    public List<OrderData> GridData { get; set; }

    protected override void OnInitialized()
    {
        GridData = OrderData.GetAllRecords();
    }

    private GridCustomKeyboardShortcuts Shortcuts { get; } = new()
    {
        Header = new Dictionary<GridKeyboardAction, string>
        {
            { GridKeyboardAction.NavigateLeft, "Alt+J" },
            { GridKeyboardAction.NavigateRight, "Alt+L" },
            { GridKeyboardAction.SortColumn, "Alt+S" },
            { GridKeyboardAction.GroupColumn, "Alt+G" },
            { GridKeyboardAction.ReorderColumnLeft, "Ctrl+J" },
            { GridKeyboardAction.ReorderColumnRight, "Ctrl+L" },
            { GridKeyboardAction.ToggleHeaderCheckbox, "Alt+H" },
            { GridKeyboardAction.MoveFocusToFirstRow, "Alt+R" },
            { GridKeyboardAction.OpenColumnMenu, "Alt+M" },
            { GridKeyboardAction.OpenFilterMenu, "Ctrl+F" }
        },
        DataCell = new Dictionary<GridKeyboardAction, string>
        {
            { GridKeyboardAction.NavigateUp, "Alt+I" },
            { GridKeyboardAction.NavigateDown, "Alt+K" },
            { GridKeyboardAction.NavigateLeft, "Alt+J" },
            { GridKeyboardAction.NavigateRight, "Alt+L" },
            { GridKeyboardAction.NavigateRowStart, "Alt+U" },
            { GridKeyboardAction.NavigateRowEnd, "Alt+O" },
            { GridKeyboardAction.NavigateGridStart, "Ctrl+U" },
            { GridKeyboardAction.NavigateGridEnd, "Ctrl+O" },
            { GridKeyboardAction.StartEdit, "Alt+E" },
            { GridKeyboardAction.AddRecord, "Alt+A" },
            { GridKeyboardAction.DeleteRecord, "Alt+D" },
            { GridKeyboardAction.SelectAll, "Alt+S" }
        },
        GroupRow = new Dictionary<GridKeyboardAction, string>
        {
            { GridKeyboardAction.ExpandGroup, "Alt+C" },
            { GridKeyboardAction.CollapseGroup, "Alt+V" },
            { GridKeyboardAction.ExpandAllGroup, "Ctrl+C" },
            { GridKeyboardAction.CollapseAllGroup, "Ctrl+V" }
        },
        EditCell = new Dictionary<GridKeyboardAction, string>
        {
            { GridKeyboardAction.Escape, "Alt+B" }
        },
        Common = new Dictionary<GridKeyboardAction, string>
        {
            { GridKeyboardAction.Copy, "Ctrl+U" },
            { GridKeyboardAction.CopyWithHeaders, "Ctrl+I" },
        }
    };
}
{% endhighlight %}
{% highlight c# tabtitle="OrderData.cs" %}
public class OrderData
{
    public static List<OrderData> Orders = new List<OrderData>();

    public OrderData() { }

    public OrderData(int? OrderID, string CustomerID, string ShipCity, string ShipName, DateTime? OrderDate)
    {
        this.OrderID = OrderID;
        this.CustomerID = CustomerID;
        this.ShipCity = ShipCity;
        this.ShipName = ShipName;
        this.OrderDate = OrderDate;
    }

    public static List<OrderData> GetAllRecords()
    {
        if (Orders.Count() == 0)
        {
            int OrderID = 10247;
            for (int i = 1; i < 2; i++)
            {
                Orders.Add(new OrderData(OrderID + 1, "VINET", "Reims", "Vins et alcools Chevali", new DateTime(2026, 1, 1)));
                Orders.Add(new OrderData(OrderID + 2, "TOMSP", "Münster", "Toms Spezialitäten", new DateTime(2026, 1, 2)));
                Orders.Add(new OrderData(OrderID + 3, "HANAR", "Rio de Janeiro", "Hanari Carnes", new DateTime(2026, 1, 3)));
                Orders.Add(new OrderData(OrderID + 4, "VICTE", "Lyon", "Victuailles en stock", new DateTime(2026, 1, 4)));
                Orders.Add(new OrderData(OrderID + 5, "SUPRD", "Charleroi", "Suprêmes délices", new DateTime(2026, 1, 5)));
                Orders.Add(new OrderData(OrderID + 6, "HANAR", "Lyon", "Hanari Carnes", new DateTime(2026, 1, 6)));
                Orders.Add(new OrderData(OrderID + 7, "CHOPS", "Rio de Janeiro", "Chop-suey Chinese", new DateTime(2026, 1, 7)));
                Orders.Add(new OrderData(OrderID + 8, "ERNSH", "Münster", "Richter Supermarkt", new DateTime(2026, 1, 8)));
                Orders.Add(new OrderData(OrderID + 9, "WELLI", "Reims", "Wellington Import", new DateTime(2026, 1, 9)));
                OrderID += 9;
            }
        }
        return Orders;
    }

    public int? OrderID { get; set; }
    public string CustomerID { get; set; }
    public string ShipCity { get; set; }
    public string ShipName { get; set; }
    public DateTime? OrderDate { get; set; }
}
{% endhighlight %}
{% endtabs %}

> **Note:** A single action can respond to more than one key combination. For example, the **NavigateDown** action in the **DataCell** category responds to <kbd>Enter</kbd>, <kbd>↓</kbd>, and <kbd>Shift</kbd> + <kbd>↓</kbd> by default.

### Disable default keyboard actions

A built-in keyboard action can be turned off by mapping its `GridKeyboardAction` value to `string.Empty`. The action then stops responding to its default keys. This helps when a default shortcut conflicts with a shortcut used elsewhere in the application, or when an operation must not be available from the keyboard.

In this example, the **Header** dictionary maps two actions to `string.Empty`:

| Action | Default shortcut (Windows) | Default shortcut (Mac) | Result |
|--------|----------------------------|------------------------|--------|
| `GridKeyboardAction.SortColumn` | Enter, Ctrl+Enter | Enter, ⌘+Enter | Sorting from a focused header cell is disabled. |
| `GridKeyboardAction.GroupColumn` | Ctrl+Space | ⌘+Space | Grouping from a focused header cell is disabled. |

All other shortcuts, such as header navigation, column reordering, and opening the filter menu, keep working.

{% tabs %}
{% highlight razor tabtitle="Index.razor" %}
@using Syncfusion.Blazor.Grids

<SfGrid DataSource="@GridData"
    AllowPaging="true"
    AllowSorting="true"
    AllowGrouping="true"
    AllowReordering="true"
    AllowSelection="true"
    AllowFiltering="true"
    @ref="Grid"
    Toolbar="@(new List<string>() { "Add", "Edit", "Delete", "Update", "Cancel" })"
    KeyboardShortcuts="@Shortcuts"
    Height="400">
    <GridEditSettings AllowEditing="true" AllowAdding="true" AllowDeleting="true"></GridEditSettings>
    <GridFilterSettings Type="FilterType.Menu"></GridFilterSettings>
    <GridSelectionSettings CheckboxOnly="true"></GridSelectionSettings>
    <GridColumns>
        <GridColumn Type="ColumnType.CheckBox" Width="50"></GridColumn>
        <GridColumn Field="@nameof(OrderData.OrderID)" HeaderText="Order ID" IsPrimaryKey="true" Width="120" />
        <GridColumn Field="@nameof(OrderData.CustomerID)" HeaderText="Customer Name" Width="150" />
        <GridColumn Field="@nameof(OrderData.ShipCity)" HeaderText="Ship City" Width="120" />
        <GridColumn Field="@nameof(OrderData.OrderDate)" HeaderText="Order Date" Format="d" Width="140" />
        <GridColumn Field="@nameof(OrderData.ShipName)" HeaderText="Ship Name" Width="160" />
    </GridColumns>
</SfGrid>

@code {
    private SfGrid<OrderData> Grid { get; set; } = default!;

    public List<OrderData> GridData { get; set; }

    protected override void OnInitialized()
    {
        GridData = OrderData.GetAllRecords();
    }

    private GridCustomKeyboardShortcuts Shortcuts { get; } = new()
    {
        Header = new Dictionary<GridKeyboardAction, string>
        {
            { GridKeyboardAction.SortColumn, string.Empty },
            { GridKeyboardAction.GroupColumn, string.Empty }
        }
    };
}
{% endhighlight %}
{% highlight c# tabtitle="OrderData.cs" %}
public class OrderData
{
    public static List<OrderData> Orders = new List<OrderData>();

    public OrderData() { }

    public OrderData(int? OrderID, string CustomerID, string ShipCity, string ShipName, DateTime? OrderDate)
    {
        this.OrderID = OrderID;
        this.CustomerID = CustomerID;
        this.ShipCity = ShipCity;
        this.ShipName = ShipName;
        this.OrderDate = OrderDate;
    }

    public static List<OrderData> GetAllRecords()
    {
        if (Orders.Count() == 0)
        {
            int OrderID = 10247;
            for (int i = 1; i < 2; i++)
            {
                Orders.Add(new OrderData(OrderID + 1, "VINET", "Reims", "Vins et alcools Chevali", new DateTime(2026, 1, 1)));
                Orders.Add(new OrderData(OrderID + 2, "TOMSP", "Münster", "Toms Spezialitäten", new DateTime(2026, 1, 2)));
                Orders.Add(new OrderData(OrderID + 3, "HANAR", "Rio de Janeiro", "Hanari Carnes", new DateTime(2026, 1, 3)));
                Orders.Add(new OrderData(OrderID + 4, "VICTE", "Lyon", "Victuailles en stock", new DateTime(2026, 1, 4)));
                Orders.Add(new OrderData(OrderID + 5, "SUPRD", "Charleroi", "Suprêmes délices", new DateTime(2026, 1, 5)));
                Orders.Add(new OrderData(OrderID + 6, "HANAR", "Lyon", "Hanari Carnes", new DateTime(2026, 1, 6)));
                Orders.Add(new OrderData(OrderID + 7, "CHOPS", "Rio de Janeiro", "Chop-suey Chinese", new DateTime(2026, 1, 7)));
                Orders.Add(new OrderData(OrderID + 8, "ERNSH", "Münster", "Richter Supermarkt", new DateTime(2026, 1, 8)));
                Orders.Add(new OrderData(OrderID + 9, "WELLI", "Reims", "Wellington Import", new DateTime(2026, 1, 9)));
                OrderID += 9;
            }
        }
        return Orders;
    }

    public int? OrderID { get; set; }
    public string CustomerID { get; set; }
    public string ShipCity { get; set; }
    public string ShipName { get; set; }
    public DateTime? OrderDate { get; set; }
}
{% endhighlight %}
{% endtabs %}

## Ensuring accessibility

The Blazor DataGrid is validated for accessibility using [axe-core](https://www.nuget.org/packages/Deque.AxeCore.Playwright) integrated with Playwright tests.
Accessibility compliance can be evaluated using the interactive [sample](https://blazor.syncfusion.com/accessibility/datagrid), which demonstrates the Blazor Data Grid's behavior with accessibility tools and validation steps.

## See also

* [Keyboard interaction](#keyboard-interaction)
* [Accessibility in Blazor component](https://blazor.syncfusion.com/documentation/common/accessibility)
