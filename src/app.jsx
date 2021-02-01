import React from 'react';
import './index.css';
import {BrowserRouter, Route} from 'react-router-dom'
import {withRouter} from "react-router";
import {routes} from './routes';

const App = () => {

  return (

    <BrowserRouter>
      {routes.map((route, idx) => {
        return <Route key={idx} path={route.path} component={withRouter(route.component)} exact={route.exact}/>
      })}
    </BrowserRouter>
  )
}

export default App;