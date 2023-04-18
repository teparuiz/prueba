const readline = require("readline");

// Convierte los números normales a decimales
function decimalToRoman(decimal) {
   let roman = "";
  const romanNumeralMap = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1],
  ];
  for (let i = 0; i < romanNumeralMap.length; i++) {
    const [r, n] = romanNumeralMap[i];
    while (decimal >= n) {
      roman += r;
      decimal -= n;
    }
  }
  return roman;
}

// Convierte los números romanos a años
function yearToRoman(year) {
  let roman = "";
  if (year < 1) {
    return "";
  }
  if (year >= 1000) {
    const thousands = Math.floor(year / 1000);
    roman += "M".repeat(thousands);
    year -= thousands * 1000;
  }
  if (year >= 100) {
    const hundreds = Math.floor(year / 100);
    roman += decimalToRoman(hundreds * 100);
    year -= hundreds * 100;
  }
  if (year >= 10) {
    const tens = Math.floor(year / 10);
    roman += decimalToRoman(tens * 10);
    year -= tens * 10;
  }
  roman += decimalToRoman(year);
  return roman;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(
  "Introduce el rango de años separado por un guión en el formato AÑO(1-4 cifras)AD/BC-AÑO(1-4 cifras)AD/BC: ",
  function (inputStr) {
    const [aStr, bStr] = inputStr.split("-");
    const a = aStr.endsWith("AD" || "BC" || "AC")
      ? parseInt(aStr.slice(0, -2))
      : -parseInt(aStr.slice(0, -2));
    const b = bStr.endsWith("AD" || "BC" || "AC")
      ? parseInt(bStr.slice(0, -2))
      : -parseInt(bStr.slice(0, -2));
    const aRoman = yearToRoman(a);
    const bRoman = yearToRoman(b);
    console.log(Math.max(aRoman.length, bRoman.length));
    rl.close();
  }
);
