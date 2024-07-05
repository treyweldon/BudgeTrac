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

async function createIncome(req, res) {
    const currentDate = new Date();
    const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
    const currentYear = currentDate.getFullYear();

    try {
        let month = await Month.findOne({ month: currentMonth, year: currentYear });

        if (!month) {
            month = new Month({
                month: currentMonth,
                year: currentYear,
                income: [] 
            });
        }

        const incomeData = {
            category: req.body.category,
            amount: req.body.amount
        };

        month.income.push(incomeData); 
        await month.save(); 

        res.json(incomeData); 
    } catch (error) {
        console.log("Error adding income:", error);
        res.status(500).json({ error: 'Failed to add income' });
    }
}

async function createExpense(req, res) {
    const currentDate = new Date();
    const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
    const currentYear = currentDate.getFullYear();

    try {
        let month = await Month.findOne({ month: currentMonth, year: currentYear });

        if (!month) {
            month = new Month({
                month: currentMonth,
                year: currentYear,
                expenses: [] 
            });
        }

        const expensesData = {
            category: req.body.category,
            amount: req.body.amount
        };

        month.income.push(expensesDataData); 
        await month.save(); 

        res.json(expensesData); 
    } catch (error) {
        console.log("Error adding expense:", error);
        res.status(500).json({ error: 'Failed to add expense' });
    }
}