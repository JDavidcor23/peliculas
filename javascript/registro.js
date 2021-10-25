let Persona = {
    nombre:"",
    apellido:"",
    telefono: "",
    direccion:"",
    observasiones:""
}

let formulario = document.getElementById("formulario")

formulario.addEventListener("submit", e =>{

    e.preventDefault();
    let nombre =formulario["Nombre"].value
    let apellido =formulario["Apellido"].value
    let telefono =formulario["Telefono"].value
    let direccion =formulario["Direccion"].value
    let observasiones =formulario["Observasiones"].value

    Persona.telefono = telefono

    if(isNaN(Persona.telefono)){
        alert("tiene que ser un numero")
    }
    else{
        Persona.nombre = nombre
        Persona.apellido = apellido
        Persona.direccion = direccion
        Persona.observasiones = observasiones
        localStorage.setItem(Persona.nombre, JSON.stringify(Persona))
    }
})