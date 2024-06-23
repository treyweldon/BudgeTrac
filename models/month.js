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

module.exports = mongoose.model("Month", monthSchema);