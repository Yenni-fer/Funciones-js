function truncarCadena(cadena, longitud) {
    if (cadena.length > longitud) {
      return cadena.substring(0, longitud) + "...";
    }
    return cadena;
  }
  
  // Ejemplo de uso:
  const resultado = truncarCadena("JavaScript es genial", 10);
  console.log(resultado); // Salida: "JavaScri..."
  