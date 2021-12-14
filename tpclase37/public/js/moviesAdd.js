console.log('vinculacion exitosa');

const h1 = document.querySelector('.moviesAddTitulo')
const section = document.querySelector('#formulario')
const article = document.querySelector('article')

h1.innerText = 'AGREGAR PELÍCULAS'
h1.classList.add('titulo')
article.classList.add('fondoTransparente')
section.classList.add('fondoCRUD')