const express = require('express')
const blogger = require('../Schema/bloggerSchema')
const router = express.Router()
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { body, validationResult } = require('express-validator')

// ROUTER 1 FOR CREATING USER
router.post('/bloggersignup', [
    body('name').isLength({ min: 3, max: 15 }),
    body("email").isEmail(),
    body('password').isLength({ min: 6 })], async (req, res) => {
        let success = false
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.log(errors)
            return res.status(400).json({ success, errors: errors.array() });
        }
        try {
            let blogger = await blogger.findOne({ email: req.body.email, username: req.body.username })
            if (blogger) {
                return res.status(400).json({ success, errors: errors.array() });
            }

            const salt = await bcrypt.genSalt(10)
            const secpass = await bcrypt.hash(req.body.password, salt)
            blogger = await blogger.create({
                name: req.body.name,
                email: req.body.email,
                username: req.body.username,
                password: secpass,
                image: req.body.image
            })
            const data = {
                blogger: {
                    id: blogger.id
                }
            }
            const jwt_Sign = "SachinSAXENA"
            const jwttoken = jwt.sign(data, jwt_Sign)
            success = true
            res.json({ success, jwttoken })
        } catch (error) {
            res.status(500).send(error, "Some Error Occurred")
        }
    })
module.exports = router