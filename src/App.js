import React from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import Plans from "./components/Plans/Plans";
import Programs from "./components/Hero/Programs/Programs";
import Testimonials from "./components/Testimonials/Testimonials";
import Members from './components/Members/Members';
import Join from "./components/Join/Join";
import Trainer from "./components/Trainer/Trainer";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <nav className="navba">
          <ul className="nav-links">
            <li>
              <NavLink
                activeClassName="active"
                className="nav-link"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName="active"
                className="nav-link"
                to="/programs"
              >
                Programs
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName="active"
                className="nav-link"
                to="/plans"
              >
                Plans
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName="active"
                className="nav-link"
                to="/testimonials"
              >
                Testimonials
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName="active"
                className="nav-link"
                to="/join"
              >
                Join
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName="active"
                className="nav-link"
                to="/members"
              >
                Members
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName="active"
                className="nav-link"
                to="/trainer"
              >
                Trainer
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/join" element={<Join />} />
          <Route path="/trainer" element={<Trainer />} />
          <Route path="/members" element={<Members />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
