const db = require('../../data/dbConfig')

const validateBody = async(req, res, next) => {
    const { resource_name } = req.body

    try {
        const resource = await db('resources').where('resource_name', resource_name).first()
        if(resource) {
            next({status: 400, message: 'a resource with that name already exists'})
        } else {
            next()
        }
    } catch (err) {
        next(err)
    }
}

module.exports = { validateBody }