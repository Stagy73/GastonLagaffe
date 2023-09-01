// cypress/integration/api.spec.js
const apiKey = import.meta.env.VITE_API_KEY;

describe("API Tests", () => {
  it("should fetch videos from the YouTube API", () => {
    cy.request(
      "GET",
      `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=UCrcptvCXVgLlieu9pNe0Nqg&q=Gaston%20Lagaffe&order=date&part=snippet&type=video&maxResults=10`
    ).then((response) => {
      expect(response.status).to.eq(200); // Check if the request was successful
      expect(response.body.items).to.be.an("array"); // Check if the response contains an array of items
      expect(response.body.items).to.have.length(10); // Check if there are 10 videos
    });
  });
});
