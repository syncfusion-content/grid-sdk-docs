---
layout: post
title: Change GridLine Color and Thickness in WPF Pivot Table | Syncfusion®
description: Change the grid line color and thickness in Syncfusion® WPF Pivot Table control using GridLineStroke and BorderThickness properties.
platform: grid-sdk
control: Pivot Table
documentation: ug
---

# How to Change GridLine Color and Thickness in WPF Pivot Table

The color and thickness of the grid lines can be modified using the `GridLineStroke` property of the PivotGridControl and the `BorderThickness` property of PivotGridCellStyle.

If through *XAML*, please refer the below code sample.

{% highlight xaml %}

    <syncfusion:PivotGridControl HorizontalAlignment="Left" Name="pivotGrid" VerticalAlignment="Top" ItemSource="{Binding Source={StaticResource data}}">
        <syncfusion:PivotGridControl.GridLineStroke>
            <SolidColorBrush Color="DeepPink"/>
        </syncfusion:PivotGridControl.GridLineStroke>
        <syncfusion:PivotGridControl.ValueCellStyle>
            <syncfusion:PivotGridCellStyle BorderThickness="2"/>
        </syncfusion:PivotGridControl.ValueCellStyle>
    </syncfusion:PivotGridControl>
     
{% endhighlight %}

Else if through *Code-Behind*, please refer the below code sample.

{% highlight C# %}

public MainWindow() {
    InitializeComponent();
    pivotGrid.GridLineStroke = new SolidColorBrush(Colors.Black);
    pivotGrid.ValueCellStyle.BorderThickness = 2;
}
		
{% endhighlight %}


