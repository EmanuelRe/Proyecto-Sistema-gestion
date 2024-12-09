// import '../css/normalize.css'
// import '../css/styles.css'

const nombre = document.querySelector('#nombre');
const telefono = document.getElementById("telefono");

console.log ("archivo cargado correctamente");

nombre.addEventListener("input",(evento) =>{

    const cadena = evento.target.value;
    const patron = /^[a-zA-Z]+ ? [a-zA-Z]*$/;

    if (!patron.test(cadena)){
        alert ("ese patron no es valido");
        console.log("QUE HACES");
    }
})

telefono.addEventListener("input",(evento)=>{

    const cadena = evento.target.value;
    const patron = /^\d{11}$/;

    if (!patron.test(cadena)){
        alert ("ese patron no es valido");
        console.log("QUE HACES");
    }

})



