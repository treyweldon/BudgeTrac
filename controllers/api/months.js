const Month = require("../../models/month");

module.exports = {
    allMonths,
    create,
    getMonth
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