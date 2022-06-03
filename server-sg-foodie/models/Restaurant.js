const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Restaurant = new Schema({
    name: { type: 'string' },
    short_description: { type: "string" },
    description: { type: [] },
    image: { type: [] },
    menu: { type: [] },
    best_dishes: { type: [] },
    link: { type: "string" },
    category: { type: [] },
    address: { type: [] },
    map: { type: 'string' },
    time: { type: 'string' },
    price_range: { type: 'string' },
    special_diet: { type: [] },
    discount: { type: 'string' },
    cmt: { type: [] },
    createAt: { type: 'date', default: Date.now() },
    modifiedAt: { type: 'date', default: Date.now() }
})

module.exports = mongoose.model('Restaurant', Restaurant)