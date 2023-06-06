window.addEventListener('load', () => {
  const form = document.querySelector('#new-task-form')
  const input = document.querySelector('#new-task-input')
  const listElement = document.querySelector('#tasks')

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    //console.log('ok')

    const task = input.value

    if(!task) {
      alert('Please fill out the task')
      return
    } 

    const taskElement = document.createElement('div')
    taskElement.classList.add('task')

    const taskContentElement = document.createElement('div')
    taskContentElement.classList.add('content')

    taskElement.appendChild(taskContentElement)

    const taskInputElement = document.createElement('input')
    taskInputElement.classList.add('text')
    taskInputElement.type = 'text'
    taskInputElement.value = task
    taskInputElement.setAttribute('readonly', 'readonly')

    taskContentElement.appendChild(taskInputElement)
    
    const taskActionsElements = document.createElement('div')
    taskActionsElements.classList.add('actions')

    const taskEditElement = document.createElement('button')
    taskEditElement.classList.add('edit')
    taskEditElement.innerHTML = 'Edit'

    const taskDeleteElement = document.createElement('button')
    taskDeleteElement.classList.add('delete')
    taskDeleteElement.innerHTML = 'Delete'

    taskActionsElements.appendChild(taskEditElement)
    taskActionsElements.appendChild(taskDeleteElement)

    taskElement.appendChild(taskActionsElements)

    listElement.appendChild(taskElement)

    input.value = ''

    taskEditElement.addEventListener('click', () => {
      // taskInputElement.removeAttribute('readonly')
      // taskInputElement.focus()
      // taskEditElement.innerText = 'Save'

      if(taskEditElement.innerText.toLowerCase() == 'edit') {
        taskInputElement.removeAttribute('readonly')
        taskInputElement.focus()
        taskEditElement.innerText = 'Save'
      } else {
        taskInputElement.setAttribute('readonly', 'readonly')
        taskEditElement.innerText = 'Edit'
      }
    })

    taskDeleteElement.addEventListener('click', () => {
      listElement.removeChild(taskElement)
    })
  })
})