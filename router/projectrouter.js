const express = require('express')
const projects = require('./project-model') //CHANGE321
const router = express.Router()

router.get('/', (req, res) => {
  projects.getAllProjects()
  .then(response => {
    res.status(200).json(response)
  })
  .catch(error => {
    res.status(500).json({error: error.message})
  })
})

router.get('/tasks', (req, res) => {
  projects.getAllTasks()
  .then(response => {
    res.status(200).json({response})
  })
  .catch(error => {
    res.status(500).json({error: error.message})
  })
})

router.get('/:id/tasks', (req, res) => {
  projects.projectTasks(req.params.id)
  .then(response => {
    res.status(200).json(response)
  })
  .catch(error => {
    res.status(500).json({error: error.message})
  })
})

router.get('/:id/resources', (req, res) => {
  projects.projectResoures(req.params.id)
  .then(response => {
    res.status(200).json(response)
  })
  .catch(error => {
    res.status(500).json({error: error.message})
  })
})

router.post('/', (req, res) => {
  projects.addProject(req.body)
  .then(response => {
    res.status(201).json(response)
  })
  .catch(error => {
    res.status(500).json({error: error.message})
  })
})

router.post('/:id/tasks', (req, res) => {
  const newTask = {
    desc: req.body.desc,
    notes:req.body.note,
    project_id: req.params.id
  }
  projects.addTask(newTask)
  .then(response => {
    res.status(201).json(response)
  })
  .catch(error => {
    res.status(500).json({error: error.message})
  })
})

router.post('/:id/resources', (req, res) => {
  const newResource = {
    name: req.body.name,
    desc:req.body.desc,
  }
  projects.newResource(newResource)
  .then(response => {
    res.status(201).json(response)
  })
  .catch(error => {
    res.status(500).json({error: error.message})
  })
})

// router.put('/:id', (req, res) => {
//   res.status(200).json({msg: 'working'})
// })

// router.delete('/:id', (req, res) => {
//   res.status(200).json({msg: 'working'})
// })

module.exports = router;