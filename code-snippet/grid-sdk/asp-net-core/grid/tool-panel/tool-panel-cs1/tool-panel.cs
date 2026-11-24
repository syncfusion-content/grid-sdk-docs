public IActionResult Index()
{
    ViewBag.dataSource = OrderData.GetAllRecords();
    return View();
}

public class OrderData
{
    public int OrderID { get; set; }
    public string CustomerID { get; set; }
    public string ShipCity { get; set; }
    public string ShipCountry { get; set; }
    public double Freight { get; set; }

    public static List<OrderData> GetAllRecords()
    {
        return new List<OrderData>()
        {
            new OrderData() { OrderID = 10248, CustomerID = "VINET", ShipCity = "Reims", ShipCountry = "France", Freight = 32.38 },
            new OrderData() { OrderID = 10249, CustomerID = "TOMSP", ShipCity = "Munster", ShipCountry = "Germany", Freight = 11.61 },
            new OrderData() { OrderID = 10250, CustomerID = "HANAR", ShipCity = "Rio de Janeiro", ShipCountry = "Brazil", Freight = 65.83 },
            new OrderData() { OrderID = 10251, CustomerID = "VICTE", ShipCity = "Lyon", ShipCountry = "France", Freight = 41.34 },
            new OrderData() { OrderID = 10252, CustomerID = "SUPRD", ShipCity = "Charleroi", ShipCountry = "Belgium", Freight = 51.3 },
            new OrderData() { OrderID = 10253, CustomerID = "HANAR", ShipCity = "Rio de Janeiro", ShipCountry = "Brazil", Freight = 58.17 },
            new OrderData() { OrderID = 10254, CustomerID = "CHOPS", ShipCity = "Bern", ShipCountry = "Switzerland", Freight = 22.98 },
            new OrderData() { OrderID = 10255, CustomerID = "RICSU", ShipCity = "Geneve", ShipCountry = "Switzerland", Freight = 148.33 },
        };
    }
}
