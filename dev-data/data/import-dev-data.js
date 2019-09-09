const fs = require('fs');
const mongoose = require('mongoose');
const { Tour } = require('../../models/Tour');
require('dotenv').config();

const db = process.env.DATABASE;

mongoose.connect(db, {useCreateIndex: true, useNewUrlParser: true})
        .then(() => console.log("Connected to database successfully..."))
        .catch(err => console.log("Connection Failed..."));

//READING JSON var fs = require('fs');
const tours = JSON.parse(fs.readFileSync(`${__dirname}/tours-simple.json`, 'utf-8'));

// IMPORT DATA INTO DATABASE

const importData = async () => {
    try {
        await Tour.create(tours);
        console.log("Data Successfully added!");
    } catch (error) {
        console.log(error)
    }

    process.exit();
};

//DELETE DATA FROM DATABASE
const deleteData = async () => {
    try {
        await Tour.deleteMany();
        console.log("Data deleted successfully");
    } catch (error) {
        console.log(error);  
    }

    process.exit();
}

if(process.argv[2] === '--import'){
    importData();
} else if(process.argv[2] === '--delete'){
    deleteData();
}
