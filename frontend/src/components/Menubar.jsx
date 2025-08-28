import { Link, useNavigate } from "react-router-dom";
import { AppContext, initialInvoiceData } from "../context/AppContext.jsx";
import { useContext, useEffect, useRef, useState } from "react";
import Logo from "./Logo.jsx";
import "./Menubar.css";
import {
  SignedIn,
  SignedOut,
  useClerk,
  UserButton,
  useUser,
} from "@clerk/clerk-react";

const Menubar = () => {
  const { setInvoiceData, setSelectedTemplate, setInvoiceTitle } =
    useContext(AppContext);
  const navigate = useNavigate();
  const { openSignIn } = useClerk();
  const handleGenerateClick = () => {
    // Reset context
    setInvoiceData(initialInvoiceData);
    setSelectedTemplate("template1");
    setInvoiceTitle("Create Invoice");

    navigate("/generate");
  };

  const openLogin = () => {
    openSignIn({});
  };

  // Hide-on-scroll navbar behavior
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const y = window.scrollY || 0;
          const delta = y - lastY.current;
          const navOpen = document
            .getElementById("navbarNav")
            ?.classList.contains("show");
          const nearTop = y < 10;

          if (navOpen || nearTop) {
            setHidden(false);
          } else if (delta > 5) {
            setHidden(true);
          } else if (delta < -5) {
            setHidden(false);
          }

          lastY.current = y;
          ticking.current = false;
        });
        ticking.current = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark bg-dark shadow-sm sticky-top navbar-animate ${
        hidden ? "navbar-hidden" : ""
      }`}
    >
      <div className="container py-2">
        {/* Brand logo and name */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <Logo />
          <span
            className="fw-bolder fs-4 mx-3"
            style={{ letterSpacing: "-0.5px", color: "var(--dark-accent)" }}
          >
            InvoiceX
          </span>
        </Link>
        {/* Navbar toggler for smaller screens */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* Navbar links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <Link className="nav-link fw-medium" to="/">
                Home
              </Link>
            </li>
            <SignedIn>
              <li className="nav-item">
                <Link className="nav-link fw-medium" to="/dashboard">
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link fw-medium"
                  onClick={handleGenerateClick}
                >
                  Generate
                </button>
              </li>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
                <button
                  className="btn btn-outline-accent rounded-pill px-4 text-white glow-effect"
                  onClick={openLogin}
                >
                  Login
                </button>
              </li>
            </SignedOut>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Menubar;
