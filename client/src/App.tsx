import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts, getTheme } from "./actions";
import "./App.css";
import Main from "./components/Main";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import Help from "./components/Help";
import About from "./components/About";
import ProductSite from './components/ProductSite'
import LogIn from "./components/LogIn";
import Footer from './components/Footer'
import rngColor from "./helpers/rngColor";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const theme = useSelector((theme: any) => theme.getTheme);
  const dispatch = useDispatch();

  useEffect(() => {
    const callBackendApi = async () => {
      const response = await fetch("/products");
      const body = await response.json();

      if (response.status !== 200) {
        throw Error(body.status);
      }

      return body;
    };

    if (isLoading) {
      dispatch(getTheme(rngColor()));
      callBackendApi()
        .then(res => {
          dispatch(getAllPosts(res));
        })
        .catch(err => console.log(err));
      return setIsLoading(false);
    }
  }, [dispatch, isLoading]);

  return (
    <Router>
      <div style={{backgroundColor: theme.primary, height: "100%" }}>
        <Navbar />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/About" component={About} />
          <Route path="/Help" component={Help} />
          <Route path="/LogIn" component={LogIn} />
          <Route path="/Product" component={Main} />
          <Route path="/:product_id" component={ProductSite} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};
export default App;
