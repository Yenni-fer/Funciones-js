function terminaCon(cadena, palabra) {
    return cadena.endsWith(palabra);
  }
  
  // Ejemplo de uso:
  const resultado = terminaCon("JavaScript es genial", "genial");
  console.log(resultado); // Salida: true
  