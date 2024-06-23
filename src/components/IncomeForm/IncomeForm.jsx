

export default function IncomeForm(){
    return (
        <>
        <h3>New Income</h3>
        <form action="">

        <label>Select category of your income:</label>
          <br />
            <select name='category'
            //  value={newIncome.category} onChange={handleChange}
             >
              <option value="" disabled selected>Select category</option>
              <option value={"Business Earnings / Profits"}>Business Earnings / Profits</option>
              <option value={"Commisions / Tips"}>Commisions / Tips</option>
              <option value={"Gift"}>Gift</option>
              <option value={"Government"}>Goverment</option>
              <option value={"Interest"}>Interest</option>
              <option value={"Investments"}>Investment</option>
              <option value={"Item Sales"}>Item Sales</option>
              <option value={"Legal Settlement / Alimony"}>Legal Settlement / Alimony</option>
              <option value={"Pension"}>Pension</option>
              <option value={"Salary / Wages"}>Salary / Wages</option>
              <option value={"Stipend"}>Stipend</option>
              <option value={"Residuals"}>Residuals</option>
              <option value={"Royalties"}>Royalties</option>
              <option value={"Windfall"}>Windfall</option>
              <option value={"Other"}>Other</option>
            </select>
            <input type="number" min="0" name="incomeAmount" id="" />
            <button>Add Income</button>
        </form>
        </>
    )
}