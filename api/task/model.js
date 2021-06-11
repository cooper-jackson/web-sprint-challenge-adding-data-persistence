// build your `Task` model here
const db = require('../../data/dbConfig')

async function getAll() {
    const tasks = await db('tasks').leftJoin('projects', 'projects.project_id', 'tasks.project_id')
    
    tasks.forEach(element => {
        element.task_completed = element.task_completed ? true : false
    });

    return tasks
}

async function add(task) {
    const newTask = await db('tasks').insert(task)
    .then(result => db('tasks').where('task_id', result).first())

    newTask.task_completed = newTask.task_completed ? true : false

    return newTask
}

module.exports = { getAll, add }