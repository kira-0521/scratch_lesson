export const insertUserData = (users) => {
  const wrapper = document.querySelector('.wrapper_user-list')
  const usernameList = users.map((user) => user.name)
  usernameList.forEach((username) => {
    const insertNode = document.createTextNode(`
      <li class='wrapper_username'>${username}</li>
    `)
    wrapper.appendChild(insertNode)
  })
}
