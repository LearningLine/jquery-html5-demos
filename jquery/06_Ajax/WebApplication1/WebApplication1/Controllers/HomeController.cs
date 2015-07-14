using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    public class HomeController : Controller
    {
        // ~/Home/Index
        public ActionResult Index()
        {
            var db = new NorthwindDb();
            var list = db.Products.ToArray();

            ViewBag.Products = new SelectList(list, "ProductID", "ProductName");

            return View();
        }

        [HttpGet]
        public ActionResult ProductDetails(int productId)
        {
            var db = new NorthwindDb();
            var p = db.Products.SingleOrDefault(x => x.ProductID == productId);

            return Json(p, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public ActionResult ProductDetails(int productId, string productName, decimal unitPrice)
        {
            //throw new Exception("boom!");
            var db = new NorthwindDb();
            var p = db.Products.SingleOrDefault(x => x.ProductID == productId);
            p.ProductName = productName;
            p.UnitPrice = unitPrice;
            db.SaveChanges();

            return new HttpStatusCodeResult(204);
        }
        
        //public ActionResult ProductDetails(int productId)
        //{
        //    var db = new NorthwindDb();
        //    var p = db.Products.SingleOrDefault(x=>x.ProductID==productId);

        //    return PartialView(p);
        //}

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}