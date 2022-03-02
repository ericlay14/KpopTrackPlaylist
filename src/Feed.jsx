import React from "react";
import "./styles.css";

const Feed = () => (
  <div>
    <h1>Artist Card</h1>
    <div class="row">
      <div class="column">
        <div class="card">
          BTS
          <img src="bts_butter.png" alt="BTS Butter"></img>
        </div>
      </div>
      <div class="column">
        <div class="card">ITZY</div>
      </div>
      <div class="column">
        <div class="card">Loona</div>
      </div>
      <div class="column">
        <div class="card">ENHYPHEN</div>
      </div>
      <div class="column">
        <div class="card">Woo!ah!</div>
      </div>
      <div class="column">
        <div class="card">ATEEZ</div>
      </div>
    </div>
  </div>
);

export default Feed;
