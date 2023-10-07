import axios from 'axios';
import { ApiResponse } from '../types';

export const getCharacters = async (page: number): Promise<ApiResponse> => {
  try {
    const response = await axios.get(`https://rickandmortyapi.com/api/character?page=${page}`);
    return response.data;
} catch (error) {
    console.error("Failed to fetch characters:", error);
    throw new Error("Failed to fetch characters from the API.");
}
};