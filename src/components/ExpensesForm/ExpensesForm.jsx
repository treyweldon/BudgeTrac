import { createExpense } from "../../utilities/months-api"
import { useState } from 'react'

export default function ExpensesForm(){
  const [newExpense, setNewExpense] = useState({
    category: '',
    amount: ''
  })

  function handleChange(e){
    setNewExpense({...newExpense, [e.target.name]: e.target.value})
  }

  async function addExpense(newExpense) {
    await createExpense(newExpense)    
  }

  async function handleSubmit (e) {
    e.preventDefault()
    try {
      await addExpense(newExpense);
      setNewExpense({
          category: '',
          amount: ''
      });
  } catch (error) {
      console.error("Error adding Expense:", error);
  }
  }
    return (
        <>
        <h3>New Expense</h3>
        <form  onSubmit={handleSubmit}>

        <label>Select category of your expense:</label>
          <br />
            <select name='category' value={newExpense.category} onChange={handleChange}>
              <option disabled>Select category</option>
              <option value={"Auto Insurance"}>Auto Insurance</option>
              <option value={"Auto Repairs"}>Auto Repairs</option>
              <option value={"Clothing"}>Clothing</option>
              <option value={"Debt Payments"}>Debt Payments</option>
              <option value={"Donations"}>Donations</option>
              <option value={"Education"}>Education</option>
              <option value={"Entertainment"}>Entertainment</option>
              <option value={"Gifts"}>Gifts</option>
              <option value={"Groceries"}>Groceries</option>
              <option value={"Gym / Fitness"}>Gym / Fitness</option>
              <option value={"Health Care"}>Health Care</option>
              <option value={"Health Insurance"}>Health Insurance</option>
              <option value={"Hobbies"}>Hobbies</option>
              <option value={"Home Goods"}>Home Goods</option>
              <option value={"Home Improvement"}>Home Improvement</option>
              <option value={"Home / Renters Insurance"}>Home / Renters Insurance</option>
              <option value={"Home Repairs"}>Home Repairs</option>
              <option value={"Housing"}>Housing</option>
              <option value={"Insurance (Other)"}>Insurance (Other)</option>
              <option value={"Investments"}>Investments</option>
              <option value={"Membership Fees"}>Membership Fees</option>
              <option value={"Pet Supplies"}>Pet Supplies</option>
              <option value={"Restaurants / Bars"}>Restaurants / Bars</option>
              <option value={"Subscriptions"}>Subscriptions</option>
              <option value={"Toiletries / Grooming"}>Toiletries / Grooming</option>
              <option value={"Taxes / Licenses"}>Taxes / Licenses </option>
              <option value={"Transportation"}>Transportation</option>
              <option value={"Travel"}>Travel</option>
              <option value={"Utilities"}>Utilities</option>
              <option value={"Other"}>Other</option>
            </select>
            <input type="number" min="0" name="amount" value={newExpense.amount}  onChange={handleChange} />
            <button>Add Expense</button>
        </form>
        </>
    )
}