import React from "react";
import { Route, BrowserRouter} from "react-router-dom";
import App from "./App";
import Contact from "./contact/contact";
import Navbar from "./Navbar/navbar";
// import Current from "./currentOpening/Current";
import Carrer from "./Carrer/Carrer";
import Apply from "./Apply/Apply";
const Router = () => {
  return (
    <BrowserRouter>
    <Navbar/>

        <Route exact path="/" component={App} />
        {/* <Route path="/current" component={Current} /> */}
        <Route path="/carrer" component={Carrer} />
        <Route path="/apply" component={Apply} />

      <Contact/>
    </BrowserRouter>
  );
};

export default Router;
