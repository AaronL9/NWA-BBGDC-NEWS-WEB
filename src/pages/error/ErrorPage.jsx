import "./ErrorPage.css";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="error">
      <div className="error-container">
        <h1>Oops! Page Not Found</h1>
        <p>
          It seems like the page you are looking for is not available.
          Don&apos;t worry, we&apos;re here to help you get back on track.
        </p>
        <br />
        <h2>Troubleshooting</h2>
        <p>
          Check the URL: Ensure that the web address URL is correctly spelled.
          Typos happen, and a small mistake could lead to this error.
        </p>
        <br />
        <p>
          Navigate to the Homepage: You can always start fresh by visiting our{" "}
          <Link to="/">https://{import.meta.env.VITE_ROOT_PATH}</Link>. From
          there, you can explore the available sections and find the content you
          are looking for.
        </p>
        <br />
        <p>
          We&apos;re here to assist you! Thank you for your understanding, and
          we apologize for any inconvenience. Happy browsing!
        </p>
      </div>
    </div>
  );
}
