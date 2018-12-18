using Microsoft.AspNetCore.Mvc;

namespace Banking.Api.Commands.Controllers
{
    public class HealthController : Controller
    {
        [HttpGet("api/health")]
        public ActionResult GetHealth() => Ok("OK");
    }
}