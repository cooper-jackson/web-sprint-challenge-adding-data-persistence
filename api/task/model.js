// build your `Task` model here
const db = require('../../data/dbConfig')

async function getAll() {
    const tasks = await db('tasks').leftJoin('projects', 'projects.project_id', 'tasks.project_id')
    
    tasks.forEach(element => {
        element.task_completed = element.task_completed ? true : false // sets any 0s and 1s to false or true
    });

    return tasks
}

async function add(task) { // Adds the new task to the tasks table and returns the task object
    const newTask = await db('tasks').insert(task)
    .then(result => db('tasks').where('task_id', result).first())

    newTask.task_completed = newTask.task_completed ? true : false // sets any 0s and 1s to false or true

    return newTask
}

module.exports = { getAll, add }