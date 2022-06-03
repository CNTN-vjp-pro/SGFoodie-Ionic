const express = require('express')
const multer = require('multer')
const router = express.Router()
const Booking = require('../models/Booking');
const Restaurant = require('../models/Restaurant')
const Policy = require('../models/Policy');


// set up storage for uploading images
var storage = multer.diskStorage({
    destination: "images",
    filename: (req, file, cb) => {
        // console.log(file.originalname)
        cb(null, `${Date.now()}--${file.originalname}`);
    }
});

let maxSize = 10 * 1024 * 1024; // 10 MB
var upload = multer({
    storage: storage,
    limits: {
        fileSize: maxSize,
    }
}).single("file")


// test server
router.get('/', (req, res) => {
    res.send("It's seem ok")
})

// get policies data
router.get('/policies', (req, res) => {
    Policy.find({})
        .then(data => { res.json(data) })
        .catch(error => {
            res.json({ "Error:": error.message })
        })
})

// get restaurants data
router.get('/restaurants', async(req, res) => {
    try {
        let restaurants = await Restaurant.find();
        res.json(restaurants)
    } catch (err) {
        res.json({ message: err.message })
    }
})


//Get restaurant by Category
router.get('/restaurants/:category', async(req, res) => {
    try {
        let restaurant = await Restaurant.find({ category: req.params.category });
        res.json(restaurant)
    } catch (err) {
        res.json({ message: err.message })
    }
})

// get restaurant by id
router.get('/restaurant/:id', async(req, res) => {
    try {
        let restaurant = await Restaurant.findById(req.params.id);
        res.json(restaurant)
    } catch (err) {
        res.json({ message: err.message })
    }
})


// post restaurant
router.post('/restaurant', (req, res) => {
    upload(req, res, async(err) => {
        if (err) {
            res.json({ message: err.message });

        } else {
            const restaurant = new Restaurant({
                name: req.body.name,
                short_description: req.body.short_description,
                description: req.body.description,
                image: req.file.filename,
                menu: req.body.menu,
                best_dishes: req.body.best_dishes,
                link: req.body.link,
                category: req.body.category,
                address: req.body.address,
                map: req.body.map,
                time: req.body.time,
                price_range: req.body.price_range,
                special_diet: req.body.special_diet,
                discount: req.body.discount,
                cmt: req.body.cmt
            });
            // if (!mongoose.Types.ObjectId.isValid(req.body._id)) return false;
            try {
                await restaurant.save();
                // console.log(restaurant);
                res.json({ message: "success" });
                // res.send(restaurant.json());
                // res.send("upload successfully")
            } catch (err) {
                res.json({ message: err.message });
            }
        }
    })
})



// update restaurant
router.patch('/restaurant/:id', async(req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        await Restaurant.findByIdAndUpdate(id, updatedData)

        res.json({ message: "success" })
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
})


// delete restaurant
router.delete('/restaurant/:id', async(req, res) => {
    try {
        const id = req.params.id;
        await Restaurant.findByIdAndDelete(id)

        res.json({ message: "success" })
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
})


//Booking table
router.post('/bookingTable', async(req, res) => {
    const booking = new Booking({
        adultQuantity: req.body.adultQuantity,
        childrenQuantity: req.body.childrenQuantity,
        bookingDate: req.body.bookingDate,
        name: req.body.name,
        email: req.body.email,
        note: req.body.note,
        restaurantName: req.body.restaurantName,
        restaurantAddress: req.body.restaurantAddress
    });
    try {
        const saveBooking = await booking.save();
        console.log(saveBooking);
        res.json({ message: "success" });
    } catch (err) {
        res.json({ message: err.message });
    }
})


//Get about us
router.get('/aboutus', (req, res) => {
    AboutUs.find({})
        .then(data => { res.json(data) })
        .catch(error => {
            res.json({ "Error:": error.message })
        })
})


//Get booking table
router.get('/bookingTable/appointment', async(req, res) => {
    Booking.find({})
        .then(data => { res.json(data) })
        .catch(err => { res.json({ "Error": err.message }) })
})



//Delete booking table
router.delete('/bookingTable/:id', async(req, res) => {
    try {
        const id = req.params.id;
        await Booking.findByIdAndDelete(id)
        res.json({ message: "success" })
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
})



module.exports = router