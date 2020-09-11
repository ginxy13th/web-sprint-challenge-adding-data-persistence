
exports.seed = function(knex) {
  return knex('resources').insert([
    {name: 'Resource 1', desc: 'description'},
    {name: 'Resource 2', desc: 'blah blah blah'}
  ])
};
