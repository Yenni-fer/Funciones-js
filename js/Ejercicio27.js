function convertirASnakeCase(frase) {
    return frase
      .toLowerCase() // Convierte toda la cadena a minúsculas
      .replace(/\s+/g, "_"); // Reemplaza los espacios con guiones bajos
  }
  
  // Ejemplo de uso:
  const resultado = convertirASnakeCase("Hola Mundo");
  console.log(resultado); // Salida: "hola_mundo"
  