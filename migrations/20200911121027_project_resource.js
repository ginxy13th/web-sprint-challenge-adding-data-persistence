exports.up = function (knex) {
   return knex.schema.createTable('project_resource', table => {
      table
        .integer('project_id')
        .references('id')
        .inTable('projects')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
  
      table
        .integer('resource_id')
        .references('id')
        .inTable('resources')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
  
      table.primary(['project_id', 'resource_id'])
    })
  }
  
  exports.down = function (knex) {
   return knex.schema.dropTableIfExists('project_resource')
  }