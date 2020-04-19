const mongoose = require('./connection')
const Model = require('../models/presentation')

Model.Presentation.deleteMany().then(()=> Model.Presentation.create({"name": "Project 3 Presentation", "sections": [
    {
        "title": "Project Description",
        "time": 5,
        "talking_points": [
            {"point": "Inspiration"},
            {"point": "Project WS"}
        ]
    },
    {
        "title": "How A User Creates New Presentation",
        "time": 5,
        "talking_points": [
            {"point": "Home Page Functionality"},
            {"point": "Create New Form Functionality"},
            {"point": "Mock up a fake presentation"}
        ]
    },
    {
        "title": "Presentation Page and Timer",
        "time": 5,
        "talking_points": [
            {"point": "Edit and Delete functionality"},
            {"point": "Start Timer"},
            {"point": "How presenter can use timer and slides"}
        ]
    },
    {
        "title": "Backend Description",
        "time": 5,
        "talking_points": [
            {"point": "Models"},
            {"point": "Routes"},
            {"point": "Controllers"}
        ]
    },
    {
        "title": "Frontend Description",
        "time": 5,
        "talking_points": [
            {"point": "Architecture"},
            {"point": "cool functions!"},
        ]
    },
    {
        "title": "Wrap up",
        "time": 5,
        "talking_points": [
            {"point": "Git flow"},
            {"point": "time matrix"},
            {"point": "Overall feelings of project"},
        ]
    }

]}).then(json => {console.log(json), process.exit()}))
