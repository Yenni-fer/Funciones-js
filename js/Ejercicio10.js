function contarLetra(cadena, letra) {
    let contador = 0;
    for (let i = 0; i < cadena.length; i++) {
      if (cadena[i] === letra) {
        contador++;
      }
    }
    return contador;
  }
  
  // Ejemplo de uso:
  const resultado = contarLetra("javascript", "a");
  console.log(resultado); // Salida: 2
  