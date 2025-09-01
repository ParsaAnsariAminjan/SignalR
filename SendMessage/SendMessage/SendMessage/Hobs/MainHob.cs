using Microsoft.AspNetCore.SignalR;

namespace SendMessage.Hobs
{
    //<IMainHubClient> this Code Added
    public class MainHob : Hub<IMainHubClient>
    {
        public async Task broadcastMessage(string message)
        {
            await Clients.All.RecieveMessage(message);
        }
        public override Task OnConnectedAsync()
        {
            return base.OnConnectedAsync();
        }
        public override Task OnDisconnectedAsync(Exception? exception)
        {
            return base.OnDisconnectedAsync(exception);
        }
    }


    /*
     * *****this code is ok but pussible accured mistake when Hub or Project grows*****
     * so I add a interface (MainHob) and use it in abow code  
     * 
    public class MainHob : Hub
    {
        public async Task broadcastMessage(string message)
        {
            await Clients.All.SendAsync("RecieveMessage", message);
        }
        public override Task OnConnectedAsync()
        {
            return base.OnConnectedAsync();
        }
        public override Task OnDisconnectedAsync(Exception? exception)
        {
            return base.OnDisconnectedAsync(exception);
        }
    }
    */
}
