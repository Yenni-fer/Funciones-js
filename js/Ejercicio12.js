function esPalindromo(palabra) {
    const palabraInvertida = palabra.split("").reverse().join("");
    return palabra === palabraInvertida;
  }
  
  // Ejemplo de uso:
  const resultado = esPalindromo("ana");
  console.log(resultado); // Salida: true
  