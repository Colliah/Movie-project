import axios from "axios";
import { KKPHIM_API_URL } from "./config";

export const searchApi = {
    search: async (name) => {
        const response = await axios.get(`${KKPHIM_API_URL}/tim-kiem`, {
            params: { keyword: name },
        })
        return response.data
    }
}
