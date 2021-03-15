using Business.Interfaces;
using DataAccess.Repository.Interfaces;
using Domain;
using System.Collections.Generic;

namespace Business.Store
{
    public class ConfigurationsStore : IConfigurations
    {
        private readonly IConfigurationsRepository _configurations;

        public ConfigurationsStore(IConfigurationsRepository configurations)
        {
            _configurations = configurations;
        }

        public Configuration GetConfigurations()
        {
            return _configurations.GetAllConfigurations();
        }
    }
}
