import React from 'react';
import './App.css';
import PageWrapper from './components/PageWrapper'
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';

//pages
import Home from './components/Pages/Home';
import About from './components/Pages/About';


class App extends React.Component{
  render() {
    return(
      <Router>
      <PageWrapper>
        
          <Route
          exact
          path="/"
          component={Home}
          />

          <Route 
          path="/about"
          component={About}
          />


          </PageWrapper>
        </Router>
      
    );
  }
}
export default App;
