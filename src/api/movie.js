import axios from "axios";

const API_URL="https://ophim1.com/v1/api"

export const movieApi= {
    home: async() => {
        const res= await axios.get(`${API_URL}/home`);
        return res.data;
    }
} 