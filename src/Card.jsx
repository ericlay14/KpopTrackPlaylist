import React from "react";
import "./styles.css";

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let imgUrl;
    let songLink;
    let youtubeLink;

    switch (this.props.data["artist_name"]) {
      case "BTS":
        (imgUrl =
          "https://www.nme.com/wp-content/uploads/2021/05/bts-butterconceptteaser-2021.jpg"),
          (youtubeLink = "https://www.youtube.com/embed/WMweEpGlu_U");
        break;
      case "ATEEZ":
        (imgUrl = "https://images.alphacoders.com/117/1176454.png"),
          (youtubeLink = "https://www.youtube.com/embed/ukbr7xyPoRQ");
        break;
      case "ITZY":
        (imgUrl =
          "https://www.nme.com/wp-content/uploads/2021/09/itzy-crazy-in-love-jyp-entertainment-100921-e1631258154446.jpg"),
          (youtubeLink = "https://www.youtube.com/embed/pNfTK39k55U");
        break;
      case "Loona":
        (imgUrl =
          "https://www.pinkvilla.com/files/styles/amp_metadata_content_image/public/loona_main.jpg"),
          (youtubeLink = "https://www.youtube.com/embed/3e2fBJf09ss");
        break;
      case "ENHYPEN":
        (imgUrl =
          "https://www.nme.com/wp-content/uploads/2021/05/enhypen-border-transient-belift-lab-051121.jpg"),
          (youtubeLink = "https://www.youtube.com/embed/Fc7-Oe0tj5k");
        break;
      case "Woo!ah!":
        (imgUrl =
          "https://pbs.twimg.com/media/FH7pvqragAQTka0?format=jpg&name=4096x4096"),
          (youtubeLink = "https://www.youtube.com/embed/g5B6zCSMrcc");
        break;
      default:
        imgUrl = "";
        youtubeLink = "";
        break;
    }

    return (
      <div className="card">
        <h1>{this.props.data["artist_name"]}</h1>
        <img src={imgUrl} height="200"></img>
        <div>members: {this.props.data["members"]}</div>
        <div>debut date: {this.props.data["debut_date"]}</div>
        <div>song title: {this.props.data["song_title"]}</div>
        <iframe src={youtubeLink} height="200">
          {" "}
        </iframe>
      </div>
    );
  }
}

export default Card;
