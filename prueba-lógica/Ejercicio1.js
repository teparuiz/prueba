const readline = require("readline");

// Función para obtener la dirección
function getDirection(n, m) {
  if (n === m && n % 2 === 1 && m % 2 === 1) {
    return "R";
  } else if (n === m && n % 2 === 0 && m % 2 === 0) {
    return "L";
  } else if (n > m && n % 2 === 1 && m % 2 === 1) {
    return "D";
  } else {
    return "U";
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Casos de prueba
rl.question("Ingrese el número de casos de prueba: ", (T) => {
  // Loop a través de cada caso de prueba
  for (let i = 0; i < T; i++) {
    // Leer la cuadrícula
    rl.question("Ingrese las dimensiones de la cuadrícula (N M): ", (input) => {
      const [N, M] = input.split(" ").map(Number);

      // Obtener la dirección 
      const direction = getDirection(N, M);

      // Imprimir la dirección final
      console.log(`Dirección final: ${direction}`);

      // Preguntar por el siguiente caso de prueba
      if (i < T - 1) {
        rl.question("Presione enter para continuar...", () => {
          console.clear();
        });
      } else {
        rl.close();
      }
    });
  }
});
