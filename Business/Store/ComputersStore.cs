using Business.Interfaces;
using Domain;
using System.Collections.Generic;
using DataAccess.Repository.Interfaces;

namespace Business.Store
{
    public class ComputersStore : IComputers
    {
        private readonly IComputersRepository _computersRepository;

        public ComputersStore(IComputersRepository computersRepository)
        {
            _computersRepository = computersRepository;
        }

        public List<Computers> GetComputers()
        {
            return _computersRepository.GetAllComputers();
        }
    }
}

