import { DolarGraph } from '../../domain/dolarGraph';

interface Props {
  data: DolarGraph[];
  fechaMin?: Date;
}

interface DataGraph {
  labels: string[];
  datasets: {
    data: number[];
  }[];
}

export const reduceGraphHelper = ( { data, fechaMin = new Date( '2021-01-01' ) }: Props ): DataGraph => {
  const minDate = new Date( fechaMin ); //filtro fecha

  const filteredData = data
    ? data.filter( ( dolar ) => new Date( dolar.fecha ) >= minDate ) //filtro por fecha
    : [];

  const reducedData = filteredData.filter( ( _, index ) => index % 32 === 0 ); //limito los dias a 32 dias

  // que siempre me retorne el dato que toma el grafico
  const graphData: DataGraph = {
    labels: reducedData.map( ( dolar ) => new Date( dolar.fecha ).toLocaleDateString() ),
    datasets: [
      {
        data: reducedData.map( ( dolar ) => dolar.venta ),
      },
    ],
  };

  return graphData;
};