const { Router } = require('express')
const uuid = require('uuid/v4')

module.exports = function producersRouter(artists) {

  const router = new Router()

  router.get('/', async (req, res, next) => {
    try {
      let allArtists = await
      artists
        .find()
        .toArray()
      res.json(allArtists)
    }
    catch (err) {
      next(err)
    }
  })

  router.get('/displayName/:displayName', async (req, res, next) => {
    const displayName = req.params.displayName
    try {
      let artist = await
      artists
        .findOne({ displayName: displayName })
      res.json(artist)
    }
    catch (err) {
      next(err)
    }
  })

  router.get('/:artistType', async (req, res, next) => {
    const artistType = req.params.artistType
    try {
      let artistsFound = await
      artists
        .find({ artistType: artistType })
        .toArray()
      res.json(artistsFound)
    }
    catch (err) {
      next(err)
    }
  })

  router.get('/following/:displayName', async (req, res, next) => {
    const displayName = req.params.displayName
    try {
      let followers = await
      artists
        .find({ followers: displayName })
        .toArray()
      res.json(followers)
    }
    catch (err) {
      next(err)
    }
  })

  router.get('/followers/:displayName', async (req, res, next) => {
    const displayName = req.params.displayName
    try {
      let following = await
      artists
        .find({ following: displayName })
        .toArray()
      res.json(following)
    }
    catch (err) {
      next(err)
    }
  })

  router.post('/', async (req, res, next) => {
    const userProfile = Object.assign(req.body, { id: uuid() })
    try {
      let newArtist = await
      artists
        .insertOne(userProfile)
      res.status(201).json(newArtist.ops[0])
    }
    catch (err) {
      next(err)
    }
  })

  router.put('/:displayName', async (req, res, next) => {
    const displayName = req.params.displayName
    try {
      let updateProfile = await
      artists
        .findOneAndUpdate(
          { displayName: displayName },
          { $set: req.body },
          { returnOriginal: false }
        )
      updateProfile
        ? res.json(updateProfile.value)
        : res.sendStatus(404)
    }
    catch (err) {
      next(err)
    }
  })

  router.put('/follow/:displayName', async (req, res, next) => {
    const displayName = req.params.displayName
    try {
      let addfollower = await
      artists
        .findOneAndUpdate(
          { displayName: displayName },
          { $push: req.body },
          { returnOriginal: false }
        )
      addfollower
        ? res.json(addfollower.value)
        : res.sendStatus(404)
    }
    catch (err) {
      next(err)
    }
  })

  router.put('/unfollow/:displayName', async (req, res, next) => {
    const displayName = req.params.displayName
    try {
      let removefollower = await
      artists
        .findOneAndUpdate(
          { displayName: displayName },
          { $pull: req.body },
          { returnOriginal: false }
        )
      removefollower
        ? res.json(removefollower.value)
        : res.sendStatus(404)
    }
    catch (err) {
      next(err)
    }
  })

  router.delete('/:id', async (req, res, next) => {
    const id = req.params.id
    try {
      let deleteUser = await
      artists
        .findOneAndDelete({ id: id })
      deleteUser
        ? res.sendStatus(204)
        : res.sendStatus(404)
    }
    catch (err) {
      next(err)
    }
  })

  return router
}
