const mongoose = require("mongoose");
const Schema = require("mongoose").Schema;

const expenseScema = new Schema(
    {
        category: {
            type: String,
            required: true
        },
        amount: {
            type: Number,
            required: true
        }
    }, {
        timestamps: true,
        toJSON: {
            virtuals: true
        }
    } 
)

const incomeScema = new Schema(
    {
        category: {
            type: String,
            required: true
        },
        amount: {
            type: Number,
            required: true
        }
    }, {
        timestamps: true,
        toJSON: {
            virtuals: true
        }
    } 
)

const monthSchema = new Schema(
    {
        month: {
            type: String,
            required: true,
        },
        year: {
            type: String,
            required: true,
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
          },
        expenses: [expenseScema],
        income: [incomeScema]
    }, 
    {
        timestamps: true,
        toJSON: {
            virtuals: true
        }

    }
)

monthSchema.virtual('totalExpenses').get(function(){
    if (this.expenses.length === 0){
        return 0;
    } else {
        const sumExpenses = this.expenses.reduce((sum, expenses) => sum + expenses.amount, 0);
        return sumExpenses
    }
})

monthSchema.virtual('categoryExpenseSum').get(function() {
    const categorySum = {};
    this.expenses.forEach(expense => {
        if (categorySum[expense.category]) {
            categorySum[expense.category] += expense.amount;
        } else {
            categorySum[expense.category] = expense.amount;
        }
    });
    return categorySum;
});

monthSchema.virtual('categoryExpensesPercentages').get(function() {
    const totalExpenses = this.totalExpenses;
    const categoryExpensesSum = this.categoryExpensesSum;

    const percentages = {};
    for (let category in categoryExpensesSum) {
        percentages[category] = (categoryExpensesSum[category] / totalExpenses) * 100;
    }

    return percentages;
});

monthSchema.virtual('totalIncome').get(function(){
    if (this.income.length === 0){
        return 0;
    } else {
        const sumIncome = this.income.reduce((sum, income) => sum + income.amount, 0);
        return sumIncome
    }
})

monthSchema.virtual('categoryIncomeSum').get(function() {
    const categorySum = {};
    this.income.forEach(income => {
        if (categorySum[income.category]) {
            categorySum[income.category] += income.amount;
        } else {
            categorySum[income.category] = income.amount;
        }
    });
    return categorySum;
});

monthSchema.virtual('categoryIncomePercentages').get(function() {
    const totalIncome = this.totalIncome;
    const categoryIncomeSum = this.categoryIncomeSum;

    const percentages = {};
    for (let category in categoryIncomeSum) {
        percentages[category] = (categoryIncomeSum[category] / totalIncome) * 100;
    }

    return percentages;
});

monthSchema.virtual('budgetStatus').get(function() {
    const totalExpenses = this.totalExpenses;
    const totalIncome = this.totalIncome;
    const amount = totalIncome - totalExpenses;

    if (amount > 0) {
        return `Your budget surplus is $${amount}`;
    } 
    else if (amount < 0) {
        return `Your budget shortfall is $${amount}`;
    } 
    else {
        return "No surplus/shortfall";
    }
});

module.exports = mongoose.model("Month", monthSchema);