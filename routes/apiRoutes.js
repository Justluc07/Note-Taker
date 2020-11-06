const router = require("express").Router()
const { json } = require("express")
const store = require("../db/store.js")


router.get("/notes", (req, res) => {
     store.getNotes()
     .then((notes)=>res.json(notes))
     .catch((err)=>res.status(500).json(err))
    // this is the GET route where your will you 
    // will utilize the getNMotes() function
})

router.post("/notes/:id", (req, res) => {
    store.addNote(req.body)
    .then((note)=> res.json(note))
    .catch((err)=>res.status(500).json(err))
    // this is the POST route where your will you 
    // will utilize the addNotes() function
})

router.delete("/notes/:id", (req, res) => {
    store.removeNote(req.params.id)
    .then(()=>res.json({ok:true}))
    .catch((err)=>res.status(500).json(err))
    // this is the delete route where you will
    // utilize the removeNote() function
})

module.exports = router 