import React from "react";

const name = "Rishabh Bhadani";
const d = new Date();
let year = d.getFullYear();

function Footer() {
  return (
    <div className="footl">
      <p>Created by {name} </p>
      <p>Copyright @ {year}</p>
    </div>
  );
}

export default Footer;
