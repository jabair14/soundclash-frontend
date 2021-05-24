// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import PackContainer from './components/PackContainer';
import Login from './components/Login';
import UserProfile from './components/UserProfile';
// import PackDetail from './components/PackDetail';
import PackCard from './components/PackCard';
import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";




function App() {

  const [currentUser, setCurrentUser] = useState({})
  const [ packs, setPacks ] = useState ([])
  const [ purchase, setPurchase] = useState([])
  const [ userDownload, setUserDownload ] = useState([])
  const history = useHistory()

  const handleAddPurchase = (newPurchase) => {
    const newPurchaseArr = [newPurchase, ...purchase];
    setPurchase(newPurchaseArr);
  }

  const handleAddDownload = (newDownloads) => {
    const newDownloadArr = [newDownloads, ...userDownload]
    setUserDownload(newDownloadArr)
  }

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

  useEffect(() => {
    fetch('http://127.0.0.1:3000/packs')
    .then(res => res.json())
    .then(packArr => setPacks(packArr))
}, [])
// console.log(packs)

  const packInfo = packs.map(pack => <PackCard key={pack.id} {...pack} currentUser={currentUser} onAddPurchase={handleAddPurchase}/>)


  //   useEffect(() => {
  //     fetch(`http://127.0.0.1:3000/users/${currentUser.id}`)
  //     .then(res => res.json())
  //     .then(data => console.log(data))
  // }, [])

  // }




  return (
    <>
    <h1>SoundClash</h1>
    <NavBar currentUser={currentUser}/>
    <Switch >
      <Route exact path="/packs">
        <PackContainer currentUser={currentUser} packInfo={packInfo}/>
      </Route>
      <Route  exact path="/">
        <Login handleLoginUser={handleLoginUser}/>
      </Route>
      <Route exact path={`/users/${currentUser.id}`}>
        <UserProfile currentUser={currentUser} handleAddDownload={handleAddDownload} />
      </Route>
    </Switch>
  
    </>
  );
}

export default App;
