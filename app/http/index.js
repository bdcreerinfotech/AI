import axios from "axios";
import { API_ENV } from "./provider.js";
const local = "http://localhost:3300/devstag/v1/api";
const aws = "https://api.saleskido.com";
const key = "2XQV4CI-K5FE4DA-XFUZNUI-TW4CANI";

const api = axios.create({
  baseURL: API_ENV === "PROD" ? aws : local,
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
    apikey: key,
  },
});

// List of all the endpoints
export const formSubmit = (data) =>
  api.post("/lead/add/67daa0e58e16136f4fb00c56", data);
