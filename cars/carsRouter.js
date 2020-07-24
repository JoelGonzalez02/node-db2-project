const express = require('express');
const db = require('../data/db-config');
const router = express.Router();

router.post('/', (req, res) => {
    const carInfo = req.body;

    db('cars')
        .insert(carInfo)
        .then(id => res.status(201).json({data: id[0]}))
        .catch(err => res.status(500).json({errorMessage: 'There was a problem adding the car'}))
})

router.get('/', (req, res) => {
    db('cars')
        .then(car => res.status(200).json({data: car}))
        .catch(err => res.status(500).json({errorMessage: 'There are no cars to display'}))
})

router.get('/:id', (req, res) => {
    const { id } = req.params;

    db('cars')
        .where('id', id)
        .then(car => res.status(200).json({data: car }))
        .catch(err => res.status(404).json({errorMessage: 'The car with the specified ID does not exist'}, err))
})

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const updated = req.body;

    db('cars')
        .where('id', id)
        .update(updated)
        .then(count => {
            if (count > 0) {
                res.status(200).json({data: count})
            } else {
                res.status(404).json({errorMessage: 'The car with the specified ID does not exist'})
            }
        })
        .catch(err => res.status(500).json({errorMessage: 'There was an error while updating your car'}, err))
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
     
    const deletedCar = await db('cars').where('id', id).del()

    deletedCar ? res.status(200).json(deletedCar)
    : res.status(404).json({errorMessage: 'The car with the specified ID does not exist'})
})

module.exports = router;