using System;
using System.Threading.Tasks;
using Microsoft.Owin;
using Owin;
using System.Web.Http;
using System.Web.Http.Cors;

[assembly: OwinStartup(typeof(WebApplication1.Startup))]

namespace WebApplication1
{
    public class Startup
    {
        // OWIN/Katana
        public void Configuration(IAppBuilder app)
        {
            // http://localhost:7989/

            var config = new HttpConfiguration();
            config.EnableCors(new EnableCorsAttribute("http://localhost:7989", "*", "*"));
            config.MapHttpAttributeRoutes();
            app.UseWebApi(config);
        }
    }
}
