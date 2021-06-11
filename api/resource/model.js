// build your `Resource` model here

const db = require('../../data/dbConfig')

function getAll() {
    return db('resources')
}

async function add(resource) {
    const newResource = await db('resources').insert(resource)
    .then(result => db('resources').where('resource_id', result).first() )

    return newResource
}

module.exports = { getAll, add }