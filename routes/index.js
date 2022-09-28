const express = require('express');
const router = express.Router();
const User = require('../model/userSchema');

router.get('/', (req, res) => {
    try {
        res.status(201).render('index');
    } catch (error) {
        res.status(500).redirect('/error')
    }
});
//post route
router.post('/', async (req, res) => {
    const user = new User({
        email: req.body.email,
        name: req.body.name,
        country: req.body.country,
        role: req.body.role,
        salary: req.body.salary,
        phone: req.body.phone,
        company: req.body.company
    });
    try {
        await user.save()
        res.status(201).redirect('/thank-you')
    } catch (error) {
        res.status(500).redirect('/error')
    }
});
//get all data
router.get('/all', async (req, res) => {
    try {
        const user = await User.find();
        res.status(201).json(user);
    }
    catch (error) {
        res.status(500).redirect('/error')
    }

});
//thank you page
router.get('/thank-you', (req, res) => {
    try {
        res.status(201).render('thank-you');
    }
    catch (error) {
        res.status(500).redirect('/error')
    }

});
//error page
router.get('/error', (req, res) => {
    res.status(500).render('error');
})

module.exports = router;