const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const productRoutes = require('./src/routes/product.routes')
const salesRoutes = require('./src/routes/sale.routes')
const userRoutes = require('./src/routes/user.routes')


// create express app
const app = express();
// Setup server port
//const port = process.env.PORT || 5000;
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())

app.use(cors());

//Nuevo Sprint 5
app.set('port', process.env.PORT || port);

// define a root route
app.get('/', (req, res) => {
  res.send("This is my backend");
});

// using as middleware
app.use('/api/products', productRoutes)

app.use('/api/sales', salesRoutes)

app.use('/api/users', userRoutes)


// listen for requests
/* app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
}); */

//Nuevo Sprint 5 - se borra el anterior y se deja:
app.listen(app.get('port'), () => {
  console.log(`Server is listening on port ` + app.get('port'));
});
