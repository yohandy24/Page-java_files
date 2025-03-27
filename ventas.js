fetch("productos.json")
.then(responsive => responsive.json())
.then(data => {
    let barra = document.querySelector(".input");
    let submit = document.querySelector(".submit");
    const article = document.querySelector(".article")
    const buscador__1 = document.querySelector(".buscador-1") 
    const  foto = document.querySelector(".foto")
    const  urlParams = new URLSearchParams(window.location.search)
    const  id = parseInt( urlParams.get("id"));
    const desamoni = data.monitores.find(item =>item.id === id)
    const imgt__1 = document.createElement("div")
    imgt__1.classList.add(`imgt__1`)
    imgt__1.innerHTML = `<img src="${desamoni.photo}">`
    foto.appendChild(imgt__1)
   // tilte.innerHTML = `${desamoni.nombre}` no se puede porque el innerhtml solo afecta al body 
   document.title = `${desamoni.nombre}`
    // esta es la parte de la foto




    const descripción = document.querySelector(".descripción")
    const desa = document.createElement("div")
    desa.classList.add(`desa`)
    desa.innerHTML = `<h3>${desamoni.nombre}</h3>0.0  <a href="">Escribe una Opinión</a> <h5>Descripción </h5>
     <p> ${desamoni.descripción}</p><strong>5 Años de Garantia.</strong><br><br><a href=""> leer mas </a>`

    descripción.appendChild(desa)
    //esta es la parte de desarrollo 


    const precio__1 = document.querySelector(".precio__1")
    precio__1.innerHTML = `RD$ ${desamoni.precio}`

    function buscar(){

        const escrito = barra.value.toLowerCase()
        buscador__1.innerHTML = ""
        const resultados = data.monitores.filter(item =>
        item.nombre.toLowerCase().includes(escrito) ||
        item.marca.toLowerCase().includes(escrito))

        resultados.forEach(producto =>{

        const productodiv = document.createElement("div");
        productodiv.classList.add('producto');
        productodiv.innerHTML = `<div class="producto__${producto.id}">
        <img src="${producto.photo}">
        <p><b>Nombre:</b> ${producto.nombre}</p>
        <p><b>Precio:</b> ${producto.precio}</p>
        <a href="producto.html?id=${producto.id}"><strong>comprar</a>

        </div>
        `;

        buscador__1.appendChild(productodiv);
        buscador__1.classList.add(`b-1`)
    })
        
      
    }
    submit.addEventListener("click",buscar)

    barra.addEventListener("keydown",function(event){
        if(event.key === "Enter"){
            buscar();
        }
       

    })
    article.addEventListener("click",()=>{
        buscador__1.classList.remove(`b-1`)
        buscador__1.innerHTML = ""


    })

   
})

const nav__left = document.getElementById("nav__left")
const cerrar = document.querySelector(".x")
const bar = document.querySelector(".bar")

cerrar.addEventListener("click",()=> {
    nav__left.classList.remove("active")

})

bar.addEventListener("click",()=> {
    nav__left.classList.add("active")
})


