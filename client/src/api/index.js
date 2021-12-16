import axios from "axios";
// Paste you backend connection url
const url= "https://gramoday-api.herokuapp.com";

export const fetchReport =(id)=> axios.get(`${url}${id}`);

