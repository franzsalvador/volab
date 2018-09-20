require('dotenv/config')
const { Router } = require('express')
const sgMail = require('@sendgrid/mail')

module.exports = function emailRouter() {

  const router = new Router()

  router.post('/', (req, res, next) => {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    const msg = req.body
    sgMail.send(msg)
      .then(msg => res.json(msg))
      .catch(err => next(err))
  })
  return router
}
