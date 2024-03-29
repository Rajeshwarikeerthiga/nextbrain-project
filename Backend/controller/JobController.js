var list1 = require("../model/JobModel");

exports.getAllJobs = async (req, res) => {
    const job = await list1.find();
    try {
        res.status(200).json(job);
    } catch (err) {
        res.status(500).send(err);
    }
 }