const root = document.body

const getAll = query => 
  Array.from(root.querySelectorAll(query))

const get = query =>
  root.querySelector(query)

const create = node => 
  document.createElement(node)

const click = (node, callback) =>
  node.addEventListener('click', callback)

const addClass = (node, className) =>
  node.classList.add(className)

const delClass = (node, className) => 
  node.classList.remove(className)

const changeClass = (node, from, to) =>
  node.classList.replace(from, to)

export { root, get, getAll, create, click, addClass, delClass, changeClass }
