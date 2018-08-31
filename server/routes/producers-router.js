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

  router.post('/', (req, res, next) => {
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
