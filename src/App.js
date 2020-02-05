import React from 'react';
import './App.css';
import PageWrapper from './components/PageWrapper'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {connect} from 'react-redux';

//pages
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import Login from './components/Pages/Login';
import AdminWrapper from './components/AdminWrapper';
import LoginWrapper from './components/LoginWrapper';

//Admin Pages
import Dashboard from './components/Pages/Admin/Dashboard';
import Posts from './components/Pages/Admin/Posts';
import Users from './components/Pages/Admin/Users';



class App extends React.Component{
  render() {
    return(
      <Router>

      <Route
      path='/admin/users'
      render={props => {
        return (
          <div>
          {this.props.auth.token ?
            <AdminWrapper> 
            <Users />
            </AdminWrapper>
          :
            <LoginWrapper>
              <Login />
            </LoginWrapper>
      }
      </div>
        )
        
      }} 
      />

      <Route
      path='/admin/posts'
      render={props => {
        return (
          <div>
          {this.props.auth.token ?
            <AdminWrapper> 
            <Posts />
            </AdminWrapper>
          :
            <LoginWrapper>
              <Login />
            </LoginWrapper>
      }
      </div>
        )
        
      }} 
      />
        

      <Route
      path="/admin"
      render={props => {
        return (
          <div>
          {this.props.auth.token ?
            <AdminWrapper> 
            <Dashboard />
            </AdminWrapper>
          :
            <LoginWrapper>
              <Login />
            </LoginWrapper>
      }
      </div>
        )
        
      }} 
      />

      
        
          <Route
          exact
          path="/"
          render={ props => (
            <PageWrapper>
              <Home {...props} />
            </PageWrapper>
          )}
          />

          <Route 
          path="/about"
          render={ props => (
            <PageWrapper>
              <About {...props} />
            </PageWrapper>
          )}
          />

          <Route
          path="/contact"
          render={ props => (
            <PageWrapper>
              <Contact {...props} />
            </PageWrapper>
          )}
          />


         
        </Router>
      
    );
  }
}


const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
