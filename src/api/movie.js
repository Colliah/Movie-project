import axios from "axios";
import { KKPHIM_API_URL } from "./config";

export const movieApi = {
    home: async () => {
        const response = await axios.get(`${KKPHIM_API_URL}/home`);
        return response.data;
    },
    getMovieDetail: async (slug) => {
        const response = await axios.get(`${KKPHIM_API_URL}/phim/${slug}`);
        return response.data;
    },
    getTypesMovies: async (type, page) => {
        const response = await axios.get(`${KKPHIM_API_URL}/danh-sach/${type}`, { params: { page } });
        return response.data;
    },
    getCategoryMovies: async (category, page) => {
        const response = await axios.get(`${KKPHIM_API_URL}/the-loai/${category}`, { params: { page } });
        return response.data;
    },
    getMovieCountry: async (country) => {
        const response = await axios.get(`${KKPHIM_API_URL}/quoc-gia/${country}`)
        return response.data;
    }
} 
