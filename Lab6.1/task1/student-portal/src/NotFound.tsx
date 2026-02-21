import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <h2>404 — Page Not Found</h2>
      <Link to="/">Go back to Home</Link>
    </>
  );
}

export default NotFound;