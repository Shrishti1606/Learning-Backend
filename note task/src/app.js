const express = require("express")

const app = express(); // server ka instance create kr rhe h

app.use(express.json())

const notes = []

// post notes: front -> back/server : create new notes/data at the server
app.post("/notes", (req, res) => {
    notes.push(req.body)   // <-- storing data
    console.log(req.body)

    res.status(201).json({
        message: "note created successfully"
    })
})

// get notes: back/server -> front : fetch the notes /data from the server to the frontened
app.get("/notes", (req, res) => {

    res.status(200).json({
        message: "note fetched successfully",
        notes: notes
    })
})

app.delete("/notes/:index", (req, res) => {
    
    const index = req.params.index

    delete notes[index]

    res.status(201).json({
        message: "note deleted successfully"
    })
})

app.patch("/notes/:index", (req, res) => {
    const index = req.params.index

    if (!notes[index]) {
        return res.status(404).json({
            message: "Note not found"
        })
    }

    const description = req.body.description
    const title = req.body.title

    notes[index].description = description
    notes[index].title = title

    res.status(200).json({
        message: "note updated successfully"
    })
})


module.exports = app