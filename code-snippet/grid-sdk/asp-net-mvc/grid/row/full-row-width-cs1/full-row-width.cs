public ActionResult Index()
{
    ViewBag.DataSource = ShiftPlan.GetAllRecords();
    return View();
}
