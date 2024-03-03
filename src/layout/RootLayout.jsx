import { Link, Outlet, useLocation } from "react-router-dom";
import "./RootLayout.css";
import { ErrorBoundary } from "react-error-boundary";
import PropType from "prop-types";
import { useEffect } from "react";
import { useRef } from "react";

function Fallback({ error }) {
  return (
    <div className="error-boundary" role="alert">
      <Link to="/">Go back</Link>
      <h1>Oops! {error}</h1>
      <p>
        We&apos;re sorry, but it looks like we&apos;re having difficulty getting
        the information you asked for. Don&apos;t worry, we&apos;re here to
        guide you through it and help you find what you need.
      </p>
      <br />
      <h2>Why This Might Be Happening</h2>
      <ul>
        <li>
          Server Checkup: Our website is currently undergoing some
          behind-the-scenes work. This might mean a short break for our servers.
        </li>
        <li>
          Internet Connection Issues: Your internet might be acting up or going
          through a rough patch.
        </li>
      </ul>
      <br />
      <h2>What You Can Do</h2>
      <ul>
        <li>
          Give it Another Go: Sometimes, a quick page refresh does wonders.
          Click the refresh button on your browser.
        </li>
        <li>
          Internet Connection Check: Make sure you have a stable internet
          connection.
        </li>
        <li>
          Try Again Later: If things still aren&apos;t working, it could be a
          short-lived issue. Come back in a bit and see if the problem resolves
          itself.
        </li>
      </ul>
    </div>
  );
}

Fallback.propTypes = {
  error: PropType.object,
};

export default function RootLayout() {
  const location = useLocation();
  const errorBoundaryRef = useRef(null);

  useEffect(() => {
    if (errorBoundaryRef.current) {
      errorBoundaryRef.current.resetErrorBoundary();
    }
  }, [location.pathname]);
  return (
    <>
      <header className="root-header">
        <h1 className="root-header__title">
          <Link to="/">
            Neighborhood Watch <span>|</span> <span>News</span>
          </Link>
        </h1>
        <div className="root-header__banner">
          <img src="/ph_seal_pangasinan_dagupan.png" alt="barangay hall logo" />
          <p>Barangay Bonuan Gueset</p>
        </div>
      </header>
      <ErrorBoundary ref={errorBoundaryRef} FallbackComponent={Fallback}>
        <main>
          <Outlet />
        </main>
      </ErrorBoundary>
      <footer>
        <div className="footer-content">
          <div className="footer-text">
            <p>© 2024 Neighborhood Watch.</p>
            <p>All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
