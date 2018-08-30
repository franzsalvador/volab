require('dotenv/config')
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const { MongoClient } = require('mongodb')
const producersRouter = require('./routes/producers-router')
const vocalistsRouter = require('./routes/vocalists-router')

MongoClient
  .connect('mongodb://localhost:27017', { useNewUrlParser: true })
  .then(client => {
    const db = client.db('volab-app')
    const producers = db.collection('producers')
    const vocalists = db.collection('vocalists')
    const producer = {
      displayName: 'Franz',
      firstName: 'Franz',
      lastName: 'Salvador',
      city: 'Irvine',
      country: 'US',
      email: 'fsalvador79@gmail.com',
      genres: 'hip-hop',
      bio: "Let's make music"
    }
    return producers
      .insertOne(producer)
      .then(() => client.close())
  })
  .catch(err => {
    console.error(err)
    process.exit(1)
  })
