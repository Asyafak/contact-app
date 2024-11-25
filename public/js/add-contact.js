import { createInput } from './src/createInput.js'

const listInput = [ 'Work', 'Phone', 'Email', 'Address', 'Event', 'Relationship']
  const main = document.querySelector('.main')

  listInput.forEach(type => {
    const result = createInput(type)
    
    main.appendChild(result)
  })

  // Button Plus and Minus Start
  const pluses = document.querySelectorAll('.plus')

  pluses.forEach(p => {
    p.addEventListener('click', ({target}) => {
      const content = document.createElement('div')
      content.classList.add('flex', 'w-full', 'gap-4')
      content.innerHTML = `
        <input type="text" placeholder="" class="w-full appearance-none focus:outline-none border-b-2 border-b-secondary focus:border-b-primary">
        <div class="detail border-b-2 border-secondary px-4 cursor-pointer">Home</div>
        <div class="minus flex justify-center items-center cursor-pointer h-8 w-10 border rounded-full">
          <i class="fa-solid fa-minus text-red-500"></i>
        </div>
      `
      
      const opsi = document.createElement('div')
      opsi.classList.add('absolute', 'w-screen', 'h-screen', 'bg-white', 'top-0', 'right-0', 'translate-x-full', 'transition', 'ease-in-out', 'duration-300')
      opsi.innerHTML = `
        <div class="head px-4 flex w-full gap-4 items-center shadow">
          <div class="back px-4 flex justify-center items-center cursor-pointer h-8 w-8 border rounded-full">
            <i class="fa-solid fa-chevron-left text-primary"></i>
          </div>
          <h1 class="font-bold text-xl py-6 w-full">SELECT PHONE NUMBER TYPE</h1>
        </div>
        <div class="flex p-4 w-full gap-4 items-center">
          <input type="checkbox" name="Mobile" id="Mobile" class="mb-4 block bg-red-400 cursor-pointer">
          <label for="Mobile" class="font-semibold text-xl w-full pb-2 border-b-2 border-secondary cursor-pointer">Mobile</label>
        </div>
      `

      if (target.classList.contains('fa-plus')) {
        target.parentElement.parentElement.parentElement.appendChild(content)
        target.parentElement.parentElement.parentElement.appendChild(opsi)
        return
      }

      target.parentElement.parentElement.appendChild(content)
      target.parentElement.parentElement.appendChild(opsi)
    })
  })

  // Button Plus, min, back start
  main.addEventListener('click', ({target}) => {

    if (target.classList.contains('minus')) {
      target.parentElement.remove()
      // target.parentElement.nextElementSibling.remove()
      console.log(target.parentElement)
      console.log(target.parentElement.nextElementSibling)
    }
    if (target.classList.contains('fa-minus')) {
      target.parentElement.parentElement.remove()
      // target.parentElement.nextElementSibling.remove()
      console.log(target.parentElement.parentElement)
      console.log(target.parentElement.parentElement.nextElementSibling)
    }

    if (target.classList.contains('detail')) {
      target.parentElement.nextElementSibling.classList.add('detail-active')
    }
    if (target.classList.contains('back')) {
      target.parentElement.parentElement.classList.remove('detail-active')
    }
    if (target.classList.contains('fa-chevron-left')) {
        target.parentElement.parentElement.parentElement.classList.remove('detail-active')
    }
    
  })
  // Button Plus, min, back End
