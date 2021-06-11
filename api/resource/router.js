// build your `/api/resources` router here
const express = require('express')
const helpers = require('./model')
const router = express.Router()
const md = require('./middleware')

router.get('/', (req, res, next) => {
    helpers.getAll()
    .then(resources => {
        res.status(200).json(resources)
    })
})

router.post('/', md.validateBody, (req, res, next) => {
    const { resource_name } = req.body
    
    if(!resource_name) {
        next({status: 400, message: 'missing necessary information'})
    } else {
        helpers.add(req.body)
        .then(resource => {
            res.status(200).json(resource)
        })
    }
})

router.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  })
})

module.exports = router