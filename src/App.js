import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { useEffect } from "react";
import Payment from "./Payment";
import Orders from "./Orders";

// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";
// import { useStateValue } from "./StateProvider";

// const promise = loadStripe();

function App() {
  // const [{}, dispatch] = useStateValue();
  useEffect(() => {
    // auth.onAuthStateChange((authuser) => {
    //   console.log("The USER IS", authuser);
    //   if (authuser) {
    //   } else {
    // dispatch({
    //   type: "SET_USER",
    //   user: null,
    // });
    //   }
    // });
  }, []);
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Header />} />
        </Routes>
        <Routes>
          <Route path="/Checkout" element={<Header />} />
          <Route path="" element={<Home />} />
        </Routes>

        <Routes>
          <Route path="/Checkout" element={<Checkout />} />
        </Routes>
        <Routes>
          <Route path="/payment" element={<Payment />} />
        </Routes>
        <Routes>
          <Route path="/orders" element={<Orders />} />
        </Routes>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
