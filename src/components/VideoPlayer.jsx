import React from "react";
import YouTube from "react-youtube";

function VideoPlayer({ videoId }) {
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // You can add additional player parameters here
      autoplay: 0, // Autoplay the video
    },
  };

  return <YouTube videoId={videoId} opts={opts} />;
}

export default VideoPlayer;
