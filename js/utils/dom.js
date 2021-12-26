export const root = document.body

export const getSidebarMenus = () => 
  Array.from(root.querySelectorAll('.sidebar a'))

export const switchButtons = () => {
  const container = root.querySelector('#loginPage')
  const signInBtn = root.querySelector('#sign-in-btn')
  const signUpBtn = root.querySelector('#sign-up-btn')
  signUpBtn.addEventListener('click', () => container.classList.add("sign-up-mode"))
  signInBtn.addEventListener('click', () => container.classList.remove("sign-up-mode"))
}
