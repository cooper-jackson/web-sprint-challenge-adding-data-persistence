const db = require('../../data/dbConfig')

const validateProjectId = (req, res, next) => {
    
    try {
        const projectId = db('project').where('project_id', req.body.project_id)

        if(projectId) {
            next()
        } else {
            next({status: 404, message: 'a project with that id does not exist'})
        }
    } catch (err) {
        next(err)
    }
}

module.exports = { validateProjectId }