const router = require('express').Router();
let Item = require('../models/item.model');

router.route('/').get((req, res) => {
    Item.find()
      .then(items => res.json(items))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/add').post((req, res) => {
    const qty = req.body.qty;
    const item = req.body.item;
  
    const newItem = new Item({
      item,
      qty,
    });
  
    newItem.save()
    .then(() => res.json('Item added!'))
    .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/:id').get((req, res) => {
    Item.findById(req.params.id)
      .then(item => res.json(item))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  router.route('/:id').delete((req, res) => {
    Item.findByIdAndDelete(req.params.id)
      .then(() => res.json('Item deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  router.route('/update/:id').post((req, res) => {
    Item.findById(req.params.id)
      .then(item => {
        item.qty = req.body.qty;
        item.item = req.body.item;
  
        item.save()
          .then(() => res.json('Item updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });
  router.route('/:id').get((req, res) => {
    Item.findById(req.params.id)
        .then(item => res.json(item))
        .catch(err => res.status(400).json('Error: ' + err));
    });
    router.route('/:id').delete((req, res) => {
        Item.findByIdAndDelete(req.params.id)
        .then(() => res.json('Item deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
    });
    router.route('/update/:id').post((req, res) => {
        Item.findById(req.params.id)
        .then(item => {
          item.qty = req.body.qty;
          item.item = req.body.item;
          item.duration = Number(req.body.duration);
          item.date = Date.parse(req.body.date);
    
          item.save()
            .then(() => res.json('Item updated!'))
            .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
    });
  module.exports = router;