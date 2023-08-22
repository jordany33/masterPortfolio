const express = require('express');
const session = require('express-session');
const router = express.Router();
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 1200;

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev')); // request logger

/* NOTE: 
The order of the 2 functions below is critical for the app to work
properly. The session middleware wont be called for any 
requests that get handled by the router if the router is 
initalized before the session data is set.
( if !session, the router will continue as normal )
*/

app.use(session({ secret: 'xQN7Ep8NjsZjzy', resave: true, saveUninitialized: true, cookie: { maxAge: 100000, secure: false } }));
app.use('/', router); /* this is what allows us to specify routes */


// setup all static files (css, html, scripts)
app.use('/', express.static('src/public'));
app.use('/fonts', express.static('src/fonts'));
app.use('/imgs', express.static('src/imgs'));
app.use('/favicons', express.static('src/favicons'));
app.use('/components', express.static('src/components'));

// get root dir (https://jordany.dev/) & send to index.html
router.get('/', (req, res, next) => {
    res.sendFile('landing.html', { root: 'src/public' });
});

router.get( '/content', ( req, res ) =>
{
    res.sendFile( 'content.html', { root: 'src/public' } );
});

// possible alternate dir
router.get('/projects', (req, res) => {
    res.sendFile('projects.html', { root: 'src/public' });
});

router.get('/logger', (req, res, next) => {
    if (req.session.views) {
        let ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

        req.session.views++
        res.setHeader('Content-Type', 'text/html');
        res.write('<p>session_id: ' + req.sessionID + '</p>')
        res.write('<p>path: ' + req.path + '</p>')
        res.write('<p>views: ' + req.session.views + '</p>');
        res.write('<p>expires in: ' + (req.session.cookie.maxAge / 1000) + 's</p>');
        res.write('<p>IP: ' + ip + '</p>')
        res.end();
    }
    else {
        req.session.views = 1;
        res.send('welcome, refresh to start logging!');
    }
    next()
});

app.listen(port);
console.log('server running on ' + port);

// repo data
const axios = require('axios');