using Microsoft.AspNet.SignalR;
using Owin;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebApplication1
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            app.MapSignalR();

            Task.Factory.StartNew(async () =>
            {
                while(true)
                {
                    await Task.Delay(2000);
                    GlobalHost.ConnectionManager.GetHubContext<Chat>()
                        .Clients.All.GotMessage("spam! " + DateTime.Now.ToString());
                }
            });
        }
    }
}
