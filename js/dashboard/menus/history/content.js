import MyHTML from '../../../utils/MyHTML.js'

const cardContent = (card, icon) => {
  const { 
    type, amount,
    date, email, 
    receiver
  } = card

  const content = `
    <div class="card" data-filter="${type}">
      <i class="${icon}"></i>
      <div class="content">
        <h3>${type} ₱${amount}</h3>
        <p>Date: ${date}</p>
        <p>Email: ${email}</p>
        ${type === 'transfer' ? `<p>Receiver: ${receiver}</p>` : ''}
      </div>
    </div>`
  return content
}

const cards = new MyHTML({ id: 'cards' }).string

const getButtons = () => {
  const buttons = ['All', 'Deposit', 'Withdraw', 'Transfer']

  return buttons.map((button, i) => {
    const isActive = (i === 0) ? ' active' : ''
    return `<button class="btn${isActive}">${button}</button>`
  })
}

const buttons = new MyHTML({ id: 'buttons',
  inner: getButtons()
}).string


export { buttons, cards, cardContent }
