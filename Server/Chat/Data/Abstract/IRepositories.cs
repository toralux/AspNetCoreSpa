using Server.Chat.Models;

namespace Server.Chat.Data.Abstract
{
    public interface IMatchRepository : IEntityBaseRepository<Match> { }

    public interface IFeedRepository : IEntityBaseRepository<Feed> { }

}
