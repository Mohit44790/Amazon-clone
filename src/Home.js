import React from "react";

import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div>
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/71SnvcmmGlL._SX3000_.jpg"
          alt="logo"
        />

        {/* first row */}
        <div className="home__row">
          <Product
            id="12321341"
            title="LG 32 L Convection Microwave Oven (MC3286BRUM, Black)"
            price={17140.0}
            rating={5}
            image="https://m.media-amazon.com/images/I/91fSgD70z0L._SX679_.jpg"
          />
          <Product
            id="49538092"
            title="Godrej 30 L Convection Microwave Oven (GME 530 CR1 SZ, Red Dahlia)"
            price={14890.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/61Ik3wKlQXS._SX679_.jpg"
          />
          <Product
            id="49538093"
            title="Panasonic 23L Convection Microwave Oven(NN-CT353BFDG,Black Mirror, 360° Heat Wrap, Magic Grill)"
            price={10790.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/31Oe+9z1KIL._SX342_SY445_.jpg"
          />
          <Product
            id="49538095"
            title="LG 28 L Convection Microwave Oven (MC2846BV, Black)"
            price={23933.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/511tFbakWVL._SX679_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
          <Product
            id="3254354335"
            title="Oppo A78 5G (Glowing Blue, 8GB RAM, 128 Storage) | 5000 mAh Battery with 33W SUPERVOOC Charger| 50MP"
            price={18999}
            rating={4}
            image="https://m.media-amazon.com/images/I/41yx-OTfNwL._AC_SR400,600_.jpg"
          />
          <Product
            id="3254354341"
            title="Oppo A78 5G (Glowing Black, 8GB RAM, 128 Storage) | 5000 mAh"
            price={59899}
            rating={4}
            image="https://m.media-amazon.com/images/I/41qL5C8BPmL._AC_SR400,600_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
