require('dotenv').config()

const express = require('express')
const mongodb = require('mongodb')

const router = express.Router()
const uri = process.env.MONGODB_URI

// Get Twoot

router.get('/', async (req, res) => {
  const twoots = await loadTwootCollection()
  res.send(await twoots.find({}).toArray())
})

/* router.get('/', (req, res) => {
  res.send('hello ian!!')
}) */

// Add Twoot

router.post('/', async (req, res) => {
  const twoots = await loadTwootCollection()
  console.log('what', twoots)
  await twoots.insertOne({
    text: req.body.text,
    createdAt: new Date(),
  })
  res.status(201).send()
})

// Delete Twoot

router.delete('/:id', async (req, res) => {
  const twoots = await loadTwootCollection()
  await twoots.deleteOne({ _id: new mongodb.ObjectID(req.params.id) })
  res.status(200).send()
})

async function loadTwootCollection() {
  const client = await mongodb.MongoClient.connect(uri, {
    useNewURLParser: true,
  })

  return client.db('Twotter').collection('twoots')
}

module.exports = router
