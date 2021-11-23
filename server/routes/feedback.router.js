const express = require ( 'express');
const router = express.Router();
const pool = require( '../modules/pool');

router.get('/', (req, res) => {
    console.log('in GET');
    let queryString = `SELECT * FROM feedback ORDER BY id DESC`;
    pool.query(queryString).then((results) => {
        res.send(results.rows);
    }).catch((err) => {
        alert('GET ERROR');
        res.sendStatus(err);
    })
})


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