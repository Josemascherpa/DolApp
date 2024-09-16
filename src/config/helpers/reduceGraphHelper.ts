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

export const reduceGraphHelper = ({ data, fechaMin = new Date('2021-01-01') }: Props): DataGraph => {
  // filtr los datos según la fecha mínima
  const filteredData = data
    ? data.filter((dolar) => new Date(dolar.fecha) >= fechaMin)
    : [];

  // datos cada 32 dias
  const reducedData = filteredData.filter((_, index) => index % 32 === 0);

  // creo arrays
  const labels = reducedData.map((dolar) => new Date(dolar.fecha).toLocaleDateString());
  const datasets = reducedData.map((dolar) => dolar.venta);

  
  const graphData: DataGraph = {
    labels: labels, // fechas
    datasets: [
      {
        data: datasets, // datos a mostrar
      },
    ],
  };
  
  return graphData;
};
