// Función para detectar el tipo de dispositivo
const detectarTipoDeDispositivo = () => {
  const anchoVentana = window.innerWidth

  if (anchoVentana <= 768) {
    // Se considera un dispositivo móvil si el ancho es igual o menor a 768px
    return "Móvil"
  } else if (anchoVentana <= 1024) {
    // Se considera una tablet si el ancho es igual o menor a 1024px
    return "Tablet"
  } else {
    // Se considera un ordenador si el ancho es mayor a 1024px
    return "Ordenador"
  }
}

export default detectarTipoDeDispositivo
