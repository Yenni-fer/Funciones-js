function encontrarPalabraMasLarga(cadena) {
    const palabras = cadena.split(" "); // Dividir la cadena en palabras
    let palabraMasLarga = ""; // Variable para almacenar la palabra más larga
  
    for (const palabra of palabras) {
      if (palabra.length > palabraMasLarga.length) {
        palabraMasLarga = palabra; // Actualizar si encontramos una palabra más larga
      }
    }
  
    return palabraMasLarga;
  }
  
  // Ejemplo de uso:
  const resultado = encontrarPalabraMasLarga("Aprender JavaScript es emocionante");
  console.log(resultado); // Salida: "emocionante"
  