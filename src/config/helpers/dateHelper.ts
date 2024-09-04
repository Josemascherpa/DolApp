export const formatterDate = ( dateString: string ): string => {
  // Convierte la cadena a un objeto Date
  const date = new Date( dateString );

  // Verifica si date es una instancia de Date válida
  if ( isNaN( date.getTime() ) ) {
    return 'Fecha inválida';
  }

  // Obtener el día, mes y año
  const dia = date.getDate().toString().padStart( 2, '0' );
  const mes = ( date.getMonth() + 1 ).toString().padStart( 2, '0' );
  const anio = date.getFullYear();

  // Obtener la hora y los minutos
  const horas = date.getHours().toString().padStart( 2, '0' );
  const minutos = date.getMinutes().toString().padStart( 2, '0' );

  // Formatear la fecha
  return `Actualizado el ${ dia }/${ mes }/${ anio } a las ${ horas }:${ minutos }`;
};
