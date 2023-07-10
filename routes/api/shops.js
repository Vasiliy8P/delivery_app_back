const express = require('express')

const router = express.Router()

router.get('/', async (req, res, next) => {
  res.json({ message: 'template message' })
})

router.get('/:shopId', async (req, res, next) => {
  res.json({ message: 'template message' })
})

router.post('/', async (req, res, next) => {
  res.json({ message: 'template message' })
})

router.delete('/:shopId', async (req, res, next) => {
  res.json({ message: 'template message' })
})

router.put('/:shopId', async (req, res, next) => {
  res.json({ message: 'template message' })
})

module.exports = router
