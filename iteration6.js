//Usa un bucle for...of para recorrer todos los juguetes y elimina los que incluyan la palabra gato. Recuerda que puedes usar la función .includes() para comprobarlo.

const toys = [
    {id: 5, name: 'Buzz MyYear'}, 
    {id: 11, name: 'Action Woman'}, 
    {id: 23, name: 'Barbie Man'}, 
    {id: 40, name: 'El gato con Guantes'},
    {id: 40, name: 'El gato felix'}
    ]

let eliminados = []
    for(let valor of toys) {
        if(valor.name.includes("gato")) {
            eliminados.push(valor.id)
        }
    }

    for(let id of eliminados) {
        toys.splice(toys.indexOf(id), 1)
    }
console.log(toys)


//Solución con Filter
/* let nuevoArray = toys.filter((value) => !value.name.includes("gato"))
console.log(nuevoArray) */