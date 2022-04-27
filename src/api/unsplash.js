import axios from "axios";

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers: {
        Authorization:'Client-ID tPBLPpj86JzaJtVv4856XTAEgvEJQvOHf6A4Dbjip4k',
      }
});