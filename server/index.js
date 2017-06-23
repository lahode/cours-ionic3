/**
 * Importation des libraries et JSON
 */
const express = require('express'); /* serveur http */
const bodyParser = require('body-parser'); /* convertit Post en JSON */
const fs = require('fs'); /* module file system */
const jwt = require('jsonwebtoken'); /* permet de créer ou vérifier les jetons d'authentication */
const config = require('./config.json'); /* récupère les paramètres de configuration */
let users = require('./mydata/users.json'); /* récupère les utilisateurs */
let places = require('./mydata/places.json'); /* récupères les "places" */

/**
 * Configuration
 */
let app = express();
const port = process.env.PORT || config.PORT;

/**
 * Permet de récupère le body HTML en Json
 */
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

/**
 * Autorise les connexions CORS depuis tous les serveur, les method GET et POST et les headers "Content-Type"
 */
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "POST, GET");
    res.header("Access-Control-Allow-Headers", "Authorization, Origin, X-Requested-With, Content-Type, Accept");
    next();
});

/**
 * Bloc les requêtes OPTIONS pour éviter qu'elle ne continue et soit interceptée par le traitement des 404
 */
app.options('*', (req, res) => {
  res.end();
});

/**
 * Route d'authentification
 */
app.post('/login', function(req, res) {
  let userAuth;
  if (!req.body.email || !req.body.password) {
    return res.end(res.writeHead(400, "Tous les champs sont obligatoires."));
  }
  for (let user of users) {
    if (req.body.email == user.email && req.body.password == user.password) {
      userAuth = user;
    }
  }
  if(!userAuth) {
    return res.end(res.writeHead(401, "Erreur d'authentification"));
  }
  else {
    let token = jwt.sign(userAuth, config.JWT_SECRET, {
      expiresIn: 60 * 60 * 24 // Expire dans 24 heures
    }, function(err, token) {
      if (err) {
        return res.end(res.writeHead(500, "Une erreur est survenue dans la génération du jeton d'authentification."));
      }
      console.log(`L'utilisateur ${req.body.email} s'est connecté. Son token généré est le suivant: ${token}`);
      return res.json(token);
    });
  }
});

/**
 * Route de création d'un nouvel utilisateur
 */
app.post('/signin', function(req, res) {
  let userExists;
  if (!req.body.email || !req.body.password) {
    return res.end(res.writeHead(400, "Tous les champs sont obligatoires."));
  }
  for (let user of users) {
    if (req.body.email == user.email) {
      userExists = user;
    }
  }
  if(!userExists) {
    let userAuth = {email: req.body.email, password: req.body.password};
    users.push(userAuth);
    let json = JSON.stringify(users);
    fs.writeFile('mydata/users.json', json, 'utf8', function(err) {
      if (err) {
        return res.end(res.writeHead(500, "Une erreur est survenu lors de l'inscription."));
      }
      else {
        let token = jwt.sign(userAuth, config.JWT_SECRET, {
          expiresIn: 60 * 60 * 24 // Expire dans 24 heures
        }, function(err, token) {
          if (err) {
            return res.end(res.writeHead(500, "Une erreur est survenue dans la génération du jeton d'authentification."));
          }
          console.log(`Le nouvel utilisateur ${req.body.email} a été créé. Son token généré est le suivant: ${token}`);
          return res.json(token);
        });
      }
    });
  }
  else {
    return res.end(res.writeHead(403, "L'utilisateur existe déjà."));
  }
});


/**
 * Vérifie les jetons d'authentification
 */
var privateRoutes = express.Router();
privateRoutes.use(function(req, res, next) {
  if (!(req.headers && req.headers.authorization)) {
    return res.end(res.writeHead(401, "Erreur d'authentification"));
  }
  let header = req.headers.authorization.split(' ');
  let token;
  try {
    token = JSON.parse(header[1]);
  } catch (e) {
    token = header[1];
  }
  if (token) {
    jwt.verify(token, config.JWT_SECRET, function(err, decoded) {
      if (err) {
        return res.end(res.writeHead(401, "Erreur d'authentification"));
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    return res.status(403).send({
        success: false,
        message: "Aucun jeton trouvé"
    });
  }
});

/**
 * Sécurise toutes les URLs commençant par /api
 */
app.use('/api', privateRoutes);

/**
 * Vérifie l'authentification
 */
app.get('/api/authenticate', function(req, res) {
  return res.json('ok');
});

/**
 * Retourne les "places"
 */
app.get('/api/places', function(req, res) {
  return res.json(places);
});

/**
 * Ordonne au serveur d'écouter sur le port 4300
 */
console.log(`Serveur Node lancé sur le port ${port}`)
app.listen(port);
