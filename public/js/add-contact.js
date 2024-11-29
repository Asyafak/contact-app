import { createInput, addDetail, addListDetail, listInput } from './src/createInput.js'

const main = document.querySelector('.main')

listInput.forEach(data => {
  const result = createInput(data.type)
  
  main.appendChild(result)
})

// Button Plus create Minus Start
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
  const parents = document.querySelectorAll('.parent')

  if (target.classList.contains('minus')) {
    target.parentElement.parentElement.remove()
  }
  if (target.classList.contains('fa-minus')) {
    target.parentElement.parentElement.parentElement.remove()
  }

  if (target.classList.contains('detail')) {
    target.parentElement.nextElementSibling.classList.add('detail-active')
  }
  if (target.id === 'back') {
    target.parentElement.parentElement.classList.remove('detail-active')
  }
  if (target.classList.contains('fa-chevron-left')) {
    target.parentElement.parentElement.parentElement.classList.remove('detail-active')
  }
  if (target.hasAttribute('name')){
    target.parentElement.parentElement.parentElement.previousElementSibling.children[1].innerHTML = target.dataset.name
  }

  parents.forEach( (parent, i) => {
    if (parent.children[1] && i === 1 && !parent.children[1].firstElementChild.firstElementChild.hasAttribute('required')) {
      parent.children[1].firstElementChild.firstElementChild.setAttribute('required', '')
    }

    if (parent.children.length > 1) {
      if (parent.firstElementChild.firstElementChild.classList.contains('plus') && i === 0) {
        parent.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.classList.add('hidden')
      }
      parent.firstElementChild.firstElementChild.classList.add('hidden')
      parent.firstElementChild.children[1].classList.remove('hidden')
    } else {
      if (parent.firstElementChild.firstElementChild.classList.contains('plus') && i === 0) {
        parent.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.classList.remove('hidden')
      }
      parent.firstElementChild.firstElementChild.classList.remove('hidden')
      parent.firstElementChild.children[1].classList.add('hidden')
    }

  })

})
// Button Plus, min, back End

const buttonSubmit = document.getElementById('button-submit')
buttonSubmit.addEventListener('click', function() {
  if (main.children[2].children.length === 1) {
    main.parentElement.setAttribute('method', '')
  
    const newInput = document.createElement('div')
    newInput.classList.add('w-full', 'flex')
    
    let content = ``
  
    const buttonType = main.children[2].firstElementChild.dataset.type

    main.children[2].firstElementChild.firstElementChild.classList.add('hidden')
    main.children[2].firstElementChild.children[1].classList.remove('hidden')
    main.children[2].firstElementChild.children[1].setAttribute('required', '')
  
    const data = listInput.find( input => input.type === buttonType)
    content += addDetail(data)
    
    content += addListDetail(data)
  
    newInput.innerHTML = content
    main.children[2].appendChild(newInput)
  } else {
    main.parentElement.setAttribute('method', 'post')
    buttonSubmit.setAttribute('type', 'submit')
  }
})