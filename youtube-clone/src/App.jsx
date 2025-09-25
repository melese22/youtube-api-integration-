import React, { useState, useEffect } from 'react';
import youtube from './api/youtube'; 
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
import './App.css'; 
const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);


  useEffect(() => {
    onTermSubmit('cats'); 
  }, []);

  const onTermSubmit = async (term) => {
    try {
      const response = await youtube.get('/search', {
        params: {
          q: term,
          maxResults: 5, 
          type: 'video',
        },
      });
      setVideos(response.data.items);
      setSelectedVideo(response.data.items[0] || null); 
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  const onVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={onTermSubmit} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList onVideoSelect={onVideoSelect} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;