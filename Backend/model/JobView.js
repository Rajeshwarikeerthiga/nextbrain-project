const mongoose = require("mongoose")
const schema = mongoose.Schema
const JobViewSchema = new schema({
    job_id: {
        type: Number,
        required: true,

    },
    name: {
        type: String,
        required: true,

    },
    department: {
        type: String,
        required: true,

    },
    location: {
        type: String,
        required: true,

    },
    year: {
        type: String,
        required: true,

    },
    vacancy: {
        type: String,
        required: true,

    },
   
})
    
module.exports = mongoose.model("jobview", JobViewSchema);