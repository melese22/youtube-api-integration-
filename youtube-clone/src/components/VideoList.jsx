import React from 'react';

const VideoList = ({ videos }) => {
  const renderedList = videos.map((video) => {
    return (
      <div key={video.id.videoId} className="video-item ui item">
        <img
          className="ui image"
          src={video.snippet.thumbnails.default.url}
          alt={video.snippet.title}
        />
        <div className="content">
          <div className="header">{video.snippet.title}</div>
          {/* You can add more details here later */}
        </div>
      </div>
    );
  });

  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;