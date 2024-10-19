function capitalizarPrimeraLetra(cadena) {
    return cadena.charAt(0).toUpperCase() + cadena.slice(1);
  }
  
  // Ejemplo de uso:
  const resultado = capitalizarPrimeraLetra("javascript");
  console.log(resultado); // Salida: "Javascript"
  