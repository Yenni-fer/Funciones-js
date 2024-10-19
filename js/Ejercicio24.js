function contieneSoloNumeros(cadena) {
    return /^\d+$/.test(cadena);
  }
  
  // Ejemplo de uso:
  const resultado = contieneSoloNumeros("12345");
  console.log(resultado); // Salida: true
  