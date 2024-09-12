import axios from "axios";

export const dolarApi = axios.create({
  baseURL:"https://dolarapi.com/v1"
}
)

export const dolarGraphApi = axios.create({
  baseURL:"https://api.argentinadatos.com/v1/cotizaciones/dolares/"
})