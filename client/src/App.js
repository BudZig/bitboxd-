import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import { Generator } from './Components/GenerateList'
import LoginForm from './Components/LogIn';
import Signup from './Components/Signup';

function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path="/login">
            <LoginForm />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
        </Switch>
      </div>
    </Router>
    // <>
    // <div className="App">
    //   <h1>Log In</h1>
    //   <LoginForm />
    // </div>
    //   {/* <Navbar /> */}
    // </>
  );
}

export default App;
