public ActionResult Index()
{
    ViewBag.DataSource = IssueData.GetAllRecords();
    return View();
}
