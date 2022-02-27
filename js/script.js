const button = document.getElementById('button')
const image = document.getElementById('img')
const url = 'http://aws.random.cat/meow'

const fetchHandler = async () => {
    try {
        const response = await fetch(url)
        const data = await response.json()
        image.src = data.file
    } catch (error) {
        console.log(error)
    }
}

button.addEventListener('click', () => fetchHandler())