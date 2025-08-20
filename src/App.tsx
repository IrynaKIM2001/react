import './App.css'
import {Outlet} from "react-router/internal/react-server-client";
import {Menu} from "./Components/Menu/Menu.tsx";

function App() {
  return (
    <>
      <Menu/>
      <Outlet/>
    </>
  )
}

export default App
