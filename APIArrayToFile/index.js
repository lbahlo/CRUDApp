const express = require('express'),
    // path = require('path'),
    // bodyParser = require('body-parser'),
    cors = require('cors'),
    morgan = require('morgan')

    
   const productRoute = require('./routes/product.routes');

    const app = express();
    // Morgan
    app.use(morgan('tiny'))
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))
    
    // app.use(bodyParser.json());
    app.use(cors());

    app.use('/products', productRoute)
    //app.use(require('./routes/index.routes'))

    // First route
       app.get('/', (req, res) => {
        res.json({ message: 'Hello world' })
    })
    
    const port = process.env.PORT || 1337;

    const server = app.listen(port, function(){
     console.log('Listening on port ' + port);
    });
        

