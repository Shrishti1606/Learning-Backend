const express = require('express');
const noteModel = require('./models/note.model');

const app = express();
app.use(express.json());

app.post("/notes", async (req, res) => {

    const data = req.body
    await noteModel.create({
        title: data.title,
        description: data.description,
    })

    res.status(201).json({
            message: "note created"
    })

})

app.get("/notes", async (req, res) => {

    const notes = await noteModel.find() 
    /* 
        findOne({
            title: "text_title_1"
        }) 
    */

    res.status(200).json({
        message: "notes fetched",
        notes: notes
    })
})

app.delete("/notes/:id", async (req, res) => {

    const id = req.params.id;

    await noteModel.findOneAndDelete({
        _id: id
    })

    res.status(201).json({
        message: "note deleted"
    })

})

app.patch("/notes/:id", async (req, res) => {
    const id = req.params.id;
    const description = req.body.description;
    const title = req.body.title;

    await noteModel.findOneAndUpdate({
        _id: id
    }, {
        title: title,
        description: description,
    })

    res.status(200).json({
        message: "note updated"
    })
})

module.exports = app;