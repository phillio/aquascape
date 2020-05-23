// Packages and Libraries
import React from 'react';
import { Route, Link } from 'react-router-dom'

// // Components
// import Home from './components/Home'
// import Login from './components/Login'
// import Signup from './components/Signup'
// import Transactions from './components/Transactions'
// import ProtectedRoute from './components/ProtectedRoute';

// // Helper functions
// import { login, getProfile, signup, getStocks, getStock, buyStock, depositMoney } from './services/apiService'
// import authService from './services/authService';

// Css
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isSignedIn: false,
      user: {},
      portfolio: [],
      transactions: {},
      priceArray: [],
      updated: false
    }
  }
  render() {
    const { isSignedIn, user, portfolio, transactions, priceArray } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <nav className="nav-bar-container" >
            {
              isSignedIn &&
              <div className="nav-bar-link" ><Link to="/">Portfolio</Link></div>
            }
            {
              isSignedIn &&
              <div className="nav-bar-link" ><Link to="/transactions">Transactions</Link></div>
            }

            {
              !isSignedIn ? (
                <div className="nav-bar-link" ><Link to="/login">Login</Link></div>
              ) : (
                <button className="nav-bar-link" id="nav-bar-button" onClick={this.signOutUser} >Sign Out</button>
              )
            }
          </nav>

          <p>
            Welcome to AQS
          </p>
        </header>
        {/* <main>
          <body>
            
          </body>
        </main> */}
      </div>
    );
  }
}

export default App;
