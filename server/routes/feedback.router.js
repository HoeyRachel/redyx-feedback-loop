const express = require ( 'express');
const router = express.Router();
const pool = require( '../modules/pool');

//GET all entries from the feedback database
router.get('/', (req, res) => {
    //find all and return them
    pool.query('SELECT * FROM "feedback";'). then ((result) => {
        res.send(result.rows);
    }).catch( (error) => { 
        console.log('Error GET /', error);
        res.sendStatus (500);
    });
})

router.post('/feedback', (req, res) => {
    console.log( 'POST route hit');
    let queryString = 'INSERT INTO "feedback" ( feeling, understanding, support, comments ) VALUES ( $1, $2, $3, $4 )';
    let values = [ req.body.feeling, req.body.understanding, req.body.support, req.body.comments ];
    pool.query( queryString, values ).then( (results)=>{
        res.sendStatus( 201 )
    }).catch( (err)=>{
        console.log( err );
        res.sendStatus( 500 );
    })
}); // END POST Route

module.exports = router;