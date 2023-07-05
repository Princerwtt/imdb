import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAuth0 } from "@auth0/auth0-react";
import { faBars, faSearch } from "@fortawesome/fontawesome-free-solid";

function Index() {
  // Auth0 authentication hooks
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  return (
    <>
      <div className="navBar">
        <div className="logo">
          {/* Link to home */}
          <Link to="/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
              alt="logo-imdb"
              className="navBarIcon"
            />
          </Link>
        </div>
        <div className="hamburger-menu">
          {/* Hamburger menu icon */}
          <FontAwesomeIcon icon={faBars} />
          <span>Menu</span>
        </div>
        <div className="search-bar">
          <p className="all">All</p>
          {/* Search bar input */}
          <input
            className="search-bar-input"
            type="search"
            placeholder="search your fav movies"
          />
          {/* Search icon */}
          <FontAwesomeIcon
            icon={faSearch}
            style={{ color: "#000", fontSize: "2rem" }}
          />
        </div>
        <div className="log-name">
          {/* Display user name if authenticated */}
          {isAuthenticated && <div>{"Welcome " + user.name}</div>}
          {console.log(user)}
        </div>
        {isAuthenticated ? (
          <div>
            {/* Logout button */}
            <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
              Log Out
            </button>
          </div>
        ) : (
          <div>
            {/* Login button */}
            <button onClick={() => loginWithRedirect()}>Log In</button>
          </div>
        )}
      </div>
    </>
  );
}

export default Index;
