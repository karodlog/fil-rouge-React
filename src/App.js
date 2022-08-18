import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import {useState} from 'react';


function App() {

  const [menuVisible, setMenuVisible]= useState(false);


  return (
    <>
    <Header onOpenMenu={()=> setMenuVisible(true)} />
    <NavBar isVisible={menuVisible} 
    onCloseMenu={()=>setMenuVisible(false)}/>
    <main className="App">
      
    </main>
    </>
  );
}

export default App;
