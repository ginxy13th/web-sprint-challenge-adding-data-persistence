const db = require('../data/db-config')

function getAllProjects() {
  return db('projects') //CHANGE321
}

function addProject(data) { //CHANGE321
  return db('projects') //CHANGE321
  .insert(data)
}

function getAllTasks() {
  return db('tasks')
  .join('projects', 'projects.id', 'tasks.project_id')
    .select('projects.name as projName', 'projects.desc as projDetail', 'tasks.desc as taskDetail')
}

function addTask(data) {
  return db('tasks') //CHANGE321
    .insert(data)
}

function projectTasks(id) {
  return db('tasks')
  .where('tasks.project_id', id)
  .join('projects', 'projects.id', 'tasks.project_id')
  .select('projects.name as project', 'tasks.desc as task')
}

function projectResoures(id) {
  return db('project_resource')
    .where('project_resource.project_id', id)
    .join('projects', 'projects.id', 'project_resource.project_id')
    .join('resources', 'resources.id', 'project_resource.resource_id')
    .select('projects.name as project', 'resources.name as resource')
}

function newResource(data, projID) {
  const newID = db('resources')
  .insert(data)
  return db('project_resource')
  .insert({ resource_id: newID, project_id: projID})
}

module.exports ={
  getAllProjects,
  getAllTasks,
  addProject,
  addTask,
  newResource,
  projectResoures,
  projectTasks
}