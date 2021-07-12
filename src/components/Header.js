import React, { useState, useEffect } from "react";
// import menuLinksData from "./data/menu_links.json";

const Header = () => {
  const [menuLinksData, setMenuLinksData] = useState([]);

  const loadMenuLinksData = async() => {
    // query the API Gateway
    const resp = await fetch("https://p8f0z0fk8i.execute-api.eu-west-1.amazonaws.com/Production/menu_links");
    let jsonData = await resp.json();

    // assign response data to state variable
    setMenuLinksData(jsonData);
  }

  useEffect(() => {
    // load the menu links from the API Gateway
    loadMenuLinksData();
  }, []);

  return (
    <header id="intro">
      <article className="fullheight">
        <div className="hgroup">
          <h1>Landon Hotel</h1>
          <h2>West London</h2>
          <p>
            <a href="#welcome">
              <img
                src="https://landonhotel.com/images/misc/arrow.png"
                alt="down arrow"
              />
            </a>
          </p>
        </div>
      </article>

      <nav id="nav">
        <div className="navbar">
          <div className="brand">
            <a href="#welcome">
              Landon <span>Hotel</span>
            </a>
          </div>
          <ul>
            {menuLinksData.map((link) => {
              return (
                <li key={link.text}>
                  <a className={`icon ${link.class}`} href={link.href}>
                    <span>{link.text}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
