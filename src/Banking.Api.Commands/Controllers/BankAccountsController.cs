using System;
using System.Threading;
using System.Threading.Tasks;
using Banking.Api.Commands.Controllers.Models;
using Microsoft.AspNetCore.Mvc;

namespace Banking.Api.Commands.Controllers
{
    public class BankAccountsController : Controller
    {
        [HttpPost("api/bankaccounts")]
        public async Task<ActionResult> CreateBankAccount([FromBody] CreateBankAccountCommand command, CancellationToken cancellationToken)
        {
            if (command == null || String.IsNullOrWhiteSpace(command.Name))
            {
                return BadRequest();
            }

            // TODO: Create event.
            // TODO: Store event.
            // TODO: Relay event.

            await Task.CompletedTask;

            return NoContent();
        }
    }
}