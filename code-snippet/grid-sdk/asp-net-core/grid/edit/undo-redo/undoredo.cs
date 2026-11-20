public class OrderData
{
    public int OrderID { get; set; }
    public string CustomerID { get; set; }
    public double Freight { get; set; }
    public string ShipCountry { get; set; }

    public static List<OrderData> GetAllRecords()
    {
        var data = new List<OrderData>();
        data.Add(new OrderData { OrderID = 10248, CustomerID = "VINET", Freight = 32.38, ShipCountry = "France" });
        data.Add(new OrderData { OrderID = 10249, CustomerID = "TOMSP", Freight = 11.61, ShipCountry = "Germany" });
        data.Add(new OrderData { OrderID = 10250, CustomerID = "HANAR", Freight = 65.83, ShipCountry = "Brazil" });
        data.Add(new OrderData { OrderID = 10251, CustomerID = "VICTE", Freight = 41.34, ShipCountry = "France" });
        data.Add(new OrderData { OrderID = 10252, CustomerID = "SUPRD", Freight = 51.3, ShipCountry = "Belgium" });
        data.Add(new OrderData { OrderID = 10253, CustomerID = "CHOPS", Freight = 22.98, ShipCountry = "Switzerland" });
        data.Add(new OrderData { OrderID = 10254, CustomerID = "RICSU", Freight = 148.33, ShipCountry = "Switzerland" });
        data.Add(new OrderData { OrderID = 10255, CustomerID = "WELLI", Freight = 13.97, ShipCountry = "Brazil" });
        data.Add(new OrderData { OrderID = 10256, CustomerID = "HILAA", Freight = 81.91, ShipCountry = "Venezuela" });
        data.Add(new OrderData { OrderID = 10257, CustomerID = "ERNSH", Freight = 140.51, ShipCountry = "Austria" });
        return data;
    }
}

public IActionResult Index()
{
    ViewBag.DataSource = OrderData.GetAllRecords();
    return View();
}
