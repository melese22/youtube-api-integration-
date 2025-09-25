import axios from 'axios';

const KEY = import.meta.env.VITE_YOUTUBE_API_KEY; 

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    key: KEY,
    part: 'snippet', 
  },
});