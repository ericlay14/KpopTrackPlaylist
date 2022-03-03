import React from "react";
import "./styles.css";

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let imgUrl;
    let youtubeLink;
    let youtubePerformance;

    switch (this.props.data["artist_name"]) {
      case "BTS":
        (imgUrl =
          "https://www.nme.com/wp-content/uploads/2021/05/bts-butterconceptteaser-2021.jpg"),
          (youtubeLink = "https://www.youtube.com/embed/WMweEpGlu_U"),
          (youtubePerformance = "https://www.youtube.com/embed/DbXMjAYSa68");
        break;
      case "ATEEZ":
        (imgUrl = "https://images.alphacoders.com/117/1176454.png"),
          (youtubeLink = "https://www.youtube.com/embed/ukbr7xyPoRQ"),
          (youtubePerformance = "https://www.youtube.com/embed/mLraat4lxNE");
        break;
      case "ITZY":
        (imgUrl =
          "https://www.nme.com/wp-content/uploads/2021/09/itzy-crazy-in-love-jyp-entertainment-100921-e1631258154446.jpg"),
          (youtubeLink = "https://www.youtube.com/embed/pNfTK39k55U"),
          (youtubePerformance = "https://www.youtube.com/embed/2xU2PyI-sEI");
        break;
      case "Loona":
        (imgUrl =
          "https://www.pinkvilla.com/files/styles/amp_metadata_content_image/public/loona_main.jpg"),
          (youtubeLink = "https://www.youtube.com/embed/3e2fBJf09ss"),
          (youtubePerformance = "https://www.youtube.com/embed/OgyZIOa9sLQ");
        break;
      case "ENHYPEN":
        (imgUrl =
          "https://www.nme.com/wp-content/uploads/2021/05/enhypen-border-transient-belift-lab-051121.jpg"),
          (youtubeLink = "https://www.youtube.com/embed/Fc7-Oe0tj5k"),
          (youtubePerformance = "https://www.youtube.com/embed/rnGlLpOtCnE");
        break;
      case "Woo!ah!":
        (imgUrl =
          "https://pbs.twimg.com/media/FH7pvqragAQTka0?format=jpg&name=4096x4096"),
          (youtubeLink = "https://www.youtube.com/embed/g5B6zCSMrcc"),
          (youtubePerformance = "https://www.youtube.com/embed/CWnz9KiQOYE");
        break;
      default:
        imgUrl = "";
        youtubeLink = "";
        youtubePerformance = "";
        break;
    }

    return (
      <div className="card">
        <h1>{this.props.data["artist_name"]}</h1>
        <img src={imgUrl} height="250"></img>
        <div>
          Members: {this.props.data["members"].map((member) => member + ",")}
        </div>
        <div>Debut Date: {this.props.data["debut_date"]}</div>
        <div>Song Title: {this.props.data["song_title"]}</div>
        <h3>Music Video</h3>
        <div align="center">
          <iframe src={youtubeLink} height="300" width="400">
            {" "}
          </iframe>
        </div>
        <h3>Performance Video</h3>
        <div align="center">
          <iframe src={youtubePerformance} height="300" width="400">
            {" "}
          </iframe>
        </div>
      </div>
    );
  }
}

export default Card;
