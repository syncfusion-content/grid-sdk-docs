public IActionResult Index()
{
    ViewBag.DataSource = ShiftPlan.GetAllRecords();
    return View();
}
