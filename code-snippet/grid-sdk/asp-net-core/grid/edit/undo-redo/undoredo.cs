public class InventoryData
{
    public int ItemID { get; set; }
    public string ItemName { get; set; }
    public string Category { get; set; }
    public int Stock { get; set; }
    public double Price { get; set; }

    public static List<InventoryData> GetAllRecords()
    {
        var data = new List<InventoryData>();
        data.Add(new InventoryData { ItemID = 5001, ItemName = "Laptop", Category = "Electronics", Stock = 45, Price = 899.99 });
        data.Add(new InventoryData { ItemID = 5002, ItemName = "Mouse", Category = "Accessories", Stock = 150, Price = 19.5 });
        data.Add(new InventoryData { ItemID = 5003, ItemName = "Keyboard", Category = "Accessories", Stock = 120, Price = 35 });
        data.Add(new InventoryData { ItemID = 5004, ItemName = "Monitor", Category = "Electronics", Stock = 60, Price = 189 });
        data.Add(new InventoryData { ItemID = 5005, ItemName = "Desk Lamp", Category = "Furniture", Stock = 80, Price = 24.75 });
        data.Add(new InventoryData { ItemID = 5006, ItemName = "Office Chair", Category = "Furniture", Stock = 35, Price = 149 });
        data.Add(new InventoryData { ItemID = 5007, ItemName = "USB Hub", Category = "Accessories", Stock = 200, Price = 12.3 });
        data.Add(new InventoryData { ItemID = 5008, ItemName = "Webcam", Category = "Electronics", Stock = 75, Price = 54.9 });
        data.Add(new InventoryData { ItemID = 5009, ItemName = "Headset", Category = "Electronics", Stock = 90, Price = 69 });
        data.Add(new InventoryData { ItemID = 5010, ItemName = "Notebook", Category = "Stationery", Stock = 500, Price = 2.5 });
        return data;
    }
}

public IActionResult Index()
{
    ViewBag.DataSource = InventoryData.GetAllRecords();
    return View();
}
