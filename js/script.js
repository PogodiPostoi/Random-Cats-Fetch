const button = document.getElementById('button')
const image = document.getElementById('img')
const url = 'https://aws.random.cat/meow'
const menu = document.getElementById('menu__toggle')

// Функция по получению картинок из url
const fetchHandler = async(url) => {
    console.log(image.src)
    try {
        const response = await fetch(url)
        const json = await response.json()
        image.src = json.file
    } catch (error) {
        console.log(error)
        alert('К сожалению, котиков не будет :(')
    }
}

button.addEventListener('click', () => {
    image.src = 'img/preloadCat.gif'
    let isLoaded = image.complete
    if (isLoaded) {
        fetchHandler(url)
    }
})


// Бургер-меню. Запрет на скролл при активном меню
menu.addEventListener('click', () =>  document.body.classList.toggle('noScroll'))
