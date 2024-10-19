function contarFrecuenciaCaracteres(cadena) {
    const frecuencia = {}; // Objeto para almacenar la frecuencia
  
    for (const caracter of cadena) {
      // Si el carácter ya existe en el objeto, incrementa su cuenta
      if (frecuencia[caracter]) {
        frecuencia[caracter]++;
      } else {
        // Si no, inicializa su cuenta en 1
        frecuencia[caracter] = 1;
      }
    }
  
    return frecuencia;
  }
  
  // Ejemplo de uso:
  const resultado = contarFrecuenciaCaracteres("abbccc");
  console.log(resultado); // Salida: { a: 1, b: 2, c: 3 }
  