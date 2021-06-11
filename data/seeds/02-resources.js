
exports.seed = function(knex) {
  // Deletes ALL existing entries
  // return knex('resources').del()
  //   .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {resource_name: 'computer', resource_description: 'my windows desktop with my projects on it'},
        {resource_name: 'cleaning supplies', resource_description: 'bleach, clorox, cleaning wipes, paper towels, etc.'},
        {resource_name: 'big brain', resource_description: 'this task is going to require one huge brain, and i know a guy for the job'}
      ]);
    // });
};
