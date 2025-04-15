const agregar = document.querySelector(".yellow")

const blue = document.querySelector(".blue")
const cantidad = document.querySelector(".cantidad__")
let carritotext = document.querySelectorAll(".carrito__texto")
const nav__right__below = document.querySelector(".nav__right-below")
let compras = []
pusharticulo ()
fetch("productos.json")
.then(responsive => responsive.json())
.then(data => {
    let barra = document.querySelector(".input");
    let submit = document.querySelector(".submit");
    const article = document.querySelector(".article")
    const buscador__1 = document.querySelector(".buscador-1") 
    const  foto = document.querySelector(".foto")
    
   
  
    
 
    /*conseguir el id del sitio jjj */
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
        if (escrito.length > 0) {
            

    
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
        /* anadir precio en el carrito */ 
        agregar.addEventListener("click", ()=>{
          
                let cantidad1 = cantidad.value
                var multiplicación = parseInt(cantidad1) * desamoni.precio
                let articulo = {"id": desamoni.id, "cantidad":cantidad1, "photo":desamoni.photo}
                

                compras.forEach(art =>{
                    if (art.id == articulo.id){
                        console.log("el articulo ya existe")

                    }
                    else{
                        compras.push(articulo)
                        pusharticulo()

                    }
                })
    


                    return articulo
        
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
const body = document.querySelector(".article")
let carritos = document.querySelector(".carrito")
const nav__right = document.querySelector("#nav__right")
const x2 = document.querySelector(".x-2")
const barra__770px =document.querySelector(".barra__770px")
const nav_1 = document.querySelector(".nav-1")

let monster = carritos.innerHTML
/*agregar y quitar barras laterales*/


   carritos.addEventListener("click",()=>{
    nav__right.classList.add("active")
   })

x2.addEventListener("click",()=>{
    nav__right.classList.remove("active")
})
body.addEventListener("click",()=>{
    nav__right.classList.remove("active")
    nav__left.classList.remove("active")

})

document.addEventListener("click",()=>{
   if(nav__left.classList.contains("active")){
    nav__right.classList.remove("active")
    
   }



})

/* agregar el pinche carrito culero que me tiene jarto */ 
window.addEventListener("resize",()=>{
    if(window.matchMedia("(max-width: 770px)").matches){
        barra__770px.appendChild(carritos)
    }
    else{
        nav_1.appendChild(carritos)

    }

})


/*FUNCIÓN DE AGREGAR ARTICULOS EN EL NAV-RIGHT */ 
function pusharticulo (){
    if (compras.length >= 1){
        compras.forEach(art =>{
            let div__below = document.createElement("div")
            div__below.classList.add("div__below")
            div__below.innerHTML = `<div><img class src = "${art.photo}"></div>   <div ><div></div></div> `
            nav__right__below.appendChild(div__below)
            
        })
        /*ver carito de compras*/ 
        const vercarito = document.createElement("button")
        vercarito.textContent = "Ver carrito de Compras"
        vercarito.classList.add("vercarito")
        nav__right__below.appendChild(vercarito)
        /*Pago seguro*/
        const pagoSeguro = document.createElement("button")
        pagoSeguro.textContent = "Pago Seguro"
        pagoSeguro.classList.add("pagoseguro")
        nav__right__below.appendChild(pagoSeguro)
        
       


      
    }
    else{
        let vacio = document.createElement("p")
        vacio.textContent ="Su carro esta vacío, por favor siga navegando en ShopMundo para añadir nuevos productos a su carro ..."
        vacio.classList.add("vacio")
        nav__right__below.appendChild(vacio)
    }
}