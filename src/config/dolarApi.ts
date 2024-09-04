import axios from "axios";

export const dolarApi = axios.create({
  baseURL:"https://dolarapi.com/v1"
}
)