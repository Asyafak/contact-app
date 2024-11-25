const createInput = () => {
  const newInput = document.createElement('div')
  newInput.classList.add('p-4 flex gap-2 flex-wrap')

  const contactInput = `
    <div class="flex w-full gap-4">
      <h1 class="w-full appearance-none focus:outline-none">Work</h1>
      <button id="plus" class="flex justify-center items-center h-8 w-8 border rounded-full">
        <i class="fa-solid fa-plus text-green-500"></i>
      </button>
    </div>
    <div class="flex w-full gap-4">
      <input type="text" placeholder="" class="w-full appearance-none focus:outline-none border-b-2 border-b-secondary focus:border-b-primary">
      <button class="border-b-2 border-secondary px-4">Home</button>
      <button id="minus" class="flex justify-center items-center h-8 w-10 border rounded-full">
        <i class="fa-solid fa-minus text-red-500"></i>
      </button>
    </div>
  `
  
  newInput.innerHTML = contactInput
  return newInput
}

// const mainInput = () => {
//   const newInput = document.createElement('div')
//   const mianInput = `
  
//   `
// }

console.log(createInput())

module.exports = { createInput }