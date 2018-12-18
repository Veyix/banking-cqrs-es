using System.Threading;
using System.Threading.Tasks;
using Banking.Api.Queries.Domain;
using Microsoft.AspNetCore.Mvc;

namespace Banking.Api.Queries.Controllers
{
    public class BankAccountsController : Controller
    {
        private readonly BankAccountRepository _bankAccountRepository;

        public BankAccountsController(BankAccountRepository bankAccountRepository)
        {
            _bankAccountRepository = bankAccountRepository;
        }

        [HttpGet("api/bankaccounts")]
        public async Task<ActionResult> GetBankAccountsAsync(CancellationToken cancellationToken)
        {
            var bankAccounts = await _bankAccountRepository.GetBankAccountsAsync(cancellationToken);
            return Ok(bankAccounts);
        }
    }
}