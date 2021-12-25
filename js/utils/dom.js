export const root = document.body

export const getSidebarMenus = () => 
  Array.from(document.querySelectorAll('.sidebar a'))

export const switchButtons = () => {
  const container = root.querySelector('.login-main')
  const signInBtn = root.querySelector('#sign-in-btn')
  const signUpBtn = root.querySelector('#sign-up-btn')
  signUpBtn.addEventListener('click', () => container.classList.add("sign-up-mode"))
  signInBtn.addEventListener('click', () => container.classList.remove("sign-up-mode"))
}
