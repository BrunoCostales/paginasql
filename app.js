const express = require ('express');
const app = express();
const serverUp = require ('./src/controllers/serverUpController')
const indexRouter = require ('./src/routes/indexRouter')
const methodOverride = require ('method-override')
const path =require ('path');
const fs = require ('fs');

app.listen (3005, serverUp.index)

app.set ("view engine", "ejs");
app.set ('views',path.join (__dirname,'src/views')) ;

app.use (express.static ('public'));
app.use (methodOverride('_method'));
app.use (express.urlencoded ({extended:false}));
app.use (express.json());

app.use ('/', indexRouter)