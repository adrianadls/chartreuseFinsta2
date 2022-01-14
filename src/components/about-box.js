import React, { Component } from "react";
import "./css/about-box.css";

const AboutBox = () => {
  return (
    <div class="col-7 offset-1 about-box">
      <ul class="list-group">
        <p class="list-group-item heading">About</p>
        <p class="list-group-item">Age: 417</p>
        <p class="list-group-item">Occupation: Color</p>
        <p class="list-group-item">
          Education: Academy of Arts for Existing Colors
        </p>
        <p class="list-group-item">Favorite Artist: Adele</p>
        <p class="list-group-item">
          Contact Info: Mix three parts green, two parts yellow
        </p>
        <p class="list-group-item">Relationship Status: Single</p>
        <p class="list-group-item">Places Lived: the World</p>
      </ul>
    </div>
  );
};

export default AboutBox;
