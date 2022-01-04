import axios from "axios";

const BASE_URL = "https://zuke-online-store.herokuapp.com/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYzQwN2UyMjAzYTRhODQ5YjlmZTFmMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MTEwNzE2OCwiZXhwIjoxNjQxMzY2MzY4fQ.vd7LBQckXPGfzcMmQstQ1_fRAEd905B654jZjPtcAsQ";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
