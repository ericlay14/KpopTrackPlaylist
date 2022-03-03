import React from "react";
import "./styles.css";

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let imgUrl;

    switch (this.props.data["artist_name"]) {
      case "BTS":
        imgUrl =
          "https://www.nme.com/wp-content/uploads/2021/05/bts-butterconceptteaser-2021.jpg";
        break;
      case "ATEEZ":
        imgUrl = "https://images.alphacoders.com/117/1176454.png";
        break;
      case "ITZY":
        imgUrl =
          "https://www.nme.com/wp-content/uploads/2021/09/itzy-crazy-in-love-jyp-entertainment-100921-e1631258154446.jpg";
        break;
      case "Loona":
        imgUrl =
          "https://www.pinkvilla.com/files/styles/amp_metadata_content_image/public/loona_main.jpg";
        break;
      case "ENHYPEN":
        imgUrl =
          "https://www.nme.com/wp-content/uploads/2021/05/enhypen-border-transient-belift-lab-051121.jpg";
        break;
      case "Woo!ah!":
        imgUrl =
          "https://pbs.twimg.com/media/FH7pvqragAQTka0?format=jpg&name=4096x4096";
        break;
      default:
        imgUrl = "";
        break;
    }

    return (
      <div className="card">
        <h1>{this.props.data["artist_name"]}</h1>
        <img src={imgUrl} height="200"></img>
        <div>members: {this.props.data["members"]}</div>
        <div>debut date: {this.props.data["debut_date"]}</div>
        <div>song title: {this.props.data["song_title"]}</div>
      </div>
    );
  }
}

export default Card;
