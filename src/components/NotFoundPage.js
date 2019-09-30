import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div>
      <h2>Page not found</h2>
      <Link to="/" className="btn btn-primary">
        Return home
      </Link>
    </div>
  );
}

export default NotFoundPage;
