'use strict';

const images = [
    { 'id': '1', 'url': './imagens/img-01.jpg' },
    { 'id': '2', 'url': './imagens/img-02.jpg' },
    { 'id': '3', 'url': './imagens/img-03.jpg' },
    { 'id': '4', 'url': './imagens/img-04.jpg' },
    { 'id': '5', 'url': './imagens/img-05.jpg' },
    { 'id': '6', 'url': './imagens/img-06.jpg' },
    { 'id': '7', 'url': './imagens/img-07.jpg' },
    { 'id': '8', 'url': './imagens/img-08.jpg' },
]

const containerItems = document.querySelector('#containerItems')
const loadImages = (images, container) => {
    images.forEach(image => {
        container.innerHTML += `
        <div class='item'>
         <img src='${image.url}'>
         </div>
        `
    })
}

loadImages(images, containerItems)

let items = document.querySelectorAll('.item')

const previous = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
}

const next = () => {
    const lastItem = items[items.length - 1];
    containerItems.insertBefore(lastItem, items[0]);
    items = document.querySelectorAll('.item');
}

document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next)