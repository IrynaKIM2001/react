import { Outlet } from 'react-router';
import './App.css'
import {Menu} from "./Menu/Menu.tsx";

function App() {
  return (
    <>
      <Menu/>

      <Outlet/>
    </>
  )
}

export default App
