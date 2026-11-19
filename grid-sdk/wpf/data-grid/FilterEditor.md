---
layout: post
title: Filter Editor in WPF Data Grid | Syncfusion®
description: Filter Editor in Data Grid allows users to create complex filter criteria, configure the Filter Editor Panel, and manage applied filters.
platform: grid-sdk
control: Data Grid
documentation: ug
appliesto: UI Component Suite, Grid SDK
---

# Filter Editor in WPF Data Grid

[WPF Data Grid](https://www.syncfusion.com/wpf-controls/datagrid) allows you to create complex filter criteria by combining multiple conditions with logical operators and nested groups through the Filter Editor. The applied filter criteria can be displayed in the Filter Editor Panel, which stays synchronized with the supported filtering operations performed in the Grid.

Before enabling the Filter Editor, ensure filtering is enabled by setting [SfDataGrid.AllowFiltering](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.Grid.SfGridBase.html#Syncfusion_UI_Xaml_Grid_SfGridBase_AllowFiltering) to `true`.

![Filter Editor](Filter-Editor-images/wpf-datagrid-filter-editor.png)

## Enable Filter Editor

You can enable the Filter Editor by setting the `SfDataGrid.EnableFilterEditor` property to `true`. The default value is `false`.

When `EnableFilterEditor` is set to `true`, the Filter Editor action is displayed in the column filter popup. The Edit Filter icon is also displayed in the Filter Editor Panel.

{% tabs %}
{% highlight xaml %}
<syncfusion:SfDataGrid x:Name="dataGrid"
                       AllowFiltering="True"
                       AutoGenerateColumns="True"
                       EnableFilterEditor="True"
                       ItemsSource="{Binding Orders}" />
{% endhighlight %}
{% highlight c# %}
this.dataGrid.EnableFilterEditor = true;
{% endhighlight %}
{% endtabs %}

N> The `EnableFilterEditor` property controls the availability of the Filter Editor actions in the column filter popup and Filter Editor Panel. It does not control the visibility or position of the Filter Editor Panel.

## Open Filter Editor

You can open the Filter Editor in the following ways:

* From the column filter popup.
* From the Filter Editor Panel.

### Open from the column filter popup

You can open the Filter Editor by clicking the filter icon in the column header and selecting the **Filter Editor** action from the column filter popup.

![Filter Editor in Filter Popup](Filter-Editor-images/wpf-datagrid-filter-editor-popup.png)

### Open from the Filter Editor Panel

You can click the **Edit Filter** icon in the Filter Editor Panel to open the Filter Editor and modify the current filter criteria. After applying the updated filter criteria, the Grid records and the filter expression displayed in the Filter Editor Panel are refreshed.

![Filter Editor Panel](Filter-Editor-images/wpf-datagrid-filter-editor-panel-edit.png)

## Apply filter criteria

The Filter Editor allows you to create filter criteria by selecting a field, filter operator, and filter value. You can add multiple filter conditions and combine them using the `AND` or `OR` logical operator.

You can also organize the conditions into nested groups to create complex filter expressions.

![Complex filter expression](Filter-Editor-images/wpf-datagrid-complex-filter-expression.png)

The Filter Editor provides the following actions:

* **Apply** - Applies the current filter criteria to the Grid and keeps the Filter Editor open.
* **OK** - Applies the current filter criteria to the Grid and closes the Filter Editor.
* **Cancel** - Discards the pending changes and closes the Filter Editor.

After applying the filter criteria, the Grid displays the records that satisfy the filter expression. The applied filter expression is also displayed in the Filter Editor Panel when the panel position is set to `Top` or `Bottom`.


## Filter Editor Panel

The Filter Editor Panel displays the current filter criteria applied to the Grid and supports the following actions:

* Enable or suspend the applied filter.
* Expand or collapse the displayed expression.
* Open the Filter Editor to modify the filter criteria.
* Hide the panel without clearing the applied filter.

The panel is synchronized with the filtering changes performed through the supported Grid filtering options.

You can display the Filter Editor Panel by setting the `SfDataGrid.FilterPanelPosition` property to `Top` or `Bottom`. The default value is `None`.

| Value     | Description                                                |
|-----------|------------------------------------------------------------|
| **Top**    | Displays the Filter Editor Panel above the records. |
| **Bottom** | Displays the Filter Editor Panel below the records. |
| **None**   | Hides the Filter Editor Panel.                             |

{% tabs %}
{% highlight xaml %}
<syncfusion:SfDataGrid x:Name="dataGrid"
                       AllowFiltering="True"
                       AutoGenerateColumns="True"
                       EnableFilterEditor="True"
                       FilterPanelPosition="Bottom"
                       ItemsSource="{Binding Orders}" />
{% endhighlight %}
{% highlight c# %}
this.dataGrid.FilterPanelPosition = FilterPanelPosition.Bottom;
{% endhighlight %}
{% endtabs %}

![Filter Editor Panel as Bottom](Filter-Editor-images/wpf-datagrid-filter-editor-panel-bottom.png)

![Filter Editor Panel as Top](Filter-Editor-images/wpf-datagrid-filter-editor-panel-top.png)

N> Setting `FilterPanelPosition` to `None` hides only the Filter Editor Panel. It does not clear or modify the filters applied to the Grid.

## Expand or collapse the filter expression

The Filter Editor Panel displays the filter expression in a compact single-line view by default.

When the complete expression cannot be displayed within the available width, the expand icon is displayed. You can click the expand icon to display the expression in multiple wrapped lines.

You can click the collapse icon to return the expression to the compact single-line view.

Expanding or collapsing the filter expression changes only its presentation and does not modify the applied filter.

![Filter Editor Panel expanded](Filter-Editor-images/wpf-datagrid-filter-editor-panel-expanded.png)

## Enable or suspend filtering

You can use the **Enable Filter** CheckBox in the Filter Editor Panel to enable or suspend the applied filter criteria.

When the CheckBox is checked, the retained filter criteria are applied to the Grid. When the CheckBox is unchecked, filtering is suspended without removing the retained filter criteria.

When filtering is suspended by unchecking the CheckBox, you can reapply the retained filter criteria by checking the CheckBox again.

The CheckBox always reflects the current filtering state of the Grid.

![Enable Filter](Filter-Editor-images/wpf-datagrid-enable-filter-panel.png)

## Close the Filter Editor Panel

You can click the Close icon in the Filter Editor Panel to hide the panel. Closing the panel changes only its visibility and does not clear or modify the filter criteria applied to the Grid.

When `FilterPanelPosition` is set to **Top** or **Bottom**, the panel becomes visible again after a filtering change.

When `FilterPanelPosition` is set to **None**, the panel remains hidden even after subsequent filtering changes.

Closing the Filter Editor Panel does not:

* Clear the filters applied to the Grid.
* Modify the retained filter criteria.
* Change the configured `FilterPanelPosition`.
* Disable filtering in the Grid.

## Filter synchronization

The Filter Editor and Filter Editor Panel are synchronized with the supported filtering operations in the Grid.

The filter criteria and panel state are updated when filtering is performed through:

* [Checkbox Filter UI](wpf/DataGrid/filtering).
* [Advanced Filter UI](wpf/DataGrid/filtering).
* [Filter Row](wpf/DataGrid/filterrow).
* [GridColumn Filter Predicates](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.Grid.GridColumn.html#Syncfusion_UI_Xaml_Grid_GridColumn_FilterPredicates).
* Filter Editor.

When the filtering state changes:

* The Grid displays the records that satisfy the updated filter.
* The Filter Editor Panel displays the updated filter expression.
* The Enable Filter CheckBox reflects the active filtering state.
* A manually closed panel becomes visible again when `FilterPanelPosition` is set to **Top** or **Bottom**.
* The panel remains hidden when `FilterPanelPosition` is set to **None**.

N> The `EnableFilterEditor` property does not control filter synchronization. It controls only the availability of the Filter Editor action in the column filter popup and the Edit Filter icon in the Filter Editor Panel.

## Styling

You can customize the appearance of the Filter Editor and the Filter Editor Panel by using the following `SfDataGrid` properties.

| Property | Type | Default | Target type |
|----------|------|---------|-------------|
| `FilterEditorStyle` | `Style` | `null` | `SfFilterEditor` |
| `FilterPanelStyle` | `Style` | `null` | `FilterEditorPanel` |

### Customize the Filter Editor

You can set the `SfDataGrid.FilterEditorStyle` property to customize the Filter Editor opened by the Grid. The style must target `SfFilterEditor`. The style is applied each time the Filter Editor is opened.

The `SfFilterEditor` control exposes the following brush properties.

| Property | Description |
|----------|-------------|
| `FieldForeground` | Foreground of the field selector. |
| `OperatorForeground` | Foreground of the operator selector. |
| `ValueForeground` | Foreground of the value editor. |
| `NodeBorderBrush` | Border brush of the condition and group nodes. |
| `ConnectorBrush` | Brush of the connector lines between nodes. |
| `ValidationBrush` | Brush used to indicate an invalid value. |

The `Background`, `Foreground`, `BorderBrush` and `BorderThickness` properties are also set by the default style.

{% tabs %}
{% highlight xaml %}
<Window.Resources>
    <Style x:Key="customFilterEditorStyle" TargetType="filtereditor:SfFilterEditor">
        <Setter Property="Background" Value="#FFF7F7FB" />
        <Setter Property="FieldForeground" Value="DarkSlateBlue" />
        <Setter Property="OperatorForeground" Value="DarkGreen" />
        <Setter Property="ValueForeground" Value="Black" />
        <Setter Property="ConnectorBrush" Value="SlateGray" />
        <Setter Property="ValidationBrush" Value="Crimson" />
    </Style>
</Window.Resources>

<syncfusion:SfDataGrid x:Name="dataGrid"
                       AllowFiltering="True"
                       AutoGenerateColumns="True"
                       EnableFilterEditor="True"
                       FilterEditorStyle="{StaticResource customFilterEditorStyle}"
                       ItemsSource="{Binding Orders}" />
{% endhighlight %}
{% highlight c# %}
this.dataGrid.FilterEditorStyle = this.FindResource("customFilterEditorStyle") as Style;
{% endhighlight %}
{% endtabs %}

N> Add the `xmlns:filtereditor="clr-namespace:Syncfusion.Data.FilterEditor;assembly=Syncfusion.Data.WPF"` namespace to the window. The `Syncfusion.Data.WPF` assembly is required.

### Customize the Filter Editor Panel

You can set the `SfDataGrid.FilterPanelStyle` property to customize the Filter Editor Panel without replacing the panel instance. The style is reapplied when the Grid template is reapplied. Setting the property to `null` restores the default style.

The `FilterEditorPanel` control exposes the following properties for the filter expression tokens.

| Property | Description |
|----------|-------------|
| `MemberBackground` | Background of the field name tokens. |
| `MemberForeground` | Foreground of the field name tokens. |
| `ValueBackground` | Background of the value tokens. |
| `ValueForeground` | Foreground of the value tokens. |

{% tabs %}
{% highlight xaml %}
<Window.Resources>
    <Style x:Key="customFilterPanelStyle" TargetType="filtereditor:FilterEditorPanel">
        <Setter Property="Background" Value="#FFF7F7FB" />
        <Setter Property="Foreground" Value="#FF202020" />
        <Setter Property="BorderBrush" Value="SlateGray" />
        <Setter Property="MemberBackground" Value="LightSteelBlue" />
        <Setter Property="ValueBackground" Value="Honeydew" />
    </Style>
</Window.Resources>

<syncfusion:SfDataGrid x:Name="dataGrid"
                       AllowFiltering="True"
                       AutoGenerateColumns="True"
                       EnableFilterEditor="True"
                       FilterPanelPosition="Bottom"
                       FilterPanelStyle="{StaticResource customFilterPanelStyle}"
                       ItemsSource="{Binding Orders}" />
{% endhighlight %}
{% highlight c# %}
this.dataGrid.FilterPanelStyle = this.FindResource("customFilterPanelStyle") as Style;
{% endhighlight %}
{% endtabs %}

### Customize using resource keys

The default appearance is defined by brush resources. You can override these resource keys in the application or window resources.

| Resource key | Applies to |
|--------------|------------|
| `FilterEditorPanelBackground`, `FilterEditorPanelBorderBrush`, `FilterEditorPanelForeground` | Filter Editor Panel |
| `FilterEditorPanelButtonForeground`, `FilterEditorPanelButtonHoverBackground`, `FilterEditorPanelButtonPressedBackground` | Panel icon buttons |
| `FilterExpressionMemberBackground`, `FilterExpressionMemberForeground`, `FilterExpressionValueBackground`, `FilterExpressionValueForeground` | Expression tokens |

Verification Required – Source information unavailable: whether overriding these keys in application resources takes effect when a Syncfusion theme is applied. Applied themes define their own `SfFilterEditor.*` keys and styles.

### Customize the control template

Verification Required – Source information unavailable: a supported, documented scenario for replacing the `SfFilterEditor` or `FilterEditorPanel` template through `FilterEditorStyle` or `FilterPanelStyle`.

The default `SfFilterEditor` template defines the following parts, which the control looks up by name: `PART_RootGroupControl`, `PART_ApplyButton`, `PART_OkButton` and `PART_CancelButton`. A custom template should retain these parts.

N> The `FilterEditorStyle` and `FilterPanelStyle` properties customize the Filter Editor and Filter Editor Panel only. They do not change the appearance of the column filter popup.

## Theme Support

The Filter Editor and Filter Editor Panel support the built-in Syncfusion themes. Apply a theme to the Grid by using [SfSkinManager](https://help.syncfusion.com/wpf/themes/skin-manager). The Filter Editor and Filter Editor Panel then use the theme styles and colors without additional configuration.

{% tabs %}
{% highlight xaml %}
<Window xmlns:syncfusion="http://schemas.syncfusion.com/wpf"
        xmlns:sfskin="clr-namespace:Syncfusion.SfSkinManager;assembly=Syncfusion.SfSkinManager.WPF"
        sfskin:SfSkinManager.Theme="{sfskin:SkinManager ThemeName=FluentLight}">
    <syncfusion:SfDataGrid x:Name="dataGrid"
                           AllowFiltering="True"
                           AutoGenerateColumns="True"
                           EnableFilterEditor="True"
                           FilterPanelPosition="Bottom"
                           ItemsSource="{Binding Orders}" />
</Window>
{% endhighlight %}
{% highlight c# %}
SfSkinManager.SetTheme(this, new Theme("FluentLight"));
{% endhighlight %}
{% endtabs %}

N> Reference the theme assembly, for example `Syncfusion.Themes.FluentLight.WPF`, in the project.

### Supported themes

The Filter Editor theme resources are available in the following themes:

* Fluent Light and Fluent Dark
* Material 3 Light and Material 3 Dark
* Material Light, Material Dark, Material Light Blue and Material Dark Blue
* Office 2019 Black, Colorful, Dark Gray, White, High Contrast and High Contrast White
* Windows 11 Light and Windows 11 Dark
* System Theme

### Customize themes using ThemeStudio

You can create a custom theme by using [ThemeStudio](https://help.syncfusion.com/wpf/themes/theme-studio#creating-custom-theme). The Filter Editor is included in the ThemeStudio `SfFilterEditor` resources. The following semantic keys are available for customization.

| Resource key | Description |
|--------------|-------------|
| `SfFilterEditor.Static.Background`, `SfFilterEditor.Static.Foreground`, `SfFilterEditor.Static.Border` | Editor background, foreground and border. |
| `SfFilterEditor.Static.PopupBorder`, `SfFilterEditor.PopupFallback.Background` | Dropdown popup border and fallback background. |
| `SfFilterEditor.Static.IconForeground`, `SfFilterEditor.Static.Underline` | Icon and underline colors. |
| `SfFilterEditor.MouseOver.Background`, `SfFilterEditor.Pressed.Background` | Interaction states. |
| `SfFilterEditor.Validation.Border`, `SfFilterEditor.Group.Static.Border` | Validation and group borders. |
| `SfFilterEditor.CaseSensitive.Active.Background`, `SfFilterEditor.CaseSensitive.Active.Foreground` | Active case-sensitive button. |
| `SfFilterEditor.FilterPanel.Static.Background`, `SfFilterEditor.FilterPanel.Static.Foreground`, `SfFilterEditor.FilterPanel.Static.Border` | Filter Editor Panel. |
| `SfFilterEditor.FilterPanel.Button.Static.Foreground`, `SfFilterEditor.FilterPanel.Button.MouseOver.Background`, `SfFilterEditor.FilterPanel.Button.Pressed.Background` | Panel icon buttons. |
| `SfFilterEditor.Expression.Member.Background`, `SfFilterEditor.Expression.Member.Foreground`, `SfFilterEditor.Expression.Value.Background`, `SfFilterEditor.Expression.Value.Foreground` | Expression tokens. |
| `SfFilterEditor.Window.CloseButton.MouseOver.Background`, `SfFilterEditor.Window.CloseButton.Pressed.Background` | Filter Editor window close button. |

Verification Required – Source information unavailable: runtime theme switching of an already-open Filter Editor window.

## Limitations

The following limitations apply to the Filter Editor integration:

* Filter criteria can be created only for the fields available through the [SfDataGrid.Columns](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.Grid.SfDataGrid.html#Syncfusion_UI_Xaml_Grid_SfDataGrid_Columns).
* Columns for which filtering is disabled are not available for creating filter conditions.
* Filters applied using the [SfDataGrid.View.Filter](https://help.syncfusion.com/cr/wpf/Syncfusion.Data.CollectionViewAdv.html#Syncfusion_Data_CollectionViewAdv_Filter) delegate are not displayed as editable filter expressions in the Filter Editor.