
exports.seed = function(knex) {
  return knex('projects').insert([
    {name: 'Project 1', desc: '', completed: false}
  ])
};
