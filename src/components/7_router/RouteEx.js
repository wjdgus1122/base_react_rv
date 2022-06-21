import {
  BrowserRouter,
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Home } from "./router/Home";
import { RouteFooter } from "./router/RouteFooter";
import { RouteHeader } from "./router/RouteHeader";
import { Sub_1 } from "./router/Sub_1";
import { Sub_2 } from "./router/Sub_2";

export const RouteEx = () => {
  return (
    <>
      <Router>
        <RouteHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sub_1" element={<Sub_1 />} />
          <Route path="/sub_2" element={<Sub_2 />} />
        </Routes>
        <RouteFooter />
      </Router>
    </>
  );
};
