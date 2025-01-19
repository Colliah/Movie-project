import axios from "axios";

const API_URL = "https://ophim1.com/v1/api"

export const movieApi = {
    home: async () => {
        const response = await axios.get(`${API_URL}/home`);
        return response.data;
    },
    getMovieDetail: async (slug) => {
        const response = await axios.get(`${API_URL}/phim/${slug}`);
        return response.data;
    },
    getTypesMovies: async (type, page) => {
        const response = await axios.get(`${API_URL}/danh-sach/${type}?page=${page}`);
        return response.data;
    },
    getCategoryMovies: async (category, page) => {
        const response = await axios.get(`${API_URL}/the-loai/${category}?page=${page}`);
        return response.data;
    },
    getMovieDetail: async (slug) => {
        const response = await axios.get(`${API_URL}/phim/${slug}`);
        return response.data;
    },
    getMovieCountry: async (country) => {
        const response = await axios.get(`${API_URL}/quoc-gia/${country}`)
        return response.data;
    }
} 
