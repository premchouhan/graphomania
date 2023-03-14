const express = require('express');



const blogmodel = require('../models/blog');

// USE Router FOR EXPRESS SERVER
const router = express.Router();


router.post('/write', (req, res) => {
    //Create Object of feedback Model Class
    // And Receive value from request body and Store value within the Object
    const userobj = new blogmodel({
        cat: req.body.cat,
        title: req.body.title,
        blog: req.body.blog,
        email: req.body.email,
        name: req.body.name
    });//CLOSE EmpDetails

    //INSERT/SAVE THE RECORD/DOCUMENT
    userobj.save()
        .then(inserteddocument => {
            res.send('DOCUMENT INSERED IN MONGODB DATABASE' + '<br\>' + inserteddocument);

        })//CLOSE THEN
        .catch(err => {
            res.send('Error in DB connection : ' + JSON.stringify(err, undefined, 2));
            process.exit();
        });

    res.send('<h3>INSIDE POST METHOD..THIS IS INSERT API..</h3>');
});
