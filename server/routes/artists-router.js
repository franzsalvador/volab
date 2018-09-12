const { Router } = require('express')
const uuid = require('uuid/v4')

module.exports = function producersRouter(artists) {

  const router = new Router()

  router.get('/:artistType', (req, res, next) => {
    const artistType = req.params.artistType
    artists
      .find({ artistType: artistType })
      .toArray()
      .then(found => res.json(found))
      .catch(err => next(err))
  })

  router.post('/', (req, res, next) => {
    const userProfile = Object.assign(req.body, { id: uuid() })
    artists
      .insertOne(userProfile)
      .then(({ ops: [ created ] }) => {
        res.status(201).json(created)
      })
      .catch(err => next(err))
  })

  router.put('/:id', (req, res, next) => {
    const id = req.params.id
    artists
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
    artists
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