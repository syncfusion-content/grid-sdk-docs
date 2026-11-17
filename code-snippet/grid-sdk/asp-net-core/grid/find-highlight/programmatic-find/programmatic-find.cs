public IActionResult Index()
{
    ViewBag.datasource = OrderRecord.GetAllRecords();
    return View();
}

public class OrderRecord
{
    public int OrderID { get; set; }
    public string CustomerID { get; set; }
    public string ShipCity { get; set; }
    public string ShipCountry { get; set; }
    public double Freight { get; set; }

    public static List<OrderRecord> GetAllRecords()
    {
        return new List<OrderRecord>
        {
            new OrderRecord { OrderID = 10248, CustomerID = "VINET", ShipCity = "Reims", ShipCountry = "France", Freight = 32.38 },
            new OrderRecord { OrderID = 10249, CustomerID = "TOMSP", ShipCity = "Münster", ShipCountry = "Germany", Freight = 11.61 },
            new OrderRecord { OrderID = 10250, CustomerID = "HANAR", ShipCity = "Rio de Janeiro", ShipCountry = "Brazil", Freight = 65.83 },
            new OrderRecord { OrderID = 10251, CustomerID = "VICTE", ShipCity = "Lyon", ShipCountry = "France", Freight = 41.34 },
            new OrderRecord { OrderID = 10252, CustomerID = "SUPRD", ShipCity = "Charleroi", ShipCountry = "Belgium", Freight = 51.3 },
            new OrderRecord { OrderID = 10253, CustomerID = "HANAR", ShipCity = "Rio de Janeiro", ShipCountry = "Brazil", Freight = 58.17 },
            new OrderRecord { OrderID = 10254, CustomerID = "CHOPS", ShipCity = "Bern", ShipCountry = "Switzerland", Freight = 22.98 },
            new OrderRecord { OrderID = 10255, CustomerID = "RICSU", ShipCity = "Genève", ShipCountry = "Switzerland", Freight = 148.33 },
            new OrderRecord { OrderID = 10256, CustomerID = "WELLI", ShipCity = "Resende", ShipCountry = "Brazil", Freight = 13.97 },
            new OrderRecord { OrderID = 10257, CustomerID = "HILAA", ShipCity = "San Cristóbal", ShipCountry = "Venezuela", Freight = 81.91 },
            new OrderRecord { OrderID = 10258, CustomerID = "ERNSH", ShipCity = "Graz", ShipCountry = "Austria", Freight = 140.51 },
            new OrderRecord { OrderID = 10259, CustomerID = "CENTC", ShipCity = "México D.F.", ShipCountry = "Mexico", Freight = 3.25 },
            new OrderRecord { OrderID = 10260, CustomerID = "OTTIK", ShipCity = "Köln", ShipCountry = "Germany", Freight = 55.09 },
            new OrderRecord { OrderID = 10261, CustomerID = "QUEDE", ShipCity = "Rio de Janeiro", ShipCountry = "Brazil", Freight = 3.05 },
            new OrderRecord { OrderID = 10262, CustomerID = "RATTC", ShipCity = "Albuquerque", ShipCountry = "USA", Freight = 48.29 },
            new OrderRecord { OrderID = 10263, CustomerID = "ERNSH", ShipCity = "Graz", ShipCountry = "Austria", Freight = 146.06 }
        };
    }
}
