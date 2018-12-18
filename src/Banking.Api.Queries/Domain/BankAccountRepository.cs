using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace Banking.Api.Queries.Domain
{
    public class BankAccountRepository
    {
        public async Task<IReadOnlyCollection<BankAccount>> GetBankAccountsAsync(CancellationToken cancellationToken)
        {
            await Task.CompletedTask;

            // TODO: Get from database.

            return new[]
            {
                new BankAccount("Current Account", 110m),
                new BankAccount("Savings", 5000m)
            };
        }
    }
}