const express = require('express')
const router = express.Router()
const Item = require('../models/item')


router.get('/', async(req,res) => {
    try{
           const items = await Item.find()
           res.json(items)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.get('/:id', async(req,res) => {
    try{
           const item = await Item.findById(req.params.id)
           res.json(item)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.delete('/:id',async(req,res)=> {
    try{
        await Item.findByIdAndRemove(req.params.id)    
    }catch(err){
        res.send('Errosssr')
    }
})

router.post('/', async(req,res) => {
    const item = new Item({
        name: req.body.name,
        price: req.body.price,
        sub: req.body.sub
    })

    try{
        const a1 =  await item.save() 
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
})

router.patch('/:id',async(req,res)=> {
    try{
        const item = await Item.findById(req.params.id) 
        alien.sub = req.body.sub
        const a1 = await item.save()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }

})

module.exports = router