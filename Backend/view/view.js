var express= require("express");
var router= express.Router();
var cont1= require("../controller/JobController");
var cont2=require("../controller/JobView");

router.get("/joblist",cont1.getAllJobs);
router.get("/joblist/:id",cont2.getViewJob);

module.exports=router;