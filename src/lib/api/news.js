import axiosInstance from './axiosInstance';

const API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY;

// Fetch  headlines
export const fetchHeadlines = async (country = 'us') => {
  try {
    const response = await axiosInstance.get(`/top-headlines`, {
      params: {
        country,
        apiKey: API_KEY,
      },
    });
    console.log('API Response:', response.data);
    return response.data.articles || [];
  } catch (error) {
    console.error('Error fetching headlines:', error);
    return [];
  }
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

export const fetchCategories = async () => {
  const response = await axiosInstance.get(`/sources`, {
    params: {
      apiKey: API_KEY,
    },
  });

  const uniqueCategories = [
    ...new Set(response.data.sources.map((source) => source.category)),
  ];
  return uniqueCategories;
};
