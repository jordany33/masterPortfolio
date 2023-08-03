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

// axios.get( 'https://api.github.com/users/jordany33/repos' )
// .then( res => 
//     {
//         let repo_data = res.data;
//         // console.log( repo_data )
        
//         for ( key in repo_data )
//         {
//            if ( repo_data.hasOwnProperty( key ) )
//            {

//                 // let repo_name = repo_data[ key ].name;
//                 // console.log( 'name: ' + repo_name );

//                 // let repo_url = repo_data[ key ].url;
//                 // console.log( 'URL: ' + repo_url );

//                 // let repo_id = repo_data[ key ].id;
//                 // console.log( 'ID: ' + repo_id );

//                 // let avatar_url = repo_data[ key ].owner.avatar_url;
//                 // console.log( 'avatar: ' + avatar_url );

//                 // let is_fork = repo_data[ key ].fork;
//                 // console.log( 'forked? ' + is_fork );

//                 // let watchers = repo_data[ key ].watchers;
//                 // console.log( 'watchers' + watchers );

//                 // let stars = repo_data[ key ].stargazers_count;
//                 // console.log( 'stars: ' + stars );

//                 module.exports = { repo_data };
//            }
//         }
//     });

// name
// id
// status
// url
// comments
// created
// updated
// stars
// watchers
// def_branch