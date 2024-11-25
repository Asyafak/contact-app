const createInput = (type) => {
  const newInput = document.createElement('div')
  newInput.classList.add('p-4', 'flex', 'gap-2', 'flex-wrap')

  const contactInput = `
    <div class="flex w-full gap-4 cursor-pointer">
      <h1 class="plus w-full appearance-none border-b-2 border-secondary focus:outline-none">${type}</h1>
      <div class="plus flex justify-center items-center h-8 w-8 border rounded-full">
        <i class="fa-solid fa-plus text-green-500"></i>
      </div>
    </div>
  `
  
  newInput.innerHTML = contactInput
  return newInput
}

export { createInput}