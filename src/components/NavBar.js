import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>
    <a href="#home" key={1}>home</a>
    <a href="#about" key={2}>about</a>
    <a href="#projects" key={3}>projects</a>
  </nav>;
}

export default NavBar;

// In the NavBar component, there is an array with three strings representing each link on the page. For each of those strings, 
// create an <a> tag that looks like this:

// <a href="#home">home</a> 
// Make sure each <a> element also gets a unique key prop.