---
layout: post
title: Formula Editor in Syncfusion ASP.NET MVC Grid Component
description: Learn here all about formula editor in Syncfusion ASP.NET MVC Grid component of Syncfusion Essential JS 2 and more.
platform: grid-sdk
control: Formula Editor
documentation: ug
---

# Formula Editor in ASP.NET MVC Data Grid

The formula editor is used for editing values in formula-enabled columns. Opening a formula cell for editing through this default editor reveals the underlying expression, converted into column-letter and row-number notation, while the calculated value is displayed when editing is complete.

## Enabling default editor

To enable formula editing, register the `EditModule`, set [editSettings.allowEditing](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Grids.GridEditSettings.html#Syncfusion_EJ2_Grids_GridEditSettings_AllowEditing) to `true`, enable formulas through set [allowFormula](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Grids.GridColumn.html#Syncfusion_EJ2_Grids_GridColumn_AllowFormula) to `true` for the required columns.

The default editor is automatically available for formula-enabled columns in an editable grid. Opening a formula-enabled cell for editing displays the formula expression in column-letter and row-number notation, such as **=D1*E1**.

Cells and ranges referenced by the formula are highlighted while editing. Selecting another cell inserts or updates a reference in the expression. The highlights are removed when editing ends.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-mvc/grid/formula/formula-editor/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Formula-editor.cs" %}
{% include code-snippet/grid-sdk/asp-net-mvc/grid/formula/formula-editor/formula-editor.cs %}
{% endhighlight %}
{% endtabs %}

## Preventing formula cell editor

Editing can be disabled for a formula-enabled column by setting `allowEditing` to `false` on that column. The column still evaluates formulas and displays calculated results, but the user cannot directly edit the formula value from the grid UI.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-mvc/grid/formula/prevent-formula-editor/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Prevent-formula-editor.cs" %}
{% include code-snippet/grid-sdk/asp-net-mvc/grid/formula/prevent-formula-editor/prevent-formula-editor.cs %}
{% endhighlight %}
{% endtabs %}

## See also

- [Formulas](./formula)
- [Formula reference](./formula-reference)
- [Custom formula functions](./custom-formula)
- [Editing](../editing/cell-editing)