const express = require('express');


const blogmodel = require('../models/blog');

// USE Router FOR EXPRESS SERVER
const router = express.Router();


router.post('/write', (req, res) => {
    //Create Object of blog Model Class
    // And Receive value from request body and Store value within the Object
    const blogobj = new blogmodel({
        category: req.body.category,
        title: req.body.title,
        name: req.body.name,
        blog: req.body.blog,
        email: req.body.email,

    });//CLOSE blogDetails

    //INSERT/SAVE THE RECORD/DOCUMENT
    blogobj.save()
        .then(inserteddocument => {
            res.send('DOCUMENT INSERED IN MONGODB DATABASE' + '<br\>' + inserteddocument);

        })//CLOSE THEN
        .catch(err => {
            res.send('Error in DB connection : ' + JSON.stringify(err, undefined, 2));
            process.exit();
        });
});


router.get('/viewpost', (req, res) => {
    blogmodel.find({})
        .then(getsearchdocument => {
            console.log(getsearchdocument)
            res.send(getsearchdocument)
        } //CLOSE THEN FUNCTION BODY
        ) // CLOSE THEN
        .catch(err => {
            return res.send({ message: "DB Problem..Error in Retriving with id " + req.params.empid });
        })//CLOSE CATCH
}//CLOSE CALLBACK FUNCTION BODY
);//CLOSE GET METHOD

// DELETE RECORD/Document
router.delete('/delpost/:eid', (req, res) => {
    blogmodel.findOneAndRemove({ "email": req.params.eid })
        .then(deleteddocument => {
            if (deleteddocument != null) {
                res.status(200).send('DOCUMENT DELETED successfully!' + deleteddocument);
            }
            else {
                res.status(404).send('INVALID EMP ID ' + req.params.eid);
            }
        }) //CLOSE THEN
        .catch(err => {
            return res.status(500).send({ message: "DB Problem..Error in Delete with id " + req.params.eid });
        })//CLOSE CATCH
}//CLOSE CALLBACK FUNCTION BODY
); //CLOSE Delete METHOD


module.exports = router;
