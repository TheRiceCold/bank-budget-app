export const root = document.body

export const getQueryAll = query => 
  Array.from(root.querySelectorAll(query))

export const getQuery = query =>
  root.querySelector(query)
