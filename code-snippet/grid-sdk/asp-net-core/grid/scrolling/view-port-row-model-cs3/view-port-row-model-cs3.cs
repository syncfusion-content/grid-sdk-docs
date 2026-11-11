public IActionResult Index()
{
    var data = ChargingStation.GenerateData(10000);
    ViewBag.allData = data;
    // The initial page is supplied in the { result, count } shape expected by custom binding.
    ViewBag.dataSource = new { result = data.Take(50).ToList(), count = data.Count };
    return View();
}

public class ChargingStation
{
    public string StationID { get; set; }
    public string City { get; set; }
    public int AvailableSlots { get; set; }
    public string ChargingSpeed { get; set; }
    public int ActiveSessions { get; set; }
    public double EnergyDelivered { get; set; }
    public double Revenue { get; set; }
    public string MaintenanceStatus { get; set; }
    public bool IsHighDemand { get; set; }
    public DateTime LastMaintenanceDate { get; set; }

    public static List<ChargingStation> GenerateData(int count)
    {
        var cities = new[] { "California", "Texas", "Florida", "New York", "Illinois", "Washington", "Arizona", "Georgia", "Ohio", "North Carolina" };
        var speeds = new[] { "Slow (22kW)", "Fast (50kW)", "Rapid (150kW)", "Ultra Fast (350kW)" };
        var statuses = new[] { "Operational", "Under Maintenance", "Fault", "Scheduled" };
        var random = new Random();
        var result = new List<ChargingStation>();
        for (var i = 1; i <= count; i++)
        {
            var available = random.Next(20);
            var active = random.Next(20 - available);
            var energy = Math.Round(random.NextDouble() * 500 + 50, 2);
            result.Add(new ChargingStation
            {
                StationID = "STN" + i.ToString().PadLeft(5, '0'),
                City = cities[random.Next(cities.Length)],
                AvailableSlots = available,
                ChargingSpeed = speeds[random.Next(speeds.Length)],
                ActiveSessions = active,
                EnergyDelivered = energy,
                Revenue = Math.Round(energy * (0.2 + random.NextDouble() * 0.3), 2),
                MaintenanceStatus = statuses[random.Next(statuses.Length)],
                IsHighDemand = active > 10,
                LastMaintenanceDate = new DateTime(2025, random.Next(1, 13), random.Next(1, 29))
            });
        }
        return result;
    }
}
