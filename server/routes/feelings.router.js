const express = require ( 'express');
const router = express.Router();
const pool = require( '../modules/pool');

//GET all entries from the feedback database
router.get('/', (req, res) => {
    //find all and return them
    pool.query('SELECT * FROM "feedback";'). then ((result) => {
        res.send(result.rows);
    }).catch( (error) => { 
        console.log('Error GET /api/feelings', error);
        res.sendStatus (500);
    });
})

module.exports = router;