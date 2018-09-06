const { Router } = require('express')
const uuid = require('uuid/v4')

module.exports = function producersRouter(producers) {

  const router = new Router()

  router.get('/', (req, res, next) => {
    producers
      .find()
      .toArray()
      .then(found => res.json(found))
      .catch(err => next(err))
  })

  router.put('/edit-profile/', (req, res, next) => {
    console.log(req.body)
    const id = req.get('id')
    producers
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

  router.post('/create-profile', (req, res, next) => {
    const userProfile = Object.assign(req.body, { id: uuid() })
    console.log(req.body)
    producers
      .insertOne(userProfile)
      .then(({ ops: [ created ] }) => {
        res.status(201).json(created)
      })
      .catch(err => next(err))
  })

  return router
}
