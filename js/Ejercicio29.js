function eliminarLetrasRepetidas(cadena) {
    return cadena.replace(/(.)\1+/g, "$1");
  }
  
  // Ejemplo de uso:
  const resultado = eliminarLetrasRepetidas("aabbccdde");
  console.log(resultado); // Salida: "abcde"
  