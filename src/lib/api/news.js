import axiosInstance from './axiosInstance';

const API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY;

// Fetch top headlines
export const fetchTopHeadlines = async (params) => {
  const { country = 'us', category = '', page = 1, pageSize = 10 } = params;
  const response = await axiosInstance.get('/top-headlines', {
    params: { country, category, page, pageSize, apiKey: API_KEY },
  });
  return response.data;
};

// Fetch news by query
export const fetchNewsByQuery = async (query, page = 1) => {
  const response = await axiosInstance.get('/everything', {
    params: { q: query, page, apiKey: API_KEY },
  });
  return response.data;
};

// Fungsi untuk mengambil data dari NewsAPI
export const fetchNewsAPI = async () => {
  try {
    const response = await axiosInstance.get('/top-headlines', {
      params: {
        country: 'us', // Sesuaikan negara jika perlu
        category: 'general', // Pilih kategori: business, entertainment, health, dll.
        apiKey: process.env.NEXT_PUBLIC_NEWS_API_KEY, // Ambil API key dari env
      },
    });

    // Kembalikan data artikel
    return response.data.articles || [];
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
};
