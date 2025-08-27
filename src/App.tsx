import './App.css'
import {ComponentA} from "./Component/ComponentA/ComponentA.tsx";
import {ComponentB} from "./Component/ComponentB/ComponentB.tsx";
import {MyContext} from "./context/MyContext.tsx";
import {useState} from "react";

function App() {
  const [themeColor, setThemeColor] = useState<string>('light');
  return (
    <div>
      <MyContext.Provider value={{
        theme: themeColor,
        changeTheme: (theme: string) => {
          setThemeColor(theme)
        }
      }}>
          <ComponentA/>
          <ComponentB/>
      </MyContext.Provider>
    </div>
  )
}

export default App
