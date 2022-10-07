import React from "react";
import "./service.css";
import Card from "./Card";

function Service() {
  return (
    <section id="service">
      <h3 className="headd">PROJECTS </h3>
      <div className="pro-center">
        <Card image="p1.png" textt="Mi.com clone project" />
        <Card image="p2.png" textt="TextUtil application" />
        <Card image="p3.png" textt="uttrakhand travel guide" />
        <Card image="p4.png" textt="Chat application" />

      </div>
    </section>
  );
}

export default Service;
