import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import ShopAde from './views/Projects/ShopAde';
import HomeUnitesUs from './views/Projects/HomeUnitesUs';
import Yearbook from './views/Projects/Yearbook';
import GoodJob from './views/Projects/GoodJob';
import Unspoken from './views/Projects/Unspoken';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route exact path="/ShopAde">
          <ShopAde />
        </Route>
        <Route exact path="/HomeUnitesUs">
          <HomeUnitesUs />
        </Route>
        <Route exact path="/Yearbook">
          <Yearbook />
        </Route>
        <Route exact path="/GoodJob">
          <GoodJob />
        </Route>
        <Route exact path="/Unspoken">
          <Unspoken />
        </Route>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
