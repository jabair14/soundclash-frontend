// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import PackContainer from './components/PackContainer';
import Login from './components/Login';
import UserProfile from './components/UserProfile';
import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";



function App() {

  const [currentUser, setCurrentUser] = useState({})
  const history = useHistory()

  const handleLoginUser = (e) => {
    e.preventDefault()

    const emailInput = e.target.email.value
    const passwordInput = e.target.password.value

    fetch('http://127.0.0.1:3000/users')
    .then(res => res.json())
    .then(users => {
      users.filter(user => {
        if(user.email === emailInput && user.password === passwordInput) {
          setCurrentUser({...user})
          
          history.push('/packs')
        }
      })
    })
  }
  return (
    <>
    <h1>SoundClash</h1>
    <NavBar currentUser={currentUser}/>
    <Switch >
      <Route exact path="/packs">
        <PackContainer currentUser={currentUser}/>
      </Route>
      <Route  exact path="/">
        <Login handleLoginUser={handleLoginUser}/>
      </Route>
      <Route exact path={`/users/${currentUser.id}`}>
        <UserProfile currentUser={currentUser}/>
      </Route>
    </Switch>
  
    </>
  );
}

export default App;
