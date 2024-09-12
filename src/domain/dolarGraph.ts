export interface DolarGraph {
  casa:   Casa;
  compra: number;
  venta:  number;
  fecha:  Date;
}

export enum Casa {
  nombre = "oficial",
}
