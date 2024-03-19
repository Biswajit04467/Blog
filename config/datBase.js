const mongoose = require('mongoose');
require("dotenv").config();

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL)
        .then(() => {
            console.log("DB connected successfully !");
        }).catch((err) => {
            console.log("error connecting db-->" + err);
        })
}

module.exports = dbConnect;