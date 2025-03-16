fetch("productos.json")
.then(responsive => responsive.json())
.then(data => {
    
    
    const  foto = document.querySelector(".foto")
    const  urlParams = new URLSearchParams(window.location.search)
    const  id = parseInt( urlParams.get("id"));
    const imgt__1 = document.createElement("div")
    imgt__1.classList.add(`imgt__1`)
    imgt__1.innerHTML = `<img src="/imagenes/monitor ${id}.jpeg">`
    foto.appendChild(imgt__1)
    // esta es la parte de la foto



    const desamoni = data.monitores.find(item =>item.id === id)
    const descripción = document.querySelector(".descripción")
    const desa = document.createElement("div")
    desa.classList.add(`desa`)
    desa.innerHTML = `<h3>${desamoni.nombre}</h3>0.0  <a href="">Escribe una Opinión</a> <h5>Descripción </h5>
     <p> ${desamoni.descripción}</p><strong>5 Años de Garantia.</strong><br><br><a href=""> leer mas </a>`

    descripción.appendChild(desa)
    //esta es la parte de desarrollo 


    const precio__1 = document.querySelector(".precio__1")
    precio__1.innerHTML = `RD$ ${desamoni.precio}`

   
})