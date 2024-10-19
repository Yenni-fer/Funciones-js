function reemplazarPalabra(cadena, palabraVieja, palabraNueva) {
    return cadena.replace(palabraVieja, palabraNueva);
  }
  
  // Ejemplo de uso:
  const resultado = reemplazarPalabra("Hola mundo", "mundo", "amigo");
  console.log(resultado); // Salida: "Hola amigo"
  