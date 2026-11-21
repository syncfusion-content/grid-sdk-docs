---
layout: post
title: Paging in WPF TreeGrid | Syncfusion®
description: Paging in TreeGrid displays data in pages to improve navigation, performance, and the overall browsing experience.
platform: grid-sdk
control: TreeGrid
documentation: ug
appliesto: UI Component Suite, Grid SDK
---

# Paging in WPF TreeGrid

SfTreeGrid provides support to manipulate the nodes using SfDataPager control. You can refer [SfDataPager](https://help.syncfusion.com/wpf/datapager/overview) control user guide for more information.

## Getting started

Follow the below steps to bind SfTreeGrid with SfDataPager.
 
1. Create `IEnumerable` collection that you want to bind and set it to [SfDataPager.Source](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.Controls.DataPager.SfDataPager.html#Syncfusion_UI_Xaml_Controls_DataPager_SfDataPager_Source) property.

2. Set [SfDataPager.PageSize](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.Controls.DataPager.SfDataPager.html#Syncfusion_UI_Xaml_Controls_DataPager_SfDataPager_PageSize) property to specify the number of `RootNodes` to be displayed per page. By default, only the root nodes are counted for the page size. To count all the visible rows instead, refer to [PageSizeMode](#pagesizemode).

3. Bind [SfDataPager.PagedSource](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.Controls.DataPager.SfDataPager.html#Syncfusion_UI_Xaml_Controls_DataPager_SfDataPager_PagedSource) to [SfTreeGrid.ItemsSource](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.TreeGrid.SfTreeGrid.html#Syncfusion_UI_Xaml_TreeGrid_SfTreeGrid_ItemsSource) property. So whenever the page is changed, `PagedSource` will be update based on current page.

N> Paging supports all types of [TreeGridView](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.TreeGrid.TreeGridView.html), except when using `SfTreeGrid` in unbound mode ([TreeGridUnBoundView](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.TreeGrid.TreeGridUnboundView.html)). The following code snippet demonstrates the [TreeGridSelfRelationalView](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.TreeGrid.TreeGridSelfRelationalView.html) type.
Similarly, paging support can be implemented for [TreeGridNestedView](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.TreeGrid.TreeGridNestedView.html).

{% capture codesnippet1 %}
{% tabs %}
{% highlight xaml %}
<Grid>
    <Grid.RowDefinitions>
        <RowDefinition Height="*" />
        <RowDefinition Height="Auto" />
    </Grid.RowDefinitions>

    <syncfusion:SfTreeGrid 
            x:Name="treeGrid"
            Grid.Row="0"
            AutoGenerateColumns="True"
            ItemsSource="{Binding ElementName=sfDataPager, Path=PagedSource}"
            SelfRelationRootValue="-1"
            ParentPropertyName="ID" 
            ChildPropertyName="ReportsTo">
    </syncfusion:SfTreeGrid>

    <datapager:SfDataPager
            x:Name="sfDataPager"
            Grid.Row="1"
            Orientation="Horizontal"
            NumericButtonCount="7"
            PageSize="3"
            Source="{Binding Employees}" />
</Grid>
{% endhighlight %}
{% highlight c# %}
public class ViewModel
{
    public ViewModel()
    {
        this.Employees = this.GetEmployees();
    }
    
    private ObservableCollection<EmployeeInfo> _employees;

    public ObservableCollection<EmployeeInfo> Employees
    {
        get { return _employees; }
        set { _employees = value; }
    }

    internal ObservableCollection<EmployeeInfo> GetEmployees()
    {
        ObservableCollection<EmployeeInfo> employeeDetails = new ObservableCollection<EmployeeInfo>();
        employeeDetails.Add(new EmployeeInfo() { FirstName = "Ferando", LastName = "Joseph", Title = "Management", Salary = 2000000, ReportsTo = -1, ID = 2 });
        employeeDetails.Add(new EmployeeInfo() { FirstName = "John", LastName = "Adams", Title = "Accounts", Salary = 2000000, ReportsTo = -1, ID = 3 });
        employeeDetails.Add(new EmployeeInfo() { FirstName = "Thomas", LastName = "Jefferson", Title = "Sales", Salary = 300000, ReportsTo = -1, ID = 4 });
        employeeDetails.Add(new EmployeeInfo() { FirstName = "Andrew", LastName = "Madison", Title = "Marketing", Salary = 4000000, ReportsTo = -1, ID = 5 });
        employeeDetails.Add(new EmployeeInfo() { FirstName = "Ulysses", LastName = "Pierce", Title = "HumanResource", Salary = 1500000, ReportsTo = -1, ID = 6 });
        employeeDetails.Add(new EmployeeInfo() { FirstName = "Jimmy", LastName = "Harrison", Title = "Purchasing", Salary = 200000, ReportsTo = -1, ID = 7 });
        employeeDetails.Add(new EmployeeInfo() { FirstName = "Ronald", LastName = "Fillmore", Title = "Production", Salary = 2800000, ReportsTo = -1, ID = 8 });
    
        //Management
        employeeDetails.Add(new EmployeeInfo() { FirstName = "Andrew", LastName = "Fuller", ID = 9, Salary = 1200000, ReportsTo = 2, Title = "Vice President" });
        employeeDetails.Add(new EmployeeInfo() { FirstName = "Janet", LastName = "Leverling", ID = 10, Salary = 1000000, ReportsTo = 2, Title = "GM" });
        employeeDetails.Add(new EmployeeInfo() { FirstName = "Steven", LastName = "Buchanan", ID = 11, Salary = 900000, ReportsTo = 2, Title = "Manager" });

        //Accounts
        employeeDetails.Add(new EmployeeInfo() { FirstName = "Nancy", LastName = "Davolio", ID = 12, Salary = 850000, ReportsTo = 3, Title = "Accounts Manager" });
        employeeDetails.Add(new EmployeeInfo() { FirstName = "Margaret", LastName = "Peacock", ID = 13, Salary = 700000, ReportsTo = 3, Title = "Accountant" });

        //Sales
        employeeDetails.Add(new EmployeeInfo() { FirstName = "Laura", LastName = "Callahan", ID = 16, Salary = 900000, ReportsTo = 4, Title = "Sales Manager" });
        employeeDetails.Add(new EmployeeInfo() { FirstName = "Anne", LastName = "Dodsworth", ID = 17, Salary = 800000, ReportsTo = 4, Title = "Sales Representative" });
        employeeDetails.Add(new EmployeeInfo() { FirstName = "Albert", LastName = "Hellstern", ID = 18, Salary = 750000, ReportsTo = 16, Title = "Sales Representative" });
        employeeDetails.Add(new EmployeeInfo() { FirstName = "Tim", LastName = "Smith", ID = 19, Salary = 700000, ReportsTo = 17, Title = "Sales Representative" });
        employeeDetails.Add(new EmployeeInfo() { FirstName = "Justin", LastName = "Brid", ID = 20, Salary = 700000, ReportsTo = 17, Title = "Sales Representative" });

        //Back Office
        employeeDetails.Add(new EmployeeInfo() { FirstName = "Caroline", LastName = "Patterson", ID = 21, Salary = 800000, ReportsTo = 5, Title = "Receptionist" });
        employeeDetails.Add(new EmployeeInfo() { FirstName = "Xavier", LastName = "Martin", ID = 22, Salary = 700000, ReportsTo = 5, Title = "Mail Clerk" });

        //HR
        employeeDetails.Add(new EmployeeInfo() { FirstName = "Laurent", LastName = "Pereira", ID = 23, Salary = 900000, ReportsTo = 6, Title = "HR Manager" });
        employeeDetails.Add(new EmployeeInfo() { FirstName = "Syed", LastName = "Abbas", ID = 24, Salary = 650000, ReportsTo = 6, Title = "HR Assistant" });

        //Purchasing
        employeeDetails.Add(new EmployeeInfo() { FirstName = "Pamela", LastName = "Ansman-Wolfe", ID = 26, Salary = 600000, ReportsTo = 7, Title = "Purchase Manager" });
        employeeDetails.Add(new EmployeeInfo() { FirstName = "Michael", LastName = "Blythe", ID = 27, Salary = 550000, ReportsTo = 7, Title = "Store Keeper" });

        //Production
        employeeDetails.Add(new EmployeeInfo() { FirstName = "Jillian", LastName = "Carson", ID = 29, Salary = 600000, ReportsTo = 8, Title = "Production Manager" });
        employeeDetails.Add(new EmployeeInfo() { FirstName = "Shu", LastName = "Ito", ID = 30, Salary = 550000, ReportsTo = 8, Title = "Production Engineer" });
        employeeDetails.Add(new EmployeeInfo() { FirstName = "Stephen", LastName = "Jiang", ID = 31, Salary = 450000, ReportsTo = 30, Title = "Production Engineer" });

        employeeDetails.Add(new EmployeeInfo() { FirstName = "Albert", LastName = "Hellstern", ID = 32, Salary = 750000, ReportsTo = 9, Title = "Sales Representative" });
        employeeDetails.Add(new EmployeeInfo() { FirstName = "Tim", LastName = "Smith", ID = 33, Salary = 700000, ReportsTo = 9, Title = "Sales Representative" });

        employeeDetails.Add(new EmployeeInfo() { FirstName = "Laura", LastName = "Callahan", ID = 36, Salary = 900000, ReportsTo = 12, Title = "Sales" });
        employeeDetails.Add(new EmployeeInfo() { FirstName = "Anne", LastName = "Dodsworth", ID = 37, Salary = 800000, ReportsTo = 12, Title = "Sales" });
        employeeDetails.Add(new EmployeeInfo() { FirstName = "Albert", LastName = "Hellstern", ID = 38, Salary = 750000, ReportsTo = 37, Title = "Sales" });

        return employeeDetails;
    }
}

public class EmployeeInfo
{
    int _id;
    string _firstName;
    string _lastName;
    private string _title;
    double? _salary;
    int _reportsTo;

    public string FirstName
    {
        get { return _firstName; }
        set { _firstName = value; }
    }

    public string LastName
    {
        get { return _lastName; }
        set { _lastName = value; }
    }

    public int ID
    {
        get { return _id; }
        set { _id = value; }
    }

    public int ReportsTo
    {
        get { return _reportsTo; }
        set { _reportsTo = value; }
    }

    public string Title
    {
        get { return _title; }
        set { _title = value; }
    }

    public double? Salary
    {
        get { return _salary; }
        set { _salary = value; }
    }

}
{% endhighlight %}
{% endtabs %}
{% endcapture %}
{{ codesnippet1 | OrderList_Indent_Level_1 }}

![WPF TreeGrid diplays Multiple Pages using SfDataPager](paging_images/wpf-treeGrid-multiple-page.png)

### Limitations

1. Paging is not supported when using `SfTreeGrid` in unbound mode (TreeGridUnBoundView).
2. `SfDataPager`’s on‑demand loading functionality is not supported.
3. **Child nodes** are not considered in page size calculation when [PageSizeMode](#pagesizemode) is `Root` (default). Set `PageSizeMode` to `All` to include the expanded child nodes in the page size calculation.
4. Selection should not be maintained when moving from one page to another.
5. **Sorting and Filtering** are applied across all pages. However, node reordering occurs only within each individual page when [PageSizeMode](#pagesizemode) is `Root` (default). When `PageSizeMode` is `All`, sorting is applied to the entire tree before the pages are created.
6. The **data operations** such as Add, Replace, Remove, Insert, and Move are not supported.

## PageSizeMode

By default, [SfDataPager.PageSize](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.Controls.DataPager.SfDataPager.html#Syncfusion_UI_Xaml_Controls_DataPager_SfDataPager_PageSize) specifies the number of root nodes to be displayed per page, and the child nodes of the expanded root nodes are not counted. The [SfTreeGrid.PageSizeMode](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.TreeGrid.SfTreeGrid.html#Syncfusion_UI_Xaml_TreeGrid_SfTreeGrid_PageSizeMode) property allows you to change what is counted towards the `PageSize` when the SfTreeGrid is paged using SfDataPager. The default value of `PageSizeMode` is [Root](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.TreeGrid.PageSizeMode.html).

### PageSizeMode types

The [PageSizeMode](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.TreeGrid.PageSizeMode.html) enumeration provides the following modes.

<table>
<tr>
<td>
{{'**Mode**'| markdownify }}
</td>
<td>
{{'**Description**'| markdownify }}
</td>
</tr>
<tr>
<td>
Root
</td>
<td>
Only the root nodes are counted towards the <code>PageSize</code>. The child nodes of the expanded root nodes are displayed along with their root node and do not affect the page size. This is the default mode.
</td>
</tr>
<tr>
<td>
All
</td>
<td>
All the visible rows, which are the root nodes and the child nodes of the expanded parent nodes, are counted towards the <code>PageSize</code> as a flat list. Expanding or collapsing a node changes the number of visible rows and the pages are created again.
</td>
</tr>
</table>

### Root mode

In `Root` mode, the `PageSize` is the number of root nodes displayed in a page. The page count is calculated from the number of root nodes. The child nodes of the root nodes in the current page are not counted, so the number of rows in a page increases when the nodes in that page are expanded.

The expansion state of the nodes is retained when you navigate between the pages.

The following code snippet shows `Root` mode. Since `Root` is the default value, setting the `PageSizeMode` property is optional.

{% tabs %}
{% highlight xaml %}
<Grid>
    <Grid.RowDefinitions>
        <RowDefinition Height="*" />
        <RowDefinition Height="Auto" />
    </Grid.RowDefinitions>

    <syncfusion:SfTreeGrid 
            x:Name="treeGrid"
            Grid.Row="0"
            AutoGenerateColumns="True"
            PageSizeMode="Root"
            ItemsSource="{Binding ElementName=sfDataPager, Path=PagedSource}"
            SelfRelationRootValue="-1"
            ParentPropertyName="ID" 
            ChildPropertyName="ReportsTo">
    </syncfusion:SfTreeGrid>

    <datapager:SfDataPager
            x:Name="sfDataPager"
            Grid.Row="1"
            Orientation="Horizontal"
            NumericButtonCount="7"
            PageSize="3"
            Source="{Binding Employees}" />
</Grid>
{% endhighlight %}
{% highlight c# %}
treeGrid.PageSizeMode = PageSizeMode.Root;
{% endhighlight %}
{% endtabs %}

With the data used in the [Getting started](#getting-started) section, there are seven root nodes. When the `PageSize` is 3, the SfDataPager displays three pages that contain three, three, and one root nodes respectively, irrespective of the number of expanded child nodes.

### All mode

In `All` mode, the `PageSize` is the number of visible rows displayed in a page. The visible rows are the root nodes and the child nodes of the expanded parent nodes, which are arranged in the order in which they appear in the SfTreeGrid when it is not paged. This list is divided into pages of `PageSize` rows, so every page has the same number of rows except the last page.

* The page count is calculated from the number of visible rows. When a node is expanded or collapsed, the number of visible rows changes, the page count is updated in the SfDataPager, and the rows in the pages are arranged again. If the current page index is greater than the new last page, the SfTreeGrid moves to the last page.
* A page can start or end in the middle of the child nodes of a parent node. The child nodes in a page are displayed at their own node level.
* The nodes that are filtered out are not counted as visible rows.
* The expansion state of the nodes is retained when you navigate between the pages.
* [SfTreeGrid.ExpandAllNodes](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.TreeGrid.SfTreeGrid.html#Syncfusion_UI_Xaml_TreeGrid_SfTreeGrid_ExpandAllNodes) and [SfTreeGrid.CollapseAllNodes](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.TreeGrid.SfTreeGrid.html#Syncfusion_UI_Xaml_TreeGrid_SfTreeGrid_CollapseAllNodes) methods expand and collapse the nodes in all the pages, not only the nodes in the current page.
* When [AutoExpandMode](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.TreeGrid.SfTreeGrid.html#Syncfusion_UI_Xaml_TreeGrid_SfTreeGrid_AutoExpandMode) is set, the nodes in all the pages are expanded while loading. So the page count in the SfDataPager is calculated based on the expanded rows.
* Sorting and filtering are applied to the entire tree before the pages are created. So the sorted order is maintained across all the pages.

The following code snippet shows `All` mode.

{% tabs %}
{% highlight xaml %}
<Grid>
    <Grid.RowDefinitions>
        <RowDefinition Height="*" />
        <RowDefinition Height="Auto" />
    </Grid.RowDefinitions>

    <syncfusion:SfTreeGrid 
            x:Name="treeGrid"
            Grid.Row="0"
            AutoGenerateColumns="True"
            PageSizeMode="All"
            ItemsSource="{Binding ElementName=sfDataPager, Path=PagedSource}"
            SelfRelationRootValue="-1"
            ParentPropertyName="ID" 
            ChildPropertyName="ReportsTo">
    </syncfusion:SfTreeGrid>

    <datapager:SfDataPager
            x:Name="sfDataPager"
            Grid.Row="1"
            Orientation="Horizontal"
            NumericButtonCount="7"
            PageSize="5"
            Source="{Binding Employees}" />
</Grid>
{% endhighlight %}
{% highlight c# %}
treeGrid.PageSizeMode = PageSizeMode.All;
{% endhighlight %}
{% endtabs %}

N> `PageSizeMode` can also be changed at runtime after the SfTreeGrid is loaded. The pages are created again based on the new mode and the page count in the SfDataPager is updated.

### Examples

The following examples use the `ViewModel` and `EmployeeInfo` classes given in the [Getting started](#getting-started) section.

#### Comparing the page content in Root and All modes

Consider that the `PageSize` is 5, the data is the same as in the [Getting started](#getting-started) section, and only the **Ferando Joseph** root node is expanded while all the other nodes are collapsed. Its child nodes **Andrew Fuller**, **Janet Leverling**, and **Steven Buchanan** are visible. The following table shows the rows displayed in each page.

<table>
<tr>
<td>
{{'**Page**'| markdownify }}
</td>
<td>
{{'**Root mode**'| markdownify }}
</td>
<td>
{{'**All mode**'| markdownify }}
</td>
</tr>
<tr>
<td>
1
</td>
<td>
Five root nodes (Ferando Joseph, John Adams, Thomas Jefferson, Andrew Madison, and Ulysses Pierce) and the three child nodes of Ferando Joseph, which are eight rows in total.
</td>
<td>
Five visible rows: Ferando Joseph, Andrew Fuller, Janet Leverling, Steven Buchanan, and John Adams.
</td>
</tr>
<tr>
<td>
2
</td>
<td>
The remaining two root nodes (Jimmy Harrison and Ronald Fillmore).
</td>
<td>
The next five visible rows: Thomas Jefferson, Andrew Madison, Ulysses Pierce, Jimmy Harrison, and Ronald Fillmore.
</td>
</tr>
</table>

In both the modes the SfDataPager displays two pages. In `Root` mode, the page count is based on the seven root nodes. In `All` mode, the page count is based on the ten visible rows. If you expand one more node in `All` mode, the number of visible rows increases and the SfDataPager updates the page count accordingly.

#### Loading all the pages in expanded state

Setting `AutoExpandMode` to `AllNodesExpanded` in `All` mode expands the nodes of all the pages while loading. The data used in the [Getting started](#getting-started) section has 31 records. So when the `PageSize` is 10, the SfDataPager displays four pages with 10, 10, 10, and 1 rows.

{% tabs %}
{% highlight xaml %}
<Grid>
    <Grid.RowDefinitions>
        <RowDefinition Height="*" />
        <RowDefinition Height="Auto" />
    </Grid.RowDefinitions>

    <syncfusion:SfTreeGrid 
            x:Name="treeGrid"
            Grid.Row="0"
            AutoExpandMode="AllNodesExpanded"
            AutoGenerateColumns="True"
            PageSizeMode="All"
            ItemsSource="{Binding ElementName=sfDataPager, Path=PagedSource}"
            SelfRelationRootValue="-1"
            ParentPropertyName="ID" 
            ChildPropertyName="ReportsTo">
    </syncfusion:SfTreeGrid>

    <datapager:SfDataPager
            x:Name="sfDataPager"
            Grid.Row="1"
            Orientation="Horizontal"
            NumericButtonCount="7"
            PageSize="10"
            Source="{Binding Employees}" />
</Grid>
{% endhighlight %}
{% highlight c# %}
treeGrid.AutoExpandMode = AutoExpandMode.AllNodesExpanded;
treeGrid.PageSizeMode = PageSizeMode.All;
{% endhighlight %}
{% endtabs %}

#### Changing the PageSizeMode and expanding the nodes at runtime

The following code snippet changes the `PageSizeMode` and expands or collapses all the nodes of all the pages through button click events.

{% tabs %}
{% highlight xaml %}
<Grid>
    <Grid.RowDefinitions>
        <RowDefinition Height="Auto" />
        <RowDefinition Height="*" />
        <RowDefinition Height="Auto" />
    </Grid.RowDefinitions>

    <StackPanel Grid.Row="0" Orientation="Horizontal">
        <Button Content="Root Mode" Click="OnRootModeClick" Margin="5" />
        <Button Content="All Mode" Click="OnAllModeClick" Margin="5" />
        <Button Content="Expand All" Click="OnExpandAllClick" Margin="5" />
        <Button Content="Collapse All" Click="OnCollapseAllClick" Margin="5" />
    </StackPanel>

    <syncfusion:SfTreeGrid 
            x:Name="treeGrid"
            Grid.Row="1"
            AutoGenerateColumns="True"
            ItemsSource="{Binding ElementName=sfDataPager, Path=PagedSource}"
            SelfRelationRootValue="-1"
            ParentPropertyName="ID" 
            ChildPropertyName="ReportsTo">
    </syncfusion:SfTreeGrid>

    <datapager:SfDataPager
            x:Name="sfDataPager"
            Grid.Row="2"
            Orientation="Horizontal"
            NumericButtonCount="7"
            PageSize="5"
            Source="{Binding Employees}" />
</Grid>
{% endhighlight %}
{% highlight c# %}
private void OnRootModeClick(object sender, RoutedEventArgs e)
{
    treeGrid.PageSizeMode = PageSizeMode.Root;
}

private void OnAllModeClick(object sender, RoutedEventArgs e)
{
    treeGrid.PageSizeMode = PageSizeMode.All;
}

private void OnExpandAllClick(object sender, RoutedEventArgs e)
{
    treeGrid.ExpandAllNodes();
}

private void OnCollapseAllClick(object sender, RoutedEventArgs e)
{
    treeGrid.CollapseAllNodes();
}
{% endhighlight %}
{% endtabs %}

N> In `All` mode, `ExpandAllNodes` increases the number of visible rows and so the page count in the SfDataPager increases. Similarly, `CollapseAllNodes` decreases the page count.