import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function InstaCard(props) {
    return(
        <div className="card">
        <img src={props.img} />
        <div className="card-body">
          <h2>{props.title}</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          <h5>{props.author}</h5>
        </div>
      </div>
    );

}

InstaCard.defaultProps = {
  img: 'https://think.kera.org/wp-content/uploads/2020/05/shutterstock_750703924-800x500.jpg',
  title: 'Default contentTitle',
  author: 'Default contentBody'
};