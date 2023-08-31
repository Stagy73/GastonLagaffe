import React, { useState, useEffect } from "react";

function FeedPosts() {
  const [feedData, setFeedData] = useState([]);

  useEffect(() => {
    const rssURL =
      "https://www.rewardsaffiliates.com/members/marketingtools/prog-jackpot-feed-rss.aspx?aff_id=aff98516";

    fetch(rssURL)
      .then((response) => response.text())
      .then((data) => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(data, "application/xml");
        const entries = xmlDoc.querySelectorAll("item");

        const parsedData = Array.from(entries).map((entry) => {
          return {
            title: entry.querySelector("title").textContent,
            link: entry.querySelector("link").textContent,
            description: entry.querySelector("description").textContent,
            published: entry.querySelector("pubDate").textContent,
          };
        });

        setFeedData(parsedData);
      })
      .catch((error) => console.error("Error fetching RSS feed:", error));
  }, []);

  return (
    <div>
      {feedData.map((entry, index) => (
        <div key={index}>
          <h2>{entry.title}</h2>
          <p>{entry.published}</p>
          <p>{entry.description}</p>
          <a href={entry.link}>Read more</a>
        </div>
      ))}
    </div>
  );
}

export default FeedPosts;
