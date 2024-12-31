import axiosInstance from './axiosInstance';

// Fungsi umum untuk fetching data dari NewsAPI
const fetchNewsData = async (endpoint, params = {}) => {
  try {
    const response = await axiosInstance.get(endpoint, {
      params: { ...params }, // Tidak perlu mengirim apiKey
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
  const data = await fetchNewsData('/headlines', {
    country,
    pageSize,
    page,
  });
  return data?.articles || [];
};

// Fetch news by query
export const fetchNewsByQuery = async (query, page = 1, pageSize = 10) => {
  const data = await fetchNewsData('/search', { query, page, pageSize });
  return data?.articles || [];
};

// Fetch categories
export const fetchCategories = async () => {
  const categories = await fetchNewsData('/categories');
  return categories || [];
};

export const fetchNewsAPI = async () => {
  try {
    // Tidak perlu lagi mengirimkan API Key dari frontend
    const response = await axiosInstance.get('/headlines', {
      params: {
        country: 'us',
        category: 'general',
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

// export const fetchNewsSources = async (country = '', category = '') => {
//   try {
//     const params = {};
//     if (country) params.country = country;
//     if (category) params.category = category;

//     const response = await axiosInstance.get('/top-headlines/sources', {
//       params,
//     });
//     return response.data.sources || [];
//   } catch (error) {
//     console.error(
//       'Error fetching news sources:',
//       error.response?.data || error.message
//     );
//     return [];
//   }
// };

export const fetchNewsByCategory = async (
  category,
  page = 1,
  pageSize = 10
) => {
  const data = await fetchNewsData('/headlines', {
    category,
    page,
    pageSize,
    country: 'us',
  });
  return data?.articles || [];
};
