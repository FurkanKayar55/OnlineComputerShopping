using Business.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace BlogApi.Controllers
{
    [Route("api/[controller]")]
    public class ComputerController : Controller
    {
        private readonly IComputers _computers;
        private readonly IConfigurations _configurations;

        public ComputerController(IComputers computers, IConfigurations configurations)
        {
            _computers = computers;
            _configurations = configurations;
        }

        [Route("Index")]
        [HttpGet]
        public IActionResult Index()
        {
            var model = _computers.GetComputers();
            if (model == null) return NotFound();
            return Ok(model);
        }

        [Route("Configurations")]
        [HttpGet]
        public IActionResult Configurations()
        {
            var model = _configurations.GetConfigurations();
            if (model == null) return NotFound();
            return Ok(model);
        }
    }
}
