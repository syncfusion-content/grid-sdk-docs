public IActionResult Index()
{
    ViewBag.dataSource = GetOrderData();
    return View();
}

private List<OrdersDetails> GetOrderData()
{
    DateTime today = DateTime.Today;
    return new List<OrdersDetails>
    {
        // Last Year (2)
        new OrdersDetails { OrderID = 10248, CustomerID = "VINET", EmployeeID = 5, OrderDate = new DateTime(today.Year - 1, 3, 15), ShipName = "Vins et alcools Chevalier", ShipCity = "Reims", ShipAddress = "59 rue de l'Abbaye", ShipRegion = "CJ", ShipPostalCode = "51100", ShipCountry = "France", Freight = 32.38, Verified = true },
        new OrdersDetails { OrderID = 10249, CustomerID = "TOMSP", EmployeeID = 6, OrderDate = new DateTime(today.Year - 1, 9, 20), ShipName = "Toms Spezialitäten", ShipCity = "Münster", ShipAddress = "Luisenstr. 48", ShipRegion = "CJ", ShipPostalCode = "44087", ShipCountry = "Germany", Freight = 11.61, Verified = false },

        // Next Year (2)
        new OrdersDetails { OrderID = 10250, CustomerID = "HANAR", EmployeeID = 4, OrderDate = new DateTime(today.Year + 1, 2, 10), ShipName = "Hanari Carnes", ShipCity = "Rio de Janeiro", ShipAddress = "Rua do Paço, 67", ShipRegion = "RJ", ShipPostalCode = "05454-876", ShipCountry = "Brazil", Freight = 65.83, Verified = true },
        new OrdersDetails { OrderID = 10251, CustomerID = "VICTE", EmployeeID = 3, OrderDate = new DateTime(today.Year + 1, 11, 5), ShipName = "Victuailles en stock", ShipCity = "Lyon", ShipAddress = "2, rue du Commerce", ShipRegion = "CJ", ShipPostalCode = "69004", ShipCountry = "France", Freight = 41.34, Verified = true },

        // Last Week (1)
        new OrdersDetails { OrderID = 10252, CustomerID = "SUPRD", EmployeeID = 4, OrderDate = today.AddDays(-7), ShipName = "Suprêmes délices", ShipCity = "Charleroi", ShipAddress = "Boulevard Tirou, 255", ShipRegion = "CJ", ShipPostalCode = "B-6000", ShipCountry = "Belgium", Freight = 51.30, Verified = true },

        // Next Week (1)
        new OrdersDetails { OrderID = 10253, CustomerID = "HANAR", EmployeeID = 3, OrderDate = today.AddDays(7), ShipName = "Hanari Carnes", ShipCity = "Rio de Janeiro", ShipAddress = "Rua do Paço, 67", ShipRegion = "RJ", ShipPostalCode = "05454-876", ShipCountry = "Brazil", Freight = 58.17, Verified = true },

        // This Week (2)
        new OrdersDetails { OrderID = 10254, CustomerID = "CHOPS", EmployeeID = 5, OrderDate = today.AddDays(-2), ShipName = "Chop-suey Chinese", ShipCity = "Bern", ShipAddress = "Hauptstr. 31", ShipRegion = "CJ", ShipPostalCode = "3012", ShipCountry = "Switzerland", Freight = 22.98, Verified = false },
        new OrdersDetails { OrderID = 10255, CustomerID = "RICSU", EmployeeID = 9, OrderDate = today.AddDays(-1), ShipName = "Richter Supermarkt", ShipCity = "Genève", ShipAddress = "Starenweg 5", ShipRegion = "CJ", ShipPostalCode = "1204", ShipCountry = "Switzerland", Freight = 148.33, Verified = true },

        // Last Month (2)
        new OrdersDetails { OrderID = 10256, CustomerID = "WELLI", EmployeeID = 3, OrderDate = new DateTime(today.Year, today.Month, 1).AddMonths(-1).AddDays(4), ShipName = "Wellington Importadora", ShipCity = "Resende", ShipAddress = "Rua do Mercado, 12", ShipRegion = "SP", ShipPostalCode = "08737-363", ShipCountry = "Brazil", Freight = 13.97, Verified = false },
        new OrdersDetails { OrderID = 10257, CustomerID = "HILAA", EmployeeID = 4, OrderDate = new DateTime(today.Year, today.Month, 1).AddMonths(-1).AddDays(19), ShipName = "HILARION-Abastos", ShipCity = "San Cristóbal", ShipAddress = "Carrera 22 con Ave. Carlos Soublette #8-35", ShipRegion = "Táchira", ShipPostalCode = "5022", ShipCountry = "Venezuela", Freight = 81.91, Verified = true },

        // This Month (2)
        new OrdersDetails { OrderID = 10258, CustomerID = "ERNSH", EmployeeID = 1, OrderDate = new DateTime(today.Year, today.Month, 5), ShipName = "Ernst Handel", ShipCity = "Graz", ShipAddress = "Kirchgasse 6", ShipRegion = "CJ", ShipPostalCode = "8010", ShipCountry = "Austria", Freight = 140.51, Verified = true },
        new OrdersDetails { OrderID = 10259, CustomerID = "CENTC", EmployeeID = 4, OrderDate = new DateTime(today.Year, today.Month, 15), ShipName = "Centro comercial Moctezuma", ShipCity = "México D.F.", ShipAddress = "Sierras de Granada 9993", ShipRegion = "CJ", ShipPostalCode = "05022", ShipCountry = "Mexico", Freight = 3.25, Verified = false },

        // Next Month (2)
        new OrdersDetails { OrderID = 10260, CustomerID = "OTTIK", EmployeeID = 4, OrderDate = new DateTime(today.Year, today.Month, 1).AddMonths(1).AddDays(4), ShipName = "Ottilies Käseladen", ShipCity = "Köln", ShipAddress = "Mehrheimerstr. 369", ShipRegion = "CJ", ShipPostalCode = "50739", ShipCountry = "Germany", Freight = 55.09, Verified = true },
        new OrdersDetails { OrderID = 10261, CustomerID = "QUEDE", EmployeeID = 4, OrderDate = new DateTime(today.Year, today.Month, 1).AddMonths(1).AddDays(19), ShipName = "Que Delícia", ShipCity = "Rio de Janeiro", ShipAddress = "Rua da Panificadora, 12", ShipRegion = "RJ", ShipPostalCode = "02389-673", ShipCountry = "Brazil", Freight = 3.05, Verified = false },

        // Today (1)
        new OrdersDetails { OrderID = 10262, CustomerID = "RATTC", EmployeeID = 8, OrderDate = today, ShipName = "Rattlesnake Canyon Grocery", ShipCity = "Albuquerque", ShipAddress = "2817 Milton Dr.", ShipRegion = "NM", ShipPostalCode = "87110", ShipCountry = "USA", Freight = 48.29, Verified = true }
    };
}

public class OrdersDetails
{
    public int OrderID { get; set; }
    public string CustomerID { get; set; }
    public int EmployeeID { get; set; }
    public DateTime OrderDate { get; set; }
    public string ShipName { get; set; }
    public string ShipCity { get; set; }
    public string ShipAddress { get; set; }
    public string ShipRegion { get; set; }
    public string ShipPostalCode { get; set; }
    public string ShipCountry { get; set; }
    public double Freight { get; set; }
    public bool Verified { get; set; }
}
