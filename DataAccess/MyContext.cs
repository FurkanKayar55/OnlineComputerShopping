using Domain;
using Microsoft.EntityFrameworkCore;
namespace DataAccess
{
    public class MyContext : DbContext
    {
        public MyContext(DbContextOptions<MyContext> options)
            : base(options)
        { }

        public DbSet<Computers> Computers { get; set; }
        public DbSet<Configurations> Configurations { get; set; }
    }
}
