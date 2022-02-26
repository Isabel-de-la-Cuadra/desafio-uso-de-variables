/*
2. Realizar operaciones con dos números. Pedir al usuario que ingrese dos números diferentes 
y mayores a cero. Para ambos números, calcular lo siguiente: Suma, Resta, División. Multiplicación y
Módulo
*/

//Solicitar al usuario que ingrese dos números diferentes y mayores a cero
alert("¿Quieres conocer el resultado de la suma, la resta, la división, el módulo y la multiplicación de dos números?");
//Leer numero1
var numero1 = parseInt(prompt("Ingresa el primer número, tiene que ser mayor a cero"));
//Leer numero2
var numero2 = parseInt(prompt("Ingresa el segundo número, tiene que ser mayor a cero y diferente al primero que ingresaste"));
//Comentar donde se verán los resultados (Prefiero no hacerlo en un pop up, para que quede registro)
alert("Al final de la ronda de preguntas y de tus respuestas, en la página aparecerán los resultados :)");
//Mostrar en el documento los resultados de las operaciones, previa confirmación del ingreso de los números
document.write("<br>");
document.write("<br>");
document.write("Programa número 1:");
document.write("<br>");
document.write("Ingresaste el número " + numero1 + " y el número " + numero2);
document.write("<br>");
//Mostrar la suma de los numeros ingresados
document.write("La suma de los números es: " + (numero1 + numero2));
document.write("<br>");
//Mostrar la diferencia de los numeros ingresados
document.write("La diferencia de los números es: " + (numero1 - numero2));
document.write("<br>");
//Mostrar el cociente de los numeros ingresados
document.write("El cociente de los números es: " + (numero1 / numero2));
document.write("<br>");
//Mostrar el módulo de los numeros ingresados 
document.write("El módulo de los números es: " + (numero1 % numero2));
document.write("<br>");
//Mostrar el producto de los numeros ingresados 
document.write("El producto de los números es: ");
document.write(numero1 * numero2);
document.write("<br>");
document.write("<br>");

/*
3. Crear un programa que pida al usuario ingresar la temperatura en grados Celsius y
que la transforme a grados Kelvin y Fahrenheit.
Se debe considerar la siguiente información respecto a la equivalencia de las
escalas de temperatura:
- 0 Grados Celsius corresponden a 273,15 Kelvin. La fórmula para convertirlos
es 0 °C + ​ 273.15​ = ​ 273.15​ K
- 0 Grados Celsius corresponden a 32 Fahrenheit. La fórmula para convertirlos
es ( 0 ​ °C × ​ 9 ​ / ​ 5 ​ ) + ​ 32​ = ​ 32​ °F
*/

//Solicitar al usuario que ingrese un número para transformarlo en grados Kelvin y Fahrenheit
alert("¿Quieres transformar la temperatura en grados Celcius a grados Kelvin y Fahrenheit?");
//Leer numero
var gradosCelcius = parseFloat(prompt("Ingresa la temperatura en grados Celcius"));
//Comentar donde se verán los resultados (Prefiero no hacerlo en un pop up, para que quede registro)
alert("Al final de la ronda de preguntas y de tus respuestas, en la página aparecerán los resultados :)");
//Mostrar en el documento los resultados, previa confirmación del ingreso del número
document.write("<br>");
document.write("Programa número 2:");
document.write("<br>");
document.write("Ingresaste " + gradosCelcius + "°C");
document.write("<br>");
//Mostrar Cálculo grados Kelvin
document.write("Tus " + gradosCelcius + "°C son " + (gradosCelcius + 273.15) + " K");
document.write("<br>");
//Mostrar Cálculo grados Fahrenheit
document.write("Tus " + gradosCelcius + "°C son " + ((gradosCelcius * 9 / 5) + 32) + " °F");
document.write("<br>");
document.write("<br>");


/*
4. Crear un programa que pida al usuario una cantidad de días y que muestre su
equivalente en Años, Semanas y Días. Por ejemplo, si el usuario ingresa 373, el
resultado debe ser 1 año, 1 semana y 1 día.
Se debe considerar lo siguiente:
- 1 año tiene 365 días
- 1 semana tiene 7 días
Se recomienda usar la función Math.floor para obtener la parte entera de un número
decimal.
*/

//Creación de las dos constantes: anio y semana
const anio = 365;
const semana = 7;
//Solicitar al usuario que ingrese un número
alert("¿Quieres conocer la equivalencia de un número en años, semanas y días? (El año tiene 365 días y la semana 7 días)");
var numeroEquivalente = parseInt(prompt("Ingresa el número"));
//Comentar donde se verán los resultados (Prefiero no hacerlo en un pop up, para que quede registro)
alert("Al final de la ronda de preguntas y de tus respuestas, en la página aparecerán los resultados :)");
//Mostrar en el documento los resultados, previa confirmación del ingreso del número
document.write("<br>");
document.write("Programa número 3:");
document.write("<br>");
//Mostrar el número ingresado por el usuarioo
document.write("Ingresaste " + numeroEquivalente);
document.write("<br>");
//Mostrar el entero del cociente del número ingresado y la constante anios
document.write("Tu número " + numeroEquivalente + " corresponde a " + (Math.floor(numeroEquivalente / anio)) + " años ");
//Calcular el módulo entre el número ingresado y la cantidad de años y dejarlo en una variable
var restoAnios = numeroEquivalente % anio;
//Mostrar el entero del cociente de la variable restoAnios y la constante semana
document.write("con " + (Math.floor(restoAnios / semana)) + " semanas ")
    //Calcular el módulo entre la variable restoAnios y la constante semana y dejarlo en una variable
var restoSemana = restoAnios % semana;
//Mostrar la variable restoSemana
document.write("y con " + (restoSemana) + " dias ")
document.write("<br>");

/*
5. Crear un programa que solicite al usuario 5 números y realice los cálculos que se
piden a continuación.
- La suma de todos los números.
- El promedio de los 5 números ingresados.
*/

//Solicitar al usuario que ingrese los 5 números
alert("Esta es la última petición: necesito 5 números para sumarlos y también sacar su promedio");
var numero01 = parseInt(prompt("Ingresa el primer número"));
var numero02 = parseInt(prompt("Ingresa el segundo número"));
var numero03 = parseInt(prompt("Ingresa el tercer número"));
var numero04 = parseInt(prompt("Ingresa el cuarto número"));
var numero05 = parseInt(prompt("Ingresa el quinto número"));
//Comentar que después de este pop up se verán en la página todos los resultados
alert(("Ahora verás todas tus respuestas ;) Gracias por ayudarme"));
//Mostrar en el documento los resultados, previa confirmación del ingreso de los números
document.write("<br>");
document.write("Programa número 4:");
document.write("<br>");
document.write("Ingresastes los siguientes números: " + numero01 + ", " + numero02 + ", " + numero03 + ", " + numero04 + " y " + numero05);
document.write("<br>");
//Mostrar el resultado de la suma de los números ingresados
document.write("La suma de los números es: " + (numero01 + numero02 + numero03 + numero04 + numero05));
document.write("<br>");
//Mostrar el promedio de los números ingresados
document.write("El promedio de los números es: " + ((numero01 + numero02 + numero03 + numero04 + numero05) / 5));
document.write("<br>");
document.write("<br>");
document.write("¡Gracias por colaborar con este desafío!");