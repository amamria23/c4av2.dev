import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./header.css";
const Header = () => {
  return (
    <div>
      <header className="hide-when-mobile bingo">
        <Link to="/">
          <h1>Courses 4 Arab</h1>
        </Link>
        <ul className="flex">
          <li className="main-list">
            <NavLink className="main-link" to="/html">
              HTML
            </NavLink>
            <ul className="sub-ul">
              <li>
                <a href="/a">Full Course</a>
              </li>
              <li>
                <a href="/b">Crash Course</a>
              </li>
              <li>
                <a href="/c">learn in 1h</a>
              </li>
            </ul>
          </li>
          <li className="main-list">
            <NavLink className="main-link" to="/css">
              CSS
            </NavLink>
            <ul className="sub-ul">
              <li>
                <a href="/v">Full Course</a>
              </li>
              <li>
                <a href="/l">CSS Examples</a>
              </li>
              <li className="mini-projects">
                <a href="/g">mini projects&nbsp; + </a>
                <ul className="sub-sub-ul">
                  <li>
                    <a href="/n">project 1</a>
                  </li>
                  <li>
                    <a href="/o">project 2</a>
                  </li>
                  <li>
                    <a href="/p">project 3</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="main-list">
            <NavLink className="main-link" to="/javascript">
              JavaScript
            </NavLink>
            <ul className="sub-ul sub-of-js">
              <li>
                <a href="/k">coming soon🔥</a>
              </li>
            </ul>
          </li>
        </ul>
      </header>
      <header className="show-when-mobile">
        <h1>Courses 4 Arab</h1>
        <label className="absolute" htmlFor="burger">
          <i className="fas fa-bars" />
        </label>
        <input id="burger" type="checkbox" />
        <div className="show-on-click">
          <div className="main-div">
            <label htmlFor="html">
              HTML <i className="fas fa-plus" />
            </label>
            <input id="html" type="checkbox" />
            <ul className="sub-div">
              <li>
                <a href="/f">Full Course</a>
              </li>
              <li>
                <a href="/y">Crash Course</a>
              </li>
              <li>
                <a href="/l">learn in 1h</a>
              </li>
            </ul>
          </div>
          <div className="main-div">
            <label htmlFor="css">
              CSS <i className="fas fa-plus" />
            </label>
            <input id="css" type="checkbox" />
            <ul className="sub-div">
              <li>
                <a href="/e">Full Course</a>
              </li>
              <li>
                <a href="/h">CSS Examples</a>
              </li>
              <li>
                <label className="mini-projects" htmlFor="mini">
                  mini projects <i className="fas fa-plus" />
                </label>
                <input id="mini" type="checkbox" />
                <ul className="sub-sub-div">
                  <li>
                    <a href="/il">project 1</a>
                  </li>
                  <li>
                    <a href="/z">project 2</a>
                  </li>
                  <li>
                    <a href="/m">project 3</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="main-div">
            <label htmlFor="js">
              JavaScript <i className="fas fa-plus" />
            </label>
            <input id="js" type="checkbox" />
            <ul className="sub-div">
              <li>
                <a href="/kk">coming soon🔥</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
