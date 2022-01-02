const cardContent = (card, icon) => {
  const { 
    date, email,
    time, type, amount
  } = card

  const info = type === 'transfer'
    ? `<p>Date: ${date}</p>
      <p>Email: ${email}</p>`
    : `<p>Time: ${time}</p><p>Date: ${date}</p>`

  const content = `
    <div class="card" data-filter="${type}">
      <i class="${icon}"></i>
      <div class="content">
        <h3>${type} ₱${amount}</h3>
        ${info}
      </div>
    </div>`

  return content
}

export { cardContent }
