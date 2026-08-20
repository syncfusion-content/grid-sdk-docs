---
layout: post
title: How to Get Count of Visible Records in WPF Pivot Table | Syncfusion®
description: Get the count of records currently visible in Syncfusion® WPF Pivot Table control using the VisibleRecords property of PivotEngine.
platform: grid-sdk
control: Pivot Table
documentation: ug
---

# How to Get Count of Visible Records in WPF Pivot Table

It is possible to get the count of records which are currently visible in PivotGrid by using `VisibleRecords` property.

After defining the PivotGrid control, raise its loaded event. Inside the `pivotGrid_Loaded` event, you can get the list of `VisibleRecords` from the PivotEngine and store it as a separate collection.

Please refer the below code sample. 

{% highlight C# %}

    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
            pivotGrid.Loaded += pivotGrid_Loaded;
        }
        void pivotGrid_Loaded(object sender, RoutedEventArgs e)
        {
            List<object> VisibleRecords = pivotGrid.PivotEngine.VisibleRecords;
            int _count = VisibleRecords.Count;
        }

    }

{% endhighlight %}
