const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  Category.findAll({include: [Product]})
  .then(categories => {
    res.json(categories)
  })
  .catch(err => {
    console.log(err)
  })
  
});

router.get('/:id', (req, res) => {
  Category.findOne({where: {id: req.params.id}, include: [Product]})
  .then(category=> {
    res.json(category)
  })
  .catch(err => {
    console.log(err)
  })
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body)
  .then(category=> {
    res.json(category)
  })
  .catch(err => {
    console.log(err)
  })
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {where: {id: req.params.id} })
  .then(category => {
    res.sendStatus(200)
  })
  .catch(err => {
    console.log(err)
  })
});

// delete a category by its `id` value
router.delete('/:id', (req, res) => {
  Category.destroy({where: {id: req.params.id}})
  .then(category => {
    res.sendStatus(200)
  })
  .catch(err => {
    console.log(err)
  })
});

module.exports = router;
