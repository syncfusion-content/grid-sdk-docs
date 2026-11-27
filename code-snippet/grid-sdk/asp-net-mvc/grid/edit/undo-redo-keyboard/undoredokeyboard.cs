public class EmployeeData
{
    public int EmployeeID { get; set; }
    public string Name { get; set; }
    public string Department { get; set; }
    public int Salary { get; set; }

    public static List<EmployeeData> GetAllRecords()
    {
        var data = new List<EmployeeData>();
        data.Add(new EmployeeData { EmployeeID = 1001, Name = "Nancy Davolio", Department = "Sales", Salary = 52000 });
        data.Add(new EmployeeData { EmployeeID = 1002, Name = "Andrew Fuller", Department = "Management", Salary = 98000 });
        data.Add(new EmployeeData { EmployeeID = 1003, Name = "Janet Leverling", Department = "Sales", Salary = 61000 });
        data.Add(new EmployeeData { EmployeeID = 1004, Name = "Margaret Peacock", Department = "Marketing", Salary = 57000 });
        data.Add(new EmployeeData { EmployeeID = 1005, Name = "Steven Buchanan", Department = "Engineering", Salary = 72000 });
        data.Add(new EmployeeData { EmployeeID = 1006, Name = "Michael Suyama", Department = "Engineering", Salary = 69000 });
        data.Add(new EmployeeData { EmployeeID = 1007, Name = "Robert King", Department = "Support", Salary = 45000 });
        data.Add(new EmployeeData { EmployeeID = 1008, Name = "Laura Callahan", Department = "Support", Salary = 43000 });
        data.Add(new EmployeeData { EmployeeID = 1009, Name = "Anne Dodsworth", Department = "Marketing", Salary = 55000 });
        data.Add(new EmployeeData { EmployeeID = 1010, Name = "Nigel Nelson", Department = "Finance", Salary = 66000 });
        return data;
    }
}

public ActionResult Index()
{
    ViewBag.DataSource = EmployeeData.GetAllRecords();
    return View();
}
