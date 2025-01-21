import axios from "axios";

const API_URL = "https://ophim1.com/v1/api"

export const searchApi = {
    search: async (name) => {
        const response = await axios.get(`${API_URL}/tim-kiem?keyword=${name}`)
        return response.data
    }
}