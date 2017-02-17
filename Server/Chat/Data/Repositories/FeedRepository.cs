using AspNetCoreSpa.Server;
using Server.Chat.Data.Abstract;
using Server.Chat.Models;

namespace Server.Chat.Data.Repositories
{
    public class FeedRepository : EntityBaseRepository<Feed>, IFeedRepository
    {
        public FeedRepository(ApplicationDbContext context) : base(context) { }
    }
}
