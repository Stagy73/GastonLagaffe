import axios from "axios";

function ComponentDidMount() {
  const self = this;
  axios
    .get(
      "https://www.rewardsaffiliates.com/members/marketingtools/prog-jackpot-feed-rss.aspx?aff_id=aff98516",
      {
        "Content-Type": "application/xml; charset=utf-8",
      }
    )
    .then(function (response) {
      self.setState({ authors: response.data });
    })
    .catch(function (error) {
      console.log(error);
    });

  return <div></div>;
}

export default ComponentDidMount;
