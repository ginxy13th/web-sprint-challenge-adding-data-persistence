exports.up = function (knex) {
  return knex.schema.createTable('resources', table => {
      table.increments('id')
      table.text('name').notNull()
      table.text('desc')
    })
  }
  
  exports.down = function (knex) {
   return knex.schema.dropTableIfExists('resources')
  }