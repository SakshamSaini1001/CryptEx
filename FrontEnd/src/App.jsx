import "./App.css";
import Navbar from "./page/Navbar/Navbar";
import Home from "./page/Home/home";
import { Routes, Route } from "react-router-dom";

import Portfolio from "./page/Portfolio/portfolio";
import Activity from "./page/Activity/Activity";
import Withdrawal from "./page/Withdrawal/Withdrawal";
import PaymentDetails from "./page/Payment Details/PaymentDetails";
import StockDetails from "./page/Stock Details/StockDetails";
import WatchList from "./page/WatchList/WatchList";
import Profile from "./page/Profile/Profile";
import SearchCoin from "./page/Search/Search";
import NotFound from "./page/NotFound/NotFound";
import Wallet from "./page/Wallet/Wallet";
import Auth from "./page/Auth/Auth.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUser } from "./page/State/Auth/Action.js";

function App() {
  const { auth } = useSelector((store) => store);
  const dispatch = useDispatch();

  useEffect(() => {
    if (auth.jwt) {
      dispatch(getUser(auth.jwt));
    } else {
      const token = localStorage.getItem("jwt");
      if (token) {
        dispatch(getUser(token));
      }
    }
  }, [auth.jwt, dispatch]);

  return (
    <>
      {auth.jwt ? (
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/activity" element={<Activity />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/withdrawal" element={<Withdrawal />} />
            <Route path="/payment-details" element={<PaymentDetails />} />
            <Route path="/home/market/:id" element={<StockDetails />} />
            <Route path="/market/:id" element={<StockDetails />} />
            <Route path="/watchlist" element={<WatchList />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/search" element={<SearchCoin />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </div>
      ) : (
        <Auth />
      )}
    </>
  );
}

export default App;
