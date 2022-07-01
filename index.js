const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');


mongoose.connect('mongodb://localhost/restful_blog_app');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());


//Routes
// const blogRoutes = require('./routes/blog');
// app.use('/api/blog', blogRoutes);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send("Hello World d");
    }
);


// invalid route
app.get('*', (req, res) => {
    res.status(404).json({message: 'Invalid Route'});
});



app.listen(3000, () => {
    console.log("Server is running on port 3000");
}
);