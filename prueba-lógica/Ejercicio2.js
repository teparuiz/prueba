const readline = require("readline");

// Función para obtener el número de caracteres mínimos para almacenar los años en el rango dado
function getMinimalYearChars(yearsRange) {
    const [startYear, endYear] = yearsRange.split('-'); // Dividir la entrada en año inicial y año final
    const startYearDigits = startYear.length - (startYear.includes('BC') ? 2 : 0); // Número de dígitos del año inicial sin contar "BC"
    const endYearDigits = endYear.length - (endYear.includes('BC') ? 2 : 0); // Número de dígitos del año final sin contar "AD"
    return Math.max(startYearDigits, endYearDigits); // Devolver el mayor número de dígitos entre el año inicial y el año final
  }
  
  // Leer la entrada
  const yearsRange = prompt("Ingrese el rango de años (A-B):");
  
  // Obtener el número de caracteres mínimos
  const minimalChars = getMinimalYearChars(yearsRange);
  
  // Imprimir el resultado
  console.log(`El número mínimo de caracteres para almacenar los años en el rango ${yearsRange} es: ${minimalChars}`);


  function getMinimalYearChars(yearsRange) {
    const [startYear, endYear] = yearsRange.split('-'); // Dividir la entrada en año inicial y año final
  
    // Calcular la cantidad total de caracteres en el rango de años, sin contar "BC" o "AD"
    const startYearChars = startYear.replace(/BC/g, '').replace(/\d+/g, '').length;
    const endYearChars = endYear.replace(/AD/g, '').replace(/\d+/g, '').length;
  
    // Devolver la suma de caracteres entre el año inicial y el año final, sumando 1 para el guión "-"
    return startYearChars + endYearChars + 1;
  }
  
  console.log(getMinimalYearChars('1BC-1AD')); // Salida: 7
  