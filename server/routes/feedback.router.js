const express = require ( 'express');
const router = express.Router();
const pool = require( '../modules/pool');


router.post('/', (req, res) => {
    console.log('in feedback post route with:', req.body);
    let queryString = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                       VALUES ( $1, $2, $3, $4 )`;
    let values = [ req.body.Feelings, req.body.Understanding, req.body.Support, req.body.Comments ]
    pool.query( queryString, values ).then( (response) => {
        res.sendStatus(201);
    }).catch( ( err )=>{
        console.log( err );
        res.sendStatus( 500 );
    });
})

module.exports = router;