---
layout: post
title: Blazor Grid Find and Highlight | Syncfusion
description: Learn the Find and Highlight feature in Blazor Data Grid. Quickly locate matching records, highlight search results, and navigate through matches with built-in keyboard support.
platform: grid-sdk
control: DataGrid
keywords: adaptors, CustomAdaptor, custom adaptor, remotedata, custombinding, custom binding
documentation: ug
---

# Find and highlight

The Find and Highlight feature enables quick text discovery within the Data Grid by locating and highlighting matching content across visible records. All records remain visible during the process, allowing data to be reviewed and compared without changing the current view. Navigation controls and a match counter help move through individual matches efficiently, making it easier to locate specific values, keywords, references, or data entries within large datasets.
 
Enable the feature by adding the `Find` item to the built-in toolbar. Find and Highlight behavior can be customized using [GridFindSettings](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Grids.GridFindSettings.html) and works independently of filtering and other data operations.

Finding records that contain a specific name, reference, or keyword in a large Data Grid often requires scanning many rows manually. Filtering displays only matching rows and can make record comparison difficult. Find and Highlight helps locate matching text quickly while keeping all visible rows available for reference and comparison.

**Common pain points**

- Manually scanning large datasets to locate specific text or values.
- Difficulty identifying all occurrences of a keyword across visible records.
- Challenges in reviewing and comparing matching records while maintaining context.
- Time-consuming navigation between multiple matching results.
 
**Key capabilities:**
 
