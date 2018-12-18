using Microsoft.AspNetCore.Mvc;

namespace Banking.Api.Queries.Controllers
{
    public class HealthController : Controller
    {
        [HttpGet("api/health")]
        public ActionResult GetHealth() => Ok("OK");
    }
}