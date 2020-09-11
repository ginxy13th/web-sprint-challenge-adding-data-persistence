
exports.seed = function(knex) {
  return knex('tasks').insert([
    {desc: 'task 1', notes: 'notes notes notes', completed: false, project_id: 1}
  ])
};
