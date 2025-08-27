import './App.css'
import {UseFetch} from "./hooks/UseFetch.tsx";

function App() {
  const users= UseFetch<{id:number, name:string}[]>('https://jsonplaceholder.typicode.com/users')
  return (
    <>{
      users && users.map(user => <div key={user.id}>{user.name}</div>)
    }
    </>
  )
}

export default App
