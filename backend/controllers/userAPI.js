// IMPORT EXPRESS SERVER
const express = require('express');

//IMPORT EMPLOYEE MODEL AND BIND IT 
const EmpModel = require('../models/empinfo');
//IMPORT Feedback MODEL AND BIND IT
const feedbackDetails = require('../models/reportinfo');

const mailservice = require('../services/mailService.js');

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
            mailservice.sendmail(req.body.empemail, 'REGISTRATION SUCCESSFUL', 'THANK YOU FOR REGISTRATION');
            res.send(inserteddocument)
        })//CLOSE THEN
        .catch(err => {
            res.send(JSON.stringify(err, undefined, 2));
            process.exit();
        });
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

        str1 = 'Wellcome to Graphomania ' + req.body.empname + '\n Your userid & password is given below.' +
        '\n userId -' + req.body.empemail + '\n pass - ' + req.body.emppass

    //INSERT/SAVE THE RECORD/DOCUMENT
    empobj.save()
        .then(inserteddocument => {
            mailservice.sendmail(req.body.empemail, 'WELCOME TO GRAPHOMANIA', str1);

            res.send('DOCUMENT INSERED IN MONGODB DATABASE' + '<br/>' + inserteddocument);
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
// router.put('/update', (req, res) => {
//     res.send('<h2>INSIDE PUT METHOD..THIS IS UPDATE API..</h2>');
// });



//UPDATE DOCUMENT IN MONGODB USING EMAILID
router.put('/profileupdate', (req, res) => {
    EmpModel.findOneAndUpdate({ "empemail": req.body.empemail },
        {
            $set: {
                "empmobile": req.body.empmobile,
                "emppass": req.body.emppass,
                "empaddress": req.body.empaddress
            }
        }, { new: true })
        .then(getupdateddocument => {
            if (getupdateddocument != null)
                res.status(200).send(getupdateddocument);
            else
                res.status(404).send('INVALID EMAILID ' + req.body.empemail);
        }) // CLOSE THEN
        .catch(err => {
            return res.status(500).send({ message: "DB Problem..Error in UPDATE with id " + req.params.empid });
        }) // CLOSE CATCH
} //CLOSE CALLBACK FUNCTION
); //CLOSE PUT METHOD

//SHOULD BE EXPORTED
module.exports = router;