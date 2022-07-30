import { fetchUsers } from './scripts/api.js'
import { insertUserData } from './scripts/user.js'
;(async () => {
  const users = await fetchUsers()
  await insertUserData(users)
})()
