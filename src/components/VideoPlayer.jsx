// VideoPlayer.js
import React from "react";

function VideoPlayer({ videoId }) {
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default VideoPlayer;
