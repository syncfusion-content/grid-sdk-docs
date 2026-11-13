public IActionResult Index()
{
    ViewBag.DataSource = RiskDetails.GetAllRecords();
    return View();
}

public class RiskDetails
{
    public string Account { get; set; }
    public string Desk { get; set; }
    public string Rating { get; set; }
    public double Exposure { get; set; }
    public string Risk { get; set; }

    public static List<RiskDetails> GetAllRecords()
    {
        return new List<RiskDetails>
        {
        new RiskDetails { Account = "ACC-101", Desk = "Equities", Rating = "AA", Exposure = 1250000, Risk = "Low" },
        new RiskDetails { Account = "ACC-102", Desk = "Bonds", Rating = "A", Exposure = 830000, Risk = "Low" },
        new RiskDetails { Account = "ACC-103", Desk = "Derivatives", Rating = "BBB", Exposure = 2140000, Risk = "High" },
        new RiskDetails { Account = "ACC-104", Desk = "Commodities", Rating = "BB", Exposure = 960000, Risk = "Medium" },
        new RiskDetails { Account = "ACC-105", Desk = "Equities", Rating = "A", Exposure = 1570000, Risk = "Medium" },
        new RiskDetails { Account = "ACC-106", Desk = "Currency", Rating = "BBB", Exposure = 720000, Risk = "High" }
        };
    }
}
