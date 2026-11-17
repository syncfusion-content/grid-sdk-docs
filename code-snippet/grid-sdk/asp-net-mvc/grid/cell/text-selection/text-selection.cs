public IActionResult Index()
{
    var Records = OrderDetails.GetAllRecords();
    ViewBag.DataSource = Records;
    return View();
}