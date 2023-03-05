// IMPORT EXPRESS SERVER
const express = require('express');

//IMPORT EMPLOYEE MODEL AND BIND IT
const EmpModel = require('../models/empinfo');

// USE Router FOR EXPRESS SERVER
const router = express.Router();

router.get('/viewalluser', (req, res) => {
    EmpModel.find({})
        .then(getsearchdocument => {
            //console.log(getsearchdocument)
            res.status(200).send(getsearchdocument)
        } //CLOSE THEN FUNCTION BODY
        ) // CLOSE THEN
        .catch(err => {
            return res.send({ message: "DB Problem..Error in Retriving with id " + req.params.empid });
        })//CLOSE CATCH
}//CLOSE CALLBACK FUNCTION BODY
);//CLOSE GET METHOD

router.get('/searchuser/:eid', (req, res) => {
    EmpModel.find({ "empemail": req.params.eid })
        .then(getsearchdocument => {
            if (getsearchdocument.length > 0) {
                res.status(200).send(getsearchdocument);
            }
            else {
                res.status(404).send({ message: "Note not found with id " + req.params.empid });
            }
        }) //CLOSE THEN
        .catch(err => {
            res.status(500).send({ message: "DB Problem..Error in Retriving with id " + req.params.empid });
        })//CLOSE CATCH
}//CLOSE CALLBACK FUNCTION BODY
);//CLOSE GET METHOD




// DELETE RECORD/Document
router.delete('/deluser', (req, res) => {
    res.send('<h3>INSIDE DELETE METHOD..THIS IS DELETE API..</h3>');
});


//SHOULD BE EXPORTED
module.exports = router;