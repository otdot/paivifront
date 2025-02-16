import { useEffect } from "react";
import "./App.css";
import Main from "./components/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import SignInUp from "./components/SignInUp";
import { useAppDispatch } from "./hooks/redux";
import { set_user } from "./state/userReducer";
import { setToken } from "./services/general";
import MyMarket from "./components/MyMarket";
import { initializeMarket } from "./state/marketReducer";
import Order from "./components/Order";
import Storage from "./components/Storage";
import ExpiredProducts from "./components/ExpiredProducts";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const initializeUser = () => {
      const loggedUser = window.localStorage.getItem("loggedUser");
      if (loggedUser) {
        const user = JSON.parse(loggedUser);
        setToken(user.token);
        dispatch(set_user(user.name));
        dispatch(initializeMarket());
      }
      console.log("No login credentials in localstorage");
      return;
    };

    initializeUser();
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="/signin" element={<SignInUp />} />
          <Route path="/market" element={<MyMarket />} />
          <Route path="/order" element={<Order />} />
          <Route path="/storage" element={<Storage />} />
          <Route path="/expiredproducts" element={<ExpiredProducts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
