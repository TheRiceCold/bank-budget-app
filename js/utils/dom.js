const root = document.body

const getAll = query => 
  Array.from(root.querySelectorAll(query))

const get = query =>
  root.querySelector(query)

const create = node => 
  document.createElement(node)

const click = (query, callback) =>
  get(query).addEventListener('click', callback)

const addClass = (target, className) =>
  target.classList.add(className)

const subClass = (target, className) => 
  target.classList.remove(className)

export { root, get, getAll, create, click, addClass, subClass }
