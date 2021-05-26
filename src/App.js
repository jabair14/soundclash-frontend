// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import PackContainer from './components/PackContainer';
import Login from './components/Login';
import UserProfile from './components/UserProfile';
// import PackDetail from './components/PackDetail';
import PackCard from './components/PackCard';
import Search from './components/Search';
import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import CreatePack from './components/CreatePack';




function App() {

  const [currentUser, setCurrentUser] = useState({})
  const [ allUsers, setAllUsers] = useState([])
  const [ packs, setPacks ] = useState ([])
  const [ purchase, setPurchase] = useState([])
  const [ userDownload, setUserDownload ] = useState([])
  const [ users, setUsers ] = useState([])
  const [ searchTerm, setSearchTerm ] = useState('')
  
  const history = useHistory()

  
  const handleAddPurchase = (newPurchase) => {
    const newPurchaseArr = [newPurchase, ...purchase];
    setPurchase(newPurchaseArr);
  }
  
  useEffect(() => {
    fetch('http://127.0.0.1:3000/packs')
    .then(res => res.json())
    .then(setPacks)
  }, [])
  
  
  
  useEffect(()=> {
    fetch('http://127.0.0.1:3000/users')
    .then(res => res.json())
    .then(usersArr => setAllUsers(usersArr))

  },[])

  
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
          // console.log(user)
         
          
          history.push('/packs')
        }
      })
    })
  }
  // console.log(currentUser.purchases)


  // const handleAddDownload = (newDownloads) => {
  //   const newDownloadArr = [newDownloads, ...userDownload]
  //   setUserDownload(newDownloadArr)
  // }

  const handleAddPack = (newPack) => {
    const newPackArr = [newPack, ...packs];
    setPacks(newPackArr)
  }




  const updateUser = (updatedUser) => {
    // const updatedUsersArr = users.map((user) => {
    //   if (user.id === updatedUser.id) {
    //     return updatedUser
    //   } else {
    //     return user
    //   }
    // })
    // setUsers(updatedUsersArr)
    setCurrentUser(updatedUser)
  }


  // const packInfo = packs.map(
  //   pack => <PackCard 
  //   key={pack.id} 
  //   {...pack} currentUser={currentUser} 
  //   onAddPurchase={handleAddPurchase}
  //   />)

  return (
    <>
    <h1>SoundClash</h1>
    <NavBar currentUser={currentUser}/>
    {/* <Search searchTerm={searchTerm} onSearchChange={setSearchTerm}/> */}
    <Switch >
      <Route exact path="/packs">
        <PackContainer  currentUser={currentUser} packs={packs} />
      </Route>
      <Route  exact path="/">
        <Login handleLoginUser={handleLoginUser}/>
      </Route>
      <Route exact path={`/users/${currentUser.id}`}>
        <UserProfile 
          currentUser={currentUser} 
          // handleAddDownload={handleAddDownload} 
          onUpdateUser={updateUser} 
          setPurchase={setPurchase}
        />
      </Route>
      <Route exact path={`/createpack`}>
        <CreatePack currentUser={currentUser} onAddPack={handleAddPack} packs={packs}/>
      </Route>
      {/* <Route >
        <EditProfile currentUser={currentUser} />
      </Route> */}
    </Switch>
  
    </>
  );
}

export default App;
