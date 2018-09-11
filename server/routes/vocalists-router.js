const { Router } = require('express')
const uuid = require('uuid/v4')

module.exports = function vocalistsRouter(vocalists) {

  const router = new Router()

  router.get('/', (req, res, next) => {
    vocalists
      .find()
      .toArray()
      .then(found => res.json(found))
      .catch(err => next(err))
  })

  router.post('/', (req, res, next) => {
    const userProfile = Object.assign(req.body, { id: uuid() })
    vocalists
      .insertOne(userProfile)
      .then(({ ops: [ created ] }) => {
        res.status(201).json(created)
      })
      .catch(err => next(err))
  })

  router.put('/:id', (req, res, next) => {
    const id = req.params.id
    vocalists
      .findOneAndUpdate(
        { id: id },
        { $set: req.body },
        { returnOriginal: false }
      )
      .then(({ value }) => {
        value
          ? res.json(value)
          : res.sendStatus(404)
      })
      .catch(err => next(err))
  })

  router.delete('/:id', (req, res, next) => {
    const id = req.params.id
    vocalists
      .findOneAndDelete({ id: id })
      .then(({ value }) => {
        value
          ? res.sendStatus(204)
          : res.sendStatus(404)
      })
      .catch(err => next(err))
  })

  return router
}
