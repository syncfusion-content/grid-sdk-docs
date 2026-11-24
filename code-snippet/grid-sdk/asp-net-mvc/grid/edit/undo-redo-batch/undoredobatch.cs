public class ProductData
{
    public int ProductID { get; set; }
    public string ProductName { get; set; }
    public string Category { get; set; }
    public int UnitPrice { get; set; }

    public static List<ProductData> GetAllRecords()
    {
        var data = new List<ProductData>();
        data.Add(new ProductData { ProductID = 1, ProductName = "Chai", Category = "Beverages", UnitPrice = 18 });
        data.Add(new ProductData { ProductID = 2, ProductName = "Chang", Category = "Beverages", UnitPrice = 19 });
        data.Add(new ProductData { ProductID = 3, ProductName = "Aniseed Syrup", Category = "Condiments", UnitPrice = 10 });
        data.Add(new ProductData { ProductID = 4, ProductName = "Chef Anton Cajun", Category = "Condiments", UnitPrice = 22 });
        data.Add(new ProductData { ProductID = 5, ProductName = "Ikura", Category = "Seafood", UnitPrice = 31 });
        data.Add(new ProductData { ProductID = 6, ProductName = "Konbu", Category = "Seafood", UnitPrice = 6 });
        data.Add(new ProductData { ProductID = 7, ProductName = "Tofu", Category = "Produce", UnitPrice = 23 });
        data.Add(new ProductData { ProductID = 8, ProductName = "Genen Shouyu", Category = "Condiments", UnitPrice = 15 });
        data.Add(new ProductData { ProductID = 9, ProductName = "Pavlova", Category = "Confections", UnitPrice = 17 });
        data.Add(new ProductData { ProductID = 10, ProductName = "Alice Mutton", Category = "Meat", UnitPrice = 39 });
        return data;
    }
}

public ActionResult Index()
{
    ViewBag.DataSource = ProductData.GetAllRecords();
    return View();
}
