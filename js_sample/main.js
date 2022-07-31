const BASE_URL = 'https://jsonplaceholder.typicode.com'

const listWrapper = document.querySelector('.wrapper_user-list')
const button = document.querySelector('.wrapper_btn')
const DOM = {
  listWrapper,
  button,
}

const fetchUsers = async () => {
  const { data } = await axios.get(`${BASE_URL}/users`)
  return data
}

const insertUserList = (userList, wrapper) => {
  userList.forEach((user) => {
    const li = document.createElement('li')
    li.textContent = user.name
    wrapper.appendChild(li)
  })
}

;(async () => {
  const users = await fetchUsers()
  DOM.button.addEventListener('click', () =>
    insertUserList(users, DOM.listWrapper)
  )
})()
