# DataGrid

## Bug Fixes

- `#I886893` - Resolved issues related to grouping with frozen columns and stacked headers, ensuring proper group caption display, consistent group row background rendering during horizontal scrolling, and correct column alignment after resizing.

- `#I888761` - Resolved an issue where column text was not displayed correctly next to frozen columns after performing column auto-fit operations in a grouped Grid.

- `#I890402` - Resolved an exception thrown when opening the foreign key column filter dialog while the Grid was loading its initial data.

## Features

- Added support for NodaTime data types in the Grid, enabling seamless data operations such as formatting, filtering, sorting, editing, and CRUD operations.

- Added support for infinite scrolling without requiring the total item count, enabling on-demand data loading and improved performance when working with large remote data sources.

    **Code Example:**

    ```cshtml
    <SfGrid DataSource="@GridData" AllowFiltering="true" Height="400px" EnableInfiniteScrolling="true">
        <GridInfiniteScrollSettings EnableUnboundedScrolling="true"></GridInfiniteScrollSettings>
        <GridColumns>
            <GridColumn Field="@nameof(OrderData.OrderID)" HeaderText="Order ID" Width="100"></GridColumn>
            <GridColumn Field="@nameof(OrderData.OrderDate)" HeaderText="Order Date" Format="dd/MM/yyyy HH:mm" Type="ColumnType.DateTime" Width="100"></GridColumn>
            <GridColumn Field="@nameof(OrderData.CustomerName)" HeaderText="Customer Name" Width="100"></GridColumn>
        </GridColumns>
    </SfGrid>
    ```
