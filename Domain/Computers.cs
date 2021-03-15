using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Domain
{
    public class Computers
    {
        [Key]
        public int ComputerID { get; set; }
        public string Title { get; set; }
        public decimal Cost { get; set; }
    }
}
