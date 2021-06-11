// build your `Project` model here
const db = require('../../data/dbConfig')

async function getAll() { // Pulls the projects table
    
    const projects = await db('projects')

    projects.forEach(element => {
        element.project_completed = element.project_completed ? true : false // sets any 0s and 1s to false or true
    });

    return projects
}

async function add(project) { // Adds the new project to the projects table and returns the project object
    const newProject = await db('projects').insert(project)
    .then(result => db('projects').where('project_id', result).first())

    newProject.project_completed = newProject.project_completed ? true : false // sets any 0s and 1s to false or true

    return newProject
}

module.exports = { getAll, add }