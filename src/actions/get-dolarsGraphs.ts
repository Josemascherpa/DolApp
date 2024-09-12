import { dolarGraphApi } from '../config/dolarApi';

import { DolarGraph } from '../domain/dolarGraph';

interface Props {
  nombreDolar: string;
}

export const getDolarsGraphs = async ( { nombreDolar }: Props ): Promise<DolarGraph[]> => {
  try {
    const url = `/${ nombreDolar }`;
    const { data } = await dolarGraphApi.get( url );
    return data;
  } catch ( error ) {
    throw new Error( "Error getting dolars" );
  }

};