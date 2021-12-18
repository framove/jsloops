//Usa un for...in para imprimir por consola los datos del alienígena

const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}
 
for (let value in alien) {
    console.log(value + ": " + alien[value])
}