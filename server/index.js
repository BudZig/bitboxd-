const express = require('express');
const mongoose = require('mongoose');
const bodyParser  = require('body-parser');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const User = require('./models/user');

const app = express();
const port= 3000;
const uri = 'mongodb://localhost:27017';

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=> {
    console.log('Connected to MongoDB');
}).catch((error)=> {
    console.log('Error connecting to MongoDB', error)
});

app.use(bodyParser.json());
app.use(cors());

app.post('/login', async (req, res) => {
    const {email, password} = req.body;
    const user= User.findOne({email: email});
    if(!user) {
        return res.status(404).json({message: 'User not found'});
    }

    const matched = await user.comparePassword(password);
    if(!matched) {
        return res.status(401).json({message: 'Invalid Login'});
    }

    const token = jwt.sign({ id: user._id}, 'secret');
    res.json({ token });
});

app.post('/signup', async function (req, res) {
    const { email, password } = req.body;

    const existing = await User.findOne({ email: email });
    if(existing) {
        return res.status(409).json({ message: 'User already exists'});
    }
    
    const user = new User({ email, password });
    await user.save();

    const token = jwt.sign({ id: user._id}, 'secret');
    res.json({ token });
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});