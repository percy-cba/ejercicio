/*

Mostrar un menú y solicitar que el usuario ingrese una opción (prompt, “1 - Suma\n2 - Resta…”)

Si el valor ingresado no es un número válido (parseInt, switch), vuelve a mostrar el menú.

Si el valor ingresado es 1: Solicitar 2 números (validar que sean números) y sumarlos.

Si el valor ingresado es 2: Solicitar 2 números (validar que sean números y además que el primero sea mayor al segundo) y restarlos.

Si el valor ingresado es 3: Salir.


*/

let bandera = true;

while (bandera) {
    menu = parseInt(prompt("Ingrese una opción:\n1- Suma\n2- Resta\n3- Salir"));
    // Pregunta si el valor ingresado es número o no.
    if (!(isNaN(menu))) {
        switch (menu) {
            case 1:
                let ingresarNumero1 = parseInt(prompt("Ingrese el primer número: "));
                let ingresarNumero2 = parseInt(prompt("Ingrese el segundo número: "));
                let resultado = ingresarNumero1 + ingresarNumero2;
                // Compara si los 2 valores ingresados son números o no 
                if(!(isNaN(ingresarNumero1)) && !(isNaN(ingresarNumero2))) {
                    console.log("La suma de los 2 números ingresados es: " + resultado);
                }
                else {
                    console.log("Los valores ingresados no son números");
                }
                break;

            case 2:
                let ingresarNum1 = parseInt(prompt("Ingrese el primer número: "));
                let ingresarNum2 = parseInt(prompt("Ingrese el segundo número: "));
                let result = ingresarNum1 - ingresarNum2;
                // Compara si los 2 valores ingresados son números o no 
                if(!(isNaN(ingresarNum1)) && !(isNaN(ingresarNum2))) {
                    if (ingresarNum1 > ingresarNum2) {
                        console.log("La resta de los 2 números ingresados es: " + result);
                    }
                    else {
                        console.log("El número 1 es menor que el número 2");
                    }
                } else {
                    console.log("Los valores ingresados no son números")
                }
                break;
        
            default:
                bandera = false;
                break;
        }
    } else {
        console.log("El valor ingresado no es el correcto, vuelva a intentarlo");
    }
}