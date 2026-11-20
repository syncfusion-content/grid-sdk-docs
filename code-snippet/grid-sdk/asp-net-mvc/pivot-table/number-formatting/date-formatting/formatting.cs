public ActionResult Index()
{
    ViewBag.DataSource = GetPivotData();
    return View();
}

public List<PivotData> GetPivotData()
{
    return new List<PivotData>
    {
        new PivotData { Country = "France", Products = "Mountain Bikes", OrderDate = new DateTime(2023,1,15), Amount = 1250 },
        new PivotData { Country = "France", Products = "Mountain Bikes", OrderDate = new DateTime(2023,5,20), Amount = 2100 },
        new PivotData { Country = "France", Products = "Road Bikes", OrderDate = new DateTime(2023,2,10), Amount = 1800 },
        new PivotData { Country = "France", Products = "Road Bikes", OrderDate = new DateTime(2023,8,14), Amount = 2400 },
        new PivotData { Country = "Germany", Products = "Mountain Bikes", OrderDate = new DateTime(2023,3,12), Amount = 1650 },
        new PivotData { Country = "Germany", Products = "Road Bikes", OrderDate = new DateTime(2023,4,18), Amount = 2200 },
        new PivotData { Country = "Germany", Products = "Road Bikes", OrderDate = new DateTime(2023,9,25), Amount = 3100 },
        new PivotData { Country = "United Kingdom", Products = "Mountain Bikes", OrderDate = new DateTime(2023,1,28), Amount = 1400 },
        new PivotData { Country = "United Kingdom", Products = "Mountain Bikes", OrderDate = new DateTime(2023,6,15), Amount = 1750 },
        new PivotData { Country = "United Kingdom", Products = "Road Bikes", OrderDate = new DateTime(2023,3,5), Amount = 2600 }
    };
}

public class PivotData
{
    public string Country { get; set; }
    public string Products { get; set; }
    public DateTime OrderDate { get; set; }
    public double Amount { get; set; }
}
