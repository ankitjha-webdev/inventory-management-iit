const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const User = require('./model/User');
const Instrument = require('./model/InstrumentList');
const authRouter = require('./routes/auth');
const userRouter = require('./routes/user');
const instrumentRouter = require('./routes/InstrumentList');
require('dotenv').config();

const port = process.env.PORT || 5000;

mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log('Connected to database successfully ! 🎉🎉 ');
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());


app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send("Api is on! 😁😁");
    }
);

app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);
app.use('/api/instrument', instrumentRouter);


// invalid route
app.get('*', (req, res) => {
    res.status(404).json({message: 'Invalid Route'});
}); 


app.listen(port, () => {
    console.log("Server is running on port " + port + " 🎉🎉");
}
);