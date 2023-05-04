import "./App.css";
import Hero from "./components/Hero/Hero";
import Plans from "./components/Plans/Plans";
import Programs from "./components/Hero/Programs/Programs";
import Testimonials from "./components/Testimonials/Testimonials";
import Join from "./components/Join/Join";
// import Footer from './components/Footer/Footer';
import { NavLink, Routes, Route, BrowserRouter } from "react-router-dom";
import Trainer from "./components/Trainer/Trainer";
function App() {
  return (
    <>
      <BrowserRouter>
        <nav className="navba">
          <ul
            style={{
              display: "flex",
              gap: "5%",
              listStyle: "none",
              marginTop: "10 px",
            }}
          >
            <li>
              <NavLink
                style={({ isActive }) => (isActive ? { color: "red" } : {})}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                style={({ isActive }) => (isActive ? { color: "red" } : {})}
                to="/programs"
              >
                Programs
              </NavLink>
            </li>
            <li>
              <NavLink
                style={({ isActive }) => (isActive ? { color: "red" } : {})}
                to="/plans"
              >
                Plans
              </NavLink>
            </li>
            <li>
              <NavLink
                style={({ isActive }) => (isActive ? { color: "red" } : {})}
                to="/testimonial"
              >
                Testimonials
              </NavLink>
            </li>
            <li>
              <NavLink
                style={({ isActive }) => (isActive ? { color: "red" } : {})}
                to="/join"
              >
                Join
              </NavLink>
            </li>
            <li>
              <NavLink
                style={({ isActive }) => (isActive ? { color: "red" } : {})}
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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;