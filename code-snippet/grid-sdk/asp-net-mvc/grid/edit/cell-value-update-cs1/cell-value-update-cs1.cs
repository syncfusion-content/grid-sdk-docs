public IActionResult Index()
{
    ViewBag.dataSource = TaskData.GetTasks();
    return View();
}

public class TaskData
{
    public int TaskID { get; set; }
    public string TaskName { get; set; }
    public double Progress { get; set; }
    public string AssignedTo { get; set; }
    public DateTime Deadline { get; set; }
    public string Priority { get; set; }
    public string Status { get; set; }
    public string Department { get; set; }
    public int TaskNumber { get; set; }
    public DateTime AssignedDate { get; set; }

    public static List<TaskData> GetTasks()
    {
        return new List<TaskData>
        {
            new TaskData { TaskID = 1, TaskName = "Deployment", Progress = 0.27, AssignedTo = "David", Deadline = new DateTime(2024, 7, 18), Priority = "Medium", Status = "In Progress", Department = "Design", TaskNumber = 5281947, AssignedDate = new DateTime(2024, 2, 10) },
            new TaskData { TaskID = 2, TaskName = "Testing", Progress = 0.86, AssignedTo = "Eve", Deadline = new DateTime(2024, 6, 10), Priority = "Medium", Status = "On Hold", Department = "Design", TaskNumber = 3748216, AssignedDate = new DateTime(2023, 11, 15) },
            new TaskData { TaskID = 3, TaskName = "Feature Rollout", Progress = 0.5, AssignedTo = "Alice", Deadline = new DateTime(2024, 2, 16), Priority = "Low", Status = "In Progress", Department = "Engineering", TaskNumber = 8193042, AssignedDate = new DateTime(2023, 9, 20) },
            new TaskData { TaskID = 4, TaskName = "Testing", Progress = 0.35, AssignedTo = "Judy", Deadline = new DateTime(2024, 2, 13), Priority = "Low", Status = "In Progress", Department = "QA", TaskNumber = 1629573, AssignedDate = new DateTime(2023, 10, 5) },
            new TaskData { TaskID = 5, TaskName = "Feature Rollout", Progress = 0.29, AssignedTo = "Charlie", Deadline = new DateTime(2023, 12, 30), Priority = "Medium", Status = "On Hold", Department = "Engineering", TaskNumber = 7031846, AssignedDate = new DateTime(2023, 7, 12) },
            new TaskData { TaskID = 6, TaskName = "Documentation", Progress = 1, AssignedTo = "David", Deadline = new DateTime(2024, 3, 7), Priority = "Medium", Status = "Completed", Department = "QA", TaskNumber = 2945718, AssignedDate = new DateTime(2023, 12, 1) },
            new TaskData { TaskID = 7, TaskName = "Documentation", Progress = 0, AssignedTo = "Alice", Deadline = new DateTime(2024, 2, 10), Priority = "Low", Status = "Not Started", Department = "Support", TaskNumber = 8510362, AssignedDate = new DateTime(2023, 10, 25) },
            new TaskData { TaskID = 8, TaskName = "Bug Fixing", Progress = 0.55, AssignedTo = "Alice", Deadline = new DateTime(2023, 11, 6), Priority = "Medium", Status = "In Progress", Department = "Engineering", TaskNumber = 4379201, AssignedDate = new DateTime(2023, 8, 18) },
            new TaskData { TaskID = 9, TaskName = "Deployment", Progress = 1, AssignedTo = "David", Deadline = new DateTime(2023, 12, 27), Priority = "High", Status = "Completed", Department = "Engineering", TaskNumber = 9681473, AssignedDate = new DateTime(2023, 9, 10) },
            new TaskData { TaskID = 10, TaskName = "Feature Rollout", Progress = 1, AssignedTo = "David", Deadline = new DateTime(2024, 7, 4), Priority = "High", Status = "Completed", Department = "Design", TaskNumber = 3058729, AssignedDate = new DateTime(2024, 4, 15) },
            new TaskData { TaskID = 11, TaskName = "UI Design", Progress = 0.35, AssignedTo = "Judy", Deadline = new DateTime(2025, 8, 7), Priority = "Low", Status = "On Hold", Department = "Design", TaskNumber = 7126490, AssignedDate = new DateTime(2025, 3, 20) },
            new TaskData { TaskID = 12, TaskName = "Feature Rollout", Progress = 0.29, AssignedTo = "Charlie", Deadline = new DateTime(2024, 3, 29), Priority = "Low", Status = "On Hold", Department = "QA", TaskNumber = 1845037, AssignedDate = new DateTime(2023, 12, 5) },
            new TaskData { TaskID = 13, TaskName = "Documentation", Progress = 0.47, AssignedTo = "Bob", Deadline = new DateTime(2024, 6, 1), Priority = "High", Status = "On Hold", Department = "QA", TaskNumber = 5962814, AssignedDate = new DateTime(2024, 2, 8) },
            new TaskData { TaskID = 14, TaskName = "Bug Fixing", Progress = 0.69, AssignedTo = "Heidi", Deadline = new DateTime(2025, 8, 18), Priority = "Medium", Status = "On Hold", Department = "Product", TaskNumber = 8730291, AssignedDate = new DateTime(2025, 4, 10) },
            new TaskData { TaskID = 15, TaskName = "UI Design", Progress = 0.6, AssignedTo = "Ivan", Deadline = new DateTime(2024, 4, 4), Priority = "Low", Status = "On Hold", Department = "Support", TaskNumber = 4217583, AssignedDate = new DateTime(2024, 1, 15) },
            new TaskData { TaskID = 16, TaskName = "Bug Fixing", Progress = 0, AssignedTo = "Heidi", Deadline = new DateTime(2024, 1, 2), Priority = "Low", Status = "Not Started", Department = "Product", TaskNumber = 9503627, AssignedDate = new DateTime(2023, 9, 28) },
            new TaskData { TaskID = 17, TaskName = "Bug Fixing", Progress = 1, AssignedTo = "Eve", Deadline = new DateTime(2024, 5, 20), Priority = "High", Status = "Completed", Department = "Engineering", TaskNumber = 6381049, AssignedDate = new DateTime(2024, 2, 25) },
            new TaskData { TaskID = 18, TaskName = "Deployment", Progress = 0.9, AssignedTo = "Eve", Deadline = new DateTime(2024, 7, 27), Priority = "Medium", Status = "On Hold", Department = "Product", TaskNumber = 2754918, AssignedDate = new DateTime(2024, 5, 5) },
            new TaskData { TaskID = 19, TaskName = "Code Review", Progress = 1, AssignedTo = "Heidi", Deadline = new DateTime(2024, 6, 12), Priority = "Medium", Status = "Completed", Department = "QA", TaskNumber = 8093742, AssignedDate = new DateTime(2024, 3, 18) },
            new TaskData { TaskID = 20, TaskName = "UI Design", Progress = 0, AssignedTo = "Heidi", Deadline = new DateTime(2024, 4, 22), Priority = "Medium", Status = "Not Started", Department = "Support", TaskNumber = 3461285, AssignedDate = new DateTime(2024, 1, 10) },
            new TaskData { TaskID = 21, TaskName = "UI Design", Progress = 0.86, AssignedTo = "Grace", Deadline = new DateTime(2024, 1, 9), Priority = "Low", Status = "On Hold", Department = "Product", TaskNumber = 9175036, AssignedDate = new DateTime(2023, 8, 22) },
            new TaskData { TaskID = 22, TaskName = "Deployment", Progress = 1, AssignedTo = "Frank", Deadline = new DateTime(2024, 6, 1), Priority = "High", Status = "Completed", Department = "Engineering", TaskNumber = 5821749, AssignedDate = new DateTime(2024, 3, 12) },
            new TaskData { TaskID = 23, TaskName = "UI Design", Progress = 1, AssignedTo = "Frank", Deadline = new DateTime(2024, 2, 4), Priority = "Low", Status = "Completed", Department = "Product", TaskNumber = 1308964, AssignedDate = new DateTime(2023, 11, 8) },
            new TaskData { TaskID = 24, TaskName = "Documentation", Progress = 0.32, AssignedTo = "Alice", Deadline = new DateTime(2025, 8, 4), Priority = "Low", Status = "In Progress", Department = "Product", TaskNumber = 7643921, AssignedDate = new DateTime(2025, 4, 15) },
            new TaskData { TaskID = 25, TaskName = "Code Review", Progress = 0.07, AssignedTo = "Frank", Deadline = new DateTime(2024, 4, 13), Priority = "High", Status = "In Progress", Department = "Design", TaskNumber = 2085473, AssignedDate = new DateTime(2024, 1, 25) },
            new TaskData { TaskID = 26, TaskName = "Code Review", Progress = 0.97, AssignedTo = "Bob", Deadline = new DateTime(2024, 7, 1), Priority = "Low", Status = "On Hold", Department = "Design", TaskNumber = 6918305, AssignedDate = new DateTime(2024, 4, 20) },
            new TaskData { TaskID = 27, TaskName = "Code Review", Progress = 0.36, AssignedTo = "Bob", Deadline = new DateTime(2023, 12, 2), Priority = "Medium", Status = "On Hold", Department = "QA", TaskNumber = 4572916, AssignedDate = new DateTime(2023, 8, 10) },
            new TaskData { TaskID = 28, TaskName = "Database Migration", Progress = 0.57, AssignedTo = "Bob", Deadline = new DateTime(2024, 7, 7), Priority = "Medium", Status = "On Hold", Department = "Product", TaskNumber = 9837264, AssignedDate = new DateTime(2024, 4, 5) },
            new TaskData { TaskID = 29, TaskName = "Deployment", Progress = 0.05, AssignedTo = "Eve", Deadline = new DateTime(2024, 2, 4), Priority = "Low", Status = "In Progress", Department = "Support", TaskNumber = 3126598, AssignedDate = new DateTime(2023, 11, 12) },
            new TaskData { TaskID = 30, TaskName = "Bug Fixing", Progress = 0.58, AssignedTo = "Frank", Deadline = new DateTime(2024, 6, 13), Priority = "Low", Status = "Completed", Department = "Engineering", TaskNumber = 8761042, AssignedDate = new DateTime(2024, 3, 28) },
            new TaskData { TaskID = 31, TaskName = "Bug Fixing", Progress = 0.99, AssignedTo = "Ivan", Deadline = new DateTime(2024, 2, 11), Priority = "High", Status = "In Progress", Department = "Support", TaskNumber = 5493817, AssignedDate = new DateTime(2023, 10, 18) },
            new TaskData { TaskID = 32, TaskName = "Documentation", Progress = 0.11, AssignedTo = "David", Deadline = new DateTime(2025, 8, 26), Priority = "High", Status = "On Hold", Department = "Product", TaskNumber = 7240963, AssignedDate = new DateTime(2025, 5, 5) },
            new TaskData { TaskID = 33, TaskName = "Database Migration", Progress = 0.56, AssignedTo = "Grace", Deadline = new DateTime(2023, 12, 25), Priority = "Medium", Status = "In Progress", Department = "Product", TaskNumber = 1682479, AssignedDate = new DateTime(2023, 8, 30) },
            new TaskData { TaskID = 34, TaskName = "Bug Fixing", Progress = 0.6, AssignedTo = "David", Deadline = new DateTime(2023, 12, 23), Priority = "Low", Status = "On Hold", Department = "Product", TaskNumber = 8359201, AssignedDate = new DateTime(2023, 9, 15) },
            new TaskData { TaskID = 35, TaskName = "UI Design", Progress = 0.92, AssignedTo = "Judy", Deadline = new DateTime(2024, 2, 13), Priority = "Low", Status = "On Hold", Department = "QA", TaskNumber = 4015739, AssignedDate = new DateTime(2023, 11, 20) },
            new TaskData { TaskID = 36, TaskName = "Bug Fixing", Progress = 0.63, AssignedTo = "Ivan", Deadline = new DateTime(2024, 4, 22), Priority = "High", Status = "On Hold", Department = "Engineering", TaskNumber = 6928471, AssignedDate = new DateTime(2024, 2, 5) },
            new TaskData { TaskID = 37, TaskName = "Code Review", Progress = 0.89, AssignedTo = "Eve", Deadline = new DateTime(2025, 8, 4), Priority = "Medium", Status = "In Progress", Department = "Engineering", TaskNumber = 2531947, AssignedDate = new DateTime(2025, 4, 1) },
            new TaskData { TaskID = 38, TaskName = "Code Review", Progress = 0, AssignedTo = "Eve", Deadline = new DateTime(2024, 6, 21), Priority = "High", Status = "Not Started", Department = "Design", TaskNumber = 9176304, AssignedDate = new DateTime(2024, 3, 10) },
            new TaskData { TaskID = 39, TaskName = "Feature Rollout", Progress = 0.06, AssignedTo = "Grace", Deadline = new DateTime(2024, 6, 5), Priority = "Low", Status = "Completed", Department = "Product", TaskNumber = 4862719, AssignedDate = new DateTime(2024, 2, 15) },
            new TaskData { TaskID = 40, TaskName = "UI Design", Progress = 0.16, AssignedTo = "Heidi", Deadline = new DateTime(2024, 6, 15), Priority = "Medium", Status = "In Progress", Department = "Design", TaskNumber = 7503928, AssignedDate = new DateTime(2024, 4, 1) },
            new TaskData { TaskID = 41, TaskName = "Testing", Progress = 0.34, AssignedTo = "Bob", Deadline = new DateTime(2024, 2, 27), Priority = "High", Status = "In Progress", Department = "Engineering", TaskNumber = 1294856, AssignedDate = new DateTime(2023, 11, 5) },
            new TaskData { TaskID = 42, TaskName = "Feature Rollout", Progress = 0, AssignedTo = "Heidi", Deadline = new DateTime(2023, 12, 22), Priority = "Low", Status = "Not Started", Department = "Engineering", TaskNumber = 6043712, AssignedDate = new DateTime(2023, 8, 25) },
            new TaskData { TaskID = 43, TaskName = "Database Migration", Progress = 0.37, AssignedTo = "David", Deadline = new DateTime(2024, 3, 11), Priority = "Medium", Status = "On Hold", Department = "Product", TaskNumber = 3819274, AssignedDate = new DateTime(2024, 1, 20) },
            new TaskData { TaskID = 44, TaskName = "Bug Fixing", Progress = 0.62, AssignedTo = "Eve", Deadline = new DateTime(2024, 5, 28), Priority = "High", Status = "In Progress", Department = "Design", TaskNumber = 9471053, AssignedDate = new DateTime(2024, 3, 5) },
            new TaskData { TaskID = 45, TaskName = "UI Design", Progress = 0.14, AssignedTo = "Eve", Deadline = new DateTime(2023, 11, 26), Priority = "Low", Status = "In Progress", Department = "QA", TaskNumber = 2658401, AssignedDate = new DateTime(2023, 8, 15) },
            new TaskData { TaskID = 46, TaskName = "UI Design", Progress = 0.67, AssignedTo = "Charlie", Deadline = new DateTime(2025, 8, 9), Priority = "Low", Status = "Completed", Department = "Engineering", TaskNumber = 8135962, AssignedDate = new DateTime(2025, 4, 25) },
            new TaskData { TaskID = 47, TaskName = "Testing", Progress = 0.17, AssignedTo = "Ivan", Deadline = new DateTime(2024, 1, 8), Priority = "Low", Status = "Completed", Department = "Product", TaskNumber = 4701289, AssignedDate = new DateTime(2023, 10, 10) },
            new TaskData { TaskID = 48, TaskName = "Documentation", Progress = 0.53, AssignedTo = "Judy", Deadline = new DateTime(2024, 6, 26), Priority = "Medium", Status = "Completed", Department = "Product", TaskNumber = 5923741, AssignedDate = new DateTime(2024, 4, 10) },
            new TaskData { TaskID = 49, TaskName = "Feature Rollout", Progress = 0.49, AssignedTo = "Bob", Deadline = new DateTime(2024, 1, 5), Priority = "Medium", Status = "On Hold", Department = "Product", TaskNumber = 1367084, AssignedDate = new DateTime(2023, 9, 20) },
            new TaskData { TaskID = 50, TaskName = "Deployment", Progress = 0.72, AssignedTo = "Ivan", Deadline = new DateTime(2024, 5, 22), Priority = "Medium", Status = "On Hold", Department = "Product", TaskNumber = 7284930, AssignedDate = new DateTime(2024, 2, 28) }
        };
    }
}
