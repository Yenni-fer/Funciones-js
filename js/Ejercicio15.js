function obtenerUltimoCaracter(cadena) {
    return cadena.charAt(cadena.split('').lastIndexOf(cadena.charAt(cadena.length - 1)));
  }
  
  // Ejemplo de uso:
  const resultado = obtenerUltimoCaracter("Hola");
  console.log(resultado); // Salida: "a"
  