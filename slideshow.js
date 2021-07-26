

const images = [
    {'id': '1' , 'url' : './_Imagens/chrono.jpg'},
    {'id': '2' , 'url' : './_Imagens/inuyasha.jpg'},
    {'id': '3' , 'url' : './_Imagens/ippo.png'},
    {'id': '4' , 'url' : './_Imagens/tenchi.jpg'},
    {'id': '5' , 'url' : './_Imagens/tenjhotenge.jpg'},
    {'id': '6' , 'url' : './_Imagens/yuyuhakusho.jpg'},
]

const container = document.querySelector('div.container-items')

const loadImages = (images, container) => {

    images.forEach(image => {
        container.innerHTML += `
                                <div class="item">
                                    <img src="${image.url}">
                                </div>
        `
    })
}

loadImages(images , container)

let items = document.querySelectorAll('.item')

const previous = () => {
    container.appendChild(items[0])
    items = document.querySelectorAll('.item')
}
const next = () => {
    const lastItem = items[items.length -1]
    container.insertBefore(lastItem , items[0])
    items = document.querySelectorAll('.item')
}


document.querySelector('#previous').addEventListener('click' , previous)
document.querySelector('#next').addEventListener('click' , next)
