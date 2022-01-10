import React, { Component } from "react";
import pic from "./images/chartreusepfp.jpg";
import "./css/picture-box.css";

const PictureBox = () => {
  return (
    <div className="PictureBox">
      <div class="col-4 PictureBox">
        <img src={pic} class="pic" />
        <h3>Chartreuse</h3>
        <p class="list-group-item">
          "People may say what they'd like about the decay of Christianity but
          the religious system that produced green Chartreuse can never really
          die." - Some old dude named Hector
        </p>
      </div>
    </div>
  );
};

export default PictureBox;
