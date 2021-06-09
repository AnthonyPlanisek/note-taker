const noteData = require("../db/db.json")
const id = require("unique-identity")

module.exports = (app) => {
    app.get("/api/notes", (req, res) => res.json(noteData))

    app.post("/api/notes", (req, res) => {
        noteData.push(req.body)
        console.log(noteData)
        res.json(true)
    })
}