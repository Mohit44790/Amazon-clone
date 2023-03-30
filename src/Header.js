import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket, user }] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      // auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <img
          className="header__searchIcon"
          src="https://uxwing.com/wp-content/themes/uxwing/download/user-interface/search-icon.png"
          alt=""
        />
      </div>

      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div Onclick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne">
              Hello {!user ? "Guest" : user.email}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to="/orders">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <Link to="/Checkout">
          <div className="header__optionBasket">
            <img
              className="header__optionBasket"
              src="https://www.iconpacks.net/icons/2/free-add-to-basket-icon-3042-thumb.png"
              alt=""
            />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.lenght}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
