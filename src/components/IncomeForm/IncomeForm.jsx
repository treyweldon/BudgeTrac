import { React } from 'react'
import { createIncome } from "../../utilities/months-api"
import { useState } from 'react'


export default function IncomeForm(user){
  const [newIncome, setNewIncome] = useState({
    category: '',
    amount: ''
  })

  function handleChange(e){
    setNewIncome({...newIncome, [e.target.name]: e.target.value})
  }

  async function addIncome(income) {
    await createIncome(income)    
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addIncome()
  }

    return (
        <>
        <h3>New Income</h3>
        <form onSubmit={handleSubmit} user={user}>

        <label>Select category of your income:</label>
          <br />
            <select name='category' value={newIncome.category} onChange={handleChange}>
              <option value="Select Category" selected disabled>Select category</option>
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
            <input type="number" min="0" name="amount" value={newIncome.amount} onChange={handleChange} />
            <button>Add Income</button>
        </form>
        </>
    )
}