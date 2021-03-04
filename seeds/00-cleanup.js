
exports.seed = function (knex) {
   knex('project_resource').truncate()
   knex('resources').truncate()
   knex('tasks').truncate()
   knex('projects').truncate()
}
