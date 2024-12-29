import axiosInstance from './axiosInstance';

const API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY;

// Fungsi umum untuk fetching data dari NewsAPI
const fetchNewsData = async (endpoint, params = {}) => {
  try {
    const response = await axiosInstance.get(endpoint, {
      params: { ...params, apiKey: API_KEY },
    });
    return response.data;
  } catch (error) {
    console.error(
      `Error fetching ${endpoint}:`,
      error.response?.data || error.message
    );
    return null;
  }
};

// Fetch headlines
export const fetchHeadlines = async (
  country = 'us',
  pageSize = 10,
  page = 1
) => {
  const data = await fetchNewsData('/top-headlines', {
    country,
    pageSize,
    page,
  });
  return data?.articles || [];
};

// Fetch news by query
export const fetchNewsByQuery = async (query, page = 1, pageSize = 10) => {
  const data = await fetchNewsData('/everything', { q: query, page, pageSize });
  return data?.articles || [];
};

// Fetch categories
export const fetchCategories = async () => {
  const data = await fetchNewsData('/sources');
  if (!data?.sources) return [];
  return [...new Set(data.sources.map((source) => source.category))];
};

export const fetchNewsAPI = async () => {
  try {
    const response = await axiosInstance.get('/top-headlines', {
      params: {
        country: 'us',
        category: 'general',
        apiKey: process.env.NEXT_PUBLIC_NEWS_API_KEY,
      },
    });

    return response.data.articles || [];
  } catch (error) {
    console.error(
      'Error fetching news:',
      error.message || error.response?.data
    );
    return [];
  }
};

export const fetchNewsSources = async (country = '', category = '') => {
  try {
    const response = await axiosInstance.get('/top-headlines/sources', {
      params: {
        apiKey: API_KEY,
        country,
        category,
      },
    });
    return response.data.sources || [];
  } catch (error) {
    console.error(
      'Error fetching news sources:',
      error.response?.data || error.message
    );
    return [];
  }
};
