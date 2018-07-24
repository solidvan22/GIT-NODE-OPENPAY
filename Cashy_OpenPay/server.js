// =================================================================
// get the packages we need ========================================
// =================================================================
var express 	= require('express');
    app         = express();
    jwt         = require('jsonwebtoken'); // used to create, sign, and verify tokens
var exphbs      = require('express-handlebars');
var bodyParser  = require('body-parser');
var morgan      = require('morgan');
var config = require('./config'); // get our config file

// Importando los modulos  de controladores
var openPayCustomerController   = require('./controllers/openPayCustomerController.js')
var userController              = require('./controllers/userController.js')

// =================================================================
// configuration ===================================================

var port = process.env.PORT || 8080; // used to create, sign, and verify tokens
app.set('superSecret', config.secret); // secret variable

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// use morgan to log requests to the console
app.use(morgan('dev'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static('public'));

// =================================================================
// routes ==========================================================
// =================================================================


// rutas de vistas

app.get('/login',function(req,res){
    res.render('login')
})

app.use(express.static('public'));

// ---------------------------------------------------------
// Obteniendo una instancia del router de express

var apiRoutes = express.Router(); 

// ---------------------------------------------------------
// authentication no se ocupa middleware debido a que esta ruta no debe requerir autenticación
apiRoutes.post('/auth', userController.user_auth);

// ---------------------------------------------------------
// route middleware revisa el token
middleWareAuth= function(req, res, next) {

	// check header or url parameters or post parameters for token
	var token = req.body.token || req.param('token') || req.headers['x-access-token'];

	// decode token
	if (token) {

		// verifies secret and checks exp
		jwt.verify(token, app.get('superSecret'), function(err, decoded) {			
			if (err) {
				return res.json({ success: false, message: 'Failed to authenticate token.' });		
			} else {
				// if everything is good, save to request for use in other routes
				req.decoded = decoded;	
				next();
			}
		});

	} else {

		// if there is no token
		// return an error
		return res.status(403).send({ 
			success: false, 
			message: 'No token provided.'
		});
		
	}
	
}
app.get('/', middleWareAuth,function (req, res) {
    res.render('home');
});
apiRoutes.use(middleWareAuth);

// ---------------------------------------------------------
// rutas que llevan autenticacion (API)
// ---------------------------------------------------------


apiRoutes.get('/openpayCustomers',openPayCustomerController.openPayCustomer_list)
apiRoutes.post('/openpayCustomers',openPayCustomerController.openpayCustomer_create_post)

app.use('/api', apiRoutes);

// =================================================================
// Iniciando el servicio

app.listen(port);
console.log('Aplicación funcionando en  http://localhost:' + port);

// User.findOne({userName:"Rafa"},function(user){
//     //console.log("usuario : "  );
//     console.log(user);
// });
