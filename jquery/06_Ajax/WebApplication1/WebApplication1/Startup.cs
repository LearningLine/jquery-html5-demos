using System;
using System.Threading.Tasks;
using Microsoft.Owin;
using Owin;
using System.Web.Http;

[assembly: OwinStartup(typeof(WebApplication1.Startup))]

namespace WebApplication1
{
    public class Startup
    {
        // OWIN/Katana
        public void Configuration(IAppBuilder app)
        {
            var config = new HttpConfiguration();
            config.MapHttpAttributeRoutes();
            app.UseWebApi(config);
        }
    }
}
