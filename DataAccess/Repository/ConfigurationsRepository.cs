using DataAccess.Repository.Interfaces;
using Domain;
using System.Collections.Generic;
using System.Linq;

namespace DataAccess.Repository
{
    public class ConfigurationsRepository : IConfigurationsRepository
    {
        private readonly MyContext _context;

        public ConfigurationsRepository(MyContext context)
        {
            _context = context;
        }

        public Configuration GetAllConfigurations()
        {
            var memoryData = _context.Configurations.Where(x => x.Title.Contains("Ram"))
            .Select(x => new Memory
            {
                ConfigurationID = x.ConfigurationID,
                Title = x.Title,
                Cost = x.Cost
            }).ToList();

            var harddiskData = _context.Configurations.Where(x => x.Title.Contains("HDD"))
            .Select(x => new Harddisk
            {
                ConfigurationID = x.ConfigurationID,
                Title = x.Title,
                Cost = x.Cost
            }).ToList();

            var colourData = _context.Configurations.Where(x => x.Title.Contains("Colour"))
            .Select(x => new Colour
            {
                ConfigurationID = x.ConfigurationID,
                Title = x.Title,
                Cost = x.Cost
            }).ToList();

            var model = new Configuration
            {
                Memory = memoryData,
                Harddisk = harddiskData,
                Colour = colourData
            };
            return model;
        }
    }
}
