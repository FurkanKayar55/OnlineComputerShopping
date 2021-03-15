using DataAccess.Repository.Interfaces;
using Domain;
using System.Collections.Generic;
using System.Linq;

namespace DataAccess.Repository
{
    public class ComputersRepository : IComputersRepository
    {
        private readonly MyContext _context;
        private readonly IConfigurationsRepository _configurations;

        public ComputersRepository(MyContext context, IConfigurationsRepository configurations)
        {
            _context = context;
            _configurations = configurations;
        }

        public List<Computers> GetAllComputers()
        {
            var data =  _context.Computers
                .Select(x => new Computers
                {
                    ComputerID = x.ComputerID,
                    Title = x.Title,
                    Cost = x.Cost
                }).ToList();
            return data;
        }
    }
}
