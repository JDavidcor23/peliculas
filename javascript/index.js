let prueba = document.getElementById("peliculas");

let fragment = document.createDocumentFragment();

let peliculas =[
    {portada:"https://i.ibb.co/rytscWn/Liga.jpg", titulo:"Liga de la justisia", links:"./liga.html"},

    {portada:"https://i.ibb.co/VT9ZxJH/Avengers.png", titulo:"Los Vengadores", links:"./vengadores.html"},

    {portada:"https://i.ibb.co/JR9v7qV/Batman.jpg", titulo:"Batman: el caballero de la noche", links:"./Batman.html"},

    {portada:"https://i.ibb.co/98S3cQV/Harry.jpg", titulo:"Harry Potter y el prisionero de Azkaban", links:"./Harry.html"},
]
peliculas.forEach(function(pelicula){
    let imagenes = document.createElement("img");
    imagenes.src = pelicula.portada;
    let parrafo = document.createElement("p");
    parrafo.textContent = pelicula.titulo;
    let texto = document.createElement("a");
    texto.href = pelicula.links;
    fragment.appendChild(texto)
    texto.appendChild(imagenes)
    texto.appendChild(parrafo)
})
prueba.appendChild(fragment);
