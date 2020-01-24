import React from 'react';
import { Router, Route, Switch }  from 'react-router-dom';
import HomePage from './pages/HomePage';
import Footer from './Footer';
import VinRegistration from './pages/VinRegistration';
import history from '../router/history'



const App = () => {

  return (
    <div className="container">
      <Router history={history}>
        <div>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/register/vin" exact component={VinRegistration} />
          </Switch>
          <Footer />
        </div>
      </Router>
        
    </div>
  );
};
export default App;
