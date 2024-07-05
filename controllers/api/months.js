const Month = require("../../models/month");

module.exports = {
    allMonths,
    create,
    getMonth,
    createIncome,
    createExpense
}

async function create(req, res){
    try {
        const createMonth = await Month.create({...req.body});
        res.json(createMonth)
    } catch (error) {
        console.log(error)
    }
}

async function allMonths(req, res) {
    try {
        const getMonths = await Month.find();
        res.json(getMonths)
    } catch (error) {
        console.log(error)
    }
}

async function getMonth(req, res)  {
    async (req, res) => {
        try {
          const month = await Month.findById(req.params.id);
          if (!month) {
            return res.status(404).json({ message: "Month not found" });
          }
          res.json(month);
        } catch (err) {
          console.error(err);
          res.status(500).json({ message: "Server Error" });
        }
      };
}

async function createIncome(){
    const currentDate = new Date();
    const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
    const currentYear = currentDate.getFullYear();
    const monthYear = `${currentMonth}, ${currentYear}`
    try {
        const month = await Month.findOne(monthYear)
        const incomeData = {
            category: req.body.category,
            amount: req.body.amount
        }
        const income = await Month.create(incomeData)
        month.income.push(income)
        await month.save()
        json(income)
    } catch (error) {
        console.log("Error adding income:", error)
    }
}

async function createExpense(){
    const currentDate = new Date();
    const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
    const currentYear = currentDate.getFullYear();
    const monthYear = `${currentMonth}, ${currentYear}`

    try {
        const month = await Month.findOne(monthYear)
        const expenseData = {
            category: req.body.category,
            amount: req.body.amount
        }
        const expense = await Month.create(expenseData)
        month.expense.push(expense)
        await month.save()
        json(expense)
    } catch (error) {
        console.log("Error adding expense:", error)
    }
}