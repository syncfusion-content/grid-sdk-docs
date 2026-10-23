# Progress: DataGrid Methods page

Working file for the writer agent. Keep it out of the commit.
Package version used: unknown (API reference page used directly)

## Inventory (one row per overload)

Reflection count: _fill in_   Rows below: _fill in_ (must match)

| # | Method | Signature | Group | Sample | Section written |
|---|--------|-----------|-------|--------|-----------------|
| 1 | PrintAsync | PrintAsync() | Export and print | todo | todo |

Sample status: built and verified. Section status: drafted and reviewed.

## Groups (approved by human: yes / no)

| Group | Purpose (one sentence) | Methods | Status |
|-------|------------------------|---------|--------|
| Export and print | Print or export the grid data. | `PrintAsync`, `ExportToExcelAsync`, `ExportToPdfAsync`, `ExportToCsvAsync` | draft |
| Grouping | Group and ungroup columns and expand or collapse grouped rows. | `GroupColumnAsync`, `UngroupColumnAsync`, `ExpandAllGroupAsync`, `CollapseAllGroupAsync`, `ClearGroupingAsync` | draft |
| Paging and navigation | Move between pages and jump to rows. | `GoToPageAsync`, `UpdatePageSizeAsync`, `FindGoToAsync` | draft |
| Selection | Select or clear rows and cells. | `SelectRowAsync`, `SelectRowsAsync`, `SelectRowsByRangeAsync`, `SelectCellAsync`, `SelectCellsAsync`, `SelectCellsByRangeAsync`, `ClearSelectionAsync`, `ClearRowSelectionAsync`, `ClearCellSelectionAsync`, `GetSelectedRecordsAsync`, `GetSelectedRowIndexesAsync`, `GetSelectedRowCellIndexesAsync` | draft |
| Searching | Search and manage find highlights. | `SearchAsync`, `FindHighlightAsync`, `FindNextHighlightAsync`, `FindPreviousHighlightAsync`, `ResetFindAsync` | draft |
| Sorting and filtering | Sort columns and clear sort or filter criteria. | `SortColumnAsync`, `SortColumnsAsync`, `ClearSortingAsync`, `FilterByColumnAsync`, `ClearFilteringAsync` | draft |
| State persistence | Save, restore, or clear persisted state. | `GetPersistDataAsync`, `SetPersistDataAsync`, `ResetPersistDataAsync` | draft |
| Clipboard | Copy or paste grid data. | `CopyAsync`, `PasteAsync` | draft |
| Layout and refresh | Fit, reorder, and refresh the grid. | `AutoFitColumnAsync`, `AutoFitColumnsAsync`, `ReorderColumnAsync`, `RefreshAsync`, `RefreshColumnsAsync`, `RefreshHeaderAsync`, `ShowSpinnerAsync`, `HideSpinnerAsync` | draft |

All groups implemented in methods.md; preview links still need manual assignment.

## Playground links to create (a person fills these in)

| Group | Sample | Playground link |
|-------|--------|-----------------|
| Export and print | methods.md export sample | pending |

## Existing pages reused as sample sources

| Group | Existing page | What was reused |
|-------|---------------|-----------------|
| Export and print | print.md | `PrintAsync` sample (`PrintContent` handler, `OrderData`) |

## Prerequisites found while testing (these go ABOVE the example)

- Export and print: `AllowExcelExport="true"` is required for Excel and CSV export. `AllowPdfExport="true"` is required for PDF export.

## Other surprises

- None yet.

## Open questions

- Exact method inventory and overload signatures still need confirmation from reflection over `SfGrid<>`.

## Review log

| Round | Verdict | Open findings | Date |
|-------|---------|---------------|------|
| 1     |         |               |      |
