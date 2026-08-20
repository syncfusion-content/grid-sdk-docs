---
layout: post
title: How to Improve Performance in WPF Pivot Table | Syncfusion®
description: Improve loading and scrolling performance in Syncfusion® WPF Pivot Table control by enabling on-demand calculations and disabling auto-sizing.
platform: grid-sdk
control: Pivot Table
documentation: ug
---

# How to Improve Loading and Scrolling Performance in WPF Pivot Table

The performance of the PivotGrid control can be improved by enabling the on-demand calculation on the value cells and by disabling the auto-sizing option. This refreshes the calculation only while loading or scrolling the PivotGrid control. This can be achieved by using `EnableOnDemandCalculations` and `AutoSizeOption` properties of PivotGrid control.

Please refer the below code snippet.

{% highlight C# %}

        public MainWindow()
        {
            InitializeComponent();
            pivotGrid.AutoSizeOption = GridAutoSizeOption.None;
            pivotGrid.PivotEngine.EnableOnDemandCalculations = true;
        }

{% endhighlight %}
