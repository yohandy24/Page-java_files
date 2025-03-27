let barra = document.querySelector(".input");
let submit = document.querySelector(".submit");
let div = document.querySelector(".superofertas-1");
const article = document.querySelector(".article")


fetch("productos.json")
 .then(response => response.json())
 .then(data => {


    const buscador__1 = document.querySelector(".buscador-1")
    const productosdiv = document.querySelector(".productos")
        data.monitores.forEach(producto => {
        const productodiv = document.createElement("div");
        productodiv.classList.add('producto');
        productodiv.innerHTML = `<div class="producto__${producto.id}">
        <img src="${producto.photo}">
        <p><b>Nombre:</b> ${producto.nombre}</p>
        <p><b>Precio:</b> ${producto.precio}</p>
        <a href="producto.html?id=${producto.id}"><strong>comprar</a>

        </div>
        `;
        productosdiv.appendChild(productodiv);

  
        
    });

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





 

.catch(error => console.error ("error puto",error))

 


/*esto es para el nav responsive 770px*/ 

const barra__770px = document.querySelector(".barra__770px")



/*hacer cerrar el nav*/
const nav__left = document.getElementById("nav__left")
const cerrar = document.querySelector(".x")
const bar = document.querySelector(".bar")
const active__nav = document.querySelector("#nav__left.active")

cerrar.addEventListener("click",()=> {
    nav__left.classList.remove("active")

})

bar.addEventListener("click",()=> {
    nav__left.classList.add("active")
})


active__nav.addEventListener("click",()=>{
    nav__left.classList.remove("active")

})

