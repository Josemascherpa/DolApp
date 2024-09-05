export const countLetters = (text: string): number => {
  // Elimino espacios y cuento la longitud de la cadena
  const lettersOnly = text.replace(/\s+/g, '');  
  return lettersOnly.length;
};