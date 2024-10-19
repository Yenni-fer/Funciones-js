function contarPalabras(cadena) {
    // Dividimos la cadena en palabras y filtramos los elementos vacíos
    const palabras = cadena.split(" ").filter(Boolean);
    return palabras.length;
  }
  
  // Ejemplo de uso:
  const resultado = contarPalabras("Aprender JavaScript es divertido");
  console.log(resultado); // Salida: 4
  