export const capitalizeFirstLetter = (palabra:string) => {
  if ( typeof palabra !== 'string' || palabra.length === 0 ) {
    return palabra;
  }
  return palabra.charAt( 0 ).toUpperCase() + palabra.slice( 1 ).toLowerCase();
};