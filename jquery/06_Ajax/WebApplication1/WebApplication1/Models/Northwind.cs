using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public class Product
    {
        public int ProductID { get; set; }
        public string ProductName { get; set; }
        public decimal? UnitPrice { get; set; }
    }

    public class NorthwindDb : DbContext
    {
        public NorthwindDb()
            : base("Northwind")
        {
        }

        public DbSet<Product> Products { get; set; }
    }
}