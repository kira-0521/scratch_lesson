import { useState, useEffect } from 'react'
import axios from 'axios'

import './App.css'

function App() {
  const [users, setUsers] = useState([])

  const BASE_URL = 'https://jsonplaceholder.typicode.com'

  const fetchUsers = async () => {
    const { data } = await axios.get(`${BASE_URL}/users`)
    return data
  }

  useEffect(() => {
    fetchUsers().then((users) => {
      setUsers(users)
    })
  }, [])

  return (
    <div className='App'>
      <h1 class='title'>scratch 開発</h1>
      <div class='wrapper'>
        <h2 class='wrapper_title'>ユーザーリスト</h2>
        <button
          onClick={() => {
            console.log('click')
          }}>
          ボタン
        </button>
        <ul class='wrapper_user-list'>
          {users.map((user) => (
            <li>{user.name}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
