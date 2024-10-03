import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  blogs: [],
  currentBlog: {
    title: '',
    author: '',
    summary: '',
    category: '',
    content: '',
    date: new Date(),
  },
};

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    setBlogMetadata(state, action) {
      state.currentBlog.title = action.payload.title;
      state.currentBlog.author = action.payload.author;
    },
    setBlogSummary(state, action) {
      state.currentBlog.summary = action.payload.summary;
      state.currentBlog.category = action.payload.category;
    },
    setBlogContent(state, action) {
      state.currentBlog.content = action.payload.content;
    },
    submitBlog(state) {
      state.blogs.push({ ...state.currentBlog });
      state.currentBlog = initialState.currentBlog;
    },
  },
});

export const {
  setBlogMetadata,
  setBlogSummary,
  setBlogContent,
  submitBlog,
} = blogSlice.actions;

export const blogReducer = blogSlice.reducer;
