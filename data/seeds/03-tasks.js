
exports.seed = function(knex) {
  // Deletes ALL existing entries
  // return knex('tasks').del()
  //   .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {
          task_description: 'put fingers on keyboard', 
          task_notes: 'stop eating cereal and lets get a move on', 
          task_completed: true, 
          project_id: 1
        },
        {
          task_description: 'scrub counter', 
          task_notes: 'use clorox wipes, water, and paper towels', 
          task_completed: false, 
          project_id: 2
        },
        {
          task_description: 'think of clever seed data', 
          task_notes: 'see task description', 
          task_completed: true, 
          project_id: 3
        }
      ]);
    // });
};
