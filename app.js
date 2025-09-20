const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const supplierRoutes = require('./routes/supplierRoutes');
const productRoutes = require('./routes/productRoutes');

const app = express();

// MongoDB connect
mongoose.connect('mongodb://127.0.0.1:27017/crud_app', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.log(err));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// Routes
app.use('/suppliers', supplierRoutes);
app.use('/products', productRoutes);

// Home
app.get('/', (req, res) => {
  res.render('index'); // render ra views/index.ejs
});
const PORT = 3000;
app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
