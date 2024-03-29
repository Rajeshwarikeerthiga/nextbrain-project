var list2 = require("../model/JobView");

exports.getViewJob = async (req, res) => {
   const jobView = await list2.find({job_id:req.params.id});
   try {
       res.status(200).json(jobView);
   } catch (err) {
       res.status(500).send(err);
   }
}
 