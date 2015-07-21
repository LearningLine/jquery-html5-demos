using Microsoft.AspNet.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebApplication1
{
    public class Chat : Hub
    {
        public override Task OnConnected()
        {
            //this.Context.ConnectionId
            //this.Context.User

            this.Groups.Add(this.Context.ConnectionId, "Managers");

            return base.OnConnected();
        }

        public override Task OnDisconnected(bool stopCalled)
        {
            return base.OnDisconnected(stopCalled);
        }

        public override Task OnReconnected()
        {
            return base.OnReconnected();
        }

        public void SendMessage(string message)
        {
            //this.Context.ConnectionId
            //this.Clients.Client("123")
            this.Clients.All.GotMessage(message);
            //this.Clients.AllExcept()
            //this.Clients.Caller
            //this.Clients.Caller.Foo();
            //this.Clients.Group("Managers").GotMessage("whatever");

            //dim x = new Foo()
            //x.Foo()
        }
    }
}
