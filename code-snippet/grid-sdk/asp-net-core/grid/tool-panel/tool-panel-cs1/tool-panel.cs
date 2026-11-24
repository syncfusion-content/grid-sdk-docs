public IActionResult Index()
{
    ViewBag.dataSource = Vehicle.GetAllRecords();
    return View();
}

public class Vehicle
{
    public int VehicleID { get; set; }
    public string Model { get; set; }
    public string Brand { get; set; }
    public int Year { get; set; }
    public int Price { get; set; }

    public static List<Vehicle> GetAllRecords()
    {
        return new List<Vehicle>()
        {
            new Vehicle() { VehicleID = 1, Model = "Model S", Brand = "Tesla", Year = 2022, Price = 89990 },
            new Vehicle() { VehicleID = 2, Model = "Civic", Brand = "Honda", Year = 2021, Price = 22550 },
            new Vehicle() { VehicleID = 3, Model = "Mustang", Brand = "Ford", Year = 2023, Price = 42000 },
            new Vehicle() { VehicleID = 4, Model = "Golf", Brand = "Volkswagen", Year = 2020, Price = 24500 },
            new Vehicle() { VehicleID = 5, Model = "Corolla", Brand = "Toyota", Year = 2022, Price = 21000 },
            new Vehicle() { VehicleID = 6, Model = "X5", Brand = "BMW", Year = 2023, Price = 65000 },
            new Vehicle() { VehicleID = 7, Model = "A4", Brand = "Audi", Year = 2021, Price = 39900 },
            new Vehicle() { VehicleID = 8, Model = "Elantra", Brand = "Hyundai", Year = 2022, Price = 20500 },
        };
    }
}
