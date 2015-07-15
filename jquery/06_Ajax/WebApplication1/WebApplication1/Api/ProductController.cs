using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using WebApplication1.Models;

namespace WebApplication1.Api
{
    public class ProductModel
    {
        public string Name { get; set; }
        public decimal Price { get; set; }
    }

    public class ProductController : ApiController
    {
        [Route("api/product/{id}")]
        [HttpGet]
        public async Task<IHttpActionResult> Get(int id)
        {
            await Task.Delay(2000);

            var db = new NorthwindDb();
            var p = db.Products.SingleOrDefault(x => x.ProductID == id);

            return Ok(p);
        }

        [Route("api/product/{id}")]
        [HttpPut]
        public IHttpActionResult Put(int id, ProductModel model)
        {
            var db = new NorthwindDb();
            var p = db.Products.SingleOrDefault(x => x.ProductID == id);
            p.ProductName = model.Name;
            p.UnitPrice = model.Price;
            db.SaveChanges();

            // 204
            return StatusCode(HttpStatusCode.NoContent);
        }
    }
}