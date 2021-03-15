using Domain;
using System;
using System.Collections.Generic;
using System.Text;

namespace DataAccess.Repository.Interfaces
{
    public interface IConfigurationsRepository
    {
        Configuration GetAllConfigurations();
    }
}
