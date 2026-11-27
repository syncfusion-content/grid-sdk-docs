public IActionResult Index()
{
    ViewBag.dataSource = EmployeeData.GetAllRecords();
    return View();
}

public class EmployeeData
{
    public int EmployeeID { get; set; }
    public string Name { get; set; }
    public string Title { get; set; }
    public string Country { get; set; }
    public int Salary { get; set; }


    public static List<EmployeeData> GetAllRecords()
    {
        return new List<EmployeeData>()
        {
            new EmployeeData() { EmployeeID = 1, Name = "Nancy Davolio", Title = "Sales Representative", Country = "USA", Salary = 52000 },
            new EmployeeData() { EmployeeID = 2, Name = "Andrew Fuller", Title = "Vice President", Country = "USA", Salary = 98000 },
            new EmployeeData() { EmployeeID = 3, Name = "Janet Leverling", Title = "Sales Manager", Country = "UK", Salary = 76000 },
            new EmployeeData() { EmployeeID = 4, Name = "Margaret Peacock", Title = "Sales Associate", Country = "France", Salary = 48000 },
            new EmployeeData() { EmployeeID = 5, Name = "Steven Buchanan", Title = "Team Lead", Country = "UK", Salary = 67000 },
            new EmployeeData() { EmployeeID = 6, Name = "Michael Suyama", Title = "Developer", Country = "Germany", Salary = 71000 },
            new EmployeeData() { EmployeeID = 7, Name = "Robert King", Title = "Analyst", Country = "Spain", Salary = 59000 },
            new EmployeeData() { EmployeeID = 8, Name = "Laura Callahan", Title = "Coordinator", Country = "USA", Salary = 45000 },
        };
    }
}
