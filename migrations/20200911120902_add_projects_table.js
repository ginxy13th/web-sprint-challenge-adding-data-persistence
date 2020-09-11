exports.up = function (knex) {
    return knex.schema.createTable('projects', table => {
      table.increments('id')
      table.text('name').notNull()
      table.text('desc')
      table.bool('completed').default(false)
    })
  }
  
  exports.down = function (knex) {
   return  knex.schema.dropTableIfExists('projects')
  }
