function capitalizarPrimeraLetraDeCadaPalabra(frase) {
    return frase
      .split(" ") // Divide la frase en palabras
      .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1)) // Capitaliza la primera letra de cada palabra
      .join(" "); // Une las palabras de nuevo en una cadena
  }
  
  // Ejemplo de uso:
  const resultado = capitalizarPrimeraLetraDeCadaPalabra("javascript es divertido");
  console.log(resultado); // Salida: "Javascript Es Divertido"
  