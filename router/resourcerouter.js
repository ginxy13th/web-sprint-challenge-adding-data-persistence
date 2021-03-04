const router = require('express').Router()
const resources = require('./resources-model')

router.get('/', (req, res) => {
    resources.getAllResources()
    .then(response => {
        res.status(200).json(response)
    })
    .catch(error => {
        res.status(500).json({error: error.message})
    })
})

router.get('/:id', (req, res) => {
    resources.resourceProj(req.params.id)
    .then(response => {
        res.status(200).json(response)
    })
    .catch(error => {
        res.status(500).json({error: error.message})
  })
})

router.post('/', (req, res) => {
  const postResource = {
    name: req.body.name,
    desc: req.body.desc
  }
  resources.postResource(postResource)
  .then(response => {
      res.status(201).json(response)
  })
    .catch(error => {
    res.status(500).json({error: error.message})
  })
})

module.exports = router