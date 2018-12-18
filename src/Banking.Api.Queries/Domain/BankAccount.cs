namespace Banking.Api.Queries.Domain
{
    public class BankAccount
    {
        public BankAccount(string name, decimal balance)
        {
            Name = name;
            Balance = balance;
        }

        public string Name { get; }
        public decimal Balance { get; }
    }
}