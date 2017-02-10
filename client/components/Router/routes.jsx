import React from 'react';
import App from '../App/App';
import LogIn from '../Login/Login';
import Register from '../Register/Register';
import Home from '../Home/Home';
import City from '../City/City';
import Brewery from '../Brewery/Brewery';
import axios from 'axios';
import {browserHistory} from 'react-router';
import Checkout from '../Checkout/Checkout';
import LogIn from '../LogIn/LogIn.js';
import Register from '../Register/Register.js'

import { Route, IndexRoute } from 'react-router';


module.exports = (
  <Route path="/" component={App} >
    <IndexRoute component={Home} />
<<<<<<< HEAD
    <Route path="/login" component={LogIn}/>
=======
    <Route path="/login" component={LogIn} />
>>>>>>> c00a570e55b2ba2865dfb7b30e3e7ed84fed740a
    <Route path="/register" component={Register} />
    <Route path="/checkout" component={Checkout} />
    <Route path="/:city" component={City} />
    <Route path="/:city/:brewery" component={Brewery}/>
  </Route>
);
























