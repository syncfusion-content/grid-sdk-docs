public IActionResult Index()
{
    ViewBag.datasource = SupportTicket.GetAllRecords();
    return View();
}

public class SupportTicket
{
    public int TicketID { get; set; }
    public string Customer { get; set; }
    public string Subject { get; set; }
    public string Status { get; set; }
    public string Priority { get; set; }

    public static List<SupportTicket> GetAllRecords()
    {
        return new List<SupportTicket>
        {
            new SupportTicket { TicketID = 1001, Customer = "Alice Morgan", Subject = "Login failure on mobile app", Status = "Pending", Priority = "High" },
            new SupportTicket { TicketID = 1002, Customer = "Brian Cole", Subject = "Invoice not received", Status = "Resolved", Priority = "Medium" },
            new SupportTicket { TicketID = 1003, Customer = "Carla Diaz", Subject = "Password reset link expired", Status = "Pending", Priority = "Low" },
            new SupportTicket { TicketID = 1004, Customer = "David Kim", Subject = "Unable to export report", Status = "In Progress", Priority = "High" },
            new SupportTicket { TicketID = 1005, Customer = "Elena Rossi", Subject = "Duplicate charge on card", Status = "Pending", Priority = "High" },
            new SupportTicket { TicketID = 1006, Customer = "Farid Khan", Subject = "Update billing address", Status = "Resolved", Priority = "Low" },
            new SupportTicket { TicketID = 1007, Customer = "Grace Lee", Subject = "Dashboard loads slowly", Status = "In Progress", Priority = "Medium" },
            new SupportTicket { TicketID = 1008, Customer = "Henry Adams", Subject = "Cannot upload attachment", Status = "Pending", Priority = "Medium" },
            new SupportTicket { TicketID = 1009, Customer = "Isla Turner", Subject = "Request for feature access", Status = "Resolved", Priority = "Low" },
            new SupportTicket { TicketID = 1010, Customer = "Jack Wilson", Subject = "Email notifications missing", Status = "Pending", Priority = "Low" },
            new SupportTicket { TicketID = 1011, Customer = "Kara Novak", Subject = "Refund status inquiry", Status = "In Progress", Priority = "High" },
            new SupportTicket { TicketID = 1012, Customer = "Liam Brown", Subject = "Account locked after retries", Status = "Pending", Priority = "High" },
            new SupportTicket { TicketID = 1013, Customer = "Maya Patel", Subject = "Wrong delivery address", Status = "Resolved", Priority = "Medium" },
            new SupportTicket { TicketID = 1014, Customer = "Noah Evans", Subject = "Two-factor code not arriving", Status = "Pending", Priority = "High" },
            new SupportTicket { TicketID = 1015, Customer = "Olivia Scott", Subject = "Subscription renewal question", Status = "Resolved", Priority = "Low" },
            new SupportTicket { TicketID = 1016, Customer = "Peter Hall", Subject = "Error 500 on checkout", Status = "In Progress", Priority = "High" }
        };
    }
}
