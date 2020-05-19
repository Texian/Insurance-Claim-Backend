const db = require('../Models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const register = (req, res) => {
    const newUser = {
        email = req.body.email,
        password = req.body.password,
    }

    if (!newUser.email || !newUser.password) return res.status(400).send('Field cannot be blank')

    db.User.findOne({email: newUser.email}, (err, foundUser) => {
        if (err) return res.status(500).json(`Register FindOne Error: ${err}`)
        if (foundUser) return res.status(400).json(`User already exists`) 

        bcrypt.genSalt(10, (err, salt) => {
            if (err) return res.status(500).json(`Bcrypt GenSalt Error: ${err}`)
        
            bcrypt.hash(newUser.password, salt, (err, hashedPwd) => {
                if (err) return res.status(500).json(`Bcrypt Hash Error: ${err}`)
                newUser.password = hashedPwd;

                db.newUser.create(newUser, (err, savedUser) =>{
                    if (err) return res.status(500).json(`New User Create Error: ${err}`)
                    const token = jwt.sign(
                        {
                            email: savedUser.email,
                            _id: savedUser._id
                        },
                        process.env.JWT_SECRET,
                        {
                            expiresIn: '30 days'
                        },
                    );
                    return res.status(200).json({
                        message: `New User Created`,
                        token
                    });
                });
            })
        })
    })
}

const login = (req, res) => {
    const user = {
        email: req.body.email,
        password: req.body.password
    }

    if (!user.email || !user.password) return res.status(400).send(`Fields cannot be blank`)

    db.User.findOne({email: user.email}, (err, foundUser) => {
        if (err) return res.status(500).json(`User Find Error: ${err}`);
        if (!foundUser) return res.status(500).json(`User not found`);

        bcrypt.compare(user.password, foundUser.password, (err, match) => {
            if (err) return res.status(500).json(`Password Error: ${err}`);

            if (match) {
                const token = jwt.sign(
                    {
                        email: foundUser.email,
                        _id: foundUser._id
                    },
                    process.env.JWT_SECRET,
                    {
                        expiresIn: '30 days'
                    },
                );
                return res.status(200).json({
                    message: 'User logged in',
                    token
                });
            }
        })
    })
}

module.exports = {
    register,
    login
}