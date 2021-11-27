import React from "react";
// import MaterialIcon from "react-google-material-icons";

function Header() {
  return (
    <div id="header">
      <header className="main-header">
        <div className="container">
          <div className="header-wrapper">
            <div className="logo-wrapper">
              <h1 className="logo">Logo.</h1>
            </div>
            <div className="menu-wrapper">
              <ul className="main-nav">
                <li
                  className="level-0 menu-item use-sofas dropdown"
                >
                  <a href="/collections/sofas" className="level-0">
                    Lorem
                  </a>
                </li>

                <li className="level-0 menu-item use-betten ">
                  <a href="/collections/betten" className="level-0">
                    Ipsum
                  </a>
                </li>

                <li className="level-0 menu-item use-tische ">
                  <a href="/collections/tische" className="level-0">
                    Dolor
                  </a>
                </li>

                <li className="level-0 menu-item use-stuhle-sessel ">
                  <a href="/collections/stuhle-sessel" className="level-0">
                    Sit
                  </a>
                </li>

                <li className="level-0 menu-item use-aufbewahrung ">
                  <a href="/collections/aufbewahrung" className="level-0">
                    Amet
                  </a>
                </li>

                <li className="level-0 menu-item use-sale ">
                  <a href="/collections/all" className="level-0">
                    Sale
                  </a>
                </li>
              </ul>
            </div>
            <div className="account-wrapper">
              <div className="header-wishlist">
                <i className="far fa-heart"></i>
              </div>
              <div className="header-cart">
                <span>
                  CART(<span>0</span>)
                </span>
              </div>
              <div className="header-account">
                <i className="far fa-user"></i>
              </div>
              <div className="header-search">
                {/* <MaterialIcon icon="search" size={19} /> */}
              </div>
            </div>
          </div>
        </div>
      </header>
      <div id="mob-header"></div>
      <div className="mob-header-overlay"></div>
    </div>
  );
}

export default Header;
