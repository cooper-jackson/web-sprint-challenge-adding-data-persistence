// build your `/api/projects` router here
const express = require('express')
const helpers = require('./model')
const router = express.Router()

router.get('/', (req, res, next) => {
    helpers.getAll()
    .then(projects => {
        res.status(200).json(projects)
    })
    .catch(next)
})

router.post('/', (req, res, next) => {
    const { project_name } = req.body
    
    if(!project_name) {
        next({status: 400, message: 'missing necessary information'})
    } else {
        helpers.add(req.body)
        .then(project => {
            res.status(200).json(project)
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