const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');

const app = express();

// Body parser middleware
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;

//Connect to Mongo
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

//Use routes
app.use('/api/items', items);

const PORT = process.env.PORT || 5000;

app.get('/api/customers', (req, res) => {
    const customers = [
        { id: 1, firstName: 'John', lastName: 'Doe' },
        { id: 2, firstName: 'Brad', lastName: 'Traversy' },
        { id: 3, firstName: 'Mary', lastName: 'Swanson' },
    ];

    res.json(customers);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));