public IActionResult Index()
{
    ViewBag.dataSource = Book.GetAllRecords();
    return View();
}

public class Book
{
    public int BookID { get; set; }
    public string Title { get; set; }
    public string Author { get; set; }
    public string Genre { get; set; }
    public double Price { get; set; }

    public static List<Book> GetAllRecords()
    {
        return new List<Book>()
        {
            new Book() { BookID = 1, Title = "Dune", Author = "Frank Herbert", Genre = "Sci-Fi", Price = 15.99 },
            new Book() { BookID = 2, Title = "Emma", Author = "Jane Austen", Genre = "Classic", Price = 9.5 },
            new Book() { BookID = 3, Title = "1984", Author = "George Orwell", Genre = "Dystopia", Price = 12.0 },
            new Book() { BookID = 4, Title = "The Hobbit", Author = "J.R.R. Tolkien", Genre = "Fantasy", Price = 14.25 },
            new Book() { BookID = 5, Title = "Sapiens", Author = "Yuval Harari", Genre = "History", Price = 18.0 },
            new Book() { BookID = 6, Title = "Gone Girl", Author = "Gillian Flynn", Genre = "Thriller", Price = 13.4 },
            new Book() { BookID = 7, Title = "Educated", Author = "Tara Westover", Genre = "Memoir", Price = 16.0 },
            new Book() { BookID = 8, Title = "Neuromancer", Author = "William Gibson", Genre = "Sci-Fi", Price = 11.75 },
        };
    }
}
