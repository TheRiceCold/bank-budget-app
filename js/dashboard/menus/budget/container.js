import MyHTML from '../../../utils/MyHTML.js'
import { form } from './form.js'

const balance = new MyHTML({
  className: 'topbar',
  inner: `
  <p class="text">Your current balance</p>
  <p class="amount_holder">₱500</p>`
}).string

export const container = new MyHTML({
  className: 'container',
  inner: [balance, form]
}).string
