namespace SendMessage
{
    public interface IMainHubClient
    {
        Task RecieveMessage(string message);
    }
}
