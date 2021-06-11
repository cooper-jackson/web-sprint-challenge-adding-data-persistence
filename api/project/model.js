// build your `Project` model here
const db = require('../../data/dbConfig')

async function getAll() {
    
    const projects = await db('projects')

    projects.forEach(element => {
        element.project_completed = element.project_completed ? true : false
    });

    return projects
}

async function add(project) {
    const newProject = await db('projects').insert(project)
    .then(result => db('projects').where('project_id', result).first())

    newProject.project_completed = newProject.project_completed ? true : false

    return newProject
}

module.exports = { getAll, add }