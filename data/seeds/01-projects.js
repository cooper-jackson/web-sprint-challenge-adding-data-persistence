
exports.seed = function(knex) {
  // Deletes ALL existing entries
  // return knex('projects').del()
  //   .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {project_name: 'finish homework', project_description: 'do web-sprint-challenge by 5pm', project_completed: false},
        {project_name: 'clean bathroom', project_description: 'clean the bathroom before going to bed tonight', project_completed: false},
        {project_name: 'finish web-sprint-challenge seeding', project_description: 'finish seeding database with initial data', project_completed: true},
      ]);
    // });
};
