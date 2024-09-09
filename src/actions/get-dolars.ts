import { dolarApi } from '../config/dolarApi';
import { Dolar } from '../domain/dolar';

// export const sleep = async()=>{
//   return new Promise(resolve=>setTimeout(resolve,2000));
// }

export const getDolars = async (): Promise<Dolar[]> => {
  try {
    // await sleep();
    
    const url = "/dolares";
    const { data } = await dolarApi.get( url ); 
    
    return data;

  } catch ( error ) {

    throw new Error( "Error getting dolars" );

  }

};