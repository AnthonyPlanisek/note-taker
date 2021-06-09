const path = require("path")
/*
const router = require("express").Router()
router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"))
})
module.exports = router
*/
module.exports = (app) => {
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"))
})

app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"))
})
}