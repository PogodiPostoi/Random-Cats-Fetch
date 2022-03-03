const button = document.getElementById('button')
const image = document.getElementById('img')
const url = 'https://aws.random.cat/meow'

const fetchHandler = async(url) => {
    try {
        const response = await fetch(url)
        const json = await response.json()
        image.src = json.file
    } catch (error) {
        console.log(error)
        alert('К сожалению, котиков не будет :(')
    }
}

button.addEventListener('click', () => fetchHandler(url))

/* burger menu
const burgerCheckbox = document.getElementById('burger-checkbox')
const body = document.body

const burgerCheckboxChecked = (checkbox, element) => {
    if (checkbox.checked = true) {
        checkbox.checked = false
        element.style.overflow = "hidden"
    } else if (checkbox.checked = false) {
        checkbox.checked = true
        element.style.overflow = "auto"
    } 
}

burgerCheckbox.addEventListener('click', () => burgerCheckboxChecked(burgerCheckbox, body))
*/