const { Router } = require('express')
const uuid = require('uuid/v4')

module.exports = function producersRouter(artists) {

  const router = new Router()

  router.get('/', async (req, res, next) => {
    try {
      let found = await
      artists
        .find()
        .toArray()
      res.json(found)
    }
    catch (err) {
      next(err)
    }
  })

  router.get('/displayName/:displayName', async (req, res, next) => {
    const displayName = req.params.displayName
    try {
      let found = await
      artists
        .findOne({ displayName: displayName })
      res.json(found)
    }
    catch (err) {
      next(err)
    }
  })

  router.get('/:artistType', async (req, res, next) => {
    const artistType = req.params.artistType
    try {
      let found = await
      artists
        .find({ artistType: artistType })
        .toArray()
      res.json(found)
    }
    catch (err) {
      next(err)
    }
  })

  router.get('/following/:displayName', async (req, res, next) => {
    const displayName = req.params.displayName
    try {
      let found = await
      artists
        .find({ followers: displayName })
        .toArray()
      res.json(found)
    }
    catch (err) {
      next(err)
    }
  })

  router.get('/followers/:displayName', async (req, res, next) => {
    const displayName = req.params.displayName
    try {
      let found = await
      artists
        .find({ following: displayName })
        .toArray()
      res.json(found)
    }
    catch (err) {
      next(err)
    }
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

  router.put('/:displayName', (req, res, next) => {
    const displayName = req.params.displayName
    artists
      .findOneAndUpdate(
        { displayName: displayName },
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

  router.put('/follow/:displayName', (req, res, next) => {
    const displayName = req.params.displayName
    artists
      .findOneAndUpdate(
        { displayName: displayName },
        { $push: req.body },
        { returnOriginal: false }
      )
      .then(({ value }) => {
        value
          ? res.json(value)
          : res.sendStatus(404)
      })
      .catch(err => next(err))
  })

  router.put('/unfollow/:displayName', (req, res, next) => {
    const displayName = req.params.displayName
    artists
      .findOneAndUpdate(
        { displayName: displayName },
        { $pull: req.body },
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
