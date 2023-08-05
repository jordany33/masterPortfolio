const express = require( 'express' );
const router = express.Router();

const app = express();
const port = process.env.PORT || 1200;

app.use( '/', router ); /* this is what allows us to specify routes */

// setup all static files (css, html, scripts)
app.use( '/views', express.static('../views'))
app.use( express.static( '../imgs' ) );
app.use( '/scripts', express.static('../scripts') )


// get root dir (https://jordany.dev/) & send to index.html
router.get( '/', ( req, res ) => 
{
    res.sendFile( 'index.html', { root: '../views' } );
});

// possible alternate dir
router.get( '/projects', ( req, res ) => 
{   
    res.sendFile( 'projects.html', { root: '../views' });
});

app.listen( port );
console.log( 'server running on ' + port );

// repo data
const axios = require( 'axios' );