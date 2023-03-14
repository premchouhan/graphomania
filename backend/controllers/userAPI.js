// IMPORT EXPRESS SERVER
const express = require('express');

//IMPORT EMPLOYEE MODEL AND BIND IT 
const EmpModel = require('../models/empinfo');
//IMPORT Feedback MODEL AND BIND IT
const feedbackDetails = require('../models/reportinfo');

const blogmodel = require('../models/blog');

// USE Router FOR EXPRESS SERVER
const router = express.Router();

// INSERT feedbackRECORD
router.post('/contactus', (req, res) => {
    //Create Object of feedback Model Class
    // And Receive value from request body and Store value within the Object
    const userobj = new feedbackDetails({
        username: req.body.username,
        useremail: req.body.useremail,
        usermessage: req.body.usermessage,
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






// INSERT RECORD/Document
router.post('/userreg', (req, res) => {
    //Create Object of Employee Model Class
    // And Receive value from request body and Store value within the Object
    const empobj = new EmpModel({
        empname: req.body.empname,
        empemail: req.body.empemail,
        empmobile: req.body.empmobile,
        empdob: req.body.empdob,
        emppass: req.body.emppass,
        empgender: req.body.empgender,
        empcountry: req.body.empcountry,
        empaddress: req.body.empaddress,
    });//CLOSE EmpModel

    //INSERT/SAVE THE RECORD/DOCUMENT
    empobj.save()
        .then(inserteddocument => {
            res.send('DOCUMENT INSERED IN MONGODB DATABASE' + '<br\>' + inserteddocument);

        })//CLOSE THEN
        .catch(err => {
            res.send('Error in DB connection : ' + JSON.stringify(err, undefined, 2));
            process.exit();
        });
    res.send('<h3>INSIDE POST METHOD..THIS IS INSERT API..</h3>');
});

router.post('/userlogin', (req, res) => {
    //console.log(req.body.loginemail)
    //console.log(req.body.emppass)
    EmpModel.find({ "empemail": req.body.loginemail, "emppass": req.body.loginpass })
        .then(getsearchdocument => {
            //console.log(getsearchdocument)
            if (getsearchdocument.length > 0) {
                res.status(200).send(getsearchdocument)
            }
            else {
                res.status(404).send({ message: "NOT MATCHED" })
            }
        }) // CLOSE THEN
        .catch(err => {
            return res.send({ message: "DB Problem..Error in Retriving with id " + req.params.empid });
        })//CLOSE CATCH
}//CLOSE CALLBACK FUNCTION BODY
)//CLOSE POST METHOD 

// UPDATE RECORD/Document
router.put('/update', (req, res) => {
    res.send('<h2>INSIDE PUT METHOD..THIS IS UPDATE API..</h2>');
});


//SHOULD BE EXPORTED
module.exports = router;