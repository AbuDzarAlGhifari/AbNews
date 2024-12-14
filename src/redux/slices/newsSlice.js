import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchTopHeadlines } from '../../lib/api/news';

export const fetchNews = createAsyncThunk('news/fetchNews', async (params) => {
  const data = await fetchTopHeadlines(params);
  return data.articles;
});

const newsSlice = createSlice({
  name: 'news',
  initialState: { articles: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.loading = false;
        state.articles = action.payload;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default newsSlice.reducer;
