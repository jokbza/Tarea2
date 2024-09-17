// Arreglos
const numeros = [1, 2, 3, 4, 5];
const palabras = ["Hola", "Bienvenidos a", "JavaScript"];
const objetos = [{ nombre: "Juan", edad: 30 }, { nombre: "María", edad: 25 }];
const colores = ["Rojo", "Verde", "Azul"];
const paises = ["Colombia", "España", "México"];

// Métodos a aplicar
const metodos = ["reduce", "forEach", "filter", "map"];

// Aplicar métodos y mostrar resultados
for (const arreglo of [numeros, palabras, objetos, colores, paises]) {
    console.log(`\nArreglo original: ${JSON.stringify(arreglo)}`); // Usamos JSON.stringify para mostrar objetos de forma legible

    for (const metodo of metodos) {
        let resultado;

        switch (metodo) {
            case "reduce":
                if (arreglo === numeros) {
                    resultado = arreglo.reduce((acumulador, valor) => acumulador + valor, 0);
                } else if (arreglo === palabras) {
                    resultado = arreglo.reduce((acumulador, palabra) => acumulador + " " + palabra, "");
                } else if (arreglo === objetos) {
                    resultado = arreglo.reduce((acumulador, objeto) => acumulador + objeto.edad, 0);
                } else {
                    resultado = "No aplicable a este tipo de arreglo"; 
                }
                break;
            case "forEach":
                resultado = [];
                arreglo.forEach(elemento => resultado.push(elemento)); 
                break;
            case "filter":
                if (arreglo === numeros) {
                    resultado = arreglo.filter(numero => numero % 2 === 0); 
                } else if (arreglo === palabras) {
                    resultado = arreglo.filter(palabra => palabra.length > 4); 
                } else if (arreglo === objetos) {
                    resultado = arreglo.filter(objeto => objeto.edad > 25); 
                } else {
                    resultado = "No aplicable a este tipo de arreglo"; 
                }
                break;
            case "map":
                if (arreglo === numeros) {
                    resultado = arreglo.map(numero => numero * 2); 
                } else if (arreglo === palabras) {
                    resultado = arreglo.map(palabra => palabra.toUpperCase());
                } else if (arreglo === objetos) {
                    resultado = arreglo.map(objeto => objeto.nombre); 
                } else {
                    resultado = "No aplicable a este tipo de arreglo"; 
                }
                break;
        }

        console.log(`Método ${metodo}: ${JSON.stringify(resultado)}`);
    }
}console.log("Por: José Augusto López Cabeza");