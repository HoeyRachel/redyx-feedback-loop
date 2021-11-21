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

// // POST a new order
// router.post('/', async (req, res) => {
//     const client = await pool.connect();

//     try {
//         const {
//             feeling,
//             understanding,
//             support,
//             comments,
//             flagged,
//             date
//         } = req.body;
//         await client.query('BEGIN')
//         const orderInsertResults = await client.query(`INSERT INTO "feedback" ("feeling", "understanding", "support", "comments", "flagged", "date")
//         VALUES ($1, $2, $3, $4, $5, $6)
//         RETURNING id;`, [feeling, understanding, support, comments, flagged, date]);
//         const feedbackId = feedbackInsertResults.rows[0].id;

//         await Promise.all(pizzas.map(pizza => {
//             const insertLineItemText = `INSERT INTO "line_item" ("order_id", "pizza_id", "quantity") VALUES ($1, $2, $3)`;
//             const insertLineItemValues = [orderId, pizza.id, pizza.quantity];
//             return client.query(insertLineItemText, insertLineItemValues);
//         }
//         ));

//         await client.query('COMMIT')
//         res.sendStatus(201);
//     } catch (error) {
//         await client.query('ROLLBACK')
//         console.log('Error POST /api/feelings', error);
//         res.sendStatus(500);
//     } finally {
//         client.release()
//     }
// });

module.exports = router;