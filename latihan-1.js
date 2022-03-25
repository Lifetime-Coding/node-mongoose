// getting-started.js
const mongoose = require('mongoose');
const { Schema } = mongoose

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/tutorial');
}

const db = mongoose.connection
db.on('error', () => {
    console.log("Connection Error")
})

db.once('open', () => {
    console.log("Successfully Connection")
})

const kelasSchema = new Schema({
    title: String,
    desc: String,
    postDate: {
        type: Date,
        default: Date.now
    }
})

const Kelas = mongoose.model('Kelas', kelasSchema)

// const nodejs = new Kelas({
//     title: "NodeJS",
//     desc: "Belajar Mongoose"
// })

// nodejs.save((err, success) => {
//     if(err) console.log(err)
//     console.log(success);
//     console.log("Collection berhasil dibuat")
// })

// Kelas.create({
//     title: "React",
//     desc: "Update Desc"
// }, (err, res) => {
//     if(err) console.log(err)
//     console.log(res);
//     console.log("Collection berhasil dibuat")
// })

Kelas.find((err, res) => {
    if(err) console.log(err)

    console.log(res)
})