
exports.seed = function(knex) {
  return knex('project_resource').insert([
    {project_id: 1, resource_id: 1}
  ])
};
