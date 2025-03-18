let barra = document.querySelector(".input");
let submit = document.querySelector(".submit");
let div = document.querySelector(".superofertas-1");

fetch("productos.json")
 .then(response => response.json())
 .then(data => {
    
    const productosdiv = document.querySelector(".productos")
    data.monitores.forEach(producto => {
        const productodiv = document.createElement("div");
        productodiv.classList.add('producto');
        productodiv.innerHTML = `<div class="producto__${producto.id}">
        <img src="${producto.photo}">
        <p>nombre: ${producto.nombre}</p>
        <p>precio: ${producto.precio}</p>
        <a href="producto.html?id=${producto.id}"><strong>comprar</a>

        </div>
        `;
        productosdiv.appendChild(productodiv);

        
    });
 })
 .catch(error => console.error ("error puto",error))


/*esto es para el nav responsive 770px*/ 

const barra__770px = document.querySelector(".barra__770px")
barra__770px.insertAdjacentHTML("beforeend",` <a href="" class=""><i class="fa-sharp fa-solid fa-cart-shopping carrito"></i></a>`),


submit.addEventListener("click",()=>{
    if (barra.value.trim() == "monitor") {
        alert("hola");
        document.querySelector(".buscador-1").lastChild.remove()
        let divs = div.cloneNode(true);
        document.querySelector(".buscador-1").appendChild(divs);

    }
    else{
        alert("pon algo mas")
        document.querySelector(".buscador-1").lastChild.remove()
    }
})





