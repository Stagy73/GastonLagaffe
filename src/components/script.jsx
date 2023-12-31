/////////////////////////////

import React, { useState, useEffect } from "react";

import VideoPlayer from "./VideoPlayer";
const apiKey = import.meta.env.VITE_API_KEY;
function Video() {
  // Replace with your YouTube Data API key
  const channelId = "UCrcptvCXVgLlieu9pNe0Nqg"; // Replace with the channel ID
  const searchKeyword = "Gaston Lagaffe"; // Keyword to filter videos
  const maxResults = 10; // Number of videos to display

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // Fetch videos from the channel with the specified keyword
    fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&q=${searchKeyword}&order=date&part=snippet&type=video&maxResults=${maxResults}`
    )
      .then((response) => response.json())
      .then((data) => {
        setVideos(data.items);
      })
      .catch((error) => console.error("Error fetching videos:", error));
  }, []);

  const column1Videos = videos.slice(0, Math.ceil(videos.length / 2));
  const column2Videos = videos.slice(Math.ceil(videos.length / 2));

  return (
    <div className="containerVideo">
      <div className="column" id="column1">
        {column1Videos.map((video, index) => (
          <div key={index}>
            <VideoPlayer videoId={video.id.videoId} />{" "}
            {/* Use the VideoPlayer component */}
            {/*  */}
          </div>
        ))}
      </div>
      <div className="column" id="column2">
        {column2Videos.map((video, index) => (
          <div key={index}>
            <VideoPlayer videoId={video.id.videoId} />{" "}
            {/* Use the VideoPlayer component */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Video;
