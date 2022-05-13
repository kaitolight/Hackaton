import React from "react";
import { Link } from "react-router-dom";

import "./RedirectionButton.css";

function RedirectionButton() {
  return (
    <div className="redirection">
      <Link className="button-link" to="/search">
        <button type="button" className="button-redirection">
          Consulter les résultats pour votre ville
        </button>
      </Link>
    </div>
  );
}

export default RedirectionButton;
