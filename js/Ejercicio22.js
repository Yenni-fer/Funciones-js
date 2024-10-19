function convertirACamelCase(frase) {
    return frase
      .toLowerCase() // Convierte toda la frase a minúsculas
      .split(" ") // Divide la frase en palabras
      .map((palabra, index) => {
        // Convierte la primera letra de cada palabra (excepto la primera) a mayúscula
        return index === 0 ? palabra : palabra.charAt(0).toUpperCase() + palabra.slice(1);
      })
      .join(""); // Une las palabras en una sola cadena
  }
  
  // Ejemplo de uso:
  const resultado = convertirACamelCase("hola mundo en javascript");
  console.log(resultado); // Salida: "holaMundoEnJavascript"
  