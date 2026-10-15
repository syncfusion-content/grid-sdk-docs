---
layout: post
title: Accessibility in Blazor Pivot Table | Syncfusion
description: Learn how the Blazor Pivot Table complies with WCAG 2.2 and Section 508 guidelines through WAI-ARIA roles, keyboard navigation, and screen reader support.
platform: grid-sdk
control: Pivot Table
documentation: ug
---

# Accessibility in Blazor Pivot Table

The pivot table component follows accessibility guidelines, including [ADA](https://www.ada.gov/), [Section 508](https://www.section508.gov/), [WCAG 2.2](https://www.w3.org/TR/WCAG22/) standards, and [WCAG roles](https://www.w3.org/TR/wai-aria/#roles) that are commonly used to evaluate accessibility.

The accessibility compliance for the pivot table component is outlined below.

| Accessibility Criteria | Compatibility |
| -- | -- |
| [WCAG 2.2 Support](../common/accessibility#accessibility-standards) | AA |
| [Section 508 Support](../common/accessibility#accessibility-standards) | <img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> |
| [Screen Reader Support](../common/accessibility#screen-reader-support) | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes">  |
| [Right-To-Left Support](../common/accessibility#right-to-left-support) | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |
| [Color Contrast](../common/accessibility#color-contrast) | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |
| [Mobile Device Support](../common/accessibility#mobile-device-support) | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |
| [Keyboard Navigation Support](../common/accessibility#keyboard-navigation-support) |<img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> |
| [Axe-core Accessibility Validation](../common/accessibility#ensuring-accessibility) | <img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> |

<style>
    .post .post-content img {
        display: inline-block;
        margin: 0.5em 0;
    }
</style>
<div><img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> - All features of the component meet the requirement.</div>

<div><img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> - Some features of the component do not meet the requirement.</div>

<div><img src="https://cdn.syncfusion.com/content/images/documentation/not-supported.png" alt="No"> - The component does not meet the requirement.</div>

## WAI-ARIA attributes

The pivot table component followed the [WAI-ARIA](https://www.w3.org/WAI/ARIA/apg/patterns/table/) patterns to meet the accessibility. The following ARIA selectors, attributes, and roles are used in the pivot table component:

| Selector / Element | Attribute / Role | Purpose |
| --- | --- | --- |
| Grid element (`.e-grid`) within the pivot table element (`.e-pivotview`) | `role=grid` | Attribute added to identify the grid component element within the pivot table element. |
| Pivot chart element (`.e-pivotchart`) | `role=region` | Attribute added to identify the chart component element within the pivot table element. The region must have an accessible name (for example, via `aria-label`) to be exposed as a landmark. |
| Dialog popup containers — field list (`.e-pivotfieldlist-container`), calculated field (`.e-pivot-calc-dialog-div`), member editor (`.e-member-editor-dialog`), conditional formatting (`.e-pivot-formatting-dialog`), number formatting (`.e-pivot-format-dialog`), drill-through (`.e-drillthrough-dialog`) | `role=dialog` | Attribute added to the dialog popup containers to identify them as dialogs, informing assistive technologies that the popup content is separated from the main page flow. |
| Pager navigation buttons (`.e-first`, `.e-prev`, `.e-next`, `.e-last`), pivot buttons (`.e-pivot-button`) in the grouping bar and field list, field list toggle button (`.e-toggle-field-list`), treeview sort buttons, and dialog popup buttons | `role=button` | This attribute is added to the pager navigation buttons, the pivot buttons in the grouping bar and field list, the field list toggle and treeview sort buttons, as well as the buttons in the dialog popups such as field list, calculated field, member editor, and conditional formatting of the pivot table component to indicate that it is a clickable element. |
| Conditional formatting style container tables (`.e-format-table`) | `role=table` | This attribute is added to each conditional formatting style container element to denote it as a table. |
| Table element inside the number formatting popup (`.e-pivot-format-table`) | `role=tableItems` | This attribute is added to the container element that appears inside the number formatting popup to indicate it as a table. |
| Row group container inside the number formatting popup (`.e-pivot-format-dialog-outer`) | `role=rowgroup` | This attribute is added to the container element that appears inside the number formatting popup to indicate it as a row group. |
| Header `th` cells (`.e-headercell`, `.e-columnheader`) | `role=columnheader` | Attribute added to the column header cells of the pivot table (column headers and value axis headers) to provide column header information to assistive technologies. |
| Row header cells (`.e-rowsheader`) | `role=gridcell` | Attribute added to the row header cells of the pivot table to provide row header information, allowing assistive technologies to associate each data cell with its row header. |
| Table rows (`.e-row`) within the header and content tables | `role=row` | Attribute added to each row element in the header and content tables to define a row containing header or data cells. |
| Data and value cells (`td` elements with `.e-rowcell`, `.e-valuecell`) | `role=gridcell` | Attribute added to the data and value cells within the pivot table grid to identify them as grid cells, ensuring they are announced together with their associated row and column headers. |
| Decorative and structural wrapper elements (layout containers within the dialog popups) | `role=presentation` / `role=none` | Attribute added to elements whose semantics are not relevant to assistive technologies (such as layout wrappers), removing them from the accessibility tree. |
| Pivot buttons (`.e-pivot-button`), treeview sort buttons, and dialog popup buttons (field list, calculated field, member editor) | `aria-disabled` | The buttons within the dialog popups, such as field list, calculated field and member editor, as well as the pivot buttons in the grouping bar and field list, will be disabled based on their usability. To indicate its disabled state, this attribute is added with the value `true`. By default, the attribute value is set to `false`. |
| Pivot buttons (`.e-pivot-button`), treeview sort buttons, pager navigation buttons (`.e-first`, `.e-prev`, `.e-next`, `.e-last`), and label elements in the member editor popup and calculated field popup | `aria-label` | This attribute is added to the pivot buttons in the grouping bar and field list, the treeview sort buttons, the pager navigation buttons, and the label elements placed inside the member editor popup and calculated field popup to provide an accessible name for each element. |
| Selected treeview item in the calculated field popup (`.e-pivot-calc-dialog-div`) and selected rows or cells in the pivot grid | `aria-selected` | This attribute is added to the selected treeview item in the calculated field popup with the value as `true`, and to the rows and cells in the pivot grid to denote their selection state. |
| Toolbar dropdown elements (report list, chart menu items) | `aria-expanded` | This attribute indicates the current expanded or collapsed state of the toolbar dropdown elements, such as the report list and the chart menu items. |
| Non-focusable decorative elements (for example, chart axis and clip-path elements) | `aria-hidden` | This attribute hides decorative elements, such as non-interactive chart elements, from the screen reader output. |
| Grid cells and associated header or popup elements | `aria-owns` | This attribute defines the relationship between an element and its owned child elements (for example, associating cells or popup content with their owning element) to construct a meaningful accessibility tree. Note: This attribute is rendered only in specific configurations, such as when drill-through or specific popup features are enabled. |
| Data cells (`.e-valuecell`) with corresponding column headers | `aria-describedby` | This attribute provides a descriptive reference for the data cells, associating them with the corresponding column header information when the cell receives focus. |
| Header and data cells (`.e-headercell`, `.e-rowcell`) | `aria-colindex` | This attribute is added to the header and data cells to specify the column index of the cell relative to the total number of columns. It is also used by the keyboard navigation and selection modules to identify the active cell. |
| Header and data cells (`.e-headercell`, `.e-rowcell`) | `aria-rowindex` | This attribute is added to the header and data cells to specify the row index of the cell relative to the total number of rows. It is also used by the keyboard navigation and selection modules to identify the active cell. |
| `th` elements in the grid header table (`.e-table`) | `aria-colspan` | This attribute is added to the `th` elements in the `e-table`, which represent the column span value. |
| `th` elements in the grid header table (`.e-table`) | `aria-rowspan` | This attribute is added to the `th` elements in the `e-table`, which represent the row span value. |
| Calculated field popup treeview items (`.e-pivot-calc-dialog-div`); pivot buttons (`.e-pivot-button`) | `data-type` | This attribute is added to the treeview item in the calculated field popup, as well as the buttons in the grouping bar and field list. It represents the aggregate type for the specified field. |
| Calculated field popup treeview items (`.e-pivot-calc-dialog-div`); pivot buttons (`.e-pivot-button`) | `data-caption` | This attribute is added to the treeview item in the calculated field popup, as well as the buttons in the grouping bar and field list. It represents the caption for the specified field. |
| Calculated field popup treeview items (`.e-pivot-calc-dialog-div`) | `data-field` | This attribute is added to the treeview item in the calculated field popup. It denotes the name of the specified field. |
| Calculated field popup treeview items (`.e-pivot-calc-dialog-div`) | `data-membertype` | This attribute is added to the treeview item in the calculated field popup. It denotes the member type of the selected OLAP calculated field. |
| Calculated field popup treeview items (`.e-pivot-calc-dialog-div`) | `data-hierarchy` | This attribute is added to the treeview item in the calculated field popup. It denotes the parent hierarchy unique name of the selected OLAP calculated field. |
| Calculated field popup treeview items (`.e-pivot-calc-dialog-div`) | `data-formula` | This attribute is added to the treeview item in the calculated field popup. It denotes the formula used for the specified calculated field. |
| Calculated field popup treeview items (`.e-pivot-calc-dialog-div`) | `data-formatstring` | This attribute is added to the treeview item in the calculated field popup. It denotes the format string type (Standard, Currency, Percent, Custom, or None) used for the specified calculated field. |
| Calculated field popup treeview items (`.e-pivot-calc-dialog-div`, when the format string type is Custom) | `data-customString` | This attribute is added to the treeview item in the calculated field popup. It denotes the custom format string used for the specified calculated field when the format string type is set to Custom. |

The Syncfusion<sup style="font-size:70%">&reg;</sup> Blazor Pivot Table internally uses the Syncfusion Grid component, which follows a two‑table structure for header and content rendering. This improves screen reader interpretation but may trigger warnings in automated accessibility tools. These issues occur due to the underlying grid rendering. These warnings do not necessarily affect actual assistive-technology usability. The following categories of warnings have been observed in [axe-core](https://www.nuget.org/packages/Deque.AxeCore.Playwright) reports:

* **aria-required-children** *(axe-core)*: Triggered when the grid renders certain feature elements (for example, textarea or toolbar content). It may be reported when toolbar or grouping features are enabled.

* **color-contrast** *(axe-core)*: Triggered when the toolbar search item or custom styles reduce text contrast below WCAG thresholds.

* **Content not within a landmark element** *(axe-core)*: Major page regions should be wrapped in landmark roles (for example, `region` with an accessible name).

* **Multiple elements with `role="search"` without unique labels** *(axe-core)*: Each `search` landmark must have a unique accessible name.

* **Interactive component with `role="grid"` missing an accessible name** *(axe-core)*: The grid must have a programmatically associated name (for example, via `aria-label` or `aria-labelledby`).

## Keyboard Navigation

The pivot table component followed the [keyboard interaction](https://www.w3.org/WAI/ARIA/apg/patterns/alert/#keyboardinteraction) guideline, making it easy for people who use assistive technologies (AT) and those who completely rely on keyboard navigation. The following keyboard shortcuts are supported by the pivot table component.

### Pivot Table

> **Prerequisites:** Cell-selection shortcuts (`Ctrl + A`, `Esc`, `Shift + Arrow`) require `AllowSelection` to be enabled. Drill-through requires `AllowDrillThrough` to be enabled. Hyperlink activation requires `PivotViewHyperlinkSettings` to be configured. The context-menu shortcut requires the context menu to be enabled. By default, the WAI-ARIA grid pattern uses `Tab` to leave the grid and arrow keys for in-grid navigation; the Syncfusion Pivot Table extends this behavior so `Tab` and `Shift + Tab` also move between cells when no cells are focused.

| Windows | Mac | Actions |
| ----- | ----- | ----- |
| <kbd>Tab</kbd> | <kbd>Tab</kbd> | Moves the cell focus right side. If no cells are focused, it moves to the next active element in the browser page. |
| <kbd>Shift + Tab</kbd> | <kbd>⇧</kbd> + <kbd>Tab</kbd> | Moves the cell focus left side. If no cells are focused, it moves to the previous active element in the browser page. |
| <kbd>↓</kbd> | <kbd>↓</kbd> | Moves the cell focus downwards. If the selection is enabled in the pivot table, then it will move downwards to select next row or column or individual cell. |
| <kbd>↑</kbd> | <kbd>↑</kbd> | Moves the cell focus upwards. If the selection is enabled in the pivot table, then it will move upwards to select previous row or column or individual cell. |
| <kbd>←</kbd> | <kbd>←</kbd> | Moves the cell focus left side. If the selection is enabled in the pivot table, then it will move left side to select previous row or column or individual cell. |
| <kbd>→</kbd> | <kbd>→</kbd> | Moves the cell focus right side. If the selection is enabled in the pivot table, then it will move right side to select next row or column or individual cell. |
| <kbd>Shift</kbd> + <kbd>↓</kbd> | <kbd>⇧</kbd> + <kbd>↓</kbd> | Extends the cell selection downwards. |
| <kbd>Shift</kbd> + <kbd>↑</kbd> | <kbd>⇧</kbd> + <kbd>↑</kbd> | Extends the cell selection selection upwards. |
| <kbd>Shift</kbd> + <kbd>←</kbd> | <kbd>⇧</kbd> + <kbd>←</kbd> | Extends the cell selection to the left side. |
| <kbd>Shift</kbd> + <kbd>→</kbd> | <kbd>⇧</kbd> + <kbd>→</kbd> | Extends the cell selection to the right side. |
| <kbd>Ctrl</kbd> + <kbd>A</kbd> | <kbd>⌘</kbd> + <kbd>A</kbd> | Selects all cells. |
| <kbd>Esc</kbd> | <kbd>Esc</kbd> | Deselects all cells. If the current active element is a context menu, then the context menu popup will be closed. |
| <kbd>Home</kbd> | <kbd>Home</kbd> | Goes to the first cell in the current row. |
| <kbd>End</kbd> | <kbd>End</kbd> | Goes to the last cell in the current row. |
| <kbd>Ctrl + Home</kbd> | <kbd>⌘</kbd> + <kbd>Home</kbd> | Goes to the first cell in the table. |
| <kbd>Ctrl + End</kbd> | <kbd>⌘</kbd> + <kbd>End</kbd> | Goes to the last cell in the table. |
| <kbd>Enter</kbd> | <kbd>Enter</kbd> | If the current cell is an expand/collapse cell, it performs expand/collapse operation (drill operation). If the current row/column header is in value sort state, it performs value sorting. If the current cell is in selection state, it moves to the next row, column or individual cell. If drill-through or editing is enabled in the pivot table, the drill-through dialog will be opened based on the selected value cell. If the current active element is a context menu popup, menu selection will be performed. |
| <kbd>Shift</kbd> + <kbd>Enter</kbd> | <kbd>⇧</kbd> + <kbd>Enter</kbd> | If value sorting is enabled in the pivot table and the current cell is a header with respect to its value axis, it performs value sorting to either ascending or descending order. If the current cell is in selection state, it moves to the previous row, column or individual cell. |
| <kbd>Ctrl</kbd> + <kbd>Enter</kbd> | <kbd>⌘</kbd> + <kbd>Enter</kbd> | If hyperlink is enabled in the current cell, it performs hyperlink selection. |
| <kbd>Shift</kbd> + <kbd>F10</kbd> or <kbd>Menu</kbd> | <kbd>⇧</kbd> + <kbd>F10</kbd> | If context menu is enabled in the pivot table, the context menu popup will be opened in the current cell. |

### Field List

| Windows | Mac | Actions |
| ----- | ----- | ---- |
| <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>F</kbd> | <kbd>⇧</kbd> + <kbd>⌘</kbd> + <kbd>F</kbd> | If the popup field list is enabled in either the pivot table or the pivot chart, the field list dialog will be opened. |
| <kbd>Tab</kbd> | <kbd>Tab</kbd> | Moves to the next active element in the field list. If no active elements are present, it moves to the next active element in the browser page. |
| <kbd>Shift</kbd> + <kbd>Tab</kbd> | <kbd>⇧</kbd> + <kbd>Tab</kbd> | Moves to the previous active element in the field list. If no active elements are present, it moves to the previous active element in the browser page. |
| <kbd>Shift</kbd> + <kbd>F</kbd> | <kbd>⇧</kbd> + <kbd>F</kbd> | If the current active element is a field's button and if it has a filter icon, the filter dialog will open to perform filtering. |
| <kbd>Shift</kbd> + <kbd>S</kbd> | <kbd>⇧</kbd> + <kbd>S</kbd> | If the current active element is a field's button and if it has a sort icon, the sorting will be performed to the selected field. |
| <kbd>Shift</kbd> + <kbd>E</kbd> | <kbd>⇧</kbd> + <kbd>E</kbd> | If the current active element is a calculated field's button and if it has an edit icon, the calculated field dialog will be opened to edit the selected calculated field. |
| <kbd>Enter</kbd> | <kbd>Enter</kbd> | Performs the selection operation of the current active element. If the current active element is a field's button and it has a dropdown icon, the aggregation menu will open to perform calculations using aggregation options to the selected value field. |
| <kbd>Delete</kbd> | <kbd>Delete</kbd> | If the current active element is a field's button, the selected field will be removed from the current report. |
| <kbd>↓</kbd> | <kbd>↓</kbd> | If the current active element is a tree node, it moves to the next node. |
| <kbd>↑</kbd> | <kbd>↑</kbd> | If the current active element is a tree node, it moves to the previous node. |
| <kbd>←</kbd> | <kbd>←</kbd> | If the current active element is a tree node, it collapses the current node. |
| <kbd>→</kbd> | <kbd>→</kbd> | If the current active element is a tree node, it expands the current node. |
| <kbd>Home</kbd> | <kbd>Home</kbd> | If the current active element is a tree node, it goes to the first node. |
| <kbd>End</kbd> | <kbd>End</kbd> | If the current active element is a tree node, it goes to the last node. |
| <kbd>Space</kbd> | <kbd>Space</kbd> | If the current active element is a tree node or a checkbox element, it will be either checked or unchecked. |
| <kbd>Esc</kbd> or <kbd>Escape</kbd> | <kbd>Escape</kbd> | Closes the popup field list dialog. |

### Grouping Bar

| Windows | Mac | Actions |
----- | ----- | --- |
| <kbd>Tab</kbd> | <kbd>Tab</kbd> | Moves to the next active element (field's button) in the grouping bar. If no active elements are present, it moves to the next active element in the browser page. |
| <kbd>Shift</kbd> + <kbd>Tab</kbd> | <kbd>⇧</kbd> + <kbd>Tab</kbd> | Moves to the previous active element (field's button) in the grouping bar. If no active elements are present, it moves to the previous active element in the browser page. |
| <kbd>Shift</kbd> + <kbd>F</kbd> | <kbd>⇧</kbd> + <kbd>F</kbd> | If the current active element is a field's button and if it has a filter icon, the filter dialog will be opened to perform filtering. |
| <kbd>Shift</kbd> + <kbd>S</kbd> | <kbd>⇧</kbd> + <kbd>S</kbd> | If the current active element is a field's button and if it has a sort icon, the sorting will be performed to the selected field. |
| <kbd>Shift</kbd> + <kbd>E</kbd> | <kbd>⇧</kbd> + <kbd>E</kbd> | If the current active element is a calculated field's button and if it has an edit icon, the calculated field dialog will be opened to perform editing the selected calculated field. |
| <kbd>Enter</kbd> | <kbd>Enter</kbd> | Performs the selection operation of the current active element. If the current active element is a field's button and if it has a dropdown icon, the aggregation menu will be opened to perform calculations using aggregation options to the selected value field. |
| <kbd>Delete</kbd> | <kbd>Delete</kbd> | If the current active element is a field's button, the selected field will be removed from the current report. |
| <kbd>↓</kbd> | <kbd>↓</kbd> | If the current active element is a dropdown list, the next item will be selected. |
| <kbd>↑</kbd> | <kbd>↑</kbd> | If the current active element is a dropdown list, the previous item will be selected. |
| <kbd>Home</kbd> | <kbd>Home</kbd> | If the current active element is a dropdown list, the first item will be selected. |
| <kbd>End</kbd> | <kbd>End</kbd> | If the current active element is a dropdown list, the last item will be selected. |
| <kbd>Alt</kbd> + <kbd>↓</kbd> | <kbd>⌥</kbd> + <kbd>↓</kbd> | If the current active element is a dropdown list, the popup will be opened. |
| <kbd>Alt</kbd> + <kbd>↑</kbd> | <kbd>⌥</kbd> + <kbd>↑</kbd> | If the current active element is a dropdown list, the popup will be closed. |
| <kbd>Esc</kbd> or <kbd>Escape</kbd> | <kbd>Escape</kbd> | Closes the dropdown list. |

### Filter Dialog

| Windows | Mac | Actions |
----- | ----- | ---- |
| <kbd>Shift</kbd> + <kbd>F</kbd> | <kbd>⇧</kbd> + <kbd>F</kbd> | If the current active element is a field's button and if it has a filter icon in either the field list or grouping bar UI, the filter dialog will be opened to perform filtering. |
| <kbd>Tab</kbd> | <kbd>Tab</kbd> | Moves to the next active element in the filter dialog. If no active elements present, it moves to the next active element in the browser page. |
| <kbd>Shift</kbd> + <kbd>Tab</kbd> | <kbd>⇧</kbd> + <kbd>Tab</kbd> | Moves to the previous active element in the filter dialog. If no active elements present, it moves to the previous active element in the browser page. |
| <kbd>↓</kbd> | <kbd>↓</kbd> | If the current active element is a tree node, it moves to the next node. |
| <kbd>↑</kbd> | <kbd>↑</kbd> | If the current active element is a tree node, it moves to the previous node. |
| <kbd>←</kbd> | <kbd>←</kbd> | If the current active element is a tree node, it collapses the current node. If the current active element is a tab, it moves focus to the previous tab element. |
| <kbd>→</kbd> | <kbd>→</kbd> | If the current active element is a tree node, it expands the current node. If the current active element is a tab, it moves focus to the next tab element. |
| <kbd>Home</kbd> | <kbd>Home</kbd> | If the current active element is a tree node, it goes to the first node. |
| <kbd>End</kbd> | <kbd>End</kbd> | If the current active element is a tree node, it goes to the last node. |
| <kbd>Space</kbd> | <kbd>Space</kbd> | If the current active element is a tree node or a checkbox element, it will be either checked or unchecked. |
| <kbd>Alt</kbd> + <kbd>↓</kbd> | <kbd>⌥</kbd> + <kbd>↓</kbd> | If the current active element is a DropDownList or DatePicker or DateTimePicker, the popup will be opened. |
| <kbd>Alt</kbd> + <kbd>↑</kbd> | <kbd>⌥</kbd> + <kbd>↑</kbd> | If the current active element is a DropDownList or DatePicker or DateTimePicker, the popup will be closed. |
| <kbd>Enter</kbd> | <kbd>Enter</kbd> | Performs the selection operation of the current active element. If the current active element is a tab, the current tab element will be selected. If the current active element is a tree node, the current node will be either checked or unchecked. If the current active element is DropDownList, the focus item will be selected, and the popup list will close when it is open. Otherwise, toggles the popup list. |
| <kbd>Esc</kbd> or <kbd>Escape</kbd> | <kbd>Escape</kbd> | Closes the filter dialog. |

### Calculated Field Dialog

| Windows | Mac | Actions |
----- | ----- | --- |
| <kbd>Shift + E</kbd> | <kbd>⇧</kbd> + <kbd>E</kbd> | If the current active element is a field's button and if it has an edit icon in either the field list or grouping bar UI, the calculated field dialog will be opened to perform editing the selected calculated field. |
| <kbd>Tab</kbd> | <kbd>Tab</kbd> | Moves to the next active element in the calculated field dialog. If no active elements present, it moves to the next active element in the browser page. |
| <kbd>Shift</kbd> + <kbd>Tab</kbd> | <kbd>⇧</kbd> + <kbd>Tab</kbd> | Moves to the previous active element in the calculated field dialog. If no active elements present, it moves to the previous active element in the browser page. |
| <kbd>↓</kbd> | <kbd>↓</kbd> | If the current active element is a tree node, it moves to the next node. |
| <kbd>↑</kbd> | <kbd>↑</kbd> | If the current active element is a tree node, it moves to the previous node. |
| <kbd>←</kbd> | <kbd>←</kbd> | If the current active element is a tree node, it collapses the current node. |
| <kbd>→</kbd> | <kbd>→</kbd> | If the current active element is a tree node, it expands the current node. If the current active element is a tree node and has a menu icon, the aggregation menu will be opened to select appropriate aggregation type to the selected field. |
| <kbd>Home</kbd> | <kbd>Home</kbd> | If the current active element is a tree node, it goes to the first node. |
| <kbd>End</kbd> | <kbd>End</kbd> | If the current active element is a tree node, it goes to the last node. |
| <kbd>Enter</kbd> | <kbd>Enter</kbd> | Performs the selection operation of the current active element. If the current active element is a tree node, it copies the selected field name/formula to the formula text area to perform calculations. |
| <kbd>Esc</kbd> or <kbd>Escape</kbd> | <kbd>Escape</kbd> | Closes the calculated field dialog. |

### Formatting Dialog

| Windows | Mac | Actions |
----- | ----- | --- |
| <kbd>Tab</kbd> | <kbd>Tab</kbd> | Moves to the next active element in the formatting dialog. If no active elements present, it moves to the next active element in the browser page. |
| <kbd>Shift + Tab</kbd> | <kbd>⇧</kbd> + <kbd>Tab</kbd> | Moves to the previous active element in the formatting dialog. If no active elements present, it moves to the previous active element in the browser page. |
| <kbd>↓</kbd> | <kbd>↓</kbd> | If the current active element is a DropDownList, the next item will be selected. |
| <kbd>↑</kbd> | <kbd>↑</kbd> | If the current active element is a DropDownList, the previous item will be selected. |
| <kbd>Home</kbd> | <kbd>Home</kbd> | If the current active element is a DropDownList, the first item will be selected. |
| <kbd>End</kbd> | <kbd>End</kbd> | If the current active element is a DropDownList, the last item will be selected. |
| <kbd>Alt</kbd> + <kbd>↓</kbd> | <kbd>⌥</kbd> + <kbd>↓</kbd> | If the current active element is a DropDownList or ColorPicker, the popup will be opened. |
| <kbd>Alt</kbd> + <kbd>↑</kbd> | <kbd>⌥</kbd> + <kbd>↑</kbd> | If the current active element is a DropDownList or ColorPicker, the popup will be closed. |
| <kbd>Enter</kbd> | <kbd>Enter</kbd> | Performs the selection operation of the current active element. |
| <kbd>Esc or Escape</kbd> | <kbd>Escape</kbd> | Closes the formatting dialog. |

### Toolbar

| Windows | Mac | Actions |
----- | ----- | --- |
| <kbd>Tab</kbd> | <kbd>Tab</kbd> | Moves to the next active option in the toolbar. If no active elements present, it moves to the next active element in the browser page. |
| <kbd>Shift + Tab</kbd> | <kbd>⇧</kbd> + <kbd>Tab</kbd> | Moves to the previous active option in the toolbar. If no active elements present, it moves to the previous active element in the browser page. |
| <kbd>Enter</kbd> | <kbd>Enter</kbd> | Performs the selection operation of the current active element. |

### Drill-Through Dialog

| Windows | Mac | Actions |
----- | ----- | --- |
| <kbd>Tab</kbd> | <kbd>Tab</kbd> | Moves to the next active element in the drill-through dialog. If the current active element is a Grid cell, it moves the cell focus to right side. If no active elements present, then it moves to the next active element in the browser page. |
| <kbd>Shift</kbd> + <kbd>Tab</kbd> | <kbd>⇧</kbd> + <kbd>Tab</kbd> | Moves to the previous active element in the drill-through dialog. If the current active element is a Grid cell, it moves the cell focus to left side. If no active elements present, then it moves to the previous active element in the browser page. |
| <kbd>↓</kbd> | <kbd>↓</kbd> | Moves the row/cell focus downwards. |
| <kbd>↑</kbd> | <kbd>↑</kbd> | Moves the row/cell focus upwards. |
| <kbd>←</kbd> | <kbd>←</kbd> | Moves the cell focus left side. |
| <kbd>→</kbd> | <kbd>→</kbd> | Moves the cell focus right side. |
| <kbd>Home</kbd> | <kbd>Home</kbd> | Goes to the first cell in the current row. |
| <kbd>End</kbd> | <kbd>End</kbd>  | Goes to the last cell in the current row. |
| <kbd>Ctrl</kbd> + <kbd>Home</kbd> | <kbd>⌘</kbd> + <kbd>Home</kbd> | Goes to the first cell in the table. |
| <kbd>Ctrl</kbd> + <kbd>End</kbd> | <kbd>⌘</kbd> + <kbd>End</kbd> | Goes to the last cell in the table. |
| <kbd>Enter</kbd> | <kbd>Enter</kbd> | Performs the selection operation of the current active element. |
| <kbd>Esc</kbd> or <kbd>Escape</kbd> | <kbd>Escape</kbd> | If the cell is in selected state, then it deselects all rows/cells. If the row/cell is in edit state, it cancels the current entries in the row/cell. If the current active element is not a row/cell, it closes the drill-through dialog. |
| <kbd>F2</kbd> | <kbd>F2</kbd> | Initiate editing a row/cell in the data grid. |
| <kbd>Insert</kbd> | <kbd>Insert</kbd> | Adds a new row/cell in the data grid. |
| <kbd>Delete</kbd> | <kbd>Delete</kbd> | Removes the selected row in the data grid. |

### Common keyboard combinations for dialogs

The following shortcuts apply to all Pivot Table dialogs (filter, calculated field, formatting, drill-through, and so on).

| Windows | Mac | Actions |
| ----- | ----- | --- |
| <kbd>Tab</kbd> | <kbd>Tab</kbd> | Moves to the next active element in the dialog. If either no active elements present in the dialog or an overlay is not present in the dialog, it moves to the next active element in the browser page. |
| <kbd>Shift + Tab</kbd> | <kbd>⇧</kbd> + <kbd>Tab</kbd> | Moves to the previous active element in the dialog. If either no active elements present in the dialog or an overlay is not present in the dialog, it moves to the previous active element in the browser page. |
| <kbd>Space</kbd> | <kbd>Space</kbd> | If the current active element is a tree node or a checkbox element, it will be either checked or unchecked. |
| <kbd>Enter</kbd> | <kbd>Enter</kbd> | When the Dialog button or any input (except text area) is in focus state, when pressing the <kbd>Enter</kbd> key, the click event associated with the primary button or button will be triggered. The <kbd>Enter</kbd> key will not be worked, when the dialog content contains any text area with initial focus. |
| <kbd>Esc</kbd> or <kbd>Escape</kbd> | <kbd>Escape</kbd> | Closes the dialog. |

## Ensuring accessibility

The pivot table component's accessibility levels are ensured through an [axe-core](https://www.nuget.org/packages/Deque.AxeCore.Playwright) with playwright tests.

The accessibility compliance of the pivot table component is shown in the following sample. Open the [sample](https://blazor.syncfusion.com/accessibility/pivot-table) in a new window to evaluate the accessibility of the pivot table component with accessibility tools.

## See also

* [Accessibility in Blazor components](https://blazor.syncfusion.com/documentation/common/accessibility) — Cross-component accessibility guidance that applies to all Syncfusion Blazor controls.
* [Globalization in Blazor Pivot Table](https://blazor.syncfusion.com/documentation/common/globalization) — Configure RTL, culture, and localization settings, which affect accessibility for non-English users.
