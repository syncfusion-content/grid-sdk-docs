public IActionResult Index()
{
    ViewBag.dataSource = ProductData.GetAllRecords();
    return View();
}

public class ProductData
{
    public int ProductID { get; set; }
    public string ProductName { get; set; }
    public string Category { get; set; }
    public double UnitPrice { get; set; }
    public int UnitsInStock { get; set; }


    public static List<ProductData> GetAllRecords()
    {
        return new List<ProductData>()
        {
            new ProductData() { ProductID = 101, ProductName = "Chai", Category = "Beverages", UnitPrice = 18.0, UnitsInStock = 39 },
            new ProductData() { ProductID = 102, ProductName = "Chang", Category = "Beverages", UnitPrice = 19.5, UnitsInStock = 17 },
            new ProductData() { ProductID = 103, ProductName = "Aniseed Syrup", Category = "Condiments", UnitPrice = 10.0, UnitsInStock = 13 },
            new ProductData() { ProductID = 104, ProductName = "Tofu", Category = "Produce", UnitPrice = 23.25, UnitsInStock = 35 },
            new ProductData() { ProductID = 105, ProductName = "Ikura", Category = "Seafood", UnitPrice = 31.0, UnitsInStock = 31 },
            new ProductData() { ProductID = 106, ProductName = "Konbu", Category = "Seafood", UnitPrice = 6.0, UnitsInStock = 24 },
            new ProductData() { ProductID = 107, ProductName = "Pavlova", Category = "Confections", UnitPrice = 17.45, UnitsInStock = 29 },
            new ProductData() { ProductID = 108, ProductName = "Sir Rodney Scones", Category = "Confections", UnitPrice = 10.0, UnitsInStock = 3 },
        };
    }
}
