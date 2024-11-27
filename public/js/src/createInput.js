const createInput = (type) => {
  const newInput = document.createElement('div')
  newInput.classList.add('p-4', 'flex', 'gap-2', 'flex-wrap')

  const contactInput = `
    <div data-type="${type}" class="flex w-full gap-4">
      <button type="button" class="plus w-full border-b-2 border-secondary text-start text-secondary cursor-pointer">${type}</h1>
      <button type="button" class="plus flex justify-center items-center h-8 w-8 border rounded-full cursor-pointer">
        <i class="fa-solid fa-plus text-green-500"></i>
      </button>
    </div>
  `
  
  newInput.innerHTML = contactInput
  return newInput
}

const listInput = [
  {
    type: 'Work'
  },
  {
    type: 'Phone',
    title: 'SELEC PHONE NUMBER TYPE',
    list: ['mobile', 'home', 'work', 'main', 'work Fax', 'home fax', 'pager', 'other']
  },
  {
    type: 'Email',
    title: 'select email address type',
    list: ['home', 'work', 'main', 'other']
  },
  {
    type: 'Address',
    title: 'select address type',
    list: ['home', 'work', 'school', 'parent', 'other']
  },
  {
    type: 'Event',
    title: 'select event type',
    list: ['birthday', 'annyversary', 'other']
  },
  {
    type: 'Relationship',
    title: 'select address type',
    list: ['Parent', 'Mother', 'Father', 'brother', 'sister', 'spouse', 'child', 'friend', 'relative', 'domestic partner', 'partner', 'manager', 'assistant', 'reference']
  }
]

const addDetail = (data) => {
  if (!data.list) {
    return `
      <div class="flex w-full gap-4">
        <div class="flex flex-col gap-2 w-full">
          <input type="text" placeholder="" class="w-full appearance-none focus:outline-none border-b-2 border-b-secondary focus:border-b-primary">
          <input type="text" placeholder="" class="w-full appearance-none focus:outline-none border-b-2 border-b-secondary focus:border-b-primary">
          <input type="text" placeholder="" class="w-full appearance-none focus:outline-none border-b-2 border-b-secondary focus:border-b-primary">
        </div>
        <button type="button" class="minus flex justify-center items-center cursor-pointer h-8 w-8 border rounded-full">
          <i class="fa-solid fa-minus text-red-500"></i>
        </button>
      </div>
    ` 
  }
  return `
    <div class="flex w-full gap-4">
      <input type="text" placeholder="" class="w-full appearance-none focus:outline-none border-b-2 border-b-secondary focus:border-b-primary">
      <button type="button" data-type="${data.type}" class="detail border-b-2 border-secondary px-4 cursor-pointer capitalize">${data.list[0]}</button>
      <button type="button" class="minus flex justify-center items-center cursor-pointer h-8 w-10 border rounded-full">
        <i class="fa-solid fa-minus text-red-500"></i>
      </button>
    </div>
  `
}

const addListDetail = (data) => {
  let result = `
    <div class="fixed w-screen h-screen bg-white top-0 right-0 translate-x-full transition ease-in-out duration-300 overflow-y-scroll">
      <div class="head fixed px-4 flex w-full gap-4 items-center shadow">
        <button type="button" id="back" class="px-4 flex justify-center items-center cursor-pointer h-8 w-8 border rounded-full">
          <i for="back" class="fa-solid fa-chevron-left text-primary"></i>
        </button>
        <h1 class="uppercase font-bold text-xl py-4">${data.title}</h1>
      </div>
      <ul class="pt-16">
  `

  data.list.forEach( (type, i) => {
    if (i === 0) {
      result += `
      <li class="flex p-4 w-full gap-2 items-center">
        <input type="radio" name="${data.type}" id="${type}" checked class="mx-4 block bg-red-400 cursor-pointer">
        <label for="${type}" class="font-semibold text-xl w-full pb-2 border-b-2 border-secondary cursor-pointer">${type}</label>
      </li>
      `
      return
    }
    result += `
      <li class="flex p-4 w-full gap-2 items-center">
        <input type="radio" name="${data.type}" id="${type}" class="mx-4 block bg-red-400 cursor-pointer">
        <label for="${type}" class="font-semibold text-xl w-full pb-2 border-b-2 border-secondary cursor-pointer capitalize">${type}</label>
      </li>
      `
  })

  result += `</ul></div>`

  return result
}

export { createInput, addDetail, addListDetail, listInput }