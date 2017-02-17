using AspNetCoreSpa.Server;
using Server.Chat.Data.Abstract;
using Server.Chat.Models;

namespace Server.Chat.Data.Repositories
{
    public class MatchRepository : EntityBaseRepository<Match>, IMatchRepository
    {
        public MatchRepository(ApplicationDbContext context) : base(context) { }
    }
}
