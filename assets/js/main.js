/* MODDAL */

const hotspot = document.querySelector('.hotspot')
const modal = document.getElementById('modal')
const closeBtn = document.querySelector('.close-modal')

hotspot.addEventListener('click', () => {
  modal.classList.remove('hidden')
})

closeBtn.addEventListener('click', () => {
  modal.classList.add('hidden')
})

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.add('hidden')
  }
})
