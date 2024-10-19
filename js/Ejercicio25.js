function eliminarCaracteresEspeciales(cadena) {
    return cadena.replace(/[^\w\s]/g, "");
  }
  
  // Ejemplo de uso:
  const resultado = eliminarCaracteresEspeciales("Hola@mundo!");
  console.log(resultado); // Salida: "Holamundo"
  