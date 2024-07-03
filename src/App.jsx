import { useState } from 'react'
import './App.css'
import Header from './components/header/index.jsx'
import Sidebar from './components/sidebar/index.jsx'
import Main from './components/main/index.jsx'

function App() {
  const [user, setUser] = useState({
    displayName: 'John Doe',
    email: 'oqibz@example.com',
    emailVerified: true,
    phoneNumber: null,
    photoURL: "https://lh3.googleusercontent.com/a-/AOh14Gj2yL-V3c7",
  })

  return (
    <div className='App'>
      <Header userPhoto={user.photoURL}/>
      <div className='app-main'>
        <Sidebar/>
        <Main/>
        {/* auth=true
        sidebar
        filesView
        sideIcons
        */}
        {/* no auth: log in */}
      </div>
      
    </div>
  );
}


export default App;