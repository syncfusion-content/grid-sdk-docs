public IActionResult Index()
{
    ViewBag.DataSource = IssueData.GetAllRecords();
    return View();
}
