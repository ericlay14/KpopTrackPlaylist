import React from "react";
import Card from "./Card.jsx";
import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showCards: false,
      artists: [],
    };
    // need to bind to actually use the buttons
    this.showCards = this.showCards.bind(this);
    this.hideCards = this.hideCards.bind(this);
  }

  // fetchs the information from the database for the artist
  componentDidMount() {
    fetch("http://localhost:3000/artists")
      .then((response) => response.json())
      .then((artists) => {
        this.setState({ artists });
      });
  }

  // sets the showcards in setState if true or false
  showCards() {
    this.setState({ showCards: true });
  }

  hideCards() {
    this.setState({ showCards: false });
  }

  // takes the array and organizes the data to get specefic pieces of data
  render() {
    const cards = this.state.artists.map((data, i) => {
      if (this.state.showCards) {
        return <Card data={data} key={`artist-card-${i}`} />;
      }
    });

    // button that checks if the button is showing or hiding cards
    const buttonShowHide = !this.state.showCards ? (
      <button onClick={this.showCards}>Show Cards</button>
    ) : (
      <button onClick={this.hideCards}>Hide Cards</button>
    );

    return (
      <div className="container">
        <h1>KPOP FAVORITE SONG CARD</h1>
        <h1>Artist Card</h1>
        {buttonShowHide}
        <div className="card-container">{cards}</div>
      </div>
    );
  }
}

export default App;
