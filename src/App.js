import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import {useState} from 'react';
import { Drawer } from '@mui/material';
import {useRoutes} from 'react-router-dom';
import {routes} from './routes'



function App() {

  const [menuVisible, setMenuVisible]= useState(false);

  const element = useRoutes(routes)

  return (
    <>
    <Header onOpenMenu={()=> setMenuVisible(true)} />
    <Drawer
        anchor='left'
        open={menuVisible}
        onClose={()=> setMenuVisible(false)}>

    <NavBar /> 
    </Drawer>

    <main className="App">
      {element}
    </main>
    </>
  );
}

export default App;
