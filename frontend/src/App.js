import { useAuth0 } from '@auth0/auth0-react'
import { LogoutButton } from './components/Logout'
import {Profile} from './components/Profile'
import './App.css';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Categories from './pages/Categories'
import Shows from './pages/Shows'
import Characters from './pages/Characters'
import PrivateRoute from './components/PrivateRoute'


function App() {
  const {isAuthenticated} = useAuth0();
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} props={isAuthenticated}></Route>
        <PrivateRoute path="/login" component={Profile}></PrivateRoute>
        <Route path="/logout" component={LogoutButton}></Route>
        <PrivateRoute path="/profile" component={Profile}></PrivateRoute>
        <Route path="/categories" component={Categories}></Route>
        <Route path="/shows" component={Shows}></Route>
        <Route path="/characters" component={Characters}></Route>
      </Switch>
    <div className="App">
        <header className="App-header">
          {/* {isAuthenticated ?
          <>
            <Profile />
            <LogoutButton />
          </> : <>
            
            <LoginButton />
          </>} */}
        
        
        

      </header>
      </div>
      
    </Router>
  );
}

export default App;