| Capability | Details |
|---|---|
| Real-time highlighting | Matching text is highlighted as text is entered in the find input. Pressing `enter` is not required. |
| Match navigation | Navigate between matches using the `Previous` and `Next` buttons or the `shift+enter` and `enter` keyboard shortcuts. |
| Match counter | A current of total indicator displays the active match number and the total number of matches. |
| Case-sensitive matching | Configure case-sensitive matching using [GridFindSettings.CaseSensitive](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Grids.GridFindSettings.html#Syncfusion_Blazor_Grids_GridFindSettings_CaseSensitive). |
| Column-level opt-out | Set [AllowSearchHighlight](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Grids.GridColumn.html#Syncfusion_Blazor_Grids_GridColumn_AllowSearchHighlight) to `false` in `GridColumn` to exclude the column from scanning and highlighting. |
| Custom highlight style | Customize the highlight appearance using [GridFindSettings.HighlightCssClass](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Grids.GridFindSettings.html#Syncfusion_Blazor_Grids_GridFindSettings_HighlightCssClass). |
| Programmatic control | Use the [FindHighlightAsync](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Grids.SfGrid-1.html#Syncfusion_Blazor_Grids_SfGrid_1_FindHighlightAsync_System_String_), [ResetFindAsync](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Grids.SfGrid-1.html#Syncfusion_Blazor_Grids_SfGrid_1_ResetFindAsync), [FindNextHighlightAsync](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Grids.SfGrid-1.html#Syncfusion_Blazor_Grids_SfGrid_1_FindNextHighlightAsync), [FindPreviousHighlightAsync](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Grids.SfGrid-1.html#Syncfusion_Blazor_Grids_SfGrid_1_FindPreviousHighlightAsync), and [FindGoToAsync](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Grids.SfGrid-1.html#Syncfusion_Blazor_Grids_SfGrid_1_FindGoToAsync_System_Int32_) API methods to drive find and highlight programmatically. |
| Paging support | Highlighting is automatically reapplied during page navigation. |

For configuration options, see [Configure Find and Highlight behavior using GridFindSettings](#configure-find-and-highlight-behavior-using-gridfindsettings), [Exclude a column from Find and Highlight](#exclude-a-column-from-find-and-highlight), and [Enable Find and Highlight using API methods](#enable-find-and-highlight-using-api-methods).

> * Cells rendered through a [column Template](./column-template.md), [edit template](./template-editing.md), or [command column](./command-column-editing.md) are excluded from Find and Highlight scanning, highlighting, and match counting.
> * Text in an active Add or Edit form editor, the toolbar `Search` filter input, or any other in-progress editor on the page is not searched or highlighted. The feature operates only on committed cell values.

## Enable find and highlight using toolbar

The simplest way to enable the find and highlight feature is to add the `Find` string to the [Toolbar](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Grids.SfGrid-1.html#Syncfusion_Blazor_Grids_SfGrid_1_Toolbar) property. This renders the find input box along with the **Previous**, **Next** icons, and match counter in the Data Grid toolbar. No additional configuration is required for basic usage.

{% tabs %}
{% highlight razor tabtitle="Index.razor" %}

@using Syncfusion.Blazor.Grids

<SfGrid @ref="Grid" DataSource="@GridData" AllowSorting="true" Height="500" AllowTextWrap="true" AllowReordering="true" Toolbar="@(new List<string>() { "Find" })">
    <GridColumns>
        <GridColumn Field=@nameof(SupportTicket.TicketId) HeaderText="Ticket ID" Width="130" IsPrimaryKey="true"> </GridColumn>
        <GridColumn Field=@nameof(SupportTicket.Subject) HeaderText="Subject" Width="250"> </GridColumn>
        <GridColumn Field=@nameof(SupportTicket.CustomerName) HeaderText="Customer Name" Width="180"> </GridColumn>
        <GridColumn Field=@nameof(SupportTicket.Email) HeaderText="Email" Width="220"> </GridColumn>
        <GridColumn Field=@nameof(SupportTicket.ContactNumber) HeaderText="Contact Number" Visible="false" Width="180"> </GridColumn>
        <GridColumn Field=@nameof(SupportTicket.Priority) HeaderText="Priority" Width="120"> </GridColumn>
        <GridColumn Field=@nameof(SupportTicket.Status) HeaderText="Status" Width="120">  </GridColumn>
        <GridColumn Field=@nameof(SupportTicket.Category) HeaderText="Category" Width="130"> </GridColumn>
        <GridColumn Field=@nameof(SupportTicket.AssignedTo) HeaderText="Assigned To" Width="180"> </GridColumn>
    </GridColumns>
</SfGrid>

@code 
{
    private SfGrid<SupportTicket> Grid { get; set; }
    public List<SupportTicket> GridData { get; set; } = new();

    protected override void OnInitialized()
    {
        GridData = SupportTicket.GetAllRecords().ToList();
    }
}

{% endhighlight %}

{% highlight c# tabtitle="SupportTicket.cs" %}

 public class SupportTicket
 {
     public SupportTicket()
     {
     }
     public static IReadOnlyList<SupportTicket> GetAllRecords()
     {
         List<SupportTicket> tickets = new();
         var customers = new[]
         {
             new
             {
                 Name = "John Smith",
                 Email = "john.smith@email.com",
                 ContactNumber = "+1-202-555-0101"
             },
             new
             {
                 Name = "Emma Wilson",
                 Email = "emma.wilson@email.com",
                 ContactNumber = "+44-20-7946-1002"
             },
             new
             {
                 Name = "Michael Davis",
                 Email = "michael.davis@email.com",
                 ContactNumber = "+1-416-555-1003"
             },
             new
             {
                 Name = "Sophia Brown",
                 Email = "sophia.brown@email.com",
                 ContactNumber = "+61-2-5550-1004"
             },
             new
             {
                 Name = "Raj Kumar",
                 Email = "raj.kumar@email.com",
                 ContactNumber = "+91-98765-10005"
             },
             new
             {
                 Name = "Lisa Taylor",
                 Email = "lisa.taylor@email.com",
                 ContactNumber = "+49-30-5555-1006"
             },
             new
             {
                 Name = "Alex Johnson",
                 Email = "alex.johnson@email.com",
                 ContactNumber = "+33-1-5550-1007"
             },
             new
             {
                 Name = "Priya Sharma",
                 Email = "priya.sharma@email.com",
                 ContactNumber = "+65-6555-1008"
             },
             new
             {
                 Name = "Daniel Moore",
                 Email = "daniel.moore@email.com",
                 ContactNumber = "+971-4-555-1009"
             },
             new
             {
                 Name = "Olivia Martin",
                 Email = "olivia.martin@email.com",
                 ContactNumber = "+81-3-5555-1010"
             }
         };
         string[] assignedTo =
         {
             "Sarah Johnson",
             "David Clark",
             "Alex Brown"
         };
         var templates = new[]
         {
             new
             {
                 Subject = "Payment not processed",
                 Description = "My recent payment for order was deducted but the order shows pending status. Please resolve urgently.",
                 Category = "Billing",
                 Priority = "High",
                 Status = "Open"
             },
             new
             {
                 Subject = "Login failed after password reset",
                 Description = "Customer is unable to login after resetting password. Authentication validation failed.",
                 Category = "Authentication",
                 Priority = "Medium",
                 Status = "In Progress"
             },
             new
             {
                 Subject = "Refund payment pending",
                 Description = "Refund payment has not been processed and customer is waiting for an update.",
                 Category = "Billing",
                 Priority = "High",
                 Status = "Open"
             },
             new
             {
                 Subject = "Order tracking unavailable",
                 Description = "Customer cannot track the order. Order tracking page displays an error.",
                 Category = "Order",
                 Priority = "Low",
                 Status = "Resolved"
             },
             new
             {
                 Subject = "Payment gateway timeout",
                 Description = "Payment gateway timeout occurred during checkout for multiple customers.",
                 Category = "Billing",
                 Priority = "Critical",
                 Status = "Open"
             }
         };
         for (int i = 1; i <= 100; i++)
         {
             var template = templates[(i - 1) % templates.Length];
             var customer = customers[(i - 1) % customers.Length];
             tickets.Add(new SupportTicket(
                 $"TKT-{10000 + i}",
                 customer.Name,
                 customer.ContactNumber,
                 customer.Email,
                 template.Subject,
                 template.Description,
                 template.Category,
                 template.Priority,
                 template.Status,
                 assignedTo[(i - 1) % assignedTo.Length],
                 new DateTime(2026, ((i - 1) % 12) + 1, ((i - 1) % 28) + 1),
                 new DateTime(2026, ((i - 1) % 12) + 1, ((i + 2) % 28) + 1)
             ));
         }
         return tickets;
     }
     public SupportTicket(
         string ticketId,
         string customerName,
         string contactNumber,
         string email,
         string subject,
         string description,
         string category,
         string priority,
         string status,
         string assignedTo,
         DateTime createdDate,
         DateTime lastUpdated)
     {
         TicketId = ticketId;
         CustomerName = customerName;
         ContactNumber = contactNumber;
         Email = email;
         Subject = subject;
         Description = description;
         Category = category;
         Priority = priority;
         Status = status;
         AssignedTo = assignedTo;
         CreatedDate = createdDate;
         LastUpdated = lastUpdated;
     }
     public string? TicketId { get; set; }
     public string? CustomerName { get; set; }
     public string? ContactNumber { get; set; }
     public string? Email { get; set; }
     public string? Subject { get; set; }
     public string? Description { get; set; }
     public string? Category { get; set; }
     public string? Priority { get; set; }
     public string? Status { get; set; }
     public string? AssignedTo { get; set; }
     public DateTime CreatedDate { get; set; }
     public DateTime LastUpdated { get; set; }
 }

{% endhighlight %}
{% endtabs %}

{% previewsample "https://blazorplayground.syncfusion.com/embed/LNhHCNZMhnevzCwi?appbar=false&editor=false&result=true&errorlist=false&theme=fluent2" %}

## Configure find and highlight behavior using GridFindSettings

Use the [GridFindSettings](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Grids.GridFindSettings.html) component inside `SfGrid` to customize the behavior and appearance of the Find and Highlight feature. The following properties are available:
 
| Property | Type | Default value | Description |
|---|---|---|---|
| [PlaceholderText](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Grids.GridFindSettings.html#Syncfusion_Blazor_Grids_GridFindSettings_PlaceholderText) | `string` | `"Find"` | Specifies the placeholder text displayed in the find input when no value is entered. |
| [HighlightCssClass](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Grids.GridFindSettings.html#Syncfusion_Blazor_Grids_GridFindSettings_HighlightCssClass) | `string` | `"e-find-highlight"` | Specifies the CSS class applied to the `<mark>` element that highlights matching text. Set a custom CSS class to change the highlight appearance. |
| [CaseSensitive](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Grids.GridFindSettings.html#Syncfusion_Blazor_Grids_GridFindSettings_CaseSensitive) | `bool` | `false` | Specifies whether matching is case-sensitive. When set to `true`, only text with matching letter casing is highlighted. When set to `false`, letter casing is ignored during matching. For example, "John", "john", and "JOHN" match the search term "john". |
 
The following example enables case-sensitive matching, sets a custom placeholder, and applies a custom highlight style:
 
{% tabs %}
{% highlight razor tabtitle="Index.razor" %}

@using Syncfusion.Blazor.Grids

<SfGrid @ref="Grid" DataSource="@GridData" Height="500" AllowTextWrap="true" Toolbar=@(new List<string> {"Find"})>
    <GridFindSettings PlaceholderText="Search in grid..." CaseSensitive="true" HighlightCssClass="custom-highlight"></GridFindSettings>
    <GridColumns>
        <GridColumn Field=@nameof(SupportTicket.TicketId) HeaderText="Ticket ID" Width="130" IsPrimaryKey="true"> </GridColumn>
        <GridColumn Field=@nameof(SupportTicket.Subject) HeaderText="Subject" Width="250"> </GridColumn>
        <GridColumn Field=@nameof(SupportTicket.CustomerName) HeaderText="Customer Name" Width="180"> </GridColumn>
        <GridColumn Field=@nameof(SupportTicket.Email) Visible="false" HeaderText="Email" Width="220"> </GridColumn>
        <GridColumn Field=@nameof(SupportTicket.ContactNumber) HeaderText="Contact Number" Visible="false" Width="180"> </GridColumn>
        <GridColumn Field=@nameof(SupportTicket.Priority) HeaderText="Priority" Width="120"> </GridColumn>
        <GridColumn Field=@nameof(SupportTicket.Status) HeaderText="Status" Width="120">  </GridColumn>
        <GridColumn Field=@nameof(SupportTicket.Category) HeaderText="Category" Width="130"> </GridColumn>
        <GridColumn Field=@nameof(SupportTicket.AssignedTo) HeaderText="Assigned To" Width="180"> </GridColumn>
    </GridColumns>
</SfGrid>

<style>
    .custom-highlight {
        background-color: #ff9800;
        color: #fff;
        border-radius: 2px;
        padding: 0 2px;
    }
</style>

@code 
{
    private SfGrid<SupportTicket> Grid { get; set; }
    public List<SupportTicket> GridData { get; set; } = new();

    protected override void OnInitialized()
    {
        GridData = SupportTicket.GetAllRecords().ToList();
    }
}
{% endhighlight %}
{% highlight c# tabtitle="SupportTicket.cs" %}

public class SupportTicket
{
    public SupportTicket()
    {
    }
    public static IReadOnlyList<SupportTicket> GetAllRecords()
    {
        List<SupportTicket> tickets = new();
        var customers = new[]
        {
            new
            {
                Name = "John Smith",
                Email = "john.smith@email.com",
                ContactNumber = "+1-202-555-0101"
            },
            new
            {
                Name = "Emma Wilson",
                Email = "emma.wilson@email.com",
                ContactNumber = "+44-20-7946-1002"
            },
            new
            {
                Name = "Michael Davis",
                Email = "michael.davis@email.com",
                ContactNumber = "+1-416-555-1003"
            },
            new
            {
                Name = "Sophia Brown",
                Email = "sophia.brown@email.com",
                ContactNumber = "+61-2-5550-1004"
            },
            new
            {
                Name = "Raj Kumar",
                Email = "raj.kumar@email.com",
                ContactNumber = "+91-98765-10005"
            },
            new
            {
                Name = "Lisa Taylor",
                Email = "lisa.taylor@email.com",
                ContactNumber = "+49-30-5555-1006"
            },
            new
            {
                Name = "Alex Johnson",
                Email = "alex.johnson@email.com",
                ContactNumber = "+33-1-5550-1007"
            },
            new
            {
                Name = "Priya Sharma",
                Email = "priya.sharma@email.com",
                ContactNumber = "+65-6555-1008"
            },
            new
            {
                Name = "Daniel Moore",
                Email = "daniel.moore@email.com",
                ContactNumber = "+971-4-555-1009"
            },
            new
            {
                Name = "Olivia Martin",
                Email = "olivia.martin@email.com",
                ContactNumber = "+81-3-5555-1010"
            }
        };
        string[] assignedTo =
        {
            "Sarah Johnson",
            "David Clark",
            "Alex Brown"
        };
        var templates = new[]
        {
            new
            {
                Subject = "Payment not processed",
                Description = "My recent payment for order was deducted but the order shows pending status. Please resolve urgently.",
                Category = "Billing",
                Priority = "High",
                Status = "Open"
            },
            new
            {
                Subject = "Login failed after password reset",
                Description = "Customer is unable to login after resetting password. Authentication validation failed.",
                Category = "Authentication",
                Priority = "Medium",
                Status = "In Progress"
            },
            new
            {
                Subject = "Refund payment pending",
                Description = "Refund payment has not been processed and customer is waiting for an update.",
                Category = "Billing",
                Priority = "High",
                Status = "Open"
            },
            new
            {
                Subject = "Order tracking unavailable",
                Description = "Customer cannot track the order. Order tracking page displays an error.",
                Category = "Order",
                Priority = "Low",
                Status = "Resolved"
            },
            new
            {
                Subject = "Payment gateway timeout",
                Description = "Payment gateway timeout occurred during checkout for multiple customers.",
                Category = "Billing",
                Priority = "Critical",
                Status = "Open"
            }
        };
        for (int i = 1; i <= 100; i++)
        {
            var template = templates[(i - 1) % templates.Length];
            var customer = customers[(i - 1) % customers.Length];
            tickets.Add(new SupportTicket(
                $"TKT-{10000 + i}",
                customer.Name,
                customer.ContactNumber,
                customer.Email,
                template.Subject,
                template.Description,
                template.Category,
                template.Priority,
                template.Status,
                assignedTo[(i - 1) % assignedTo.Length],
                new DateTime(2026, ((i - 1) % 12) + 1, ((i - 1) % 28) + 1),
                new DateTime(2026, ((i - 1) % 12) + 1, ((i + 2) % 28) + 1)
            ));
        }
        return tickets;
    }
    public SupportTicket(
        string ticketId,
        string customerName,
        string contactNumber,
        string email,
        string subject,
        string description,
        string category,
        string priority,
        string status,
        string assignedTo,
        DateTime createdDate,
        DateTime lastUpdated)
    {
        TicketId = ticketId;
        CustomerName = customerName;
        ContactNumber = contactNumber;
        Email = email;
        Subject = subject;
        Description = description;
        Category = category;
        Priority = priority;
        Status = status;
        AssignedTo = assignedTo;
        CreatedDate = createdDate;
        LastUpdated = lastUpdated;
    }
    public string? TicketId { get; set; }
    public string? CustomerName { get; set; }
    public string? ContactNumber { get; set; }
    public string? Email { get; set; }
    public string? Subject { get; set; }
    public string? Description { get; set; }
    public string? Category { get; set; }
    public string? Priority { get; set; }
    public string? Status { get; set; }
    public string? AssignedTo { get; set; }
    public DateTime CreatedDate { get; set; }
    public DateTime LastUpdated { get; set; }
}
{% endhighlight %}
{% endtabs %}
 
{% previewsample "https://blazorplayground.syncfusion.com/embed/LtBxMZNshbelDxOY?appbar=false&editor=false&result=true&errorlist=false&theme=fluent2" %}
 
## Exclude a column from find and highlight

By default, Find and Highlight scans all columns in the Data Grid. To exclude a column from scanning and highlighting, set the [AllowSearchHighlight](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Grids.GridColumn.html#Syncfusion_Blazor_Grids_GridColumn_AllowSearchHighlight) property to `false` in the corresponding `GridColumn`. This option is useful for columns that contain IDs, internal codes, or sensitive data.

For an excluded column:
- Cell content is not scanned for matches.
- No highlighting is applied to the concern column's cells.
- The column's cells are excluded from the total match count.
- **Previous** / **Next** navigation skips the column entirely.

{% tabs %}
{% highlight razor tabtitle="Index.razor" %}
@using Syncfusion.Blazor.Grids

<SfGrid @ref="Grid" DataSource="@GridData" Height="500" AllowTextWrap="true" Toolbar=@(new List<string> {"Find"})>
    <GridColumns>
        <GridColumn Field=@nameof(SupportTicket.TicketId) HeaderText="Ticket ID" Width="130" IsPrimaryKey="true"> </GridColumn>
        <GridColumn Field=@nameof(SupportTicket.Subject) HeaderText="Subject" Width="250"> </GridColumn>
        <GridColumn Field=@nameof(SupportTicket.CustomerName) HeaderText="Customer Name" AllowSearchHighlight="false" Width="180"> </GridColumn>
        <GridColumn Field=@nameof(SupportTicket.Priority) HeaderText="Priority" AllowSearchHighlight="false" Width="120"> </GridColumn>
        <GridColumn Field=@nameof(SupportTicket.Status) HeaderText="Status" Width="120">  </GridColumn>
        <GridColumn Field=@nameof(SupportTicket.Category) HeaderText="Category" Width="130"> </GridColumn>
        <GridColumn Field=@nameof(SupportTicket.AssignedTo) HeaderText="Assigned To" Width="180"> </GridColumn>
    </GridColumns>
</SfGrid>

@code 
{
    private SfGrid<SupportTicket> Grid { get; set; }
    private string searchText {get;set;}
    private int matchNumber { get; set; }
    public List<SupportTicket> GridData { get; set; } = new();

    protected override void OnInitialized()
    {
        GridData = SupportTicket.GetAllRecords().ToList();
    }
}
{% endhighlight %}
{% highlight c# tabtitle="SupportTicket.cs" %}
public class SupportTicket
{
    public SupportTicket()
    {
    }
    public static IReadOnlyList<SupportTicket> GetAllRecords()
    {
        List<SupportTicket> tickets = new();
        var customers = new[]
        {
            new
            {
                Name = "John Smith",
                Email = "john.smith@email.com",
                ContactNumber = "+1-202-555-0101"
            },
            new
            {
                Name = "Emma Wilson",
                Email = "emma.wilson@email.com",
                ContactNumber = "+44-20-7946-1002"
            },
            new
            {
                Name = "Michael Davis",
                Email = "michael.davis@email.com",
                ContactNumber = "+1-416-555-1003"
            },
            new
            {
                Name = "Sophia Brown",
                Email = "sophia.brown@email.com",
                ContactNumber = "+61-2-5550-1004"
            },
            new
            {
                Name = "Raj Kumar",
                Email = "raj.kumar@email.com",
                ContactNumber = "+91-98765-10005"
            },
            new
            {
                Name = "Lisa Taylor",
                Email = "lisa.taylor@email.com",
                ContactNumber = "+49-30-5555-1006"
            },
            new
            {
                Name = "Alex Johnson",
                Email = "alex.johnson@email.com",
                ContactNumber = "+33-1-5550-1007"
            },
            new
            {
                Name = "Priya Sharma",
                Email = "priya.sharma@email.com",
                ContactNumber = "+65-6555-1008"
            },
            new
            {
                Name = "Daniel Moore",
                Email = "daniel.moore@email.com",
                ContactNumber = "+971-4-555-1009"
            },
            new
            {
                Name = "Olivia Martin",
                Email = "olivia.martin@email.com",
                ContactNumber = "+81-3-5555-1010"
            }
        };
        string[] assignedTo =
        {
            "Sarah Johnson",
            "David Clark",
            "Alex Brown"
        };
        var templates = new[]
        {
            new
            {
                Subject = "Payment not processed",
                Description = "My recent payment for order was deducted but the order shows pending status. Please resolve urgently.",
                Category = "Billing",
                Priority = "High",
                Status = "Open"
            },
            new
            {
                Subject = "Login failed after password reset",
                Description = "Customer is unable to login after resetting password. Authentication validation failed.",
                Category = "Authentication",
                Priority = "Medium",
                Status = "In Progress"
            },
            new
            {
                Subject = "Refund payment pending",
                Description = "Refund payment has not been processed and customer is waiting for an update.",
                Category = "Billing",
                Priority = "High",
                Status = "Open"
            },
            new
            {
                Subject = "Order tracking unavailable",
                Description = "Customer cannot track the order. Order tracking page displays an error.",
                Category = "Order",
                Priority = "Low",
                Status = "Resolved"
            },
            new
            {
                Subject = "Payment gateway timeout",
                Description = "Payment gateway timeout occurred during checkout for multiple customers.",
                Category = "Billing",
                Priority = "Critical",
                Status = "Open"
            }
        };
        for (int i = 1; i <= 100; i++)
        {
            var template = templates[(i - 1) % templates.Length];
            var customer = customers[(i - 1) % customers.Length];
            tickets.Add(new SupportTicket(
                $"TKT-{10000 + i}",
                customer.Name,
                customer.ContactNumber,
                customer.Email,
                template.Subject,
                template.Description,
                template.Category,
                template.Priority,
                template.Status,
                assignedTo[(i - 1) % assignedTo.Length],
                new DateTime(2026, ((i - 1) % 12) + 1, ((i - 1) % 28) + 1),
                new DateTime(2026, ((i - 1) % 12) + 1, ((i + 2) % 28) + 1)
            ));
        }
        return tickets;
    }
    public SupportTicket(
        string ticketId,
        string customerName,
        string contactNumber,
        string email,
        string subject,
        string description,
        string category,
        string priority,
        string status,
        string assignedTo,
        DateTime createdDate,
        DateTime lastUpdated)
    {
        TicketId = ticketId;
        CustomerName = customerName;
        ContactNumber = contactNumber;
        Email = email;
        Subject = subject;
        Description = description;
        Category = category;
        Priority = priority;
        Status = status;
        AssignedTo = assignedTo;
        CreatedDate = createdDate;
        LastUpdated = lastUpdated;
    }
    public string? TicketId { get; set; }
    public string? CustomerName { get; set; }
    public string? ContactNumber { get; set; }
    public string? Email { get; set; }
    public string? Subject { get; set; }
    public string? Description { get; set; }
    public string? Category { get; set; }
    public string? Priority { get; set; }
    public string? Status { get; set; }
    public string? AssignedTo { get; set; }
    public DateTime CreatedDate { get; set; }
    public DateTime LastUpdated { get; set; }
}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://blazorplayground.syncfusion.com/embed/LjrnMXDMgLqjAsvP?appbar=false&editor=false&result=true&errorlist=false&theme=fluent2" %}
 
> In this example, the **CustomerName** and **Priority** columns are excluded from Find and Highlight. Entering text that appears in those columns will not produce a match or a highlight.
 
## Enable find and highlight using API methods

The Find and Highlight feature can be controlled entirely from the code-behind without relying on the toolbar UI. Use the API methods to build custom find panels, integrate keyboard shortcuts, or trigger highlighting from business logic.
 
The following methods are available on the grid reference:
 
| Method | Description |
|---|---|
| [FindHighlightAsync](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Grids.SfGrid-1.html#Syncfusion_Blazor_Grids_SfGrid_1_FindHighlightAsync_System_String_) | Highlights all matching text in the Data Grid based on the specified search text. Pass an empty string to remove existing highlights. |
| [ResetFindAsync](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Grids.SfGrid-1.html#Syncfusion_Blazor_Grids_SfGrid_1_ResetFindAsync) | Removes all highlights and resets the match counter to 0. |
| [FindNextHighlightAsync](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Grids.SfGrid-1.html#Syncfusion_Blazor_Grids_SfGrid_1_FindNextHighlightAsync) | Moves the active selection to the next match. After the last match, navigation continues from the first match. |
| [FindPreviousHighlightAsync](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Grids.SfGrid-1.html#Syncfusion_Blazor_Grids_SfGrid_1_FindPreviousHighlightAsync) | Moves the active selection to the previous match. Before the first match, navigation continues from the last match. |
| [FindGoToAsync](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Grids.SfGrid-1.html#Syncfusion_Blazor_Grids_SfGrid_1_FindGoToAsync_System_Int32_) | Navigates directly to a match based on the specified 1-based index. Values below the valid range select the first match, and values above the valid range select the last match. For example, `FindGoToAsync(0)` and `FindGoToAsync(-1)` select the first match, while `FindGoToAsync(9999)` selects the last available match when the total match count is lower. |

The following example demonstrates driving Find and Highlight programmatically using external buttons:
 
{% tabs %}
{% highlight razor tabtitle="Index.razor" %}

@using Syncfusion.Blazor.Buttons
@using Syncfusion.Blazor.Grids
@using Syncfusion.Blazor.Inputs

<label>Find:</label>
<SfTextBox FloatLabelType="FloatLabelType.Always" Width="250px" @bind-Value="@searchText" CssClass="e-outline e-small e-searchbox" Input="@OnValueChange">
</SfTextBox>
<SfButton Content="Previous" OnClick="FindPreviousMatch"></SfButton>
<SfButton Content="Next" OnClick="FindNextMatch"></SfButton>
<br />
<br />
<label>Go to match: </label>
<SfNumericTextBox TValue="int" FloatLabelType="FloatLabelType.Always" @bind-Value="@matchNumber" Width="250px" Min="1" Max="100" CssClass="e-outline e-small e-searchbox">
</SfNumericTextBox>
<SfButton Content="Go To" OnClick="GoToMatch"></SfButton>
<br />

<SfGrid @ref="Grid" DataSource="@GridData" AllowSorting="true" Height="500" AllowTextWrap="true" AllowReordering="true">
    <GridColumns>
        <GridColumn Field=@nameof(SupportTicket.TicketId) HeaderText="Ticket ID" Width="130" IsPrimaryKey="true"> </GridColumn>
        <GridColumn Field=@nameof(SupportTicket.Subject) HeaderText="Subject" Width="250"> </GridColumn>
        <GridColumn Field=@nameof(SupportTicket.CustomerName) HeaderText="Customer Name" Width="180"> </GridColumn>
        <GridColumn Field=@nameof(SupportTicket.Email) HeaderText="Email" Width="220"> </GridColumn>
        <GridColumn Field=@nameof(SupportTicket.Priority) HeaderText="Priority" Width="120"> </GridColumn>
        <GridColumn Field=@nameof(SupportTicket.Status) HeaderText="Status" Width="120">  </GridColumn>
        <GridColumn Field=@nameof(SupportTicket.Category) HeaderText="Category" Width="130"> </GridColumn>
        <GridColumn Field=@nameof(SupportTicket.AssignedTo) HeaderText="Assigned To" Width="180"> </GridColumn>
    </GridColumns>
</SfGrid>

<style>
    .e-outline.e-small.e-searchbox.e-input-group {
        margin-top: 0px;
    }
</style>

@code 
{
    private SfGrid<SupportTicket> Grid { get; set; }
    private string searchText {get;set;}
    private int matchNumber { get; set; }
    public List<SupportTicket> GridData { get; set; } = new();

    protected override void OnInitialized()
    {
        GridData = SupportTicket.GetAllRecords().ToList();
    }

    private async Task OnValueChange(InputEventArgs args)
    {
        if (Grid != null)
        {
            await Grid.FindHighlightAsync(args.Value);
        }
    }

    private async Task FindPreviousMatch()
    {
        await Grid.FindPreviousHighlightAsync();
    }

    private async Task FindNextMatch()
    {
        await Grid.FindNextHighlightAsync();
    }

    private async Task GoToMatch()
    {
        await Grid.FindGoToAsync(matchNumber);
    }
}
{% endhighlight %}
{% highlight c# tabtitle="SupportTicket.cs" %}
public class SupportTicket
{
    public SupportTicket()
    {
    }
    public static IReadOnlyList<SupportTicket> GetAllRecords()
    {
        List<SupportTicket> tickets = new();
        var customers = new[]
        {
            new
            {
                Name = "John Smith",
                Email = "john.smith@email.com",
                ContactNumber = "+1-202-555-0101"
            },
            new
            {
                Name = "Emma Wilson",
                Email = "emma.wilson@email.com",
                ContactNumber = "+44-20-7946-1002"
            },
            new
            {
                Name = "Michael Davis",
                Email = "michael.davis@email.com",
                ContactNumber = "+1-416-555-1003"
            },
            new
            {
                Name = "Sophia Brown",
                Email = "sophia.brown@email.com",
                ContactNumber = "+61-2-5550-1004"
            },
            new
            {
                Name = "Raj Kumar",
                Email = "raj.kumar@email.com",
                ContactNumber = "+91-98765-10005"
            },
            new
            {
                Name = "Lisa Taylor",
                Email = "lisa.taylor@email.com",
                ContactNumber = "+49-30-5555-1006"
            },
            new
            {
                Name = "Alex Johnson",
                Email = "alex.johnson@email.com",
                ContactNumber = "+33-1-5550-1007"
            },
            new
            {
                Name = "Priya Sharma",
                Email = "priya.sharma@email.com",
                ContactNumber = "+65-6555-1008"
            },
            new
            {
                Name = "Daniel Moore",
                Email = "daniel.moore@email.com",
                ContactNumber = "+971-4-555-1009"
            },
            new
            {
                Name = "Olivia Martin",
                Email = "olivia.martin@email.com",
                ContactNumber = "+81-3-5555-1010"
            }
        };
        string[] assignedTo =
        {
            "Sarah Johnson",
            "David Clark",
            "Alex Brown"
        };
        var templates = new[]
        {
            new
            {
                Subject = "Payment not processed",
                Description = "My recent payment for order was deducted but the order shows pending status. Please resolve urgently.",
                Category = "Billing",
                Priority = "High",
                Status = "Open"
            },
            new
            {
                Subject = "Login failed after password reset",
                Description = "Customer is unable to login after resetting password. Authentication validation failed.",
                Category = "Authentication",
                Priority = "Medium",
                Status = "In Progress"
            },
            new
            {
                Subject = "Refund payment pending",
                Description = "Refund payment has not been processed and customer is waiting for an update.",
                Category = "Billing",
                Priority = "High",
                Status = "Open"
            },
            new
            {
                Subject = "Order tracking unavailable",
                Description = "Customer cannot track the order. Order tracking page displays an error.",
                Category = "Order",
                Priority = "Low",
                Status = "Resolved"
            },
            new
            {
                Subject = "Payment gateway timeout",
                Description = "Payment gateway timeout occurred during checkout for multiple customers.",
                Category = "Billing",
                Priority = "Critical",
                Status = "Open"
            }
        };
        for (int i = 1; i <= 100; i++)
        {
            var template = templates[(i - 1) % templates.Length];
            var customer = customers[(i - 1) % customers.Length];
            tickets.Add(new SupportTicket(
                $"TKT-{10000 + i}",
                customer.Name,
                customer.ContactNumber,
                customer.Email,
                template.Subject,
                template.Description,
                template.Category,
                template.Priority,
                template.Status,
                assignedTo[(i - 1) % assignedTo.Length],
                new DateTime(2026, ((i - 1) % 12) + 1, ((i - 1) % 28) + 1),
                new DateTime(2026, ((i - 1) % 12) + 1, ((i + 2) % 28) + 1)
            ));
        }
        return tickets;
    }
    public SupportTicket(
        string ticketId,
        string customerName,
        string contactNumber,
        string email,
        string subject,
        string description,
        string category,
        string priority,
        string status,
        string assignedTo,
        DateTime createdDate,
        DateTime lastUpdated)
    {
        TicketId = ticketId;
        CustomerName = customerName;
        ContactNumber = contactNumber;
        Email = email;
        Subject = subject;
        Description = description;
        Category = category;
        Priority = priority;
        Status = status;
        AssignedTo = assignedTo;
        CreatedDate = createdDate;
        LastUpdated = lastUpdated;
    }
    public string? TicketId { get; set; }
    public string? CustomerName { get; set; }
    public string? ContactNumber { get; set; }
    public string? Email { get; set; }
    public string? Subject { get; set; }
    public string? Description { get; set; }
    public string? Category { get; set; }
    public string? Priority { get; set; }
    public string? Status { get; set; }
    public string? AssignedTo { get; set; }
    public DateTime CreatedDate { get; set; }
    public DateTime LastUpdated { get; set; }
}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://blazorplayground.syncfusion.com/embed/LjLHCXtCfSlVILQA?appbar=false&editor=false&result=true&errorlist=false&theme=fluent2" %}

## Keyboard shortcuts for find and highlight

The Find and Highlight toolbar supports the following keyboard interactions when the find input is focused:
 
| Key | Action |
|---|---|
| `Enter` | Moves to the next match. |
| `Shift+Enter` | Moves to the previous match. |
| `Escape` | Closes the find toolbar and clears all highlights. |
 
These shortcuts match standard find behavior in browsers and desktop applications.
