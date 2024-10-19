function eliminarVocales(cadena) {
    return cadena.replace(/[aeiouAEIOU]/g, "");
  }
  
  // Ejemplo de uso:
  const resultado = eliminarVocales("javascript");
  console.log(resultado); // Salida: "jvscrpt"
  