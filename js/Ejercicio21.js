function reemplazarTodas(cadena, palabraVieja, palabraNueva) {
    return cadena.replaceAll(palabraVieja, palabraNueva);
  }
  
  // Ejemplo de uso:
  const resultado = reemplazarTodas("hola hola", "hola", "adiós");
  console.log(resultado); // Salida: "adiós adiós"
  