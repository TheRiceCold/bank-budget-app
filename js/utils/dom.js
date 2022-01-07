const root = document.body

const get = query => root.querySelector(query)

const create = node => document.createElement(node)

const getAll = query => Array.from(root.querySelectorAll(query))

const addClass = (node, className) => node.classList.add(className)

const delClass = (node, className) => node.classList.remove(className)

const changeClass = (node, from, to) => node.classList.replace(from, to)

export { 
  get, 
  root, 
  getAll, 
  create, 
  addClass, 
  delClass, 
  changeClass
}
