import { BASE_URL } from './const.js'

const apiInstance = axios.create({
  baseURL: BASE_URL,
})

export const fetchUsers = async () => {
  const { data } = await apiInstance.get('users')
  return data
}
