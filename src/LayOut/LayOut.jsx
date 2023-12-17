
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

// Pages
import Home from "../pages/home/Home";
import Profile from "../pages/profile/Profile";
import ChatBox from "../pages/chatbox/ChatBox";
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";
import SearchPage from "../pages/searchPage/SearchPage";
import CommingSoon from "../pages/commingSoon/CommingSoon";
import CreatePage from "../pages/createPage/CreatePage";

// Components
import Nav from "../components/nav/Nav";
import LeftBar from "../components/leftbar/LeftBar";
import RightBar from "../components/rightbar/RightBar";
import PrivateRoute from "./PrivateRoute";

const Feed = () => {
  return (
    <>
      <Nav />
      <main>
        <LeftBar />
        <div className="container">
          <Outlet />
        </div>
        <RightBar />
      </main>
    </>
  );
};

const Layout = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/" element={<Feed />}>
            <Route index element={<Home />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/chatbox" element={<ChatBox />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/comming" element={<CommingSoon />} />
            {/* <Route path="/createpage" element={<CreatePage />} /> */}
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default Layout;

