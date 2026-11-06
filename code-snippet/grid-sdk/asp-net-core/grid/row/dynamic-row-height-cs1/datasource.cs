using System.Collections.Generic;

public class IssueData
{
    public string IssueId { get; set; }
    public string Title { get; set; }
    public string Status { get; set; }
    public string Priority { get; set; }
    public string Reporter { get; set; }

    public static List<IssueData> GetAllRecords()
    {
        return new List<IssueData>()
        {
            new IssueData { IssueId = "BUG-00001", Title = "Login page CSS override causing layout shift", Priority = "Critical", Status = "Open", Reporter = "Sarah Anderson" },
            new IssueData { IssueId = "FEATURE-00002", Title = "Add dark mode support for dashboard", Priority = "Medium", Status = "In Review", Reporter = "Michael Bennett" },
            new IssueData { IssueId = "IMPROVEMENT-00003", Title = "Optimize database queries for bulk operations", Priority = "High", Status = "In Progress", Reporter = "Jennifer Chen" },
            new IssueData { IssueId = "BUG-00004", Title = "Memory leak in data caching mechanism", Priority = "Critical", Status = "Open", Reporter = "David Davis" },
            new IssueData { IssueId = "FEATURE-00005", Title = "Implement bulk edit for grid records", Priority = "Low", Status = "In Review", Reporter = "Emily Evans" },
            new IssueData { IssueId = "IMPROVEMENT-00006", Title = "Improve error message clarity and actionability", Priority = "Medium", Status = "In Progress", Reporter = "James Foster" },
            new IssueData { IssueId = "BUG-00007", Title = "Dropdown filter values not persisting after refresh", Priority = "High", Status = "Open", Reporter = "Lisa Garcia" },
            new IssueData { IssueId = "FEATURE-00008", Title = "Create custom report builder interface", Priority = "Low", Status = "Resolved", Reporter = "Robert Harrison" },
            new IssueData { IssueId = "IMPROVEMENT-00009", Title = "Enhance grid column resizing performance", Priority = "High", Status = "In Progress", Reporter = "Maria Ibrahim" },
            new IssueData { IssueId = "BUG-00010", Title = "Null reference error in profile settings", Priority = "Critical", Status = "Open", Reporter = "Christopher Johnson" }
        };
    }
}
