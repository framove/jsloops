//Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta".

const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']

products.forEach ((item) => {
    if(item.toLowerCase().includes("Camiseta".toLowerCase())) {
        console.log(item)
    }
})