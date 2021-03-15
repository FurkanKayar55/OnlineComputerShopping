using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Domain
{
    public class Configurations
    {
        [Key]
        public int ConfigurationID { get; set; }
        public string Title { get; set; }
        public decimal Cost { get; set; }

        public ICollection<Memory> Memory { get; set; }
    }

    public class Configuration
    {
        public ICollection<Memory> Memory { get; set; }
        public ICollection<Harddisk> Harddisk { get; set; }
        public ICollection<Colour> Colour { get; set; }
    }

    public class Memory
    {
        [Key]
        public int ConfigurationID { get; set; }
        public string Title { get; set; }
        public decimal Cost { get; set; }
    }

    public class Harddisk
    {
        [Key]
        public int ConfigurationID { get; set; }
        public string Title { get; set; }
        public decimal Cost { get; set; }
    }

    public class Colour
    {
        [Key]
        public int ConfigurationID { get; set; }
        public string Title { get; set; }
        public decimal Cost { get; set; }
    }
}
