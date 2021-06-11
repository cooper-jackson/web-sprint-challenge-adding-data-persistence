// build your `/api/tasks` router here
const express = require('express')
const helpers = require('./model')
const router = express.Router()
const md = require('./middleware')

router.get('/', (req, res, next) => {
    helpers.getAll()
    .then(tasks => {
        res.status(200).json(tasks)
    })
    .catch(next)
})

router.post('/', md.validateProjectId, (req, res, next) => {
    helpers.add(req.body)
    .then(task => {
        res.status(200).json(task)
    })
    .catch(next)
})

router.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  })
})


module.exports = router