public ActionResult Index()
{
    ViewBag.DataSource = ProductService.GetProductData();
    return View();
}

public class ProductData
{
    public int Id { get; set; }
    public string Product { get; set; }
    public string Category { get; set; }
    public double Price { get; set; }
    public int Quantity { get; set; }
    public string GrossAmount { get; set; }
    public string TaxAmount { get; set; }
    public string TotalAmount { get; set; }
}

public class ProductService
{
    public static List<ProductData> GetProductData()
    {
        return new List<ProductData>
        {
            new ProductData { Id = 1, Product = "Chai", Category = "Beverages", Price = 45.25, Quantity = 4, GrossAmount = "=REF(COLUMN(\"Price\"),ROW(1))*REF(COLUMN(\"Quantity\"),ROW(1))", TaxAmount = "=REF(COLUMN(\"GrossAmount\"),ROW(1))*0.7", TotalAmount = "=REF(COLUMN(\"GrossAmount\"),ROW(1))+REF(COLUMN(\"TaxAmount\"),ROW(1))" },
            new ProductData { Id = 2, Product = "Chang", Category = "Beverages", Price = 22.75, Quantity = 6, GrossAmount = "=REF(COLUMN(\"Price\"),ROW(2))*REF(COLUMN(\"Quantity\"),ROW(2))", TaxAmount = "=REF(COLUMN(\"GrossAmount\"),ROW(2))*0.7", TotalAmount = "=REF(COLUMN(\"GrossAmount\"),ROW(2))+REF(COLUMN(\"TaxAmount\"),ROW(2))" },
            new ProductData { Id = 3, Product = "Aniseed Syrup", Category = "Condiments", Price = 18.50, Quantity = 3, GrossAmount = "=REF(COLUMN(\"Price\"),ROW(3))*REF(COLUMN(\"Quantity\"),ROW(3))", TaxAmount = "=REF(COLUMN(\"GrossAmount\"),ROW(3))*0.7", TotalAmount = "=REF(COLUMN(\"GrossAmount\"),ROW(3))+REF(COLUMN(\"TaxAmount\"),ROW(3))" },
            new ProductData { Id = 4, Product = "Chef Anton Gumbo Mix", Category = "Condiments", Price = 32.40, Quantity = 2, GrossAmount = "=REF(COLUMN(\"Price\"),ROW(4))*REF(COLUMN(\"Quantity\"),ROW(4))", TaxAmount = "=REF(COLUMN(\"GrossAmount\"),ROW(4))*0.7", TotalAmount = "=REF(COLUMN(\"GrossAmount\"),ROW(4))+REF(COLUMN(\"TaxAmount\"),ROW(4))" },
            new ProductData { Id = 5, Product = "Chef Anton Seasoning", Category = "Condiments", Price = 28.60, Quantity = 5, GrossAmount = "=REF(COLUMN(\"Price\"),ROW(5))*REF(COLUMN(\"Quantity\"),ROW(5))", TaxAmount = "=REF(COLUMN(\"GrossAmount\"),ROW(5))*0.7", TotalAmount = "=REF(COLUMN(\"GrossAmount\"),ROW(5))+REF(COLUMN(\"TaxAmount\"),ROW(5))" },
            new ProductData { Id = 6, Product = "Grandmas Boysenberry Spread", Category = "Condiments", Price = 15.75, Quantity = 7, GrossAmount = "=REF(COLUMN(\"Price\"),ROW(6))*REF(COLUMN(\"Quantity\"),ROW(6))", TaxAmount = "=REF(COLUMN(\"GrossAmount\"),ROW(6))*0.7", TotalAmount = "=REF(COLUMN(\"GrossAmount\"),ROW(6))+REF(COLUMN(\"TaxAmount\"),ROW(6))" },
            new ProductData { Id = 7, Product = "Uncle Bob Organic Dried Pears", Category = "Produce", Price = 19.80, Quantity = 4, GrossAmount = "=REF(COLUMN(\"Price\"),ROW(7))*REF(COLUMN(\"Quantity\"),ROW(7))", TaxAmount = "=REF(COLUMN(\"GrossAmount\"),ROW(7))*0.7", TotalAmount = "=REF(COLUMN(\"GrossAmount\"),ROW(7))+REF(COLUMN(\"TaxAmount\"),ROW(7))" },
            new ProductData { Id = 8, Product = "Northwoods Cranberry Sauce", Category = "Condiments", Price = 24.30, Quantity = 3, GrossAmount = "=REF(COLUMN(\"Price\"),ROW(8))*REF(COLUMN(\"Quantity\"),ROW(8))", TaxAmount = "=REF(COLUMN(\"GrossAmount\"),ROW(8))*0.7", TotalAmount = "=REF(COLUMN(\"GrossAmount\"),ROW(8))+REF(COLUMN(\"TaxAmount\"),ROW(8))" },
            new ProductData { Id = 9, Product = "Mishi Kobe Niku", Category = "Meat/Poultry", Price = 95.50, Quantity = 1, GrossAmount = "=REF(COLUMN(\"Price\"),ROW(9))*REF(COLUMN(\"Quantity\"),ROW(9))", TaxAmount = "=REF(COLUMN(\"GrossAmount\"),ROW(9))*0.7", TotalAmount = "=REF(COLUMN(\"GrossAmount\"),ROW(9))+REF(COLUMN(\"TaxAmount\"),ROW(9))" },
            new ProductData { Id = 10, Product = "Ikura", Category = "Seafood", Price = 56.20, Quantity = 2, GrossAmount = "=REF(COLUMN(\"Price\"),ROW(10))*REF(COLUMN(\"Quantity\"),ROW(10))", TaxAmount = "=REF(COLUMN(\"GrossAmount\"),ROW(10))*0.7", TotalAmount = "=REF(COLUMN(\"GrossAmount\"),ROW(10))+REF(COLUMN(\"TaxAmount\"),ROW(10))" },
            new ProductData { Id = 11, Product = "Queso Cabrales", Category = "Dairy Products", Price = 33.75, Quantity = 5, GrossAmount = "=REF(COLUMN(\"Price\"),ROW(11))*REF(COLUMN(\"Quantity\"),ROW(11))", TaxAmount = "=REF(COLUMN(\"GrossAmount\"),ROW(11))*0.7", TotalAmount = "=REF(COLUMN(\"GrossAmount\"),ROW(11))+REF(COLUMN(\"TaxAmount\"),ROW(11))" },
            new ProductData { Id = 12, Product = "Queso Manchego", Category = "Dairy Products", Price = 41.10, Quantity = 3, GrossAmount = "=REF(COLUMN(\"Price\"),ROW(12))*REF(COLUMN(\"Quantity\"),ROW(12))", TaxAmount = "=REF(COLUMN(\"GrossAmount\"),ROW(12))*0.7", TotalAmount = "=REF(COLUMN(\"GrossAmount\"),ROW(12))+REF(COLUMN(\"TaxAmount\"),ROW(12))" },
            new ProductData { Id = 13, Product = "Konbu", Category = "Seafood", Price = 12.45, Quantity = 8, GrossAmount = "=REF(COLUMN(\"Price\"),ROW(13))*REF(COLUMN(\"Quantity\"),ROW(13))", TaxAmount = "=REF(COLUMN(\"GrossAmount\"),ROW(13))*0.7", TotalAmount = "=REF(COLUMN(\"GrossAmount\"),ROW(13))+REF(COLUMN(\"TaxAmount\"),ROW(13))" },
            new ProductData { Id = 14, Product = "Tofu", Category = "Produce", Price = 8.90, Quantity = 10, GrossAmount = "=REF(COLUMN(\"Price\"),ROW(14))*REF(COLUMN(\"Quantity\"),ROW(14))", TaxAmount = "=REF(COLUMN(\"GrossAmount\"),ROW(14))*0.7", TotalAmount = "=REF(COLUMN(\"GrossAmount\"),ROW(14))+REF(COLUMN(\"TaxAmount\"),ROW(14))" },
            new ProductData { Id = 15, Product = "Genen Shouyu", Category = "Condiments", Price = 21.25, Quantity = 4, GrossAmount = "=REF(COLUMN(\"Price\"),ROW(15))*REF(COLUMN(\"Quantity\"),ROW(15))", TaxAmount = "=REF(COLUMN(\"GrossAmount\"),ROW(15))*0.7", TotalAmount = "=REF(COLUMN(\"GrossAmount\"),ROW(15))+REF(COLUMN(\"TaxAmount\"),ROW(15))" },
            new ProductData { Id = 16, Product = "Pavlova", Category = "Confections", Price = 27.90, Quantity = 6, GrossAmount = "=REF(COLUMN(\"Price\"),ROW(16))*REF(COLUMN(\"Quantity\"),ROW(16))", TaxAmount = "=REF(COLUMN(\"GrossAmount\"),ROW(16))*0.7", TotalAmount = "=REF(COLUMN(\"GrossAmount\"),ROW(16))+REF(COLUMN(\"TaxAmount\"),ROW(16))" },
            new ProductData { Id = 17, Product = "Alice Mutton", Category = "Meat/Poultry", Price = 65.30, Quantity = 2, GrossAmount = "=REF(COLUMN(\"Price\"),ROW(17))*REF(COLUMN(\"Quantity\"),ROW(17))", TaxAmount = "=REF(COLUMN(\"GrossAmount\"),ROW(17))*0.7", TotalAmount = "=REF(COLUMN(\"GrossAmount\"),ROW(17))+REF(COLUMN(\"TaxAmount\"),ROW(17))" },
            new ProductData { Id = 18, Product = "Carnarvon Tigers", Category = "Seafood", Price = 76.50, Quantity = 1, GrossAmount = "=REF(COLUMN(\"Price\"),ROW(18))*REF(COLUMN(\"Quantity\"),ROW(18))", TaxAmount = "=REF(COLUMN(\"GrossAmount\"),ROW(18))*0.7", TotalAmount = "=REF(COLUMN(\"GrossAmount\"),ROW(18))+REF(COLUMN(\"TaxAmount\"),ROW(18))" },
            new ProductData { Id = 19, Product = "Teatime Chocolate Biscuits", Category = "Confections", Price = 14.20, Quantity = 9, GrossAmount = "=REF(COLUMN(\"Price\"),ROW(19))*REF(COLUMN(\"Quantity\"),ROW(19))", TaxAmount = "=REF(COLUMN(\"GrossAmount\"),ROW(19))*0.7", TotalAmount = "=REF(COLUMN(\"GrossAmount\"),ROW(19))+REF(COLUMN(\"TaxAmount\"),ROW(19))" },
            new ProductData { Id = 20, Product = "Sir Rodneys Marmalade", Category = "Confections", Price = 30.15, Quantity = 3, GrossAmount = "=REF(COLUMN(\"Price\"),ROW(20))*REF(COLUMN(\"Quantity\"),ROW(20))", TaxAmount = "=REF(COLUMN(\"GrossAmount\"),ROW(20))*0.7", TotalAmount = "=REF(COLUMN(\"GrossAmount\"),ROW(20))+REF(COLUMN(\"TaxAmount\"),ROW(20))" }
        };
    }
}