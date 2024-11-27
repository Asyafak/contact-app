import { createInput, addDetail, addListDetail, listInput } from './src/createInput.js'

const main = document.querySelector('.main')

listInput.forEach(data => {
  const result = createInput(data.type)
  
  main.appendChild(result)
})

// Button Plus and Minus Start
const pluses = document.querySelectorAll('.plus')

pluses.forEach(p => {
  p.addEventListener('click', ({target}) => {
    const newInput = document.createElement('div')
    newInput.classList.add('w-full', 'flex')
    
    let content = ``

    if (target.classList.contains('fa-plus')) {
      const buttonType = target.parentElement.parentElement.dataset.type
      const data = listInput.find( input => input.type === buttonType)
      content += addDetail(data)
  
      if (data.title) {
        content += addListDetail(data)
      }
    } else {
      const buttonType = target.parentElement.dataset.type
      const data = listInput.find( input => input.type === buttonType)
      content += addDetail(data)

      if (data.title) {
        content += addListDetail(data)
      }
    }

    newInput.innerHTML = content
    
    if (target.classList.contains('fa-plus')) {
      target.parentElement.parentElement.parentElement.appendChild(newInput)
      return
    }

    target.parentElement.parentElement.appendChild(newInput)
  })
})

// Button Plus, min, back start

main.addEventListener('click', ({target}) => {

  if (target.classList.contains('minus')) {
    target.parentElement.parentElement.remove()
  }
  if (target.classList.contains('fa-minus')) {
    target.parentElement.parentElement.parentElement.remove()
  }

  if (target.classList.contains('detail')) {
    target.parentElement.nextElementSibling.classList.add('detail-active')
    const [...children] = target.parentElement.nextElementSibling.lastChild.children
  }
  if (target.id === 'back') {
    target.parentElement.parentElement.classList.remove('detail-active')
  }
  if (target.classList.contains('fa-chevron-left')) {
    target.parentElement.parentElement.parentElement.classList.remove('detail-active')
  }
  if (target.hasAttribute('name')){
    target.parentElement.parentElement.parentElement.previousElementSibling.children[1].innerHTML = target.id
  }

})
// Button Plus, min, back End